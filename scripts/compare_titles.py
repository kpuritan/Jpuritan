import sys
import json
import os

sys.stdout.reconfigure(encoding='utf-8')

from pre_parse_acts import parsed_list

data = json.load(open('data.json', 'r', encoding='utf-8'))
acts_cats = {c['id'] for c in data['categories'] if c.get('parentId') == 'cat_1787326106992' or c.get('id') == 'cat_1787326106992'}
acts_arts = [a for a in data['articles'] if a.get('categoryId') in acts_cats]

print(f"{'No.':<4} | {'Current in data.json':<35} | {'New Clean Title':<35}")
print("-" * 80)
for idx, (p, a) in enumerate(zip(parsed_list, acts_arts)):
    print(f"[{p['num']:02d}]  | {a['title'][:32]:<35} | {p['title'][:32]:<35}")
