const fs = require('fs');
const path = require('path');

function readJsonClean(filename) {
  const content = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  return JSON.parse(content.replace(/^\uFEFF/, ''));
}

const part1 = readJsonClean('part1.json');
const part2 = readJsonClean('part2.json');
const part3 = readJsonClean('part3.json');
const part4 = readJsonClean('part4.json');
const part5 = readJsonClean('part5.json');
const part6 = readJsonClean('part6.json');
const part7 = readJsonClean('part7.json');
const part8 = readJsonClean('part8.json');
const part9 = readJsonClean('part9.json');

const allRawSermons = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7,
  ...part8,
  ...part9
];
console.log(`Total sermons loaded: ${allRawSermons.length}`);

function generateSermonHtml(sermon) {
  const sectionsHtml = sermon.sections.map(sec => {
    const paragraphs = sec.p.split('\n\n').map(p => `      <p style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.85; color: #334155; text-align: justify;">${p.trim()}</p>`).join('\n');
    return `
    <section style="margin-bottom: 2.5rem;">
      <h3 style="color: #0A1C36; font-size: 1.35rem; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #D4AF37;">■</span> ${sec.h}
      </h3>
${paragraphs}
    </section>`;
  }).join('\n');

  return `<!-- ホームページ掲載用コード -->
<div class="sermon-container" style="max-width: 820px; margin: 0 auto; line-height: 1.85; color: #334155; font-family: 'Noto Serif JP', 'Yu Mincho', 'Hiragino Mincho ProN', serif;">

  <!-- ヘッダーカード -->
  <header style="background: linear-gradient(135deg, #0A1C36 0%, #1e293b 100%); color: #ffffff; padding: 2.5rem 2rem; border-radius: 12px; margin-bottom: 2.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);">
    <div style="display: inline-block; background-color: rgba(212, 175, 55, 0.2); color: #D4AF37; font-size: 0.85rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 9999px; margin-bottom: 1rem; border: 1px solid rgba(212, 175, 55, 0.4); letter-spacing: 0.05em;">
      <i class="fa-solid fa-crown"></i> 『ヨハネによる福音書第17章に関する説教』 (Sermons upon John 17)
    </div>
    <h1 style="font-size: 1.75rem; font-weight: 700; line-height: 1.4; margin-bottom: 1rem; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
      ${sermon.title}
    </h1>
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.9rem; color: #cbd5e1; border-top: 1px solid rgba(255, 255, 255, 0.15); padding-top: 1rem; align-items: center;">
      <div><i class="fa-solid fa-user-pen" style="color: #D4AF37; margin-right: 0.3rem;"></i> <strong>説教者：</strong>トーマス・マントン (Thomas Manton, 1620–1677)</div>
      <div><i class="fa-solid fa-bible" style="color: #D4AF37; margin-right: 0.3rem;"></i> <strong>本文：</strong>${sermon.scripture}</div>
      <div><i class="fa-solid fa-layer-group" style="color: #D4AF37; margin-right: 0.3rem;"></i> <strong>第${sermon.num}回</strong> / 全45回</div>
    </div>
  </header>

  <!-- 本文聖句ボックス -->
  <div style="background-color: #fdfbf7; border-left: 4px solid #D4AF37; padding: 1.5rem 1.75rem; margin-bottom: 2.5rem; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
    <div style="font-weight: 700; color: #85581A; font-size: 0.95rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
      <i class="fa-solid fa-quote-left"></i> 本文聖句（${sermon.scripture}）
    </div>
    <p style="font-style: italic; color: #1e293b; font-size: 1.1rem; line-height: 1.8; margin: 0; font-family: 'Noto Serif JP', serif;">
      「${sermon.verse}」
    </p>
  </div>

  <!-- 説教本文 -->
  <main style="background: #ffffff; padding: 1rem 0;">
${sectionsHtml}
  </main>

  <!-- フッター注記 -->
  <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">
    <p>出典：Thomas Manton, <em>Several Discourses on the Seventeenth Chapter of St. John</em> (Complete Works of Thomas Manton, Vol. 10 &amp; 11)</p>
    <p style="margin-top: 0.25rem;">日本清教学会・清教徒神学研究所 (Japan Puritan Institute)</p>
  </footer>

</div>`;
}

const articlesToInsert = allRawSermons.map((s) => {
  const sermonId = `art_manton_john_17_${String(s.num).padStart(2, '0')}`;
  const baseDate = new Date('2026-03-01T09:00:00.000Z');
  baseDate.setMinutes(baseDate.getMinutes() + (s.num * 10));
  const dateStr = baseDate.toISOString().replace('T', ' ').substring(0, 19);

  return {
    id: sermonId,
    categoryId: 'cat_john_17',
    title: s.title,
    author: 'トーマス・マントン (Thomas Manton)',
    createdAt: dateStr,
    views: Math.floor(Math.random() * 30) + 20,
    content: generateSermonHtml(s)
  };
});

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');

const rawData = fs.readFileSync(dataJsonPath, 'utf-8');
const data = JSON.parse(rawData.replace(/^\uFEFF/, ''));

// Ensure category cat_john_17 exists under cat_sermon_john
let catJohn17 = data.categories.find(c => c.id === 'cat_john_17');
if (!catJohn17) {
  console.log('Creating category cat_john_17...');
  catJohn17 = {
    id: 'cat_john_17',
    parentId: 'cat_sermon_john',
    nameJp: 'ヨハネの福音書 17章',
    nameKr: '요한복음 17장',
    order: 17
  };
  data.categories.push(catJohn17);
} else {
  console.log('Category cat_john_17 already exists.');
}

// Remove any existing articles under cat_john_17 or matching art_manton_john_17_*
data.articles = data.articles.filter(a => a.categoryId !== 'cat_john_17' && !a.id.startsWith('art_manton_john_17_'));

// Append all 45 sermons
for (const art of articlesToInsert) {
  data.articles.push(art);
  console.log(`Added: [${art.id}] ${art.title}`);
}

// Save data.json
fs.writeFileSync(dataJsonPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully saved data.json');

// Save data.js
const jsContent = `window.MASTER_SITE_DATABASE = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(dataJsPath, jsContent, 'utf-8');
console.log('Successfully saved data.js');
