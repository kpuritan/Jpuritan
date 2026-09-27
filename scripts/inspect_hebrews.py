import sys
import json
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

# Find Hebrews category
heb_cats = [c for c in data['categories'] if 'heb' in c.get('id', '').lower() or '히브리' in c.get('nameKr', '') or 'ヘブル' in c.get('nameJp', '')]
print('Hebrews categories:', heb_cats)

heb_cat_ids = {c['id'] for c in heb_cats}
heb_sub_cats = {c['id'] for c in data['categories'] if c.get('parentId') in heb_cat_ids}
all_heb_cat_ids = heb_cat_ids | heb_sub_cats

print('All Hebrews category IDs:', all_heb_cat_ids)

heb_articles = [a for a in data['articles'] if a.get('categoryId') in all_heb_cat_ids or '히브리' in a.get('title', '') or 'ヘブル' in a.get('title', '')]
print(f'Total Hebrews articles found: {len(heb_articles)}')

# Hangul regex
hangul_re = re.compile(r'[\uac00-\ud7a3]')

for i, a in enumerate(heb_articles):
    title = a.get('title', '')
    content = a.get('content', '')
    hangul_in_title = len(hangul_re.findall(title))
    hangul_in_content = len(hangul_re.findall(content))
    print(f"[{i+1:02d}] ID={a['id']} | Cat={a.get('categoryId')} | Title={title}")
    print(f"     Scripture: {a.get('scripture')} | Author: {a.get('author')}")
    print(f"     Hangul count: Title={hangul_in_title}, Content={hangul_in_content}, Content length={len(content)}")
    if hangul_in_content > 0:
        # Show a sample of Korean text in content
        korean_matches = hangul_re.findall(content)
        print(f"     Korean sample in content: {''.join(korean_matches[:30])}...")
    print("-" * 60)

# Also check scripts for Hebrews
print("\nChecking scripts related to Hebrews:")
for sf in os.listdir('scripts'):
    if 'heb' in sf.lower():
        print("  -", sf)

# Check folders
print("\nChecking directories in workspace for Hebrews:")
for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    for d in dirs:
        if '히브리' in d or 'heb' in d.lower() or 'ヘブル' in d:
            print("  Dir:", os.path.join(root, d))
    for f in files:
        if '히브리' in f or 'heb' in f.lower() or 'ヘブル' in f:
            print("  File:", os.path.join(root, f))
