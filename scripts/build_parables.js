const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted_pdf_pages.json'), 'utf8'));
console.log(`Loaded ${pages.length} pages.`);

// Full text with clean page boundaries
// Notice: remove trailing page catchwords if present
function cleanPage(text) {
  let lines = text.split('\n').map(l => l.trimRight());
  return lines.join('\n');
}

const cleanedPages = pages.map(cleanPage);

// Let us find exact split indices on cleanedPages
const sermonMarkers = [
  { num: 25, title: "説教第25編：岩地に落ちた種 ― 霊的な枯れをもたらす悪しき原因と有害な結果", catId: "cat_par_sower", scripture: "マタイによる福音書 13:5-6, 20-21 / ルカによる福音書 8:6, 13", startPage: 0, startMarker: null },
  { num: 26, title: "説教第26編：岩地の信者たちの恐ろしい運命と枯れを防ぐ13の勧告", catId: "cat_par_sower", scripture: "マタイによる福音書 13:20-21 / ルカによる福音書 8:13", startPage: 16, startMarker: "説教第26編" },
  { num: 27, title: "説教第27編：茨の中に落ちた種（1） ― この世の思い煩いという茨の本質と害悪", catId: "cat_par_sower", scripture: "マタイによる福音書 13:7, 22", startPage: 32, startMarker: "説教第27篇" },
  { num: 28, title: "説教第28編：茨の中に落ちた種（2） ― 富の欺きとその危険な罠", catId: "cat_par_sower", scripture: "マタイによる福音書 13:7, 22", startPage: 52, startMarker: "説教第28篇" },
  { num: 29, title: "説教第29編：良い地に落ちた種 ― 正直で善い心と真の信者の最終的堅忍", catId: "cat_par_sower", scripture: "マタイによる福音書 13:8, 23 / ルカによる福音書 8:15", startPage: 64, startMarker: "説教第29篇" },
  { num: 30, title: "説教第30編：良い真珠を探す商人（1） ― 天の御国の卓越性と霊的な商人", catId: "cat_par_pearl", scripture: "マタイによる福音書 13:45-46", startPage: 82, startMarker: "XIII.たとえ話" },
  { num: 31, title: "説教第31編：良い真珠を探す商人（2） ― 極めて尊い真珠であられる主イエス・キリストの神性と卓越性", catId: "cat_par_pearl", scripture: "マタイによる福音書 13:45-46", startPage: 99, startMarker: "説教第31篇" },
  { num: 32, title: "説教第32編：良い真珠を探す商人（3） ― 神人キリストの人格的卓越性と真珠を探すべき場所と時", catId: "cat_par_pearl", scripture: "マタイによる福音書 13:45-46", startPage: 142, startMarker: "説教第32編" },
  { num: 33, title: "説教第33編：良い真珠を探す商人（4） ― 持ち物をすべて売り払い真珠を買うことの福音的意味", catId: "cat_par_pearl", scripture: "マタイによる福音書 13:45-46", startPage: 178, startMarker: "説教第33篇" },
  { num: 34, title: "説教第34編：畑に隠された宝 ― 福音の中に隠されたキリストの富と発見の喜び", catId: "cat_par_treasure", scripture: "マタイによる福音書 13:44", startPage: 200, startMarker: "XIV. たとえ話" },
  { num: 35, title: "説教第35編：麦と毒麦のたとえ（1） ― 良い種である聖徒たちの尊厳と小麦の霊的特性", catId: "cat_par_tares", scripture: "マタイによる福音書 13:24-25, 37-43", startPage: 232, startMarker: "麦と毒麦のたとえの解説" },
  { num: 36, title: "説教第36編：麦と毒麦のたとえ（2） ― 毒麦である不敬虔な者たちと偽善者の実態", catId: "cat_par_tares", scripture: "マタイによる福音書 13:24-25", startPage: 255, startMarker: "説教第36篇" },
  { num: 37, title: "説教第37編：麦と毒麦のたとえ（3） ― サタンの毒麦の種蒔きと収穫に向けて熟していく両者", catId: "cat_par_tares", scripture: "マタイによる福音書 13:28-30", startPage: 267, startMarker: "説教第37篇" },
  { num: 38, title: "説教第38編：麦と毒麦のたとえ（4） ― 収穫の時と最終的分別、義人たちの太陽のような栄光", catId: "cat_par_tares", scripture: "マタイによる福音書 13:30, 39-43", startPage: 280, startMarker: "説教第38篇" },
  { num: 39, title: "説教第39編：からしの種のたとえ（1） ― 微小な始まりから全世界を満たす巨大な木への教会の成長", catId: "cat_par_mustard", scripture: "マタイによる福音書 13:31-32 / ルカによる福音書 13:19", startPage: 294, startMarker: "XVI.たとえ話" },
  { num: 40, title: "説教第40編：からしの種のたとえ（2） ― からし種一粒の信仰、弱き信仰と強き信仰の成長", catId: "cat_par_mustard", scripture: "マタイによる福音書 13:31-32, 17:20", startPage: 312, startMarker: "説教第40篇" },
  { num: 41, title: "説教第41編：パン種のたとえ ― 神の御言葉の迅速かつ強力な浸透と全人格の変革", catId: "cat_par_leaven", scripture: "マタイによる福音書 13:33", startPage: 329, startMarker: "XVII.たとえ話" },
  { num: 42, title: "説教第42編：海に投げられた網 ― 世の海に投じられた福音の網と終わりの日の選別", catId: "cat_par_net", scripture: "マタイによる福音書 13:47-50", startPage: 336, startMarker: "海に投げ込まれた網。" },
  { num: 43, title: "説教第43編：天の御国の律法学者（1） ― 忠実な家主としての福音の奉仕者とその資質", catId: "cat_par_scribe", scripture: "マタイによる福音書 13:51-52", startPage: 358, startMarker: "XIX. たとえ話" },
  { num: 44, title: "説教第44編：天の御国の律法学者（2） ― 倉から新しいものと古いものを取り出して群れを養う奉仕者", catId: "cat_par_scribe", scripture: "マタイによる福音書 13:52", startPage: 376, startMarker: "説教第44編" },
  { num: 45, title: "説教第45編：地で豊かな実を結んだ金持ち ― 愚かな富者の貪欲と魂の滅び", catId: "cat_par_richfool", scripture: "ルカによる福音書 12:16-21", startPage: 392, startMarker: "XX. たとえ話" },
  { num: 46, title: "説教第46編：市場に座っている子供たち ― 頑固な世代の不信と知恵の子らによる義認", catId: "cat_par_children", scripture: "ルカによる福音書 7:31-35", startPage: 412, startMarker: "XXI. たとえ話" }
];

console.log("Building raw sermon slices...");
// We will build chunks
const rawSermons = [];
for (let i = 0; i < sermonMarkers.length; i++) {
  const sm = sermonMarkers[i];
  const nextSm = sermonMarkers[i + 1];

  let sermonText = "";
  
  if (i === 0) {
    // 25 ends at nextSm.startPage where nextSm.startMarker starts
    for (let p = 0; p < nextSm.startPage; p++) {
      sermonText += cleanedPages[p] + "\n\n";
    }
    const boundaryPage = cleanedPages[nextSm.startPage];
    const splitIdx = boundaryPage.indexOf(nextSm.startMarker);
    sermonText += boundaryPage.slice(0, splitIdx);
  } else if (i === sermonMarkers.length - 1) {
    // Last sermon (46)
    const boundaryPage = cleanedPages[sm.startPage];
    const splitIdx = boundaryPage.indexOf(sm.startMarker);
    sermonText += boundaryPage.slice(splitIdx) + "\n\n";
    for (let p = sm.startPage + 1; p < cleanedPages.length; p++) {
      sermonText += cleanedPages[p] + "\n\n";
    }
  } else {
    // Middle sermons
    const startPageText = cleanedPages[sm.startPage];
    const startSplitIdx = startPageText.indexOf(sm.startMarker);
    
    if (sm.startPage === nextSm.startPage) {
      const endSplitIdx = startPageText.indexOf(nextSm.startMarker);
      sermonText += startPageText.slice(startSplitIdx, endSplitIdx);
    } else {
      sermonText += startPageText.slice(startSplitIdx) + "\n\n";
      for (let p = sm.startPage + 1; p < nextSm.startPage; p++) {
        sermonText += cleanedPages[p] + "\n\n";
      }
      const endPageText = cleanedPages[nextSm.startPage];
      const endSplitIdx = endPageText.indexOf(nextSm.startMarker);
      sermonText += endPageText.slice(0, endSplitIdx);
    }
  }

  rawSermons.push({
    ...sm,
    text: sermonText.trim()
  });
}

console.log(`Generated ${rawSermons.length} raw sermons.`);
rawSermons.forEach(s => {
  console.log(`Sermon ${s.num}: text length = ${s.text.length} chars, preview = ${JSON.stringify(s.text.slice(0, 60))}`);
});

fs.writeFileSync(path.join(__dirname, 'raw_sermons.json'), JSON.stringify(rawSermons, null, 2), 'utf8');
console.log("Saved raw_sermons.json");
