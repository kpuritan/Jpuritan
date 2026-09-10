const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted_pdf_pages.json'), 'utf8'));

// Define Category and Sermon Specifications
const parableCategories = [
  {
    id: 'cat_par_sower',
    parentId: 'cat_sermon_mir_par',
    nameJp: '種まきのたとえ',
    nameKr: '씨 뿌리는 자의 비유',
    position: 1
  },
  {
    id: 'cat_par_pearl',
    parentId: 'cat_sermon_mir_par',
    nameJp: '良い真珠を探す商人',
    nameKr: '값진 진주를 찾는 상인의 비유',
    position: 2
  },
  {
    id: 'cat_par_treasure',
    parentId: 'cat_sermon_mir_par',
    nameJp: '畑に隠された宝',
    nameKr: '밭에 감추인 보화의 비유',
    position: 3
  },
  {
    id: 'cat_par_tares',
    parentId: 'cat_sermon_mir_par',
    nameJp: '麦と毒麦のたとえ',
    nameKr: '알곡과 가라지의 비유',
    position: 4
  },
  {
    id: 'cat_par_mustard',
    parentId: 'cat_sermon_mir_par',
    nameJp: 'からしの種のたとえ',
    nameKr: '겨자씨의 비유',
    position: 5
  },
  {
    id: 'cat_par_leaven',
    parentId: 'cat_sermon_mir_par',
    nameJp: 'パン種のたとえ',
    nameKr: '누룩의 비유',
    position: 6
  },
  {
    id: 'cat_par_net',
    parentId: 'cat_sermon_mir_par',
    nameJp: '地引網のたとえ',
    nameKr: '그물의 비유',
    position: 7
  },
  {
    id: 'cat_par_scribe',
    parentId: 'cat_sermon_mir_par',
    nameJp: '天の御国の律法学者',
    nameKr: '천국의 제자된 서기관의 비유',
    position: 8
  },
  {
    id: 'cat_par_richfool',
    parentId: 'cat_sermon_mir_par',
    nameJp: '愚かな金持ちのたとえ',
    nameKr: '어리석은 부자의 비유',
    position: 9
  },
  {
    id: 'cat_par_children',
    parentId: 'cat_sermon_mir_par',
    nameJp: '市場の子供たちのたとえ',
    nameKr: '장터에 앉은 아이들의 비유',
    position: 10
  }
];

const sermonSpecs = [
  {
    num: 25,
    id: 'art_keach_par_25',
    catId: 'cat_par_sower',
    title: '説教第25編：岩地に落ちた種 ― 霊的な枯れをもたらす悪しき原因と有害な結果',
    scripture: 'マタイによる福音書 13:5-6, 20-21 / ルカによる福音書 8:6, 13',
    keyVerse: '「あるものは岩の上に落ちた。生え出ると、水分がないために枯れてしまった。」（ルカ 8:6）',
    coreSummary: '岩地に落ちて枯れてしまう自称信仰者たちの内面的原因（心の石のような硬化、土・水分・根の欠如）と、その頑固な心の特徴10箇条、ならびに不毛、世俗性、冷淡、高慢、背教など霊的枯れがもたらす12の有害な結果を徹底的に解明する。',
    regex: null
  },
  {
    num: 26,
    id: 'art_keach_par_26',
    catId: 'cat_par_sower',
    title: '説教第26編：岩地の信者たちの恐ろしい運命と枯れを防ぐ13の勧告',
    scripture: 'マタイによる福音書 13:20-21 / ルカによる福音書 8:13',
    keyVerse: '「岩の上にいる者たちとは、御言葉を聞いたときには喜んで受け入れるが、根がないので、しばらくは信じていても、試練の時になると離れ去る者たちのことである。」（ルカ 8:13）',
    coreSummary: '枯れていくことは岩場の者たちが迎える恐ろしい運命である。霊的に枯れ腐り死にかけている12の危険な兆候を警告し、キリストとの真の生きた結合、真の新生の確認、恵みの積み重ねなど、枯れを防ぐための13の実際的勧告を提示する。',
    regex: /説教第26編/
  },
  {
    num: 27,
    id: 'art_keach_par_27',
    catId: 'cat_par_sower',
    title: '説教第27編：茨の中に落ちた種（1） ― この世の思い煩いという茨の本質と害悪',
    scripture: 'マタイによる福音書 13:7, 22',
    keyVerse: '「茨の中に種を蒔かれた者とは、御言葉を聞くが、世の思い煩いや富の誘惑が御言葉をふさぎ、実を結ばなくなる者のことである。」（マタイ 13:22）',
    coreSummary: '茨の茂みの中に蒔かれた種が窒息してしまうたとえを通して、貧しい人々を捕らえる「世の心配事」の罪深さと危険性を暴く。合法的事柄の乱用が魂を滅ぼす原理を解き明かし、罪深い心配を克服して神の全能と約束に委ねる道を説く。',
    regex: /説教第27篇/
  },
  {
    num: 28,
    id: 'art_keach_par_28',
    catId: 'cat_par_sower',
    title: '説教第28編：茨の中に落ちた種（2） ― 富の欺きとその危険な罠',
    scripture: 'マタイによる福音書 13:7, 22',
    keyVerse: '「富を得ようとする者は、誘惑と罠、また愚かで有害な多くの情欲に陥り、それによって人々を滅亡と破滅に沈めます。」（Ⅰテモテ 6:9）',
    coreSummary: '茨のもう一つの象徴である「富の欺き」について論じる。富は苦しみをもたらす棘（spina purigens）であり、御言葉を塞ぎ魂を永遠の滅びへと追いやる。富の欺瞞的性質と落とし穴を暴き、アグルのように霊的富を求めるよう勧告する。',
    regex: /説教第28篇/
  },
  {
    num: 29,
    id: 'art_keach_par_29',
    catId: 'cat_par_sower',
    title: '説教第29編：良い地に落ちた種 ― 正直で善い心と真の信者の最終的堅忍',
    scripture: 'マタイによる福音書 13:8, 23 / ルカによる福音書 8:15',
    keyVerse: '「しかし、良い地に落ちたのは、立派な善い心で御言葉を聞いて、それをしっかりと守り、忍耐して実を結ぶ人々である。」（ルカ 8:15）',
    coreSummary: '四番目の唯一の良い畑である「正直で善い心」の本質を考察する。聖霊による土壌の開墾と再生、キリストとの結合、謙遜な心、そして豊かな実を結ぶ歩みを解説し、真の信者が決して最終的に堕落せず最後まで耐え抜く堅忍の教理を力強く証明する。',
    regex: /説教第29篇/
  },
  {
    num: 30,
    id: 'art_keach_par_30',
    catId: 'cat_par_pearl',
    title: '説教第30編：良い真珠を探す商人（1） ― 天の御国の卓越性と霊的な商人',
    scripture: 'マタイによる福音書 13:45-46',
    keyVerse: '「また、天の国は、良い真珠を探す商人のようなものである。高価な真珠を一つ見つけると、出かけて行って持ち物をすっかり売り払い、それを買う。」（マタイ 13:45-46）',
    coreSummary: '天の御国を良い真珠を探す商人に例えた主の意図を解き明かす。霊的な商人はこの世の商人をはるかに凌駕し、天の宝である恵みとキリストの功績を取引する。無償で与えられる至高の霊的商品の無限の価値と確実な報いを明示する。',
    regex: /XIII\s*\.\s*たとえ話/
  },
  {
    num: 31,
    id: 'art_keach_par_31',
    catId: 'cat_par_pearl',
    title: '説教第31編：良い真珠を探す商人（2） ― 極めて尊い真珠であられる主イエス・キリストの神性と卓越性',
    scripture: 'マタイによる福音書 13:45-46',
    keyVerse: '「万軍の主よ、あなたの住まいは何と愛らしいことでしょう。神の子羊は、力と富と知恵と勢いと誉れと栄光と賛美とを受けるにふさわしい方です。」（黙示録 5:12）',
    coreSummary: '高価な真珠の実体であられる主イエス・キリストの神性と人格的卓越性を徹底的に論証する。キリストが至高の神である15の論証、完全な人間性を取られた聖なる受肉の神秘を解き明かし、偽キリストの異端を退けて真のキリストを抱きしめるよう促す。',
    regex: /説教第31篇/
  },
  {
    num: 32,
    id: 'art_keach_par_32',
    catId: 'cat_par_pearl',
    title: '説教第32編：良い真珠を探す商人（3） ― 神人キリストの人格的卓越性と真珠を探すべき場所と時',
    scripture: 'マタイによる福音書 13:45-46',
    keyVerse: '「御子には神の満ち満ちた徳が余すところなく宿っており、あなたがたはキリストにあって満たされているのです。」（コロサイ 2:9-10）',
    coreSummary: '神人キリストの王・祭司・預言者としての三重の職分、卓越した御霊の美徳、教会にとっての万有としての豊かさを称賛する。続いて、この真珠をどこで探すべきか（契約、約束、福音の中）、いつ探すべきか（早く、聖霊の順風が吹く今）を詳述する。',
    regex: /説教第32編/
  },
  {
    num: 33,
    id: 'art_keach_par_33',
    catId: 'cat_par_pearl',
    title: '説教第33編：良い真珠を探す商人（4） ― 持ち物をすべて売り払い真珠を買うことの福音的意味',
    scripture: 'マタイによる福音書 13:45-46',
    keyVerse: '「ああ、渇いている者はみな水に来よ。金のない者も来よ。来て買い、食べよ。来て金を出さずに、価を払わずに、ぶどう酒と乳とを買え。」（イザヤ 55:1）',
    coreSummary: '罪人が真珠であるキリストを求めなければならない理由と、「持ち物をすべて売り払って買う」ことの真意を解明する。自己義や律法的功績を完全に捨て去り、「金も代価もなしに」キリストを無償の賜物として受け取る純粋な恵みの福音を宣べ伝える。',
    regex: /説教第33篇/
  },
  {
    num: 34,
    id: 'art_keach_par_34',
    catId: 'cat_par_treasure',
    title: '説教第34編：畑に隠された宝 ― 福音の中に隠されたキリストの富と発見の喜び',
    scripture: 'マタイによる福音書 13:44',
    keyVerse: '「天の国は、畑に隠された宝のようなものである。それを見つけた人は、隠しておき、喜んで出かけて行き、持ち物をすっかり売り払って、その畑を買う。」（マタイ 13:44）',
    coreSummary: '福音という広大な畑に隠されたキリストの宝を発見した者の歓喜を描く。世の知恵者には隠され幼子に啓示される奥義、宝を心に大切に隠し守る信仰、すべての負債を帳消しにし魂を永遠に富ませるキリストの無尽蔵の富を証しする。',
    regex: /XIV\s*\.\s*たとえ話/
  },
  {
    num: 35,
    id: 'art_keach_par_35',
    catId: 'cat_par_tares',
    title: '説教第35編：麦と毒麦のたとえ（1） ― 良い種である聖徒たちの尊厳と小麦の霊的特性',
    scripture: 'マタイによる福音書 13:24-25, 37-43',
    keyVerse: '「良い種を蒔く者は人の子、畑は世界、良い種は御国の子らである。」（マタイ 13:37-38）',
    coreSummary: '人の子イエスが蒔かれた良い種である聖徒たちの尊い身分と特権を解き明かす。聖徒がなぜ小麦に例えられるのか、その14の霊的特性（冬の過酷な試練を耐え抜く生命力、実れば頭を垂れる謙遜、成熟の過程など）を美しく論じる。',
    regex: /麦と毒麦のたとえの解説|XV\s*\.\s*たとえ話/
  },
  {
    num: 36,
    id: 'art_keach_par_36',
    catId: 'cat_par_tares',
    title: '説教第36編：麦と毒麦のたとえ（2） ― 毒麦である不敬虔な者たちと偽善者の実態',
    scripture: 'マタイによる福音書 13:24-25',
    keyVerse: '「毒麦は悪い者の子ら、それを蒔いた敵は悪魔である。」（マタイ 13:38-39）',
    coreSummary: 'サタンが蒔いた毒麦である不敬虔な者たちと偽善者の本性を暴く。聖書における悪人の呼称、サタンとの類似性、彼らの霊的糧（豚の皮や風）とみすぼらしい衣を指摘し、罪の醜悪さと、罪人を尊い小麦へと造り変える神の恵みの超越的力を対比する。',
    regex: /説教第36篇/
  },
  {
    num: 37,
    id: 'art_keach_par_37',
    catId: 'cat_par_tares',
    title: '説教第37編：麦と毒麦のたとえ（3） ― サタンの毒麦の種蒔きと収穫に向けて熟していく両者',
    scripture: 'マタイによる福音書 13:28-30',
    keyVerse: '「刈り入れまで、両方とも育つままにしておきなさい。刈り入れの時に、刈る者に『まず毒麦を集めて、焼くために束にし、麦の方は集めて倉に入れよ』と言おう。」（マタイ 13:30）',
    coreSummary: '「人々が眠っている間に」サタンが異端と誤謬を蒔いた教会の歴史的怠慢を警告し、良心の自由と迫害の不法性を論じる。そして麦と毒麦の双方が収穫の日を目指してどのように熟していくか、義人の霊的成熟と悪人の罪の満ちる過程を対比して明かす。',
    regex: /説教第37篇/
  },
  {
    num: 38,
    id: 'art_keach_par_38',
    catId: 'cat_par_tares',
    title: '説教第38編：麦と毒麦のたとえ（4） ― 収穫の時と最終的分別、義人たちの太陽のような栄光',
    scripture: 'マタイによる福音書 13:30, 39-43',
    keyVerse: '「その時、義人たちはその父の御国で太陽のように輝くであろう。耳のある者は聞け。」（マタイ 13:43）',
    coreSummary: '世の終わりの大収穫と天使たちによる厳粛な選別を描く。毒麦が火の炉に投げ込まれる恐ろしい刑罰と、キリストの義に覆われ聖化された義人たちが父の御国で太陽のように永遠に輝く極致の栄光を荘厳に描写する。',
    regex: /説教第38篇/
  },
  {
    num: 39,
    id: 'art_keach_par_39',
    catId: 'cat_par_mustard',
    title: '説教第39編：からしの種のたとえ（1） ― 微小な始まりから全世界を満たす巨大な木への教会の成長',
    scripture: 'マタイによる福音書 13:31-32 / ルカによる福音書 13:19',
    keyVerse: '「からし種は、どんな種よりも小さいが、育つと、草類の中で最も大きくなり、木となって、空の鳥が来て、その枝に巣を作るようになる。」（マタイ 13:32）',
    coreSummary: 'からし種一粒のような120人の微小な始まりから、激しい迫害をくぐり抜けて全世界に枝を広げるキリストの教会の預言的成長を解説する。終わりの日に教会が至る栄光、御国の到来を告げる12の時代的兆候を深く探求する。',
    regex: /XVI\s*\.\s*たとえ話/
  },
  {
    num: 40,
    id: 'art_keach_par_40',
    catId: 'cat_par_mustard',
    title: '説教第40編：からしの種のたとえ（2） ― からし種一粒の信仰、弱き信仰と強き信仰の成長',
    scripture: 'マタイによる福音書 13:31-32, 17:20',
    keyVerse: '「あなたがたに、からし種一粒ほどの信仰さえあれば、この山に向かって『ここからあそこへ移れ』と言えば、山は移るであろう。あなたがたにできないことは何もない。」（マタイ 17:20）',
    coreSummary: 'からし種一粒ほどの信仰が山を動かす力を持つ真理を説く。疑いや恐れに苛まれる弱い信仰の原因と特徴を分析し、試練の中でヤシの木のように上へ伸び、キリストの一言に寄り頼む堅固で偉大な信仰へと成長する道筋を教示する。',
    regex: /説教第40篇/
  },
  {
    num: 41,
    id: 'art_keach_par_41',
    catId: 'cat_par_leaven',
    title: '説教第41編：パン種のたとえ ― 神の御言葉の迅速かつ強力な浸透と全人格の変革',
    scripture: 'マタイによる福音書 13:33',
    keyVerse: '「天の国は、パン種のようなものである。女がこれを取って三斗の粉の中に混ぜると、全体がふくらんでくる。」（マタイ 13:33）',
    coreSummary: 'パン種が粉全体を膨らませるように、神の御言葉が魂の内奥に浸透して全人格を同化・聖化させる神聖な効力を解説する。目に見えないが力強く働き、頑固な心を柔らかくし、新しい被造物へと変容させる聖霊의神秘的働きを説き明かす。',
    regex: /XVII\s*\.\s*たとえ話/
  },
  {
    num: 42,
    id: 'art_keach_par_42',
    catId: 'cat_par_net',
    title: '説教第42編：海に投げられた網 ― 世の海に投じられた福音の網と終わりの日の選別',
    scripture: 'マタイによる福音書 13:47-50',
    keyVerse: '「また、天の国は、海に投げ入れて、あらゆる種類の魚を集める地引網のようなものである。網がいっぱいになると、浜辺に引き上げ、座って、良いものは器に入れ、悪いものは外へ捨てる。」（マタイ 13:47-48）',
    coreSummary: '嵐と怪物とうごめく世の海に投じられた福音の網のたとえを解説する。魂を救う漁師としての牧師の職務、網の中に集まる多様な人々と偽善者の混在、そして網が永遠の岸に引き上げられる世の終わりの峻厳な選別と永遠の行方を明らかにする。',
    regex: /海に投げ込まれた網。|XVIII\s*\.\s*たとえ話/
  },
  {
    num: 43,
    id: 'art_keach_par_43',
    catId: 'cat_par_scribe',
    title: '説教第43編：天の御国の律法学者（1） ― 忠実な家主としての福音の奉仕者とその資質',
    scripture: 'マタイによる福音書 13:51-52',
    keyVerse: '「天の国のことを学んだ律法学者はみな、自分の倉から新しいものと古いものとを取り出す家主のようなものである。」（マタイ 13:52）',
    coreSummary: '天の御国の弟子となった律法学者＝良き家主のたとえから、キリストの教会の忠実な牧師・奉仕者の崇高な職分と責任を論じる。群れを養う霊的食糧を豊かに備え、神の全計画を忠実に伝え、私心なく教会を世話する10の忠実さの基準を示す。',
    regex: /XIX\s*\.\s*たとえ話/
  },
  {
    num: 44,
    id: 'art_keach_par_44',
    catId: 'cat_par_scribe',
    title: '説教第44編：天の御国の律法学者（2） ― 倉から新しいものと古いものを取り出して群れを養う奉仕者',
    scripture: 'マタイによる福音書 13:52',
    keyVerse: '「また、管理者に要求されるのは、忠実な者であることである。」（Ⅰコリント 4:2）',
    coreSummary: '牧師が自らの宝物庫から取り出すべき神聖な知識の宝（神の属性、律法、原罪、キリストの転嫁された義、恵みの契約）と、「新しいものと古いもの」の真意を解き明かす。王の子供たちである聖徒を高貴な天の糧で養う牧会者の使命を力説する。',
    regex: /説教第44編/
  },
  {
    num: 45,
    id: 'art_keach_par_45',
    catId: 'cat_par_richfool',
    title: '説教第45編：地で豊かな実を結んだ金持ち ― 愚かな富者の貪欲と魂の滅び',
    scripture: 'ルカによる福音書 12:16-21',
    keyVerse: '「しかし神は彼に言われた、『愚かな者よ、今夜、お前の魂は取り去られる。では、お前が用意したものは、誰のものになるのか。』自分のために富を積んでも、神に対して富まない者は、この通りである。」（ルカ 12:20-21）',
    coreSummary: '「今夜、お前の魂を求める」と宣告された愚かな金持ちの独白を解剖し、神に対して富まず自らのために倉を建てた貪欲の極度の愚かさを暴く。魂を肉体の富で満たそうとする迷妄を戒め、永遠の裁きに備えてキリストにある真의富を蓄えるよう呼びかける。',
    regex: /XX\s*\.\s*たとえ話/
  },
  {
    num: 46,
    id: 'art_keach_par_46',
    catId: 'cat_par_children',
    title: '説教第46編：市場に座っている子供たち ― 頑固な世代の不信と知恵の子らによる義認',
    scripture: 'ルカによる福音書 7:31-35',
    keyVerse: '「市場に座って互いに呼びかけ、『笛を吹いてやったのに、踊ってくれなかった。弔いの歌を歌ってやったのに、泣いてくれなかった』と言っている子供たちのようだ。しかし、知恵の正しさは、そのすべての子らによって証明される。」（ルカ 7:32, 35）',
    coreSummary: '笛を吹いても踊らず嘆き悲しんでも泣かない、市場の子供たちに例えられたユダヤの頑固な世代を叱責する。ヨハネの厳格な説教もイエスの優しい福音も退けた不信を暴き、神のあらゆる知恵ある摂理を認め賛美する「知恵の子ら」の真の信仰で第1巻を締めくくる。',
    regex: /XXI\s*\.\s*たとえ話/
  }
];

// Slice raw texts for all 22 sermons
const slicePoints = [];
for (let i = 0; i < sermonSpecs.length; i++) {
  const spec = sermonSpecs[i];
  if (!spec.regex) {
    slicePoints.push({ num: spec.num, page: 0, index: 0 });
    continue;
  }
  let found = false;
  for (let p = 0; p < pages.length; p++) {
    const match = pages[p].match(spec.regex);
    if (match) {
      slicePoints.push({ num: spec.num, page: p, index: match.index });
      found = true;
      break;
    }
  }
  if (!found) throw new Error(`Not found marker for sermon ${spec.num}`);
}

const sermonTexts = [];
for (let i = 0; i < sermonSpecs.length; i++) {
  const cur = slicePoints[i];
  const next = slicePoints[i + 1];

  let raw = "";
  if (!next) {
    // Last sermon 46
    raw += pages[cur.page].slice(cur.index) + "\n\n";
    for (let p = cur.page + 1; p < pages.length; p++) {
      raw += pages[p] + "\n\n";
    }
  } else {
    if (cur.page === next.page) {
      raw = pages[cur.page].slice(cur.index, next.index);
    } else {
      raw += pages[cur.page].slice(cur.index) + "\n\n";
      for (let p = cur.page + 1; p < next.page; p++) {
        raw += pages[p] + "\n\n";
      }
      raw += pages[next.page].slice(0, next.index);
    }
  }
  sermonTexts.push(raw.trim());
}

// Function to format raw text into beautiful HTML
function formatSermonToHtml(spec, rawText) {
  // Strip introductory headers like "説教第XX篇..." from the body to avoid duplication with banner
  let body = rawText;
  
  // Clean up catchwords at page edges if any
  body = body.replace(/海に投げ込ま\s*れた/g, '');
  
  // Split into paragraphs / blocks
  // First normalize newlines
  const lines = body.split('\n').map(l => l.trim());
  
  const blocks = [];
  let currentBlock = [];

  for (let line of lines) {
    if (!line) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join(' '));
        currentBlock = [];
      }
      continue;
    }

    // Check if line is a major heading or subsection
    const isMajorHeading = /^(教理[：:]?|適用[。.]?|結論[。.]?|勧告[。.]?|質問[。.]?|答[。.]?|反論[。.]?|動機[。.]?|参考までに[、。]?|第一に[、。]?|第二に[、。]?|第三に[、。]?|第四に[、。]?|第五に[、。]?|第六に[、。]?|第七に[、。]?|第八に[、。]?|第九に[、。]?|第十に[、。]?|最後に[、。]?)/.test(line)
      || /^(第[一二三四五六七八九十]+[。、]?|説教第?\d+[編篇]|説教\s*XL[IVX]+)/.test(line)
      || /^([I|V|X]+[\.\s]|[0-9]{1,2}[\.\s]|\([0-9]{1,2}\.?\)|\([I|V|X]+\.?\))/.test(line);

    if (isMajorHeading && currentBlock.length > 0) {
      blocks.push(currentBlock.join(' '));
      currentBlock = [line];
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join(' '));
  }

  // Convert blocks to styled HTML elements
  let bodyHtml = "";
  for (let b of blocks) {
    b = b.trim();
    if (!b) continue;

    // Filter out redundant initial titles
    if (/^(説教第?\s*\d+\s*[編篇]|説教\s*XL[IVX]+|XVI\.|XVII\.|XVIII\.|XIX\.|XX\.|XXI\.|XIII\.|XIV\.|XV\.)/.test(b) && b.length < 120) {
      continue;
    }

    if (/^教理[：:]?/.test(b)) {
      bodyHtml += `
<div style="background-color: #fefce8; border-left: 4px solid #eab308; padding: 16px 20px; border-radius: 6px; margin: 24px 0 18px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
  <strong style="color: #854d0e; font-size: 1.05rem; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
    <i class="fa-solid fa-scroll"></i> 核心教理 (Doctrine)
  </strong>
  <p style="margin: 0; line-height: 1.85; color: #713f12; font-weight: 600;">
    ${escapeHtml(b)}
  </p>
</div>`;
    } else if (/^(質問[。.]?|反論[。.]?)/.test(b)) {
      bodyHtml += `
<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 14px 18px; border-radius: 6px; margin: 20px 0 12px 0;">
  <strong style="color: #1e40af; font-size: 1.02rem; display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
    <i class="fa-solid fa-circle-question"></i> ${escapeHtml(b.slice(0, 30))}
  </strong>
  <p style="margin: 0; line-height: 1.8; color: #1e3a8a;">
    ${escapeHtml(b)}
  </p>
</div>`;
    } else if (/^(答[。.]?|回答[。.]?)/.test(b)) {
      bodyHtml += `
<div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: 6px; margin: 12px 0 20px 0;">
  <strong style="color: #166534; font-size: 1.02rem; display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
    <i class="fa-solid fa-check-circle"></i> 解答 (Answer)
  </strong>
  <p style="margin: 0; line-height: 1.85; color: #14532d;">
    ${escapeHtml(b)}
  </p>
</div>`;
    } else if (/^(適用[。.]?|用例[。.]?|結論[。.]?|勧告[。.]?)/.test(b) && b.length < 50) {
      bodyHtml += `
<h3 style="font-size: 1.25em; font-weight: bold; margin-top: 32px; margin-bottom: 14px; color: #0A1C36; border-bottom: 2px solid #C5A059; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;">
  <i class="fa-solid fa-crosshairs" style="color: #C5A059;"></i> ${escapeHtml(b)}
</h3>`;
    } else if (/^([I|V|X]+[\.\s]|[0-9]{1,2}[\.\s]|\([0-9]{1,2}\.?\)|\([I|V|X]+\.?\)|第[一二三四五六七八九十]+[。、]|第一に|第二に|第三に|第四に|第五に|第六に|第七に|第八に|第九に|第十に|最後に)/.test(b) && b.length < 80) {
      bodyHtml += `
<h4 style="font-size: 1.12em; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #1e293b; border-left: 3px solid #0A1C36; padding-left: 10px;">
  ${escapeHtml(b)}
</h4>`;
    } else {
      bodyHtml += `
<p style="margin-bottom: 14px; line-height: 1.85; color: #334155;">
  ${escapeHtml(b)}
</p>`;
    }
  }

  // Full Header & Wrap
  const fullHtml = `
<div style="font-family: 'Noto Serif JP', 'Noto Serif KR', serif; line-height: 1.9; color: #1e293b; max-width: 100%; padding: 10px 0;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, #0A1C36 0%, #1e293b 100%); color: #fff; padding: 26px 30px; border-radius: 8px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #C5A059; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
      <i class="fa-solid fa-book-bible"></i> 福音の奥義の解明・イエスのたとえ話 (Gospel Mysteries Unveiled)
    </div>
    <h2 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; margin: 0 0 12px 0; color: #f8fafc; line-height: 1.4;">
      ${escapeHtml(spec.title)}
    </h2>
    <div style="font-size: 0.88rem; color: #94a3b8; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
      <span><i class="fa-solid fa-user-pen" style="color: #C5A059;"></i> 著者: <strong>ベンジャミン・キーチ</strong> (Benjamin Keach, 1640–1704)</span>
      <span><i class="fa-solid fa-book-bible" style="color: #C5A059;"></i> 本文: <strong>${escapeHtml(spec.scripture)}</strong></span>
      <span><i class="fa-solid fa-layer-group" style="color: #C5A059;"></i> <strong>説教第${spec.num}編 / 全46編 (第1巻)</strong></span>
    </div>
  </div>

  <!-- Scripture Box -->
  <div style="background-color: #f8fafc; border-left: 4px solid #C5A059; padding: 18px 22px; border-radius: 6px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="font-size: 0.82rem; color: #C5A059; font-weight: 700; margin-bottom: 6px;"><i class="fa-solid fa-quote-left"></i> 本文聖句 (Scripture)</div>
    <p style="margin: 0; line-height: 1.85; font-weight: 600; color: #1e293b; font-family: var(--font-serif); font-size: 1.05rem;">
      ${escapeHtml(spec.keyVerse)}
    </p>
  </div>

  <!-- Core Summary Box -->
  <div style="background-color: #f1f5f9; border-radius: 8px; padding: 18px 22px; margin-bottom: 28px;">
    <h3 style="font-size: 1.08rem; font-weight: 700; color: #0A1C36; margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-bookmark" style="color: #C5A059;"></i> 説教の核心要約
    </h3>
    <p style="margin: 0; line-height: 1.8; color: #334155;">
      ${escapeHtml(spec.coreSummary)}
    </p>
  </div>

  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 28px 0;">

  <!-- Body Content -->
  <div class="sermon-body">
    ${bodyHtml}
  </div>

</div>
`.trim();

  return fullHtml;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Generate all 22 articles
const generatedArticles = [];
for (let i = 0; i < sermonSpecs.length; i++) {
  const spec = sermonSpecs[i];
  const rawText = sermonTexts[i];
  const contentHtml = formatSermonToHtml(spec, rawText);

  generatedArticles.push({
    id: spec.id,
    categoryId: spec.catId,
    title: spec.title,
    author: 'ベンジャミン・キーチ (Benjamin Keach)',
    createdAt: '2026-09-10',
    scripture: spec.scripture,
    position: spec.num,
    views: 0,
    content: contentHtml,
    contentKr: '',
    contentJp: ''
  });
}

console.log(`Successfully constructed ${generatedArticles.length} sermon articles.`);

// Now let's update data.json and data.js
const dataJsonPath = path.join(__dirname, '..', 'data.json');
const dataJsPath = path.join(__dirname, '..', 'data.js');

const db = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

// 1. Ensure Categories
if (!db.categories) db.categories = [];

// Remove any pre-existing parable subcategories to avoid duplicates
const parableCatIds = new Set(parableCategories.map(c => c.id));
db.categories = db.categories.filter(c => !parableCatIds.has(c.id));

// Ensure cat_sermon_mir_par exists
let mainParCat = db.categories.find(c => c.id === 'cat_sermon_mir_par');
if (!mainParCat) {
  mainParCat = {
    id: 'cat_sermon_mir_par',
    parentId: 'sermon',
    nameJp: 'イエスのたとえ話',
    nameKr: '예수님의 비유',
    icon: null,
    position: 67
  };
  db.categories.push(mainParCat);
}

// Add the 10 parable subcategories
for (const cat of parableCategories) {
  db.categories.push(cat);
  console.log(`Added category: ${cat.id} (${cat.nameKr} / ${cat.nameJp})`);
}

// 2. Ensure Articles
if (!db.articles) db.articles = [];

const newArtIds = new Set(generatedArticles.map(a => a.id));
db.articles = db.articles.filter(a => !newArtIds.has(a.id));

for (const art of generatedArticles) {
  db.articles.push(art);
  console.log(`Added article: [${art.id}] ${art.title.slice(0, 40)}... (Length: ${art.content.length} chars)`);
}

// 3. Write data.json
fs.writeFileSync(dataJsonPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully written data.json');

// 4. Write data.js
const jsContent = `window.MASTER_SITE_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
fs.writeFileSync(dataJsPath, jsContent, 'utf8');
console.log('Successfully written data.js');

