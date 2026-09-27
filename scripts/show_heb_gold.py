import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for aid in ['art_traill_heb_04_01', 'art_traill_heb_04_02']:
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    print(f"=== FULL PREVIEW OF {aid} ===")
    print(art['content'][:2500])
    print("\n--- MIDDLE SECTION ---")
    print(art['content'][4000:6000])
    print("\n--- END SECTION ---")
    print(art['content'][-2000:])
