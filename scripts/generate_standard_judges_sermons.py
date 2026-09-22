import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 템플릿 생성 함수
def build_html(scripture, intro_sub, intro_p, title, points, apps, concl_p, prayer_p):
    html = '<div class="sermon-content">\n'
    html += f'  <div style="background-color: #f1f5f9; border-left: 4px solid #0A1C36; padding: 0 12px; margin-bottom: 20px; font-weight: 500; color: #1e293b;">\n'
    html += f'    【聖書本文】 {scripture}\n'
    html += f'  </div>\n'
    
    # 1. 序論
    html += f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">1. 序論：{intro_sub}</h3>\n'
    for p in intro_p:
        html += f'  <p style="margin-bottom: 10px; line-height: 1.7;">{p}</p>\n'
        
    # 2. 本論
    html += f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">2. 本論：{title}</h3>\n'
    for pt in points:
        html += f'  <h4 style="font-size: 1.05em; font-weight: bold; margin-top: 16px; margin-bottom: 6px; color: #1e293b;">第{pt["num"]}の要点：{pt["title"]}</h4>\n'
        if pt.get('basis'):
            html += f'  <p style="margin-bottom: 6px; line-height: 1.7; color: #334155;"><strong>聖書的根拠：{pt["basis"]}</strong></p>\n'
        if pt.get('msg'):
            html += f'  <p style="margin-bottom: 10px; line-height: 1.7;"><strong>メッセージおよび例話：{pt["msg"]}</strong></p>\n'
            
    # 3. 適用
    html += f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">3. 適用：生活の中で実践する信仰</h3>\n'
    ordinals = ["第一に", "第二に", "第三に", "第四に"]
    for i, app in enumerate(apps):
        ord_str = ordinals[i] if i < len(ordinals) else f"第{i+1}に"
        html += f'  <p style="margin-bottom: 8px; line-height: 1.7; padding-left: 8px;"><strong>{ord_str}、[{app["tag"]}]：{app["text"]}</strong></p>\n'
        
    # 結論
    html += f'  <h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">結論：恵みと決断</h3>\n'
    for p in concl_p:
        html += f'  <p style="margin-bottom: 10px; line-height: 1.7;">{p}</p>\n'
        
    # 祈り
    html += f'  <div style="margin-top: 24px; padding: 16px 20px; background-color: #f8fafc; border-left: 4px solid #C5A059; border-radius: 4px;">\n'
    html += f'    <h4 style="font-size: 1.05em; font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #C5A059;">🙏 締めくくりの祈り</h4>\n'
    html += f'    <p style="margin-bottom: 0; line-height: 1.7; color: #334155; font-style: italic;">{prayer_p}</p>\n'
    html += f'  </div>\n'
    html += f'</div>'
    return html

print("Template builder ready.")
