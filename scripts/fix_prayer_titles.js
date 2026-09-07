const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.startsWith('sermon_kr_') && f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace "✏️ 청교도적 결단의 기도문" with "✏️ 청교도적 기도문"
  content = content.replace(/✏️ 청교도적 결단의 기도문/g, '✏️ 청교도적 기도문');
  // Replace "✏️ 청교도적 송영과 결단의 기도문" with "✏️ 청교도적 송영과 기도문"
  content = content.replace(/✏️ 청교도적 송영과 결단의 기도문/g, '✏️ 청교도적 송영과 기도문');
  // Replace any remaining "결단의 기도문" with "기도문"
  content = content.replace(/결단의 기도문/g, '기도문');
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
}
