import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# 사사기 1장 첫 글 (앞부분)
art_front = next((a for a in d['articles'] if a['id'] == 'art_1788200010000'), None)
# 사사기 8장 글 (뒷부분, art_judges_1787950001000)
art_back = next((a for a in d['articles'] if a['id'] == 'art_judges_1787950001000'), None)

print("=== FRONT (1장) ===")
print("Title:", art_front.get('title'))
print("Scripture:", art_front.get('scripture'))
print("Author:", art_front.get('author'))
print("Content snippet:\n", art_front.get('content')[:500])

print("\n=== BACK (8장) ===")
print("Title:", art_back.get('title'))
print("Scripture:", art_back.get('scripture'))
print("Author:", art_back.get('author'))
print("Content snippet:\n", art_back.get('content')[:500])
