import sys
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

from pre_parse_acts import parsed_list
from convert_acts_to_html import markdown_to_clean_html

for idx, p in enumerate(parsed_list):
    html = markdown_to_clean_html(
        raw_md=p['raw'],
        num=p['num'],
        scripture=p['scripture'],
        title_clean=p['title_clean'],
        chapter=p['chapter'],
        verses=p['verses']
    )
    
    # Check if callout-scripture contains verse text or is just the title
    has_sc_text = '[1]' in html or '[5]' in html or '[15]' in html or '[20]' in html or '【聖書本文' in html
    has_prayer = 'sermon-prayer-box' in html
    has_header = 'sermon-header-box' in html
    
    print(f"[{p['num']:02d}] {p['scripture']} | Title: {p['title_clean'][:25]} | ScText: {has_sc_text} | Prayer: {has_prayer} | Header: {has_header} | HtmlLen: {len(html)}")
