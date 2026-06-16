/* ============================================================
   VILLA FRANCA – Shared site configuration
   Used by both menu.js (GET /api/menu/{restaurantId}) and
   script.js (POST /api/reservations) so the API URL and the
   restaurant ID only need to be updated in one place.
   ============================================================ */
window.VILLA_FRANCA_CONFIG = {
  // TODO: point this at the deployed API once it's live (no trailing slash).
  // Local ASP.NET dev server default from launchSettings.json:
  apiBaseUrl: 'https://localhost:7121',

  // TODO: replace with Villa Franca's real restaurantId GUID.
  // Placeholder until the restaurant record exists / its ID is known.
  restaurantId: 'REPLACE_WITH_RESTAURANT_ID'
};
