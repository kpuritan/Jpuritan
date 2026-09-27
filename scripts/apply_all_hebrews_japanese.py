import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

from heb_trans_03_to_05 import sermon_03_html, sermon_04_html, sermon_05_html
from heb_trans_06_to_08 import sermon_06_html, sermon_07_html, sermon_08_html
from heb_trans_09_to_11 import sermon_09_html, sermon_10_html, sermon_11_html
from heb_trans_12_to_13 import sermon_12_html, sermon_13_html

translations = {
    'art_traill_heb_04_03': {
        'title': 'ヘブル人への手紙 4章16節 説教第3篇：恵みの御座を軽んじ、先延ばしにする罪 ― 霊的な怠慢と絶望の克服、そして良心の癒やし',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_03_html
    },
    'art_traill_heb_04_04': {
        'title': 'ヘブル人への手紙 4章16節 説教第4篇：信仰によって取る聖なる大胆さの本質 ― 肉的な放縦の戒めと真の信頼の基礎',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_04_html
    },
    'art_traill_heb_04_05': {
        'title': 'ヘブル人への手紙 4章16節 説教第5篇：大胆さの唯一の岩となられる大祭司キリスト ― 主の御人格と十字架の血の無限の価値',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_05_html
    },
    'art_traill_heb_04_06': {
        'title': 'ヘブル人への手紙 4章16節 説教第6篇：大祭司の復活と昇天、そして天の至聖所における永遠の執り成し',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_06_html
    },
    'art_traill_heb_04_07': {
        'title': 'ヘブル人への手紙 4章16節 説教第7篇：憐れみを得るために近づく ― 罪人の絶対的悲惨と無条件の恵みの賜物',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_07_html
    },
    'art_traill_heb_04_08': {
        'title': 'ヘブル人への手紙 4章16節 説教第8篇：折にかなった助けの恵みを見出す ― 恵みの三つの次元と供給の源泉',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_08_html
    },
    'art_traill_heb_04_09': {
        'title': 'ヘブル人への手紙 4章16節 説教第9篇：祈りの妨げと不信仰の克服 ― 約束の豊かさと祈りの答えを期待する信仰',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_09_html
    },
    'art_traill_heb_04_10': {
        'title': 'ヘブル人への手紙 4章16節 説教第10篇：特別な恵みを必要とする時 (1) ― 誘惑の日と霊的衰退の夜を通過する時',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_10_html
    },
    'art_traill_heb_04_11': {
        'title': 'ヘブル人への手紙 4章16節 説教第11篇：特別な恵みを必要とする時 (2) ― 霊的な喜びの季節と厳しい苦難の時',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_11_html
    },
    'art_traill_heb_04_12': {
        'title': 'ヘブル人への手紙 4章16節 説教第12篇：特別な恵みを必要とする時 (3) ― 苦難の炉と重大な選択の分かれ道',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_12_html
    },
    'art_traill_heb_04_13': {
        'title': 'ヘブル人への手紙 4章16節 説教第13篇：恵みの御座から栄光の御座へ ― 最後の勝利と永遠の至聖所の完成',
        'scripture': 'ヘブル人への手紙 4章16節',
        'author': 'ロバート・トレイル (Robert Traill)',
        'content': sermon_13_html
    }
}

# Load data.json
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Loaded data.json with {len(data['articles'])} articles.")

# Update articles
for aid, t_data in translations.items():
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        art['title'] = t_data['title']
        art['scripture'] = t_data['scripture']
        art['author'] = t_data['author']
        art['content'] = t_data['content']
        print(f"Updated article: {aid}")
    else:
        print(f"Warning: article {aid} not found in data.json")

# Also check Sermon 1 and 2 titles and authors for consistency
art1 = next((a for a in data['articles'] if a['id'] == 'art_traill_heb_04_01'), None)
if art1:
    art1['title'] = 'ヘブル人への手紙 4章16節 説教第1篇：恵みの御座とは何か ― 御座の本質と、礼拝者が投げかけるべき四つの重要な問い'
    art1['scripture'] = 'ヘブル人への手紙 4章16節'
    art1['author'] = 'ロバート・トレイル (Robert Traill)'

art2 = next((a for a in data['articles'] if a['id'] == 'art_traill_heb_04_02'), None)
if art2:
    art2['title'] = 'ヘブル人への手紙 4章16節 説教第2篇：恵みの御座に近づくという普遍的な招き ― すべての罪人の義務と、最も歓迎される者たち'
    art2['scripture'] = 'ヘブル人への手紙 4章16節'
    art2['author'] = 'ロバート・トレイル (Robert Traill)'

# Verify hangul in all Hebrews articles
hangul_re = re.compile(r'[\uac00-\ud7a3]')
heb_cats = {c['id'] for c in data['categories'] if 'heb' in c.get('id', '').lower() or '히브리' in c.get('nameKr', '') or 'ヘブル' in c.get('nameJp', '')}
heb_sub_cats = {c['id'] for c in data['categories'] if c.get('parentId') in heb_cats}
all_heb_cats = heb_cats | heb_sub_cats

print("\n--- Verifying Hebrews Articles in Database ---")
all_clean = True
for a in data['articles']:
    if a.get('categoryId') in all_heb_cats or 'heb' in a.get('id', '').lower():
        k_t = len(hangul_re.findall(a.get('title', '')))
        k_c = len(hangul_re.findall(a.get('content', '')))
        print(f"[{a['id']}] Title Hangul: {k_t} | Content Hangul: {k_c} | Title: {a.get('title')[:35]}")
        if k_t > 0 or k_c > 0:
            all_clean = False

print(f"\nAll Hebrews articles 100% in Japanese (0 Hangul): {all_clean}")

if all_clean:
    # Save data.json
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Saved updated data.json.")

    # Save data.js
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('window.MASTER_SITE_DATABASE = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    print("Synced data.js successfully.")
