import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

def get_sermon_title_and_theme(raw, f, idx):
    num = idx + 1
    
    # 1. Check title from markdown h1 or metadata or text
    t_m = re.search(r'^#\s+([^\n]+)', raw, re.MULTILINE)
    h1_m = re.search(r'<h1[^>]*>([^<]+)</h1>', raw)
    meta_title_m = re.search(r'title:\s*"([^"]+)"', raw)
    
    # Extract scripture from filename
    fn_m = re.match(r'(\d+)_使徒行伝_(\d+)章_([\d\-]+)節\.md', f)
    ch = fn_m.group(2) if fn_m else ""
    vs = fn_m.group(3) if fn_m else ""
    scripture = f"使徒行伝 {ch}章 {vs}節"
    
    # Check intro title
    intro_m = re.search(r'(?:1\.\s*序論|###\s*序論|###\s*1\.\s*序論|序論)[：:]([^\n<]+)', raw)
    intro_title = intro_m.group(1).strip() if intro_m else ""
    
    # Check theme in sermon-meta-line
    theme_m = re.search(r'<span class="meta-tag">説教主題</span>\s*<span class="meta-val">([^<]+)</span>', raw)
    theme = theme_m.group(1).strip() if theme_m else ""
    
    title = ""
    if meta_title_m:
        title = meta_title_m.group(1).strip()
    elif h1_m:
        title = h1_m.group(1).strip()
    elif t_m:
        title = t_m.group(1).strip()
    
    # Clean title
    title = re.sub(r'（使徒行伝.*?）', '', title).strip()
    title = re.sub(r'^\d+\s*使徒行伝.*$', '', title).strip()
    
    if not title:
        # Generate clean title from intro_title or main point
        if intro_title:
            title = intro_title
        else:
            title = f"使徒行伝 {ch}章 {vs}節 講解説教"
            
    return {
        'num': num,
        'file': f,
        'chapter': int(ch) if ch else 1,
        'verses': vs,
        'scripture': scripture,
        'title': title,
        'theme': theme,
        'intro_title': intro_title
    }

sermons = []
for idx, f in enumerate(files):
    path = os.path.join(md_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    s = get_sermon_title_and_theme(raw, f, idx)
    sermons.append(s)
    print(f"[{s['num']:02d}] {s['scripture']} -> {s['title']}")
