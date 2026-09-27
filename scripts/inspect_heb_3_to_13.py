import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for i in range(3, 14):
    aid = f"art_traill_heb_04_{i:02d}"
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        print(f"==================================================")
        print(f"[{i:02d}] {aid}")
        print(f"Title: {art.get('title')}")
        print(f"Scripture: {art.get('scripture')}")
        print(f"Author: {art.get('author')}")
        print(f"Content length: {len(art.get('content', ''))}")
        # Print first 500 chars and last 300 chars of content
        print("START:\n" + art.get('content', '')[:500])
        print("END:\n" + art.get('content', '')[-300:])
