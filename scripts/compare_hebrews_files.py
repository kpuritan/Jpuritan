import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

print("=== Comparing Hebrews 4:16 Sermons ===")
for i in range(1, 14):
    kr_fn = f"scripts/sermon_kr_{i:02d}.js"
    kr_len = 0
    if os.path.exists(kr_fn):
        with open(kr_fn, 'r', encoding='utf-8') as f:
            kr_len = len(f.read())
    print(f"Sermon {i:02d}: Korean JS length = {kr_len}")

with open('scripts/sermons_1_to_3.js', 'r', encoding='utf-8') as f:
    print("\nSample Japanese Content (Sermon 1 from sermons_1_to_3.js):")
    print(f.read()[:1500])
