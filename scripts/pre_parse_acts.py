import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

def parse_sermon_file(filepath, filename, idx):
    with open(filepath, 'r', encoding='utf-8') as f:
        raw = f.read()

    num = idx + 1
    
    # Extract chapter and verse from filename
    fn_m = re.match(r'(\d+)_使徒行伝_(\d+)章_([\d\-]+)節\.md', filename)
    ch = fn_m.group(2) if fn_m else "1"
    vs = fn_m.group(3) if fn_m else "1"
    scripture = f"使徒行伝 {ch}章 {vs}節"
    cat_id = f"cat_acts_{int(ch):02d}"

    # Strip frontmatter if present
    content = raw
    fm_m = re.match(r'^---\s*\n(.*?)\n---\s*\n', raw, re.DOTALL)
    fm_meta = {}
    if fm_m:
        fm_text = fm_m.group(1)
        for line in fm_text.splitlines():
            if ':' in line:
                k, v = line.split(':', 1)
                fm_meta[k.strip()] = v.strip().strip('"')
        content = raw[fm_m.end():]

    # Clean initial H1 / Title if present
    title = fm_meta.get('title', '')
    if not title:
        h1_m = re.search(r'^#\s+([^\n]+)', content, re.MULTILINE)
        if h1_m:
            title = h1_m.group(1).strip()
        else:
            h1_html_m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
            if h1_html_m:
                title = h1_html_m.group(1).strip()

    title_clean = re.sub(r'（使徒行伝.*?）', '', title).strip()
    title_clean = re.sub(r'^\d+\s*使徒行伝.*$', '', title_clean).strip()

    # Extract theme
    theme_m = re.search(r'<span class="meta-tag">説教主題</span>\s*<span class="meta-val">([^<]+)</span>', content)
    theme = theme_m.group(1).strip() if theme_m else fm_meta.get('description', '')

    # Extract scripture text
    # Can be inside <div class="scripture-block"> or between 【聖書本文...】 and --- or 序論
    # Or markdown blockquote > **1** ...
    scripture_text = ""
    sc_block_m = re.search(r'<div class="scripture-block">(.*?)</div>', content, re.DOTALL)
    if sc_block_m:
        scripture_text = sc_block_m.group(1).strip()
    else:
        # Check blockquote
        bq_matches = re.findall(r'^>\s*(.*?)$', content, re.MULTILINE)
        if bq_matches:
            # Join blockquote lines
            scripture_text = "\n".join(bq_matches).strip()
        else:
            # Check 【聖書本文】...
            sc_banner_m = re.search(r'【聖書本文[^】]*】(.*?)(?=<h3|###|1\.\s*序論|序論|\n\n\n)', content, re.DOTALL)
            if sc_banner_m:
                scripture_text = sc_banner_m.group(1).strip()

    # Format scripture text if it has markdown blockquote format (e.g. > **1** ...)
    if scripture_text:
        # Clean <br> tags at end
        sc_lines = []
        for line in scripture_text.splitlines():
            line_s = line.strip().rstrip('<br>').strip()
            if not line_s:
                continue
            # Check if line starts with verse number e.g. **1** or 1. or <p><strong>1</strong>
            if re.match(r'^\*\*\d+\*\*', line_s):
                v_num_m = re.match(r'^\*\*(\d+)\*\*\s*(.*)', line_s)
                sc_lines.append(f'<p style="margin-bottom: 8px; line-height: 1.8;"><strong style="color: #0A1C36; margin-right: 6px; font-feature-settings: \'tnum\';">[{v_num_m.group(1)}]</strong> {v_num_m.group(2)}</p>')
            elif line_s.startswith('<p'):
                sc_lines.append(line_s)
            else:
                sc_lines.append(f'<p style="margin-bottom: 8px; line-height: 1.8;">{line_s}</p>')
        formatted_scripture = "\n".join(sc_lines)
    else:
        formatted_scripture = f'<p style="margin-bottom: 8px; line-height: 1.8; color: #64748b; font-style: italic;">{scripture}</p>'

    # Extract Intro title & content
    intro_title_m = re.search(r'(?:1\.\s*序論|###\s*序論|###\s*1\.\s*序論|##\s*序論)[：:]([^\n<]+)', content)
    intro_title = intro_title_m.group(1).strip() if intro_title_m else ""
    if not title_clean:
        title_clean = intro_title if intro_title else f"使徒行伝 {ch}章 {vs}節 講解説教"

    full_display_title = f"{title_clean}（使徒行伝 {ch}:{vs}）"

    return {
        'num': num,
        'file': filename,
        'id': f"art_179050000{num:02d}000" if num < 42 else f"art_17905000{num:02d}000",
        'categoryId': cat_id,
        'chapter': int(ch),
        'verses': vs,
        'scripture': scripture,
        'title': full_display_title,
        'title_clean': title_clean,
        'theme': theme,
        'intro_title': intro_title,
        'raw': raw,
        'content': content,
        'formatted_scripture': formatted_scripture
    }

parsed_list = []
for idx, f in enumerate(files):
    p = parse_sermon_file(os.path.join(md_dir, f), f, idx)
    parsed_list.append(p)

print(f"Successfully pre-parsed all {len(parsed_list)} files.")
