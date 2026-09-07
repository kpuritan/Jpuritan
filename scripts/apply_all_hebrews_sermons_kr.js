const fs = require('fs');
const path = require('path');

const s1 = require('./sermon_kr_01');
const s2 = require('./sermon_kr_02');
const s3 = require('./sermon_kr_03');
const s4 = require('./sermon_kr_04');
const s5 = require('./sermon_kr_05');
const s6 = require('./sermon_kr_06');
const s7 = require('./sermon_kr_07');
const s8 = require('./sermon_kr_08');
const s9 = require('./sermon_kr_09');
const s10 = require('./sermon_kr_10');
const s11 = require('./sermon_kr_11');
const s12 = require('./sermon_kr_12');
const s13 = require('./sermon_kr_13');

const allSermons = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];

console.log(`Loaded ${allSermons.length} extensive Korean Puritan sermons.`);

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');

const rawData = fs.readFileSync(dataJsonPath, 'utf-8');
const data = JSON.parse(rawData);

// Ensure category cat_heb_04 exists
if (!data.categories) {
  data.categories = [];
}

const existingCat = data.categories.find(c => c.id === 'cat_heb_04');
if (!existingCat) {
  console.log('Adding category cat_heb_04 (히브리서 4장 / ヘブル人への手紙 4章)...');
  data.categories.push({
    id: 'cat_heb_04',
    parentId: 'cat_sermon_heb',
    nameJp: 'ヘブル人への手紙 4章',
    nameKr: '히브리서 4장',
    order: 4
  });
} else {
  console.log('Category cat_heb_04 exists.');
}

// Ensure articles array
if (!data.articles) {
  data.articles = [];
}

const sermonIds = new Set(allSermons.map(s => s.id));
// Filter out previous versions
data.articles = data.articles.filter(a => !sermonIds.has(a.id));

// Add all 13 extensive sermons
for (const sermon of allSermons) {
  data.articles.push(sermon);
  console.log(`Added: [${sermon.id}] ${sermon.title}`);
}

// Write data.json
fs.writeFileSync(dataJsonPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully updated data.json');

// Write data.js
const jsContent = `window.MASTER_SITE_DATABASE = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(dataJsPath, jsContent, 'utf-8');
console.log('Successfully updated data.js');
