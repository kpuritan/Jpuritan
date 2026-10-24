const fs = require('fs');
const path = require('path');

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');
const appJsPath = path.join(__dirname, '..', 'app.js');

// 1. Read data.json
const data = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

function parseScripture(scripture) {
  if (!scripture) return { ch: 999, startV: 999, endV: 999, sub: '' };
  const m = scripture.match(/(\d+)章\s*(\d+)(?:〜(\d+))?節?([ab])?/);
  if (!m) return { ch: 999, startV: 999, endV: 999, sub: '' };
  return {
    ch: parseInt(m[1], 10),
    startV: parseInt(m[2], 10),
    endV: m[3] ? parseInt(m[3], 10) : parseInt(m[2], 10),
    sub: m[4] || ''
  };
}

// Fix duplicated scripture text if present
data.articles.forEach(a => {
  if (a.categoryId === 'cat_sermon_sermon_mount') {
    if (a.scripture && a.scripture.includes('マタイの福音書 6章7〜8節マタイの福音書 6章7〜8節')) {
      a.scripture = 'マタイの福音書 6章7〜8節';
    }
  }
});

// Find all Sermon on the Mount articles
const mountArts = data.articles.filter(a => a.categoryId === 'cat_sermon_sermon_mount');

// Sort in scripture order
mountArts.sort((a, b) => {
  const pa = parseScripture(a.scripture);
  const pb = parseScripture(b.scripture);
  if (pa.ch !== pb.ch) return pa.ch - pb.ch;
  if (pa.startV !== pb.startV) return pa.startV - pb.startV;
  if (pa.sub !== pb.sub) return pa.sub.localeCompare(pb.sub);
  if (pa.endV !== pb.endV) return pa.endV - pb.endV;
  return a.id.localeCompare(b.id);
});

// Assign sequential positions (1 to 52)
mountArts.forEach((a, idx) => {
  a.position = idx + 1;
});

console.log('Sorted 52 Sermon on the Mount articles. Sample:');
console.log(`- First: [${mountArts[0].position}] ${mountArts[0].scripture} | ${mountArts[0].title}`);
const fasting = mountArts.find(a => a.id === 'art_1792836308069');
console.log(`- Newly added: [${fasting.position}] ${fasting.scripture} | ${fasting.title}`);
console.log(`- Last: [${mountArts[mountArts.length - 1].position}] ${mountArts[mountArts.length - 1].scripture} | ${mountArts[mountArts.length - 1].title}`);

// Save data.json
const jsonStr = JSON.stringify(data, null, 2);
fs.writeFileSync(dataJsonPath, jsonStr, 'utf8');
console.log('Successfully saved data.json');

// Save data.js
const jsContent = 'window.MASTER_SITE_DATABASE = ' + jsonStr + ';\n';
fs.writeFileSync(dataJsPath, jsContent, 'utf8');
console.log('Successfully saved data.js');

// 2. Enhance app.js getArticleSortKey for scripture parsing fallback
let appJs = fs.readFileSync(appJsPath, 'utf8');
const targetLine = 'secNum = (art.position !== undefined && art.position !== null) ? Number(art.position) : 999999;';
const enhancedBlock = `secNum = (art.position !== undefined && art.position !== null) ? Number(art.position) : 999999;
        if (secNum === 999999 && art.scripture) {
          const sm = art.scripture.match(/(\\d+)章\\s*(\\d+)(?:〜(\\d+))?절?節?([ab])?/);
          if (sm) {
            const ch = parseInt(sm[1], 10);
            const v = parseInt(sm[2], 10);
            const sub = sm[4] === 'b' ? 2 : (sm[4] === 'a' ? 1 : 0);
            secNum = ch * 10000 + v * 10 + sub;
          }
        }`;

if (!appJs.includes('secNum = ch * 10000 + v * 10 + sub;')) {
  appJs = appJs.replace(targetLine, enhancedBlock);
  fs.writeFileSync(appJsPath, appJs, 'utf8');
  console.log('Successfully enhanced getArticleSortKey in app.js');
} else {
  console.log('app.js already has scripture fallback.');
}
