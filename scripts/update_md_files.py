import sys
import os
import json

sys.stdout.reconfigure(encoding='utf-8')

from apply_all_49_acts_sermons import new_acts_articles, files, md_dir

print(f"Updating {len(files)} markdown files in {md_dir}...")

for f, art in zip(files, new_acts_articles):
    filepath = os.path.join(md_dir, f)
    with open(filepath, 'w', encoding='utf-8') as fp:
        fp.write(art['content'])

print("All markdown files in 강해설교/사도행전 updated successfully!")
