import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

hangul_re = re.compile(r'[\uac00-\ud7a3]')

heb_cats = {c['id'] for c in data['categories'] if 'heb' in c.get('id', '').lower() or '히브리' in c.get('nameKr', '') or 'ヘブル' in c.get('nameJp', '')}
heb_sub_cats = {c['id'] for c in data['categories'] if c.get('parentId') in heb_cats}
all_heb_cats = heb_cats | heb_sub_cats

for a in data['articles']:
    if a.get('categoryId') in all_heb_cats or '히브리' in a.get('title', '') or 'ヘブル' in a.get('title', '') or 'heb' in a.get('id', '').lower():
        title = a.get('title', '')
        content = a.get('content', '')
        k_title = len(hangul_re.findall(title))
        k_content = len(hangul_re.findall(content))
        print(f"Article: {a['id']} | Category: {a.get('categoryId')} | Korean in Title: {k_title} | Korean in Content: {k_content}")
