import sys
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

def extract_prayer_and_body(text):
    # Try different prayer markers
    prayer_patterns = [
        r'(?:<h[3-5][^>]*>[^<]*(?:締めくくりの祈り|祈り)[^<]*</h[3-5]>|<section[^>]*>[^<]*<h[3-5][^>]*>[^<]*(?:締めくくりの祈り|祈り)[^<]*</h[3-5]>|#{1,4}\s*(?:\d+\.\s*)?(?:締めくくりの祈り|祈り))',
        r'<div style="[^"]*(?:background-color:\s*#f8fafc|background:\s*#f8fafc|border-left:\s*4px solid #C5A059)[^"]*">.*?<h[3-5][^>]*>[^<]*祈り',
        r'<h3[^>]*>.*?(?:恵みと決断|祈り).*?</h3>\s*<div[^>]*border-left:\s*4px solid #C5A059',
        r'<div style="[^"]*border-left:\s*4px solid #C5A059'
    ]
    
    prayer_raw = ""
    clean_body_text = text
    
    for pat in prayer_patterns:
        m = re.search(pat, text, flags=re.DOTALL | re.IGNORECASE)
        if m:
            clean_body_text = text[:m.start()]
            prayer_raw = text[m.start():]
            break
            
    if not prayer_raw:
        # Fallback search for "アーメン" near the end
        amen_pos = text.rfind('アーメン')
        if amen_pos != -1 and (len(text) - amen_pos) < 1500:
            # Look backwards for paragraph or header
            prev_block = text[:amen_pos]
            last_h = max(prev_block.rfind('<h3'), prev_block.rfind('###'), prev_block.rfind('<div style="background'))
            if last_h != -1 and (amen_pos - last_h) < 2000:
                clean_body_text = text[:last_h]
                prayer_raw = text[last_h:]

    return clean_body_text, prayer_raw

print("Extractor ready.")
