import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# 1번, 10번, 22번 게시물 내용 확인
for aid in ["art_judges_1787950001000", "art_judges_1787950010000", "art_judges_1787950022000"]:
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    print(f"=== {art['id']} : {art['title']} ({art['scripture']}) ===")
    print(art['content'])
    print("=" * 60)
