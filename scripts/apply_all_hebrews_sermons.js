const fs = require('fs');
const path = require('path');

const sermons1to3 = require('./sermons_1_to_3');
const sermons4to6 = require('./sermons_4_to_6');
const sermons7to9 = require('./sermons_7_to_9');
const sermons10to13 = require('./sermons_10_to_13');

const allSermons = [
  ...sermons1to3,
  ...sermons4to6,
  ...sermons7to9,
  ...sermons10to13
];

console.log(`Loaded ${allSermons.length} sermons.`);

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');

const rawData = fs.readFileSync(dataJsonPath, 'utf-8');
const data = JSON.parse(rawData);

// 1. Ensure category cat_heb_04 exists
if (!data.categories) {
  data.categories = [];
}

const existingCat = data.categories.find(c => c.id === 'cat_heb_04');
if (!existingCat) {
  console.log('Adding category cat_heb_04 (ヘブル人への手紙 4章)...');
  data.categories.push({
    id: 'cat_heb_04',
    parentId: 'cat_sermon_heb',
    nameJp: 'ヘブル人への手紙 4章',
    nameKr: '히브리서 4장',
    order: 4
  });
} else {
  console.log('Category cat_heb_04 already exists.');
}

// 2. Add or update the 13 articles
if (!data.articles) {
  data.articles = [];
}

const sermonIds = new Set(allSermons.map(s => s.id));
// Remove existing ones if any to avoid duplicates
data.articles = data.articles.filter(a => !sermonIds.has(a.id));

// Append all 13 sermons
for (const sermon of allSermons) {
  data.articles.push(sermon);
  console.log(`Added: [${sermon.id}] ${sermon.title}`);
}

// 3. Save data.json
fs.writeFileSync(dataJsonPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully updated data.json');

// 4. Save data.js
const jsContent = `window.MASTER_SITE_DATABASE = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(dataJsPath, jsContent, 'utf-8');
console.log('Successfully updated data.js');
