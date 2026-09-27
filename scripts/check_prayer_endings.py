import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

for num in [1, 2, 7, 8, 14, 19, 21, 28]:
    f = sorted(os.listdir('강해설교/사도행전'))[num-1]
    with open(f'강해설교/사도행전/{f}', 'r', encoding='utf-8') as fp:
        raw = fp.read()
    print(f"================== [{num:02d}] {f} LAST 500 CHARS ==================")
    print(raw[-500:])
