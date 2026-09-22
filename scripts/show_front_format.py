import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# 앞부분 게시물들 확인
front_ids = ['art_1788200010000', 'art_1788200020000', 'art_1788200210000', 'art_1788200360000', 'art_1788200410000']
for aid in front_ids:
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    if art:
        print(f"=== {art['id']} : {art['title']} ({art['scripture']}) ===")
        print(art['content'])
        print("="*60)
