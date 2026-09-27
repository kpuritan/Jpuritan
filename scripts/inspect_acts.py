import sys
import json
import os

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))
acts_cats = {c['id'] for c in data['categories'] if c.get('parentId') == 'cat_1787326106992' or c.get('id') == 'cat_1787326106992'}
acts_arts = [a for a in data['articles'] if a.get('categoryId') in acts_cats]

print(f"Total acts articles in data.json: {len(acts_arts)}")

for i, a in enumerate(acts_arts):
    content = a.get('content', '')
    has_html = '<div' in content or '<h3' in content or '<p' in content
    has_md = content.startswith('# ') or '### ' in content
    has_box = 'sermon-header-box' in content or 'sermon-meta-box' in content or 'sermon-content' in content
    print(f"{i+1:02d}: ID={a['id']} | Cat={a.get('categoryId')} | Title={a.get('title')} | Len={len(content)} | HTML={has_html} MD={has_md} Box={has_box}")

md_files = sorted(os.listdir('강해설교/사도행전'))
print(f"\nTotal md files in 강해설교/사도행전: {len(md_files)}")
for i, f in enumerate(md_files):
    filepath = os.path.join('강해설교/사도행전', f)
    with open(filepath, 'r', encoding='utf-8') as fp:
        c = fp.read()
    print(f"{i+1:02d}: File={f} | Len={len(c)} | Lines={len(c.splitlines())}")
