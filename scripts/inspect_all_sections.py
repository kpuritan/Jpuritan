import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

def clean_html(text):
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', '', text)
    return text.strip()

for idx, f in enumerate(files):
    path = os.path.join(md_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    
    # Strip frontmatter if present
    content = raw
    fm_m = re.match(r'^---\s*\n(.*?)\n---\s*\n', raw, re.DOTALL)
    if fm_m:
        content = raw[fm_m.end():]
        
    print(f"=== [{idx+1:02d}] {f} ===")
    
    # Find headings or sections
    headings = re.findall(r'(?:<h[1-4][^>]*>(.*?)</h[1-4]>|^#{1,4}\s+([^\n]+))', content, re.MULTILINE)
    cleaned_headings = []
    for h in headings:
        h_str = h[0] if h[0] else h[1]
        cleaned_headings.append(clean_html(h_str))
    print("Headings:", cleaned_headings[:6])
    
    # Check prayer
    has_prayer = '祈り' in content or 'アーメン' in content or 'お祈り' in content
    print("Has prayer:", has_prayer)
