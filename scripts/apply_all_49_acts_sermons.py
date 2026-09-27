import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

md_dir = '강해설교/사도행전'
files = sorted(os.listdir(md_dir))

def format_clean_sermon(filepath, filename, idx):
    with open(filepath, 'r', encoding='utf-8') as f:
        raw_md = f.read()

    num = idx + 1
    
    # Extract chapter and verse from filename
    fn_m = re.match(r'(\d+)_使徒行伝_(\d+)章_([\d\-]+)節\.md', filename)
    ch = int(fn_m.group(2)) if fn_m else 1
    vs = fn_m.group(3) if fn_m else "1"
    scripture = f"使徒行伝 {ch}章 {vs}節"
    cat_id = f"cat_acts_{ch:02d}"

    # Strip YAML frontmatter
    text = raw_md
    fm_m = re.match(r'^---\s*\n(.*?)\n---\s*\n', raw_md, re.DOTALL)
    fm_meta = {}
    if fm_m:
        fm_text = fm_m.group(1)
        for line in fm_text.splitlines():
            if ':' in line:
                k, v = line.split(':', 1)
                fm_meta[k.strip()] = v.strip().strip('"')
        text = raw_md[fm_m.end():]

    # Extract theme
    theme_m = re.search(r'<span class="meta-tag">説教主題</span>\s*<span class="meta-val">([^<]+)</span>', text)
    theme = theme_m.group(1).strip() if theme_m else fm_meta.get('description', '')

    # Extract title
    title = fm_meta.get('title', '')
    if not title:
        h1_m = re.search(r'^#\s+([^\n]+)', text, re.MULTILINE)
        if h1_m:
            title = h1_m.group(1).strip()
        else:
            h1_html_m = re.search(r'<h1[^>]*>([^<]+)</h1>', text)
            if h1_html_m:
                title = h1_html_m.group(1).strip()

    title_clean = re.sub(r'（使徒行伝.*?）', '', title).strip()
    title_clean = re.sub(r'^\d+\s*使徒行伝.*$', '', title_clean).strip()

    # Extract Intro title
    intro_title_m = re.search(r'(?:1\.\s*序論|###\s*序論|###\s*1\.\s*序論|##\s*序論|序論)[：:]([^\n<]+)', text)
    intro_title = intro_title_m.group(1).strip() if intro_title_m else ""
    if not title_clean:
        title_clean = intro_title if intro_title else f"使徒行伝 {ch}章 {vs}節 講解説教"

    full_display_title = f"{title_clean}（使徒行伝 {ch}:{vs}）"

    # Clean existing top headers / meta boxes from raw text
    text = re.sub(r'<div class="sermon-header-box">.*?</div>', '', text, flags=re.DOTALL)
    text = re.sub(r'<div class="sermon-meta-box".*?</div>', '', text, flags=re.DOTALL)
    text = re.sub(r'^#\s+[^\n]+', '', text, flags=re.MULTILINE)
    text = re.sub(r'<h1[^>]*>.*?</h1>', '', text, flags=re.DOTALL)

    # Extract scripture block if present
    scripture_verses = []
    sc_block_m = re.search(r'<div class="scripture-block">(.*?)</div>', text, flags=re.DOTALL)
    if sc_block_m:
        sc_inner = sc_block_m.group(1)
        p_matches = re.findall(r'<p>(.*?)</p>', sc_inner, flags=re.DOTALL)
        for p_item in p_matches:
            p_clean = p_item.strip()
            v_m = re.match(r'<strong>(\d+)</strong>\s*(.*)', p_clean, flags=re.DOTALL)
            if v_m:
                scripture_verses.append((v_m.group(1), v_m.group(2).strip()))
            else:
                scripture_verses.append(("", p_clean))
        text = text[:sc_block_m.start()] + text[sc_block_m.end():]
    else:
        # Check scripture-box in HTML format (e.g. files 8-18)
        sc_html_box = re.search(r'<div class="scripture-box"[^>]*>.*?<p[^>]*>(.*?)</p>\s*</div>', text, flags=re.DOTALL)
        if sc_html_box:
            sc_raw_text = sc_html_box.group(1)
            text = text[:sc_html_box.start()] + text[sc_html_box.end():]
            # Split by <br> or lines
            sc_raw_text = sc_raw_text.replace('<br>', '\n')
            for line in sc_raw_text.splitlines():
                l_clean = re.sub(r'<[^>]+>', '', line).strip()
                if not l_clean:
                    continue
                v_m = re.match(r'^(\d+)\s*(.*)', l_clean)
                if v_m:
                    scripture_verses.append((v_m.group(1), v_m.group(2).strip()))
                else:
                    scripture_verses.append(("", l_clean))
        else:
            # Check markdown blockquote
            bq_lines = re.findall(r'^>\s*(.*?)$', text, flags=re.MULTILINE)
            if bq_lines:
                for bql in bq_lines:
                    bql_clean = bql.strip().rstrip('<br>').strip()
                    if not bql_clean:
                        continue
                    v_m = re.match(r'^\*\*(\d+)\*\*\s*(.*)', bql_clean)
                    if v_m:
                        scripture_verses.append((v_m.group(1), v_m.group(2).strip()))
                    else:
                        scripture_verses.append(("", bql_clean))
                text = re.sub(r'^>\s*[^\n]*\n?', '', text, flags=re.MULTILINE)
            else:
                # Check 【聖書本文】 banner
                sc_banner_m = re.search(r'<div[^>]*>\s*【聖書本文[^】]*】[^<]*</div>', text)
                if sc_banner_m:
                    text = text[:sc_banner_m.start()] + text[sc_banner_m.end():]

    # Remove existing <div class="sermon-content"> wrapper if present
    text = re.sub(r'<div class="sermon-content">', '', text)
    text = re.sub(r'<div class="sermon-container">', '', text)
    text = re.sub(r'</div>\s*$', '', text)

    # Clean redundant hr separators and redundant banners
    text = re.sub(r'^[ \t]*---[ \t]*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'###\s*【聖書本文.*?】', '', text)
    text = re.sub(r'##\s*聖書本文[^\n]*', '', text)
    text = re.sub(r'###\s*聖書朗読[^\n]*', '', text)
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)

    # Extract prayer section using comprehensive patterns
    prayer_content = ""
    prayer_patterns = [
        r'(?:<h[3-5][^>]*>[^<]*(?:締めくくりの祈り|祈り)[^<]*</h[3-5]>|<section[^>]*>[^<]*<h[3-5][^>]*>[^<]*(?:締めくくりの祈り|祈り)[^<]*</h[3-5]>|#{1,4}\s*(?:\d+\.\s*)?(?:締めくくりの祈り|祈り))',
        r'<div style="[^"]*(?:border-left:\s*4px solid #C5A059)[^"]*">',
        r'<div style="[^"]*background(?:-color)?:\s*#f8fafc;[^"]*border-left:\s*4px solid #C5A059'
    ]
    
    prayer_raw = ""
    for pat in prayer_patterns:
        pm = re.search(pat, text, flags=re.DOTALL | re.IGNORECASE)
        if pm:
            prayer_raw = text[pm.start():]
            text = text[:pm.start()]
            break
            
    if not prayer_raw:
        amen_pos = text.rfind('アーメン')
        if amen_pos != -1 and (len(text) - amen_pos) < 1500:
            prev_block = text[:amen_pos]
            last_h = max(prev_block.rfind('<h3'), prev_block.rfind('###'), prev_block.rfind('<div style="background'))
            if last_h != -1 and (amen_pos - last_h) < 2000:
                prayer_raw = text[last_h:]
                text = text[:last_h]

    if prayer_raw:
        prayer_clean = re.sub(r'<h[1-5][^>]*>.*?</h[1-5]>', '', prayer_raw, flags=re.DOTALL)
        prayer_clean = re.sub(r'#{1,5}\s+[^\n]+', '', prayer_clean)
        p_tags = re.findall(r'<p[^>]*>(.*?)</p>', prayer_clean, flags=re.DOTALL)
        if p_tags:
            p_list = []
            for pt in p_tags:
                pt_c = re.sub(r'<[^>]+>', '', pt).strip()
                pt_c = pt_c.replace('<br>', '\n').strip()
                for line in pt_c.split('\n'):
                    l_s = line.strip()
                    if l_s:
                        p_list.append(l_s)
            prayer_content = "\n".join([f'<p style="margin-bottom: 12px; line-height: 1.85;">{p}</p>' for p in p_list])
        else:
            p_list = []
            for block in prayer_clean.split('\n\n'):
                b_c = re.sub(r'<[^>]+>', '', block).strip()
                b_c = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', b_c)
                if b_c:
                    p_list.append(b_c)
            prayer_content = "\n".join([f'<p style="margin-bottom: 12px; line-height: 1.85;">{p}</p>' for p in p_list])

    # Convert headings
    def heading_replace(match):
        level = len(match.group(1))
        content = match.group(2).strip()
        content = re.sub(r'\*\*([^*]+)\*\*', r'\1', content)
        if level <= 2 or '序論' in content or '本論' in content or '適用' in content or '結論' in content:
            return f'<h3 style="font-size: 1.22em; font-weight: 700; margin-top: 32px; margin-bottom: 14px; color: #0A1C36; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;">{content}</h3>'
        elif level == 3 or '第' in content:
            return f'<h4 style="font-size: 1.08em; font-weight: 700; margin-top: 22px; margin-bottom: 10px; color: #1e293b; background: #f8fafc; padding: 8px 14px; border-left: 4px solid #3b82f6; border-radius: 0 4px 4px 0;">{content}</h4>'
        else:
            return f'<h5 style="font-size: 1.0em; font-weight: 700; margin-top: 16px; margin-bottom: 8px; color: #334155;">{content}</h5>'

    text = re.sub(r'^(#{1,6})\s+([^\n]+)', heading_replace, text, flags=re.MULTILINE)

    def h2_html_replace(match):
        content = match.group(1).strip()
        content = re.sub(r'<[^>]+>', '', content).strip()
        return f'<h3 style="font-size: 1.22em; font-weight: 700; margin-top: 32px; margin-bottom: 14px; color: #0A1C36; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;">{content}</h3>'

    text = re.sub(r'<h2[^>]*>(.*?)</h2>', h2_html_replace, text, flags=re.DOTALL)

    def h3_html_replace(match):
        content = match.group(1).strip()
        content = re.sub(r'<[^>]+>', '', content).strip()
        if '第' in content and ('要点' in content or '段階' in content or '真理' in content or '特徴' in content):
            return f'<h4 style="font-size: 1.08em; font-weight: 700; margin-top: 22px; margin-bottom: 10px; color: #1e293b; background: #f8fafc; padding: 8px 14px; border-left: 4px solid #3b82f6; border-radius: 0 4px 4px 0;">{content}</h4>'
        return f'<h3 style="font-size: 1.22em; font-weight: 700; margin-top: 32px; margin-bottom: 14px; color: #0A1C36; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;">{content}</h3>'

    text = re.sub(r'<h3[^>]*>(.*?)</h3>', h3_html_replace, text, flags=re.DOTALL)

    def h4_html_replace(match):
        content = match.group(1).strip()
        content = re.sub(r'<[^>]+>', '', content).strip()
        return f'<h4 style="font-size: 1.08em; font-weight: 700; margin-top: 22px; margin-bottom: 10px; color: #1e293b; background: #f8fafc; padding: 8px 14px; border-left: 4px solid #3b82f6; border-radius: 0 4px 4px 0;">{content}</h4>'

    text = re.sub(r'<h4[^>]*>(.*?)</h4>', h4_html_replace, text, flags=re.DOTALL)

    # Clean sections
    text = re.sub(r'</?section[^>]*>', '', text)

    # Convert bullet points
    text = re.sub(r'^[ \t]*[-*][ \t]+\*\*([^*]+)\*\*[ \t]*[:：]?[ \t]*(.*)$', r'<p style="margin-bottom: 10px; line-height: 1.85; padding-left: 14px; position: relative;"><span style="color: #3b82f6; font-weight: bold; margin-right: 6px;">&bull;</span><strong>\1:</strong> \2</p>', text, flags=re.MULTILINE)
    text = re.sub(r'^[ \t]*[-*][ \t]+(.*)$', r'<p style="margin-bottom: 8px; line-height: 1.85; padding-left: 14px;"><span style="color: #3b82f6; font-weight: bold; margin-right: 6px;">&bull;</span>\1</p>', text, flags=re.MULTILINE)

    # Convert bold markdown
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)

    # Split into clean paragraphs
    chunks = text.split('\n\n')
    body_html_parts = []
    for chunk in chunks:
        ch_s = chunk.strip()
        if not ch_s:
            continue
        if ch_s.startswith('<h') or ch_s.startswith('<div') or ch_s.startswith('<p'):
            body_html_parts.append(ch_s)
        else:
            lines = ch_s.split('\n')
            p_lines = []
            for l in lines:
                l_s = l.strip()
                if l_s:
                    if l_s.startswith('<h') or l_s.startswith('<div') or l_s.startswith('<p'):
                        p_lines.append(l_s)
                    else:
                        p_lines.append(f'<p style="margin-bottom: 12px; line-height: 1.85; color: #1e293b; text-align: justify;">{l_s}</p>')
            body_html_parts.append("\n".join(p_lines))

    clean_body = "\n\n".join(body_html_parts)

    # Build Header Box
    theme_html = f'<div><strong style="color: #0A1C36;">🎯 説教主題:</strong> {theme}</div>' if theme else ''
    header_box = f'''<div class="sermon-header-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #0A1C36; padding: 20px 24px; margin-bottom: 24px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
  <div style="font-size: 0.82rem; font-weight: 700; color: #64748b; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 6px;">
    EXPOSITORY SERMON &bull; 使徒行伝 講解説教
  </div>
  <h2 style="margin: 0 0 14px 0; font-size: 1.42rem; color: #0A1C36; font-weight: 700; line-height: 1.4;">
    {title_clean}（{scripture}）
  </h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; font-size: 0.9rem; color: #334155; border-top: 1px solid #e2e8f0; padding-top: 12px;">
    <div><strong style="color: #0A1C36;">📖 聖書箇所:</strong> {scripture}</div>
    <div><strong style="color: #0A1C36;">👤 説教者:</strong> キム・ホンマン 学長</div>
    {theme_html}
  </div>
</div>'''

    # Build Scripture Box
    if scripture_verses:
        vs_lines = []
        for v_num, v_txt in scripture_verses:
            if v_num:
                vs_lines.append(f'<p style="margin-bottom: 8px; line-height: 1.85;"><strong style="color: #0A1C36; margin-right: 6px; font-feature-settings: \'tnum\';">[{v_num}]</strong> {v_txt}</p>')
            else:
                vs_lines.append(f'<p style="margin-bottom: 8px; line-height: 1.85;">{v_txt}</p>')
        scripture_inner = "\n".join(vs_lines)
    else:
        scripture_inner = f'<p style="margin-bottom: 8px; line-height: 1.85; color: #64748b; font-style: italic;">{scripture}</p>'

    scripture_box = f'''<div class="callout-scripture" style="background-color: #f1f5f9; border: 1px solid #cbd5e1; border-left: 4px solid #0A1C36; border-radius: 6px; padding: 16px 20px; margin-bottom: 28px;">
  <div style="font-weight: 700; color: #0A1C36; margin-bottom: 12px; font-size: 1.05em; display: flex; align-items: center; gap: 6px;">
    <span>【聖書本文：{scripture}】</span>
  </div>
  <div style="color: #334155; line-height: 1.85; font-size: 0.98em;">
{scripture_inner}
  </div>
</div>'''

    # Build Prayer Box
    if prayer_content:
        prayer_box = f'''<div class="sermon-prayer-box" style="margin-top: 36px; padding: 22px 24px; background-color: #fffbeb; border: 1px solid #fef3c7; border-left: 5px solid #C5A059; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.02);">
  <div style="font-weight: 700; color: #92400e; margin-bottom: 12px; font-size: 1.08em; display: flex; align-items: center; gap: 8px;">
    <span>🙏 締めくくりの祈り</span>
  </div>
  <div style="color: #451a03; line-height: 1.85; font-size: 0.98em;">
{prayer_content}
  </div>
</div>'''
    else:
        prayer_box = ''

    final_html = f'''<div class="sermon-content">
{header_box}

{scripture_box}

{clean_body}

{prayer_box}
</div>'''

    article_obj = {
        'id': f"art_179050000{num:02d}000" if num < 42 else f"art_17905000{num:02d}000",
        'categoryId': cat_id,
        'title': full_display_title,
        'scripture': scripture,
        'author': 'キム・ホンマン 学長',
        'createdAt': '2026-09-27',
        'content': final_html,
        'views': 0
    }

    return article_obj

# Load data.json
with open('data.json', 'r', encoding='utf-8') as f:
    data_json = json.load(f)

print(f"Loaded data.json with {len(data_json['articles'])} articles.")

# Process all 49 Acts sermons
new_acts_articles = []
for idx, f in enumerate(files):
    filepath = os.path.join(md_dir, f)
    art_obj = format_clean_sermon(filepath, f, idx)
    new_acts_articles.append(art_obj)

print(f"Generated {len(new_acts_articles)} clean HTML Acts articles.")

# Update data_json articles list
# Replace or insert Acts articles
acts_ids = {a['id'] for a in new_acts_articles}
# Remove old acts articles
filtered_articles = [a for a in data_json['articles'] if a['id'] not in acts_ids and not (isinstance(a.get('categoryId'), str) and a.get('categoryId').startswith('cat_acts_'))]

# Add new formatted articles
filtered_articles.extend(new_acts_articles)
data_json['articles'] = filtered_articles

print(f"Updated data.json articles count: {len(data_json['articles'])}")

# Write to data.json
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data_json, f, ensure_ascii=False, indent=2)

print("Saved updated data.json.")

# Sync to data.js
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('window.MASTER_SITE_DATABASE = ' + json.dumps(data_json, ensure_ascii=False, indent=2) + ';\n')

print("Synced data.js with window.MASTER_SITE_DATABASE.")

