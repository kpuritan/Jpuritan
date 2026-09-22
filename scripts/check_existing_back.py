import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# art_judges_1787950001000 부터 1787950022000 까지 확인
for i in range(1, 23):
    aid = f"art_judges_17879500{i:02d}000"
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    if art:
        print(f"[{i}] {art['id']} | {art['categoryId']} | {art['title']} | {art['scripture']}")
        print("First 200 chars of content:")
        print(art['content'][:200].replace('\n', ' '))
        print("-" * 50)
