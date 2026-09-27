import sys
import json

sys.stdout.reconfigure(encoding='utf-8')
data = json.load(open('data.json', 'r', encoding='utf-8'))

for cat_name, parent_sub in [('士師記', 'cat_1787326092381'), ('ガラテヤ', 'cat_sermon_gal'), ('ヘブル', 'cat_sermon_heb'), ('ローマ', 'cat_sermon_rom'), ('ヨハネ', 'cat_sermon_john')]:
    sub_cats = {c['id'] for c in data['categories'] if c.get('parentId') == parent_sub or c.get('id') == parent_sub}
    arts = [a for a in data['articles'] if a.get('categoryId') in sub_cats]
    if arts:
        print(f"==================================================")
        print(f"CATEGORY: {cat_name} (found {len(arts)} articles)")
        print(f"Sample: {arts[0]['id']} - {arts[0]['title']}")
        print(f"Scripture: {arts[0].get('scripture')}")
        print(f"==================================================")
        print(arts[0]['content'][:1200])
        print("...\n" + arts[0]['content'][-600:])
