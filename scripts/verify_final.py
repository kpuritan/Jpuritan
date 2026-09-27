import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

acts_arts = [a for a in d['articles'] if isinstance(a.get('categoryId'), str) and a.get('categoryId').startswith('cat_acts_')]
print(f"Verified Acts articles count in data.json: {len(acts_arts)}")

# Verify distribution across chapters 1 through 9
for ch in range(1, 10):
    cat_id = f"cat_acts_{ch:02d}"
    ch_arts = [a for a in acts_arts if a.get('categoryId') == cat_id]
    print(f"  - Chapter {ch} ({cat_id}): {len(ch_arts)} sermons")

# Verify sample article
print("\nSample article preview:")
s = acts_arts[0]
print(f"ID: {s['id']}")
print(f"Title: {s['title']}")
print(f"Scripture: {s['scripture']}")
print(f"Category: {s['categoryId']}")
print(f"Content length: {len(s['content'])}")
print(f"Content preview:\n{s['content'][:500]}")
