import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 22개 설교의 카테고리 매핑 및 메타데이터 정의
sermon_meta = [
    {"num": 1, "id": "art_judges_1787950001000", "cat": "cat_1787930008000", "titleKr": "다시 세상으로", "titleJp": "再び世へ", "scriptureJp": "士師記 8章 32～35節", "pos": 1},
    {"num": 2, "id": "art_judges_1787950002000", "cat": "cat_1787930009000", "titleKr": "악인의 꾀", "titleJp": "悪人の企み", "scriptureJp": "士師記 9章 1～6節", "pos": 2},
    {"num": 3, "id": "art_judges_1787950003000", "cat": "cat_1787930009000", "titleKr": "좋은 지도자 나쁜 지도자", "titleJp": "良い指導者と悪い指導者", "scriptureJp": "士師記 9章 7～21節", "pos": 3},
    {"num": 4, "id": "art_judges_1787950004000", "cat": "cat_1787930009000", "titleKr": "악에 대한 보응", "titleJp": "悪に対する報い", "scriptureJp": "士師記 9章 22～25節、50～57節", "pos": 4},
    {"num": 5, "id": "art_judges_1787950005000", "cat": "cat_1787930010000", "titleKr": "사사 돌라", "titleJp": "士師トラ", "scriptureJp": "士師記 10章 1～2節", "pos": 5},
    {"num": 6, "id": "art_judges_1787950006000", "cat": "cat_1787930010000", "titleKr": "야일", "titleJp": "ヤイル", "scriptureJp": "士師記 10章 3～5節", "pos": 6},
    {"num": 7, "id": "art_judges_1787950007000", "cat": "cat_1787930010000", "titleKr": "회개할 때 까지", "titleJp": "悔い改める時まで", "scriptureJp": "士師記 10章 6～16節", "pos": 7},
    {"num": 8, "id": "art_judges_1787950008000", "cat": "cat_1787930010000", "titleKr": "회개의 증거", "titleJp": "悔い改めの証拠", "scriptureJp": "士師記 10章 17～18節", "pos": 8},
    {"num": 9, "id": "art_judges_1787950009000", "cat": "cat_1787930011000", "titleKr": "사사가 되기까지", "titleJp": "士師となるまで", "scriptureJp": "士師記 11章 1～11節", "pos": 9},
    {"num": 10, "id": "art_judges_1787950010000", "cat": "cat_1787930011000", "titleKr": "축복의 방법", "titleJp": "祝福の方法", "scriptureJp": "士師記 11章 12～28節", "pos": 10},
    {"num": 11, "id": "art_judges_1787950011000", "cat": "cat_1787930011000", "titleKr": "승리 속의 괴로움", "titleJp": "勝利の中の苦しみ", "scriptureJp": "士師記 11章 29～40節", "pos": 11},
    {"num": 12, "id": "art_judges_1787950012000", "cat": "cat_1787930012000", "titleKr": "분쟁의 원인", "titleJp": "紛争の原因", "scriptureJp": "士師記 12章 1～3節", "pos": 12},
    {"num": 13, "id": "art_judges_1787950013000", "cat": "cat_1787930012000", "titleKr": "전쟁의 이유", "titleJp": "戦争の理由", "scriptureJp": "士師記 12章 4～6節", "pos": 13},
    {"num": 14, "id": "art_judges_1787950014000", "cat": "cat_1787930012000", "titleKr": "평안의 때", "titleJp": "平安の時", "scriptureJp": "士師記 12章 7～15節", "pos": 14},
    {"num": 15, "id": "art_judges_1787950015000", "cat": "cat_1787930013000", "titleKr": "오직 은혜", "titleJp": "ただ恵みによって", "scriptureJp": "士師記 13章 1～7節", "pos": 15},
    {"num": 16, "id": "art_judges_1787950016000", "cat": "cat_1787930013000", "titleKr": "남편과 아내", "titleJp": "夫と妻", "scriptureJp": "士師記 13章 8～14節", "pos": 16},
    {"num": 17, "id": "art_judges_1787950017000", "cat": "cat_1787930013000", "titleKr": "대접하는 마노아", "titleJp": "もてなすマノア", "scriptureJp": "士師記 13章 15節", "pos": 17},
    {"num": 18, "id": "art_judges_1787950018000", "cat": "cat_1787930013000", "titleKr": "하나님께 영광", "titleJp": "神に栄光を", "scriptureJp": "士師記 13章 16～20節", "pos": 18},
    {"num": 19, "id": "art_judges_1787950019000", "cat": "cat_1787930013000", "titleKr": "강한 믿음과 약한 믿음", "titleJp": "強い信仰と弱い信仰", "scriptureJp": "士師記 13章 21～23節", "pos": 19},
    {"num": 20, "id": "art_judges_1787950020000", "cat": "cat_1787930013000", "titleKr": "약속과 성취", "titleJp": "約束と成就", "scriptureJp": "士師記 13章 24～25節", "pos": 20},
    {"num": 21, "id": "art_judges_1787950021000", "cat": "cat_1787930014000", "titleKr": "하나님의 은밀한 계획", "titleJp": "神の隠された計画", "scriptureJp": "士師記 14章 1～4節", "pos": 21},
    {"num": 22, "id": "art_judges_1787950022000", "cat": "cat_1787930014000", "titleKr": "사자를 죽이는 삼손", "titleJp": "獅子を打ち殺すサムソン", "scriptureJp": "士師記 14章 5～7節", "pos": 22}
]

print("Metadata array prepared:", len(sermon_meta))
