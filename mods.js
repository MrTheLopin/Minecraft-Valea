const CATEGORIES = {
  "perf": "⚡ Performance",
  "ui": "🖥️ Interface & QoL",
  "visual": "🎨 Visuel & Ambiance",
  "deco": "🏡 Décoration & Confort",
  "food": "🍞 Nourriture & Cuisine",
  "world": "🗺️ Monde & Exploration",
  "creatures": "🐾 Créatures & Compagnons",
  "gear": "🎒 Équipement & Objets",
  "tech": "🧩 Technique"
};

const MODS = [
  {
    "name": "Accessories",
    "cat": "gear"
  },
  {
    "name": "Allhallows Mod",
    "cat": "world"
  },
  {
    "name": "AmbientSounds 6",
    "cat": "visual"
  },
  {
    "name": "Amendments",
    "cat": "tech"
  },
  {
    "name": "AppleSkin",
    "cat": "ui"
  },
  {
    "name": "Architectury API",
    "cat": "tech"
  },
  {
    "name": "Artifacts",
    "cat": "gear"
  },
  {
    "name": "Backpacked",
    "cat": "gear"
  },
  {
    "name": "Balm (Fabric Edition)",
    "cat": "tech"
  },
  {
    "name": "Beautify",
    "cat": "deco"
  },
  {
    "name": "Better Archeology",
    "cat": "world"
  },
  {
    "name": "Better Clouds",
    "cat": "visual"
  },
  {
    "name": "Better Third Person",
    "cat": "ui"
  },
  {
    "name": "BetterF3",
    "cat": "ui"
  },
  {
    "name": "Biolith",
    "cat": "world"
  },
  {
    "name": "BiomeSpy",
    "cat": "ui"
  },
  {
    "name": "Bookshelf",
    "cat": "tech"
  },
  {
    "name": "Brewin' And Chewin'",
    "cat": "food"
  },
  {
    "name": "CIT Resewn",
    "cat": "visual"
  },
  {
    "name": "Carry On",
    "cat": "gear"
  },
  {
    "name": "Christmas Culinary & Decorations",
    "cat": "deco"
  },
  {
    "name": "ClickThrough Plus",
    "cat": "ui"
  },
  {
    "name": "Cloth Config v15",
    "cat": "tech"
  },
  {
    "name": "Clumps",
    "cat": "perf"
  },
  {
    "name": "Clutter",
    "cat": "deco"
  },
  {
    "name": "Collective",
    "cat": "tech"
  },
  {
    "name": "Configured",
    "cat": "ui"
  },
  {
    "name": "Continuity",
    "cat": "visual"
  },
  {
    "name": "Controlling",
    "cat": "ui"
  },
  {
    "name": "Convenient Decor",
    "cat": "deco"
  },
  {
    "name": "Cookies, Candy and Cakes",
    "cat": "food"
  },
  {
    "name": "Copper Age Backport",
    "cat": "deco"
  },
  {
    "name": "Crash Assistant",
    "cat": "ui"
  },
  {
    "name": "CreativeCore",
    "cat": "tech"
  },
  {
    "name": "Cristel Lib",
    "cat": "tech"
  },
  {
    "name": "Critters and Companions",
    "cat": "creatures"
  },
  {
    "name": "Cull Leaves",
    "cat": "perf"
  },
  {
    "name": "Cupboard",
    "cat": "deco"
  },
  {
    "name": "Cursors Extended",
    "cat": "ui"
  },
  {
    "name": "Display Delight [Fabric]",
    "cat": "deco"
  },
  {
    "name": "Dungeons and Taverns",
    "cat": "world"
  },
  {
    "name": "Dusty Decorations Refabricated",
    "cat": "deco"
  },
  {
    "name": "Eating Animation [Fabric]",
    "cat": "visual"
  },
  {
    "name": "EnchantmentDescriptions",
    "cat": "ui"
  },
  {
    "name": "Entity Culling Fabric/Forge",
    "cat": "perf"
  },
  {
    "name": "Entity Model Features",
    "cat": "visual"
  },
  {
    "name": "Entity Texture Features",
    "cat": "visual"
  },
  {
    "name": "Explorer's Compass",
    "cat": "world"
  },
  {
    "name": "Explorify – Dungeons & Structures",
    "cat": "world"
  },
  {
    "name": "Exposure",
    "cat": "visual"
  },
  {
    "name": "Fabric API",
    "cat": "tech"
  },
  {
    "name": "Fabric Language Kotlin",
    "cat": "tech"
  },
  {
    "name": "Falling Leaves",
    "cat": "visual"
  },
  {
    "name": "FallingTree",
    "cat": "ui"
  },
  {
    "name": "Farmer's Delight",
    "cat": "food"
  },
  {
    "name": "Farmers Structures",
    "cat": "world"
  },
  {
    "name": "FerriteCore",
    "cat": "perf"
  },
  {
    "name": "Field Guide",
    "cat": "ui"
  },
  {
    "name": "Forge Config API Port",
    "cat": "tech"
  },
  {
    "name": "Formations (Structure Library)",
    "cat": "tech"
  },
  {
    "name": "Formations Nether",
    "cat": "world"
  },
  {
    "name": "Formations Overworld",
    "cat": "world"
  },
  {
    "name": "Framework",
    "cat": "tech"
  },
  {
    "name": "Freecam",
    "cat": "ui"
  },
  {
    "name": "Fzzy Config",
    "cat": "tech"
  },
  {
    "name": "GeckoLib 4",
    "cat": "tech"
  },
  {
    "name": "Genshin Instruments",
    "cat": "deco"
  },
  {
    "name": "Ghosts",
    "cat": "creatures"
  },
  {
    "name": "GlitchCore",
    "cat": "tech"
  },
  {
    "name": "Goblin Traders",
    "cat": "creatures"
  },
  {
    "name": "Golem Overhaul",
    "cat": "creatures"
  },
  {
    "name": "Good Ending",
    "cat": "world"
  },
  {
    "name": "Handcrafted",
    "cat": "deco"
  },
  {
    "name": "Hobbit Hill Village",
    "cat": "world"
  },
  {
    "name": "Horseman",
    "cat": "creatures"
  },
  {
    "name": "Immersive Overlays",
    "cat": "ui"
  },
  {
    "name": "Inventory Essentials",
    "cat": "ui"
  },
  {
    "name": "Iris Shaders",
    "cat": "visual"
  },
  {
    "name": "Item Descriptions",
    "cat": "ui"
  },
  {
    "name": "Jade 🔍",
    "cat": "ui"
  },
  {
    "name": "JamLib",
    "cat": "tech"
  },
  {
    "name": "Just Another Rotten Flesh to Leather Mod",
    "cat": "gear"
  },
  {
    "name": "Just Enough Items",
    "cat": "ui"
  },
  {
    "name": "Kaleidoscope Cookery",
    "cat": "food"
  },
  {
    "name": "Lavender",
    "cat": "tech"
  },
  {
    "name": "LibJF",
    "cat": "tech"
  },
  {
    "name": "Lilis' Lucky Lures",
    "cat": "gear"
  },
  {
    "name": "Loot Journal: Pickup Notifier [Fabric Edition]",
    "cat": "ui"
  },
  {
    "name": "M.R.U",
    "cat": "tech"
  },
  {
    "name": "Macaw's Holidays",
    "cat": "deco"
  },
  {
    "name": "Macaw's Paintings",
    "cat": "deco"
  },
  {
    "name": "Magic Vibe Decorations",
    "cat": "deco"
  },
  {
    "name": "MidnightLib",
    "cat": "tech"
  },
  {
    "name": "Mod Menu",
    "cat": "ui"
  },
  {
    "name": "ModernFix",
    "cat": "perf"
  },
  {
    "name": "Moonlight Lib",
    "cat": "tech"
  },
  {
    "name": "More Delight",
    "cat": "food"
  },
  {
    "name": "Mouse Tweaks",
    "cat": "ui"
  },
  {
    "name": "Mystic's Biomes",
    "cat": "world"
  },
  {
    "name": "Nature's Compass",
    "cat": "world"
  },
  {
    "name": "Night Lights",
    "cat": "visual"
  },
  {
    "name": "Not Enough Recipe Book",
    "cat": "ui"
  },
  {
    "name": "NotEnoughAnimations",
    "cat": "visual"
  },
  {
    "name": "Patchouli (Fabric/Quilt)",
    "cat": "tech"
  },
  {
    "name": "Paxi",
    "cat": "creatures"
  },
  {
    "name": "Peaceful Hunger",
    "cat": "ui"
  },
  {
    "name": "Peaceful Progression",
    "cat": "ui"
  },
  {
    "name": "Placeholder API",
    "cat": "tech"
  },
  {
    "name": "Platform",
    "cat": "tech"
  },
  {
    "name": "Polytone",
    "cat": "visual"
  },
  {
    "name": "Prickle",
    "cat": "deco"
  },
  {
    "name": "Reese's Sodium Options",
    "cat": "perf"
  },
  {
    "name": "Resourceful Config",
    "cat": "tech"
  },
  {
    "name": "Resourceful Lib",
    "cat": "tech"
  },
  {
    "name": "Respackopts",
    "cat": "visual"
  },
  {
    "name": "Ribbits",
    "cat": "creatures"
  },
  {
    "name": "RightClickHarvest",
    "cat": "ui"
  },
  {
    "name": "Rustic Delight",
    "cat": "food"
  },
  {
    "name": "Scholar",
    "cat": "ui"
  },
  {
    "name": "Searchables",
    "cat": "ui"
  },
  {
    "name": "Serene Seasons",
    "cat": "world"
  },
  {
    "name": "ShatterLib | OctoLib",
    "cat": "tech"
  },
  {
    "name": "Sit",
    "cat": "ui"
  },
  {
    "name": "Skin Layers 3D",
    "cat": "visual"
  },
  {
    "name": "Sodium",
    "cat": "perf"
  },
  {
    "name": "Sodium Options API",
    "cat": "perf"
  },
  {
    "name": "Sodium/Embeddium Extras",
    "cat": "perf"
  },
  {
    "name": "Sounds",
    "cat": "visual"
  },
  {
    "name": "SoundsBeGone",
    "cat": "visual"
  },
  {
    "name": "SparseStructures",
    "cat": "world"
  },
  {
    "name": "Spyglass Improvements",
    "cat": "ui"
  },
  {
    "name": "Storage Delight",
    "cat": "gear"
  },
  {
    "name": "Structurify",
    "cat": "perf"
  },
  {
    "name": "Supplementaries",
    "cat": "deco"
  },
  {
    "name": "Supplementaries Squared",
    "cat": "deco"
  },
  {
    "name": "TerraBlender (Fabric)",
    "cat": "tech"
  },
  {
    "name": "Tidal Towns",
    "cat": "world"
  },
  {
    "name": "Towns and Towers",
    "cat": "world"
  },
  {
    "name": "Trek",
    "cat": "world"
  },
  {
    "name": "Trinkets",
    "cat": "gear"
  },
  {
    "name": "VanillaBackport",
    "cat": "tech"
  },
  {
    "name": "Vegan Delight",
    "cat": "food"
  },
  {
    "name": "Villager Names",
    "cat": "creatures"
  },
  {
    "name": "WI Zoom",
    "cat": "ui"
  },
  {
    "name": "Waystones",
    "cat": "world"
  },
  {
    "name": "Xaero's Minimap",
    "cat": "ui"
  },
  {
    "name": "Xaero's World Map",
    "cat": "ui"
  },
  {
    "name": "YUNG's API",
    "cat": "tech"
  },
  {
    "name": "YetAnotherConfigLib",
    "cat": "tech"
  },
  {
    "name": "[Let's Do Addon] Compat",
    "cat": "tech"
  },
  {
    "name": "[Let's Do] API",
    "cat": "tech"
  },
  {
    "name": "[Let's Do] Bakery",
    "cat": "food"
  },
  {
    "name": "[Let's Do] BloomingNature",
    "cat": "world"
  },
  {
    "name": "[Let's Do] Brewery",
    "cat": "food"
  },
  {
    "name": "[Let's Do] Candlelight",
    "cat": "deco"
  },
  {
    "name": "[Let's Do] Farm & Charm",
    "cat": "food"
  },
  {
    "name": "[Let's Do] Furniture",
    "cat": "deco"
  },
  {
    "name": "[Let's Do] HerbalBrews",
    "cat": "food"
  },
  {
    "name": "[Let's Do] LilisPottery",
    "cat": "deco"
  },
  {
    "name": "[Let's Do] Meadow",
    "cat": "world"
  },
  {
    "name": "[Let's Do] Vinery",
    "cat": "food"
  },
  {
    "name": "[Let's Do] WilderNature",
    "cat": "world"
  },
  {
    "name": "[Let's Do] Camping",
    "cat": "deco"
  },
  {
    "name": "choppersdelight",
    "cat": "food"
  },
  {
    "name": "oωo",
    "cat": "creatures"
  },
  {
    "name": "playerAnimator",
    "cat": "tech"
  }
];

const grid = document.getElementById("mods-grid");
const searchInput = document.getElementById("mods-search");
const emptyMsg = document.getElementById("mods-empty");
const countEl = document.getElementById("mods-count");
const filterBar = document.getElementById("mods-filters");

let activeCat = "all";

if (countEl) countEl.textContent = MODS.length;

// Build filter buttons: "Tous" + one per category (only categories that have mods)
function buildFilters() {
  const order = Object.keys(CATEGORIES);
  const counts = {};
  MODS.forEach((m) => { counts[m.cat] = (counts[m.cat] || 0) + 1; });

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "filter-chip active";
  allBtn.dataset.cat = "all";
  allBtn.textContent = "Tous (" + MODS.length + ")";
  filterBar.appendChild(allBtn);

  order.forEach((key) => {
    if (!counts[key]) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-chip";
    btn.dataset.cat = key;
    btn.textContent = CATEGORIES[key] + " (" + counts[key] + ")";
    filterBar.appendChild(btn);
  });

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    [...filterBar.children].forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
}

function renderMods(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;
  const frag = document.createDocumentFragment();
  list.forEach((mod) => {
    const li = document.createElement("li");
    li.className = "mod-pill";
    li.textContent = mod.name;
    li.title = CATEGORIES[mod.cat];
    frag.appendChild(li);
  });
  grid.appendChild(frag);
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  let list = MODS;
  if (activeCat !== "all") {
    list = list.filter((m) => m.cat === activeCat);
  }
  if (q) {
    list = list.filter((m) => m.name.toLowerCase().includes(q));
  }
  renderMods(list);
}

buildFilters();
renderMods(MODS);

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}
