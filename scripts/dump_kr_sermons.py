import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for i in range(3, 14):
    aid = f"art_traill_heb_04_{i:02d}"
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        with open(f"scripts/raw_kr_sermon_{i:02d}.txt", 'w', encoding='utf-8') as fp:
            fp.write(art['content'])
        print(f"Saved raw_kr_sermon_{i:02d}.txt (len: {len(art['content'])})")
