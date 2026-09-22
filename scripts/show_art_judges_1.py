import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

art = next((a for a in d['articles'] if a['id'] == 'art_judges_1787950001000'), None)
if art:
    print(f"Title: {art['title']}")
    print(f"Scripture: {art['scripture']}")
    print(f"Content:\n{art['content']}")
