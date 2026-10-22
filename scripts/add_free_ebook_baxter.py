import json
import os

DATA_JSON_PATH = 'data.json'
DATA_JS_PATH = 'data.js'

with open(DATA_JSON_PATH, 'r', encoding='utf-8') as f:
    db = json.load(f)

# 1. Check or update category for Free E-Book
cats = db.setdefault('categories', [])
cat_ebook = next((c for c in cats if c['id'] == 'cat_1787673527469'), None)
if cat_ebook:
    cat_ebook['parentId'] = 'ebook'
    cat_ebook['nameJp'] = '無料冊子 (Free e-book)'
    cat_ebook['nameKr'] = '무료책자 (Free e-book)'
    cat_ebook['position'] = 1
    print(f"Found and configured category {cat_ebook['id']}")
else:
    cat_ebook = {
        "id": "cat_1787673527469",
        "parentId": "ebook",
        "nameJp": "無料冊子 (Free e-book)",
        "nameKr": "무료책자 (Free e-book)",
        "icon": None,
        "position": 1
    }
    cats.append(cat_ebook)
    print("Created category cat_1787673527469")

# 2. Rich HTML content for Richard Baxter's Book
baxter_html_content = """<div class="sermon-container" style="max-width: 860px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Segoe UI', sans-serif; color: #1e293b; line-height: 1.8;">

  <!-- Book Header Hero Card -->
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 32px 28px; color: white; margin-bottom: 32px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3);">
    <div style="display: flex; flex-direction: row; gap: 32px; align-items: center; flex-wrap: wrap;">
      <div style="flex-shrink: 0; width: 200px; margin: 0 auto; text-align: center;">
        <img src="images/cover_baxter_call_to_the_unconverted.jpeg" alt="未回心者への呼びかけ - リチャード・バクスター" style="width: 100%; max-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 12px 24px rgba(0,0,0,0.5); border: 2px solid rgba(255,255,255,0.2);">
      </div>
      <div style="flex: 1; min-width: 280px;">
        <div style="display: inline-block; background: #e0a96d; color: #111827; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
          PURITAN CLASSICS · FREE E-BOOK
        </div>
        <h1 style="font-family: 'Playfair Display', Georgia, 'Hiragino Mincho ProN', serif; font-size: 1.85rem; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; line-height: 1.35;">
          未回心者への呼びかけ
        </h1>
        <div style="font-size: 1.1rem; color: #e0a96d; font-weight: 500; margin-bottom: 16px;">
          悔い改めて生きよ (A Call to the Unconverted to Turn and Live)
        </div>
        
        <div style="background: rgba(255,255,255,0.08); border-radius: 8px; padding: 14px 18px; margin-bottom: 18px; border-left: 3px solid #e0a96d; font-size: 0.92rem; color: #e2e8f0; line-height: 1.6;">
          <div style="font-weight: 700; color: #fde047; margin-bottom: 4px;"><i class="fa-solid fa-bible"></i> 主題聖句：エゼキエル書 33章 11節</div>
          「わたしは誓って言う、と主なる神は言われる。わたしは悪人の死を喜ばない。かえって悪人がその道を離れて生きることを喜ぶ。回心せよ、回心せよ、あなたがたの悪い道から。イスラエルの家よ、なぜあなたがたは死のうとするのか。」
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-size: 0.85rem; color: #cbd5e1;">
          <div><strong style="color: #ffffff;">著者：</strong> リチャード・バクスター</div>
          <div><strong style="color: #ffffff;">出版：</strong> Puritan Heritage Books · JRTM</div>
          <div><strong style="color: #ffffff;">分量：</strong> 全183ページ (PDF)</div>
          <div><strong style="color: #ffffff;">原本初版：</strong> 1658年</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Book Overview & Description -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e0a96d; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-book-open" style="color: #e0a96d;"></i> 本書の概要と歴史的意義
    </h2>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      清教徒（ピューリタン）の代表的牧会者リチャード・バクスター（Richard Baxter, 1615–1691）による『未回心者への呼びかけ（A Call to the Unconverted）』は、教会史上で最も多くの魂を回心へと導いた不朽の名著です。1658年の刊行以来、初版だけで2万部以上が読まれ、英語圏にとどまらずフランス語、ドイツ語、オランダ語、さらにはアメリカ先住民族アルゴンキン語に至るまで無数の言語に翻訳されました。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      本書は、エゼキエル書33章11節の御言葉を解き明かし、「人は回心しなければ必ず滅びる」「神は罪人の死を決して喜ばず、彼らが悔い改めて生きることを切に願っておられる」「回心は今直ちになされなければならない」という切実な福音の招きを、胸を衝くような説得力と愛の涙をもって訴えかけます。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 0;">
      この度、日本改革派神学研究所（JRTM）および Puritan Heritage Books の共同企画により、全183ページの原本完全版をどなたでも無料で閲覧・ダウンロードいただける電子書籍（PDF）として公開いたしました。
    </p>
  </div>

  <!-- Table of Contents -->
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px;">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #0284c7; padding-bottom: 10px; margin-top: 0; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-list-ol" style="color: #0284c7;"></i> 目次 (Table of Contents)
    </h2>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: white; border-radius: 8px; padding: 14px 18px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">著者に関する略歴 (Brief Memoir of the Author)</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">初版刊行時にこの『召命』がもたらした驚異的な結実についての記録</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0284c7; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 1</span>
      </div>

      <div style="background: white; border-radius: 8px; padding: 14px 18px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">序文 (Preface to the Reader)</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">キダーミンスターの会衆と未回心の読者に寄せる燃えるような牧会の心</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0284c7; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 7</span>
      </div>

      <div style="background: white; border-radius: 8px; padding: 14px 18px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">説教 第一 (Sermon I)</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">エゼキエル書33:11の教理的開陳：回心のない者は必ず死ぬという神の定めの真実性</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0284c7; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 29</span>
      </div>

      <div style="background: white; border-radius: 8px; padding: 14px 18px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">説教 第二 (Sermon II)</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">神は罪人の死を喜ばれない：恵みの契約における御父の慈愛とキリストの招き</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0284c7; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 61</span>
      </div>

      <div style="background: white; border-radius: 8px; padding: 14px 18px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">説教 第三 (Sermon III)</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">「なぜ死のうとするのか」：罪の愚かさ、回心のための実践的指針、最後の厳粛な祈り</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0284c7; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 107</span>
      </div>
    </div>
  </div>

  <!-- Author Profile -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #475569; padding-bottom: 10px; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-feather-pointed" style="color: #475569;"></i> 著者紹介：リチャード・バクスター (Richard Baxter, 1615–1691)
    </h2>
    <p style="font-size: 0.95rem; line-height: 1.85; color: #334155; margin-bottom: 14px;">
      イギリス・シュロップシャー州ラウトンに生まれる。清教徒革命と王政復古という激動の17世紀イングランドにおいて、キダーミンスター教区の牧師として類まれな牧会と霊的覚醒をもたらしました。彼の徹底した家庭訪問と個別指導によって、町全体の霊的道徳的刷新が起こったことは教会史上の奇跡として知られています。
    </p>
    <p style="font-size: 0.95rem; line-height: 1.85; color: #334155; margin-bottom: 0;">
      主著に『改革派牧師（The Reformed Pastor）』、『聖徒の永遠の安息（The Saints\' Everlasting Rest）』、『キリスト教体系（A Christian Directory）』などがあり、今日に至るまで改革派・清教徒の牧会学と説教学の最高峰として尊敬を集め続けています。
    </p>
  </div>

  <!-- Download Call-to-Action Box -->
  <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border-radius: 12px; padding: 24px; text-align: center; color: white; margin-bottom: 16px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 8px 0; color: #ffffff;">電子書籍（PDF）無料ダウンロード</h3>
    <p style="font-size: 0.9rem; color: #e0f2fe; margin-bottom: 18px; max-width: 600px; margin-left: auto; margin-right: auto;">
      上部の閲覧ボタンまたは下記のダウンロードボタンより、原本PDFファイル（183ページ）を無料で保存し、PCやタブレット・スマートフォンでいつでもお読みいただけます。
    </p>
    <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
      <a href="pdf/A_Call_to_the_Unconverted_Baxter.pdf" target="_blank" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.5);">
        <i class="fa-solid fa-eye"></i> オンラインで全編閲覧 (View PDF)
      </a>
      <a href="pdf/A_Call_to_the_Unconverted_Baxter.pdf" download style="background: #f59e0b; color: #111827; padding: 12px 26px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.25);">
        <i class="fa-solid fa-download"></i> PDFを直接保存 (Download PDF)
      </a>
    </div>
  </div>

</div>"""

# 3. Add or update article for Richard Baxter's Book
arts = db.setdefault('articles', [])

# Adjust positions of other tract articles to 2, 3, 4, 5
tract_order = {
    'art_tract_1': 2,
    'art_tract_2': 3,
    'art_tract_3': 4,
    'art_tract_4': 5
}
for a in arts:
    if a['id'] in tract_order:
        a['position'] = tract_order[a['id']]

art_baxter = next((a for a in arts if a['id'] == 'art_ebook_baxter_call_to_unconverted'), None)

if not art_baxter:
    art_baxter = {
        "id": "art_ebook_baxter_call_to_unconverted",
        "categoryId": "cat_1787673527469",
        "title": "未回心者への呼びかけ (A Call to the Unconverted)",
        "author": "リチャード・バクスター (Richard Baxter)",
        "createdAt": "2026-10-22",
        "content": baxter_html_content,
        "scripture": "エゼキエル書 33:11",
        "videoUrl": "",
        "photoUrl": "images/cover_baxter_call_to_the_unconverted.jpeg",
        "pdfUrl": "pdf/A_Call_to_the_Unconverted_Baxter.pdf",
        "views": 0,
        "position": 1
    }
    arts.append(art_baxter)
    print("Added new article art_ebook_baxter_call_to_unconverted to cat_1787673527469")
else:
    art_baxter['categoryId'] = "cat_1787673527469"
    art_baxter['title'] = "未回心者への呼びかけ (A Call to the Unconverted)"
    art_baxter['author'] = "リチャード・バクスター (Richard Baxter)"
    art_baxter['createdAt'] = "2026-10-22"
    art_baxter['content'] = baxter_html_content
    art_baxter['scripture'] = "エゼキエル書 33:11"
    art_baxter['photoUrl'] = "images/cover_baxter_call_to_the_unconverted.jpeg"
    art_baxter['pdfUrl'] = "pdf/A_Call_to_the_Unconverted_Baxter.pdf"
    art_baxter['position'] = 1
    print("Updated existing article art_ebook_baxter_call_to_unconverted")

print(f"Total articles: {len(arts)}")

# 4. Save data.json
with open(DATA_JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(db, f, ensure_ascii=False, indent=2)
print("Saved data.json successfully.")

# 5. Save data.js
with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
    f.write("window.MASTER_SITE_DATABASE = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n")
print("Saved data.js successfully.")
