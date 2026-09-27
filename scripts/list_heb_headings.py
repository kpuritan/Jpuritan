import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('data.json', 'r', encoding='utf-8'))

for i in range(3, 14):
    aid = f"art_traill_heb_04_{i:02d}"
    art = next((a for a in data['articles'] if a['id'] == aid), None)
    if art:
        print(f"=== SERMON {i:02d} ({aid}) ===")
        print(f"Title: {art['title']}")
        # Extract headings from content
        import re
        headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', art['content'])
        for h in headings:
            h_c = re.sub(r'<[^>]+>', '', h).strip()
            if h_c:
                print(f"  - {h_c}")
