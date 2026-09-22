import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('user_sermons_raw.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# [설교제목] 패턴 등으로 설교 목록 파악
sermons = re.findall(r'\[설교제목\]\s*:\s*([^\n\r]+)', text)
scriptures = re.findall(r'\[설교본문\]\s*:\s*([^\n\r]+)', text)

print(f"Found {len(sermons)} sermons and {len(scriptures)} scriptures:")
for i, (s, sc) in enumerate(zip(sermons, scriptures), 1):
    print(f"{i:2d}. {s.strip()} | {sc.strip()}")
