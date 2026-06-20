/* ============================================================
   VILLA FRANCA – Seating Plan (dynamic, fetched from backend)
   Replaces the static seatplan image with a live-rendered SVG
   floor plan: GET /api/floorplan/{restaurantId}.
   Supports switching between restaurant locations and, within
   each location, between floors. No database ids are involved —
   the backend response is purely display data.
   ============================================================ */
(function () {
  "use strict";

  var GUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  var els = {};
  var state = { data: null, locIndex: 0, floorIndex: 0 };

  // Visual sizes mirror the admin floor-plan editor (Tables.cshtml) so saved
  // table positions line up the same way they do there.
  var SHAPE_SIZE = {
    square:    { w: 52,  h: 52  },
    round:     { w: 52,  h: 52  },
    rectangle: { w: 82,  h: 50  },
    bar:       { w: 175, h: 40  }
  };

  function svgEl(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) el.setAttribute(k, attrs[k]);
    }
    return el;
  }

  function showState(name) {
    els.loading.style.display = name === "loading" ? "flex" : "none";
    els.error.style.display   = name === "error"   ? "flex" : "none";
    els.svg.style.display     = name === "plan"    ? "block" : "none";
    els.legend.style.display  = name === "plan"    ? "flex" : "none";
    els.controls.style.display = name === "plan" ? "flex" : "none";
  }

  function clearChildren(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  // ── Location switcher ───────────────────────────────────────────────────
  function renderLocationSwitcher() {
    var locations = state.data.locations;
    clearChildren(els.locations);

    if (locations.length <= 1) {
      els.locations.style.display = "none";
      return;
    }
    els.locations.style.display = "flex";

    locations.forEach(function (loc, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "seatplan-loc-btn" + (idx === state.locIndex ? " active" : "");
      btn.textContent = loc.name;
      btn.addEventListener("click", function () { selectLocation(idx); });
      els.locations.appendChild(btn);
    });
  }

  function selectLocation(idx) {
    state.locIndex = idx;
    Array.prototype.forEach.call(els.locations.children, function (btn, i) {
      btn.classList.toggle("active", i === idx);
    });
    renderFloorSwitcher();
    selectFloor(0);
  }

  // ── Floor switcher ───────────────────────────────────────────────────────
  function renderFloorSwitcher() {
    var floors = state.data.locations[state.locIndex].floors;
    clearChildren(els.floors);

    if (floors.length <= 1) {
      els.floors.style.display = "none";
      return;
    }
    els.floors.style.display = "flex";

    floors.forEach(function (floor, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "seatplan-floor-btn" + (idx === state.floorIndex ? " active" : "");
      btn.textContent = floor.floorLabel;
      btn.addEventListener("click", function () { selectFloor(idx); });
      els.floors.appendChild(btn);
    });
  }

  function selectFloor(idx) {
    state.floorIndex = idx;
    Array.prototype.forEach.call(els.floors.children, function (btn, i) {
      btn.classList.toggle("active", i === idx);
    });
    renderPlan(state.data.locations[state.locIndex].floors[idx]);
  }

  // ── Plan rendering ───────────────────────────────────────────────────────
  function renderPlan(floor) {
    clearChildren(els.svg);

    var maxX = 0, maxY = 0;
    (floor.areas || []).forEach(function (area) {
      var z = area.zone;
      maxX = Math.max(maxX, z.x + z.w);
      maxY = Math.max(maxY, z.y + z.h);
      (area.tables || []).forEach(function (t) {
        var size = SHAPE_SIZE[t.shape] || SHAPE_SIZE.square;
        maxX = Math.max(maxX, z.x + t.x + size.w);
        maxY = Math.max(maxY, z.y + t.y + size.h);
      });
    });

    var pad = 24;
    els.svg.setAttribute("viewBox", "-" + pad + " -" + pad + " " + (maxX + pad * 2) + " " + (maxY + pad * 2));

    (floor.areas || []).forEach(function (area) {
      var z = area.zone;
      var isOutdoor = area.areaType === "outdoor";

      els.svg.appendChild(svgEl("rect", {
        class: "seatplan-zone seatplan-zone--" + (isOutdoor ? "outdoor" : "indoor"),
        x: z.x, y: z.y, width: z.w, height: z.h, rx: 8
      }));

      var label = svgEl("text", {
        class: "seatplan-zone-label seatplan-zone-label--" + (isOutdoor ? "outdoor" : "indoor"),
        x: z.x + 14, y: z.y + 22
      });
      label.textContent = area.name;
      els.svg.appendChild(label);

      (area.tables || []).forEach(function (t) {
        renderTable(z.x + t.x, z.y + t.y, t);
      });
    });

    showState("plan");
  }

  function renderTable(gx, gy, t) {
    if (t.shape === "bar") {
      var size = SHAPE_SIZE.bar;
      var g = svgEl("g", { class: "seatplan-bar seatplan-table" });
      g.appendChild(svgEl("rect", { x: gx, y: gy, width: size.w, height: size.h, rx: 6 }));
      var lbl = svgEl("text", {
        class: "seatplan-bar-label", x: gx + size.w / 2, y: gy + size.h / 2 + 4, "text-anchor": "middle"
      });
      lbl.textContent = "Bar";
      g.appendChild(lbl);
      els.svg.appendChild(g);
      return;
    }

    var size = SHAPE_SIZE[t.shape] || SHAPE_SIZE.square;
    var g = svgEl("g", { class: "seatplan-table" });

    if (t.shape === "round") {
      g.appendChild(svgEl("circle", { cx: gx + size.w / 2, cy: gy + size.h / 2, r: size.w / 2 }));
    } else {
      g.appendChild(svgEl("rect", { x: gx, y: gy, width: size.w, height: size.h, rx: 5 }));
    }

    var numEl = svgEl("text", {
      class: "seatplan-table-num", x: gx + size.w / 2, y: gy + size.h / 2 - 2, "text-anchor": "middle"
    });
    numEl.textContent = t.tableNumber;
    g.appendChild(numEl);

    var capEl = svgEl("text", {
      class: "seatplan-table-cap", x: gx + size.w / 2, y: gy + size.h / 2 + 12, "text-anchor": "middle"
    });
    capEl.textContent = t.maxCapacity + "p";
    g.appendChild(capEl);

    els.svg.appendChild(g);
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  async function init() {
    els.loading   = document.getElementById("seatplanLoading");
    els.error     = document.getElementById("seatplanError");
    els.svg       = document.getElementById("seatplanSvg");
    els.legend    = document.getElementById("seatplanLegend");
    els.controls  = document.getElementById("seatplanControls");
    els.locations = document.getElementById("seatplanLocations");
    els.floors    = document.getElementById("seatplanFloors");

    if (!els.svg) return; // section not present on this page

    var cfg = window.VILLA_FRANCA_CONFIG || {};
    if (!cfg.apiBaseUrl || !GUID_RE.test(cfg.restaurantId || "")) {
      console.error("VILLA_FRANCA_CONFIG is missing or still has placeholder values — seating plan cannot be loaded.");
      showState("error");
      return;
    }

    showState("loading");

    try {
      var response = await fetch(cfg.apiBaseUrl + "/api/floorplan/" + cfg.restaurantId);
      if (!response.ok) { showState("error"); return; }

      var data = await response.json();
      if (!data || !Array.isArray(data.locations) || data.locations.length === 0) {
        showState("error");
        return;
      }

      state.data = data;
      renderLocationSwitcher();
      selectLocation(0);
    } catch (networkErr) {
      console.error("Seating plan request failed:", networkErr);
      showState("error");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
