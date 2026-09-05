// Reformed & Puritan Japanese Hub - Solid Standalone Engine v25.0

// ==========================================
// 1. Fully Embedded Master Database (Zero Loading Delay, No External Dependency)
// ==========================================
var MASTER_SITE_DATABASE = (typeof window !== 'undefined' && (window.SITE_DATA || window.MASTER_SITE_DATABASE)) ? (window.SITE_DATA || window.MASTER_SITE_DATABASE) : { mainMenus: [], categories: [], articles: [], featured: {} };

// Canonical 66 Books Order Mapping for Sermons
const BIBLE_66_ORDER = {
  // Old Testament (1-39)
  "창세기": 1, "創世記": 1, "Genesis": 1,
  "출애굽기": 2, "出エジプト記": 2, "Exodus": 2,
  "레위기": 3, "レビ記": 3, "Leviticus": 3,
  "민수기": 4, "民数記": 4, "Numbers": 4,
  "신명기": 5, "申命記": 5, "Deuteronomy": 5,
  "여호수아": 6, "ヨシュア記": 6, "Joshua": 6,
  "사사기": 7, "士師記": 7, "Judges": 7,
  "룻기": 8, "ルツ記": 8, "Ruth": 8,
  "사무엘상": 9, "サムエル記上": 9, "サムエル記第一": 9, "1 Samuel": 9,
  "사무엘하": 10, "サムエル記下": 10, "サムエル記第二": 10, "2 Samuel": 10,
  "열왕기상": 11, "列王記上": 11, "列王記第一": 11, "1 Kings": 11,
  "열왕기하": 12, "列王記下": 12, "列王記第二": 12, "2 Kings": 12,
  "역대상": 13, "歴代誌上": 13, "歴代誌第一": 13, "1 Chronicles": 13,
  "역대하": 14, "歴代誌下": 14, "歴代誌第二": 14, "2 Chronicles": 14,
  "에스라": 15, "エズラ記": 15, "Ezra": 15,
  "느헤미야": 16, "ネヘミヤ記": 16, "Nehemiah": 16,
  "에스더": 17, "エステル記": 17, "Esther": 17,
  "욥기": 18, "ヨブ記": 18, "Job": 18,
  "시편": 19, "詩篇": 19, "Psalms": 19,
  "잠언": 20, "箴言": 20, "Proverbs": 20,
  "전도서": 21, "伝道者の書": 21, "伝道の書": 21, "Ecclesiastes": 21,
  "아가": 22, "雅歌": 22, "Song of Solomon": 22,
  "이사야": 23, "イザヤ書": 23, "Isaiah": 23,
  "예레미야": 24, "エレミヤ書": 24, "Jeremiah": 24,
  "예레미야애가": 25, "哀歌": 25, "Lamentations": 25,
  "에스겔": 26, "エゼキエル書": 26, "Ezekiel": 26,
  "다니엘": 27, "ダニエル書": 27, "Daniel": 27,
  "호세아": 28, "ホセア書": 28, "Hosea": 28,
  "요엘": 29, "ヨエル書": 29, "Joel": 29,
  "아모스": 30, "アモス書": 30, "Amos": 30,
  "오바댜": 31, "オバデヤ書": 31, "Obadiah": 31,
  "요나": 32, "ヨナ書": 32, "Jonah": 32,
  "미가": 33, "ミカ書": 33, "Micah": 33,
  "나훔": 34, "ナホム書": 34, "Nahum": 34,
  "하박국": 35, "ハバクク書": 35, "Habakkuk": 35,
  "스바냐": 36, "ゼパニヤ書": 36, "Zephaniah": 36,
  "학개": 37, "ハガイ書": 37, "Haggai": 37,
  "스가랴": 38, "ゼカリヤ書": 38, "Zechariah": 38,
  "말라기": 39, "マラキ書": 39, "Malachi": 39,

  // New Testament (40-66)
  "마태복음": 40, "マタイによる福音書": 40, "マタイの福音書": 40, "Matthew": 40,
  "마가복음": 41, "マルコによる福音書": 41, "マルコの福音書": 41, "Mark": 41,
  "누가복음": 42, "ルカによる福音書": 42, "ルカの福音書": 42, "Luke": 42,
  "요한복음": 43, "ヨハネによる福音書": 43, "ヨハネの福音書": 43, "John": 43,
  "사도행전": 44, "使徒行伝": 44, "使徒の働き": 44, "Acts": 44,
  "로마서": 45, "ローマ人への手紙": 45, "ローマの信徒への手紙": 45, "Romans": 45,
  "고린도전서": 46, "コリント人への手紙第一": 46, "コリントの信徒への手紙一": 46, "1 Corinthians": 46,
  "고린도후서": 47, "コリント人への手紙第二": 47, "コリントの信徒への手紙二": 47, "2 Corinthians": 47,
  "갈라디아서": 48, "ガラテヤ人への手紙": 48, "ガラテヤ書": 48, "Galatians": 48,
  "에베소서": 49, "エフェソス人への手紙": 49, "エフェソス": 49, "Ephesians": 49,
  "빌립보서": 50, "ピリピ人への手紙": 50, "フィリピの信徒への手紙": 50, "Philippians": 50,
  "골로새서": 51, "コロサイ人への手紙": 51, "コロサイの信徒への手紙": 51, "Colossians": 51,
  "데살로니가전서": 52, "テサロニケ人への手紙第一": 52, "1 Thessalonians": 52,
  "데살로니가후서": 53, "テサロニケ人への手紙第二": 53, "2 Thessalonians": 53,
  "디모데전서": 54, "テモテへの手紙第一": 54, "1 Timothy": 54,
  "디모데후서": 55, "テモテへの手紙第二": 55, "2 Timothy": 55,
  "디도서": 56, "テトスへの手紙": 56, "Titus": 56,
  "빌레몬서": 57, "ピレモンへの手紙": 57, "フィレモンへの手紙": 57, "Philemon": 57,
  "히브리서": 58, "ヘブル人への手紙": 58, "ヘブライ人への手紙": 58, "Hebrews": 58,
  "야고보서": 59, "ヤコブの手紙": 59, "James": 59,
  "베드로전서": 60, "ペテロの手紙第一": 60, "ペトロの手紙一": 60, "1 Peter": 60,
  "베드로후서": 61, "ペテロの手紙第二": 61, "ペトロの手紙二": 61, "2 Peter": 61,
  "요한일서": 62, "ヨハネの手紙第一": 62, "1 John": 62,
  "요한이서": 63, "ヨハネの手紙第二": 63, "2 John": 63,
  "요한삼서": 64, "ヨハネの手紙第三": 64, "3 John": 64,
  "유다서": 65, "ユダの手紙": 65, "ユダ": 65, "Jude": 65,
  "요한계시록": 66, "ヨハネの黙示録": 66, "Revelation": 66,

  // Special Topics
  "예수님의 이적비유": 67, "イエスの奇跡とたとえ話": 67
};

function getCategorySortKey(cat) {
  if (!cat) return 999999;
  if (cat.parentId === 'sermon' || cat.parent === 'sermon') {
    if (cat.nameKr && BIBLE_66_ORDER[cat.nameKr] !== undefined) return BIBLE_66_ORDER[cat.nameKr];
    if (cat.nameJp && BIBLE_66_ORDER[cat.nameJp] !== undefined) return BIBLE_66_ORDER[cat.nameJp];
    for (const [k, v] of Object.entries(BIBLE_66_ORDER)) {
      if ((cat.nameKr && cat.nameKr.includes(k)) || (cat.nameJp && cat.nameJp.includes(k))) {
        return v;
      }
    }
  }
  if (cat.position !== undefined && cat.position !== null) {
    return Number(cat.position);
  }
  const match = (cat.nameKr || cat.nameJp || '').match(/(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 999999;
}

function sortCategoriesList(cats) {
  return cats.sort((a, b) => {
    const keyA = getCategorySortKey(a);
    const keyB = getCategorySortKey(b);
    if (keyA !== keyB) return keyA - keyB;
    return (a.nameJp || a.nameKr || '').localeCompare(b.nameJp || b.nameKr || '', undefined, { numeric: true });
  });
}

// Extract numerical sort key from title and category (Chapter order 1~33, WCF sections [1절]/[1節], catechism questions 第1問/질문 1, etc.)
function getArticleSortKey(art) {
  if (!art) return { catOrder: 999999, secNum: 999999, pos: 999999, id: '' };
  
  // 1. Calculate Category / Chapter Order
  let catOrder = 0;
  if (art.categoryId) {
    const cat = (state.categories || []).find(c => c.id === art.categoryId);
    if (cat) {
      if (cat.position !== undefined && cat.position !== null) {
        catOrder = Number(cat.position);
      } else {
        catOrder = getCategorySortKey(cat);
      }
    } else {
      const matchWcf = art.categoryId.match(/cat_wcf_0*(\d+)/i);
      if (matchWcf) {
        catOrder = parseInt(matchWcf[1], 10);
      }
    }
  }

  const title = (art.title || '').trim();
  let secNum = 999999;
  
  // 2. WCF sections: [1절], [1節], [1-2절], [1-2節], [1-7절], etc.
  let m = title.match(/\[\s*(\d+)(?:-\d+)?\s*(?:절|節)\s*\]/);
  if (m) {
    secNum = parseInt(m[1], 10);
  } else {
    // 3. Catechism Questions: 第1問, 第129問, 질문 1, 질문 129, Q1, Q129, Question 1
    m = title.match(/(?:第|질문|Q|Question)\s*(\d+)\s*(?:問|:|：|\.|\s)/i);
    if (m) {
      secNum = parseInt(m[1], 10);
    } else {
      // 4. Leading numbers e.g. "1. ", "01_", "1-1."
      m = title.match(/^(\d+)[\.\_\:\s]/);
      if (m) {
        secNum = parseInt(m[1], 10);
      } else {
        secNum = (art.position !== undefined && art.position !== null) ? Number(art.position) : 999999;
      }
    }
  }
  
  const pos = (art.position !== undefined && art.position !== null) ? Number(art.position) : 999999;
  return { catOrder: catOrder, secNum: secNum, num: secNum, pos: pos, id: art.id || '' };
}

// Preserve session states
try {
  sessionStorage.removeItem('wscal_user_menu');
  sessionStorage.removeItem('wscal_user_category');
  sessionStorage.removeItem('wscal_user_article');
} catch(e) {}

let state = {
  mainMenus: [],
  categories: [],
  articles: [],
  featured: {},
  currentMenu: null,       // Selected main menu ID
  currentCategory: null,   // Selected category ID
  currentArticle: null,    // Selected article object
  isAdmin: false,
  adminTab: 'folders',     // 'folders', 'mainmenus', 'write', 'articles', 'featured'
  editArticleId: null,     // If editing an article, stores ID
  collapsedCategories: {}, // Map of categoryId to boolean indicating if it is collapsed
  pagination: {
    currentPage: 1,
    pageSize: 10
  },
  adminPagination: {
    currentPage: 1,
    pageSize: 10
  },
  theologyMode: 'topic',           // 'topic' (조직신학별), 'author' (저자별), 'combined' (통합선택)
  theologyAuthor: 'all',          // 'all' or specific author name (for author mode)
  theologyFilterAuthor: 'all',    // 'all' or specific author name (for combined mode)
  theologyFilterCategory: 'all',  // 'all' or specific categoryId (for combined mode)
  articleViewMode: sessionStorage.getItem('wscal_article_view_mode') || 'cards' // 'cards' (상세카드보기) or 'table' (제목/전체목록보기)
};

// Synchronously load data from MASTER_SITE_DATABASE / localStorage and update state instantly
function loadLocalStorageOnly() {
  const embeddedArts = (MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.articles) || [];
  const embeddedCats = (MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.categories) || [];
  const embeddedMenus = (MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.mainMenus) || [];
  const embeddedFeat = (MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.featured) || {};

  let cachedArts = null;
  let cachedCats = null;
  let cachedMenus = null;
  let cachedFeat = null;

  try {
    const rawArts = localStorage.getItem('wscal_articles_v29');
    if (rawArts) cachedArts = JSON.parse(rawArts);
  } catch (e) {}

  try {
    const rawCats = localStorage.getItem('wscal_categories_v29');
    if (rawCats) cachedCats = JSON.parse(rawCats);
  } catch (e) {}

  try {
    const rawMenus = localStorage.getItem('wscal_mainmenus_v29');
    if (rawMenus) cachedMenus = JSON.parse(rawMenus);
  } catch (e) {}

  try {
    const rawFeat = localStorage.getItem('wscal_featured_v29');
    if (rawFeat) cachedFeat = JSON.parse(rawFeat);
  } catch (e) {}

  // Prefer the dataset that has more entries (prevents stale localStorage from shadowing newly added articles)
  state.articles = (embeddedArts.length >= (cachedArts ? cachedArts.length : 0)) ? embeddedArts : (cachedArts || embeddedArts);
  state.categories = (embeddedCats.length >= (cachedCats ? cachedCats.length : 0)) ? embeddedCats : (cachedCats || embeddedCats);
  state.mainMenus = (embeddedMenus.length >= (cachedMenus ? cachedMenus.length : 0)) ? embeddedMenus : (cachedMenus || embeddedMenus);
  state.featured = (embeddedFeat && Object.keys(embeddedFeat).length > 0) ? embeddedFeat : (cachedFeat || embeddedFeat);

  const defaultMenuIds = ['menu_1787468975888', 'sermon', 'catechism', 'theology', 'discipleship', 'pastor'];
  state.mainMenus.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : defaultMenuIds.indexOf(a.id);
    const posB = b.position !== undefined ? b.position : defaultMenuIds.indexOf(b.id);
    return (posA >= 0 ? posA : 999) - (posB >= 0 ? posB : 999);
  });
  sortCategoriesList(state.categories);
}

async function initApp() {
  // Clear any old session states on new version load
  if (sessionStorage.getItem('wscal_version') !== 'v29') {
    sessionStorage.removeItem('wscal_user_menu');
    sessionStorage.removeItem('wscal_user_category');
    sessionStorage.removeItem('wscal_user_article');
    sessionStorage.setItem('wscal_version', 'v29');
    try {
      localStorage.removeItem('wscal_articles_v28');
      localStorage.removeItem('wscal_categories_v28');
      localStorage.removeItem('wscal_mainmenus_v28');
      localStorage.removeItem('wscal_featured_v28');
    } catch(e) {}
  }
  if (sessionStorage.getItem('wscal_admin_logged') === 'true' || localStorage.getItem('wscal_admin_logged') === 'true') {
    state.isAdmin = true;
  }
  console.log("Initializing App (Static GitHub Engine)...");

  // 1. Render instantly using LocalStorage / Embedded DB (Zero delay UI load)
  loadLocalStorageOnly();
  initializeCollapsedStates();
  renderMainMenuCards();
  renderFeaturedBlocks();
  renderRecentArticles();
  updateAdminNavAndFloatingButtons();

  // 2. Fetch fresh data.json in the background to update data (Non-blocking)
  try {
    const res = await fetch('./data.json?t=' + Date.now());
    if (res.ok) {
      const fileData = await res.json();
      console.log("Successfully fetched latest data.json.");

      if (fileData.mainMenus && fileData.mainMenus.length > 0) {
        state.mainMenus = fileData.mainMenus;
        try { localStorage.setItem('wscal_mainmenus_v29', JSON.stringify(fileData.mainMenus)); } catch(e) {}
      }
      if (fileData.categories && fileData.categories.length > 0) {
        state.categories = fileData.categories;
        try { localStorage.setItem('wscal_categories_v29', JSON.stringify(fileData.categories)); } catch(e) {}
      }
      if (fileData.featured) {
        state.featured = fileData.featured;
        try { localStorage.setItem('wscal_featured_v29', JSON.stringify(fileData.featured)); } catch(e) {}
      }
      if (fileData.articles && fileData.articles.length > 0) {
        // If fileData has more or equal articles than state, adopt it
        if (fileData.articles.length >= state.articles.length) {
          state.articles = fileData.articles;
        }
        try { localStorage.setItem('wscal_articles_v29', JSON.stringify(fileData.articles)); } catch(e) {}
      }

      initializeCollapsedStates();
      renderMainMenuCards();
      renderFeaturedBlocks();
      renderRecentArticles();

      // Refresh workspace if open
      if (state.currentCategory) {
        renderWorkspaceSidebar();
        renderArticlesList();
      }
    }
  } catch (err) {
    console.warn("Background fetch of data.json skipped/failed:", err);
  }

  // 3. Check login state and restore exact previous view (Admin Panel or User Site)
  if (sessionStorage.getItem('wscal_admin_logged') === 'true') {
    state.isAdmin = true;
    const savedView = sessionStorage.getItem('wscal_current_view');
    if (savedView === 'admin') {
      const savedTab = sessionStorage.getItem('wscal_admin_tab') || 'folders';
      showAdminDashboard(savedTab);
    } else {
      returnToUserSite();
      restoreLastUserState();
    }
  } else {
    renderHomepageQuickAdminBar();
    updateAdminNavAndFloatingButtons();
    restoreLastUserState();
  }

  console.log("App initialization complete.");
  startBgmAuto();
}

// Restore last viewed category, article, or menu upon page reload
function restoreLastUserState() {
  const savedMenu = sessionStorage.getItem('wscal_user_menu');
  const savedCat = sessionStorage.getItem('wscal_user_category');
  const savedArt = sessionStorage.getItem('wscal_user_article');

  if (savedArt) {
    const art = state.articles.find(a => a.id === savedArt);
    if (art) {
      selectSubcategory(art.categoryId, false);
      viewArticleDetail(savedArt);
      return true;
    }
  }

  if (savedCat) {
    const cat = state.categories.find(c => c.id === savedCat);
    if (cat) {
      selectSubcategory(savedCat, false);
      return true;
    }
  }

  if (savedMenu) {
    const menu = state.mainMenus.find(m => m.id === savedMenu);
    if (menu) {
      selectMainMenu(savedMenu);
      return true;
    }
  }

  return false;
}

// Load articles dynamically from cache
function listenArticles() {
  loadArticlesFallback();
}

// Load articles from LocalStorage or MASTER_SITE_DATABASE
function loadArticlesFallback() {
  const embeddedArts = (MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.articles) || [];
  let cachedArts = null;
  try {
    const raw = localStorage.getItem('wscal_articles_v29');
    if (raw) cachedArts = JSON.parse(raw);
  } catch (e) {}

  state.articles = (embeddedArts.length >= (cachedArts ? cachedArts.length : 0)) ? embeddedArts : (cachedArts || embeddedArts);
  
  // Sort articles locally
  state.articles.sort((a, b) => {
    const keyA = getArticleSortKey(a);
    const keyB = getArticleSortKey(b);
    if (keyA.catOrder !== keyB.catOrder) return keyA.catOrder - keyB.catOrder;
    if (keyA.secNum !== keyB.secNum) return keyA.secNum - keyB.secNum;
    if (keyA.pos !== keyB.pos) return keyA.pos - keyB.pos;
    const dateA = a.createdAt || '';
    const dateB = b.createdAt || '';
    const dateCompare = dateB.localeCompare(dateA);
    if (dateCompare !== 0) return dateCompare;
    return (a.id || '').localeCompare(b.id || '');
  });

  renderRecentArticles();
  if (state.currentCategory) {
    renderArticlesList();
  }
  if (state.isAdmin) {
    renderAdminArticleList();
  }
}

async function loadLocalDataFallback() {
  console.log("Loading local fallbacks (checking data.json)...");
  let fetchedData = null;
  try {
    const res = await fetch('./data.json?t=' + Date.now());
    if (res.ok) {
      fetchedData = await res.json();
      console.log("Successfully loaded fallback configuration from data.json");
    }
  } catch (err) {
    console.warn("Failed to fetch data.json for local fallback:", err);
  }

  if (fetchedData) {
    if (fetchedData.mainMenus) {
      state.mainMenus = fetchedData.mainMenus;
      try { localStorage.setItem('wscal_mainmenus_v29', JSON.stringify(fetchedData.mainMenus)); } catch(e) {}
    }
    if (fetchedData.categories) {
      state.categories = fetchedData.categories;
      try { localStorage.setItem('wscal_categories_v29', JSON.stringify(fetchedData.categories)); } catch(e) {}
    }
    if (fetchedData.featured) {
      state.featured = fetchedData.featured;
      try { localStorage.setItem('wscal_featured_v29', JSON.stringify(fetchedData.featured)); } catch(e) {}
    }
    if (fetchedData.articles && fetchedData.articles.length >= state.articles.length) {
      state.articles = fetchedData.articles;
      try { localStorage.setItem('wscal_articles_v29', JSON.stringify(fetchedData.articles)); } catch(e) {}
    }
  }
}

// Save back to LocalStorage & Sync to GitHub
async function saveMainMenus() {
  try { localStorage.setItem('wscal_mainmenus_v29', JSON.stringify(state.mainMenus)); } catch(e) {}
  syncDataJsonToGitHub();
}
async function saveCategories() {
  try { localStorage.setItem('wscal_categories_v29', JSON.stringify(state.categories)); } catch(e) {}
  syncDataJsonToGitHub();
}
function saveArticles() {
  try { localStorage.setItem('wscal_articles_v29', JSON.stringify(state.articles)); } catch(e) {}
}
async function saveFeatured() {
  try { localStorage.setItem('wscal_featured_v29', JSON.stringify(state.featured)); } catch(e) {}
  syncDataJsonToGitHub();
}

// Render Dynamic Main Menu Cards & Footer Navigation Links
function renderMainMenuCards() {
  const container = document.getElementById('main-menu-sec');
  if (!container) return;

  // Clear existing static menus
  container.innerHTML = '';

  // Dynamic grid template columns adjustment to fit count of cards
  container.style.gridTemplateColumns = `repeat(${state.mainMenus.length}, 1fr)`;

  state.mainMenus.forEach(menu => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.dataset.menu = menu.id;
    card.onclick = () => selectMainMenu(menu.id);

    // Default icon if missing
    const iconClass = menu.icon || 'fa-circle-chevron-right';

    // Video tag support
    const videoLabel = menu.isVideo 
      ? `<div class="menu-title-sub" style="font-size: 0.75rem; color: var(--accent-color); margin-top: 4px; font-weight: 500;">動画講義</div>`
      : '';

    card.innerHTML = `
      <i class="fa-solid ${iconClass} menu-icon"></i>
      <div class="menu-title-jp">${menu.nameJp}</div>
      ${videoLabel}
    `;
    container.appendChild(card);
  });

  // Render Footer Quick Links
  const footerLinksList = document.getElementById('footer-main-menu-links');
  if (footerLinksList) {
    footerLinksList.innerHTML = '';
    state.mainMenus.forEach(menu => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" onclick="event.preventDefault(); selectMainMenu('${menu.id}')">${menu.nameJp}</a>`;
      footerLinksList.appendChild(li);
    });
  }
}

// ==========================================
// 3. User Interface Navigation
// ==========================================

// Click Home Logo
document.getElementById('logo-home').addEventListener('click', () => {
  // Clear saved user view states
  sessionStorage.removeItem('wscal_user_menu');
  sessionStorage.removeItem('wscal_user_category');
  sessionStorage.removeItem('wscal_user_article');

  // If admin dashboard is open, close it and return to user view while maintaining admin session
  const adminSec = document.getElementById('admin-dashboard-sec');
  if (adminSec && adminSec.classList.contains('active')) {
    returnToUserSite();
    return;
  }
  
  // Reset navigation states
  state.currentMenu = null;
  state.currentCategory = null;
  state.currentArticle = null;

  // UI Resets
  document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('submenu-sec').classList.remove('active');
  document.getElementById('workspace-sec').classList.remove('active');
  
  // Show Main Elements
  document.getElementById('hero-sec').style.display = 'block';
  document.getElementById('main-menu-sec').style.display = 'grid';
  const featSec = document.getElementById('featured-sec');
  if (featSec) featSec.style.display = 'block';

  renderHomepageQuickAdminBar();

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// YouTube ID extractor helper
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Translate Korean to Japanese helper using free Google Translate API with static fallback dictionary
async function translateKoToJa(text) {
  if (!text) return "";
  
  // Skip translation if there is no Korean character in the input
  const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
  if (!hasKorean) return text;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=ja&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0];
    }
  } catch (error) {
    console.error("Translation API failed. Using static fallback.", error);
    // Common theological/ministry terms static translation fallback
    const dictionary = {
      "성경강해": "聖書講解",
      "성경주석": "聖書講解", // '성경주석'도 '성경강해(聖書講解)'로 자동 번역되도록 수정!
      "성경 주석": "聖書講解",
      "성경 강해": "聖書講解",
      "교리교육": "教理教育",
      "기독론": "キリスト論",
      "구원론": "救済論",
      "신론": "神論",
      "인간론": "人間論",
      "교회론": "教会論",
      "종말론": "終末論",
      "로마서": "ローマの信徒への手紙",
      "마태복음": "マタイによる福音書",
      "조직신학": "組織神学",
      "역사신학": "歴史神学",
      "실천신학": "実践神学",
      "요한복음": "ヨハネによる福音書",
      "창세기": "創世記",
      "동영상 강의": "動画講義",
      "동영상": "動画",
      "설교": "説教"
    };
    
    let fallbackText = text;
    for (const key in dictionary) {
      if (fallbackText.includes(key)) {
        fallbackText = fallbackText.replace(new RegExp(key, 'g'), dictionary[key]);
      }
    }
    return fallbackText;
  }
  return text;
}

// Translate Japanese to Korean helper using free Google Translate API with static fallback dictionary
async function translateJaToKo(text) {
  if (!text) return "";
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=ko&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0];
    }
  } catch (error) {
    console.error("Translation API (Ja->Ko) failed. Using static fallback.", error);
    const dictionary = {
      "聖書講解": "성경강해",
      "聖書注解": "성경강해", // 주석도 강해로 매핑
      "教理教育": "교리교육",
      "キリスト論": "기독론",
      "救済論": "구원론",
      "ローマの信徒への手紙": "로마서",
      "マタイによる福音書": "마태복음",
      "組織神学": "조직신학",
      "歴史神学": "역사신학",
      "実践神学": "실천신학",
      "ヨハネによる福音書": "요한복음",
      "創世記": "창세기",
      "動画講義": "동영상 강의"
    };
    let fallbackText = text;
    for (const key in dictionary) {
      if (fallbackText.includes(key)) {
        fallbackText = fallbackText.replace(new RegExp(key, 'g'), dictionary[key]);
      }
    }
    return fallbackText;
  }
  return text;
}

// Generate dual language name object { nameJp, nameKr } based on input text
async function createDualLanguageCategory(inputName) {
  const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(inputName);
  let nameJp = "";
  let nameKr = "";

  if (hasKorean) {
    nameKr = inputName;
    nameJp = await translateKoToJa(inputName);
  } else {
    nameJp = inputName;
    nameKr = await translateJaToKo(inputName);
  }
  
  // 추가적으로 한글로 입력된 '주석' 키워드가 있다면 번역본이나 한글본에서도 강해로 보정
  if (nameKr.includes("주석")) {
    nameKr = nameKr.replace(/주석/g, "강해");
  }
  if (nameJp.includes("注解")) {
    nameJp = nameJp.replace(/注解/g, "講解");
  }

  return { nameJp, nameKr };
}

// Build flat list representation of hierarchical categories for tree rendering
function buildFlatTree(parentId, depth = 0) {
  let list = [];
  // Sort categories canonically and by position
  const children = state.categories.filter(cat => cat.parentId === parentId);
  sortCategoriesList(children);
  children.forEach(child => {
    list.push({ ...child, depth: depth });
    list = list.concat(buildFlatTree(child.id, depth + 1));
  });
  return list;
}

// Find all descendant category IDs recursively (useful for recursive deletion or article filtering)
function getAllDescendantCategoryIds(catId) {
  let ids = [catId];
  const children = state.categories.filter(cat => cat.parentId === catId);
  children.forEach(child => {
    ids = ids.concat(getAllDescendantCategoryIds(child.id));
  });
  return ids;
}

// Check if category belongs to theology (改革派神学 / 개혁신학)
function isTheologyCategory(catId) {
  if (!catId) return false;
  if (catId === 'theology') return true;
  let currentId = catId;
  while (currentId) {
    if (currentId === 'theology') return true;
    const cat = state.categories.find(c => c.id === currentId);
    if (!cat) break;
    currentId = cat.parentId;
  }
  return false;
}
// Get list of unique authors in Reformed Theology (改革派神学 저자 목록 추출)
function getTheologyAuthors() {
  const theologyArticles = state.articles.filter(art => isTheologyCategory(art.categoryId));
  const authorMap = {};
  theologyArticles.forEach(art => {
    const authorName = (art.author || '').trim() || '未設定';
    authorMap[authorName] = (authorMap[authorName] || 0) + 1;
  });
  return Object.keys(authorMap).map(name => ({
    name: name,
    count: authorMap[name]
  })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

// Switch between 3 Modes in Reformed Theology (1. 조직신학별, 2. 저자별, 3. 통합선택)
function setTheologyMode(mode) {
  state.theologyMode = mode;
  state.pagination.currentPage = 1;

  if (mode === 'author') {
    if (!state.theologyAuthor) state.theologyAuthor = 'all';
  } else if (mode === 'combined') {
    const authors = getTheologyAuthors();
    const categories = buildFlatTree('theology', 0);
    if (!state.theologyFilterAuthor || state.theologyFilterAuthor === 'all') {
      state.theologyFilterAuthor = authors.length > 0 ? authors[0].name : '';
    }
    if (!state.theologyFilterCategory || state.theologyFilterCategory === 'all') {
      state.theologyFilterCategory = categories.length > 0 ? categories[0].id : '';
    }
  } else {
    // topic mode: ensure a subcategory is selected
    if (!state.currentCategory || !isTheologyCategory(state.currentCategory)) {
      const allSubCats = buildFlatTree('theology', 0).sort((a, b) => (a.position || 0) - (b.position || 0));
      if (allSubCats.length > 0) {
        state.currentCategory = allSubCats[0].id;
      }
    }
  }

  renderTheologySubmenu();
  renderWorkspaceSidebar();
  renderArticlesList();
}

// Select a specific author in Reformed Theology (Author Mode)
function selectTheologyAuthor(authorName) {
  state.theologyAuthor = authorName;
  state.theologyMode = 'author';
  state.pagination.currentPage = 1;

  renderTheologySubmenu();
  renderWorkspaceSidebar();
  renderArticlesList();

  const workspaceSec = document.getElementById('workspace-sec');
  if (workspaceSec) {
    workspaceSec.classList.add('active');
    document.getElementById('view-article-list').style.display = 'block';
    document.getElementById('view-article-detail').style.display = 'none';
  }
}

// Set Combined Filters (Combined Mode: 著者 & 主題 統合選択)
function setTheologyCombinedFilter(type, value) {
  state.theologyMode = 'combined';
  state.pagination.currentPage = 1;

  if (type === 'author') {
    state.theologyFilterAuthor = value;
  } else if (type === 'category') {
    state.theologyFilterCategory = value;
  }

  renderTheologySubmenu();
  renderWorkspaceSidebar();
  renderArticlesList();

  const workspaceSec = document.getElementById('workspace-sec');
  if (workspaceSec) {
    workspaceSec.classList.add('active');
    document.getElementById('view-article-list').style.display = 'block';
    document.getElementById('view-article-detail').style.display = 'none';
  }
}

// Reset Combined Filters
function resetTheologyCombinedFilter() {
  state.theologyFilterAuthor = 'all';
  state.theologyFilterCategory = 'all';
  state.theologyMode = 'combined';
  state.pagination.currentPage = 1;

  renderTheologySubmenu();
  renderWorkspaceSidebar();
  renderArticlesList();
}

// Render submenu for Reformed Theology based on active mode
function renderTheologySubmenu() {
  const submenuGrid = document.getElementById('submenu-items-container');
  const categoryTitle = document.getElementById('submenu-category-title');
  if (!submenuGrid) return;

  if (categoryTitle) {
    categoryTitle.innerHTML = `
      <div class="theology-mode-wrapper">
        <div style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 700; color: var(--primary-color); display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-graduation-cap"></i> 改革派神学 (개혁신학)
        </div>
        <div class="theology-mode-tabs">
          <button type="button" class="btn-theology-tab ${state.theologyMode === 'topic' ? 'active' : ''}" onclick="setTheologyMode('topic')">
            <i class="fa-solid fa-layer-group"></i> 組織神学・分野別
          </button>
          <button type="button" class="btn-theology-tab ${state.theologyMode === 'author' ? 'active' : ''}" onclick="setTheologyMode('author')">
            <i class="fa-solid fa-user-pen"></i> 著者別
          </button>
          <button type="button" class="btn-theology-tab ${state.theologyMode === 'combined' ? 'active' : ''}" onclick="setTheologyMode('combined')">
            <i class="fa-solid fa-sliders"></i> 著者＆主題 統合選択
          </button>
        </div>
      </div>
    `;
  }

  submenuGrid.innerHTML = '';

  if (state.theologyMode === 'combined') {
    // 3. Combined Filter Mode UI
    const authors = getTheologyAuthors();
    const categories = buildFlatTree('theology', 0);
    const theologyArticles = state.articles.filter(art => isTheologyCategory(art.categoryId));
    
    // Count matches for status bar
    const matchedCount = theologyArticles.filter(art => {
      const matchAuth = state.theologyFilterAuthor === 'all' || (art.author || '').trim() === state.theologyFilterAuthor;
      const matchCat = state.theologyFilterCategory === 'all' || getAllDescendantCategoryIds(state.theologyFilterCategory).includes(art.categoryId);
      return matchAuth && matchCat;
    }).length;

    if ((!state.theologyFilterAuthor || state.theologyFilterAuthor === 'all') && authors.length > 0) {
      state.theologyFilterAuthor = authors[0].name;
    }
    if ((!state.theologyFilterCategory || state.theologyFilterCategory === 'all') && categories.length > 0) {
      state.theologyFilterCategory = categories[0].id;
    }

    const authorOptions = authors.map(a => `<option value="${a.name}" ${state.theologyFilterAuthor === a.name ? 'selected' : ''}>👤 ${a.name} (${a.count}件)</option>`).join('');
    const categoryOptions = categories.map(c => `<option value="${c.id}" ${state.theologyFilterCategory === c.id ? 'selected' : ''}>${'&nbsp;&nbsp;'.repeat(c.depth)}${c.depth > 0 ? '└ ' : '📑 '}${c.nameJp}</option>`).join('');
    
    const catObj = state.categories.find(c => c.id === state.theologyFilterCategory);
    const catName = catObj ? catObj.nameJp : state.theologyFilterCategory;
    const authName = state.theologyFilterAuthor;

    const filterBox = document.createElement('div');
    filterBox.className = 'theology-combined-filter-box';
    filterBox.innerHTML = `
      <div class="theology-filter-row">
        <div class="theology-filter-group">
          <label class="theology-filter-label"><i class="fa-solid fa-user"></i> 著者選択 (저자 선택)</label>
          <select class="theology-filter-select" onchange="setTheologyCombinedFilter('author', this.value)">
            ${authorOptions}
          </select>
        </div>
        <div class="theology-filter-group">
          <label class="theology-filter-label"><i class="fa-solid fa-book-open"></i> 主題・分野選択 (주제 선택)</label>
          <select class="theology-filter-select" onchange="setTheologyCombinedFilter('category', this.value)">
            ${categoryOptions}
          </select>
        </div>
      </div>
      <div class="theology-filter-status-bar">
        <span><i class="fa-solid fa-filter"></i> 適用中の条件: </span>
        <span class="theology-tag tag-active">저자: ${authName}</span>
        <span style="color: var(--text-light);">×</span>
        <span class="theology-tag tag-active">주제: ${catName}</span>
        <span class="theology-result-count">➔ 該当資料: <strong>${matchedCount}</strong> 件</span>
      </div>
    `;
    submenuGrid.appendChild(filterBox);

  } else if (state.theologyMode === 'author') {
    // 2. Author Mode UI
    const authors = getTheologyAuthors();
    const totalCount = state.articles.filter(art => isTheologyCategory(art.categoryId)).length;

    // All Authors Badge
    const allBadge = document.createElement('div');
    allBadge.className = `submenu-item ${state.theologyAuthor === 'all' ? 'active' : ''}`;
    allBadge.style.display = 'flex';
    allBadge.style.alignItems = 'center';
    allBadge.style.justifyContent = 'center';
    allBadge.style.padding = '12px 20px';
    allBadge.innerHTML = `
      <div class="theology-author-badge" style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700;">
        <i class="fa-solid fa-users"></i> すべての著者 <span class="theology-author-count">${totalCount}</span>
      </div>
    `;
    allBadge.onclick = () => selectTheologyAuthor('all');
    submenuGrid.appendChild(allBadge);

    // Individual Authors Badges
    authors.forEach(auth => {
      const badge = document.createElement('div');
      badge.className = `submenu-item ${state.theologyAuthor === auth.name ? 'active' : ''}`;
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.padding = '12px 20px';
      badge.innerHTML = `
        <div class="theology-author-badge" style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700;">
          <i class="fa-regular fa-user"></i> ${auth.name} <span class="theology-author-count">${auth.count}</span>
        </div>
      `;
      badge.onclick = () => selectTheologyAuthor(auth.name);
      submenuGrid.appendChild(badge);
    });
  } else {
    // 1. Topic Mode: root categories of theology
    const menuCats = (state.categories || []).filter(cat => cat.parentId === 'theology');
    sortCategoriesList(menuCats);
    menuCats.forEach(cat => {
      const badge = document.createElement('div');
      badge.className = `submenu-item ${cat.id === state.currentCategory ? 'active' : ''}`;
      badge.dataset.catId = cat.id;
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.padding = '12px 24px';
      badge.innerHTML = `
        <div style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700;">${cat.nameJp}</div>
      `;
      badge.onclick = () => selectSubcategory(cat.id, false);
      submenuGrid.appendChild(badge);
    });
  }
}


// Initialize categories collapse states
function initializeCollapsedStates() {
  state.collapsedCategories = {};
  state.categories.forEach(cat => {
    const hasChildren = state.categories.some(c => c.parentId === cat.id);
    if (hasChildren) {
      state.collapsedCategories[cat.id] = true; // Collapse by default if has children
    }
  });
}

// Recursive check if any ancestor of a category is collapsed
function isAnyAncestorCollapsed(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return false;

  const rootMenus = ['sermon', 'catechism', 'theology', 'discipleship', 'pastor', 'menu_1787468975888'];
  if (rootMenus.includes(cat.parentId)) {
    return false;
  }

  const parent = state.categories.find(c => c.id === cat.parentId);
  if (!parent) return false;

  if (state.collapsedCategories[parent.id] === true) {
    return true;
  }
  return isAnyAncestorCollapsed(parent.id);
}

// Smart merge server data into local storage to avoid overriding admin modifications
function mergeServerData(serverData) {
  // 1. Merge Main Menus
  const localMenus = JSON.parse(localStorage.getItem('wscal_mainmenus_v28')) || [];
  serverData.mainMenus.forEach(sm => {
    if (!localMenus.some(lm => lm.id === sm.id)) {
      localMenus.push(sm);
    }
  });
  localStorage.setItem('wscal_mainmenus_v28', JSON.stringify(localMenus));

  // 2. Merge Categories
  const localCats = JSON.parse(localStorage.getItem('wscal_categories_v28')) || [];
  serverData.categories.forEach(sc => {
    if (!localCats.some(lc => lc.id === sc.id)) {
      localCats.push(sc);
    }
  });
  localStorage.setItem('wscal_categories_v28', JSON.stringify(localCats));

  // 3. Merge Articles
  const localArts = JSON.parse(localStorage.getItem('wscal_articles_v28')) || [];
  serverData.articles.forEach(sa => {
    if (!localArts.some(la => la.id === sa.id)) {
      localArts.push(sa);
    }
  });
  localStorage.setItem('wscal_articles_v28', JSON.stringify(localArts));

  // 4. Merge Featured
  if (!localStorage.getItem('wscal_featured_v28')) {
    localStorage.setItem('wscal_featured_v28', JSON.stringify(serverData.featured));
  }
}

// Force reset local data to server state
async function resetLocalDataToServer() {
  if (confirm("경고: 로컬 캐시를 초기화하면 아직 반영(인터넷 배포)하지 않은 수정 내역이 모두 사라지고 서버의 최신 데이터로 변경됩니다. 계속하시겠습니까?")) {
    try {
      const res = await fetch('./data.json?t=' + Date.now());
      if (res.ok) {
        const serverData = await res.json();
        localStorage.setItem('wscal_mainmenus_v28', JSON.stringify(serverData.mainMenus));
        localStorage.setItem('wscal_categories_v28', JSON.stringify(serverData.categories));
        localStorage.setItem('wscal_articles_v28', JSON.stringify(serverData.articles));
        localStorage.setItem('wscal_featured_v28', JSON.stringify(serverData.featured));
        alert("성공적으로 서버 최신 데이터와 동기화(초기화)했습니다. 페이지를 새로고침합니다.");
        location.reload();
      } else {
        alert("서버의 data.json 파일을 가져오는데 실패했습니다.");
      }
    } catch (err) {
      alert("서버 연결 실패: " + err.message);
    }
  }
}

// Select main menu cards (6 big buttons)
function selectMainMenu(menuKey) {
  state.currentMenu = menuKey;
  state.currentCategory = null;
  state.currentArticle = null;
  state.pagination.currentPage = 1;

  sessionStorage.setItem('wscal_user_menu', menuKey);
  sessionStorage.removeItem('wscal_user_category');
  sessionStorage.removeItem('wscal_user_article');

  initializeCollapsedStates();

  // Toggle visual active state
  document.querySelectorAll('.menu-card').forEach(card => {
    if (card.dataset.menu === menuKey) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  const submenuContainer = document.getElementById('submenu-sec');
  const submenuGrid = document.getElementById('submenu-items-container');
  const categoryTitle = document.getElementById('submenu-category-title');
  const menuObj = state.mainMenus.find(m => m.id === menuKey);

  if (menuKey === 'theology') {
    renderTheologySubmenu();
  } else {
    if (categoryTitle) {
      categoryTitle.textContent = menuObj ? `${menuObj.nameJp} のフォルダ` : 'フォルダ一覧';
    }

    // Render Submenu badges (dual-language support)
    if (submenuGrid) {
      submenuGrid.innerHTML = '';
      const menuCats = (state.categories || []).filter(cat => cat.parentId === menuKey);
      sortCategoriesList(menuCats);
      if (menuCats.length === 0) {
        submenuGrid.innerHTML = '<span style="color: var(--text-light); font-size: 0.9rem;">現在、このメニュー内に細部フォルダはありません。管理者アカウントから追加してください。</span>';
      } else {
        menuCats.forEach(cat => {
          const badge = document.createElement('div');
          badge.className = `submenu-item ${cat.id === state.currentCategory ? 'active' : ''}`;
          badge.dataset.catId = cat.id;
          badge.style.display = 'flex';
          badge.style.alignItems = 'center';
          badge.style.justifyContent = 'center';
          badge.style.padding = '12px 24px';
          badge.innerHTML = `
            <div style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700;">${cat.nameJp}</div>
          `;
          badge.onclick = () => selectSubcategory(cat.id, false);
          submenuGrid.appendChild(badge);
        });
      }
    }
  }

  if (submenuContainer) {
    submenuContainer.classList.add('active');
    // Smooth scroll to submenus so user can clearly see and click them
    submenuContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Pre-render the first subcategory, author, or combined view in workspace without hiding layout
  if (menuKey === 'theology' && (state.theologyMode === 'author' || state.theologyMode === 'combined')) {
    if (state.theologyMode === 'author') state.theologyAuthor = state.theologyAuthor || 'all';
    if (state.theologyMode === 'combined') {
      state.theologyFilterAuthor = state.theologyFilterAuthor || 'all';
      state.theologyFilterCategory = state.theologyFilterCategory || 'all';
    }
    renderWorkspaceSidebar();
    renderArticlesList();
    const workspaceSec = document.getElementById('workspace-sec');
    if (workspaceSec) {
      workspaceSec.classList.add('active');
      document.getElementById('view-article-list').style.display = 'block';
      document.getElementById('view-article-detail').style.display = 'none';
    }
  } else {
    const allSubCats = buildFlatTree(menuKey, 0);
    if (allSubCats.length > 0) {
      selectSubcategory(allSubCats[0].id, false);
    } else {
      state.currentCategory = null;
      state.currentArticle = null;
      renderWorkspaceSidebar();
      renderArticlesList();
      const workspaceSec = document.getElementById('workspace-sec');
      if (workspaceSec) {
        workspaceSec.classList.add('active');
        document.getElementById('view-article-list').style.display = 'block';
        document.getElementById('view-article-detail').style.display = 'none';
      }
    }
  }
}

// Select a subcategory folder
function selectSubcategory(categoryId, shouldScroll = false) {
  state.currentCategory = categoryId;
  state.currentArticle = null;
  state.pagination.currentPage = 1;

  // Infer and set parent menu if missing
  const catObj = state.categories.find(c => c.id === categoryId);
  if (catObj && !state.currentMenu) {
    let pId = catObj.parentId;
    while (pId && !state.mainMenus.some(m => m.id === pId)) {
      const parent = state.categories.find(c => c.id === pId);
      pId = parent ? parent.parentId : null;
    }
    if (pId) state.currentMenu = pId;
  }

  if (state.currentMenu) {
    sessionStorage.setItem('wscal_user_menu', state.currentMenu);
    document.querySelectorAll('.menu-card').forEach(card => {
      if (card.dataset.menu === state.currentMenu) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
  sessionStorage.setItem('wscal_user_category', categoryId);
  sessionStorage.removeItem('wscal_user_article');

  // Expand the folder itself if it has children
  const hasChildren = state.categories.some(c => c.parentId === categoryId);
  if (hasChildren) {
    state.collapsedCategories[categoryId] = false;
  }

  // Ensure all ancestor paths are expanded
  if (catObj) {
    let pId = catObj.parentId;
    while (pId) {
      state.collapsedCategories[pId] = false;
      const parent = state.categories.find(c => c.id === pId);
      pId = parent ? parent.parentId : null;
    }
  }

  // Keep Submenu visible and updated
  if (state.currentMenu === 'theology') {
    renderTheologySubmenu();
  }
  const submenuContainer = document.getElementById('submenu-sec');
  if (submenuContainer) submenuContainer.classList.add('active');

  // Render Sidebar in the Workspace
  renderWorkspaceSidebar();

  // Find articles belonging to this specific subcategory
  const filteredArticles = state.articles.filter(art => art.categoryId === categoryId);

  // Update submenu items active state
  document.querySelectorAll('.submenu-item').forEach(item => {
    const itemCatId = item.dataset.catId;
    let isActive = false;
    if (itemCatId) {
      if (itemCatId === categoryId) {
        isActive = true;
      } else {
        const descendants = typeof getAllDescendantCategoryIds === 'function' ? getAllDescendantCategoryIds(itemCatId) : [];
        if (descendants.includes(categoryId)) {
          isActive = true;
        }
      }
    } else if (catObj && (item.textContent.includes(catObj.nameJp) || (catObj.nameKr && item.textContent.includes(catObj.nameKr)))) {
      isActive = true;
    }

    if (isActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Show Workspace Container
  const workspaceSec = document.getElementById('workspace-sec');
  if (workspaceSec) workspaceSec.classList.add('active');

  // IF THIS CATEGORY IS "기관의 목적" (cat_1787469045280) AND HAS AT LEAST 1 ARTICLE, REDIRECT DIRECTLY TO DETAIL!
  if (categoryId === 'cat_1787469045280' && filteredArticles.length > 0) {
    renderArticlesList();
    viewArticleDetail(filteredArticles[0].id);
  } else {
    renderArticlesList();
    renderRecentArticles();
    document.getElementById('view-article-list').style.display = 'block';
    document.getElementById('view-article-detail').style.display = 'none';
  }

  // Do not scroll down when selecting category/folders to keep user scroll position stable
  if (shouldScroll && workspaceSec) {
    workspaceSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render Workspace Sidebar (Category list as a Tree, Author list, or Combined Filter list)
function renderWorkspaceSidebar() {
  const sidebarList = document.getElementById('sidebar-categories-list');
  const sidebarHeader = document.getElementById('sidebar-category-header');
  
  // 1. Combined Mode in Reformed Theology
  if (state.currentMenu === 'theology' && state.theologyMode === 'combined') {
    sidebarHeader.textContent = '統合フィルター (통합 필터)';
    sidebarList.innerHTML = '';

    const authors = getTheologyAuthors();
    const categories = buildFlatTree('theology', 0);

    // Section 1: Authors
    const authSecHeader = document.createElement('div');
    authSecHeader.className = 'sidebar-section-title';
    authSecHeader.innerHTML = '<i class="fa-solid fa-user"></i> 著者フィルター (저자)';
    sidebarList.appendChild(authSecHeader);

    authors.forEach(auth => {
      const li = document.createElement('li');
      li.className = `sidebar-item ${state.theologyFilterAuthor === auth.name ? 'active' : ''}`;
      li.style.padding = '8px 12px';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';
      li.innerHTML = `
        <div style="display: flex; align-items: center;">
          <i class="fa-regular fa-user" style="margin-right: 8px; color: #1d4ed8;"></i>
          <span>${auth.name}</span>
        </div>
        <span class="author-count-badge">${auth.count}</span>
      `;
      li.onclick = () => setTheologyCombinedFilter('author', auth.name);
      sidebarList.appendChild(li);
    });

    // Section 2: Categories
    const catSecHeader = document.createElement('div');
    catSecHeader.className = 'sidebar-section-title';
    catSecHeader.innerHTML = '<i class="fa-solid fa-book-open"></i> 主題フィルター (주제)';
    sidebarList.appendChild(catSecHeader);

    categories.forEach(cat => {
      const li = document.createElement('li');
      li.className = `sidebar-item depth-${cat.depth} ${state.theologyFilterCategory === cat.id ? 'active' : ''}`;
      li.style.padding = `8px 12px 8px ${12 + cat.depth * 14}px`;
      li.style.cursor = 'pointer';
      li.innerHTML = `
        <div style="display: flex; align-items: center;">
          <i class="fa-regular fa-folder" style="margin-right: 8px;"></i>
          <span>${cat.nameJp}</span>
        </div>
      `;
      li.onclick = () => setTheologyCombinedFilter('category', cat.id);
      sidebarList.appendChild(li);
    });
    return;
  }

  // 2. Author mode in Reformed Theology
  if (state.currentMenu === 'theology' && state.theologyMode === 'author') {
    sidebarHeader.textContent = '著者一覧 (저자 목록)';
    sidebarList.innerHTML = '';

    const authors = getTheologyAuthors();
    const totalCount = state.articles.filter(art => isTheologyCategory(art.categoryId)).length;

    // All Authors li
    const allLi = document.createElement('li');
    allLi.className = `sidebar-item ${state.theologyAuthor === 'all' ? 'active' : ''}`;
    allLi.style.display = 'flex';
    allLi.style.alignItems = 'center';
    allLi.style.justifyContent = 'space-between';
    allLi.style.padding = '10px 14px';
    allLi.style.cursor = 'pointer';
    allLi.innerHTML = `
      <div style="display: flex; align-items: center; font-weight: 500;">
        <i class="fa-solid fa-users" style="margin-right: 8px; color: var(--primary-color);"></i>
        <span>すべての著者</span>
      </div>
      <span class="author-count-badge">${totalCount}</span>
    `;
    allLi.onclick = () => selectTheologyAuthor('all');
    sidebarList.appendChild(allLi);

    // Individual Authors li
    authors.forEach(auth => {
      const li = document.createElement('li');
      li.className = `sidebar-item ${state.theologyAuthor === auth.name ? 'active' : ''}`;
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.justifyContent = 'space-between';
      li.style.padding = '10px 14px';
      li.style.cursor = 'pointer';
      li.innerHTML = `
        <div style="display: flex; align-items: center; font-weight: 500;">
          <i class="fa-regular fa-user" style="margin-right: 8px; color: #1d4ed8;"></i>
          <span>${auth.name}</span>
        </div>
        <span class="author-count-badge">${auth.count}</span>
      `;
      li.onclick = () => selectTheologyAuthor(auth.name);
      sidebarList.appendChild(li);
    });
    return;
  }

  // 2. Standard Category Tree
  const menuObj = state.mainMenus.find(m => m.id === state.currentMenu);
  sidebarHeader.textContent = menuObj ? menuObj.nameJp : 'フォルダ一覧';

  // Get flat tree representation for hierarchical sidebar display
  const flatTree = buildFlatTree(state.currentMenu, 0);
  sidebarList.innerHTML = '';

  flatTree.forEach(cat => {
    // Skip rendering if any ancestor is collapsed
    if (isAnyAncestorCollapsed(cat.id)) {
      return;
    }

    const hasChildren = state.categories.some(c => c.parentId === cat.id);
    const isCollapsed = !!state.collapsedCategories[cat.id];

    const li = document.createElement('li');
    li.className = `sidebar-item depth-${cat.depth} ${cat.id === state.currentCategory ? 'active' : ''}`;
    li.style.display = 'flex';
    li.style.flexDirection = 'row';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.lineHeight = '1.3';
    li.style.padding = `10px 10px 10px ${8 + cat.depth * 14}px`;
    li.style.cursor = 'pointer';
    li.style.whiteSpace = 'nowrap';
    li.style.overflow = 'hidden';
    li.style.textOverflow = 'ellipsis';
    li.title = cat.nameJp;
    
    // Toggle arrow icon if the category has subcategories
    let toggleIcon = '';
    if (hasChildren) {
      const arrowIconClass = isCollapsed ? 'fa-chevron-right' : 'fa-chevron-down';
      toggleIcon = `<i class="fa-solid ${arrowIconClass} sidebar-toggle-icon" style="margin-right: 8px; font-size: 0.8rem; color: var(--text-light); width: 12px; flex-shrink: 0;"></i>`;
    } else {
      toggleIcon = `<span style="display: inline-block; width: 12px; margin-right: 8px; flex-shrink: 0;"></span>`;
    }

    const iconClass = cat.id === state.currentCategory ? 'fa-folder-open' : 'fa-folder';
    
    li.innerHTML = `
      <div style="display: flex; align-items: center; font-weight: 500; flex-grow: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        ${toggleIcon}
        <i class="fa-regular ${iconClass}" style="margin-right: 8px; flex-shrink: 0;"></i>
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cat.nameJp}</span>
      </div>
    `;

    li.onclick = (e) => {
      // If clicking the toggle arrow icon, only toggle the collapse state
      if (e.target.classList.contains('sidebar-toggle-icon')) {
        e.stopPropagation();
        state.collapsedCategories[cat.id] = !state.collapsedCategories[cat.id];
        renderWorkspaceSidebar();
        return;
      }
      
      selectSubcategory(cat.id);
    };

    sidebarList.appendChild(li);
  });
}

// Render Article List (Supports Grid Video Gallery for Pastor Theology and Pagination)

// Check if content is a full HTML document (with <!DOCTYPE, <html>, <head>, <script>, or Tailwind)
function isFullHtmlDoc(content) {
  if (!content) return false;
  const trimmed = content.trim().toLowerCase();
  return (
    trimmed.startsWith('<!doctype html') ||
    trimmed.startsWith('<html') ||
    trimmed.includes('<head') ||
    trimmed.includes('<script') ||
    trimmed.includes('<style') ||
    trimmed.includes('cdn.tailwindcss.com')
  );
}

// Format article content: supports raw HTML tags or plain text with preserved line breaks
function formatArticleContent(content) {
  if (!content) return '';
  // Check if content contains HTML tags
  const hasHtml = /<\/?([a-z0-9]+)(?:\s+[^>]*|\s*)>/i.test(content);
  if (hasHtml) {
    return content;
  } else {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/\n/g, "<br>");
  }
}

// Render Article List (Supports Grid Video Gallery for Pastor Theology and Pagination)
function renderArticlesList() {
  const container = document.getElementById('articles-list-container');
  const listTitle = document.getElementById('list-title');
  if (!container) return;
  
  let filteredArticles = [];
  
  if (state.currentMenu === 'theology' && state.theologyMode === 'combined') {
    const theologyArticles = state.articles.filter(art => isTheologyCategory(art.categoryId));
    filteredArticles = theologyArticles.filter(art => {
      const matchAuth = state.theologyFilterAuthor === 'all' || (art.author || '').trim() === state.theologyFilterAuthor;
      const matchCat = state.theologyFilterCategory === 'all' || getAllDescendantCategoryIds(state.theologyFilterCategory).includes(art.categoryId);
      return matchAuth && matchCat;
    });

    const parts = [];
    if (state.theologyFilterAuthor !== 'all') parts.push(`著者: ${state.theologyFilterAuthor}`);
    if (state.theologyFilterCategory !== 'all') {
      const catObj = state.categories.find(c => c.id === state.theologyFilterCategory);
      parts.push(`主題: ${catObj ? catObj.nameJp : state.theologyFilterCategory}`);
    }
    if (parts.length === 0) {
      if (listTitle) listTitle.textContent = '改革派神学・全資料一覧 (統合モード)';
    } else {
      if (listTitle) listTitle.textContent = `改革派神学 [${parts.join(' × ')}] の資料一覧 (${filteredArticles.length}件)`;
    }
  } else if (state.currentMenu === 'theology' && state.theologyMode === 'author') {
    const theologyArticles = state.articles.filter(art => isTheologyCategory(art.categoryId));
    if (state.theologyAuthor === 'all') {
      filteredArticles = theologyArticles;
      if (listTitle) listTitle.textContent = '改革派神学・すべての著者の資料一覧';
    } else {
      filteredArticles = theologyArticles.filter(art => (art.author || '').trim() === state.theologyAuthor);
      if (listTitle) listTitle.textContent = `「${state.theologyAuthor}」著者の改革派神学資料 (${filteredArticles.length}件)`;
    }
  } else {
    const currentCatObj = state.categories.find(c => c.id === state.currentCategory);
    if (listTitle) listTitle.textContent = currentCatObj ? `${currentCatObj.nameJp} の資料一覧` : '資料一覧';

    const descendantIds = getAllDescendantCategoryIds(state.currentCategory);
    filteredArticles = state.articles.filter(art => descendantIds.includes(art.categoryId));
  }
  
  // Smart Sort: Chapter/Category order first (Chapters 1~33), Section/Question number ascending second ([1절], [2절]...), then position, then date
  filteredArticles.sort((a, b) => {
    const keyA = getArticleSortKey(a);
    const keyB = getArticleSortKey(b);
    if (keyA.catOrder !== keyB.catOrder) return keyA.catOrder - keyB.catOrder;
    if (keyA.secNum !== keyB.secNum) return keyA.secNum - keyB.secNum;
    if (keyA.pos !== keyB.pos) return keyA.pos - keyB.pos;
    const dateCompare = (a.createdAt || '').localeCompare(b.createdAt || '');
    if (dateCompare !== 0) return dateCompare;
    return (a.id || '').localeCompare(b.id || '');
  });
  container.innerHTML = '';

  if (filteredArticles.length === 0) {
    container.className = 'article-list';
    container.innerHTML = `
      <div class="empty-message">
        <i class="fa-regular fa-file-excel" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--border-color);"></i>
        <p>このフォルダにはまだ資料が登録されていません。</p>
        ${state.isAdmin ? '<p style="font-size: 0.85rem; margin-top: 5px; color: var(--accent-color);">管理者用「新規記事作成」メニューから追加できます。</p>' : ''}
      </div>
    `;
    return;
  }

  // 1. Pagination calculation
  const totalCount = filteredArticles.length;
  const pageSize = state.pagination.pageSize;
  const totalPages = Math.ceil(totalCount / pageSize);

  if (state.pagination.currentPage > totalPages) {
    state.pagination.currentPage = totalPages;
  }
  if (state.pagination.currentPage < 1) {
    state.pagination.currentPage = 1;
  }

  const startIndex = (state.pagination.currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedArticles = filteredArticles.slice(startIndex, endIndex);

  const isPastorMenu = state.currentMenu === 'pastor';
  const isServantMenu = state.currentCategory === 'cat_1787469050463';

  // 2. Render Page Size Selector, View Mode Toggle & Total count
  const headerWrapper = document.createElement('div');
  headerWrapper.className = 'article-list-header-controls';
  headerWrapper.style.display = 'flex';
  headerWrapper.style.justifyContent = 'space-between';
  headerWrapper.style.alignItems = 'center';
  headerWrapper.style.marginBottom = '1.5rem';
  headerWrapper.style.width = '100%';
  headerWrapper.style.flexWrap = 'wrap';
  headerWrapper.style.gap = '12px';

  const theologyModeSwitcherHtml = state.currentMenu === 'theology' ? `
    <div class="theology-mode-tabs" style="margin-bottom: 0;">
      <button type="button" class="btn-theology-tab ${state.theologyMode === 'topic' ? 'active' : ''}" onclick="setTheologyMode('topic')">
        <i class="fa-solid fa-layer-group"></i> 組織神学別
      </button>
      <button type="button" class="btn-theology-tab ${state.theologyMode === 'author' ? 'active' : ''}" onclick="setTheologyMode('author')">
        <i class="fa-solid fa-user-pen"></i> 著者別
      </button>
      <button type="button" class="btn-theology-tab ${state.theologyMode === 'combined' ? 'active' : ''}" onclick="setTheologyMode('combined')">
        <i class="fa-solid fa-sliders"></i> 統合選択
      </button>
    </div>
  ` : '';

  const isCatechismMenu = state.currentMenu === 'catechism' || (typeof isCatechismOrWcfCategory === 'function' && isCatechismOrWcfCategory(state.currentCategory));
  const mindmapBtnHtml = isCatechismMenu ? `
    <button type="button" class="btn-view-toggle ${state.articleViewMode === 'mindmap' ? 'active' : ''}" onclick="setArticleViewMode('mindmap')" title="マインドマップ表示 (마인드맵 한눈에 보기)" style="border: none; background: ${state.articleViewMode === 'mindmap' ? '#0A1C36' : 'transparent'}; color: ${state.articleViewMode === 'mindmap' ? '#ffffff' : '#475569'}; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
      <i class="fa-solid fa-brain"></i> 🧠 マインドマップ
    </button>
  ` : '';

  const viewModeToggleHtml = (!isPastorMenu && !isServantMenu) ? `
    <div class="view-mode-toggle" style="display: inline-flex; background: #e2e8f0; border-radius: 8px; padding: 3px; gap: 3px;">
      <button type="button" class="btn-view-toggle ${state.articleViewMode === 'cards' || (!state.articleViewMode || (state.articleViewMode !== 'table' && state.articleViewMode !== 'mindmap')) ? 'active' : ''}" onclick="setArticleViewMode('cards')" title="カード/詳細表示 (카드/썸네일보기)" style="border: none; background: ${(state.articleViewMode === 'cards' || (!state.articleViewMode || (state.articleViewMode !== 'table' && state.articleViewMode !== 'mindmap'))) ? '#0A1C36' : 'transparent'}; color: ${(state.articleViewMode === 'cards' || (!state.articleViewMode || (state.articleViewMode !== 'table' && state.articleViewMode !== 'mindmap'))) ? '#ffffff' : '#475569'}; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
        <i class="fa-solid fa-table-cells-large"></i> 🗂️ 詳細カード
      </button>
      <button type="button" class="btn-view-toggle ${state.articleViewMode === 'table' ? 'active' : ''}" onclick="setArticleViewMode('table')" title="タイトル一覧表示 (제목 목록보기)" style="border: none; background: ${state.articleViewMode === 'table' ? '#0A1C36' : 'transparent'}; color: ${state.articleViewMode === 'table' ? '#ffffff' : '#475569'}; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
        <i class="fa-solid fa-list-ul"></i> 📋 タイトル一覧
      </button>
      ${mindmapBtnHtml}
    </div>
  ` : '';

  headerWrapper.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
      ${theologyModeSwitcherHtml}
      <div class="articles-total-count" style="font-size: 0.9rem; color: var(--text-light);">
        全 <strong>${totalCount}</strong> 件の資料 ${state.articleViewMode !== 'mindmap' ? `(ページ ${state.pagination.currentPage} / ${totalPages})` : '(体系マインドマップ)'}
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
      ${viewModeToggleHtml}
      ${state.articleViewMode !== 'mindmap' ? `
      <div class="page-size-selector-wrapper" style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-light);">表示件数:</span>
        <select class="form-input page-size-select" style="padding: 4px 8px; font-size: 0.85rem; width: auto; margin: 0; height: auto;" onchange="changePageSize(this.value)">
          <option value="5" ${pageSize === 5 ? 'selected' : ''}>5件</option>
          <option value="10" ${pageSize === 10 ? 'selected' : ''}>10件</option>
          <option value="20" ${pageSize === 20 ? 'selected' : ''}>20件</option>
          <option value="50" ${pageSize === 50 ? 'selected' : ''}>50件</option>
          <option value="100" ${pageSize === 100 ? 'selected' : ''}>100件</option>
          <option value="9999" ${pageSize >= 9999 ? 'selected' : ''}>全件 (全体)</option>
        </select>
      </div>` : ''}
    </div>
  `;
  container.appendChild(headerWrapper);

  // 3. Render articles in selected View Mode
  if (!isPastorMenu && !isServantMenu && state.articleViewMode === 'mindmap' && isCatechismMenu) {
    // MINDMAP VIEW (마인드맵 모드)
    const mindmapWrapper = document.createElement('div');
    mindmapWrapper.className = 'article-mindmap-view-wrapper';
    container.appendChild(mindmapWrapper);
    if (typeof renderMindmapBoard === 'function') {
      renderMindmapBoard(mindmapWrapper, state.currentCategory || 'cat_cat_1', state.articles);
    }
    return;
  } else if (!isPastorMenu && !isServantMenu && state.articleViewMode === 'table') {
    // TABLE / LIST VIEW (순수 전체 제목 목록 - 카테고리/성경요약 제거하고 제목 전체가 한 줄로 시원하게 표시)
    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'article-table-wrapper';
    tableWrapper.style.cssText = 'width: 100%; overflow-x: auto; background: white; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0,0,0,0.03); margin-bottom: 1.5rem;';

    const table = document.createElement('table');
    table.className = 'article-catalog-table';
    table.style.cssText = 'width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;';

    table.innerHTML = `
      <thead>
        <tr style="background: #0f172a; color: white;">
          <th style="padding: 12px 20px; font-weight: 700; border-bottom: 2px solid #1e3a8a;">タイトル一覧 (전체 제목 목록)</th>
          ${state.isAdmin ? '<th style="padding: 12px 16px; width: 120px; text-align: center; font-weight: 700; border-bottom: 2px solid #1e3a8a; white-space: nowrap;">管理</th>' : ''}
        </tr>
      </thead>
      <tbody id="catalog-table-body">
      </tbody>
    `;

    const tbody = table.querySelector('#catalog-table-body');
    pagedArticles.forEach((art, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'table-article-row';
      tr.style.cssText = `border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: background 0.15s; ${idx % 2 === 1 ? 'background: #fbfcfe;' : ''}`;
      tr.onmouseover = () => tr.style.background = '#fef9c3';
      tr.onmouseout = () => tr.style.background = idx % 2 === 1 ? '#fbfcfe' : '';
      tr.onclick = (e) => {
        if (e.target.closest('.card-inline-admin-bar') || e.target.closest('button')) return;
        viewArticleDetail(art.id);
      };

      const hasVideoBadge = art.videoUrl ? '<span style="color: var(--accent-color); margin-left: 8px;"><i class="fa-solid fa-circle-play"></i></span>' : '';

      const adminToolbar = state.isAdmin ? `
        <div class="card-inline-admin-bar" style="display: flex; gap: 4px; justify-content: center;" onclick="event.stopPropagation()">
          <button class="btn-inline-admin btn-inline-edit" onclick="loadArticleToEdit('${art.id}')" title="記事修正" style="padding: 2px 6px; font-size: 0.75rem;"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-inline-admin btn-inline-move" onclick="openMoveFolderModal('${art.id}')" title="移動" style="padding: 2px 6px; font-size: 0.75rem;"><i class="fa-solid fa-folder-tree"></i></button>
          <button class="btn-inline-admin btn-inline-delete" onclick="handleDeleteArticle('${art.id}')" title="削除" style="padding: 2px 6px; font-size: 0.75rem;"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      ` : '';

      tr.innerHTML = `
        <td style="padding: 12px 20px; font-weight: 700; color: #0f172a; font-size: 0.96rem; line-height: 1.4;">
          <i class="fa-solid fa-file-lines" style="color: #c5a059; margin-right: 10px; font-size: 0.9rem;"></i>
          <span>${art.title}</span>
          ${hasVideoBadge}
        </td>
        ${state.isAdmin ? `<td style="padding: 6px 12px; text-align: center;">${adminToolbar}</td>` : ''}
      `;
      tbody.appendChild(tr);
    });

    tableWrapper.appendChild(table);
    container.appendChild(tableWrapper);

  } else {
    // CARD / GRID VIEW (썸네일/카드보기)
    const itemsWrapper = document.createElement('div');
    itemsWrapper.className = isPastorMenu ? 'video-gallery-grid' : (isServantMenu ? 'profile-list' : 'article-list');
    container.appendChild(itemsWrapper);

    if (isPastorMenu) {
      pagedArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
          if (e.target.closest('.card-inline-admin-bar')) return;
          viewArticleDetail(art.id);
        };
        
        const youtubeId = getYouTubeId(art.videoUrl);
        const thumbUrl = youtubeId 
          ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` 
          : 'hero_bg.jpg';

        const adminToolbar = state.isAdmin ? `
          <div class="card-inline-admin-bar" onclick="event.stopPropagation()">
            <span class="drag-handle" title="ドラッグして順序変更 (드래그하여 순서 변경)"><i class="fa-solid fa-grip-vertical"></i></span>
            <button class="btn-inline-admin btn-inline-edit" onclick="loadArticleToEdit('${art.id}')" title="記事修正 (글 수정)"><i class="fa-solid fa-pen-to-square"></i> 修正</button>
            <button class="btn-inline-admin btn-inline-move" onclick="openMoveFolderModal('${art.id}')" title="フォルダ移動 (폴더 이동)"><i class="fa-solid fa-folder-tree"></i> 移動</button>
            <button class="btn-inline-admin btn-inline-delete" onclick="handleDeleteArticle('${art.id}')" title="削除 (삭제)"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        ` : '';

        card.innerHTML = `
          <div class="video-thumbnail-container">
            <img class="video-thumbnail" src="${thumbUrl}" alt="${art.title}" loading="lazy">
            <div class="video-play-badge">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
          <div class="video-card-info">
            <h3 class="video-card-title">${art.title}</h3>
            <div class="video-card-meta">
              <span><i class="fa-regular fa-user"></i> ${art.author}</span>
              <span><i class="fa-regular fa-calendar"></i> ${art.createdAt}</span>
            </div>
            ${adminToolbar}
          </div>
        `;

        if (state.isAdmin) {
          attachArticleDragEvents(card, art.id);
        }
        itemsWrapper.appendChild(card);
      });
    } else if (isServantMenu) {
      pagedArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
          if (e.target.closest('.card-inline-admin-bar')) return;
          viewArticleDetail(art.id);
        };
        
        const photoUrl = art.photoUrl || 'hero_bg.jpg';

        const adminToolbar = state.isAdmin ? `
          <div class="card-inline-admin-bar" onclick="event.stopPropagation()">
            <span class="drag-handle" title="ドラッグして順序変更 (드래그하여 순서 변경)"><i class="fa-solid fa-grip-vertical"></i></span>
            <button class="btn-inline-admin btn-inline-edit" onclick="loadArticleToEdit('${art.id}')" title="記事修正 (글 수정)"><i class="fa-solid fa-pen-to-square"></i> 修正</button>
            <button class="btn-inline-admin btn-inline-move" onclick="openMoveFolderModal('${art.id}')" title="フォルダ移動 (폴더 이동)"><i class="fa-solid fa-folder-tree"></i> 移動</button>
            <button class="btn-inline-admin btn-inline-delete" onclick="handleDeleteArticle('${art.id}')" title="削除 (삭제)"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        ` : '';

        card.innerHTML = `
          <div class="profile-photo-wrapper">
            <img class="profile-photo" src="${photoUrl}" alt="${art.title}" loading="lazy">
          </div>
          <div class="profile-info">
            <h3 class="profile-name">${art.title}</h3>
            <div class="profile-title">${art.author}</div>
            <div class="profile-history">${art.content}</div>
            ${adminToolbar}
          </div>
        `;

        if (state.isAdmin) {
          attachArticleDragEvents(card, art.id);
        }
        itemsWrapper.appendChild(card);
      });
    } else {
      pagedArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'article-item-card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
          if (e.target.closest('.card-inline-admin-bar')) return;
          viewArticleDetail(art.id);
        };
        
        const hasVideoBadge = art.videoUrl ? '<span style="color: var(--accent-color); margin-left: 8px;"><i class="fa-solid fa-circle-play"></i> 動画</span>' : '';

        const adminToolbar = state.isAdmin ? `
          <div class="card-inline-admin-bar" onclick="event.stopPropagation()">
            <span class="drag-handle" title="ドラッグして順序変更 (드래그하여 순서 변경)"><i class="fa-solid fa-grip-vertical"></i></span>
            <button class="btn-inline-admin btn-inline-edit" onclick="loadArticleToEdit('${art.id}')" title="記事修正 (글 수정)"><i class="fa-solid fa-pen-to-square"></i> 修正</button>
            <button class="btn-inline-admin btn-inline-move" onclick="openMoveFolderModal('${art.id}')" title="フォルダ移動 (폴더 이동)"><i class="fa-solid fa-folder-tree"></i> 移動</button>
            <button class="btn-inline-admin btn-inline-delete" onclick="handleDeleteArticle('${art.id}')" title="削除 (삭제)"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        ` : '';

        const isTheology = isTheologyCategory(art.categoryId) || state.currentMenu === 'theology';
        let scriptureBadge = '';
        if (isTheology) {
          let themeText = (art.scripture || '').trim();
          if (!themeText) {
            const cObj = state.categories.find(c => c.id === art.categoryId);
            themeText = cObj ? cObj.nameJp : '改革派神学';
          }
          scriptureBadge = `<span class="meta-item meta-scripture meta-theme"><i class="fa-solid fa-bookmark"></i> 主題: ${themeText}</span>`;
        } else if (art.scripture) {
          scriptureBadge = `<span class="meta-item meta-scripture"><i class="fa-solid fa-bible"></i> 関連聖句: ${art.scripture}</span>`;
        }

        card.innerHTML = `
          <h3 class="article-item-title">${art.title} ${hasVideoBadge}</h3>
          <div class="article-item-meta">
            <span class="meta-item meta-author"><i class="fa-regular fa-user"></i> 著者: ${art.author}</span>
            ${scriptureBadge}
            <span class="meta-item meta-date"><i class="fa-regular fa-calendar"></i> 日付: ${art.createdAt}</span>
          </div>
          ${adminToolbar}
        `;

        if (state.isAdmin) {
          attachArticleDragEvents(card, art.id);
        }
        itemsWrapper.appendChild(card);
      });
    }
  }

  // 4. Render Smart Pagination Controls
  if (totalPages > 1) {
    const paginationControls = document.createElement('div');
    paginationControls.className = 'pagination-controls';
    renderPaginationButtons(paginationControls, state.pagination.currentPage, totalPages, (p) => changePage(p));
    container.appendChild(paginationControls);
  }
}

// Switch between 'cards' (detail cards) and 'table' (compact title list)
function setArticleViewMode(mode) {
  state.articleViewMode = mode;
  sessionStorage.setItem('wscal_article_view_mode', mode);
  if (mode === 'table' && state.pagination.pageSize < 50) {
    state.pagination.pageSize = 50;
  }
  state.pagination.currentPage = 1;
  renderArticlesList();
}

// Render Smart Sliding Window Pagination (Supports Max 5 Visible Numbers, Ellipsis, Prev/Next, Jump)
function renderPaginationButtons(container, currentPage, totalPages, onPageChange) {
  container.innerHTML = '';
  if (totalPages <= 1) return;

  // First Jump Button (<<) if past page 3
  if (currentPage > 3 && totalPages > 5) {
    const firstBtn = document.createElement('button');
    firstBtn.className = 'btn-pagination';
    firstBtn.title = '最初のページ (처음)';
    firstBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
    firstBtn.onclick = () => onPageChange(1);
    container.appendChild(firstBtn);
  }

  // Prev Button (<)
  const prevBtn = document.createElement('button');
  prevBtn.className = 'btn-pagination';
  prevBtn.disabled = currentPage === 1;
  prevBtn.title = '前のページ (이전)';
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.onclick = () => onPageChange(currentPage - 1);
  container.appendChild(prevBtn);

  // Calculate visible range (Max 5 numbered buttons)
  const maxButtons = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  // First page shortcut with ellipsis
  if (startPage > 1) {
    const page1Btn = document.createElement('button');
    page1Btn.className = `btn-pagination ${currentPage === 1 ? 'active' : ''}`;
    page1Btn.textContent = '1';
    page1Btn.onclick = () => onPageChange(1);
    container.appendChild(page1Btn);

    if (startPage > 2) {
      const dots = document.createElement('span');
      dots.className = 'pagination-dots';
      dots.textContent = '...';
      container.appendChild(dots);
    }
  }

  // Numbered buttons
  for (let i = startPage; i <= endPage; i++) {
    if (i === 1 && startPage > 1) continue;
    if (i === totalPages && endPage < totalPages) continue;

    const pageBtn = document.createElement('button');
    pageBtn.className = `btn-pagination ${currentPage === i ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.onclick = () => onPageChange(i);
    container.appendChild(pageBtn);
  }

  // Last page shortcut with ellipsis
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement('span');
      dots.className = 'pagination-dots';
      dots.textContent = '...';
      container.appendChild(dots);
    }

    const lastBtn = document.createElement('button');
    lastBtn.className = `btn-pagination ${currentPage === totalPages ? 'active' : ''}`;
    lastBtn.textContent = totalPages;
    lastBtn.onclick = () => onPageChange(totalPages);
    container.appendChild(lastBtn);
  }

  // Next Button (>)
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-pagination';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.title = '次のページ (다음)';
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.onclick = () => onPageChange(currentPage + 1);
  container.appendChild(nextBtn);

  // Last Jump Button (>>) if far from end
  if (currentPage < totalPages - 2 && totalPages > 5) {
    const lastJumpBtn = document.createElement('button');
    lastJumpBtn.className = 'btn-pagination';
    lastJumpBtn.title = '最後のページ (끝)';
    lastJumpBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
    lastJumpBtn.onclick = () => onPageChange(totalPages);
    container.appendChild(lastJumpBtn);
  }
}

// Helper to find adjacent previous and next articles in the active document/category scope
function getAdjacentArticles(articleId) {
  const article = state.articles.find(a => a.id === articleId);
  if (!article) return { prev: null, next: null };

  let scopeArticles = [];
  const isCatechism = typeof isCatechismOrWcfCategory === 'function' && isCatechismOrWcfCategory(article.categoryId);

  if (state.currentCategory) {
    const descendantIds = getAllDescendantCategoryIds(state.currentCategory);
    scopeArticles = state.articles.filter(art => descendantIds.includes(art.categoryId));
  } else if (isCatechism) {
    const rootCatId = typeof getMindmapRootCategoryId === 'function' ? getMindmapRootCategoryId(article.categoryId) : article.categoryId;
    const descendantIds = getAllDescendantCategoryIds(rootCatId);
    scopeArticles = state.articles.filter(art => descendantIds.includes(art.categoryId));
  } else if (article.categoryId) {
    const descendantIds = getAllDescendantCategoryIds(article.categoryId);
    scopeArticles = state.articles.filter(art => descendantIds.includes(art.categoryId));
  }

  if (scopeArticles.length === 0) {
    scopeArticles = [...state.articles];
  }

  // Sort by document/question order
  scopeArticles.sort((a, b) => {
    const keyA = getArticleSortKey(a);
    const keyB = getArticleSortKey(b);
    if (keyA.catOrder !== keyB.catOrder) return keyA.catOrder - keyB.catOrder;
    if (keyA.secNum !== keyB.secNum) return keyA.secNum - keyB.secNum;
    if (keyA.pos !== keyB.pos) return keyA.pos - keyB.pos;
    const dateCompare = (a.createdAt || '').localeCompare(b.createdAt || '');
    if (dateCompare !== 0) return dateCompare;
    return (a.id || '').localeCompare(b.id || '');
  });

  const currentIndex = scopeArticles.findIndex(a => a.id === articleId);
  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? scopeArticles[currentIndex - 1] : null,
    next: currentIndex < scopeArticles.length - 1 ? scopeArticles[currentIndex + 1] : null
  };
}

// View Article Detail (Supports Video Player & Interactive Responsive Document Rendering)
function viewArticleDetail(articleId) {
  try {
    let article = state.articles.find(a => a.id === articleId);
    if (!article && MASTER_SITE_DATABASE && MASTER_SITE_DATABASE.articles) {
      article = MASTER_SITE_DATABASE.articles.find(a => a.id === articleId);
      if (article && !state.articles.some(a => a.id === articleId)) {
        state.articles.push(article);
      }
    }
    if (!article) {
      console.error("Article not found with ID:", articleId);
      return;
    }

    state.currentArticle = article;
    sessionStorage.setItem('wscal_user_article', articleId);
    if (article.categoryId) {
      sessionStorage.setItem('wscal_user_category', article.categoryId);
    }

    // Increment views safely
    article.views = (article.views || 0) + 1;
    saveArticles();
    
    const viewsEl = document.getElementById('detail-views');
    if (viewsEl) viewsEl.textContent = article.views;

    const listView = document.getElementById('view-article-list');
    if (listView) listView.style.display = 'none';
    
    const detailView = document.getElementById('view-article-detail');
    if (detailView) detailView.style.display = 'block';

    const isCatechismMenu = state.currentMenu === 'catechism' || (typeof isCatechismOrWcfCategory === 'function' && isCatechismOrWcfCategory(article.categoryId));
    const { prev: prevArt, next: nextArt } = getAdjacentArticles(article.id);

    // Top Navigation Bar Rendering (Back to Mindmap, Back to List, Prev, Next)
    const topNav = document.getElementById('detail-top-nav-bar');
    if (topNav) {
      let backButtonsHtml = '';
      if (isCatechismMenu) {
        backButtonsHtml = `
          <button type="button" class="btn-detail-back btn-back-mindmap" onclick="goBackToArticles('mindmap')">
            <i class="fa-solid fa-brain" style="color: #f59e0b;"></i> 🧠 マインドマップに戻る (마인드맵으로)
          </button>
          <button type="button" class="btn-detail-back btn-back-list" onclick="goBackToArticles('list')">
            <i class="fa-solid fa-list-ul"></i> 📋 記事一覧に戻る (목록으로)
          </button>
        `;
      } else {
        backButtonsHtml = `
          <button type="button" class="btn-detail-back btn-back-mindmap" onclick="goBackToArticles('list')">
            <i class="fa-solid fa-arrow-left"></i> 🗂️ 記事一覧に戻る (목록으로 돌아가기)
          </button>
        `;
      }

      const prevBtnHtml = prevArt ? `
        <button type="button" class="btn-adjacent-nav" onclick="viewArticleDetail('${prevArt.id}')" title="${prevArt.title}">
          <i class="fa-solid fa-chevron-left"></i> 前の項目 (이전글)
        </button>
      ` : `
        <button type="button" class="btn-adjacent-nav" disabled>
          <i class="fa-solid fa-chevron-left"></i> 前の項目 (이전글)
        </button>
      `;

      const nextBtnHtml = nextArt ? `
        <button type="button" class="btn-adjacent-nav" onclick="viewArticleDetail('${nextArt.id}')" title="${nextArt.title}">
          次の項目 (다음글) <i class="fa-solid fa-chevron-right"></i>
        </button>
      ` : `
        <button type="button" class="btn-adjacent-nav" disabled>
          次の項目 (다음글) <i class="fa-solid fa-chevron-right"></i>
        </button>
      `;

      topNav.innerHTML = `
        <div class="detail-nav-back-group">
          ${backButtonsHtml}
        </div>
        <div class="detail-nav-adjacent-group">
          ${prevBtnHtml}
          ${nextBtnHtml}
        </div>
      `;
    }

    // Admin Quick Action Bar in Article Detail View
    let adminDetailBar = document.getElementById('detail-admin-action-bar');
    if (state.isAdmin) {
      if (!adminDetailBar && detailView) {
        adminDetailBar = document.createElement('div');
        adminDetailBar.id = 'detail-admin-action-bar';
        adminDetailBar.className = 'detail-admin-action-bar';
        const detailHeader = document.querySelector('.article-detail-header') || detailView.firstChild;
        detailView.insertBefore(adminDetailBar, detailHeader);
      }
      if (adminDetailBar) {
        adminDetailBar.style.display = 'flex';
        adminDetailBar.innerHTML = `
          <span style="font-size: 0.85rem; font-weight: bold; color: var(--primary-color); display: inline-flex; align-items: center; gap: 5px;">
            <i class="fa-solid fa-shield-halved"></i> 管理者クイック操作:
          </span>
          <button class="btn-inline-admin btn-inline-edit" onclick="loadArticleToEdit('${article.id}')" title="記事編集">
            <i class="fa-solid fa-pen-to-square"></i> この記事を修正・編集
          </button>
          <button class="btn-inline-admin btn-inline-move" onclick="openMoveFolderModal('${article.id}')" title="フォルダ移動">
            <i class="fa-solid fa-folder-tree"></i> 別のフォルダへ移動
          </button>
          <button class="btn-inline-admin btn-inline-delete" onclick="handleDeleteArticle('${article.id}')" title="記事削除">
            <i class="fa-solid fa-trash-can"></i> 記事削除
          </button>
        `;
      }
    } else if (adminDetailBar) {
      adminDetailBar.style.display = 'none';
    }

    const titleEl = document.getElementById('detail-title');
    if (titleEl) titleEl.textContent = article.title || '';
    
    const authorEl = document.getElementById('detail-author');
    if (authorEl) authorEl.textContent = article.author || '';
    
    const dateEl = document.getElementById('detail-date');
    if (dateEl) dateEl.textContent = article.createdAt || '';

    const isTheology = isTheologyCategory(article.categoryId) || state.currentMenu === 'theology';
    const scriptureContainer = document.getElementById('detail-scripture-container');
    if (scriptureContainer) {
      if (article.scripture) {
        scriptureContainer.style.display = 'block';
        if (isTheology) {
          scriptureContainer.className = 'detail-scripture detail-theme';
          scriptureContainer.innerHTML = `<strong><i class="fa-solid fa-bookmark"></i> 主題:</strong> <span id="detail-scripture">${article.scripture}</span>`;
        } else {
          scriptureContainer.className = 'detail-scripture';
          scriptureContainer.innerHTML = `<strong><i class="fa-solid fa-bible"></i> 御言葉:</strong> <span id="detail-scripture">${article.scripture}</span>`;
        }
      } else {
        scriptureContainer.style.display = 'none';
      }
    }

    // Clear previous content & embed video player if youtubeUrl is present
    const contentArea = document.getElementById('detail-content');
    if (contentArea) {
      contentArea.innerHTML = '';

      // Embed PDF Download Banner if pdfUrl is present
      if (article.pdfUrl) {
        const pdfBanner = document.createElement('div');
        pdfBanner.className = 'article-pdf-banner';
        pdfBanner.style.cssText = 'background: linear-gradient(135deg, #1e3a8a, #0284c7); color: white; padding: 18px 24px; border-radius: 12px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);';
        pdfBanner.innerHTML = `
          <div style="display: flex; align-items: center; gap: 14px;">
            <i class="fa-solid fa-file-pdf" style="font-size: 2.2rem; color: #fde047;"></i>
            <div>
              <div style="font-weight: bold; font-size: 1.1rem; color: #ffffff;">${article.title} - 小冊子 PDF</div>
              <div style="font-size: 0.85rem; color: #e0f2fe; margin-top: 2px;">全文を原本PDFファイルで閲覧・無料ダウンロードいただけます。</div>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <a href="${article.pdfUrl}" target="_blank" class="btn-pdf-view" style="background: rgba(255,255,255,0.2); color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.4);">
              <i class="fa-solid fa-eye"></i> 閲覧 (View)
            </a>
            <a href="${article.pdfUrl}" download class="btn-pdf-download" style="background: #f59e0b; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
              <i class="fa-solid fa-download"></i> PDFダウンロード (Download)
            </a>
          </div>
        `;
        contentArea.appendChild(pdfBanner);
      }

      const youtubeId = getYouTubeId(article.videoUrl);
      if (youtubeId) {
        const embedWrapper = document.createElement('div');
        embedWrapper.className = 'video-embed-wrapper';
        embedWrapper.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${youtubeId}" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
          </iframe>
        `;
        contentArea.appendChild(embedWrapper);
      }

      if (article.categoryId === 'cat_1787469050463') {
        const profileBody = document.createElement('div');
        profileBody.innerHTML = `
          <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <div style="width: 150px; height: 200px; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); flex-shrink: 0; margin: 0 auto;">
              <img src="${article.photoUrl || 'hero_bg.jpg'}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex-grow: 1; min-width: 250px;">
              <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 0.5rem;">${article.title}</h2>
              <p style="color: var(--accent-color); font-weight: 500; margin-bottom: 1rem;">${article.author}</p>
              <div class="article-body-html" style="line-height: 1.8; color: var(--text-dark);">${formatArticleContent(article.content)}</div>
            </div>
          </div>
        `;
        contentArea.appendChild(profileBody);
      } else if (isFullHtmlDoc(article.content)) {
        const iframe = document.createElement('iframe');
        iframe.className = 'article-doc-iframe';
        iframe.style.width = '100%';
        iframe.style.border = 'none';
        iframe.style.minHeight = '500px';
        iframe.style.borderRadius = '8px';
        iframe.style.display = 'block';
        iframe.setAttribute('scrolling', 'no');

        iframe.onload = function() {
          try {
            const doc = iframe.contentWindow.document;
            const autoResize = () => {
              if (doc && doc.body) {
                const h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
                if (h > 50) {
                  iframe.style.height = (h + 40) + 'px';
                }
              }
            };
            autoResize();
            setTimeout(autoResize, 300);
            setTimeout(autoResize, 1000);
            setTimeout(autoResize, 2500);
          } catch (err) {
            console.warn("Iframe auto-resize warning:", err);
          }
        };

        iframe.srcdoc = article.content;
        contentArea.appendChild(iframe);
      } else {
        const textBody = document.createElement('div');
        textBody.className = 'article-body-html';
        textBody.innerHTML = formatArticleContent(article.content);
        contentArea.appendChild(textBody);
      }

      // Render Bottom Adjacent Navigation Box
      const bottomNavBox = document.createElement('div');
      bottomNavBox.className = 'detail-bottom-nav-box';

      const prevCardHtml = prevArt ? `
        <div class="detail-bottom-nav-card prev-card" onclick="viewArticleDetail('${prevArt.id}')">
          <div class="detail-bottom-nav-label"><i class="fa-solid fa-arrow-left"></i> 前の項目 (이전글)</div>
          <div class="detail-bottom-nav-title">${prevArt.title}</div>
        </div>
      ` : `<div></div>`;

      const nextCardHtml = nextArt ? `
        <div class="detail-bottom-nav-card next-card" onclick="viewArticleDetail('${nextArt.id}')">
          <div class="detail-bottom-nav-label">次の項目 (다음글) <i class="fa-solid fa-arrow-right"></i></div>
          <div class="detail-bottom-nav-title">${nextArt.title}</div>
        </div>
      ` : `<div></div>`;

      bottomNavBox.innerHTML = `
        ${prevCardHtml}
        ${nextCardHtml}
      `;
      contentArea.appendChild(bottomNavBox);
    }

    const workspaceSec = document.getElementById('workspace-sec');
    if (workspaceSec) {
      workspaceSec.classList.add('active');
    }

    // Smooth scroll cleanly to the top of detail view with comfortable margin
    setTimeout(() => {
      const targetEl = document.getElementById('view-article-detail') || workspaceSec;
      if (targetEl) {
        const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
      }
    }, 50);

  } catch (err) {
    console.error("Error in viewArticleDetail:", err);
  }
}

// Back to list from detail
function goBackToArticles(targetMode) {
  state.currentArticle = null;
  sessionStorage.removeItem('wscal_user_article');

  const detailView = document.getElementById('view-article-detail');
  const listView = document.getElementById('view-article-list');
  if (detailView) detailView.style.display = 'none';
  if (listView) listView.style.display = 'block';

  const isCatechismMenu = state.currentMenu === 'catechism' || (typeof isCatechismOrWcfCategory === 'function' && isCatechismOrWcfCategory(state.currentCategory));

  if (targetMode === 'mindmap' || (!targetMode && state.articleViewMode === 'mindmap' && isCatechismMenu)) {
    state.articleViewMode = 'mindmap';
    renderArticlesList();
  } else {
    if (targetMode === 'list' || state.articleViewMode === 'mindmap') {
      state.articleViewMode = 'cards';
    }
    renderArticlesList();
    setTimeout(() => {
      const workspaceSec = document.getElementById('workspace-sec');
      if (workspaceSec) {
        const topOffset = workspaceSec.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
      }
    }, 50);
  }
}

// ==========================================
// 4. Featured ("Today's Blocks") Rendering & Actions
// ==========================================
function renderFeaturedBlocks() {
  if (!document.getElementById('today-word-scripture')) return;
  document.getElementById('today-word-scripture').textContent = state.featured.todaysWord.scripture;
  document.getElementById('today-word-meditation').textContent = state.featured.todaysWord.meditation;

  document.getElementById('today-sermon-title').textContent = state.featured.todaysSermon.title;
  document.getElementById('today-sermon-scripture').textContent = state.featured.todaysSermon.scripture;
  document.getElementById('today-sermon-preacher').textContent = state.featured.todaysSermon.preacher;

  document.getElementById('today-theo-title').textContent = state.featured.todaysTheology.title;
  document.getElementById('today-theo-summary').textContent = state.featured.todaysTheology.summary;
}

// Action: Read Today's Sermon 요지
function viewTodaySermonDetail() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'featured-detail-modal';
  
  const contentMarkup = `
    <div class="modal-box" style="max-width: 700px; max-height: 80vh; overflow-y: auto; text-align: left;">
      <span class="modal-close" onclick="closeFeaturedModal()">&times;</span>
      <span class="card-tag"><i class="fa-solid fa-circle-play"></i> 今日の説教要旨</span>
      <h2 class="view-title" style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
        ${state.featured.todaysSermon.title}
      </h2>
      <div class="detail-meta" style="margin-bottom: 1rem;">
        <div>聖書本文: <strong>${state.featured.todaysSermon.scripture}</strong></div>
        <div>説教者: <strong>${state.featured.todaysSermon.preacher}</strong></div>
      </div>
      <div class="detail-content" style="white-space: pre-wrap; font-size: 1rem;">${state.featured.todaysSermon.content}</div>
    </div>
  `;
  overlay.innerHTML = contentMarkup;
  document.body.appendChild(overlay);
}

// Action: Read Today's Theology 자료
function viewTodayTheologyDetail() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'featured-detail-modal';
  
  const contentMarkup = `
    <div class="modal-box" style="max-width: 700px; max-height: 80vh; overflow-y: auto; text-align: left;">
      <span class="modal-close" onclick="closeFeaturedModal()">&times;</span>
      <span class="card-tag"><i class="fa-solid fa-bookmark"></i> 今日の神学研究資料</span>
      <h2 class="view-title" style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
        ${state.featured.todaysTheology.title}
      </h2>
      <p style="color: var(--text-light); font-size: 0.95rem; font-style: italic; margin-bottom: 1.5rem;">
        要約: ${state.featured.todaysTheology.summary}
      </p>
      <div class="detail-content" style="white-space: pre-wrap; font-size: 1rem;">${state.featured.todaysTheology.content}</div>
    </div>
  `;
  overlay.innerHTML = contentMarkup;
  document.body.appendChild(overlay);
}

function closeFeaturedModal() {
  const modal = document.getElementById('featured-detail-modal');
  if (modal) modal.remove();
}

// ==========================================
// 5. Admin Authentication
// ==========================================
function openLoginModal() {
  const rememberEnabled = localStorage.getItem('wscal_admin_remember_enabled') !== 'false';
  const savedPass = localStorage.getItem('wscal_admin_saved_pass') || '';
  const savedUser = localStorage.getItem('wscal_admin_saved_user') || 'admin';
  const hasLogged = localStorage.getItem('wscal_admin_logged') === 'true';

  // 이전에 로그인했거나 비밀번호가 저장된 컴퓨터에서는 모달 없이 바로 관리자 화면으로 연결
  if (state.isAdmin || hasLogged || (rememberEnabled && savedUser === 'admin' && savedPass === '1234')) {
    state.isAdmin = true;
    sessionStorage.setItem('wscal_admin_logged', 'true');
    localStorage.setItem('wscal_admin_logged', 'true');
    showAdminDashboard('folders');
    updateAdminNavAndFloatingButtons();
    return;
  }

  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.add('active');

  const userInput = document.getElementById('login-username');
  const passInput = document.getElementById('login-password');
  const rememberCheckbox = document.getElementById('login-remember');

  // 이 컴퓨터(localStorage)에 저장된 로그인 정보 불러오기
  if (rememberCheckbox) {
    rememberCheckbox.checked = rememberEnabled;
  }

  if (userInput) {
    userInput.value = savedUser;
  }

  if (passInput) {
    if (rememberEnabled && savedPass) {
      passInput.value = savedPass;
    }
  }

  // 포커스 이동: 비밀번호까지 이미 채워져 있으면 로그인 버튼 또는 비밀번호창 선택
  if (savedPass && rememberEnabled) {
    if (passInput) passInput.focus();
  } else if (userInput && !userInput.value) {
    userInput.focus();
  } else if (passInput) {
    passInput.focus();
  }
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.remove('active');
  document.getElementById('login-error').style.display = 'none';
}

function handleLogin(event) {
  if (event) {
    event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();
  }
  const userInput = document.getElementById('login-username');
  const passInput = document.getElementById('login-password');
  const rememberCheckbox = document.getElementById('login-remember');

  const user = (userInput ? userInput.value : '').trim();
  const pass = (passInput ? passInput.value : '').trim();
  const shouldRemember = rememberCheckbox ? rememberCheckbox.checked : true;

  if (user === 'admin' && pass === '1234') {
    state.isAdmin = true;
    sessionStorage.setItem('wscal_admin_logged', 'true');

    // 접속한 컴퓨터의 브라우저에 로그인 정보 및 자동연결 저장
    if (shouldRemember) {
      localStorage.setItem('wscal_admin_logged', 'true');
      localStorage.setItem('wscal_admin_saved_user', user);
      localStorage.setItem('wscal_admin_saved_pass', pass);
      localStorage.setItem('wscal_admin_remember_enabled', 'true');
    } else {
      localStorage.removeItem('wscal_admin_logged');
      localStorage.removeItem('wscal_admin_saved_user');
      localStorage.removeItem('wscal_admin_saved_pass');
      localStorage.setItem('wscal_admin_remember_enabled', 'false');
    }

    closeLoginModal();
    showAdminDashboard('folders');
    updateAdminNavAndFloatingButtons();
  } else {
    const errEl = document.getElementById('login-error');
    if (errEl) {
      errEl.style.display = 'block';
      errEl.textContent = 'IDまたはパスワードが正しくありません。(ID: admin / PW: 1234)';
    } else {
      alert("IDまたはパスワードが正しくありません。(ID: admin / 비밀번호: 1234)");
    }
  }
}
window.handleLogin = handleLogin;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;

async function handleLogout() {
  state.isAdmin = false;
  sessionStorage.removeItem('wscal_admin_logged');
  localStorage.removeItem('wscal_admin_logged');
  sessionStorage.removeItem('wscal_current_view');
  sessionStorage.removeItem('wscal_admin_tab');

  // Hide Admin UI & Show User UI
  document.getElementById('admin-dashboard-sec').classList.remove('active');
  document.getElementById('btn-admin-nav').style.display = 'block';
  
  // Reload homepage layout
  document.getElementById('hero-sec').style.display = 'block';
  document.getElementById('main-menu-sec').style.display = 'grid';
  const featSec = document.getElementById('featured-sec');
  if (featSec) featSec.style.display = 'block';
  
  // Reset menus and restore display modes
  document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('submenu-sec').style.display = '';
  document.getElementById('submenu-sec').classList.remove('active');
  document.getElementById('workspace-sec').style.display = '';
  document.getElementById('workspace-sec').classList.remove('active');

  renderHomepageQuickAdminBar();
  updateAdminNavAndFloatingButtons();
  if (state.currentCategory) {
    renderArticlesList();
  }
}

function showAdminDashboard(targetTab) {
  // Remember view state
  sessionStorage.setItem('wscal_current_view', 'admin');

  // Hide all user layouts
  document.getElementById('hero-sec').style.display = 'none';
  document.getElementById('main-menu-sec').style.display = 'none';
  document.getElementById('submenu-sec').style.display = 'none';
  document.getElementById('workspace-sec').style.display = 'none';

  // Show Admin Dashboard Container
  document.getElementById('admin-dashboard-sec').classList.add('active');

  // Update nav and floating toggle buttons
  updateAdminNavAndFloatingButtons();

  // Load and update GitHub token badge & inputs
  updateGitHubSyncBadge();

  // Trigger default/specified Admin Tab loading
  const tabToOpen = targetTab || sessionStorage.getItem('wscal_admin_tab') || 'folders';
  switchAdminTab(tabToOpen);
}

function returnToUserSite() {
  // Remember view state
  sessionStorage.setItem('wscal_current_view', 'user');

  // Close admin dashboard container, but keep state.isAdmin = true
  document.getElementById('admin-dashboard-sec').classList.remove('active');
  
  // Restore user layout
  document.getElementById('hero-sec').style.display = 'block';
  document.getElementById('main-menu-sec').style.display = 'grid';
  const featSec = document.getElementById('featured-sec');
  if (featSec) featSec.style.display = 'block';

  // Ensure quick admin bar and toggle buttons are displayed
  renderHomepageQuickAdminBar();
  updateAdminNavAndFloatingButtons();
  renderRecentArticles();

  // If a category was selected, show the workspace list with admin buttons
  if (state.currentCategory) {
    document.getElementById('workspace-sec').style.display = 'grid';
    document.getElementById('workspace-sec').classList.add('active');
    renderArticlesList();
  } else {
    // Show top homepage view
    document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('active'));
    document.getElementById('submenu-sec').classList.remove('active');
    document.getElementById('workspace-sec').classList.remove('active');
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitAdminView() {
  returnToUserSite();
}

// Toggle between Admin Dashboard and User Site View
function toggleAdminModeView() {
  if (!state.isAdmin) {
    openLoginModal();
    return;
  }
  const adminSec = document.getElementById('admin-dashboard-sec');
  if (adminSec && adminSec.classList.contains('active')) {
    returnToUserSite();
  } else {
    showAdminDashboard();
  }
}

function handleNavAdminClick() {
  if (!state.isAdmin) {
    openLoginModal();
  } else {
    handleLogout();
  }
}

// Update Header Nav button and Toggle button based on state and current view
function updateAdminNavAndFloatingButtons() {
  const toggleBtn = document.getElementById('btn-toggle-view');
  const navBtn = document.getElementById('btn-admin-nav');
  const ghHeaderStatus = document.getElementById('header-github-status');
  const ghHeaderStatusText = document.getElementById('header-github-status-text');
  const adminSec = document.getElementById('admin-dashboard-sec');
  const isAdminViewActive = adminSec && adminSec.classList.contains('active');
  const token = (localStorage.getItem('wscal_github_token') || '').trim();

  // Remove top admin floating bar if it exists
  const topBar = document.getElementById('homepage-quick-admin-bar');
  if (topBar) topBar.remove();

  if (!state.isAdmin) {
    // Logged out: hide toggle button and github badge, show login button
    if (ghHeaderStatus) ghHeaderStatus.style.display = 'none';
    if (toggleBtn) {
      toggleBtn.style.display = 'none';
    }
    if (navBtn) {
      navBtn.style.display = 'inline-flex';
      navBtn.className = 'btn-admin';
      navBtn.style.background = '';
      navBtn.style.color = '';
      navBtn.style.border = '';
      navBtn.style.fontWeight = '';
      navBtn.innerHTML = '<i class="fa-solid fa-lock"></i> <span>管理者ログイン</span>';
    }
    return;
  }

  // Logged in as Admin:
  // 0. GitHub Status Badge in Header
  if (ghHeaderStatus) {
    ghHeaderStatus.style.display = 'inline-flex';
    if (token) {
      ghHeaderStatus.style.background = 'rgba(34, 197, 94, 0.2)';
      ghHeaderStatus.style.border = '1px solid rgba(34, 197, 94, 0.6)';
      ghHeaderStatus.style.color = '#86efac';
      if (ghHeaderStatusText) ghHeaderStatusText.textContent = 'GitHub 연동됨';
      ghHeaderStatus.title = 'GitHub 연동: 정상 (토큰 등록됨)\n클릭 시 관리자 화면으로 이동';
    } else {
      ghHeaderStatus.style.background = 'rgba(239, 68, 68, 0.2)';
      ghHeaderStatus.style.border = '1px solid rgba(239, 68, 68, 0.6)';
      ghHeaderStatus.style.color = '#fca5a5';
      if (ghHeaderStatusText) ghHeaderStatusText.textContent = 'GitHub 미연결';
      ghHeaderStatus.title = 'GitHub 토큰이 등록되지 않았습니다.\n클릭하여 관리자 화면에서 토큰을 등록해 주세요.';
    }
  }

  // 1. View Switch Button in Header (Next to Logout)
  if (toggleBtn) {
    toggleBtn.style.display = 'inline-flex';
    if (isAdminViewActive) {
      toggleBtn.className = 'btn-admin btn-switch-view';
      toggleBtn.style.background = 'rgba(255, 255, 255, 0.15)';
      toggleBtn.style.color = '#ffffff';
      toggleBtn.style.border = '1px solid rgba(255, 255, 255, 0.3)';
      toggleBtn.style.fontWeight = '600';
      toggleBtn.innerHTML = '<i class="fa-solid fa-globe"></i> <span>サイトを見る (사이트 보기)</span>';
      toggleBtn.title = 'ユーザーサイトに戻る';
    } else {
      toggleBtn.className = 'btn-admin';
      toggleBtn.style.background = 'var(--accent-color)';
      toggleBtn.style.color = '#0A1C36';
      toggleBtn.style.border = '1px solid var(--accent-color)';
      toggleBtn.style.fontWeight = 'bold';
      toggleBtn.innerHTML = '<i class="fa-solid fa-sliders"></i> <span>管理パネル (관리자 패널)</span>';
      toggleBtn.title = '管理者パネルを開く';
    }
  }

  // 2. Logout Button in Header
  if (navBtn) {
    navBtn.style.display = 'inline-flex';
    navBtn.className = 'btn-admin';
    navBtn.style.background = 'rgba(239, 68, 68, 0.15)';
    navBtn.style.color = '#fca5a5';
    navBtn.style.border = '1px solid rgba(239, 68, 68, 0.4)';
    navBtn.style.fontWeight = '600';
    navBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> <span>ログアウト (로그아웃)</span>';
  }
}

// ==========================================
// 6. Admin Panel Content Actions
// ==========================================

function switchAdminTab(tabName) {
  state.adminTab = tabName;
  sessionStorage.setItem('wscal_admin_tab', tabName);
  
  // Tab indicators update
  document.querySelectorAll('.admin-menu-item').forEach(item => {
    if (item.id === `admin-menu-${tabName}`) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Hide all sections safely
  const allTabs = ['mainmenus', 'folders', 'write', 'articles', 'stats'];
  allTabs.forEach(t => {
    const el = document.getElementById(`admin-tab-${t}`);
    if (el) el.style.display = 'none';
  });

  // Show selected section
  const targetEl = document.getElementById(`admin-tab-${tabName}`);
  if (targetEl) {
    targetEl.style.display = 'block';
  }

  // Load section-specific datasets
  if (tabName === 'mainmenus') {
    populateAllMenuDropdowns();
    renderAdminMainMenuList();
  } else if (tabName === 'folders') {
    populateAllMenuDropdowns();
    populateParentDropdown();
    renderAdminCategoryList();
  } else if (tabName === 'write') {
    populateAllMenuDropdowns();
    if (!state.editArticleId) {
      resetWriteForm();
    }
  } else if (tabName === 'articles') {
    populateAllMenuDropdowns();
    renderAdminArticleList();
  } else if (tabName === 'stats') {
    populateAllMenuDropdowns();
    renderAdminStats();
  }
}

// Populate all dropdowns dynamically based on state.mainMenus
function populateAllMenuDropdowns() {
  // 1. Folder creation parent menu dropdown (new-cat-parent)
  const newCatParent = document.getElementById('new-cat-parent');
  if (newCatParent) {
    const val = newCatParent.value;
    newCatParent.innerHTML = '';
    state.mainMenus.forEach(menu => {
      const opt = document.createElement('option');
      opt.value = menu.id;
      opt.textContent = `${menu.nameJp} (${menu.nameKr || ''})`;
      newCatParent.appendChild(opt);
    });
    if (val) {
      newCatParent.value = val;
    }
  }

  // 2. Folder list filter parent dropdown (filter-cat-parent)
  const filterCatParent = document.getElementById('filter-cat-parent');
  if (filterCatParent) {
    const val = filterCatParent.value || 'all';
    filterCatParent.innerHTML = '<option value="all">すべて表示</option>';
    state.mainMenus.forEach(menu => {
      const opt = document.createElement('option');
      opt.value = menu.id;
      opt.textContent = `${menu.nameJp} (${menu.nameKr || ''})`;
      filterCatParent.appendChild(opt);
    });
    filterCatParent.value = val;
  }

  // 3. Write article parent menu dropdown (art-parent-menu)
  const artParentMenu = document.getElementById('art-parent-menu');
  if (artParentMenu) {
    const val = artParentMenu.value || '';
    artParentMenu.innerHTML = '<option value="">-- 親メニューの選択 --</option>';
    state.mainMenus.forEach(menu => {
      const opt = document.createElement('option');
      opt.value = menu.id;
      opt.textContent = `${menu.nameJp} (${menu.nameKr || ''})`;
      artParentMenu.appendChild(opt);
    });
    artParentMenu.value = val;
  }

    // 4. Article manager filter dropdown (filter-art-parent) - supports deep category filter
  const filterArtParent = document.getElementById('filter-art-parent');
  if (filterArtParent) {
    const val = filterArtParent.value || 'all';
    filterArtParent.innerHTML = '<option value="all">모든 카테고리/폴더 (すべてのフォルダ)</option>';
    
    state.mainMenus.forEach(menu => {
      // Main menu option
      const optMenu = document.createElement('option');
      optMenu.value = menu.id;
      optMenu.textContent = `[대메뉴] ${menu.nameJp} (${menu.nameKr || ''})`;
      optMenu.style.fontWeight = 'bold';
      filterArtParent.appendChild(optMenu);
      
      // All child folders under this main menu
      const flatTree = buildFlatTree(menu.id, 0);
      flatTree.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        const indent = '\u00A0\u00A0\u00A0\u00A0'.repeat(c.depth + 1);
        opt.textContent = `${indent}└ ${c.nameJp} (${c.nameKr || ''})`;
        filterArtParent.appendChild(opt);
      });
    });
    filterArtParent.value = val;
  }
}

// Render dynamic main menus list in Admin Dashboard
function renderAdminMainMenuList() {
  const container = document.getElementById('admin-mainmenus-container');
  if (!container) return;
  container.innerHTML = '';

  if (state.mainMenus.length === 0) {
    container.innerHTML = '<div style="padding: 10px; color: var(--text-light); font-size: 0.85rem;">登録されている大メニューがありません。</div>';
    return;
  }

  state.mainMenus.forEach(menu => {
    const div = document.createElement('div');
    div.className = 'category-tree-node';
    div.style.marginBottom = '6px';
    
    const iconClass = menu.icon || 'fa-circle-chevron-right';
    const isVideoLabel = menu.isVideo ? '<span style="font-size:0.75rem; color: var(--accent-color); margin-left: 6px;">[Video]</span>' : '';

    div.innerHTML = `
      <div class="category-node-info" style="display: flex; align-items: center; gap: 8px; font-weight: 600; line-height: 1.35;">
        <span class="drag-handle-cat" title="ドラッグして順序変更 (드래그하여 순서 변경)"><i class="fa-solid fa-grip-vertical"></i></span>
        <i class="fa-solid ${iconClass}" style="color: var(--accent-color);"></i> ${menu.nameJp} <span style="font-size: 0.8rem; color: var(--text-light); font-weight: normal; margin-left: 5px;">(${menu.nameKr || ''})</span> ${isVideoLabel}
      </div>
      <div class="category-node-actions">
        <button class="btn-tree-action edit-name" onclick="renameMainMenu('${menu.id}')" title="名前の変更 (대메뉴명 수정)"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-tree-action delete-node" onclick="handleDeleteMainMenu('${menu.id}')" title="削除 (삭제)"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    `;
    attachMainMenuDragEvents(div, menu.id);
    container.appendChild(div);
  });
}

// ==========================================
// MAIN MENU DRAG AND DROP REORDERING
// ==========================================
let draggedMainMenuId = null;

function attachMainMenuDragEvents(nodeEl, menuId) {
  nodeEl.setAttribute('draggable', 'true');
  nodeEl.dataset.menuId = menuId;

  nodeEl.addEventListener('dragstart', (e) => {
    draggedMainMenuId = menuId;
    nodeEl.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', menuId);
  });

  nodeEl.addEventListener('dragend', () => {
    nodeEl.classList.remove('dragging');
    document.querySelectorAll('.category-tree-node.drag-over').forEach(el => el.classList.remove('drag-over'));
  });

  nodeEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!nodeEl.classList.contains('drag-over') && draggedMainMenuId !== menuId) {
      nodeEl.classList.add('drag-over');
    }
  });

  nodeEl.addEventListener('dragleave', () => {
    nodeEl.classList.remove('drag-over');
  });

  nodeEl.addEventListener('drop', async (e) => {
    e.preventDefault();
    nodeEl.classList.remove('drag-over');
    if (!draggedMainMenuId || draggedMainMenuId === menuId) return;

    await reorderMainMenuByDrag(draggedMainMenuId, menuId);
    draggedMainMenuId = null;
  });
}

async function reorderMainMenuByDrag(sourceId, targetId) {
  const fromIdx = state.mainMenus.findIndex(m => m.id === sourceId);
  const toIdx = state.mainMenus.findIndex(m => m.id === targetId);

  if (fromIdx !== -1 && toIdx !== -1) {
    const [moved] = state.mainMenus.splice(fromIdx, 1);
    state.mainMenus.splice(toIdx, 0, moved);

    // Assign integer positions to maintain exact order
    state.mainMenus.forEach((m, idx) => {
      m.position = idx;
    });

    saveMainMenus();
    syncDataJsonToGitHub();
    renderMainMenuCards();
    populateAllMenuDropdowns();
    renderAdminMainMenuList();
  }
}
async function handleAddMainMenu(event) {
  event.preventDefault();
  const name = document.getElementById('new-menu-name').value.trim();
  const icon = document.getElementById('new-menu-icon').value.trim() || 'fa-circle-chevron-right';
  const isVideo = document.getElementById('new-menu-isvideo').checked;

  if (!name) return;

  // Translate automatically and generate dual language name object
  const { nameJp, nameKr } = await createDualLanguageCategory(name);

  const newMenu = {
    id: 'menu_' + Date.now(),
    nameJp: nameJp,
    nameKr: nameKr,
    icon: icon,
    isVideo: isVideo
  };

  state.mainMenus.push(newMenu);
  saveMainMenus();
  
  // Clean inputs
  document.getElementById('new-menu-name').value = '';
  document.getElementById('new-menu-icon').value = 'fa-circle-chevron-right';
  document.getElementById('new-menu-isvideo').checked = false;

  renderMainMenuCards();
  populateAllMenuDropdowns();
  renderAdminMainMenuList();

  alert(`대메뉴 「${nameKr}」을 일본어 「${nameJp}」로 자동 번역하여 생성했습니다.`);
}

// Rename Main Menu
async function renameMainMenu(menuId) {
  const menu = state.mainMenus.find(m => m.id === menuId);
  if (!menu) return;

  const newName = prompt("大メニューの名前を新しく入力してください (대메뉴 이름 수정):", menu.nameKr || menu.nameJp);
  if (newName && newName.trim()) {
    const trimmedName = newName.trim();
    const { nameJp, nameKr } = await createDualLanguageCategory(trimmedName);

    menu.nameJp = nameJp;
    menu.nameKr = nameKr;
    saveMainMenus();

    renderMainMenuCards();
    populateAllMenuDropdowns();
    renderAdminMainMenuList();

    alert(`대메뉴명을 일본어 「${nameJp}」, 한국어 「${nameKr}」로 자동 번역하여 수정했습니다.`);
  }
}

// Delete Main Menu & all its child subfolders recursively
function handleDeleteMainMenu(menuId) {
  const menu = state.mainMenus.find(m => m.id === menuId);
  if (!menu) return;

  // Find all category folders belonging directly to this main menu
  const menuCats = state.categories.filter(c => c.parentId === menuId);
  let allToDeleteIds = [];
  
  menuCats.forEach(c => {
    allToDeleteIds = allToDeleteIds.concat(getAllDescendantCategoryIds(c.id));
  });

  const relatedArtsCount = state.articles.filter(a => allToDeleteIds.includes(a.categoryId)).length;

  const confirmMsg = `대메뉴 「${menu.nameJp} (${menu.nameKr})」을 삭제하시겠습니까?\n주의: 이 대메뉴 하위의 모든 폴더 및 자료 ${relatedArtsCount}건이 재귀적으로 함께 영구 삭제됩니다!`;

  if (confirm(confirmMsg)) {
    // Delete articles
    if (allToDeleteIds.length > 0) {
      state.articles = state.articles.filter(a => !allToDeleteIds.includes(a.categoryId));
      saveArticles();
    }

    // Delete sub-categories
    state.categories = state.categories.filter(c => c.parentId !== menuId && !allToDeleteIds.includes(c.id));
    saveCategories();

    // Delete main menu
    state.mainMenus = state.mainMenus.filter(m => m.id !== menuId);
    saveMainMenus();

    renderMainMenuCards();
    populateAllMenuDropdowns();
    renderAdminMainMenuList();
  }
}



/* 6A. Folder (Category) Manager with Tree Support */
function populateParentDropdown() {
  const select = document.getElementById('new-cat-parent');
  if (!select) return;
  const val = select.value;
  select.innerHTML = '';
  
  state.mainMenus.forEach(root => {
    // Add Root Menus as Options
    const optGroup = document.createElement('option');
    optGroup.value = root.id;
    optGroup.style.fontWeight = 'bold';
    optGroup.textContent = `▶ ${root.nameJp} (${root.nameKr || ''})`;
    select.appendChild(optGroup);
    
    // Add nested children recursively
    const flatTree = buildFlatTree(root.id, 0);
    flatTree.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      // Using non-breaking space for visual indent tree
      const indent = '\u00A0\u00A0'.repeat(c.depth + 1);
      opt.textContent = `${indent}└ ${c.nameJp} (${c.nameKr || ''})`;
      select.appendChild(opt);
    });
  });
  if (val) {
    select.value = val;
  }
}

function renderAdminCategoryList() {
  const filter = document.getElementById('filter-cat-parent').value;
  const container = document.getElementById('admin-categories-container');
  container.className = 'category-tree-container'; // Apply new styles
  container.innerHTML = '';

  const menusToRender = filter === 'all' 
    ? state.mainMenus.map(m => m.id) 
    : [filter];

  const parentLabels = {};
  state.mainMenus.forEach(m => {
    parentLabels[m.id] = m.nameJp;
  });

  menusToRender.forEach(menuKey => {
    // Header for Menu Type in 'all' view
    if (filter === 'all') {
      const headerDiv = document.createElement('div');
      headerDiv.style.fontWeight = 'bold';
      headerDiv.style.color = 'var(--primary-color)';
      headerDiv.style.marginTop = '15px';
      headerDiv.style.marginBottom = '6px';
      headerDiv.style.borderBottom = '1.5px solid var(--border-color)';
      headerDiv.style.paddingBottom = '4px';
      headerDiv.innerHTML = `<i class="fa-solid fa-list-ul"></i> ${parentLabels[menuKey] || menuKey}`;
      container.appendChild(headerDiv);
    }

    const flatTree = buildFlatTree(menuKey, 0);

    if (flatTree.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.style.padding = '10px 14px';
      emptyDiv.style.color = 'var(--text-light)';
      emptyDiv.style.fontSize = '0.85rem';
      emptyDiv.textContent = '登録されているフォルダがありません。';
      container.appendChild(emptyDiv);
      return;
    }

    flatTree.forEach(node => {
      const div = document.createElement('div');
      // Assign visual indent CSS
      div.className = `category-tree-node depth-indent-${node.depth}`;
      div.innerHTML = `
        <div class="category-node-info" style="display: flex; align-items: center; gap: 8px; font-weight: 600; line-height: 1.35;">
          <span class="drag-handle-cat" title="ドラッグして順序変更 (드래그하여 순서 변경)"><i class="fa-solid fa-grip-vertical"></i></span>
          <i class="fa-regular fa-folder-open" style="color: var(--accent-color);"></i> ${node.nameJp} <span style="font-size: 0.8rem; color: var(--text-light); font-weight: normal; margin-left: 5px;">(${node.nameKr || ''})</span>
        </div>
        <div class="category-node-actions">
          <button class="btn-tree-action edit-name" onclick="renameCategory('${node.id}')" title="名前の変更 (폴더명 수정)"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-tree-action add-sub" onclick="prepareAddSubcategory('${node.id}')" title="下部フォルダ追加 (하위 폴더 추가)"><i class="fa-solid fa-plus"></i></button>
          <button class="btn-tree-action delete-node" onclick="handleDeleteCategory('${node.id}')" title="フォルダ削除 (폴더 삭제)"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      `;
      attachCategoryDragEvents(div, node.id);
      container.appendChild(div);
    });
  });
}

async function handleAddCategory(event) {
  event.preventDefault();
  const parent = document.getElementById('new-cat-parent').value;
  const name = document.getElementById('new-cat-name').value.trim();

  if (!name) return;

  // Translate automatically and generate dual language name object
  const { nameJp, nameKr } = await createDualLanguageCategory(name);

  const newCat = {
    id: 'cat_' + Date.now(),
    parentId: parent,
    nameJp: nameJp,
    nameKr: nameKr
  };

  state.categories.push(newCat);
  saveCategories();
  
  document.getElementById('new-cat-name').value = '';
  populateParentDropdown();
  renderAdminCategoryList();
  
  alert(`폴더 「${nameKr}」을 일본어 「${nameJp}」로 자동 번역하여 생성했습니다.`);
}

function handleDeleteCategory(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;

  // Hierarchical recursive delete: find all descendant folders
  const allToDeleteIds = getAllDescendantCategoryIds(catId);
  
  // Count articles within those folders
  const relatedArtsCount = state.articles.filter(a => allToDeleteIds.includes(a.categoryId)).length;
  
  const confirmMsg = relatedArtsCount > 0 
    ? `「${cat.nameJp} (${cat.nameKr})」とその下部フォルダすべてを削除しますか？\n警告: 含まれる ${relatedArtsCount} 件の記事・資料も同時にすべて削除されます！`
    : `「${cat.nameJp} (${cat.nameKr})」とその下部フォルダすべてを削除しますか？`;

  if (confirm(confirmMsg)) {
    // Delete articles
    state.articles = state.articles.filter(a => !allToDeleteIds.includes(a.categoryId));
    saveArticles();

    // Delete categories
    state.categories = state.categories.filter(c => !allToDeleteIds.includes(c.id));
    saveCategories();

    populateParentDropdown();
    renderAdminCategoryList();
  }
}

// ==========================================
// CATEGORY DRAG AND DROP REORDERING
// ==========================================
let draggedCatId = null;

function attachCategoryDragEvents(nodeEl, catId) {
  nodeEl.setAttribute('draggable', 'true');
  nodeEl.dataset.catId = catId;

  nodeEl.addEventListener('dragstart', (e) => {
    draggedCatId = catId;
    nodeEl.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', catId);
  });

  nodeEl.addEventListener('dragend', () => {
    nodeEl.classList.remove('dragging');
    document.querySelectorAll('.category-tree-node.drag-over').forEach(el => el.classList.remove('drag-over'));
  });

  nodeEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!nodeEl.classList.contains('drag-over') && draggedCatId !== catId) {
      nodeEl.classList.add('drag-over');
    }
  });

  nodeEl.addEventListener('dragleave', () => {
    nodeEl.classList.remove('drag-over');
  });

  nodeEl.addEventListener('drop', async (e) => {
    e.preventDefault();
    nodeEl.classList.remove('drag-over');
    if (!draggedCatId || draggedCatId === catId) return;

    await reorderCategoryByDrag(draggedCatId, catId);
    draggedCatId = null;
  });
}

async function reorderCategoryByDrag(sourceId, targetId) {
  const sourceCat = state.categories.find(c => c.id === sourceId);
  const targetCat = state.categories.find(c => c.id === targetId);
  if (!sourceCat || !targetCat) return;

  // If dragged to a different parent, adopt the target's parent
  if (sourceCat.parentId !== targetCat.parentId) {
    sourceCat.parentId = targetCat.parentId;
  }

  const siblings = state.categories.filter(c => c.parentId === targetCat.parentId);
  siblings.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : 999999;
    const posB = b.position !== undefined ? b.position : 999999;
    if (posA !== posB) return posA - posB;
    return a.id.localeCompare(b.id);
  });

  const fromIdx = siblings.findIndex(c => c.id === sourceId);
  const toIdx = siblings.findIndex(c => c.id === targetId);

  if (fromIdx !== -1 && toIdx !== -1) {
    const [moved] = siblings.splice(fromIdx, 1);
    siblings.splice(toIdx, 0, moved);

    // Assign integer positions
    siblings.forEach((c, idx) => {
      c.position = idx;
    });

    saveCategories();



    syncDataJsonToGitHub();
    populateParentDropdown();
    populateAllMenuDropdowns();
    renderAdminCategoryList();
    renderSidebarTree();
    renderMainMenuCards();
  }
}

async function renameCategory(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  
  const newName = prompt("フォルダの名前を新しく入力してください (폴더 이름 수정):", cat.nameKr || cat.nameJp);
  if (newName && newName.trim()) {
    const trimmedName = newName.trim();
    // Translate automatically to generate dual language name object
    const { nameJp, nameKr } = await createDualLanguageCategory(trimmedName);
    
    cat.nameJp = nameJp;
    cat.nameKr = nameKr;
    saveCategories();
    populateParentDropdown();
    renderAdminCategoryList();

    alert(`폴더명을 일본어 「${nameJp}」, 한국어 「${nameKr}」로 자동 번역하여 수정했습니다.`);
  }
}

function prepareAddSubcategory(catId) {
  const select = document.getElementById('new-cat-parent');
  if (select) {
    select.value = catId;
  }
  const nameInput = document.getElementById('new-cat-name');
  if (nameInput) {
    nameInput.focus();
    nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* 6B. Write/Edit Article with Video Support */
function updateWriteSubcategoryDropdown() {
  const parentMenu = document.getElementById('art-parent-menu').value;
  const selectCat = document.getElementById('art-category-id');
  
  selectCat.innerHTML = '<option value="">-- 細部フォルダの選択 --</option>';

  if (!parentMenu) {
    handleCategoryChange();
    return;
  }

  // Build tree of categories belonging under this root menu
  const flatTree = buildFlatTree(parentMenu, 0);
  
  if (flatTree.length === 0) {
    selectCat.innerHTML = '<option value="">(親メニュー内に登録されたフォルダがありません)</option>';
    handleCategoryChange();
    return;
  }

  flatTree.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    const indent = '\u00A0\u00A0'.repeat(c.depth);
    opt.textContent = `${indent}${c.depth > 0 ? '└ ' : ''}${c.nameJp} (${c.nameKr || ''})`;
    selectCat.appendChild(opt);
  });

  handleCategoryChange();
}

function handleCategoryChange() {
  const categoryId = document.getElementById('art-category-id').value;
  const photoGroup = document.getElementById('art-photo-group');
  const contentLabel = document.getElementById('art-content-label');
  const contentInput = document.getElementById('art-content');
  
  const titleGroup = document.getElementById('art-title-group');
  const titleInput = document.getElementById('art-title');
  const videoGroup = document.getElementById('art-video-group');
  const authorLabel = document.getElementById('art-author-label');
  const authorInput = document.getElementById('art-author');
  const scriptureLabel = document.getElementById('art-scripture-label');
  const scriptureInput = document.getElementById('art-scripture');
  const authorScriptureRow = document.getElementById('art-author-scripture-row');

  // Reset to default settings
  if (photoGroup) photoGroup.style.display = 'none';
  if (titleGroup) titleGroup.style.display = 'block';
  if (titleInput) titleInput.setAttribute('required', 'required');
  if (videoGroup) videoGroup.style.display = 'block';
  if (authorScriptureRow) authorScriptureRow.style.display = 'flex';
  if (authorInput) authorInput.setAttribute('required', 'required');
  
  const parentMenu = document.getElementById('art-parent-menu') ? document.getElementById('art-parent-menu').value : '';
  const isTheology = parentMenu === 'theology' || isTheologyCategory(categoryId);

  if (authorLabel) authorLabel.textContent = '著者 / 説教者';
  if (authorInput) authorInput.placeholder = '例: ジョン・オーウェン、清水牧師';
  if (isTheology) {
    if (scriptureLabel) scriptureLabel.textContent = '主題 (テーマ・주제)';
    if (scriptureInput) scriptureInput.placeholder = '例: キリストの神性と人性、義認論 (주제 입력)';
  } else {
    if (scriptureLabel) scriptureLabel.textContent = '関連聖句（本文章など）';
    if (scriptureInput) scriptureInput.placeholder = '例: ローマの信徒への手紙 8:28 (任意)';
  }
  if (contentLabel) contentLabel.textContent = 'コンテンツ本文';
  if (contentInput) contentInput.placeholder = '説教要旨、神学研究資料などの本文を入力してください...';

  if (categoryId === 'cat_1787469050463') {
    // 섬기는 이들 (Servants)
    if (photoGroup) photoGroup.style.display = 'block';
    if (contentLabel) contentLabel.textContent = '경력 및 소개 (経歴・プロフィール)';
    if (contentInput) contentInput.placeholder = '섬기는 이의 약력, 소개글 등을 입력하십시오...';
    
    if (titleGroup) titleGroup.style.display = 'none';
    if (titleInput) titleInput.removeAttribute('required');
    if (videoGroup) videoGroup.style.display = 'none';
    
    if (authorLabel) authorLabel.textContent = '이름 (名前)';
    if (authorInput) authorInput.placeholder = '예시: 김요셉 목사';
    
    if (scriptureLabel) scriptureLabel.textContent = '직분 (職分)';
    if (scriptureInput) scriptureInput.placeholder = '예시: 담임목사, 협동목사, 시무장로';
  } else if (categoryId === 'cat_1787469045280') {
    // 기관 목적 (Organization Purpose)
    if (contentLabel) contentLabel.textContent = '주요 내용 (主要内容)';
    if (contentInput) contentInput.placeholder = '기관의 목적 및 소개글을 입력해 주세요...';
    
    if (titleGroup) titleGroup.style.display = 'none';
    if (titleInput) titleInput.removeAttribute('required');
    if (videoGroup) videoGroup.style.display = 'none';
    if (authorScriptureRow) authorScriptureRow.style.display = 'none';
    if (authorInput) authorInput.removeAttribute('required');
  }
}

function resetWriteForm() {
  state.editArticleId = null;
  document.getElementById('edit-article-id').value = '';
  document.getElementById('write-section-title').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> 新規資料の作成・投稿';
  document.getElementById('art-parent-menu').value = '';
  document.getElementById('art-category-id').innerHTML = '<option value="">-- 先に親メニューを選択してください --</option>';
  document.getElementById('art-title').value = '';
  document.getElementById('art-author').value = '';
  document.getElementById('art-scripture').value = '';
  document.getElementById('art-video-url').value = '';
  if (document.getElementById('art-photo-url')) {
    document.getElementById('art-photo-url').value = '';
  }
  document.getElementById('art-content').value = '';
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (wysiwygBox) wysiwygBox.innerHTML = '';
  document.getElementById('art-date').value = new Date().toISOString().split('T')[0];
  if (typeof selectTistoryMode === 'function') selectTistoryMode('basic');
  handleCategoryChange();
}

async function handleSaveArticle(event) {
  event.preventDefault();
  
  if (typeof currentTistoryMode !== 'undefined' && currentTistoryMode === 'basic') {
    const wysiwygBox = document.getElementById('art-editor-wysiwyg');
    if (wysiwygBox) {
      document.getElementById('art-content').value = wysiwygBox.innerHTML.trim();
    }
  }

  const articleId = document.getElementById('edit-article-id').value;
  const categoryId = document.getElementById('art-category-id').value;
  let title = document.getElementById('art-title').value.trim();
  let author = document.getElementById('art-author').value.trim();
  let scripture = document.getElementById('art-scripture').value.trim();
  let videoUrl = document.getElementById('art-video-url').value.trim();
  const photoUrl = document.getElementById('art-photo-url') ? document.getElementById('art-photo-url').value.trim() : '';
  const content = document.getElementById('art-content').value.trim();
  const date = document.getElementById('art-date').value;

    const isServantMenu = categoryId === 'cat_1787469050463';
  const isPurposeMenu = categoryId === 'cat_1787469045280';
  
  if (isServantMenu) {
    // For servants, Author input acts as 'Name' (db title) and Scripture input acts as 'Position' (db author)
    title = author;      // Name goes to title
    author = scripture;  // Position goes to author
    scripture = '';      // Empty scripture
    videoUrl = '';       // Empty youtube url
  } else if (isPurposeMenu) {
    title = '기관 목적';  // Default title
    author = '관리자';    // Default author
    scripture = '';
    videoUrl = '';
  }

    if (!categoryId || !title || !content || !author || !date) {
    if (isServantMenu) {
      alert("이름, 직분, 소개글은 필수 입력 항목입니다.");
    } else if (isPurposeMenu) {
      alert("주요 내용은 필수 입력 항목입니다.");
    } else {
      alert("親メニュー、細부폴더、타이틀、저자、등록일, 그리고 본문은 필수 입력 항목입니다.");
    }
    return;
  }

  const finalId = articleId || 'art_' + Date.now();
  const artData = {
    categoryId: categoryId,
    title: title,
    author: author,
    scripture: scripture,
    videoUrl: videoUrl,
    photoUrl: photoUrl,
    content: content,
    createdAt: date,
    views: 0
  };

  // If editing, preserve views
  if (articleId) {
    const oldArt = state.articles.find(a => a.id === articleId);
    if (oldArt) {
      artData.views = oldArt.views || 0;
    }
  }

  // 1. Local backup
  if (articleId) {
    const artIdx = state.articles.findIndex(a => a.id === articleId);
    if (artIdx !== -1) {
      state.articles[artIdx] = { id: finalId, ...artData };
    }
  } else {
    state.articles.push({ id: finalId, ...artData });
  }
  saveArticles();



  // 3. Sync compiled data.json to GitHub
  syncDataJsonToGitHub();

  renderRecentArticles();

  alert(articleId ? "記事を修正・保存しました。" : "新規記事を公開しました。");
  resetWriteForm();
  switchAdminTab('articles');
}

function cancelWrite() {
  resetWriteForm();
  switchAdminTab('articles');
}

// ==========================================
// Tistory-style Mode Dropdown & Dual Editor Helpers
// ==========================================
let currentTistoryMode = 'basic'; // 'basic' | 'markdown' | 'html'
let isEditorPreviewOpen = false;

function toggleTistoryModeDropdown() {
  const menu = document.getElementById('tistory-mode-menu');
  if (menu) menu.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const wrapper = document.getElementById('tistory-mode-wrapper');
  const menu = document.getElementById('tistory-mode-menu');
  if (wrapper && menu && !wrapper.contains(e.target)) {
    menu.classList.remove('show');
  }
});

function selectTistoryMode(mode) {
  const prevMode = currentTistoryMode;
  currentTistoryMode = mode;

  const menu = document.getElementById('tistory-mode-menu');
  if (menu) menu.classList.remove('show');

  const modeText = document.getElementById('tistory-mode-text');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  const codeTextarea = document.getElementById('art-content');
  const toolbar = document.getElementById('editor-quick-toolbar');
  const previewContainer = document.getElementById('editor-preview-container');

  // Update active states in dropdown
  document.querySelectorAll('.tistory-mode-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.getElementById(`mode-opt-${mode}`);
  if (activeItem) activeItem.classList.add('active');

  // Sync content between editors
  if (prevMode === 'basic') {
    if (wysiwygBox && codeTextarea) {
      codeTextarea.value = wysiwygBox.innerHTML;
    }
  } else {
    if (codeTextarea && wysiwygBox) {
      wysiwygBox.innerHTML = codeTextarea.value;
    }
  }

  if (mode === 'basic') {
    if (modeText) modeText.textContent = '기본모드';
    if (wysiwygBox) wysiwygBox.style.display = 'block';
    if (codeTextarea) codeTextarea.style.display = 'none';
    if (toolbar) toolbar.style.display = 'flex';
    if (previewContainer) previewContainer.style.display = 'none';
  } else if (mode === 'html') {
    if (modeText) modeText.textContent = 'HTML';
    if (wysiwygBox) wysiwygBox.style.display = 'none';
    if (codeTextarea) {
      codeTextarea.style.display = 'block';
      codeTextarea.placeholder = "HTML/CSS 코드를 직접 입력하세요 (<!DOCTYPE html>, <div>, Tailwind 등 전체 지원)...";
    }
    if (toolbar) toolbar.style.display = 'flex';
  } else if (mode === 'markdown') {
    if (modeText) modeText.textContent = '마크다운';
    if (wysiwygBox) wysiwygBox.style.display = 'none';
    if (codeTextarea) {
      codeTextarea.style.display = 'block';
      codeTextarea.placeholder = "마크다운 문법(# 제목, **굵게**, - 목록 등)으로 작성하세요...";
    }
    if (toolbar) toolbar.style.display = 'none';
  }

  updateEditorPreviewIfActive();
}

function syncWysiwygToTextarea() {
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  const codeTextarea = document.getElementById('art-content');
  if (wysiwygBox && codeTextarea) {
    codeTextarea.value = wysiwygBox.innerHTML;
  }
}

function execEditorCmd(cmd, value = null) {
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();
  document.execCommand(cmd, false, value);
  syncWysiwygToTextarea();
}

function execEditorTextColor(color) {
  if (!color) return;
  const icon = document.getElementById('toolbar-font-color-icon');
  if (icon) icon.style.color = color;
  execEditorCmd('foreColor', color);
}

function execEditorHighlight(color) {
  if (!color) return;
  if (color === 'transparent') {
    execEditorCmd('removeFormat');
  } else {
    execEditorCmd('hiliteColor', color);
  }
}

function execEditorFontSize(tag) {
  if (!tag) return;
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();

  if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'p') {
    execEditorCmd('formatBlock', tag);
  } else if (tag === 'small') {
    const selected = window.getSelection().toString() || '각주 또는 작은 설명문입니다.';
    document.execCommand('insertHTML', false, `<span style="font-size: 0.82rem; color: #64748b;">${selected}</span>`);
    syncWysiwygToTextarea();
  }
}

function insertCalloutTemplate(type) {
  if (!type) return;
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();

  let html = '';
  switch (type) {
    case 'scripture':
      html = `
        <div class="callout-scripture" style="border-left: 4px solid #c5a059; background-color: #fcfaf6; padding: 14px 18px; margin: 1.2rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
          <div class="callout-scripture-title" style="font-weight: bold; color: #854d0e; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-book-bible"></i> 성경 구절 본문
          </div>
          <div style="font-style: italic; color: #451a03; line-height: 1.6;">
            "여기에 성경 본문 말씀을 입력하세요."
          </div>
        </div>
        <p><br></p>
      `;
      break;
    case 'point':
      html = `
        <div class="callout-point" style="border-left: 4px solid #2563eb; background-color: #eff6ff; padding: 14px 18px; margin: 1.2rem 0; border-radius: 0 8px 8px 0;">
          <div class="callout-point-title" style="font-weight: bold; color: #1e40af; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-lightbulb"></i> 설교 요점 / 묵상 포인트
          </div>
          <div style="color: #1e3a8a; line-height: 1.6;">
            여기에 설교의 핵심 교훈이나 성도들을 위한 묵상 질문을 입력하세요.
          </div>
        </div>
        <p><br></p>
      `;
      break;
    case 'highlight':
      html = `
        <div class="callout-highlight" style="border-left: 4px solid #dc2626; background-color: #fef2f2; padding: 14px 18px; margin: 1.2rem 0; border-radius: 0 8px 8px 0;">
          <div class="callout-highlight-title" style="font-weight: bold; color: #991b1b; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-triangle-exclamation"></i> 핵심 주의 / 강조
          </div>
          <div style="color: #7f1d1d; line-height: 1.6;">
            신학적으로 오해하기 쉽거나 특별히 기억해야 할 중요한 명제를 작성하세요.
          </div>
        </div>
        <p><br></p>
      `;
      break;
    case 'summary':
      html = `
        <div class="callout-summary" style="border: 1px solid #cbd5e1; background-color: #f8fafc; padding: 14px 18px; margin: 1.2rem 0; border-radius: 8px;">
          <div style="font-weight: bold; color: #334155; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-thumbtack"></i> 신학 요약 정리
          </div>
          <ul style="margin: 0; padding-left: 20px; color: #475569; line-height: 1.6;">
            <li>요약 항목 1</li>
            <li>요약 항목 2</li>
          </ul>
        </div>
        <p><br></p>
      `;
      break;
  }

  document.execCommand('insertHTML', false, html);
  syncWysiwygToTextarea();
}

function insertWysiwygImage() {
  const url = prompt("삽입할 이미지 URL(웹 주소)을 입력하세요:", "https://");
  if (url && url.trim()) {
    if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
    const wysiwygBox = document.getElementById('art-editor-wysiwyg');
    if (!wysiwygBox) return;
    wysiwygBox.focus();
    const imgHtml = `<div style="text-align: center; margin: 1.5rem 0;"><img src="${url.trim()}" alt="이미지" style="max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"><div style="font-size: 0.8rem; color: #64748b; margin-top: 6px;">(이미지 설명)</div></div><p><br></p>`;
    document.execCommand('insertHTML', false, imgHtml);
    syncWysiwygToTextarea();
  }
}

function insertWysiwygHr() {
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();
  const hrHtml = `<hr style="border: 0; height: 1px; background: #cbd5e1; margin: 2rem 0;"><p><br></p>`;
  document.execCommand('insertHTML', false, hrHtml);
  syncWysiwygToTextarea();
}

function insertWysiwygHeading(tag) {
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();
  const headingHtml = `<h2 style="font-size: 1.4rem; font-weight: bold; color: #1e3a8a; margin: 1.5rem 0 0.8rem 0; border-left: 4px solid #c5a059; padding-left: 10px;">소제목을 입력하세요</h2><p><br></p>`;
  document.execCommand('insertHTML', false, headingHtml);
  syncWysiwygToTextarea();
}

function insertWysiwygQuote() {
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();
  const quoteHtml = `<blockquote style="border-left: 4px solid #c5a059; padding: 12px 18px; margin: 1.2rem 0; background: rgba(197, 160, 89, 0.08); border-radius: 0 6px 6px 0; font-style: italic;">신학자 또는 성경 인용구를 입력하세요</blockquote><p><br></p>`;
  document.execCommand('insertHTML', false, quoteHtml);
  syncWysiwygToTextarea();
}

function insertWysiwygTable() {
  if (currentTistoryMode !== 'basic') selectTistoryMode('basic');
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (!wysiwygBox) return;
  wysiwygBox.focus();
  const tableHtml = `<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;"><thead><tr style="background: #f1f5f9;"><th style="border: 1px solid #cbd5e1; padding: 8px 12px;">구분</th><th style="border: 1px solid #cbd5e1; padding: 8px 12px;">내용</th></tr></thead><tbody><tr><td style="border: 1px solid #cbd5e1; padding: 8px 12px;">항목 1</td><td style="border: 1px solid #cbd5e1; padding: 8px 12px;">설명 1</td></tr></tbody></table><p><br></p>`;
  document.execCommand('insertHTML', false, tableHtml);
  syncWysiwygToTextarea();
}

function insertWysiwygLink() {
  const url = prompt("연결할 URL 링크를 입력하세요:", "https://");
  if (url) {
    execEditorCmd('createLink', url);
  }
}

function insertHtmlSnippet(type) {
  if (currentTistoryMode === 'basic') {
    if (type === 'tailwind') {
      selectTistoryMode('html');
    }
  }

  const textarea = document.getElementById('art-content');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.substring(start, end);
  let snippet = '';

  switch (type) {
    case 'tailwind':
      snippet = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 font-sans">
  <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
    <div class="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
      Theological Visual
    </div>
    <h1 class="text-2xl font-bold text-slate-800 mb-3">제목을 입력하세요</h1>
    <p class="text-slate-600 leading-relaxed mb-6">여기에 카드 본문 내용을 입력하세요.</p>
    <div class="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-sm text-indigo-900">
      "성경 구절 또는 묵상 구절을 적어주세요"
    </div>
  </div>
</body>
</html>`;
      break;
    default:
      snippet = selected;
  }

  textarea.focus();
  const textBefore = textarea.value.substring(0, start);
  const textAfter = textarea.value.substring(end);
  textarea.value = textBefore + snippet + textAfter;
  textarea.selectionStart = textarea.selectionEnd = start + snippet.length;

  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (wysiwygBox) wysiwygBox.innerHTML = textarea.value;
  updateEditorPreviewIfActive();
}

function toggleEditorPreview() {
  isEditorPreviewOpen = !isEditorPreviewOpen;
  const container = document.getElementById('editor-preview-container');
  if (!container) return;

  if (isEditorPreviewOpen) {
    container.style.display = 'block';
    updateEditorPreview();
  } else {
    container.style.display = 'none';
  }
}

function updateEditorPreviewIfActive() {
  if (isEditorPreviewOpen) {
    updateEditorPreview();
  }
}

function updateEditorPreview() {
  const content = document.getElementById('art-content').value;
  const previewDiv = document.getElementById('editor-preview-content');
  if (!previewDiv) return;

  previewDiv.innerHTML = '';
  if (isFullHtmlDoc(content)) {
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.border = 'none';
    iframe.style.minHeight = '350px';
    iframe.style.borderRadius = '6px';
    iframe.setAttribute('scrolling', 'no');
    iframe.onload = function() {
      try {
        const doc = iframe.contentWindow.document;
        const resize = () => {
          if (doc && doc.body) {
            iframe.style.height = (Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight) + 20) + 'px';
          }
        };
        resize();
        setTimeout(resize, 500);
      } catch(e){}
    };
    iframe.srcdoc = content;
    previewDiv.appendChild(iframe);
  } else {
    previewDiv.innerHTML = formatArticleContent(content) || '<span style="color:#94a3b8; font-style:italic;">작성된 내용이 여기에 실시간으로 표시됩니다.</span>';
  }
}

/* Pagination actions for Admin */
function changeAdminPage(pageNum) {
  state.adminPagination.currentPage = pageNum;
  renderAdminArticleList();
}

function changeAdminPageSize(size) {
  state.adminPagination.pageSize = parseInt(size, 10);
  state.adminPagination.currentPage = 1;
  renderAdminArticleList();
}

function resetAdminArticlesPage() {
  state.adminPagination.currentPage = 1;
}

/* 6C. Article Manager List */
function renderAdminArticleList() {
  const parentFilter = document.getElementById('filter-art-parent').value;
  const container = document.getElementById('admin-articles-container');
  const paginationContainer = document.getElementById('admin-articles-pagination');
  container.innerHTML = '';
  if (paginationContainer) {
    paginationContainer.innerHTML = '';
  }

    let list = [...state.articles]; // Clone to prevent mutation

  if (parentFilter !== 'all') {
    const descendantIds = getAllDescendantCategoryIds(parentFilter);
    list = list.filter(art => descendantIds.includes(art.categoryId));
    
    // Sort by custom position within the selected folder
    list.sort((a, b) => {
      const posA = a.position !== undefined ? a.position : 999999;
      const posB = b.position !== undefined ? b.position : 999999;
      if (posA !== posB) return posA - posB;
      const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
      if (dateCompare !== 0) return dateCompare;
      return b.id.localeCompare(a.id);
    });
  } else {
    // Sort globally by date descending
    list.sort((a, b) => {
      const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
      if (dateCompare !== 0) return dateCompare;
      return b.id.localeCompare(a.id);
    });
  }

  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:3rem; color:var(--text-light);">登録されている資料がありません。</div>';
    return;
  }

  // 1. Pagination calculation
  const totalCount = list.length;
  const pageSize = state.adminPagination.pageSize || 10;
  const totalPages = Math.ceil(totalCount / pageSize);

  // Validate current page range
  if (state.adminPagination.currentPage > totalPages) {
    state.adminPagination.currentPage = totalPages;
  }
  if (state.adminPagination.currentPage < 1) {
    state.adminPagination.currentPage = 1;
  }

  const startIndex = (state.adminPagination.currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedList = list.slice(startIndex, endIndex);

  const parentLabels = {};
  state.mainMenus.forEach(m => {
    parentLabels[m.id] = m.nameJp;
  });

  // 2. Render paged articles
  pagedList.forEach(art => {
    const catObj = state.categories.find(c => c.id === art.categoryId);
    const catName = catObj ? catObj.nameJp : '不明なフォルダ';
    const parentLabel = catObj ? (parentLabels[catObj.parentId] || 'サブフォルダ') : '不明';

        const item = document.createElement('div');
    item.className = 'admin-article-item';
    
    const showOrderButtons = parentFilter !== 'all';
    const orderControls = showOrderButtons ? `
      <div class="admin-article-order-controls" style="display: flex; flex-direction: column; gap: 2px; margin-right: 12px; align-items: center; justify-content: center; flex-shrink: 0;">
        <button class="btn-mini-order" onclick="event.stopPropagation(); moveArticle('${art.id}', 'up')" title="위로"><i class="fa-solid fa-chevron-up"></i></button>
        <button class="btn-mini-order" onclick="event.stopPropagation(); moveArticle('${art.id}', 'down')" title="아래로"><i class="fa-solid fa-chevron-down"></i></button>
      </div>
    ` : '';

    item.innerHTML = `
      ${orderControls}
      <div class="admin-article-info" style="flex-grow: 1;">
        <span class="admin-article-title">${art.title} ${art.videoUrl ? '<span style="color: var(--accent-color); font-size: 0.85rem;"><i class="fa-solid fa-circle-play"></i> Video</span>' : ''}</span>
        <span class="admin-article-meta">
          フォルダ: <strong>${catName}</strong> (${parentLabel}) | 著者: ${art.author} | 登録日: ${art.createdAt}
        </span>
      </div>
      <div class="admin-article-actions">
        <button class="btn-mini-edit" onclick="loadArticleToEdit('${art.id}')">編集</button>
        <button class="btn-mini-delete" onclick="handleDeleteArticle('${art.id}')">削除</button>
      </div>
    `;
    container.appendChild(item);
  });

  // 3. Render Smart Pagination Controls
  if (totalPages > 1 && paginationContainer) {
    renderPaginationButtons(paginationContainer, state.adminPagination.currentPage, totalPages, (p) => changeAdminPage(p));
  }
}

async function loadArticleToEdit(artId) {
  let art = state.articles.find(a => a.id === artId);
  if (!art) return;

  // Open admin dashboard view first
  showAdminDashboard();
  switchAdminTab('write');
  document.getElementById('write-section-title').innerHTML = '<i class="fa-solid fa-edit"></i> 記事・資料の修正編集 (글 수정/편집)';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  state.editArticleId = artId;
  
  const catObj = state.categories.find(c => c.id === art.categoryId);
  
  // Trace back to root parent menu for initial selector match
  let parentMenu = '';
  if (catObj) {
    const rootMenus = ['sermon', 'catechism', 'theology', 'discipleship', 'pastor'];
    let tempCat = catObj;
    while (tempCat && !rootMenus.includes(tempCat.parentId)) {
      tempCat = state.categories.find(c => c.id === tempCat.parentId);
    }
    if (tempCat) {
      parentMenu = tempCat.parentId;
    }
  }

  document.getElementById('edit-article-id').value = artId;
  document.getElementById('art-parent-menu').value = parentMenu;
  
  updateWriteSubcategoryDropdown();
  document.getElementById('art-category-id').value = art.categoryId;
  
      const isServantMenu = art.categoryId === 'cat_1787469050463';
  const isPurposeMenu = art.categoryId === 'cat_1787469045280';
  
  if (isServantMenu) {
    document.getElementById('art-title').value = '';
    document.getElementById('art-author').value = art.title; // Name goes to Name input
    document.getElementById('art-scripture').value = art.author; // Position goes to Position input
    document.getElementById('art-video-url').value = '';
  } else if (isPurposeMenu) {
    document.getElementById('art-title').value = '';
    document.getElementById('art-author').value = '';
    document.getElementById('art-scripture').value = '';
    document.getElementById('art-video-url').value = '';
  } else {
    document.getElementById('art-title').value = art.title;
    document.getElementById('art-author').value = art.author;
    document.getElementById('art-scripture').value = art.scripture || '';
    document.getElementById('art-video-url').value = art.videoUrl || '';
  }
  if (document.getElementById('art-photo-url')) {
    document.getElementById('art-photo-url').value = art.photoUrl || '';
  }
  const content = art.content || '';
  document.getElementById('art-content').value = content;
  const wysiwygBox = document.getElementById('art-editor-wysiwyg');
  if (wysiwygBox) wysiwygBox.innerHTML = content;
  if (isFullHtmlDoc(content)) {
    selectTistoryMode('html');
  } else {
    selectTistoryMode('basic');
  }
  document.getElementById('art-date').value = art.createdAt || new Date().toISOString().split('T')[0];
  handleCategoryChange();
}

async function handleDeleteArticle(artId) {
  const art = state.articles.find(a => a.id === artId);
  if (!art) return;

  if (confirm(`「${art.title}」을(를) 삭제하시겠습니까?\n(削除しますか？)`)) {
    // 1. Local delete
    state.articles = state.articles.filter(a => a.id !== artId);
    saveArticles();
    renderRecentArticles();
    renderAdminArticleList();
    if (state.currentCategory) {
      renderArticlesList();
    }
    const detailContainer = document.getElementById('article-detail-view');
    if (detailContainer && detailContainer.style.display !== 'none') {
      const listContainer = document.getElementById('articles-list-view');
      if (listContainer) {
        detailContainer.style.display = 'none';
        listContainer.style.display = 'block';
      }
    }

    // 2. Sync compiled data.json to GitHub
    syncDataJsonToGitHub();
  }
}

/* 6D. Featured Content Editor (Today's Blocks) */
function loadFeaturedToInputs() {
  document.getElementById('feat-word-scripture').value = state.featured.todaysWord.scripture;
  document.getElementById('feat-word-meditation').value = state.featured.todaysWord.meditation;

  document.getElementById('feat-sermon-title').value = state.featured.todaysSermon.title;
  document.getElementById('feat-sermon-scripture').value = state.featured.todaysSermon.scripture;
  document.getElementById('feat-sermon-preacher').value = state.featured.todaysSermon.preacher;
  document.getElementById('feat-sermon-content').value = state.featured.todaysSermon.content;

  document.getElementById('feat-theo-title').value = state.featured.todaysTheology.title;
  document.getElementById('feat-theo-summary').value = state.featured.todaysTheology.summary;
  document.getElementById('feat-theo-content').value = state.featured.todaysTheology.content;
}

function handleSaveFeatured(event) {
  event.preventDefault();

  state.featured = {
    todaysWord: {
      scripture: document.getElementById('feat-word-scripture').value.trim(),
      meditation: document.getElementById('feat-word-meditation').value.trim()
    },
    todaysSermon: {
      title: document.getElementById('feat-sermon-title').value.trim(),
      scripture: document.getElementById('feat-sermon-scripture').value.trim(),
      preacher: document.getElementById('feat-sermon-preacher').value.trim(),
      content: document.getElementById('feat-sermon-content').value.trim()
    },
    todaysTheology: {
      title: document.getElementById('feat-theo-title').value.trim(),
      summary: document.getElementById('feat-theo-summary').value.trim(),
      content: document.getElementById('feat-theo-content').value.trim()
    }
  };

  saveFeatured();
  renderFeaturedBlocks();
  alert("「今日の神学の恵み」領域データが保存・更新されました。");
  
  switchAdminTab('articles');
}

// Render Admin Statistics & Views Ranking
function renderAdminStats() {
  const totalArticlesEl = document.getElementById('stats-total-articles');
  const totalViewsEl = document.getElementById('stats-total-views');
  const avgViewsEl = document.getElementById('stats-avg-views');
  const rankingBody = document.getElementById('stats-ranking-body');

  if (!totalArticlesEl || !totalViewsEl || !avgViewsEl || !rankingBody) return;

  const totalArticles = state.articles.length;
  let totalViews = 0;

  state.articles.forEach(art => {
    totalViews += (art.views || 0);
  });

  const avgViews = totalArticles > 0 ? (totalViews / totalArticles).toFixed(1) : 0;

  totalArticlesEl.textContent = totalArticles;
  totalViewsEl.textContent = totalViews;
  avgViewsEl.textContent = avgViews;

  // Sort articles by views descending
  const sortedArticles = [...state.articles].sort((a, b) => (b.views || 0) - (a.views || 0));

  rankingBody.innerHTML = '';
  if (sortedArticles.length === 0) {
    rankingBody.innerHTML = `
      <tr>
        <td colspan="5" style="padding: 20px; text-align: center; color: var(--text-light);">등록된 기사가 없습니다.</td>
      </tr>
    `;
    return;
  }

  sortedArticles.forEach(art => {
    const catObj = state.categories.find(c => c.id === art.categoryId);
    const catName = catObj ? catObj.nameJp : '미지정';
    const views = art.views || 0;

    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border-color)';
    tr.innerHTML = `
      <td style="padding: 12px 15px; font-weight: 500; max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${art.title}</td>
      <td style="padding: 12px 15px; color: var(--text-light);">${catName}</td>
      <td style="padding: 12px 15px;">${art.author}</td>
      <td style="padding: 12px 15px; color: var(--text-light); font-size: 0.85rem;">${art.createdAt || ''}</td>
      <td style="padding: 12px 15px; text-align: right; font-weight: 700; color: var(--accent-color);">${views}</td>
    `;
    rankingBody.appendChild(tr);
  });
}



// ==========================================
// 7. Pagination Helper Functions
// ==========================================
function changePage(pageNum) {
  state.pagination.currentPage = pageNum;
  renderArticlesList();
  
  // Scroll smoothly back to workspace start after page transition
  const workspaceSec = document.getElementById('workspace-sec');
  if (workspaceSec) {
    workspaceSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function changePageSize(size) {
  state.pagination.pageSize = parseInt(size, 10);
  state.pagination.currentPage = 1;
  renderArticlesList();
}

function renderRecentArticles() {
  const container = document.getElementById('recent-articles-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (!state.articles || state.articles.length === 0) {
    container.innerHTML = '<li style="color: var(--text-light); font-size: 0.85rem; padding: 10px;">更新された記事がありません。</li>';
    return;
  }
  
  // Sort articles by date descending with ID fallback (robust against null/invalid dates)
  const recentArticles = [...state.articles]
    .filter(a => a && a.title && a.id)
    .sort((a, b) => {
      const dateA = a.createdAt || '';
      const dateB = b.createdAt || '';
      const dateComp = dateB.localeCompare(dateA);
      if (dateComp !== 0) return dateComp;
      return (b.id || '').localeCompare(a.id || '');
    })
    .slice(0, 10);
    
  if (recentArticles.length === 0) {
    container.innerHTML = '<li style="color: var(--text-light); font-size: 0.85rem; padding: 10px;">更新された記事がありません。</li>';
    return;
  }
  
  recentArticles.forEach(art => {
    const li = document.createElement('li');
    li.style.cursor = 'pointer';
    li.style.padding = '8px 10px';
    li.style.borderBottom = '1px solid var(--border-color)';
    li.style.transition = 'var(--transition-smooth)';
    
    // Category label
    const cat = state.categories ? state.categories.find(c => c.id === art.categoryId) : null;
    const catName = cat ? cat.nameJp : '';
    
    li.innerHTML = `
      <div style="font-weight: 600; color: var(--primary-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.85rem;" title="${art.title}">
        ${art.title}
      </div>
      <div style="font-size: 0.75rem; color: var(--text-light); display: flex; justify-content: space-between; margin-top: 4px;">
        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 65%;">${art.author || ''}${catName ? ' · ' + catName : ''}</span>
        <span>${art.createdAt || ''}</span>
      </div>
    `;
    
    li.onclick = () => showArticleDirectly(art.id);
    
    li.onmouseenter = () => {
      li.style.backgroundColor = 'var(--bg-warm)';
    };
    li.onmouseleave = () => {
      li.style.backgroundColor = 'transparent';
    };
    
    container.appendChild(li);
  });
}

function showArticleDirectly(artId) {
  const art = state.articles.find(a => a.id === artId);
  if (!art) return;
  
  // Find category
  const catObj = state.categories.find(c => c.id === art.categoryId);
  if (!catObj) return;
  
  // Find root parent menu
  const rootMenus = state.mainMenus.map(m => m.id);
  let parentMenu = catObj.parentId;
  let tempCat = catObj;
  while (tempCat && !rootMenus.includes(tempCat.parentId)) {
    tempCat = state.categories.find(c => c.id === tempCat.parentId);
  }
  if (tempCat) {
    parentMenu = tempCat.parentId;
  }
  
  // Select menu & subcat & render
  selectMainMenu(parentMenu);
  selectSubcategory(art.categoryId, false);
  viewArticleDetail(artId);
}

// ==========================================
// 9. BGM Floating Player Logic
// ==========================================
let bgmIframe = null;
let isBgmPlaying = false;

function toggleBgm() {
  const btn = document.getElementById('bgm-toggle-btn');
  if (!btn) return;
  
  const icon = btn.querySelector ? btn.querySelector('i') : null;
  const text = btn.querySelector ? btn.querySelector('.bgm-text') : null;
  
  if (!isBgmPlaying) {
    // Play (embed YouTube iframe hidden)
    if (!bgmIframe) {
      bgmIframe = document.createElement('iframe');
      bgmIframe.id = 'youtube-bgm';
      bgmIframe.style.position = 'fixed';
      bgmIframe.style.bottom = '0';
      bgmIframe.style.right = '0';
      bgmIframe.style.width = '1px';
      bgmIframe.style.height = '1px';
      bgmIframe.style.opacity = '0.01';
      bgmIframe.style.pointerEvents = 'none';
      bgmIframe.style.border = 'none';
      bgmIframe.src = 'https://www.youtube.com/embed/dXpELJ34QVA?autoplay=1&loop=1&playlist=dXpELJ34QVA';
      bgmIframe.allow = 'autoplay';
      document.body.appendChild(bgmIframe);
    } else {
      bgmIframe.src = 'https://www.youtube.com/embed/dXpELJ34QVA?autoplay=1&loop=1&playlist=dXpELJ34QVA';
    }
    isBgmPlaying = true;
    btn.classList.add('playing');
    if (icon) icon.className = 'fa-solid fa-volume-high';
    if (text) text.textContent = 'BGM ON';
  } else {
    // Pause/Stop (blank src)
    if (bgmIframe) {
      bgmIframe.src = '';
    }
    isBgmPlaying = false;
    btn.classList.remove('playing');
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    if (text) text.textContent = 'BGM OFF';
  }
}

function toggleSidebarBox(boxId) {
  const box = document.getElementById(boxId);
  if (box) {
    box.classList.toggle('active');
  }
}

// Start application immediately
initApp();

function startBgmAuto() {
  // Add fallback event listeners to play on first user interaction (browser autoplay policy compliant)
  const triggerAutoPlay = () => {
    if (!isBgmPlaying) {
      console.log("User interaction detected. Starting BGM.");
      toggleBgm();
    }
    document.removeEventListener('click', triggerAutoPlay);
    document.removeEventListener('pointerdown', triggerAutoPlay);
    document.removeEventListener('touchstart', triggerAutoPlay);
  };

  document.addEventListener('click', triggerAutoPlay);
  document.addEventListener('pointerdown', triggerAutoPlay);
  document.addEventListener('touchstart', triggerAutoPlay);
}

async function handlePhotoUpload(input) {
  const file = input.files[0];
  if (!file) return;

  let token = localStorage.getItem('wscal_github_token') || '';
  const tokenInput = document.getElementById('admin-github-token');
  if (tokenInput && tokenInput.value.trim()) {
    token = tokenInput.value.trim();
    localStorage.setItem('wscal_github_token', token);
  }

  if (!token) {
    alert("사진을 직접 업로드하려면 먼저 사진 파일 선택 버튼 아래에 GitHub Token을 입력해 주세요.");
    input.value = '';
    return;
  }

  const statusDiv = document.getElementById('art-photo-upload-status');
  if (statusDiv) {
    statusDiv.style.display = 'block';
    statusDiv.style.color = 'var(--text-light)';
    statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 사진을 GitHub 서버에 업로드 중입니다... 잠시만 기다려 주세요.';
  }

  const reader = new FileReader();
  reader.onload = async function(e) {
    try {
      const base64Data = e.target.result.split(',')[1];
      const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
      const fileName = 'photo_' + Date.now() + '.' + ext;
      
      const owner = "kpuritan";
      const repo = "Jpuritan";
      const branch = "main";
      
      const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/images/${fileName}`;
      const resPut = await fetch(putUrl, {
        method: "PUT",
        headers: {
          "Authorization": `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "media: upload profile photo via admin panel",
          content: base64Data,
          branch: branch
        })
      });

      if (!resPut.ok) {
        const errData = await resPut.json();
        throw new Error(errData.message || "GitHub 이미지 업로드 실패");
      }

      // Populate input with relative path
      const targetUrlInput = document.getElementById('art-photo-url');
      if (targetUrlInput) {
        targetUrlInput.value = 'images/' + fileName;
      }

      if (statusDiv) {
        statusDiv.style.color = '#2ecc71';
        statusDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i> 업로드 성공! 사진 경로가 자동으로 입력되었습니다.';
      }
    } catch (err) {
      console.error(err);
      alert("사진 업로드 실패: " + err.message);
      if (statusDiv) {
        statusDiv.style.display = 'none';
      }
    } finally {
      input.value = ''; // Reset file input
    }
  };

  reader.onerror = function() {
    alert("파일을 읽는 도중 오류가 발생했습니다.");
    if (statusDiv) statusDiv.style.display = 'none';
    input.value = '';
  };

  reader.readAsDataURL(file);
}





// ==========================================
// GitHub Connection UI Helpers
// ==========================================
function updateGitHubSyncBadge() {
  const token = (localStorage.getItem('wscal_github_token') || '').trim();
  const sidebarInput = document.getElementById('admin-sidebar-github-token');
  const writeTabInput = document.getElementById('admin-github-token');
  const badge = document.getElementById('github-sync-badge');
  const msg = document.getElementById('github-sync-msg');

  if (sidebarInput && !sidebarInput.value && token) {
    sidebarInput.value = token;
  }
  if (writeTabInput && !writeTabInput.value && token) {
    writeTabInput.value = token;
  }

  if (badge) {
    if (token) {
      badge.textContent = '연동됨 (토큰 있음)';
      badge.style.background = '#dcfce7';
      badge.style.color = '#15803d';
    } else {
      badge.textContent = '미연결 (토큰 없음)';
      badge.style.background = '#fee2e2';
      badge.style.color = '#dc2626';
    }
  }

  if (msg) {
    if (token) {
      msg.textContent = '글 작성/수정 시 GitHub (data.json)으로 자동 백업됩니다.';
      msg.style.color = '#15803d';
    } else {
      msg.textContent = '토큰을 입력 후 저장하시면 GitHub와 실시간 자동 동기화됩니다.';
      msg.style.color = 'var(--text-light)';
    }
  }
}

function saveGitHubTokenFromSidebar() {
  const sidebarInput = document.getElementById('admin-sidebar-github-token');
  const val = sidebarInput ? sidebarInput.value.trim() : '';
  if (!val) {
    localStorage.removeItem('wscal_github_token');
    alert("GitHub 토큰이 삭제되었습니다.");
  } else {
    localStorage.setItem('wscal_github_token', val);
    alert("GitHub 토큰이 브라우저에 안전하게 저장되었습니다.");
  }
  updateGitHubSyncBadge();
}

async function testGitHubConnection() {
  const token = (localStorage.getItem('wscal_github_token') || '').trim();
  const msg = document.getElementById('github-sync-msg');
  const badge = document.getElementById('github-sync-badge');

  if (!token) {
    alert("입력된 GitHub 토큰이 없습니다. 먼저 토큰을 입력하고 저장해 주세요.");
    return;
  }

  if (msg) {
    msg.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 연결 상태 확인 중...';
    msg.style.color = 'var(--text-light)';
  }

  try {
    const res = await fetch('https://api.github.com/repos/kpuritan/Jpuritan', {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (badge) {
        badge.textContent = '연결 정상 (확인됨)';
        badge.style.background = '#dcfce7';
        badge.style.color = '#15803d';
      }
      if (msg) {
        msg.textContent = `연결 성공! 저장소: ${data.full_name} (${data.default_branch} 브랜치)`;
        msg.style.color = '#15803d';
      }
      alert(`GitHub 연동 성공!\n저장소: ${data.full_name}\n권한이 정상 확인되었습니다.`);
    } else {
      const err = await res.json().catch(() => ({}));
      if (badge) {
        badge.textContent = '연결 오류';
        badge.style.background = '#fee2e2';
        badge.style.color = '#dc2626';
      }
      if (msg) {
        msg.textContent = `연결 실패: ${err.message || res.statusText}`;
        msg.style.color = '#dc2626';
      }
      alert(`GitHub 연동 실패 (상태 코드: ${res.status}):\n${err.message || '토큰 권한(repo) 또는 유효성을 확인해 주세요.'}`);
    }
  } catch (e) {
    console.error("GitHub test error:", e);
    if (msg) {
      msg.textContent = '네트워크 오류가 발생했습니다.';
      msg.style.color = '#dc2626';
    }
    alert("GitHub 서버와 통신 중 네트워크 오류가 발생했습니다.");
  }
}

// Sync compiled data.json to GitHub repository asynchronously (Hybrid Static CMS sync)
async function syncDataJsonToGitHub() {
  const token = localStorage.getItem('wscal_github_token') || '';
  if (!token) {
    console.log("No GitHub token found, skipping data.json sync to GitHub.");
    return;
  }

  try {
    console.log("Syncing data.json to GitHub repository in background...");
    const owner = "kpuritan";
    const repo = "Jpuritan";
    const branch = "main";
    
    // 1. Get current SHA of data.json
    const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/data.json`;
    const resGet = await fetch(getUrl, {
      headers: {
        "Authorization": `token ${token}`
      }
    });
    
    let sha = "";
    if (resGet.ok) {
      const fileInfo = await resGet.json();
      sha = fileInfo.sha;
    } else {
      console.warn("Could not retrieve data.json SHA from GitHub, attempting create.");
    }
    
    // 2. Prepare the new data.json content
    const dataObj = {
      mainMenus: state.mainMenus,
      categories: state.categories,
      featured: state.featured,
      articles: state.articles
    };
    
    const jsonStr = JSON.stringify(dataObj, null, 2);
    // Base64 encode using btoa with UTF-8 support
    const base64Content = btoa(unescape(encodeURIComponent(jsonStr)));
    
    // 3. Commit back to GitHub
    const body = {
      message: "data: sync data.json via admin panel",
      content: base64Content,
      branch: branch
    };
    if (sha) {
      body.sha = sha;
    }
    
    const resPut = await fetch(getUrl, {
      method: "PUT",
      headers: {
        "Authorization": `token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    
    if (resPut.ok) {
      console.log("Successfully synced data.json to GitHub repository.");
    } else {
      const errData = await resPut.json();
      console.warn("GitHub data.json sync failed:", errData.message);
    }
  } catch (err) {
    console.error("Error syncing data.json to GitHub:", err);
  }
}


// Move article position up or down within its category (folder)
async function moveArticle(artId, direction) {
  const art = state.articles.find(a => a.id === artId);
  if (!art) return;
  
  // Find all articles in the same category
  const catArticles = state.articles.filter(a => a.categoryId === art.categoryId);
  
  // Sort them by their current sorting order
  catArticles.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : 999999;
    const posB = b.position !== undefined ? b.position : 999999;
    if (posA !== posB) return posA - posB;
    const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
    if (dateCompare !== 0) return dateCompare;
    return b.id.localeCompare(a.id);
  });
  
  // Find index of the article in this sorted sub-list
  const idx = catArticles.findIndex(a => a.id === artId);
  if (idx === -1) return;
  
  let swapIdx = -1;
  if (direction === 'up' && idx > 0) {
    swapIdx = idx - 1;
  } else if (direction === 'down' && idx < catArticles.length - 1) {
    swapIdx = idx + 1;
  }
  
  if (swapIdx !== -1) {
    // Assign sequential positions to all articles in this category to ensure they have integer positions
    catArticles.forEach((a, i) => {
      a.position = i;
    });
    
    // Swap positions of idx and swapIdx
    const tempPos = catArticles[idx].position;
    catArticles[idx].position = catArticles[swapIdx].position;
    catArticles[swapIdx].position = tempPos;
    
    // Save locally
    saveArticles();
    
    // Sync compiled data.json to GitHub
    syncDataJsonToGitHub();
    
    // Refresh lists
    renderRecentArticles();
    if (state.currentCategory) {
      renderArticlesList();
    }
    renderAdminArticleList();
  }
}

// ==========================================
// DRAG AND DROP ARTICLE REORDERING
// ==========================================
let draggedArticleId = null;

function attachArticleDragEvents(card, artId) {
  card.setAttribute('draggable', 'true');
  card.dataset.artId = artId;

  card.addEventListener('dragstart', (e) => {
    draggedArticleId = artId;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', artId);
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  });

  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!card.classList.contains('drag-over') && draggedArticleId !== artId) {
      card.classList.add('drag-over');
    }
  });

  card.addEventListener('dragleave', () => {
    card.classList.remove('drag-over');
  });

  card.addEventListener('drop', async (e) => {
    e.preventDefault();
    card.classList.remove('drag-over');
    if (!draggedArticleId || draggedArticleId === artId) return;

    await reorderArticleByDrag(draggedArticleId, artId);
    draggedArticleId = null;
  });
}

async function reorderArticleByDrag(sourceId, targetId) {
  const sourceArt = state.articles.find(a => a.id === sourceId);
  const targetArt = state.articles.find(a => a.id === targetId);
  if (!sourceArt || !targetArt) return;

  const categoryId = targetArt.categoryId;
  // If moving across categories by drag, update categoryId
  if (sourceArt.categoryId !== categoryId) {
    sourceArt.categoryId = categoryId;
  }

  const catArticles = state.articles.filter(a => a.categoryId === categoryId);

  catArticles.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : 999999;
    const posB = b.position !== undefined ? b.position : 999999;
    if (posA !== posB) return posA - posB;
    const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
    if (dateCompare !== 0) return dateCompare;
    return b.id.localeCompare(a.id);
  });

  const fromIdx = catArticles.findIndex(a => a.id === sourceId);
  const toIdx = catArticles.findIndex(a => a.id === targetId);

  if (fromIdx !== -1 && toIdx !== -1) {
    const [moved] = catArticles.splice(fromIdx, 1);
    catArticles.splice(toIdx, 0, moved);

    // Re-assign positions
    catArticles.forEach((a, idx) => {
      a.position = idx;
    });

    saveArticles();
    syncDataJsonToGitHub();
    renderRecentArticles();
    if (state.currentCategory) {
      renderArticlesList();
    }
  }
}

// ==========================================
// QUICK FOLDER / CATEGORY MOVE MODAL
// ==========================================
function openMoveFolderModal(artId) {
  const art = state.articles.find(a => a.id === artId);
  if (!art) return;

  const existing = document.getElementById('quick-folder-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'quick-folder-modal-overlay';
  overlay.className = 'quick-folder-modal-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.remove();
  };

  let optionsHtml = '';
  state.mainMenus.forEach(menu => {
    const menuCats = state.categories.filter(c => c.parentId === menu.id);
    if (menuCats.length > 0) {
      optionsHtml += `<optgroup label="[${menu.nameJp} / ${menu.nameKr}]">`;
      menuCats.forEach(cat => {
        const subCats = state.categories.filter(c => c.parentId === cat.id);
        const isSelected = cat.id === art.categoryId ? 'selected' : '';
        optionsHtml += `<option value="${cat.id}" ${isSelected}>&nbsp;&nbsp;📁 ${cat.nameJp} (${cat.nameKr})</option>`;
        subCats.forEach(sub => {
          const isSubSelected = sub.id === art.categoryId ? 'selected' : '';
          optionsHtml += `<option value="${sub.id}" ${isSubSelected}>&nbsp;&nbsp;&nbsp;&nbsp;↳ 📄 ${sub.nameJp} (${sub.nameKr})</option>`;
        });
      });
      optionsHtml += `</optgroup>`;
    }
  });

  overlay.innerHTML = `
    <div class="quick-folder-modal" onclick="event.stopPropagation()">
      <h3><i class="fa-solid fa-folder-tree"></i> フォルダ・カテゴリーの移動</h3>
      <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 12px;">
        移動対象: <strong style="color: var(--primary-color);">${art.title}</strong>
      </p>
      <label style="font-size: 0.85rem; font-weight: bold; display: block; margin-bottom: 6px; color: var(--text-dark);">
        移動先フォルダを選択してください:
      </label>
      <select id="quick-move-target-folder">
        ${optionsHtml}
      </select>
      <div class="quick-folder-modal-actions">
        <button class="btn-secondary" onclick="document.getElementById('quick-folder-modal-overlay').remove()">キャンセル</button>
        <button class="btn-primary" onclick="confirmMoveArticleFolder('${art.id}')"><i class="fa-solid fa-check"></i> このフォルダへ移動</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

async function confirmMoveArticleFolder(artId) {
  const select = document.getElementById('quick-move-target-folder');
  if (!select) return;
  const newCatId = select.value;
  const art = state.articles.find(a => a.id === artId);
  if (!art || !newCatId) return;

  const oldCatId = art.categoryId;
  if (oldCatId === newCatId) {
    alert("同じフォルダが選択されています。(동일한 폴더가 선택되었습니다.)");
    return;
  }

  art.categoryId = newCatId;
  saveArticles();
  syncDataJsonToGitHub();

  const overlay = document.getElementById('quick-folder-modal-overlay');
  if (overlay) overlay.remove();

  alert("フォルダ移動が完了しました。(폴더 이동이 완료되었습니다.)");
  renderRecentArticles();
  if (state.currentCategory) {
    renderArticlesList();
  }
}

// Render Top Floating Admin Bar for Quick Management
function renderHomepageQuickAdminBar() {
  const bar = document.getElementById('homepage-quick-admin-bar');
  if (bar) bar.remove();
}

function switchToWriteTab() {
  state.editArticleId = null;
  showAdminDashboard();
  switchAdminTab('write');
  resetWriteForm();
}



