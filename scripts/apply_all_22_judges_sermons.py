import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 사사기 앞부분 형식의 HTML을 조립하는 함수
def format_sermon_html(scripture, intro_sub, intro_paras, title, points, apps, concl_paras, prayer_text):
    lines = ['<div class="sermon-content">']
    # 聖書本文 배너
    lines.append('  <div style="background-color: #f1f5f9; border-left: 4px solid #0A1C36; padding: 0 12px; margin-bottom: 20px; font-weight: 500; color: #1e293b;">')
    lines.append(f'    【聖書本文】 {scripture}')
    lines.append('  </div>')
    
    # 1. 序論
    lines.append(f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">1. 序論：{intro_sub}</h3>')
    for p in intro_paras:
        p_clean = p.strip()
        if p_clean:
            lines.append(f'  <p style="margin-bottom: 10px; line-height: 1.7;">{p_clean}</p>')
            
    # 2. 本論
    lines.append(f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">2. 本論：{title}</h3>')
    for pt in points:
        lines.append(f'  <h4 style="font-size: 1.05em; font-weight: bold; margin-top: 16px; margin-bottom: 6px; color: #1e293b;">第{pt["num"]}の要点：{pt["title"]}</h4>')
        if pt.get('basis'):
            lines.append(f'  <p style="margin-bottom: 6px; line-height: 1.7; color: #334155;"><strong>聖書的根拠：{pt["basis"]}</strong></p>')
        if pt.get('msg'):
            lines.append(f'  <p style="margin-bottom: 10px; line-height: 1.7;"><strong>メッセージおよび例話：{pt["msg"]}</strong></p>')
            
    # 3. 適用
    lines.append('  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">3. 適用：生活の中で実践する信仰</h3>')
    ordinals = ["第一に", "第二に", "第三に", "第四に"]
    for i, app in enumerate(apps):
        ord_str = ordinals[i] if i < len(ordinals) else f"第{i+1}に"
        lines.append(f'  <p style="margin-bottom: 8px; line-height: 1.7; padding-left: 8px;"><strong>{ord_str}、[{app["tag"]}]：{app["text"]}</strong></p>')
        
    # 結論
    lines.append('  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">結論：恵みと決断</h3>')
    for p in concl_paras:
        p_clean = p.strip()
        if p_clean:
            lines.append(f'  <p style="margin-bottom: 10px; line-height: 1.7;">{p_clean}</p>')
            
    # 祈り
    lines.append('  <div style="margin-top: 24px; padding: 16px 20px; background-color: #f8fafc; border-left: 4px solid #C5A059; border-radius: 4px;">')
    lines.append('    <h4 style="font-size: 1.05em; font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #C5A059;">🙏 締めくくりの祈り</h4>')
    lines.append(f'    <p style="margin-bottom: 0; line-height: 1.7; color: #334155; font-style: italic;">{prayer_text.strip()}</p>')
    lines.append('  </div>')
    lines.append('</div>')
    
    return '\r\n'.join(lines) + '\r\n'

print("Formatter defined.")
