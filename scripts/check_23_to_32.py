import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for i in range(23, 33):
    aid = f"art_judges_17879500{i:02d}000"
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    if art:
        print(f"[{i}] {art['id']} | {art['categoryId']} | {art['title']} | {art['scripture']}")
        print("First 150 chars:", art['content'][:150].replace('\n', ' '))
