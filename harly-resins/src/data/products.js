const products = [
  // --- KEYCHAINS (HRK) ---
  { id: 1, category: "keychain", code: "HRK#01", description: "Multicolored dried flowers and clear resin", image: "/images/Keychains/floral with flakes.jpg" },
  { id: 2, category: "keychain", code: "HRK#02", description: "Colors and golden flakes", image: "/images/Keychains/Black & Golden.jpg" },
  { id: 3, category: "keychain", code: "HRK#03", description: "Colors and glitter design", image: "/images/Keychains/color with glitter.jpg" },
  { id: 4, category: "keychain", code: "HRK#04", description: "Glitter and clear resin", image: "/images/Keychains/fully glitter.jpg" },
  { id: 5, category: "keychain", code: "HRK#05", description: "Foil flakes and clear resin", image: "/images/Keychains/golden flakes.jpg" },
  { id: 6, category: "keychain", code: "HRK#06", description: "Clear resin only", image: "/images/Keychains/transparent.jpg" },
  { id: 7, category: "keychain", code: "HRK#07", description: "Clear resin and glitter", image: "/images/Keychains/half glitter.jpg" },
  { id: 8, category: "keychain", code: "HRK#08", description: "Silver flakes and clear resin", image: "/images/Keychains/silver flakes.jpg" },
  { id: 9, category: "keychain", code: "HRK#09", description: "Powdered color and shine", image: "/images/Keychains/k1.jpg" },
  { id: 10, category: "keychain", code: "HRK#10", description: "Pigment and flake", image: "/images/Keychains/white & silver.jpg" },
  { id: 11, category: "keychain", code: "HRK#11", description: "Flakes with shiny powder", image: "/images/Keychains/k3.jpg" },
  { id: 12, category: "keychain", code: "HRK#12", description: "Cherry red pigment with golden flakes", image: "/images/Keychains/k4.jpg" },

  // --- BOOKMARKS (HRB) ---
  { id: 13, category: "bookmark", code: "HRB#01", description: "Golden Flakes", image: "/images/bookmarks/flakes.jpg" },
  { id: 14, category: "bookmark", code: "HRB#02", description: "Dried flowers on transparent base", image: "/images/bookmarks/floral.jpg" },
  { id: 15, category: "bookmark", code: "HRB#03", description: "Glitter design", image: "/images/bookmarks/glitter.jpg" },
  { id: 16, category: "bookmark", code: "HRB#04", description: "Two color with flake stripes", image: "/images/bookmarks/middle stripes.jpg" },
  { id: 17, category: "bookmark", code: "HRB#05", description: "Multicolored design", image: "/images/bookmarks/mixed 2.jpg" },
  { id: 18, category: "bookmark", code: "HRB#06", description: "Color Swirl Design", image: "/images/bookmarks/mixed.jpg" },
  { id: 19, category: "bookmark", code: "HRB#07", description: "Middle Swirl Design", image: "/images/bookmarks/ocean.jpg" },
  { id: 20, category: "bookmark", code: "HRB#08", description: "Half flakes and powdered pigment", image: "/images/bookmarks/top flake.jpg" },
  { id: 21, category: "bookmark", code: "HRB#09", description: "Transparent ends design", image: "/images/bookmarks/transparent ends.jpg" },
  { id: 22, category: "bookmark", code: "HRB#10", description: "Multi-Design bookmark set", image: "/images/bookmarks/image copy.png" },
  { id: 23, category: "bookmark", code: "HRB#11", description: "Half Transparent Pigments with Flakes", image: "/images/bookmarks/image.png" },

  // --- PHONE STANDS (PHONE STAND) ---
  { id: 24, category: "phonestand", code: "HRS#01", description: "Clear transparent colors", image: "/images/phone stands/clear.jpg" },
  { id: 25, category: "phonestand", code: "HRS#02", description: "Color with mixed flakes", image: "/images/phone stands/color.jpg" },
  { id: 26, category: "phonestand", code: "HRS#03", description: "Transparent base with dried flowers", image: "/images/phone stands/floral.jpg" },
  { id: 27, category: "phonestand", code: "HRS#04", description: "Glitter and Multicolored Flowers", image: "/images/phone stands/glitter and color.jpg" },
  { id: 28, category: "phonestand", code: "HRS#05", description: "Half half pigment and foil flakes", image: "/images/phone stands/half half flake.jpg" },
  { id: 29, category: "phonestand", code: "HRS#06", description: "Black and golden phone stand", image: "/images/phone stands/image copy 2.png" },
  { id: 30, category: "phonestand", code: "HRS#07", description: "Transparent pigments and foil flakes", image: "/images/phone stands/image copy.png" },
  { id: 31, category: "phonestand", code: "HRS#08", description: "Lower half flake design", image: "/images/phone stands/image.png" },
  { id: 32, category: "phonestand", code: "HRS#09", description: "Middle stripe design with flakes", image: "/images/phone stands/middle stripe.jpg" },
  { id: 33, category: "phonestand", code: "HRS#10", description: "Mixed color design", image: "/images/phone stands/multicolored.jpg" },
  { id: 34, category: "phonestand", code: "HRS#11", description: "Artistic Design Theme", image: "/images/phone stands/purple.jpg" },
  { id: 35, category: "phonestand", code: "HRS#12", description: "Striped Design", image: "/images/phone stands/stripes.jpg" },

  // --- KITCHENWARE (KITCHENWARE) ---
  { id: 36, category: "kitchenware", code: "HRT#01", description: "Floral Tray with Dandelions", image: "/images/kitchenware/floral 2.jpg" },
  { id: 37, category: "kitchenware", code: "HRT#02", description: "Multicolor Striped Tray", image: "/images/kitchenware/dt stripe.jpg" },
  { id: 38, category: "kitchenware", code: "HRT#03", description: "Rose Floral Tray", image: "/images/kitchenware/floral.jpg" },
  { id: 39, category: "kitchenware", code: "HRT#04", description: "Blue Flake Tray", image: "/images/kitchenware/middle flake.jpg" },
  { id: 40, category: "kitchenware", code: "HRT#05", description: "Flake corner Tray", image: "/images/kitchenware/one corner.jpg" },
  { id: 41, category: "kitchenware", code: "HRT#06", description: "Bowl with orange base", image: "/images/kitchenware/plate1.jpg" },
  { id: 42, category: "kitchenware", code: "HRT#07", description: "Striped Tray", image: "/images/kitchenware/stripes.jpg" },
  { id: 43, category: "kitchenware", code: "HRT#08", description: "Half colored design Tray", image: "/images/kitchenware/tp1.jpg" },
  { id: 44, category: "kitchenware", code: "HRT#09", description: "All purpose plate", image: "/images/kitchenware/plate5.jpg" },
  { id: 45, category: "kitchenware", code: "HRT#10", description: "Bowl with golden rim", image: "/images/kitchenware/plate3.jpg" },
  { id: 46, category: "kitchenware", code: "HRT#11", description: "Tray and Plate set", image: "/images/kitchenware/tp2.jpg" },
  { id: 47, category: "kitchenware", code: "HRT#12", description: "Multi purpose rimmed plates", image: "/images/kitchenware/plate6.jpg" },

  // --- OTHERS (OTHERS) ---
  { id: 48, category: "others", code: "HRNS#01", description: "Name stands with Flake Base", price: "850 birr", image: "/images/others/sent1.jpg" },
  { id: 49, category: "others", code: "HRBE#01", description: "Beads with different shades", price: "10 birr each", image: "/images/others/bead2.jpg" },
  { id: 50, category: "others", code: "HRNS#02", description: "Name stands with colored Base", price: "700 birr", image: "/images/others/sent2.jpg" },
  { id: 51, category: "others", code: "HRBE#02", description: "Multicolored beads", price: "10 birr each", image: "/images/others/bead3.jpg" },
  { id: 52, category: "others", code: "HRNS#03", description: "Name stands with glitter base", price: "1000 birr", image: "/images/others/sent3.jpg" },
  { id: 53, category: "others", code: "HRBE#03", description: "Clear and abstract designed beads", price: "7 birr each", image: "/images/others/bead4.jpg" },
  { id: 54, category: "others", code: "HRNS#04", description: "Name stands with glitter and flake base", price: "550 birr", image: "/images/others/sent4.jpg" },
  { id: 55, category: "others", code: "HRBE#04", description: "Colored Beads", price: "12 birr each", image: "/images/others/bead5.jpg" },
  { id: 56, category: "others", code: "HRNS#05", description: "Floral name stand", price: "850 birr", image: "/images/others/sent5.jpg" },
  { id: 57, category: "others", code: "HRBE#05", description: "Hair beads (Multicolored)", price: "15 birr each", image: "/images/others/bead6.jpg" },
  { id: 58, category: "others", code: "HRTS#06", description: "Save the date tray stands", price: "2000 birr", image: "/images/others/sent6.jpg" }
];

export default products;