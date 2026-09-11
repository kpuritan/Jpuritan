const fs = require('fs');
const path = require('path');

function cleanJohnSermonContent(content) {
  let text = content;

  // 1. Remove top H1 title (e.g. # 요한복음... or # ヨハネ...)
  text = text.replace(/^#[ \t]+[^\r\n]+[\r\n]*/, '');

  // 2. Remove horizontal rules
  text = text.replace(/^[ \t]*---[ \t]*$/gm, '');

  // 3. Clean specific section headers with emojis and hashes
  // 聖書箇所および要約
  text = text.replace(/###[ \t]*[^\r\n]*?聖書箇所および要約[^\r\n]*/g, '【聖書箇所および要約】');

  // 序論
  text = text.replace(/##[ \t]*[^\r\n]*?序論[:：]?[ \t]*(.*)/g, (match, p1) => {
    const title = (p1 || '').trim();
    return title ? '【序論】 ' + title : '【序論】';
  });

  // 本論
  text = text.replace(/##[ \t]*[^\r\n]*?本論[:：]?[ \t]*(.*)/g, (match, p1) => {
    const title = (p1 || '').trim();
    return title ? '【本論】 ' + title : '【本論】';
  });

  // 大綱 (第1大綱, 第2大綱, 第3大綱, etc.)
  text = text.replace(/###[ \t]*(第\d+大綱[:：]?[ \t]*[^\r\n]+)/g, '[$1]');

  // 生活へのピューリタン的適用
  text = text.replace(/##[ \t]*[^\r\n]*?生活へのピューリタン的適用[^\r\n]*/g, '【生活へのピューリタン的適用】');

  // 適用 번호 항목: ### 1. 2. 3.
  text = text.replace(/###[ \t]*(\d+[\.、][ \t]*[^\r\n]+)/g, '$1');

  // 結論および決心
  text = text.replace(/##[ \t]*[^\r\n]*?結論および決心[^\r\n]*/g, '【結論および決心】');

  // 祈り
  text = text.replace(/###[ \t]*[^\r\n]*?祈り[^\r\n]*/g, '【祈り】');

  // 4. Remove blockquote markers (> )
  text = text.replace(/^[ \t]*>[ \t]?/gm, '');

  // 5. Remove bullet list markers and bold: - **...** -> ・ ...
  text = text.replace(/^[ \t]*-[ \t]*\*\*([^*]+)\*\*/gm, '・ $1');
  text = text.replace(/^[ \t]*-[ \t]+/gm, '・ ');

  // 6. Remove all remaining **bold** markers
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');

  // 7. Remove any remaining leading # hashes
  text = text.replace(/^[ \t]*#{1,6}[ \t]*/gm, '');

  // 8. Remove any remaining AI style emojis
  text = text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu, '');

  // 9. Normalize multiple blank lines to at most two newlines
  text = text.replace(/(\r?\n){3,}/g, '\n\n');

  return text.trim();
}

module.exports = { cleanJohnSermonContent };

if (require.main === module) {
  const dataJsonPath = path.join(__dirname, '..', 'data.json');
  const data = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));
  const john17 = data.articles.filter(a => a.categoryId === 'cat_john_17');

  console.log('Testing cleanJohnSermonContent on ' + john17.length + ' sermons...');
  let failed = 0;
  john17.forEach((art, idx) => {
    const cleaned = cleanJohnSermonContent(art.content);
    const hasHash = /#/m.test(cleaned);
    const hasDoubleAsterisk = /\*\*/m.test(cleaned);
    const hasHr = /^---$/m.test(cleaned);
    const hasGt = /^>/m.test(cleaned);
    const hasEmoji = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u.test(cleaned);

    if (hasHash || hasDoubleAsterisk || hasHr || hasGt || hasEmoji) {
      console.log('Article ' + (idx+1) + ' (' + art.id + ') failed:', { hasHash, hasDoubleAsterisk, hasHr, hasGt, hasEmoji });
      failed++;
    }
  });

  console.log('Test completed. Total failed: ' + failed);
}
