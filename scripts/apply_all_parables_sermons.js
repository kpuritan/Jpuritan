const fs = require('fs');
const path = require('path');

const p1to5 = require('./parables_sermons_01_to_05');
const p6to10 = require('./parables_sermons_06_to_10');
const p11to15 = require('./parables_sermons_11_to_15');
const p16to20 = require('./parables_sermons_16_to_20');
const p21to25 = require('./parables_sermons_21_to_25');

const allSermons = [
  ...p1to5,
  ...p6to10,
  ...p11to15,
  ...p16to20,
  ...p21to25
];

console.log(`Loaded ${allSermons.length} Benjamin Keach Parables sermons.`);

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');

const rawData = fs.readFileSync(dataJsonPath, 'utf-8');
const data = JSON.parse(rawData);

// 1. Ensure category cat_sermon_mir_par exists
if (!data.categories) {
  data.categories = [];
}

let parCat = data.categories.find(c => c.id === 'cat_sermon_mir_par');
if (!parCat) {
  console.log('Adding category cat_sermon_mir_par...');
  parCat = {
    id: 'cat_sermon_mir_par',
    parentId: 'sermon',
    nameJp: 'イエスのたとえ話',
    nameKr: '예수님의 비유',
    icon: null,
    position: 67
  };
  data.categories.push(parCat);
} else {
  console.log('Category cat_sermon_mir_par found.');
}

// 2. Add or update the 25 articles
if (!data.articles) {
  data.articles = [];
}

const sermonIds = new Set(allSermons.map(s => s.id));
// Remove existing ones if any to avoid duplicates
data.articles = data.articles.filter(a => !sermonIds.has(a.id));

// Append all 25 sermons
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
