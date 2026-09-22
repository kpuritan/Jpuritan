import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. 원본 한국어 파싱 데이터 로드
with open('parsed_sermons.json', 'r', encoding='utf-8') as f:
    kr_sermons = json.load(f)

# 2. data.json 로드
with open('data.json', 'r', encoding='utf-8') as f:
    data_json = json.load(f)

from prepare_meta import sermon_meta
from apply_all_22_judges_sermons import format_sermon_html

print(f"Loaded {len(kr_sermons)} Korean sermons and {len(sermon_meta)} metadata items.")

# 각 설교의 HTML 컨텐츠를 재구성
updated_count = 0
for idx, meta in enumerate(sermon_meta):
    aid = meta['id']
    art = next((a for a in data_json['articles'] if a['id'] == aid), None)
    if not art:
        print(f"Article not found: {aid}")
        continue
    
    existing_content = art.get('content', '')
    kr_data = kr_sermons[idx] if idx < len(kr_sermons) else None
    
    # 기존 일본어 컨텐츠에서 요소 파싱
    # 序論
    intro_sub_m = re.search(r'1\.\s*序論[：:]([^\n<]+)', existing_content)
    intro_sub = intro_sub_m.group(1).strip() if intro_sub_m else meta['titleJp']
    
    intro_paras_m = re.search(r'1\.\s*序論[^\n<]*(?:</h3>|\n)(.*?)(?=<h3|2\.\s*本論)', existing_content, re.DOTALL)
    if intro_paras_m:
        intro_paras = re.findall(r'<p[^>]*>(.*?)</p>', intro_paras_m.group(1), re.DOTALL)
        # HTML 태그 제거 및 정돈
        intro_paras = [re.sub(r'<[^>]+>', '', p).strip() for p in intro_paras if p.strip()]
    else:
        intro_paras = []
    if not intro_paras and kr_data:
        intro_paras = [kr_data.get('intro_text', '')]

    # 本論 및 大旨 (第1の要点 등)
    # 기존 일본어 컨텐츠에서 대지 추출
    points = []
    point_matches = list(re.finditer(r'<h4[^>]*>[^<]*第(\d+)の要点[：:](.*?)</h4>', existing_content, re.DOTALL))
    for pm_idx, pm in enumerate(point_matches):
        p_num = pm.group(1).strip()
        p_title = re.sub(r'<[^>]+>', '', pm.group(2)).strip()
        
        # 다음 h4나 h3 전까지의 블록
        start_pos = pm.end()
        end_pos = point_matches[pm_idx+1].start() if pm_idx+1 < len(point_matches) else (existing_content.find('3. 適用', start_pos) if '3. 適用' in existing_content else len(existing_content))
        block = existing_content[start_pos:end_pos]
        
        # 聖書的根拠
        basis_m = re.search(r'聖書[的적]根拠[：:](.*?)(?=</p>|メッセージ|実例|例話|\Z)', block, re.DOTALL)
        basis = re.sub(r'<[^>]+>', '', basis_m.group(1)).strip() if basis_m else ""
        
        # メッセージ
        msg_m = re.search(r'(?:メッセージ|実例|例話)[^：:]*[：:](.*?)(?=</p>|<h4|<h3|\Z)', block, re.DOTALL)
        msg = re.sub(r'<[^>]+>', '', msg_m.group(1)).strip() if msg_m else ""
        
        if not basis and not msg:
            p_texts = re.findall(r'<p[^>]*>(.*?)</p>', block, re.DOTALL)
            clean_texts = [re.sub(r'<[^>]+>', '', pt).strip() for pt in p_texts if pt.strip()]
            if len(clean_texts) >= 2:
                basis = clean_texts[0]
                msg = clean_texts[1]
            elif len(clean_texts) == 1:
                msg = clean_texts[0]
                
        points.append({
            "num": p_num,
            "title": p_title,
            "basis": basis,
            "msg": msg
        })
        
    # 만약 대지가 3개 미만이면 kr_data와 대조하여 보완
    if len(points) < 3 and kr_data and kr_data.get('points'):
        for kp_idx, kp in enumerate(kr_data['points']):
            if kp_idx >= len(points):
                points.append({
                    "num": str(kp_idx + 1),
                    "title": kp['title'],
                    "basis": kp['basis'],
                    "msg": kp['msg']
                })

    # 3. 適用
    apps = []
    app_m = re.search(r'3\.\s*適用[^\n<]*(?:</h3>|\n)(.*?)(?=<h3|4\.\s*結論|結論)', existing_content, re.DOTALL)
    if app_m:
        app_lines = re.findall(r'<p[^>]*>(.*?)</p>', app_m.group(1), re.DOTALL)
        for al in app_lines:
            al_clean = re.sub(r'<[^>]+>', '', al).strip()
            # 第一に、[태그]：내용 또는 [태그] : 내용
            tag_m = re.search(r'\[(.*?)\][：:]\s*(.*)', al_clean)
            if tag_m:
                apps.append({
                    "tag": tag_m.group(1).strip(),
                    "text": tag_m.group(2).strip()
                })
            elif al_clean:
                apps.append({
                    "tag": "信仰の実践",
                    "text": al_clean
                })
    if not apps and kr_data:
        for al in kr_data.get('app_text', '').split('\n'):
            tag_m = re.search(r'\[(.*?)\][：:]\s*(.*)', al)
            if tag_m:
                apps.append({"tag": tag_m.group(1).strip(), "text": tag_m.group(2).strip()})

    # 結論
    concl_m = re.search(r'(?:4\.\s*結論|結論)[^\n<]*(?:</h3>|\n)(.*?)(?=<div class="prayer-box"|<div style="margin-top|\Z)', existing_content, re.DOTALL)
    if concl_m:
        concl_paras = re.findall(r'<p[^>]*>(.*?)</p>', concl_m.group(1), re.DOTALL)
        concl_paras = [re.sub(r'<[^>]+>', '', p).strip() for p in concl_paras if p.strip()]
    else:
        concl_paras = []
    if not concl_paras and kr_data:
        concl_paras = [kr_data.get('concl_text', '')]

    # 祈り
    prayer_m = re.search(r'締めくくりの祈り[^\n<]*(?:</div>|</h4>|\n)(.*?)(?=</div>|\Z)', existing_content, re.DOTALL)
    if prayer_m:
        prayer_text = re.sub(r'<[^>]+>', '', prayer_m.group(1)).strip()
    else:
        prayer_text = kr_data.get('prayer_text', '') if kr_data else ""

    # 표준 HTML 생성
    standard_html = format_sermon_html(
        scripture=meta['scriptureJp'],
        intro_sub=intro_sub,
        intro_paras=intro_paras,
        title=meta['titleJp'],
        points=points,
        apps=apps,
        concl_paras=concl_paras,
        prayer_text=prayer_text
    )
    
    # 업데이트
    art['title'] = meta['titleJp']
    art['scripture'] = meta['scriptureJp']
    art['categoryId'] = meta['cat']
    art['content'] = standard_html
    art['author'] = "キム・ホンマン 学長"
    art['position'] = meta['pos']
    
    updated_count += 1
    print(f"[{meta['num']:2d}] Updated {aid} -> {meta['titleJp']} ({meta['scriptureJp']})")

print(f"\nTotal articles updated: {updated_count}")

# 23번~32번 게시물도 동일한 sermon-content 디자인 형식으로 정리
for i in range(23, 33):
    aid = f"art_judges_17879500{i:02d}000"
    art = next((a for a in data_json['articles'] if a['id'] == aid), None)
    if not art: continue
    
    c = art['content']
    # 이미 표준 형식이 아니라면 정돈
    if not c.startswith('<div class="sermon-content">'):
        # 상단 불필요한 div 제거 및 정리
        c_clean = re.sub(r'^\s*<div[^>]*>.*?</div>\s*</div>\s*', '', c, flags=re.DOTALL)
        
        # 聖書本文 배너 생성
        banner = f'<div style="background-color: #f1f5f9; border-left: 4px solid #0A1C36; padding: 0 12px; margin-bottom: 20px; font-weight: 500; color: #1e293b;">\n    【聖書本文】 {art["scripture"]}\n  </div>'
        
        # prayer box 변환
        c_clean = re.sub(
            r'<div class="prayer-box"[^>]*>\s*<div[^>]*>.*?締めくくりの祈り</div>\s*<p[^>]*>(.*?)</p>\s*</div>',
            r'<div style="margin-top: 24px; padding: 16px 20px; background-color: #f8fafc; border-left: 4px solid #C5A059; border-radius: 4px;">\n    <h4 style="font-size: 1.05em; font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #C5A059;">🙏 締めくくりの祈り</h4>\n    <p style="margin-bottom: 0; line-height: 1.7; color: #334155; font-style: italic;">\1</p>\n  </div>',
            c_clean,
            flags=re.DOTALL
        )
        
        # h3 스타일 통일
        c_clean = re.sub(r'<h3[^>]*>(.*?)</h3>', r'<h3 style="font-size: 1.15em; font-weight: bold; margin-top: 22px; margin-bottom: 8px; color: #0A1C36;">\1</h3>', c_clean)
        # h4 스타일 통일
        c_clean = re.sub(r'<h4[^>]*>(.*?)</h4>', r'<h4 style="font-size: 1.05em; font-weight: bold; margin-top: 16px; margin-bottom: 6px; color: #1e293b;">\1</h4>', c_clean)
        # i 태그 아이콘 제거
        c_clean = re.sub(r'<i[^>]*></i>\s*', '', c_clean)
        # p 스타일 통일
        c_clean = re.sub(r'<p style="[^"]*">', r'<p style="margin-bottom: 10px; line-height: 1.7;">', c_clean)
        
        new_c = f'<div class="sermon-content">\n  {banner}\n{c_clean}\n</div>'
        art['content'] = new_c
        print(f"[{i}] Standardized style for {aid} -> {art['title']}")

# data.json 저장
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data_json, f, ensure_ascii=False, indent=2)

print("\nSuccessfully saved data.json with standardized formatting!")
