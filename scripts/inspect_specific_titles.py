import sys
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

for num in [8, 9, 10, 11, 12, 13, 15, 16, 17, 18]:
    f = sorted(os.listdir('강해설교/사도행전'))[num-1]
    with open(f'강해설교/사도행전/{f}', 'r', encoding='utf-8') as fp:
        raw = fp.read()
    print(f"================== [{num:02d}] {f} ==================")
    # Extract first 800 chars
    print(raw[:800])
