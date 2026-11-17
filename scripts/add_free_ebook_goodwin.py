import json
import os
import sys

base_dir = "/Users/baekahyun/Documents/공부/개혁주의/전도 프로젝트/한국청교도연구소/JRTM/JRTM Antigravity"
data_json_path = os.path.join(base_dir, "data.json")
data_js_path = os.path.join(base_dir, "data.js")

with open(data_json_path, "r", encoding="utf-8-sig") as f:
    data = json.load(f)

# Shift tracts so ebook sequence is 1..17 and tracts 20..23
for a in data["articles"]:
    if a.get("id") == "art_tract_1":
        a["position"] = 20
    elif a.get("id") == "art_tract_2":
        a["position"] = 21
    elif a.get("id") == "art_tract_3":
        a["position"] = 22
    elif a.get("id") == "art_tract_4":
        a["position"] = 23

# Check if art_ebook_goodwin_holy_ghost already exists
existing = next((a for a in data["articles"] if a.get("id") == "art_ebook_goodwin_holy_ghost"), None)

content_html = """<div class="sermon-container" style="max-width: 860px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Segoe UI', sans-serif; color: #1e293b; line-height: 1.8;">

  <!-- Book Header Hero Card -->
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 32px 28px; color: white; margin-bottom: 32px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3);">
    <div style="display: flex; flex-direction: row; gap: 32px; align-items: center; flex-wrap: wrap;">
      <div style="flex-shrink: 0; width: 200px; margin: 0 auto; text-align: center;">
        <img src="images/cover_goodwin_holy_ghost.png?v=20261117_01" alt="改革派聖霊論 - トマス・グッドウィン" style="width: 100%; max-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 12px 24px rgba(0,0,0,0.5); border: 2px solid rgba(255,255,255,0.2);">
      </div>
      <div style="flex: 1; min-width: 280px;">
        <div style="display: inline-block; background: #c5a059; color: #111827; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
          PURITAN & REFORMED CLASSICS · FREE E-BOOK
        </div>
        <h1 style="font-family: 'Playfair Display', Georgia, 'Hiragino Mincho ProN', serif; font-size: 1.85rem; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; line-height: 1.35;">
          改革派聖霊論
        </h1>
        <div style="font-size: 1.05rem; color: #e0a96d; font-weight: 600; margin-bottom: 16px;">
          『私たちの救いにおける聖霊の御業』<br>
          <span style="font-size: 0.88rem; font-weight: 400; color: #94a3b8;">(The Work of the Holy Ghost in Our Salvation)</span>
        </div>
        
        <div style="background: rgba(255,255,255,0.08); border-radius: 8px; padding: 14px 18px; margin-bottom: 18px; border-left: 3px solid #c5a059; font-size: 0.92rem; color: #e2e8f0; line-height: 1.6;">
          <div style="font-weight: 700; color: #fde047; margin-bottom: 4px;"><i class="fa-solid fa-bible"></i> 主題聖句：ヨハネの福音書 14章 26節</div>
          「しかし助け主、すなわち、父がわたしの名によってお遣わしになる聖霊は、あなたがたにすべてのことを教え、わたしがあなたがたに話したすべてのことを思い起こさせてくださいます。」
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-size: 0.85rem; color: #cbd5e1;">
          <div><strong style="color: #ffffff;">著者：</strong> トマス・グッドウィン</div>
          <div><strong style="color: #ffffff;">出版：</strong> Puritan Heritage Books · JRTM</div>
          <div><strong style="color: #ffffff;">分量：</strong> 全470ページ (PDF完全大著)</div>
          <div><strong style="color: #ffffff;">原著初版：</strong> 1704年 (著作集第6巻)</div>
          <div><strong style="color: #ffffff;">分類：</strong> 聖霊論 · 救済論 · 再生論 · 組織神学</div>
        </div>

        <div style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="pdf/The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" target="_blank" style="background: #c5a059; color: #0f172a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(197, 160, 89, 0.3);">
            <i class="fa-solid fa-book-open"></i> オンラインで全編閲覧 (View PDF)
          </a>
          <a href="pdf/The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" download="The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" style="background: rgba(255,255,255,0.15); color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.3);">
            <i class="fa-solid fa-download"></i> PDFダウンロード
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Book Overview & Description -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-book-open" style="color: #c5a059;"></i> 本書の概要と歴史的意義
    </h2>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      17世紀英国ピューリタン神学の最高峰の一人、トマス・グッドウィン（Thomas Goodwin, D.D., 1600–1680）による不朽の名著『私たちの救いにおける聖霊の御業（The Work of the Holy Ghost in Our Salvation）』の日本語完全版電子書籍（全十巻・全470ページ大著）です。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 16px;">
      同時代を生きた盟友ジョン・オーウェンの『聖霊論（Pneumatologia）』と並び立ち、改革派・ピューリタン神学史上における聖霊論の双璧として不滅の輝きを放ち続けています。オーウェンが聖霊の神性、三位一体の経綸、全歴史を通じた包括的働きを組織神学的に堅固に論証したのに対し、グッドウィンは選民の魂の内で行われる救いの御業（恩恵の秩序、霊的死からの新生、回心の三段階、聖霊の位格的内住、内在的聖潔）を、聖書釈義と驚嘆すべき霊的・心理的洞察をもって極めて精緻に解き明かしました。
    </p>
    <p style="font-size: 0.98rem; line-height: 1.85; color: #334155; margin-bottom: 0;">
      聖霊の御業を感情的な高揚や単なる超自然体験に狭める現代の風潮に対し、魂の本性の根底的造り変えとしての新生、自然の良心の光と真の恵みの本質的相違、一時的信仰者と真の信者の差異など、自己吟味と救いの確信に不可欠な聖書の真理を重厚かつ温かく提示する記念碑的傑作です。
    </p>
  </div>

  <!-- Book Table of Contents / Outline -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-list-check" style="color: #c5a059;"></i> 本書の全体構成と主要論点 (全十巻)
    </h2>
    <div style="display: flex; flex-direction: column; gap: 12px;">

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #1e3a8a; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第一巻：救いにおける聖霊の全御業の概要</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">ヨハネ福音書14〜16章に基づく全般的観察／三位一体の神としての聖霊への賛美／信徒の内における聖霊の位格的内住</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #1e3a8a; font-weight: bold; background: #dbeafe; padding: 2px 8px; border-radius: 4px;">p. 10</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #047857; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第二巻：選民の二つの状態――生まれながらの状態と恵みの状態</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">エペソ書2章に基づく罪と怒りの本性／霊的死の全的無能力／恵みの状態への移行における新生の絶対的不可欠性</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #047857; font-weight: bold; background: #d1fae5; padding: 2px 8px; border-radius: 4px;">p. 69</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #b45309; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第三巻：和解の教理から論証される再生の必然性</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">コロサイ書1章21節に基づく敵意の打破／神との平和と親しい交わりのための本性の根底的変化</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #b45309; font-weight: bold; background: #fef3c7; padding: 2px 8px; border-radius: 4px;">p. 133</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #4338ca; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第四巻：神から生まれた者としての再生における聖霊の御業</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">ヨハネ福音書1章13節および第一の手紙に基づく神の種／霊的知性と意志の超自然的新生／神の似姿への回復</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #4338ca; font-weight: bold; background: #e0e7ff; padding: 2px 8px; border-radius: 4px;">p. 177</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #0f766e; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第五巻：新しい被造物および恒常的原理としての私たちの内における聖霊の御業</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">コリント第二5章17節／一過性の感情を超えた魂の内なる恒久的な霊的生命の原理／新しい性向と霊的適合性</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0f766e; font-weight: bold; background: #ccfbf1; padding: 2px 8px; border-radius: 4px;">p. 228</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #be123c; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第六巻：自然の良心の光より優れた高次な原理としての恵みの御業</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">一般恩恵と特別恩恵の峻別／良心の恐れ・自責と真の恵みによる悔い改めの本質的差異／偽りの信仰に対する警告</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #be123c; font-weight: bold; background: #ffe4e6; padding: 2px 8px; border-radius: 4px;">p. 269</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #6d28d9; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第七巻：一時的信仰者と真に召された聖徒との相違</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">ヘブル書6章・ルカ福音書8章に基づく石地の心／一時的喜びと根のない信仰の解剖／選民にのみ与えられる救いの実体</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #6d28d9; font-weight: bold; background: #ede9fe; padding: 2px 8px; border-radius: 4px;">p. 340</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #c2410c; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第八巻：再生の三つの部分――罪の自覚、へりくだり、およびキリストへの信仰</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">律法による罪の徹底的自覚／自己義の粉砕と真のへりくだり／全き信頼をもってキリストにすがる生きた信仰の成立</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #c2410c; font-weight: bold; background: #ffedd5; padding: 2px 8px; border-radius: 4px;">p. 367</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #0369a1; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第九巻：再生における神の恵みの極めて豊かな富と偉大な御力</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">エペソ書1〜2章／キリストを死者の中から蘇らせた無限の御力／神の主権的恩恵の不可抗力性と確実性</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #0369a1; font-weight: bold; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">p. 411</span>
      </div>

      <div style="background: #f8fafc; border-radius: 8px; padding: 14px 18px; border-left: 3px solid #854d0e; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #0f172a; font-size: 1rem;">第十巻：内在的聖潔の二大特質――最高善としての神と最高の目的としての神の栄光</strong>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 2px;">神ご自身を魂の「最高善（Summum Bonum）」として愛する心／自己愛を超越して神の栄光を究極目的とする真の敬虔</div>
        </div>
        <span style="font-family: monospace; font-size: 0.9rem; color: #854d0e; font-weight: bold; background: #fef9c3; padding: 2px 8px; border-radius: 4px;">p. 442</span>
      </div>

    </div>
  </div>

  <!-- Author Profile -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #c5a059; padding-bottom: 10px; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
      <i class="fa-solid fa-user-pen" style="color: #c5a059;"></i> 著者紹介：トマス・グッドウィン (Thomas Goodwin, D.D., 1600–1680)
    </h2>
    <p style="font-size: 0.95rem; line-height: 1.8; color: #334155; margin-bottom: 14px;">
      17世紀英国ピューリタン神学を代表する最高峰の神学者・説教者。ケンブリッジ大学クライスト・カレッジ、カタリン・ホールで学び、リチャード・シブスの感化を通じて深い回心を経験しました。
    </p>
    <p style="font-size: 0.95rem; line-height: 1.8; color: #334155; margin-bottom: 14px;">
      ウェストミンスター会議では会衆派（独立派）の有力指導者（「五人の異議申し立て者」の一人）として歴史的貢献を果たし、ピューリタン革命期にはオックスフォード大学モードリン・カレッジ学長を務めました。
    </p>
    <p style="font-size: 0.95rem; line-height: 1.8; color: #334155; margin-bottom: 0;">
      彼の神学は、卓越した聖書釈義と学識に加え、「あたかもアブラハムの懐に入っているかのように主イエスの心を知り尽くした」と讃えられるほどの深い霊性と温かいキリストへの愛に満ちています。本書『私たちの救いにおける聖霊の御業』をはじめ、『キリストの心』、『エペソ人への手紙講解』など、遺された大著は今なお世界中の改革派教会に豊かな祝福を与え続けています。
    </p>
  </div>

  <!-- Download Call-to-Action Box -->
  <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 12px; padding: 24px; text-align: center; color: white; margin-bottom: 16px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.4); border: 1px solid rgba(197, 160, 89, 0.3);">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 8px 0; color: #fde047;">電子書籍（PDF）無料ダウンロード</h3>
    <p style="font-size: 0.9rem; color: #e2e8f0; margin-bottom: 18px; max-width: 600px; margin-left: auto; margin-right: auto;">
      上部の閲覧ボタンまたは下記のダウンロードボタンより、原本完全版PDFファイル（全十巻・全470ページ）を無料で保存し、PCやタブレット・スマートフォンでいつでもお読みいただけます。
    </p>
    <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
      <a href="pdf/The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" target="_blank" style="background: rgba(255,255,255,0.15); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.4);">
        <i class="fa-solid fa-eye"></i> オンラインで全編閲覧 (View PDF)
      </a>
      <a href="pdf/The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" download="The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf" style="background: #c5a059; color: #0f172a; padding: 12px 26px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
        <i class="fa-solid fa-download"></i> PDFを直接保存 (Download PDF)
      </a>
    </div>
  </div>

</div>"""

goodwin_article = {
    "id": "art_ebook_goodwin_holy_ghost",
    "categoryId": "cat_1787673527469",
    "title": "改革派聖霊論 (私たちの救いにおける聖霊の御業)",
    "author": "トマス・グッドウィン (Thomas Goodwin)",
    "scripture": "ヨハネの福音書 14:26",
    "videoUrl": "",
    "photoUrl": "images/cover_goodwin_holy_ghost.png?v=20261117_01",
    "pdfUrl": "pdf/The_Work_of_the_Holy_Ghost_in_Our_Salvation_Thomas_Goodwin.pdf",
    "createdAt": "2026-11-17",
    "views": 0,
    "position": 17,
    "content": content_html
}

if existing:
    existing.update(goodwin_article)
    print("Updated existing Goodwin ebook article.")
else:
    data["articles"].append(goodwin_article)
    print("Appended new Goodwin ebook article.")

# Write back data.json
with open(data_json_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Sync to data.js
json_str = json.dumps(data, ensure_ascii=False, indent=2)
with open(data_js_path, "w", encoding="utf-8") as f:
    f.write('const initialData = ' + json_str + ';\n')
    f.write('if (typeof window !== "undefined") {\n')
    f.write('  window.SITE_DATA = initialData;\n')
    f.write('  window.MASTER_SITE_DATABASE = initialData;\n')
    f.write('}\n')
    f.write('if (typeof module !== "undefined") {\n')
    f.write('  module.exports = initialData;\n')
    f.write('}\n')

print("Successfully written data.json and synced data.js!")
