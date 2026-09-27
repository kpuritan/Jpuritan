import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for aid in ['art_traill_heb_04_01', 'art_traill_heb_04_02', 'art_traill_heb_04_03']:
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        print(f"==================== {aid} ====================")
        print(f"Title: {art['title']}")
        print(f"Author: {art['author']}")
        print(f"Length: {len(art['content'])}")
        # Check headings in content
        import re
        headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', art['content'])
        for h in headings[:10]:
            print("  Heading:", re.sub(r'<[^>]+>', '', h).strip())
