const fs = require('fs');
const path = require('path');

function cleanJohnSermonContent(content) {
  let text = content;

  // 1. Remove top H1 title line if it starts with #
  text = text.replace(/^#[ \t]+[^\r\n]+[\r\n]*/, '');

  // 2. Remove horizontal rules (---)
  text = text.replace(/^[ \t]*---[ \t]*$/gm, '');

  // 3. Fix typo: 核心적真理 -> 核心的真理
  text = text.replace(/核心적真理/g, '核心的真理');

  // 4. Remove blockquote markers (> )
  text = text.replace(/^[ \t]*>[ \t]?/gm, '');

  // 5. Remove bullet list markers with bold: - **...** -> ・ ...
  text = text.replace(/^[ \t]*-[ \t]*\*\*([^*]+)\*\*/gm, '・ $1');
  text = text.replace(/^[ \t]*-[ \t]+/gm, '・ ');

  // 6. Section outline headers: ### 第N大綱: -> [第N大綱: ...]
  text = text.replace(/###[ \t]*(第\d+大綱[:：]?[ \t]*[^\r\n]+)/g, '[$1]');

  // 7. Strip leading hashes (###, ##, #) from all lines while keeping emojis and text intact
  text = text.replace(/^[ \t]*#{1,6}[ \t]*/gm, '');

  // 8. Remove all remaining **bold** and *italic* markdown markers
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/(?<!\*)\*([^*\r\n]+)\*(?!\*)/g, '$1');

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

    if (hasHash || hasDoubleAsterisk || hasHr || hasGt || !hasEmoji) {
      console.log('Article ' + (idx+1) + ' (' + art.id + ') failed:', { hasHash, hasDoubleAsterisk, hasHr, hasGt, hasEmoji });
      failed++;
    }
  });

  console.log('Test completed. Total failed: ' + failed);
}
