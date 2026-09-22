import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for aid in [f"art_17882004{i}0000" for i in range(2, 10)]:
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    if art:
        print(f"{art['id']} | title:{art.get('title')} | scripture:{art.get('scripture')} | len(content):{len(art.get('content',''))}")
