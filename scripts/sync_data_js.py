import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

json_str = json.dumps(data, ensure_ascii=False, indent=2)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const initialData = ' + json_str + ';\n')
    f.write('if (typeof window !== "undefined") {\n')
    f.write('  window.SITE_DATA = initialData;\n')
    f.write('  window.MASTER_SITE_DATABASE = initialData;\n')
    f.write('}\n')
    f.write('if (typeof module !== "undefined") {\n')
    f.write('  module.exports = initialData;\n')
    f.write('}\n')

print("Successfully synced data.json to data.js!")
