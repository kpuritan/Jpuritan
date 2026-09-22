import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for i in range(1, 23):
    aid = f"art_judges_17879500{i:02d}000"
    art = next((a for a in d['articles'] if a['id'] == aid), None)
    if not art:
        print(f"Missing {aid}")
        continue
    c = art['content']
    print(f"\n[{i}] {art['id']} | Title: {art['title']} | Scripture: {art['scripture']}")
    
    # 序論 체크
    intro_m = re.search(r'1\.\s*序論[^\n<]*(?:</h3>|\n)(.*?)(?=<h3|\Z)', c, re.DOTALL)
    print("  Intro found:", bool(intro_m))
    
    # 大旨 체크
    points_m = re.findall(r'第(\d+)の要点[^\n<]*', c)
    print(f"  Points found ({len(points_m)}):", points_m)
    
    # 適用 체크
    app_m = re.search(r'3\.\s*適用[^\n<]*(?:</h3>|\n)(.*?)(?=<h3|\Z)', c, re.DOTALL)
    print("  App found:", bool(app_m))
    
    # 結論 체크
    concl_m = re.search(r'4\.\s*結論[^\n<]*(?:</h3>|\n)(.*?)(?=<div class="prayer-box"|<div style="margin-top|\Z)', c, re.DOTALL)
    print("  Concl found:", bool(concl_m))
    
    # 祈り 체크
    prayer_m = re.search(r'締めくくりの祈り[^\n<]*(?:</div>|\n)(.*?)(?=</div>|\Z)', c, re.DOTALL)
    print("  Prayer found:", bool(prayer_m))
