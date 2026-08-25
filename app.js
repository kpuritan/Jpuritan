// Reformed & Puritan Japanese Hub - Core JavaScript Logic

// ==========================================
// 1. Initial Seed Data Configuration (v6 with Dynamic Main Menus & Video Support)
// ==========================================
const DEFAULT_MAIN_MENUS = [{"id":"sermon","nameJp":"聖書講解","nameKr":"성경강해","icon":"fa-book-open"},{"id":"catechism","nameJp":"教理教育と復興","nameKr":"교리교육과 부흥","icon":"fa-scroll"},{"id":"theology","nameJp":"改革派神学","nameKr":"개혁신학","icon":"fa-graduation-cap"},{"id":"discipleship","nameJp":"伝道・弟子道","nameKr":"전도·제자도","icon":"fa-users-line"},{"id":"pastor","nameJp":"牧会者のための<br>10分神学","nameKr":"목회자를 위한<br>10분 신학","icon":"fa-user-tie","isVideo":true}];

const DEFAULT_CATEGORIES = [{"id":"cat_sermon_1","parentId":"sermon","nameJp":"ローマの信徒への手紙 講解説教","nameKr":"로마서 강해설교"},{"id":"cat_sermon_1_sub1","parentId":"cat_sermon_1","nameJp":"ローマ書 1〜8章 講義","nameKr":"로마서 1~8장 강의"},{"id":"cat_sermon_1_sub1_detail","parentId":"cat_sermon_1_sub1","nameJp":"第1章：福音の力","nameKr":"제1장: 복음의 능력"},{"id":"cat_sermon_2","parentId":"sermon","nameJp":"マタイによる福音書 講解","nameKr":"마태복음 강해"},{"id":"cat_cat_1","parentId":"catechism","nameJp":"ウェストミンスター小教理問答","nameKr":"웨스트민스터 소교리문답"},{"id":"cat_cat_1_sub1","parentId":"cat_cat_1","nameJp":"第1問〜第38問 (序論・神と創造)","nameKr":"제1문~제38문 (서론·하나님과 창조)"},{"id":"cat_cat_2","parentId":"catechism","nameJp":"ウェストミンスター大教理問答","nameKr":"웨스트민스터 대교리문답"},{"id":"cat_cat_3","parentId":"catechism","nameJp":"ウェストミンスター信仰告白","nameKr":"웨스트민스터 신앙고백"},{"id":"cat_cat_4","parentId":"catechism","nameJp":"ハイデルベルク信仰問答","nameKr":"ハイデルベルク信仰問答"},{"id":"cat_theo_1","parentId":"theology","nameJp":"改革派神学入門","nameKr":"개혁신학 입문"},{"id":"cat_theo_2","parentId":"theology","nameJp":"契約神学と歴史","nameKr":"언약신학과 역사"},{"id":"cat_disc_1","parentId":"discipleship","nameJp":"福音宣教と個人の伝道","nameKr":"복음 선교와 개인 전도"},{"id":"cat_disc_2","parentId":"discipleship","nameJp":"弟子道と敬虔な生活","nameKr":"제자도와 경건한 생활"},{"id":"cat_pastor_1","parentId":"pastor","nameJp":"10分で学ぶキリスト論","nameKr":"10분으로 배우는 기독론"},{"id":"cat_pastor_2","parentId":"pastor","nameJp":"10分で学ぶ救済論","nameKr":"10분으로 배우는 구원론"}];

const DEFAULT_ARTICLES = [{"id":"art_seed_1","categoryId":"cat_pastor_1","title":"10分神学：キリストの二性一人格について","author":"牧会神学研究室","scripture":"ヨハネによる福音書 1章 14節","content":"キリスト論の核心は、主イエス・キリストが「真の神であり、同時に真の人である」という神秘的な結合にあります。これを神学用語で「位格的結合（Hypostatic Union）」と呼びます。\n\nキリストは、神性において父なる神と本質において同一（同질）이며, 인성에 있어서 우리 인간과 죄를 제외하고 본질이 동일합니다. 이 신성과 인성의 양성은 혼합되지 않고, 변화되지 않으며, 분할되지 않고, 분리되지 않은 채 한 인격 안에서 결합되어 있습니다.\n\n이것이 왜 목회자에게 중요합니까? 그리스도께서 완전한 하나님이 아니시라면 하나님의 무한한 진노를 풀 구원자가 되실 수 없고, 완전한 인간이 아니시라면 인간의 죄를 대표하여 대속하실 수 없기 때문입니다. 이 짧은 10분의 배움은 우리의 설교에 확고한 진리의 기초를 제공합니다.","videoUrl":"https://www.youtube.com/watch?v=0eJb9Tirh4o","createdAt":"2026-08-17"},{"id":"art_seed_2","categoryId":"cat_cat_1_sub1","title":"ウェストミンスター小教理問答 第1問","author":"ウェストミンスター神学者会議","scripture":"コリントの信徒への手紙一 10章 31節","content":"【問1】人の主な目的は、何ですか。\n\n【答】人の主な目的は、神의 영광을 나타내고 영원토록 그분을 즐거워하는 것입니다.\n\n【解説】\n小教理問答の第一問は、キリスト者の人生全体の究極의 목적을 선언하고 있습니다. 인간은 단지 자신의 행복이나 유익만을 위해 사는 것이 아니라, 창조주이신 하나님의 아름다우심과 거룩하심을 세상에 선포하는 데 목적이 있습니다.\n\n이와 동시에, 믿음이란 의무적인 구속이 아닙니다. '영원히 하나님을 즐거워하는 것'이야말로 우리의 진짜 목적입니다. 하나님을 사랑하고, 그분과의 친밀한 사귐 속에 거할 때 인간은 진정으로 창조된 본연의 참된 만족을 얻을 수 있습니다.","createdAt":"2026-08-17"},{"id":"art_seed_3","categoryId":"cat_sermon_1_sub1_detail","title":"ローマ書8章28節注解：万事が益となる信仰","author":"チャールズ・ホッジ","scripture":"ローマの信徒への手紙 8章 28節","content":"「神を愛する者たち、つまり、御計画に従って召された者たちには、万事が益となるように共に働くということを、わたしたちは知っています。」\n\n많은 신자들이 가장 사랑하는 이 성경 구절은 참으로 깊은 위로를 제공합니다. 사도 바울이 말하는 '만사(모든 것)'에는 기쁨과 건강뿐만 아니라 고난, 박해, 심지어 우리의 약함과 실패조차도 하나님의 오묘한 섭리 아래서 결국 우리의 성화와 영화(유익)를 위해 사용된다는 의미가 담겨 있습니다.\n\n단, 이 약속에는 분명한 대상이 있습니다. '하나님을 사랑하는 자들', 즉 하나님의 영원한 계획 가운데 유효하게 부르심을 받은 자들입니다. 세상의 우연한 운명이 아니라 그리스도 안에 있는 하나님의 변함없는 사랑만이 모든 일이 합력하여 선을 이룰 수 있게 보증하는 기초가 됩니다.","createdAt":"2026-08-17"}];

const DEFAULT_FEATURED = {"todaysWord":{"scripture":"ヨハネの黙示録 2章 10節","meditation":"「死に至るまで忠実であれ。そうすれば、命の冠を授けよう。」\n인생의 가장 큰 고난이나 죽음의 공포조차도, 그리스도 안에 있는 승리의 약속을 빼앗을 수 없습니다. 어떠한 시련 속에서도 주 예수의 진실하심에 의지하고 확고한 충성을 유지하는 은혜를 오늘 기도합시다."},"todaysSermon":{"title":"福音の再発見と教会の改革","scripture":"ローマの信徒への手紙 1章 16-17節","preacher":"清水 義人 牧師","content":"教会の歴史において、真の霊的覚醒と改革は常に「福音의 재발견」으로부터 시작되었습니다.\n\n사도 바울이 로마 교회에 힘차게 선포했던 것처럼, 복음은 '믿는 모든 자에게 구원을 주시는 하나님의 능력'입니다. 이것은 초신자를 위한 입문용 메시지일 뿐만 아니라, 모든 그리스도인이 평생에 걸쳐 깊이 파고들어야 할 하나님의 의의 계시입니다.\n\n현대 교회가 세속화의 물결에 직면할 때, 해결책은 프로그램이나 인간적인 방법의 도입이 아닙니다. 성경으로 돌아가 그리스도 안에서 '오직 믿음으로 말미암는 의'의 압도적인 은혜와 위엄을 재발견하는 것입니다. 복음의 순수한 선포만이 영혼을 살리고 교회를 내면으로부터 성결로 인도합니다."},"todaysTheology":{"title":"ウェストミンスター信仰告白의 역사적 배경","summary":"17세기 영국 청교도들이 이룩한 위대한 신학적 유산인 신앙고백서의 형성사 요약.","content":"ウェストミンスター信仰告白（1647年）は、英国議会の要請によりロンドンのウェストミンスター寺院に召集された、神学者や議員ら約150名による精緻な聖書研究と神学的論争의 결실입니다.\n\n당시 영국 교회의 대격동 가운데 그들이 원했던 것은 '교회의 순결'과 '성경적 질서'의 확립이었습니다. 수년에 걸친 철저한 회의와 기도를 통해 완성된 이 고백서는 역사적 개혁주의 신학의 가장 성숙한 요약으로 평가받습니다. 오늘날 교리적 무관심 시대에, 이 신앙고백은 성경 전체를 체계적으로 이해하기 위한 확실한 길잡이를 제공합니다."}};

// ==========================================
// 2. Application State Management
// ==========================================
let sessionHeartbeatInterval = null;

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
  isDbOffline: false, // Skip DB queries if Firestore is unreachable/slow
  isDbLoading: false  // Blocks UI when syncing Firestore data
};

// Timeout Wrapper for Promises (prevent Firestore hangs)
function withTimeout(promise, ms) {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("Timeout after " + ms + "ms"));
    }, ms);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timeoutId);
  });
}

// Show/Hide Firebase Data Synchronization Overlay
function showDbLoadingOverlay() {
  state.isDbLoading = true;
  const overlay = document.getElementById('admin-db-loading-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
  }
}

function hideDbLoadingOverlay() {
  state.isDbLoading = false;
  const overlay = document.getElementById('admin-db-loading-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Synchronously load data from localStorage (or defaults) and update state instantly
function loadLocalStorageOnly() {
  if (!localStorage.getItem('wscal_mainmenus_v6')) {
    localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(DEFAULT_MAIN_MENUS));
  }
  if (!localStorage.getItem('wscal_categories_v6')) {
    localStorage.setItem('wscal_categories_v6', JSON.stringify(DEFAULT_CATEGORIES));
  }
  if (!localStorage.getItem('wscal_featured_v6')) {
    localStorage.setItem('wscal_featured_v6', JSON.stringify(DEFAULT_FEATURED));
  }
  if (!localStorage.getItem('wscal_articles_v6')) {
    localStorage.setItem('wscal_articles_v6', JSON.stringify(DEFAULT_ARTICLES));
  }

  try {
    state.mainMenus = JSON.parse(localStorage.getItem('wscal_mainmenus_v6')) || [];
    state.categories = JSON.parse(localStorage.getItem('wscal_categories_v6')) || [];
    state.featured = JSON.parse(localStorage.getItem('wscal_featured_v6')) || {};
    state.articles = JSON.parse(localStorage.getItem('wscal_articles_v6')) || [];
  } catch (e) {
    state.mainMenus = [];
    state.categories = [];
    state.featured = {};
    state.articles = [];
  }
}

// Initialize App
async function initApp() {
  if (sessionStorage.getItem('wscal_admin_logged') === 'true') {
    state.isAdmin = true;
  }
  console.log("Initializing App...");

  // 1. Render instantly using LocalStorage (Zero delay UI load)
  loadLocalStorageOnly();
  initializeCollapsedStates();
  renderMainMenuCards();
  renderFeaturedBlocks();
  loadArticlesFallback();

  // 2. Fetch data.json in the background to update LocalStorage (Non-blocking)
  let fileData = null;
  try {
    const res = await fetch('./data.json?t=' + Date.now());
    if (res.ok) {
      fileData = await res.json();
      console.log("Successfully fetched data.json in background.");

            if (fileData.mainMenus) localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(fileData.mainMenus));
      if (fileData.categories) localStorage.setItem('wscal_categories_v6', JSON.stringify(fileData.categories));
      if (fileData.featured) localStorage.setItem('wscal_featured_v6', JSON.stringify(fileData.featured));
            let hasCachedArts = false;
      const cachedArts = localStorage.getItem('wscal_articles_v6');
      if (cachedArts) {
        try {
          const parsed = JSON.parse(cachedArts);
          if (Array.isArray(parsed) && parsed.length > 0) {
            hasCachedArts = true;
          }
        } catch (e) {}
      }
      if (fileData.articles && (!hasCachedArts || !state.isAdmin)) {
        localStorage.setItem('wscal_articles_v6', JSON.stringify(fileData.articles));
      }

      // If DB is offline or not loaded yet, immediately apply the updated data.json
      if (typeof db === 'undefined' || !state.isAdmin) {
        loadLocalStorageOnly();
        initializeCollapsedStates();
        renderMainMenuCards();
        renderFeaturedBlocks();
        loadArticlesFallback();
      }
    }
  } catch (err) {
    console.warn("Background fetch of data.json failed:", err);
  }

  // 3. Sync with Firestore in the background
  if (typeof db !== 'undefined' && state.isAdmin) {
    showDbLoadingOverlay(); // Block UI while syncing in admin view
    // Run Firestore migration in the background
    withTimeout(checkAndMigrateAllDataToFirestore(), 10000).catch(err => {
      console.warn("Background migration check failed/timed out:", err);
    });

    try {
      console.log("Fetching live configurations from Firestore in background...");
      const [menusSnap, catsSnap, featuredSnap, articlesSnap] = await withTimeout(Promise.all([
        db.collection('mainMenus').get(),
        db.collection('categories').get(),
        db.collection('featured').doc('main').get(),
        db.collection('articles').get() // One-time fetch of all articles in background to prevent rollback
      ]), 10000);

      // A. Main Menus
      const liveMenus = [];
      menusSnap.forEach(doc => liveMenus.push(doc.data()));
      if (liveMenus.length > 0) {
        const defaultMenuIds = ['menu_1787468975888', 'sermon', 'catechism', 'theology', 'discipleship', 'pastor'];
        liveMenus.sort((a, b) => {
          const posA = a.position !== undefined ? a.position : defaultMenuIds.indexOf(a.id);
          const posB = b.position !== undefined ? b.position : defaultMenuIds.indexOf(b.id);
          return posA - posB;
        });
        state.mainMenus = liveMenus;
        localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(liveMenus));
      }

      // B. Categories
      const liveCats = [];
      catsSnap.forEach(doc => liveCats.push(doc.data()));
      if (liveCats.length > 0) {
        liveCats.sort((a, b) => (a.position || 0) - (b.position || 0));
        state.categories = liveCats;
        localStorage.setItem('wscal_categories_v6', JSON.stringify(liveCats));
      }

      // C. Featured
      if (featuredSnap.exists) {
        const liveFeat = featuredSnap.data();
        state.featured = liveFeat;
        localStorage.setItem('wscal_featured_v6', JSON.stringify(liveFeat));
      }

      // D. Articles (One-time Sync to prevent cache rollback on reload)
      const liveArticles = [];
      articlesSnap.forEach(doc => liveArticles.push({ id: doc.id, ...doc.data() }));
      if (liveArticles.length > 0) {
        liveArticles.sort((a, b) => {
          const posA = a.position !== undefined ? a.position : 999999;
          const posB = b.position !== undefined ? b.position : 999999;
          if (posA !== posB) return posA - posB;
          const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
          if (dateCompare !== 0) return dateCompare;
          return b.id.localeCompare(a.id);
        });
        state.articles = liveArticles;
        saveArticles();
      }

      console.log("Firestore background configurations synced. Re-rendering...");
      initializeCollapsedStates();
      renderMainMenuCards();
      renderFeaturedBlocks();

      // Start live articles listener since DB is healthy
      listenArticles();
    } catch (err) {
      console.warn("Failed to retrieve live data from Firestore, keeping local/data.json fallback: ", err);
      state.isDbOffline = true;
      hideDbLoadingOverlay(); // Unblock UI on error
      // Fallback: apply the data.json we fetched earlier
      loadLocalStorageOnly();
      initializeCollapsedStates();
      renderMainMenuCards();
      renderFeaturedBlocks();
      loadArticlesFallback();
    }
  } else {
    state.isDbOffline = true;
  }

  // Check login state
  if (sessionStorage.getItem('wscal_admin_logged') === 'true') {
    state.isAdmin = true;
    showAdminDashboard();
    startSessionHeartbeat();
  }

  console.log("App initialization background tasks registered.");
  startBgmAuto();
}

// Connect and sync with Firestore for admin tasks
async function connectAdminFirestore() {
  if (typeof db === 'undefined') return;
  state.isDbOffline = false;
  showDbLoadingOverlay(); // Block UI while connecting/loading in admin view

  console.log("Admin logged in. Connecting to Firestore for live data...");
  
  // Run Firestore migration/check in the background
  withTimeout(checkAndMigrateAllDataToFirestore(), 10000).catch(err => {
    console.warn("Migration check failed/timed out:", err);
  });

  try {
    const [menusSnap, catsSnap, featuredSnap, articlesSnap] = await withTimeout(Promise.all([
      db.collection('mainMenus').get(),
      db.collection('categories').get(),
      db.collection('featured').doc('main').get(),
      db.collection('articles').get() // One-time fetch of all articles on startup to prevent rollback
    ]), 10000);

    // A. Main Menus
    const liveMenus = [];
    menusSnap.forEach(doc => liveMenus.push(doc.data()));
    if (liveMenus.length > 0) {
      const defaultMenuIds = ['menu_1787468975888', 'sermon', 'catechism', 'theology', 'discipleship', 'pastor'];
      liveMenus.sort((a, b) => {
        const posA = a.position !== undefined ? a.position : defaultMenuIds.indexOf(a.id);
        const posB = b.position !== undefined ? b.position : defaultMenuIds.indexOf(b.id);
        return posA - posB;
      });
      state.mainMenus = liveMenus;
      localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(liveMenus));
    }

    // B. Categories
    const liveCats = [];
    catsSnap.forEach(doc => liveCats.push(doc.data()));
    if (liveCats.length > 0) {
      liveCats.sort((a, b) => (a.position || 0) - (b.position || 0));
      state.categories = liveCats;
      localStorage.setItem('wscal_categories_v6', JSON.stringify(liveCats));
    }

    // C. Featured
    if (featuredSnap.exists) {
      const liveFeat = featuredSnap.data();
      state.featured = liveFeat;
      localStorage.setItem('wscal_featured_v6', JSON.stringify(liveFeat));
    }

    // D. Articles (One-time Sync to prevent cache rollback on reload)
    const liveArticles = [];
    articlesSnap.forEach(doc => liveArticles.push({ id: doc.id, ...doc.data() }));
    if (liveArticles.length > 0) {
      liveArticles.sort((a, b) => {
        const posA = a.position !== undefined ? a.position : 999999;
        const posB = b.position !== undefined ? b.position : 999999;
        if (posA !== posB) return posA - posB;
        const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
        if (dateCompare !== 0) return dateCompare;
        return b.id.localeCompare(a.id);
      });
      state.articles = liveArticles;
      saveArticles();
    }

    console.log("Admin: Firestore sync complete. Re-rendering...");
    initializeCollapsedStates();
    renderMainMenuCards();
    renderFeaturedBlocks();

    // Start live articles listener
    listenArticles();
  } catch (err) {
    console.warn("Admin: Failed to retrieve live data from Firestore:", err);
    state.isDbOffline = true;
    hideDbLoadingOverlay(); // Unblock UI on error
  }
}

// Check and migrate data.json to Firestore if Firestore is empty
async function checkAndMigrateAllDataToFirestore() {
  if (typeof db === 'undefined') return;
  try {
    console.log("Checking Firestore data status for incremental migration...");
    const res = await fetch('./data.json?t=' + Date.now());
    if (!res.ok) {
      console.warn("Failed to fetch data.json for auto-migration");
      return;
    }
    let fileData;
    try {
      fileData = await res.json();
    } catch (parseErr) {
      console.error("data.json parsing failed:", parseErr);
      alert("관리자 파일(data.json)의 형식이 잘못되어 데이터를 동기화할 수 없습니다. 쉼표나 따옴표 등 JSON 문법 오류를 확인해 주세요.");
      return;
    }
    
    // A. mainMenus
    const menusSnap = await db.collection('mainMenus').get();
    let migratedMenus = false;
    let menuIdx = 0;
    if (fileData.mainMenus && fileData.mainMenus.length > 0) {
      for (const item of fileData.mainMenus) {
        const docSnap = menusSnap.docs.find(d => d.id === item.id);
        if (!docSnap || docSnap.data().position === undefined) {
          await db.collection('mainMenus').doc(item.id).set({ ...item, position: menuIdx });
          migratedMenus = true;
        }
        menuIdx++;
      }
    }
    
    // B. categories
    const catsSnap = await db.collection('categories').get();
    let migratedCats = false;
    let catIdx = 0;
    if (fileData.categories && fileData.categories.length > 0) {
      for (const item of fileData.categories) {
        const docSnap = catsSnap.docs.find(d => d.id === item.id);
        if (!docSnap || docSnap.data().position === undefined) {
          await db.collection('categories').doc(item.id).set({ ...item, position: catIdx });
          migratedCats = true;
        }
        catIdx++;
      }
    }
    
    // C. featured
    const featSnap = await db.collection('featured').doc('main').get();
    let migratedFeatured = false;
    if (!featSnap.exists && fileData.featured) {
      console.log("Migrating featured...");
      await db.collection('featured').doc('main').set(fileData.featured);
      migratedFeatured = true;
    }
    
    // D. articles
    const dbArticlesSnap = await db.collection('articles').get();
    const dbArticleIds = dbArticlesSnap.docs.map(doc => doc.id);
    let migratedArticlesCount = 0;
    
    if (fileData.articles && fileData.articles.length > 0) {
      for (const item of fileData.articles) {
        if (!dbArticleIds.includes(item.id)) {
          const artId = item.id;
          const artData = { ...item };
          delete artData.id;
          await db.collection('articles').doc(artId).set(artData);
          migratedArticlesCount++;
        }
      }
    }
    
    if (migratedArticlesCount > 0) {
      console.log(`Successfully migrated ${migratedArticlesCount} missing articles to Firestore!`);
    }
    
    if (migratedMenus || migratedCats || migratedFeatured || migratedArticlesCount > 0) {
      alert("데이터 복구 및 순서 동기화가 완료되었습니다. 페이지를 새로고침합니다.");
      window.location.reload();
    }
  } catch (err) {
    console.error("Migration/Recovery to Firestore failed:", err);
  }
}

// Load articles dynamically (Switched to ultra-fast local cached loading to eliminate startup lag)
function listenArticles() {
  console.log("listenArticles: Loading articles from local cache to bypass heavy query.");
  loadArticlesFallback();
}

// Fallback logic when Firebase/Firestore is offline or unavailable
function loadArticlesFallback() {
  hideDbLoadingOverlay(); // Ensure overlay is dismissed when falling back
  if (!localStorage.getItem('wscal_articles_v6')) {
    localStorage.setItem('wscal_articles_v6', JSON.stringify(DEFAULT_ARTICLES));
  }
  state.articles = JSON.parse(localStorage.getItem('wscal_articles_v6'));
  
  // Sort articles locally
  state.articles.sort((a, b) => {
    const dateA = a.createdAt || '';
    const dateB = b.createdAt || '';
    const dateCompare = dateB.localeCompare(dateA);
    if (dateCompare !== 0) return dateCompare;
    return b.id.localeCompare(a.id);
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
    console.warn("Failed to fetch data.json for local fallback, using DEFAULT hardcoded arrays:", err);
  }

  if (fetchedData) {
        if (fetchedData.mainMenus) localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(fetchedData.mainMenus));
    if (fetchedData.categories) localStorage.setItem('wscal_categories_v6', JSON.stringify(fetchedData.categories));
    if (fetchedData.featured) localStorage.setItem('wscal_featured_v6', JSON.stringify(fetchedData.featured));
        let hasCachedArts = false;
    const cachedArts = localStorage.getItem('wscal_articles_v6');
    if (cachedArts) {
      try {
        const parsed = JSON.parse(cachedArts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          hasCachedArts = true;
        }
      } catch (e) {}
    }
    if (fetchedData.articles && !hasCachedArts) {
      localStorage.setItem('wscal_articles_v6', JSON.stringify(fetchedData.articles));
    }
  } else {
    // If even data.json fails, use hardcoded defaults
    if (!localStorage.getItem('wscal_mainmenus_v6')) {
      localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(DEFAULT_MAIN_MENUS));
    }
    if (!localStorage.getItem('wscal_categories_v6')) {
      localStorage.setItem('wscal_categories_v6', JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem('wscal_featured_v6')) {
      localStorage.setItem('wscal_featured_v6', JSON.stringify(DEFAULT_FEATURED));
    }
    if (!localStorage.getItem('wscal_articles_v6')) {
      localStorage.setItem('wscal_articles_v6', JSON.stringify(DEFAULT_ARTICLES));
    }
  }

  state.mainMenus = JSON.parse(localStorage.getItem('wscal_mainmenus_v6'));
  state.categories = JSON.parse(localStorage.getItem('wscal_categories_v6'));
  state.featured = JSON.parse(localStorage.getItem('wscal_featured_v6'));
}

// Save back to LocalStorage
// Save back to LocalStorage & Firestore Realtime DB
async function saveMainMenus() {
  localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(state.mainMenus));
  if (typeof db !== 'undefined') {
    try {
      let idx = 0;
      for (const item of state.mainMenus) {
        await db.collection('mainMenus').doc(item.id).set({ ...item, position: idx++ });
      }
    } catch (e) {
      console.warn("Failed to sync mainMenus with Firestore:", e);
    }
  }
  syncDataJsonToGitHub();
}
async function saveCategories() {
  localStorage.setItem('wscal_categories_v6', JSON.stringify(state.categories));
  if (typeof db !== 'undefined') {
    try {
      let idx = 0;
      for (const item of state.categories) {
        await db.collection('categories').doc(item.id).set({ ...item, position: idx++ });
      }
    } catch (e) {
      console.warn("Failed to sync categories with Firestore:", e);
    }
  }
  syncDataJsonToGitHub();
}
function saveArticles() {
  localStorage.setItem('wscal_articles_v6', JSON.stringify(state.articles));
}
async function saveFeatured() {
  localStorage.setItem('wscal_featured_v6', JSON.stringify(state.featured));
  if (typeof db !== 'undefined') {
    try {
      await db.collection('featured').doc('main').set(state.featured);
    } catch (e) {
      console.warn("Failed to sync featured with Firestore:", e);
    }
  }
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
  if (state.isAdmin) return; // Ignore if in admin view
  
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
  document.getElementById('featured-sec').style.display = 'block';

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
  // Sort categories by position to respect user's ordering
  const children = state.categories.filter(cat => cat.parentId === parentId);
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
  const localMenus = JSON.parse(localStorage.getItem('wscal_mainmenus_v6')) || [];
  serverData.mainMenus.forEach(sm => {
    if (!localMenus.some(lm => lm.id === sm.id)) {
      localMenus.push(sm);
    }
  });
  localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(localMenus));

  // 2. Merge Categories
  const localCats = JSON.parse(localStorage.getItem('wscal_categories_v6')) || [];
  serverData.categories.forEach(sc => {
    if (!localCats.some(lc => lc.id === sc.id)) {
      localCats.push(sc);
    }
  });
  localStorage.setItem('wscal_categories_v6', JSON.stringify(localCats));

  // 3. Merge Articles
  const localArts = JSON.parse(localStorage.getItem('wscal_articles_v6')) || [];
  serverData.articles.forEach(sa => {
    if (!localArts.some(la => la.id === sa.id)) {
      localArts.push(sa);
    }
  });
  localStorage.setItem('wscal_articles_v6', JSON.stringify(localArts));

  // 4. Merge Featured
  if (!localStorage.getItem('wscal_featured_v6')) {
    localStorage.setItem('wscal_featured_v6', JSON.stringify(serverData.featured));
  }
}

// Force reset local data to server state
async function resetLocalDataToServer() {
  if (confirm("경고: 로컬 캐시를 초기화하면 아직 반영(인터넷 배포)하지 않은 수정 내역이 모두 사라지고 서버의 최신 데이터로 변경됩니다. 계속하시겠습니까?")) {
    try {
      const res = await fetch('./data.json?t=' + Date.now());
      if (res.ok) {
        const serverData = await res.json();
        localStorage.setItem('wscal_mainmenus_v6', JSON.stringify(serverData.mainMenus));
        localStorage.setItem('wscal_categories_v6', JSON.stringify(serverData.categories));
        localStorage.setItem('wscal_articles_v6', JSON.stringify(serverData.articles));
        localStorage.setItem('wscal_featured_v6', JSON.stringify(serverData.featured));
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

// Select main menu cards (4 big buttons)
function selectMainMenu(menuKey) {
  state.currentMenu = menuKey;
  state.currentCategory = null;
  state.currentArticle = null;
  state.pagination.currentPage = 1;

  initializeCollapsedStates();

  // Toggle visual active state
  document.querySelectorAll('.menu-card').forEach(card => {
    if (card.dataset.menu === menuKey) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Filter root categories belonging directly to selected menu (first level)
  const menuCats = state.categories.filter(cat => cat.parentId === menuKey);
  const submenuContainer = document.getElementById('submenu-sec');
  const submenuGrid = document.getElementById('submenu-items-container');
  const categoryTitle = document.getElementById('submenu-category-title');

  // Translate header
  const menuObj = state.mainMenus.find(m => m.id === menuKey);
  categoryTitle.textContent = menuObj ? `${menuObj.nameJp} のフォルダ` : 'フォルダ一覧';

  // Render Submenu badges (dual-language support)
  submenuGrid.innerHTML = '';
  if (menuCats.length === 0) {
    submenuGrid.innerHTML = '<span style="color: var(--text-light); font-size: 0.9rem;">現在、このメニュー内に細部フォルダはありません。管理者アカウントから追加してください。</span>';
  } else {
    menuCats.forEach(cat => {
      const badge = document.createElement('div');
      badge.className = 'submenu-item';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.padding = '12px 24px';
      badge.innerHTML = `
        <div style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700;">${cat.nameJp}</div>
      `;
      badge.onclick = () => selectSubcategory(cat.id);
      submenuGrid.appendChild(badge);
    });
  }

  submenuContainer.classList.add('active');
  
  // Scroll to submenus nicely
  submenuContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Automatically select the first subcategory if exists to update workspace immediately without scrolling down too far
  const allSubCats = buildFlatTree(menuKey, 0);
  if (allSubCats.length > 0) {
    selectSubcategory(allSubCats[0].id, false);
  } else {
    state.currentCategory = null;
    state.currentArticle = null;
    renderWorkspaceSidebar();
    renderArticlesList();
    const workspaceSec = document.getElementById('workspace-sec');
    workspaceSec.classList.add('active');
    document.getElementById('view-article-list').style.display = 'block';
    document.getElementById('view-article-detail').style.display = 'none';
  }
}

// Select a subcategory folder
function selectSubcategory(categoryId, shouldScroll = false) {
  state.currentCategory = categoryId;
  state.currentArticle = null;
  state.pagination.currentPage = 1;

  // Expand the folder itself if it has children
  const hasChildren = state.categories.some(c => c.parentId === categoryId);
  if (hasChildren) {
    state.collapsedCategories[categoryId] = false;
  }

  // Ensure all ancestor paths are expanded
  const catObj = state.categories.find(c => c.id === categoryId);
  if (catObj) {
    let pId = catObj.parentId;
    while (pId) {
      state.collapsedCategories[pId] = false;
      const parent = state.categories.find(c => c.id === pId);
      pId = parent ? parent.parentId : null;
    }
  }

  // Render Sidebar in the Workspace
  renderWorkspaceSidebar();

  // Find articles belonging to this specific subcategory
  const filteredArticles = state.articles.filter(art => art.categoryId === categoryId);

  // Hide Hero, featured & show Workspace
  document.getElementById('hero-sec').style.display = 'none';
  document.getElementById('featured-sec').style.display = 'none';
  
  // Update submenu items active state
  document.querySelectorAll('.submenu-item').forEach(item => {
    // Check match by nameJp or nameKr inside the HTML
    const catObj = state.categories.find(c => c.parentId === state.currentMenu && (item.innerHTML.includes(c.nameJp) || item.innerHTML.includes(c.nameKr)));
    if (catObj && catObj.id === categoryId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Show Workspace Container
  const workspaceSec = document.getElementById('workspace-sec');
  workspaceSec.classList.add('active');

  // IF THIS CATEGORY IS "기관의 목적" (cat_1787469045280) AND HAS AT LEAST 1 ARTICLE, REDIRECT DIRECTLY TO DETAIL!
  if (categoryId === 'cat_1787469045280' && filteredArticles.length > 0) {
    renderArticlesList(); // Render in background just in case
    viewArticleDetail(filteredArticles[0].id);
  } else {
    renderArticlesList();
    document.getElementById('view-article-list').style.display = 'block';
    document.getElementById('view-article-detail').style.display = 'none';
  }

  if (shouldScroll) {
    workspaceSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render Workspace Sidebar (Category list as a Tree with dual language)
function renderWorkspaceSidebar() {
  const sidebarList = document.getElementById('sidebar-categories-list');
  const sidebarHeader = document.getElementById('sidebar-category-header');
  
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
    li.style.padding = `10px 12px 10px ${12 + cat.depth * 18}px`;
    li.style.cursor = 'pointer';
    
    // Toggle arrow icon if the category has subcategories
    let toggleIcon = '';
    if (hasChildren) {
      const arrowIconClass = isCollapsed ? 'fa-chevron-right' : 'fa-chevron-down';
      toggleIcon = `<i class="fa-solid ${arrowIconClass} sidebar-toggle-icon" style="margin-right: 8px; font-size: 0.8rem; color: var(--text-light); width: 12px;"></i>`;
    } else {
      toggleIcon = `<span style="display: inline-block; width: 12px; margin-right: 8px;"></span>`;
    }

    const iconClass = cat.id === state.currentCategory ? 'fa-folder-open' : 'fa-folder';
    
    li.innerHTML = `
      <div style="display: flex; align-items: center; font-weight: 500; flex-grow: 1;">
        ${toggleIcon}
        <i class="fa-regular ${iconClass}" style="margin-right: 8px;"></i>
        <span>${cat.nameJp}</span>
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
function renderArticlesList() {
  const container = document.getElementById('articles-list-container');
  const listTitle = document.getElementById('list-title');
  
  const currentCatObj = state.categories.find(c => c.id === state.currentCategory);
  listTitle.textContent = currentCatObj ? `${currentCatObj.nameJp} の資料一覧` : '資料一覧';

    const descendantIds = getAllDescendantCategoryIds(state.currentCategory);
  const filteredArticles = state.articles.filter(art => descendantIds.includes(art.categoryId));
  
  // Sort by custom position ascending, then by date descending
  filteredArticles.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : 999999;
    const posB = b.position !== undefined ? b.position : 999999;
    if (posA !== posB) return posA - posB;
    const dateCompare = (b.createdAt || '').localeCompare(a.createdAt || '');
    if (dateCompare !== 0) return dateCompare;
    return b.id.localeCompare(a.id);
  });
  container.innerHTML = '';

  if (filteredArticles.length === 0) {
    container.className = 'article-list'; // Reset layout class
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

  // Validate current page range
  if (state.pagination.currentPage > totalPages) {
    state.pagination.currentPage = totalPages;
  }
  if (state.pagination.currentPage < 1) {
    state.pagination.currentPage = 1;
  }

  const startIndex = (state.pagination.currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedArticles = filteredArticles.slice(startIndex, endIndex);

  // Check if current menu is "pastor" (목회자를 위한 10분 신학) for visual grid gallery setting
  const isPastorMenu = state.currentMenu === 'pastor';

  // 2. Render Page Size Selector & Total count
  const headerWrapper = document.createElement('div');
  headerWrapper.className = 'article-list-header-controls';
  headerWrapper.style.display = 'flex';
  headerWrapper.style.justifyContent = 'space-between';
  headerWrapper.style.alignItems = 'center';
  headerWrapper.style.marginBottom = '1.5rem';
  headerWrapper.style.width = '100%';
  headerWrapper.style.flexWrap = 'wrap';
  headerWrapper.style.gap = '10px';

  headerWrapper.innerHTML = `
    <div class="articles-total-count" style="font-size: 0.9rem; color: var(--text-light);">
      全 <strong>${totalCount}</strong> 件の資料 (ページ ${state.pagination.currentPage} / ${totalPages})
    </div>
    <div class="page-size-selector-wrapper" style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 0.85rem; color: var(--text-light);">表示件数:</span>
      <select class="form-input page-size-select" style="padding: 4px 8px; font-size: 0.85rem; width: auto; margin: 0; height: auto;" onchange="changePageSize(this.value)">
        <option value="5" ${pageSize === 5 ? 'selected' : ''}>5件</option>
        <option value="10" ${pageSize === 10 ? 'selected' : ''}>10件</option>
        <option value="15" ${pageSize === 15 ? 'selected' : ''}>15件</option>
        <option value="20" ${pageSize === 20 ? 'selected' : ''}>20件</option>
      </select>
    </div>
  `;
  container.appendChild(headerWrapper);

  // 3. Render articles list/grid inside items wrapper
  const isServantMenu = state.currentCategory === 'cat_1787469050463';
  const itemsWrapper = document.createElement('div');
  itemsWrapper.className = isPastorMenu ? 'video-gallery-grid' : (isServantMenu ? 'profile-list' : 'article-list');
  container.appendChild(itemsWrapper);

  if (isPastorMenu) {
    pagedArticles.forEach(art => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.onclick = () => viewArticleDetail(art.id);
      
      const youtubeId = getYouTubeId(art.videoUrl);
      const thumbUrl = youtubeId 
        ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` 
        : 'hero_bg.jpg';

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
        </div>
      `;
      itemsWrapper.appendChild(card);
    });
  } else if (isServantMenu) {
    pagedArticles.forEach(art => {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.onclick = () => viewArticleDetail(art.id);
      card.style.cursor = 'pointer';
      
      const photoUrl = art.photoUrl || 'hero_bg.jpg';

      card.innerHTML = `
        <div class="profile-photo-wrapper">
          <img class="profile-photo" src="${photoUrl}" alt="${art.title}" loading="lazy">
        </div>
        <div class="profile-info">
          <h3 class="profile-name">${art.title}</h3>
          <div class="profile-title">${art.author}</div>
          <div class="profile-history">${art.content}</div>
        </div>
      `;
      itemsWrapper.appendChild(card);
    });
  } else {
    pagedArticles.forEach(art => {
      const card = document.createElement('div');
      card.className = 'article-item-card';
      card.onclick = () => viewArticleDetail(art.id);
      
      const hasVideoBadge = art.videoUrl ? '<span style="color: var(--accent-color); margin-left: 8px;"><i class="fa-solid fa-circle-play"></i> 動画</span>' : '';

      card.innerHTML = `
        <h3 class="article-item-title">${art.title} ${hasVideoBadge}</h3>
        <div class="article-item-meta">
          <span><i class="fa-regular fa-user"></i> 著者: ${art.author}</span>
          ${art.scripture ? `<span><i class="fa-solid fa-bible"></i> 関連聖句: ${art.scripture}</span>` : ''}
          <span><i class="fa-regular fa-calendar"></i> 日付: ${art.createdAt}</span>
        </div>
      `;
      itemsWrapper.appendChild(card);
    });
  }

  // 4. Render Pagination Controls
  if (totalPages > 1) {
    const paginationControls = document.createElement('div');
    paginationControls.className = 'pagination-controls';
    
    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn-pagination';
    prevBtn.disabled = state.pagination.currentPage === 1;
    prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevBtn.onclick = () => changePage(state.pagination.currentPage - 1);
    paginationControls.appendChild(prevBtn);
    
    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.className = `btn-pagination ${state.pagination.currentPage === i ? 'active' : ''}`;
      pageBtn.textContent = i;
      pageBtn.onclick = () => changePage(i);
      paginationControls.appendChild(pageBtn);
    }
    
    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-pagination';
    nextBtn.disabled = state.pagination.currentPage === totalPages;
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextBtn.onclick = () => changePage(state.pagination.currentPage + 1);
    paginationControls.appendChild(nextBtn);
    
    container.appendChild(paginationControls);
  }
}

// View Article Detail (Supports Video Player Embedding)
function viewArticleDetail(articleId) {
  const article = state.articles.find(a => a.id === articleId);
  if (!article) return;

  state.currentArticle = article;

  // Increment views
  article.views = (article.views || 0) + 1;
  saveArticles();

  if (typeof db !== 'undefined') {
    try {
      db.collection('article_views').doc(articleId).get().then(doc => {
        let liveViews = article.views;
        if (doc.exists) {
          const remoteViews = (doc.data().views || 0) + 1;
          doc.ref.update({ views: remoteViews });
          liveViews = remoteViews;
        } else {
          doc.ref.set({ views: article.views });
          liveViews = article.views;
        }
        document.getElementById('detail-views').textContent = liveViews;
        article.views = liveViews;
        saveArticles();
      }).catch(err => {
        console.warn("Error updating views in Firestore: ", err);
      });
    } catch (err) {
      console.warn("Failed to increment views in Firestore", err);
    }
  }

  document.getElementById('view-article-list').style.display = 'none';
  const detailView = document.getElementById('view-article-detail');
  detailView.style.display = 'block';

  document.getElementById('detail-title').textContent = article.title;
  document.getElementById('detail-author').textContent = article.author;
  document.getElementById('detail-date').textContent = article.createdAt;
  document.getElementById('detail-views').textContent = article.views;

  const scriptureContainer = document.getElementById('detail-scripture-container');
  if (article.scripture) {
    scriptureContainer.style.display = 'block';
    document.getElementById('detail-scripture').textContent = article.scripture;
  } else {
    scriptureContainer.style.display = 'none';
  }

  // Clear previous content & embed video player if youtubeUrl is present
  const contentArea = document.getElementById('detail-content');
  contentArea.innerHTML = '';

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
          <div style="white-space: pre-wrap; line-height: 1.7; color: var(--text-dark);">${article.content}</div>
        </div>
      </div>
    `;
    contentArea.appendChild(profileBody);
  } else {
    const textBody = document.createElement('div');
    textBody.style.whiteSpace = 'pre-wrap';
    textBody.textContent = article.content;
    contentArea.appendChild(textBody);
  }

  document.getElementById('workspace-sec').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Back to list from detail
function goBackToArticles() {
  state.currentArticle = null;
  document.getElementById('view-article-detail').style.display = 'none';
  document.getElementById('view-article-list').style.display = 'block';
}

// ==========================================
// 4. Featured ("Today's Blocks") Rendering & Actions
// ==========================================
function renderFeaturedBlocks() {
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
  document.getElementById('login-modal').classList.add('active');
  document.getElementById('login-username').focus();
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.remove('active');
  document.getElementById('login-error').style.display = 'none';
}

async function handleLogin(event) {
  event.preventDefault();
  const user = document.getElementById('login-username').value;
  const pass = document.getElementById('login-password').value;

  if (user === 'admin' && pass === '1234') {
    // Check Session Lock in Firestore ONLY if DB is online
    if (typeof db !== 'undefined' && !state.isDbOffline) {
      try {
        const lockDoc = await withTimeout(db.collection('system').doc('sessionLock').get(), 1000);
        if (lockDoc.exists) {
          const lockData = lockDoc.data();
          if (lockData && lockData.isLocked) {
            const elapsed = Date.now() - (lockData.lastActive || 0);
            if (elapsed < 30 * 60 * 1000) { // 30 mins active window check
              // 다중 로그인 허용을 위해 중복 로그인 차단 비활성화
              // alert("현재 다른 관리자가 접속하여 작업 중입니다. 중복 로그인을 방지하기 위해 접속이 제한됩니다. 잠시 후 다시 시도해 주세요.");
              // return;
            }
          }
        }
        
        // Acquire Lock
        await withTimeout(db.collection('system').doc('sessionLock').set({
          isLocked: true,
          lastActive: Date.now()
        }), 1000);
      } catch (err) {
        console.warn("Failed to query session lock, allowing login as fallback:", err);
      }
    }

    state.isAdmin = true;
    sessionStorage.setItem('wscal_admin_logged', 'true');
    startSessionHeartbeat();
    closeLoginModal();
    showAdminDashboard();
    connectAdminFirestore();
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
}

async function handleLogout() {
  state.isAdmin = false;
  sessionStorage.removeItem('wscal_admin_logged');
  stopSessionHeartbeat();

  // Release Lock in Firestore
  if (typeof db !== 'undefined') {
    try {
      await db.collection('system').doc('sessionLock').set({
        isLocked: false,
        lastActive: 0
      });
      console.log("Session lock released successfully.");
    } catch (err) {
      console.warn("Failed to release session lock on logout:", err);
    }
  }
  
  // Hide Admin UI & Show User UI
  document.getElementById('admin-dashboard-sec').classList.remove('active');
  document.getElementById('btn-admin-nav').style.display = 'block';
  
  // Reload homepage layout
  document.getElementById('hero-sec').style.display = 'block';
  document.getElementById('main-menu-sec').style.display = 'grid';
  document.getElementById('featured-sec').style.display = 'block';
  
  // Reset menus and restore display modes
  document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('submenu-sec').style.display = '';
  document.getElementById('submenu-sec').classList.remove('active');
  document.getElementById('workspace-sec').style.display = '';
  document.getElementById('workspace-sec').classList.remove('active');
}

function showAdminDashboard() {
  // Hide all user layouts
  document.getElementById('hero-sec').style.display = 'none';
  document.getElementById('main-menu-sec').style.display = 'none';
  document.getElementById('submenu-sec').style.display = 'none';
  document.getElementById('workspace-sec').style.display = 'none';
  document.getElementById('btn-admin-nav').style.display = 'none';

  // Show Admin Dashboard Container
  document.getElementById('admin-dashboard-sec').classList.add('active');

  // Load saved GitHub token into photo upload input
  const savedToken = localStorage.getItem('wscal_github_token') || '';
  const tokenInput = document.getElementById('admin-github-token');
  if (tokenInput) {
    tokenInput.value = savedToken;
  }

  // Trigger default Admin Tab loading
  switchAdminTab('folders');
}

function exitAdminView() {
  handleLogout();
}

// ==========================================
// 6. Admin Panel Content Actions
// ==========================================

function switchAdminTab(tabName) {
  state.adminTab = tabName;
  
  // Tab indicators update
  document.querySelectorAll('.admin-menu-item').forEach(item => {
    if (item.id === `admin-menu-${tabName}`) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Hide all sections
  if (document.getElementById('admin-tab-mainmenus')) {
    document.getElementById('admin-tab-mainmenus').style.display = 'none';
  }
  document.getElementById('admin-tab-folders').style.display = 'none';
  document.getElementById('admin-tab-write').style.display = 'none';
  document.getElementById('admin-tab-articles').style.display = 'none';
  document.getElementById('admin-tab-featured').style.display = 'none';
  if (document.getElementById('admin-tab-stats')) {
    document.getElementById('admin-tab-stats').style.display = 'none';
  }

  // Show selected section
  document.getElementById(`admin-tab-${tabName}`).style.display = 'block';

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
  } else if (tabName === 'featured') {
    loadFeaturedToInputs();
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
        <i class="fa-solid ${iconClass}"></i> ${menu.nameJp} <span style="font-size: 0.8rem; color: var(--text-light); font-weight: normal; margin-left: 5px;">(${menu.nameKr || ''})</span> ${isVideoLabel}
      </div>
      <div class="category-node-actions">
        <button class="btn-tree-action move-up" onclick="moveMainMenuUp('${menu.id}')" title="上に移動"><i class="fa-solid fa-arrow-up"></i></button>
        <button class="btn-tree-action move-down" onclick="moveMainMenuDown('${menu.id}')" title="下に移動"><i class="fa-solid fa-arrow-down"></i></button>
        <button class="btn-tree-action edit-name" onclick="renameMainMenu('${menu.id}')" title="名前の変更"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-tree-action delete-node" onclick="handleDeleteMainMenu('${menu.id}')" title="削除"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    `;
    container.appendChild(div);
  });
}

// Add a new Main Menu
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

// Re-order main menus (Up)
function moveMainMenuUp(menuId) {
  const idx = state.mainMenus.findIndex(m => m.id === menuId);
  if (idx > 0) {
    const temp = state.mainMenus[idx];
    state.mainMenus[idx] = state.mainMenus[idx - 1];
    state.mainMenus[idx - 1] = temp;

    saveMainMenus();
    renderMainMenuCards();
    populateAllMenuDropdowns();
    renderAdminMainMenuList();
  }
}

// Re-order main menus (Down)
function moveMainMenuDown(menuId) {
  const idx = state.mainMenus.findIndex(m => m.id === menuId);
  if (idx !== -1 && idx < state.mainMenus.length - 1) {
    const temp = state.mainMenus[idx];
    state.mainMenus[idx] = state.mainMenus[idx + 1];
    state.mainMenus[idx + 1] = temp;

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
          <i class="fa-regular fa-folder-open"></i> ${node.nameJp} <span style="font-size: 0.8rem; color: var(--text-light); font-weight: normal; margin-left: 5px;">(${node.nameKr || ''})</span>
        </div>
        <div class="category-node-actions">
          <button class="btn-tree-action move-up" onclick="moveCategoryUp('${node.id}')" title="上に移動"><i class="fa-solid fa-arrow-up"></i></button>
          <button class="btn-tree-action move-down" onclick="moveCategoryDown('${node.id}')" title="下に移動"><i class="fa-solid fa-arrow-down"></i></button>
          <button class="btn-tree-action edit-name" onclick="renameCategory('${node.id}')" title="名前の変更"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-tree-action add-sub" onclick="prepareAddSubcategory('${node.id}')" title="下部フォルダ追加"><i class="fa-solid fa-plus"></i></button>
          <button class="btn-tree-action delete-node" onclick="handleDeleteCategory('${node.id}')" title="フォルダ削除"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      `;
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

// Tree node actions logic
function moveCategoryUp(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  
  // Siblings sharing the same parent
  const siblings = state.categories.filter(c => c.parentId === cat.parentId);
  const idxInSiblings = siblings.findIndex(c => c.id === catId);
  
  if (idxInSiblings > 0) {
    const prevSibling = siblings[idxInSiblings - 1];
    
    // Swap positions in main categories list
    const idx1 = state.categories.findIndex(c => c.id === catId);
    const idx2 = state.categories.findIndex(c => c.id === prevSibling.id);
    
    const temp = state.categories[idx1];
    state.categories[idx1] = state.categories[idx2];
    state.categories[idx2] = temp;
    
    saveCategories();
    populateParentDropdown();
    renderAdminCategoryList();
  }
}

function moveCategoryDown(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  
  const siblings = state.categories.filter(c => c.parentId === cat.parentId);
  const idxInSiblings = siblings.findIndex(c => c.id === catId);
  
  if (idxInSiblings < siblings.length - 1) {
    const nextSibling = siblings[idxInSiblings + 1];
    
    const idx1 = state.categories.findIndex(c => c.id === catId);
    const idx2 = state.categories.findIndex(c => c.id === nextSibling.id);
    
    const temp = state.categories[idx1];
    state.categories[idx1] = state.categories[idx2];
    state.categories[idx2] = temp;
    
    saveCategories();
    populateParentDropdown();
    renderAdminCategoryList();
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
  
  if (authorLabel) authorLabel.textContent = '著者 / 説教者';
  if (authorInput) authorInput.placeholder = '例: ジョン・オーウェン、清水牧師';
  if (scriptureLabel) scriptureLabel.textContent = '関連聖句（本文章など）';
  if (scriptureInput) scriptureInput.placeholder = '例: ローマの信徒への手紙 8:28 (任意)';
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
  document.getElementById('art-date').value = new Date().toISOString().split('T')[0];
  handleCategoryChange();
}

async function handleSaveArticle(event) {
  event.preventDefault();
  
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

  // 2. Sync with Firestore Realtime DB
  if (typeof db !== 'undefined') {
    try {
      await db.collection('articles').doc(finalId).set(artData);
      console.log("Article synced with Firestore successfully:", finalId);
    } catch (err) {
      console.error("Failed to sync article with Firestore:", err);
      alert("클라우드 DB 저장 실패 (보안 규칙 설정을 완료했는지 확인해 주세요): " + err.message);
    }
  }

  // 3. Sync compiled data.json to GitHub
  syncDataJsonToGitHub();

  alert(articleId ? "記事を修正・保存しました。" : "新規記事を公開しました。");
  resetWriteForm();
  switchAdminTab('articles');
}

function cancelWrite() {
  resetWriteForm();
  switchAdminTab('articles');
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

  // 3. Render Pagination Controls
  if (totalPages > 1 && paginationContainer) {
    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn-pagination';
    prevBtn.disabled = state.adminPagination.currentPage === 1;
    prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevBtn.onclick = () => changeAdminPage(state.adminPagination.currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.className = `btn-pagination ${state.adminPagination.currentPage === i ? 'active' : ''}`;
      pageBtn.textContent = i;
      pageBtn.onclick = () => changeAdminPage(i);
      paginationContainer.appendChild(pageBtn);
    }
    
    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-pagination';
    nextBtn.disabled = state.adminPagination.currentPage === totalPages;
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextBtn.onclick = () => changeAdminPage(state.adminPagination.currentPage + 1);
    paginationContainer.appendChild(nextBtn);
  }
}

async function loadArticleToEdit(artId) {
  let art = state.articles.find(a => a.id === artId);
  if (!art) return;

  // Lazy load the latest content from Firestore just for this article to prevent data mismatch
  if (typeof db !== 'undefined' && !state.isDbOffline) {
    showDbLoadingOverlay();
    try {
      const doc = await withTimeout(db.collection('articles').doc(artId).get(), 5000);
      if (doc.exists) {
        const liveData = doc.data();
        const artIdx = state.articles.findIndex(a => a.id === artId);
        if (artIdx !== -1) {
          state.articles[artIdx] = { id: artId, ...liveData };
          art = state.articles[artIdx];
        }
        console.log(`Successfully lazy loaded article content for editing: ${artId}`);
      }
    } catch (err) {
      console.warn("Failed to lazy load article from Firestore, using local fallback:", err);
    } finally {
      hideDbLoadingOverlay();
    }
  }

  state.editArticleId = artId;
  
  switchAdminTab('write');
  document.getElementById('write-section-title').innerHTML = '<i class="fa-solid fa-edit"></i> 記事・資料の修正編集';
  
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
  document.getElementById('art-content').value = art.content;
  document.getElementById('art-date').value = art.createdAt || new Date().toISOString().split('T')[0];
  handleCategoryChange();
}

async function handleDeleteArticle(artId) {
  const art = state.articles.find(a => a.id === artId);
  if (!art) return;

  if (confirm(`資料「${art.title}」を完全に削除しますか？`)) {
    // 1. Local delete
    state.articles = state.articles.filter(a => a.id !== artId);
    saveArticles();
    renderRecentArticles();
    renderAdminArticleList();

    // 2. Firestore delete
    if (typeof db !== 'undefined') {
      try {
        await db.collection('articles').doc(artId).delete();
        console.log("Article deleted from Firestore successfully:", artId);
      } catch (err) {
        console.error("Failed to delete article from Firestore:", err);
        alert("클라우드 DB 삭제 실패: " + err.message);
      }
    }

    // 3. Sync compiled data.json to GitHub
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

// ==========================================
// 8. Recent Articles & Navigation helper
// ==========================================
function renderRecentArticles() {
  const container = document.getElementById('recent-articles-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Sort articles by date descending
  const recentArticles = [...state.articles]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
    
    li.innerHTML = `
      <div style="font-weight: 500; color: var(--primary-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.85rem;" title="${art.title}">
        ${art.title}
      </div>
      <div style="font-size: 0.75rem; color: var(--text-light); display: flex; justify-content: space-between; margin-top: 4px;">
        <span>${art.author}</span>
        <span>${art.createdAt}</span>
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
  
  const icon = btn.querySelector('i');
  const text = btn.querySelector('.bgm-text');
  
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
      bgmIframe.src = 'https://www.youtube.com/embed/f742p7mQ0Ic?autoplay=1&loop=1&playlist=f742p7mQ0Ic';
      bgmIframe.allow = 'autoplay';
      document.body.appendChild(bgmIframe);
    } else {
      bgmIframe.src = 'https://www.youtube.com/embed/f742p7mQ0Ic?autoplay=1&loop=1&playlist=f742p7mQ0Ic';
    }
    isBgmPlaying = true;
    btn.classList.add('playing');
    icon.className = 'fa-solid fa-volume-high';
    text.textContent = 'BGM ON';
  } else {
    // Pause/Stop (blank src)
    if (bgmIframe) {
      bgmIframe.src = '';
    }
    isBgmPlaying = false;
    btn.classList.remove('playing');
    icon.className = 'fa-solid fa-volume-xmark';
    text.textContent = 'BGM OFF';
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
// 10. Single Session Lock & Heartbeat Helpers
// ==========================================
function startSessionHeartbeat() {
  if (sessionHeartbeatInterval) clearInterval(sessionHeartbeatInterval);
  
  // Update lastActive timestamp every 1 minute
  sessionHeartbeatInterval = setInterval(async () => {
    if (state.isAdmin && typeof db !== 'undefined') {
      try {
        await db.collection('system').doc('sessionLock').update({
          lastActive: Date.now()
        });
        console.log("Session heartbeat updated.");
      } catch (err) {
        console.warn("Failed to update session heartbeat:", err);
      }
    }
  }, 60 * 1000);
}

function stopSessionHeartbeat() {
  if (sessionHeartbeatInterval) {
    clearInterval(sessionHeartbeatInterval);
    sessionHeartbeatInterval = null;
  }
}

// Release lock if browser tab/window is closed
window.addEventListener('beforeunload', () => {
  if (state.isAdmin && typeof db !== 'undefined') {
    db.collection('system').doc('sessionLock').set({
      isLocked: false,
      lastActive: 0
    });
  }
});



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
    
    // Sync with Firestore
    if (typeof db !== 'undefined') {
      try {
        await Promise.all([
          db.collection('articles').doc(catArticles[idx].id).update({ position: catArticles[idx].position }),
          db.collection('articles').doc(catArticles[swapIdx].id).update({ position: catArticles[swapIdx].position })
        ]);
        console.log("Article positions synced with Firestore successfully.");
      } catch (err) {
        console.warn("Failed to sync positions to Firestore:", err);
      }
    }

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



