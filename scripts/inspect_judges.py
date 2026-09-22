import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

judges_cats = [c for c in d['categories'] if '사사기' in c.get('nameKr', '') or '士師記' in c.get('nameJp', '') or c.get('parentId') == 'cat_1787326092381' or c.get('id') == 'cat_1787326092381']
cat_map = {c['id']: c for c in judges_cats}
cat_ids = set(cat_map.keys())

judges_arts = [p for p in d['articles'] if p.get('categoryId') in cat_ids or '사사기' in p.get('scripture', '') or '士師記' in p.get('scripture', '')]

print(f"Total Judges articles in data.json: {len(judges_arts)}")

# 장별로 몇 개씩 있는지 확인
from collections import defaultdict
by_cat = defaultdict(list)
for a in judges_arts:
    by_cat[a.get('categoryId')].append(a)

for cid in sorted(cat_ids):
    cat = cat_map.get(cid)
    if cat.get('parentId') == 'sermon': continue
    arts = by_cat.get(cid, [])
    print(f"\n[{cat.get('nameKr')} / {cat.get('nameJp')} (ID: {cid})] - {len(arts)} posts:")
    for a in arts:
        print(f"  - pos:{a.get('position')} | id:{a.get('id')} | title:{a.get('title')} | scripture:{a.get('scripture')}")
