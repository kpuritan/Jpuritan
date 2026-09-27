import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

sample_files = [
    '01_使徒行伝_1章_1-3節.md',
    '10_使徒行伝_2章_5-13節.md',
    '14_使徒行伝_2章_33-36節.md',
    '15_使徒行伝_2章_37-41節.md',
    '21_使徒行伝_4章_1-4節.md',
    '29_使徒行伝_5章_27-32節.md',
    '34_使徒行伝_7章_1-8節.md',
    '42_使徒行伝_8章_1-4節.md'
]

for sf in sample_files:
    path = os.path.join('강해설교/사도행전', sf)
    print(f"==================================================")
    print(f"FILE: {sf}")
    print(f"==================================================")
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        print("FIRST 25 LINES:")
        print("".join(lines[:25]))
        print("\nLAST 15 LINES:")
        print("".join(lines[-15:]))
