import sys
import json
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

print(f"Analyzing {len(files)} files in {md_dir}...")

for idx, f in enumerate(files):
    path = os.path.join(md_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Check title/theme
    title_m = re.search(r'^#\s+([^\n]+)', content, re.MULTILINE)
    h1_m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    intro_m = re.search(r'(?:1\.\s*序論|###\s*序論|###\s*1\.\s*序論)[：:]([^\n<]+)', content)
    scripture_m = re.search(r'【聖書本文[：:]([^】]+)】|【聖書本文】\s*([^\n<]+)|##\s*聖書本文[：:]([^\n]+)', content)
    
    title = ""
    if title_m:
        title = title_m.group(1).strip()
    elif h1_m:
        title = h1_m.group(1).strip()
    
    scripture = ""
    if scripture_m:
        scripture = [g for g in scripture_m.groups() if g][0].strip()
        
    intro_title = intro_m.group(1).strip() if intro_m else ""
    
    print(f"[{idx+1:02d}] {f}")
    print(f"     Title: {title}")
    print(f"     Scripture: {scripture}")
    print(f"     Intro: {intro_title}")
