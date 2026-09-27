import sys

sys.stdout.reconfigure(encoding='utf-8')

for i in [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]:
    with open(f"scripts/raw_kr_sermon_{i:02d}.txt", 'r', encoding='utf-8') as f:
        text = f.read()
    print(f"==================================================")
    print(f"SERMON {i:02d} FULL TEXT DUMP")
    print(f"==================================================")
    print(text)
