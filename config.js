/* ============================================================
   VILLA FRANCA – Shared site configuration
   Used by both menu.js (GET /api/menu/{restaurantId}) and
   script.js (POST /api/reservations) so the API URL and the
   restaurant ID only need to be updated in one place.
   ============================================================ */
window.VILLA_FRANCA_CONFIG = {
  // TODO: point this at the deployed API once it's live (no trailing slash).
  // Local ASP.NET dev server default from launchSettings.json:
  apiBaseUrl: 'https://hostbuzz.app',

  // TODO: replace with Villa Franca's real restaurantId GUID from HostBuzz
  // (Restaurants table / owner dashboard). Reservations cannot be submitted
  // until this is a real GUID — script.js checks the format and blocks
  // submission with a clear console warning if it's still a placeholder.
  restaurantId: '0c536df0-21fd-495d-dca6-08decc548aee',

  // Optional: only needed if this restaurant has more than one location and
  // this particular site should always book a specific one. Leave null to
  // let the backend fall back to the restaurant's first active location.
  restaurantLocationId: null
};
