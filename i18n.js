/* ============================================================
   VILLA FRANCA – i18n (Deutsch / English)
   Default language: German (de). Preference persisted in
   localStorage so it survives across page navigation & visits.
   ============================================================ */
(function () {
  "use strict";

  var LANG_KEY = "villafranca_lang";
  var DEFAULT_LANG = "de";

  var translations = {
    en: {
      /* NAV */
      "nav.about": "About",
      "nav.reserve": "Reserve",
      "nav.seating": "Seating",
      "nav.menu": "Menu",
      "nav.contact": "Contact",

      /* TITLES */
      "title.home": "Ristorante Villa Franca – Berlin",
      "title.menu": "Menu – Ristorante Villa Franca",

      /* HERO */
      "hero.title": "<em>Italian</em> Elegance<br>in the Heart of Berlin",
      "hero.sub": "Private celebrations, fine dining & unforgettable evenings.<br>For 30 to 100 guests.",
      "hero.cta.reserve": "Reserve a Table",
      "hero.cta.menu": "View Menu",
      "hero.scroll": "Scroll",

      /* STATS */
      "stats.years": "Years of Excellence",
      "stats.guests": "Guests Served",
      "stats.dishes": "Signature Dishes",
      "stats.wines": "Wine Labels",

      /* ABOUT */
      "about.since": "Since",
      "about.eyebrow": "Our Story",
      "about.title": "A Symphony of<br><em>Italian Elegance</em>",
      "about.body1": "Step into Ristorante Villa Franca, where fine cuisine meets the art of Italian cooking. In an ambience of timeless elegance, we invite you to savour refined flavours crafted with passion and perfection.",
      "about.body2": "Our menu offers a careful selection of classic and modern Italian delicacies celebrating the finest ingredients and artisanal skill — from handmade pasta to the perfect wood-fired pizza.",
      "about.feature.pizza": "Wood-fired Pizza",
      "about.feature.pasta": "Fresh Daily Pasta",
      "about.feature.wine": "Curated Wine List",
      "about.feature.events": "Private Events",
      "about.cta": "Explore the Menu",

      /* RESERVATION */
      "reservation.eyebrow": "Book Your Table",
      "reservation.title": "Reserve Your <em>Experience</em>",
      "reservation.hours": "<i class=\"fa-regular fa-clock\"></i> Mon–Fri: 16:00–24:00 &nbsp;|&nbsp; <i class=\"fa-regular fa-clock\"></i> Weekends & Holidays: 12:00–24:00",
      "form.label.name": "Full Name <span class=\"req\">*</span>",
      "form.placeholder.name": "Your name",
      "form.label.email": "Email <span class=\"req\">*</span>",
      "form.placeholder.email": "your@email.com",
      "form.label.phone": "Phone <span class=\"req\">*</span>",
      "form.label.date": "Date <span class=\"req\">*</span>",
      "form.label.time": "Time <span class=\"req\">*</span>",
      "form.select.time": "— Select time —",
      "form.label.guests": "Guests <span class=\"req\">*</span>",
      "form.label.occasion": "Occasion",
      "pill.none": "No special occasion",
      "pill.birthday": "Birthday",
      "pill.anniversary": "Anniversary",
      "pill.business": "Business dinner",
      "pill.engagement": "Engagement",
      "pill.conference": "Conference",
      "form.label.allergies": "Dietary requirements / Allergies",
      "form.placeholder.allergies": "Vegetarian, gluten-free, nut allergy…",
      "form.label.message": "Special requests",
      "form.placeholder.message": "Decoration, high chair, seating preference…",
      "form.submit": "<i class=\"fa-regular fa-calendar-check\"></i> Confirm Reservation",
      "form.submit.text": "Confirm Reservation",
      "form.processing": "Processing…",
      "form.error.required": "Please fill in all required fields.",
      "success.title": "Reservation Received!",
      "success.body": "Thank you. We'll confirm your booking within 24 hours at the email address provided.",
      "success.cta": "Make another reservation",

      /* SEATPLAN */
      "seatplan.eyebrow": "Floor Plan",
      "seatplan.title": "Our <em>Seating</em> Arrangement",
      "seatplan.desc": "Stylish rooms for 30 to 100 guests. Contact us to arrange your preferred layout for private events.",
      "seatplan.cta": "For specific seating arrangements and private event layouts, please <a href=\"#contact\">contact us directly.</a>",
      "seatplan.loading": "Loading seating plan…",
      "seatplan.error": "The seating plan couldn't be loaded right now. Please contact us for layout details.",
      "seatplan.legend.indoor": "Indoor",
      "seatplan.legend.outdoor": "Outdoor",

      /* CONTACT */
      "contact.eyebrow": "Find Us",
      "contact.title": "Come <em>Visit Us</em>",
      "contact.label.address": "Address",
      "contact.label.phone": "Phone",
      "contact.label.email": "Email",
      "contact.label.hours": "Hours",
      "contact.hours.weekday": "Mon–Fri: 16:00–24:00",
      "contact.hours.weekend": "Weekends: 12:00–24:00",

      /* FOOTER */
      "footer.brand.sub": "RISTORANTE · BERLIN · SINCE 2000",
      "footer.copy": "© 2026 Ristorante Villa Franca · All Rights Reserved",

      /* MENU PAGE — HERO / TABS / HEADERS */
      "menuhero.eyebrow": "Our Culinary Journey",
      "menuhero.title": "The <em>Menu</em>",
      "menuhero.sub": "Authentic Italian cuisine crafted with the finest ingredients",

      "tab.aperitifs": "Aperitifs",
      "tab.antipasti": "Antipasti",
      "tab.salads": "Salads",
      "tab.soups": "Soups",
      "tab.pasta": "Pasta",
      "tab.pizza": "Pizza",
      "tab.meat": "Meat & Poultry",
      "tab.fish": "Fish & Seafood",
      "tab.dessert": "Dessert",
      "tab.drinks": "Drinks",
      "tab.special": "Chef's Special",

      "header.aperitifs": "Aperitifs",
      "header.antipasti": "Antipasti <span>/ Starters</span>",
      "header.salads": "Salads",
      "header.soups": "Soups",
      "header.pasta": "Pasta",
      "header.pizza": "Pizza",
      "header.meat": "Meat <span>& Poultry</span>",
      "header.fish": "Fish <span>& Seafood</span>",
      "header.dessert": "Dessert",
      "header.drinks": "Drinks",
      "header.special": "Chef's <span>Specials</span>",

      "subsection.poultry": "Poultry",
      "subsection.calf-s-liver": "Calf's Liver",
      "subsection.pork": "Pork",
      "subsection.beef": "Beef",
      "subsection.hot-beverages": "Hot Beverages",
      "subsection.non-alcoholic": "Non-Alcoholic",
      "subsection.beer": "Beer",
      "subsection.wine-open": "Wine (Open)",

      "special.note": "Our seasonal creations — crafted with the finest market ingredients. Ask your server for today's selection.",

      "reservecta.eyebrow": "Ready to dine?",
      "reservecta.title": "Reserve Your <em>Table</em>",
      "reservecta.button": "Make a Reservation",

      /* MENU ITEM DESCRIPTIONS */
      "desc.aperitifs.1": "0,1 l",
      "desc.aperitifs.2": "0,2 l",
      "desc.aperitifs.3": "0,2 l",
      "desc.aperitifs.4": "5 cl",
      "desc.aperitifs.5": "5 cl",
      "desc.aperitifs.6": "0,2 l",
      "desc.aperitifs.7": "0,1 l · non-alcoholic",
      "desc.aperitifs.8": "0,2 l",
      "desc.aperitifs.9": "0,2 l",
      "desc.aperitifs.10": "0,2 l",

      "desc.antipasti.1": "Buffalo mozzarella with tomatoes and fresh basil",
      "desc.antipasti.2": "Poached veal in tuna cream with apple capers",
      "desc.antipasti.3": "Water-thin slices of raw beef fillet on marinated rocket salad, parmesan shavings and mushrooms",
      "desc.antipasti.4": "For 2 persons €25 · Carpaccio, Vitello Tonnato, pickled vegetables, mozzarella-tomato, Parma ham-melon",
      "desc.antipasti.5": "For 2 persons €21 · Variety of fresh, grilled and pickled vegetables",
      "desc.antipasti.6": "With rocket salad, pine nuts and lime sauce",
      "desc.antipasti.7": "Toasted bread with tomatoes and fresh basil",

      "desc.salads.1": "Rocket salad with cherry tomatoes and parmesan cheese",
      "desc.salads.2": "Rocket salad with fried rump steak strips, cherry tomatoes and parmesan",
      "desc.salads.3": "Rocket salad with fried prawns and cherry tomatoes",
      "desc.salads.4": "Mixed salad of the season",
      "desc.salads.5": "Seasonal salad with tuna",
      "desc.salads.6": "Seasonal salad with goat cheese and figs",
      "desc.salads.7": "Seasonal salad with chicken breast and mushrooms",

      "desc.soups.1": "Tomato-cream soup",
      "desc.soups.2": "Fresh homemade vegetable soup",
      "desc.soups.3": "Mediterranean fish soup",

      "desc.pasta.1": "With tomato and minced meat sauce",
      "desc.pasta.2": "With tomato sauce",
      "desc.pasta.3": "With garlic, parsley, olive oil and peperoncini (hot)",
      "desc.pasta.4": "With ham, egg and cream sauce",
      "desc.pasta.5": "Short pasta with fresh vegetables in light tomato sauce",
      "desc.pasta.6": "Short pasta with olives, capers, garlic and peperoncini (hot)",
      "desc.pasta.7": "Short pasta with gorgonzola and cream sauce",
      "desc.pasta.8": "Ribbon noodles with salmon in lobster cream pernod sauce",
      "desc.pasta.9": "Ribbon noodles with pork tenderloin, mushrooms and onions in cream sauce",
      "desc.pasta.10": "Ribbon noodles with black truffles in truffle-butter sauce",
      "desc.pasta.11": "Fine ribbon noodles with large prawns, garlic and cherry tomatoes",
      "desc.pasta.12": "Fine ribbon noodles with chicken breast, lemon, pine nuts and mint",

      "desc.pizza.1": "Tomatoes, cheese and basil",
      "desc.pizza.2": "With salami",
      "desc.pizza.3": "With cooked ham and fresh mushrooms",
      "desc.pizza.4": "With grilled vegetables",
      "desc.pizza.5": "With tuna and onions",
      "desc.pizza.6": "With ham and pineapple",
      "desc.pizza.7": "With artichoke hearts, garlic, anchovies and peperoncini (hot)",
      "desc.pizza.8": "With ham, mushrooms, salami and pepperoni",
      "desc.pizza.9": "With Parma ham, cherry tomatoes, rocket and parmesan",
      "desc.pizza.10": "With spicy salami, rocket, cherry tomatoes and parmesan",
      "desc.pizza.11": "With prawns, garlic, parsley, rocket and cherry tomatoes",
      "desc.pizza.12": "With fresh salmon, garlic, courgette, crème fraîche and rocket",
      "desc.pizza.13": "With gorgonzola, radicchio and walnuts",
      "desc.pizza.14": "With beef ham, parmesan and rocket",
      "desc.pizza.15": "With buffalo mozzarella, cherry tomatoes and basil pesto",

      "desc.meat.1": "Chicken breast with garlic, capers, olives and onions in tomato sauce",
      "desc.meat.2": "Calf's liver in butter-sage sauce with mediterranean vegetables and mashed potatoes",
      "desc.meat.3": "Calf's liver with apple rings and deep-fried onions in gravy, with mashed potatoes",
      "desc.meat.4": "Pork fillet with tomato slices, mozzarella and basil in tomato sauce",
      "desc.meat.5": "Pork fillet with mushrooms and green pepper in cream sauce",
      "desc.meat.6": "Pork fillet with pears and gorgonzola sauce",
      "desc.meat.7": "Pork fillet with Parma ham and sage in white wine sauce",
      "desc.meat.8": "Breaded pork schnitzel",
      "desc.meat.9": "Approx. 200g grilled Argentinian rump steak. Choose sauce +€3: green pepper cream, gorgonzola or mushroom",

      "desc.fish.1": "Norwegian salmon fillet in lobster cream sauce",
      "desc.fish.2": "Norwegian salmon fillet with garlic, cherry tomatoes, onions and capers",
      "desc.fish.3": "Pike perch fillet in Pommery mustard sauce",
      "desc.fish.4": "Pike perch fillet with potato crust in beetroot jus",
      "desc.fish.5": "Large prawns in pink pepper lobster sauce",
      "desc.fish.6": "Grilled large prawns",

      "desc.dessert.1": "Cream pudding with raspberry sauce",
      "desc.dessert.2": "Ladyfingers with coffee and mascarpone cream",
      "desc.dessert.3": "Vanilla ice cream with figs, green pepper and whipped cream",
      "desc.dessert.4": "Hot cherries with vanilla ice cream and whipped cream",
      "desc.dessert.5": "With hot cherries, raisins and almonds in vanilla sauce",
      "desc.dessert.6": "Warm chocolate soufflé",
      "desc.dessert.7": "Classic French-Italian caramelised cream dessert",

      "desc.drinks.1": "Cup",
      "desc.drinks.2": "Cup",
      "desc.drinks.3": "Cup",
      "desc.drinks.4": "Glass",
      "desc.drinks.5": "Cup with grappa or amaretto",
      "desc.drinks.6": "Glass",
      "desc.drinks.7": "Glass",
      "desc.drinks.8": "Cocktail",
      "desc.drinks.9": "0,2 l · Large €4.60",
      "desc.drinks.10": "0,2 l · Large €4.60",
      "desc.drinks.11": "0,75 l bottle €6.50",
      "desc.drinks.12": "0,75 l bottle €6.50",
      "desc.drinks.13": "0,3 l · 0,5 l €4.90",
      "desc.drinks.14": "0,3 l · 0,5 l €4.90",
      "desc.drinks.15": "0,5 l bottle",
      "desc.drinks.16": "Glass · 0,5 l carafe €13.50",
      "desc.drinks.17": "Glass · 0,5 l carafe €13.50",
      "desc.drinks.18": "Glass · 0,5 l carafe €13.50",
      "desc.drinks.19": "Glass · 0,5 l carafe €13.50",

      "desc.special.1": "Scallops flambéed in Pernod sauce",
      "desc.special.2": "Beetroot carpaccio with goat cheese",
      "desc.special.3": "Black ribbon noodles with scampi and mussels",
      "desc.special.4": "Pappardelle with lamb chops",
      "desc.special.5": "With clams (Venusmuscheln)",
      "desc.special.6": "Beef fillet with mustard sauce",
      "desc.special.7": "Lamb chops with truffle mash",
      "desc.special.8": "Grilled entrecôte with potatoes",
      "desc.special.9": "Fresh sole with fresh vegetables",
      "desc.special.10": "Fresh turbot with vegetables",
      "desc.special.11": "Tomato-heart dumplings filled with goat cheese, spinach and truffle",
      "desc.special.12": "Filled with porcini mushrooms",
      "desc.special.13": "Filled with venison and chestnuts, butter-white wine sauce with sage and thyme",
      "desc.special.14": "Filled with swordfish in a courgette cream sauce with fresh mint",
      "desc.special.15": "Pan-fried pike perch with truffle cream sauce and seasonal vegetables",
      "desc.special.16": "Whole sea bream with fresh vegetables and potatoes"
    },

    de: {
      /* NAV */
      "nav.about": "Über uns",
      "nav.reserve": "Reservieren",
      "nav.seating": "Sitzordnung",
      "nav.menu": "Speisekarte",
      "nav.contact": "Kontakt",

      /* TITLES */
      "title.home": "Ristorante Villa Franca – Berlin",
      "title.menu": "Speisekarte – Ristorante Villa Franca",

      /* HERO */
      "hero.title": "<em>Italienische</em> Eleganz<br>im Herzen Berlins",
      "hero.sub": "Private Feiern, gehobene Küche & unvergessliche Abende.<br>Für 30 bis 100 Gäste.",
      "hero.cta.reserve": "Tisch reservieren",
      "hero.cta.menu": "Speisekarte ansehen",
      "hero.scroll": "Scrollen",

      /* STATS */
      "stats.years": "Jahre Exzellenz",
      "stats.guests": "Bediente Gäste",
      "stats.dishes": "Signature-Gerichte",
      "stats.wines": "Weinsorten",

      /* ABOUT */
      "about.since": "Seit",
      "about.eyebrow": "Unsere Geschichte",
      "about.title": "Eine Symphonie<br><em>italienischer Eleganz</em>",
      "about.body1": "Betreten Sie das Ristorante Villa Franca, wo gehobene Küche auf die Kunst der italienischen Kochkunst trifft. In einem Ambiente zeitloser Eleganz laden wir Sie ein, raffinierte Aromen zu genießen, die mit Leidenschaft und Perfektion zubereitet werden.",
      "about.body2": "Unsere Speisekarte bietet eine sorgfältige Auswahl klassischer und moderner italienischer Delikatessen, die feinste Zutaten und handwerkliches Können zelebrieren — von handgemachter Pasta bis zur perfekten Pizza aus dem Holzofen.",
      "about.feature.pizza": "Pizza aus dem Holzofen",
      "about.feature.pasta": "Täglich frische Pasta",
      "about.feature.wine": "Ausgewählte Weinkarte",
      "about.feature.events": "Private Veranstaltungen",
      "about.cta": "Speisekarte entdecken",

      /* RESERVATION */
      "reservation.eyebrow": "Reservieren Sie Ihren Tisch",
      "reservation.title": "Reservieren Sie Ihr <em>Erlebnis</em>",
      "reservation.hours": "<i class=\"fa-regular fa-clock\"></i> Mo–Fr: 16:00–24:00 Uhr &nbsp;|&nbsp; <i class=\"fa-regular fa-clock\"></i> Wochenende & Feiertage: 12:00–24:00 Uhr",
      "form.label.name": "Vollständiger Name <span class=\"req\">*</span>",
      "form.placeholder.name": "Ihr Name",
      "form.label.email": "E-Mail <span class=\"req\">*</span>",
      "form.placeholder.email": "ihre@email.de",
      "form.label.phone": "Telefon <span class=\"req\">*</span>",
      "form.label.date": "Datum <span class=\"req\">*</span>",
      "form.label.time": "Uhrzeit <span class=\"req\">*</span>",
      "form.select.time": "— Uhrzeit wählen —",
      "form.label.guests": "Gäste <span class=\"req\">*</span>",
      "form.label.occasion": "Anlass",
      "pill.none": "Kein besonderer Anlass",
      "pill.birthday": "Geburtstag",
      "pill.anniversary": "Jahrestag",
      "pill.business": "Geschäftsessen",
      "pill.engagement": "Verlobung",
      "pill.conference": "Konferenz",
      "form.label.allergies": "Ernährungsanforderungen / Allergien",
      "form.placeholder.allergies": "Vegetarisch, glutenfrei, Nussallergie…",
      "form.label.message": "Besondere Wünsche",
      "form.placeholder.message": "Dekoration, Kindersitz, Sitzplatzwunsch…",
      "form.submit": "<i class=\"fa-regular fa-calendar-check\"></i> Reservierung bestätigen",
      "form.submit.text": "Reservierung bestätigen",
      "form.processing": "Wird verarbeitet…",
      "form.error.required": "Bitte füllen Sie alle Pflichtfelder aus.",
      "success.title": "Reservierung erhalten!",
      "success.body": "Vielen Dank. Wir bestätigen Ihre Buchung innerhalb von 24 Stunden an die angegebene E-Mail-Adresse.",
      "success.cta": "Weitere Reservierung vornehmen",

      /* SEATPLAN */
      "seatplan.eyebrow": "Raumplan",
      "seatplan.title": "Unsere <em>Sitzordnung</em>",
      "seatplan.desc": "Stilvolle Räume für 30 bis 100 Gäste. Kontaktieren Sie uns, um Ihr bevorzugtes Layout für private Veranstaltungen zu planen.",
      "seatplan.cta": "Für spezifische Sitzanordnungen und Layouts für private Veranstaltungen <a href=\"#contact\">kontaktieren Sie uns bitte direkt.</a>",
      "seatplan.loading": "Sitzplan wird geladen…",
      "seatplan.error": "Der Sitzplan konnte derzeit nicht geladen werden. Bitte kontaktieren Sie uns für Details zum Raumplan.",
      "seatplan.legend.indoor": "Innen",
      "seatplan.legend.outdoor": "Außen",

      /* CONTACT */
      "contact.eyebrow": "Finden Sie uns",
      "contact.title": "Besuchen Sie <em>uns</em>",
      "contact.label.address": "Adresse",
      "contact.label.phone": "Telefon",
      "contact.label.email": "E-Mail",
      "contact.label.hours": "Öffnungszeiten",
      "contact.hours.weekday": "Mo–Fr: 16:00–24:00 Uhr",
      "contact.hours.weekend": "Wochenende: 12:00–24:00 Uhr",

      /* FOOTER */
      "footer.brand.sub": "RISTORANTE · BERLIN · SEIT 2000",
      "footer.copy": "© 2026 Ristorante Villa Franca · Alle Rechte vorbehalten",

      /* MENU PAGE — HERO / TABS / HEADERS */
      "menuhero.eyebrow": "Unsere kulinarische Reise",
      "menuhero.title": "Die <em>Speisekarte</em>",
      "menuhero.sub": "Authentische italienische Küche aus den feinsten Zutaten",

      "tab.aperitifs": "Aperitifs",
      "tab.antipasti": "Antipasti",
      "tab.salads": "Salate",
      "tab.soups": "Suppen",
      "tab.pasta": "Pasta",
      "tab.pizza": "Pizza",
      "tab.meat": "Fleisch & Geflügel",
      "tab.fish": "Fisch & Meeresfrüchte",
      "tab.dessert": "Dessert",
      "tab.drinks": "Getränke",
      "tab.special": "Chef's Spezialitäten",

      "header.aperitifs": "Aperitifs",
      "header.antipasti": "Antipasti <span>/ Vorspeisen</span>",
      "header.salads": "Salate",
      "header.soups": "Suppen",
      "header.pasta": "Pasta",
      "header.pizza": "Pizza",
      "header.meat": "Fleisch <span>& Geflügel</span>",
      "header.fish": "Fisch <span>& Meeresfrüchte</span>",
      "header.dessert": "Dessert",
      "header.drinks": "Getränke",
      "header.special": "Chef's <span>Spezialitäten</span>",

      "subsection.poultry": "Geflügel",
      "subsection.calf-s-liver": "Kalbsleber",
      "subsection.pork": "Schwein",
      "subsection.beef": "Rind",
      "subsection.hot-beverages": "Warme Getränke",
      "subsection.non-alcoholic": "Alkoholfrei",
      "subsection.beer": "Bier",
      "subsection.wine-open": "Wein (offen)",

      "special.note": "Unsere saisonalen Kreationen — zubereitet mit den feinsten Marktzutaten. Fragen Sie Ihren Kellner nach der heutigen Auswahl.",

      "reservecta.eyebrow": "Bereit zu speisen?",
      "reservecta.title": "Reservieren Sie Ihren <em>Tisch</em>",
      "reservecta.button": "Jetzt reservieren",

      /* MENU ITEM DESCRIPTIONS */
      "desc.aperitifs.1": "0,1 l",
      "desc.aperitifs.2": "0,2 l",
      "desc.aperitifs.3": "0,2 l",
      "desc.aperitifs.4": "5 cl",
      "desc.aperitifs.5": "5 cl",
      "desc.aperitifs.6": "0,2 l",
      "desc.aperitifs.7": "0,1 l · alkoholfrei",
      "desc.aperitifs.8": "0,2 l",
      "desc.aperitifs.9": "0,2 l",
      "desc.aperitifs.10": "0,2 l",

      "desc.antipasti.1": "Büffelmozzarella mit Tomaten und frischem Basilikum",
      "desc.antipasti.2": "Pochiertes Kalbfleisch in Thunfischcreme mit Apfel-Kapern",
      "desc.antipasti.3": "Hauchdünne Scheiben rohes Rinderfilet auf mariniertem Rucolasalat, Parmesanspänen und Champignons",
      "desc.antipasti.4": "Für 2 Personen €25 · Carpaccio, Vitello Tonnato, eingelegtes Gemüse, Mozzarella-Tomate, Parmaschinken-Melone",
      "desc.antipasti.5": "Für 2 Personen €21 · Auswahl an frischem, gegrilltem und eingelegtem Gemüse",
      "desc.antipasti.6": "Mit Rucolasalat, Pinienkernen und Limettensauce",
      "desc.antipasti.7": "Geröstetes Brot mit Tomaten und frischem Basilikum",

      "desc.salads.1": "Rucolasalat mit Kirschtomaten und Parmesan",
      "desc.salads.2": "Rucolasalat mit gebratenen Rumpsteak-Streifen, Kirschtomaten und Parmesan",
      "desc.salads.3": "Rucolasalat mit gebratenen Garnelen und Kirschtomaten",
      "desc.salads.4": "Gemischter Salat der Saison",
      "desc.salads.5": "Saisonsalat mit Thunfisch",
      "desc.salads.6": "Saisonsalat mit Ziegenkäse und Feigen",
      "desc.salads.7": "Saisonsalat mit Hühnerbrust und Champignons",

      "desc.soups.1": "Tomaten-Cremesuppe",
      "desc.soups.2": "Frische hausgemachte Gemüsesuppe",
      "desc.soups.3": "Mediterrane Fischsuppe",

      "desc.pasta.1": "Mit Tomaten- und Hackfleischsauce",
      "desc.pasta.2": "Mit Tomatensauce",
      "desc.pasta.3": "Mit Knoblauch, Petersilie, Olivenöl und Peperoncini (scharf)",
      "desc.pasta.4": "Mit Schinken, Ei und Sahnesauce",
      "desc.pasta.5": "Kurze Pasta mit frischem Gemüse in leichter Tomatensauce",
      "desc.pasta.6": "Kurze Pasta mit Oliven, Kapern, Knoblauch und Peperoncini (scharf)",
      "desc.pasta.7": "Kurze Pasta mit Gorgonzola-Sahnesauce",
      "desc.pasta.8": "Bandnudeln mit Lachs in Hummer-Sahne-Pernod-Sauce",
      "desc.pasta.9": "Bandnudeln mit Schweinefilet, Champignons und Zwiebeln in Sahnesauce",
      "desc.pasta.10": "Bandnudeln mit schwarzem Trüffel in Trüffel-Buttersauce",
      "desc.pasta.11": "Feine Bandnudeln mit großen Garnelen, Knoblauch und Kirschtomaten",
      "desc.pasta.12": "Feine Bandnudeln mit Hühnerbrust, Zitrone, Pinienkernen und Minze",

      "desc.pizza.1": "Tomaten, Käse und Basilikum",
      "desc.pizza.2": "Mit Salami",
      "desc.pizza.3": "Mit gekochtem Schinken und frischen Champignons",
      "desc.pizza.4": "Mit gegrilltem Gemüse",
      "desc.pizza.5": "Mit Thunfisch und Zwiebeln",
      "desc.pizza.6": "Mit Schinken und Ananas",
      "desc.pizza.7": "Mit Artischockenherzen, Knoblauch, Sardellen und Peperoncini (scharf)",
      "desc.pizza.8": "Mit Schinken, Champignons, Salami und Peperoni",
      "desc.pizza.9": "Mit Parmaschinken, Kirschtomaten, Rucola und Parmesan",
      "desc.pizza.10": "Mit scharfer Salami, Rucola, Kirschtomaten und Parmesan",
      "desc.pizza.11": "Mit Garnelen, Knoblauch, Petersilie, Rucola und Kirschtomaten",
      "desc.pizza.12": "Mit frischem Lachs, Knoblauch, Zucchini, Crème fraîche und Rucola",
      "desc.pizza.13": "Mit Gorgonzola, Radicchio und Walnüssen",
      "desc.pizza.14": "Mit Bresaola, Parmesan und Rucola",
      "desc.pizza.15": "Mit Büffelmozzarella, Kirschtomaten und Basilikumpesto",

      "desc.meat.1": "Hühnerbrust mit Knoblauch, Kapern, Oliven und Zwiebeln in Tomatensauce",
      "desc.meat.2": "Kalbsleber in Butter-Salbei-Sauce mit mediterranem Gemüse und Kartoffelpüree",
      "desc.meat.3": "Kalbsleber mit Apfelringen und frittierten Zwiebeln in Bratensauce, mit Kartoffelpüree",
      "desc.meat.4": "Schweinefilet mit Tomatenscheiben, Mozzarella und Basilikum in Tomatensauce",
      "desc.meat.5": "Schweinefilet mit Champignons und grünem Pfeffer in Sahnesauce",
      "desc.meat.6": "Schweinefilet mit Birnen und Gorgonzolasauce",
      "desc.meat.7": "Schweinefilet mit Parmaschinken und Salbei in Weißweinsauce",
      "desc.meat.8": "Paniertes Schweineschnitzel",
      "desc.meat.9": "Ca. 200g gegrilltes argentinisches Rumpsteak. Sauce nach Wahl +€3: grüne Pfeffer-Sahne, Gorgonzola oder Champignon",

      "desc.fish.1": "Norwegisches Lachsfilet in Hummer-Sahnesauce",
      "desc.fish.2": "Norwegisches Lachsfilet mit Knoblauch, Kirschtomaten, Zwiebeln und Kapern",
      "desc.fish.3": "Zanderfilet in Pommery-Senfsauce",
      "desc.fish.4": "Zanderfilet mit Kartoffelkruste in Rote-Bete-Jus",
      "desc.fish.5": "Große Garnelen in Rosa-Pfeffer-Hummersauce",
      "desc.fish.6": "Gegrillte große Garnelen",

      "desc.dessert.1": "Cremepudding mit Himbeersauce",
      "desc.dessert.2": "Löffelbiskuit mit Kaffee und Mascarponecreme",
      "desc.dessert.3": "Vanilleeis mit Feigen, grünem Pfeffer und Schlagsahne",
      "desc.dessert.4": "Heiße Kirschen mit Vanilleeis und Schlagsahne",
      "desc.dessert.5": "Mit heißen Kirschen, Rosinen und Mandeln in Vanillesauce",
      "desc.dessert.6": "Warmes Schokoladensoufflé",
      "desc.dessert.7": "Klassisches französisch-italienisches karamellisiertes Cremedessert",

      "desc.drinks.1": "Tasse",
      "desc.drinks.2": "Tasse",
      "desc.drinks.3": "Tasse",
      "desc.drinks.4": "Glas",
      "desc.drinks.5": "Tasse mit Grappa oder Amaretto",
      "desc.drinks.6": "Glas",
      "desc.drinks.7": "Glas",
      "desc.drinks.8": "Cocktail",
      "desc.drinks.9": "0,2 l · Groß €4,60",
      "desc.drinks.10": "0,2 l · Groß €4,60",
      "desc.drinks.11": "0,75 l Flasche €6,50",
      "desc.drinks.12": "0,75 l Flasche €6,50",
      "desc.drinks.13": "0,3 l · 0,5 l €4,90",
      "desc.drinks.14": "0,3 l · 0,5 l €4,90",
      "desc.drinks.15": "0,5 l Flasche",
      "desc.drinks.16": "Glas · 0,5 l Karaffe €13,50",
      "desc.drinks.17": "Glas · 0,5 l Karaffe €13,50",
      "desc.drinks.18": "Glas · 0,5 l Karaffe €13,50",
      "desc.drinks.19": "Glas · 0,5 l Karaffe €13,50",

      "desc.special.1": "Jakobsmuscheln in Pernod-Sauce flambiert",
      "desc.special.2": "Rote-Bete-Carpaccio mit Ziegenkäse",
      "desc.special.3": "Schwarze Bandnudeln mit Scampi und Muscheln",
      "desc.special.4": "Pappardelle mit Lammkoteletts",
      "desc.special.5": "Mit Venusmuscheln",
      "desc.special.6": "Rinderfilet mit Senfsauce",
      "desc.special.7": "Lammkoteletts mit Trüffelpüree",
      "desc.special.8": "Gegrilltes Entrecôte mit Kartoffeln",
      "desc.special.9": "Frische Seezunge mit frischem Gemüse",
      "desc.special.10": "Frischer Steinbutt mit Gemüse",
      "desc.special.11": "Tomaten-Herz-Teigtaschen gefüllt mit Ziegenkäse, Spinat und Trüffel",
      "desc.special.12": "Gefüllt mit Steinpilzen",
      "desc.special.13": "Gefüllt mit Wild und Kastanien, Butter-Weißwein-Sauce mit Salbei und Thymian",
      "desc.special.14": "Gefüllt mit Schwertfisch in Zucchini-Sahnesauce mit frischer Minze",
      "desc.special.15": "Gebratenes Zanderfilet mit Trüffel-Sahnesauce und Saisongemüse",
      "desc.special.16": "Ganze Dorade mit frischem Gemüse und Kartoffeln"
    }
  };

  var currentLang = DEFAULT_LANG;

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === "de" || stored === "en") return stored;
    } catch (e) { /* storage unavailable, fall back to default */ }
    return DEFAULT_LANG;
  }

  function translate(lang, key) {
    var table = translations[lang] || translations[DEFAULT_LANG];
    if (table && Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    var fallback = translations.en;
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return null;
  }

  function applyLanguage(lang) {
    if (lang !== "de" && lang !== "en") lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = translate(lang, key);
      if (val == null) return;
      if (el.tagName === "TITLE") {
        el.textContent = val;
      } else {
        el.innerHTML = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = translate(lang, key);
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }

    document.documentElement.classList.add("i18n-ready");
  }

  // Expose helpers for other scripts (script.js uses t() for dynamically
  // generated strings like form validation / submit-button states).
  window.t = function (key) {
    return translate(currentLang, key) || key;
  };
  window.setLanguage = applyLanguage;
  window.getCurrentLanguage = function () { return currentLang; };

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  applyLanguage(getStoredLang());
})();
