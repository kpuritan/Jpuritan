const fs = require('fs');
const path = require('path');

const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');
const appJsPath = path.join(__dirname, '..', 'app.js');

// 1. Update data.json
const data = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

const existing = data.categories.find(c => c.id === 'cat_theo_covenant' || c.nameKr === '언약신학');
if (existing) {
  console.log('Category already exists:', existing);
} else {
  // Shift theology categories with position >= 14
  data.categories.forEach(c => {
    if (c.parentId === 'theology' && c.position >= 14) {
      c.position += 1;
    }
  });

  const newCat = {
    id: 'cat_theo_covenant',
    parentId: 'theology',
    nameJp: '契約神学',
    nameKr: '언약신학',
    icon: null,
    position: 14
  };

  // Find index of cat_theo_2 (인간론)
  const idxTheo2 = data.categories.findIndex(c => c.id === 'cat_theo_2');
  if (idxTheo2 !== -1) {
    data.categories.splice(idxTheo2 + 1, 0, newCat);
  } else {
    data.categories.push(newCat);
  }

  console.log('Added cat_theo_covenant.');
}

// Verify theology categories order
const theos = data.categories.filter(c => c.parentId === 'theology').sort((a, b) => a.position - b.position);
console.log('Updated theology categories:');
theos.forEach(c => console.log(` - Pos ${c.position}: ${c.nameKr} (${c.nameJp}) [${c.id}]`));

// Save data.json
const jsonStr = JSON.stringify(data, null, 2);
fs.writeFileSync(dataJsonPath, jsonStr, 'utf8');
console.log('Saved data.json successfully.');

// Save data.js
const jsContent = `const initialData = ${jsonStr};
if (typeof window !== 'undefined') {
  window.SITE_DATA = initialData;
  window.MASTER_SITE_DATABASE = initialData;
}
`;
fs.writeFileSync(dataJsPath, jsContent, 'utf8');
console.log('Saved data.js successfully.');

// 2. Update app.js dictionary
let appJs = fs.readFileSync(appJsPath, 'utf8');
if (!appJs.includes('"언약신학": "契約神学"')) {
  appJs = appJs.replace(
    '"인간론": "人間論",',
    '"인간론": "人間論",\r\n      "언약신학": "契約神学",'
  );
  if (!appJs.includes('"언약신학": "契約神学"')) {
    // If LF line ending
    appJs = appJs.replace(
      '"인간론": "人間論",',
      '"인간론": "人間論",\n      "언약신학": "契約神学",'
    );
  }
}

if (!appJs.includes('"契約神学": "언약신학"')) {
  appJs = appJs.replace(
    '"キリスト論": "기독론",',
    '"神論": "신론",\r\n      "人間論": "인간론",\r\n      "契約神学": "언약신학",\r\n      "キリスト論": "기독론",'
  );
  if (!appJs.includes('"契約神学": "언약신학"')) {
    // If LF line ending
    appJs = appJs.replace(
      '"キリスト論": "기독론",',
      '"神論": "신론",\n      "人間論": "인간론",\n      "契約神学": "언약신학",\n      "キリスト論": "기독론",'
    );
  }
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Updated app.js successfully.');

// 3. Create folder 개혁신학/契約神学/.gitkeep
const targetDir = path.join(__dirname, '..', '개혁신학', '契約神学');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
fs.writeFileSync(path.join(targetDir, '.gitkeep'), '', 'utf8');
console.log('Created folder 개혁신학/契約神学/.gitkeep');
