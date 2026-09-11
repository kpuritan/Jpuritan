const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const j17 = data.articles.filter(a => a.categoryId === 'cat_john_17');

console.log('Total John 17 Articles:', j17.length);

j17.sort((a, b) => a.position - b.position);

let allValid = true;
j17.forEach(a => {
  const hasTitle = Boolean(a.title);
  const hasScripture = Boolean(a.scripture);
  const hasContent = Boolean(a.content && a.content.length > 500);
  const hasPrayer = a.content.includes('祈り');
  const has3Outlines = a.content.includes('第1大綱') && a.content.includes('第2大綱') && a.content.includes('第3大綱');
  const has3Apps = a.content.includes('1.') && a.content.includes('2.') && a.content.includes('3.');
  
  if (!hasTitle || !hasScripture || !hasContent || !hasPrayer || !has3Outlines || !has3Apps) {
    console.error('Invalid sermon:', a.id, { hasTitle, hasScripture, hasContent, hasPrayer, has3Outlines, has3Apps });
    allValid = false;
  } else {
    console.log(`[PASS] #${a.position} ${a.id} | ${a.scripture} | len: ${a.content.length} | ${a.title.slice(0, 35)}...`);
  }
});

if (allValid && j17.length === 45) {
  console.log('\n>>> ALL 45 JOHN 17 SERMONS FULLY VERIFIED AND VALID! <<<');
} else {
  console.log('\n>>> VERIFICATION FAILED! <<<');
}
