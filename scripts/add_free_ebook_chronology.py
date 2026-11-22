import json
import os
import sys

base_dir = "/Users/baekahyun/Documents/공부/개혁주의/전도 프로젝트/한국청교도연구소/JRTM/JRTM Antigravity"
data_json_path = os.path.join(base_dir, "data.json")
data_js_path = os.path.join(base_dir, "data.js")

with open(data_json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Shift existing theology ebook articles so position 1 is free
for a in data["articles"]:
    if a.get("categoryId") == "cat_ebook_theology":
        a["position"] = a.get("position", 1) + 1

# Check if article already exists
existing = next((a for a in data["articles"] if a.get("id") == "art_ebook_reformed_orthodox_theology_chronology"), None)

content_html = """<div class="sermon-container" style="max-width: 860px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Segoe UI', sans-serif; color: #1e293b; line-height: 1.8;">

  <!-- Book Header Hero Card -->
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 32px 28px; color: white; margin-bottom: 32px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3);">
    <div style="display: flex; flex-direction: row; gap: 32px; align-items: center; flex-wrap: wrap;">
      <div style="flex-shrink: 0; width: 200px; margin: 0 auto; text-align: center;">
        <img src="images/cover_reformed_orthodox_theology_chronology.jpeg?v=20261123_01" alt="改革派正統神学 年代記" style="width: 100%; max-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 12px 24px rgba(0,0,0,0.5); border: 2px solid rgba(255,255,255,0.2);">
      </div>
      <div style="flex: 1; min-width: 280px;">
        <div style="display: inline-block; background: #c5a059; color: #111827; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
          REFORMED ORTHODOX THEOLOGY · FREE E-BOOK
        </div>
        <h1 style="font-family: 'Playfair Display', Georgia, 'Hiragino Mincho ProN', serif; font-size: 1.85rem; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; line-height: 1.35;">
          改革派正統神学 年代記
        </h1>
        <div style="font-size: 1.05rem; color: #e0a96d; font-weight: 600; margin-bottom: 16px;">
          初代教会から現代までの神学的系譜と誤謬への応答<br>
          <span style="font-size: 0.88rem; font-weight: 400; color: #94a3b8;">(Chronology of Reformed Orthodox Theology: Theological Genealogy and Responses to Errors)</span>
        </div>
        
        <div style="background: rgba(255,255,255,0.08); border-radius: 8px; padding: 14px 18px; margin-bottom: 18px; border-left: 3px solid #c5a059; font-size: 0.92rem; color: #e2e8f0; line-height: 1.6;">
          <div style="font-weight: 700; color: #fde047; margin-bottom: 4px;"><i class="fa-solid fa-bible"></i> 主題聖句：ユダの手紙 1章 3節</div>
          「愛する者たちよ。私は、私たちが共有している救いについて、あなたがたに書き送ろうと熱心に願っていましたが、聖徒たちにひとたび伝えられた信仰のために戦うよう、皆さんにお勧めしなければならなくなりました。」
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-size: 0.85rem; color: #cbd5e1;">
          <div><strong style="color: #ffffff;">編纂：</strong> 日本改革派神学研究所 (JRTM)</div>
          <div><strong style="color: #ffffff;">出版：</strong> Puritan Heritage Books · JRTM</div>
          <div><strong style="color: #ffffff;">分量：</strong> 全43ページ (年代別・主題別チャート完全版)</div>
          <div><strong style="color: #ffffff;">範囲：</strong> 354年〜現代 (81項目・9時代・9主題・11信条)</div>
          <div><strong style="color: #ffffff;">分類：</strong> 歴史神学 · 教会史 · 改革派正統主義 · 年代記</div>
        </div>

        <div style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="pdf/Chronology_of_Reformed_Orthodox_Theology.pdf" target="_blank" style="background: #c5a059; color: #0f172a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(197, 160, 89, 0.3);">
            <i class="fa-solid fa-book-open"></i> オンラインで全編閲覧 (View PDF)
          </a>
          <a href="pdf/Chronology_of_Reformed_Orthodox_Theology.pdf" download="Chronology_of_Reformed_Orthodox_Theology.pdf" style="background: rgba(255,255,255,0.15); color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.3);">
            <i class="fa-solid fa-download"></i> PDFダウンロード
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Book Overview & Significance -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-book-open" style="color: #c5a059;"></i> 本書の概要と歴史的意義
    </h2>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      『改革派正統神学 年代記（Chronology of Reformed Orthodox Theology）』は、初代教会の恵み論の確立から、16世紀宗教改革、17世紀改革派正統主義とピューリタニズム、大覚醒のリバイバル、19世紀旧プリンストンの告白主義、そして20世紀以降の現代に至るまでの神学的系譜と主要な誤謬への応答を、極めて体系的かつ視覚的に整理した記念碑的チャート・ブックレットです。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      聖書の恵み論（恩恵の主権）と宗教改革の義認の教理を中心軸に据え、教会政治の相違を超えて神学的一致を優先。アウグスティヌスに始まる恩恵論から、カルヴァン、ピューリタン諸神学者、ドイツ敬虔主義、特殊バプテスト、大覚醒のジョナサン・エドワーズ、旧プリンストン（ホッジ、ウォーフィールド）、そしてマッケンらのウェストミンスター神学校に至る「生きた正統信仰（Living Orthodoxy）」の継承線を鮮やかに描き出しています。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 0;">
      さらに、ペラギウス主義、アルミニウス主義、ソッツィーニ主義、反律法主義、自由主義神学、新正統主義、パウロの新視点（NPP）、新律法主義、教会成長学の実用主義などの諸誤謬に対し、改革派正統神学がいかに聖書と信仰告白に基づいて応答してきたかを明解に提示しています。
    </p>
  </div>

  <!-- Book Table of Contents / Outline -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-list-check" style="color: #c5a059;"></i> 本書の全体構成と主要内容
    </h2>
    <div style="display: flex; flex-direction: column; gap: 12px;">

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #1e3a8a; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">はじめに：文書の範囲と全体の流れ</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">神学的選定基準／生きた正統と形式主義の弁別／教派を超えた恵み論の連帯と正統継承線</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #1e3a8a; font-weight: bold; background: #dbeafe; padding: 2px 8px; border-radius: 4px;">p. 2</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #0369a1; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第1部：年代別チャート（全9時代・81項目）</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">
            ① 初代教会と恵み論の土台（354-1415）<br>
            ② 宗教改革と改革派の形成（1483-1602）<br>
            ③ 改革派正統主義と信仰告白の時代（1576-1732）<br>
            ④ 会衆派と特殊バプテストの改革派継承（1599-1892）<br>
            ⑤ ドイツ敬虔主義と改革派神学の接点（1635-1769）<br>
            ⑥ 大覚醒とメソジスト内の改革派救済論（1673-1794）<br>
            ⑦ 近代告白主義と神学的自由主義への対応（1772-1949）<br>
            ⑧ 20世紀の改革派正統神学（1895-現在）<br>
            ⑨ 現代の主要論争（1900-現在）
          </div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0369a1; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 4</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #b45309; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第2部：神学主題別チャート（全9主題・分布と一覧）</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">
            聖書論（無謬性・充足性）／神論・三位一体論／人間論・罪論／キリスト論・贖罪論／救済論・恵み論（五箇条）／教会論・礼拝／契約神学（行為契約・恵みの契約）／終末論／敬虔と実践
          </div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #b45309; font-weight: bold; background: #fef3c7; padding: 2px 8px; border-radius: 4px;">p. 30</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #7c3aed; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">付録：信条・代表文献・除外潮流・主要な誤謬と応答</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">
            歴史的11大信条一覧／各時代の主要代表文献／除外した神学的潮流とその根拠／主要な異端・誤謬（ペラギウス、アルミニウス、ソッツィーニ、自由主義、新正統主義、NPP等）に対する改革派の核心的応答
          </div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #7c3aed; font-weight: bold; background: #ede9fe; padding: 2px 8px; border-radius: 4px;">p. 39</span>
      </div>

    </div>
  </div>

  <!-- Theological Principles -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-scale-balanced" style="color: #c5a059;"></i> 本書の編集方針と神学的原則
    </h2>
    <ul style="font-size: 0.95rem; line-height: 1.85; color: #334155; margin: 0; padding-left: 20px;">
      <li style="margin-bottom: 10px;">
        <strong>聖書の恵み論と義認の教理を中心軸：</strong> 教会政治の制度的形態よりも、神の主権的恵みと唯独信仰による義認の教理的一致を最重要基準として編纂されています。
      </li>
      <li style="margin-bottom: 10px;">
        <strong>「生きた正統（Living Orthodoxy）」の強調：</strong> 正統主義を形式的な教条主義に堕落させず、回心、愛、聖化、実践的敬虔の実を結ぶ「生きた信仰」の系譜を追跡しています。
      </li>
      <li style="margin-bottom: 10px;">
        <strong>歴史的連続性の重視：</strong> 初代教会のアウグスティヌスから宗教改革、ピューリタン、そして現代のウェストミンスター神学校に至る正統神学の継承を一望できます。
      </li>
      <li style="margin-bottom: 0;">
        <strong>現代の霊的混迷に対する明確な道標：</strong> 教会の世俗化や実用主義、神学的妥協が蔓延する現代において、不変の聖書的真理を再確認するための決定的な手引きとなります。
      </li>
    </ul>
  </div>

  <!-- Download Call-to-Action Box -->
  <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 12px; padding: 24px; text-align: center; color: white; margin-bottom: 16px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.4); border: 1px solid rgba(197, 160, 89, 0.3);\">\n    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 8px 0; color: #fde047;">電子書籍（PDF）無料ダウンロード</h3>\n    <p style="font-size: 0.9rem; color: #e2e8f0; margin-bottom: 18px; max-width: 600px; margin-left: auto; margin-right: auto;">\n      上部の閲覧ボタンまたは下記のダウンロードボタンより、完全版PDFファイル（全43ページ）を無料で保存し、PCやタブレット・スマートフォンでいつでもお読みいただけます。\n    </p>\n    <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">\n      <a href="pdf/Chronology_of_Reformed_Orthodox_Theology.pdf" target="_blank" style="background: rgba(255,255,255,0.15); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.4);">\n        <i class="fa-solid fa-eye"></i> オンラインで全編閲覧 (View PDF)\n      </a>\n      <a href="pdf/Chronology_of_Reformed_Orthodox_Theology.pdf" download="Chronology_of_Reformed_Orthodox_Theology.pdf" style="background: #c5a059; color: #0f172a; padding: 12px 26px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">\n        <i class="fa-solid fa-download"></i> PDFを直接保存 (Download PDF)\n      </a>\n    </div>\n  </div>\n\n</div>"""

article_obj = {
    "id": "art_ebook_reformed_orthodox_theology_chronology",
    "categoryId": "cat_ebook_theology",
    "title": "改革派正統神学 年代記 (Chronology of Reformed Orthodox Theology)",
    "author": "日本改革派神学研究所 (JRTM)",
    "createdAt": "2026-11-23",
    "updatedAt": "2026-11-23",
    "content": content_html,
    "scripture": "ユダの手紙 1:3",
    "videoUrl": "",
    "photoUrl": "images/cover_reformed_orthodox_theology_chronology.jpeg?v=20261123_01",
    "pdfUrl": "pdf/Chronology_of_Reformed_Orthodox_Theology.pdf?v=20261123_01",
    "views": 0,
    "position": 1
}

if existing:
    existing.update(article_obj)
    print("Updated existing article art_ebook_reformed_orthodox_theology_chronology")
else:
    data["articles"].insert(0, article_obj)
    print("Added new article art_ebook_reformed_orthodox_theology_chronology at position 1")

# Save data.json
with open(data_json_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved data.json successfully.")

# Save data.js
with open(data_js_path, "w", encoding="utf-8") as f:
    f.write("window.MASTER_SITE_DATABASE = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
print("Saved data.js successfully.")
