import sys
import os
import json

sys.stdout.reconfigure(encoding='utf-8')

from pre_parse_acts import parsed_list
from convert_acts_to_html import markdown_to_clean_html

sample_indices = [0, 13, 20, 33, 41]  # 1, 14, 21, 34, 42

for idx in sample_indices:
    p = parsed_list[idx]
    html = markdown_to_clean_html(
        raw_md=p['raw'],
        num=p['num'],
        scripture=p['scripture'],
        title_clean=p['title_clean'],
        chapter=p['chapter'],
        verses=p['verses']
    )
    print(f"==================================================")
    print(f"SAMPLE {p['num']:02d}: {p['title']}")
    print(f"==================================================")
    print("START (first 800 chars):")
    print(html[:800])
    print("\nEND (last 600 chars):")
    print(html[-600:])
