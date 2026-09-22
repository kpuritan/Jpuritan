import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

art22 = next((a for a in d['articles'] if a['id'] == 'art_judges_1787950022000'), None)
if art22:
    print(f"Title: {art22['title']}")
    print(f"Scripture: {art22['scripture']}")
    print(f"Content length: {len(art22['content'])}")
    print("Content preview:\n", art22['content'])
