import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for aid in ['art_traill_heb_04_01', 'art_traill_heb_04_02', 'art_traill_heb_04_03', 'art_traill_heb_04_04']:
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        print(f"=== {aid} ===")
        print(f"Title: {art['title']}")
        print(f"Author: {art['author']}")
        print(f"Scripture: {art['scripture']}")
        print("Content start (first 1000 chars):")
        print(art['content'][:1000])
        print("...\n")
