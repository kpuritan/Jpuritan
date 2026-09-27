import sys
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

for fn in ['scripts/sermons_1_to_3.js', 'scripts/sermons_4_to_6.js', 'scripts/sermons_7_to_9.js', 'scripts/sermons_10_to_13.js']:
    print(f"=== {fn} ===")
    with open(fn, 'r', encoding='utf-8') as f:
        c = f.read()
    print(f"Length: {len(c)}")
    # check hangul
    hangul_c = len(re.findall(r'[\uac00-\ud7a3]', c))
    print(f"Hangul count: {hangul_c}")
    print("Preview:\n" + c[:400])
    print("-" * 50)
