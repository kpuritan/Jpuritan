import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

transcript_path = r"C:\Users\user\.gemini\antigravity\brain\4469bdda-feb2-4167-8f5b-fcbd397fe744\.system_generated\logs\transcript_full.jsonl"

last_user_msg = ""
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get('type') == 'USER_INPUT' and '사사기' in data.get('content', ''):
            last_user_msg = data.get('content', '')

print(f"Total length of user message: {len(last_user_msg)} chars")

with open('user_sermons_raw.txt', 'w', encoding='utf-8') as out:
    out.write(last_user_msg)

print("Saved to user_sermons_raw.txt successfully.")
