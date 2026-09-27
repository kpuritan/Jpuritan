import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

results = []

for idx, f in enumerate(files):
    path = os.path.join(md_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        raw = fp.read()
        
    num = idx + 1
    
    # Parse filename parts e.g. 01_使徒行伝_1章_1-3節.md
    fn_m = re.match(r'(\d+)_使徒行伝_(\d+)章_([\d\-]+)節\.md', f)
    ch = fn_m.group(2) if fn_m else ""
    verses = fn_m.group(3) if fn_m else ""
    scripture_ref = f"使徒行伝 {ch}章 {verses}節" if ch else ""
    
    results.append({
        'file': f,
        'index': num,
        'chapter': ch,
        'verses': verses,
        'scripture_ref': scripture_ref,
        'raw_len': len(raw)
    })

print(f"Total parsed: {len(results)}")
print("Sample:", results[0])
