import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('user_sermons_raw.txt', 'r', encoding='utf-8') as f:
    raw = f.read()

# [설교제목] 기준으로 분할
sections = re.split(r'={10,}\s*(?:\[설교\s*\d+\][^\n\r]*\s*={10,}\s*)?\[설교제목\]\s*:\s*', raw)

print(f"Total sections found: {len(sections)}")

sermons_data = []

# 첫 번째 section은 앞머리 안내글일 수 있으므로 처리
for idx, sec in enumerate(sections):
    if idx == 0 and '[설교본문]' not in sec:
        # 첫 번째 앞부분 확인
        if '[설교제목]' in sec:
            title_part = sec.split('[설교제목]')[1].split(':')[1].strip()
        else:
            continue
    lines = sec.strip().split('\n')
    title = lines[0].strip()
    
    # 본문 추출
    scripture_match = re.search(r'\[설교본문\]\s*:\s*([^\n\r]+)', sec)
    scripture = scripture_match.group(1).strip() if scripture_match else ""
    
    # 1. 서론 추출
    intro_match = re.search(r'1\.\s*서론\s*:\s*([^\n\r]+)\n(.*?)(?=2\.\s*본론)', sec, re.DOTALL)
    intro_subtitle = intro_match.group(1).strip() if intro_match else ""
    intro_text = intro_match.group(2).strip() if intro_match else ""
    
    # 2. 본론 추출
    # 대지들 추출
    points = []
    point_matches = list(re.finditer(r'■\s*제\s*(\d+)\s*대지\s*:\s*([^\n\r]+)\n(.*?)(?=(?:■\s*제\s*\d+\s*대지|3\.\s*적용))', sec, re.DOTALL))
    for pm in point_matches:
        p_num = pm.group(1)
        p_title = pm.group(2).strip()
        p_body = pm.group(3).strip()
        
        # 성경적 근거와 메시지 및 예화 분리
        # 성경적 근거: ...
        # 메시지 및 예화: ...
        basis_match = re.search(r'성경적\s*근거\s*:\s*(.*?)(?=(?:메시지\s*및\s*예화\s*:|메시지\s*및\s*실례\s*:|$))', p_body, re.DOTALL)
        msg_match = re.search(r'(?:메시지\s*및\s*예화|메시지\s*및\s*실례)\s*:\s*(.*)', p_body, re.DOTALL)
        
        basis = basis_match.group(1).strip() if basis_match else ""
        msg = msg_match.group(1).strip() if msg_match else ""
        if not msg and not basis:
            basis = p_body
        
        points.append({
            'num': p_num,
            'title': p_title,
            'basis': basis,
            'msg': msg
        })
    
    # 3. 적용 추출
    app_match = re.search(r'3\.\s*적용\s*:\s*([^\n\r]+)\n(.*?)(?=4\.\s*결론|\[마무리\s*기도문\]|===|$)', sec, re.DOTALL)
    app_title = app_match.group(1).strip() if app_match else "삶으로 살아내는 믿음"
    app_text = app_match.group(2).strip() if app_match else ""
    
    # 4. 결론 추출
    concl_match = re.search(r'4\.\s*결론\s*:\s*([^\n\r]+)\n(.*?)(?=\[마무리\s*기도문\]|===|$)', sec, re.DOTALL)
    concl_title = concl_match.group(1).strip() if concl_match else "은혜와 결단"
    concl_text = concl_match.group(2).strip() if concl_match else ""
    
    # 마무리 기도문 추출
    prayer_match = re.search(r'\[마무리\s*기도문\]\s*:?\s*(.*?)(?=(?:===|==================================================|$))', sec, re.DOTALL)
    prayer_text = prayer_match.group(1).strip() if prayer_match else ""
    
    sermons_data.append({
        'title': title,
        'scripture': scripture,
        'intro_subtitle': intro_subtitle,
        'intro_text': intro_text,
        'points': points,
        'app_title': app_title,
        'app_text': app_text,
        'concl_title': concl_title,
        'concl_text': concl_text,
        'prayer_text': prayer_text
    })

print(f"Parsed {len(sermons_data)} sermons:")
for i, s in enumerate(sermons_data, 1):
    print(f"[{i}] {s['title']} | {s['scripture']} | intro:{bool(s['intro_text'])} | points:{len(s['points'])} | app:{bool(s['app_text'])} | concl:{bool(s['concl_text'])} | prayer:{bool(s['prayer_text'])}")

with open('parsed_sermons.json', 'w', encoding='utf-8') as f:
    json.dump(sermons_data, f, ensure_ascii=False, indent=2)
