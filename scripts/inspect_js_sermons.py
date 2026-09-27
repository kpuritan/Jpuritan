import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Read JS files
js_files = ['scripts/sermons_1_to_3.js', 'scripts/sermons_4_to_6.js', 'scripts/sermons_7_to_9.js', 'scripts/sermons_10_to_13.js']

for jf in js_files:
    with open(jf, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"================== {jf} ==================")
    # Extract IDs and Titles
    articles = re.findall(r"id:\s*'([^']+)',\s*categoryId:\s*'([^']+)',\s*title:\s*'([^']+)'", content)
    for aid, cat, title in articles:
        print(f"  - ID: {aid} | Title: {title}")
