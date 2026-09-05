// ==========================================================================
// Reformed & Puritan Interactive Mindmap Engine v1.0
// Classification Based on Dr. Kim Hong Man (キム・ホンマン 学長) Theological Taxonomy
// ==========================================================================

const MINDMAP_STRUCTURES = {
  // 1. Westminster Shorter Catechism (웨스트민스터 소교리문답 Q1~Q107)
  'cat_cat_1': {
    id: 'cat_cat_1',
    titleJp: 'ウェストミンスター小教理問答 マインドマップ',
    titleKr: '웨스트민스터 소교리문답 마인드맵 (Q1~Q107)',
    subtitle: '信仰の規範と生活の指針（全107問・キム・ホンマン学長 体系分類）',
    themeClass: 'theme-shorter-cat',
    color: '#1e3a8a',
    branches: [
      {
        id: 'sc_intro',
        titleJp: '序論：人の目的と聖書',
        titleKr: '서론: 사람의 목적과 성경',
        qRange: 'Q1 - Q3',
        color: '#1e40af',
        subBranches: [
          {
            title: '人の主たる目的と唯一の規則',
            nodes: [
              { q: 1, label: 'Q1 人の主たる目的' },
              { q: 2, label: 'Q2 唯一の規則聖書' },
              { q: 3, label: 'Q3 聖書の主たる教え' }
            ]
          }
        ]
      },
      {
        id: 'sc_faith',
        titleJp: '第1部：信ずべき教理（神論・救済論）',
        titleKr: '제1부: 믿을 도리 (신론과 구원론)',
        qRange: 'Q4 - Q38',
        color: '#0284c7',
        subBranches: [
          {
            title: '神の本質・三位一体・永遠の定め',
            nodes: [
              { q: 4, label: 'Q4 神とは誰か' },
              { q: 5, label: 'Q5 唯一の神' },
              { q: 6, label: 'Q6 三位一体' },
              { q: 7, label: 'Q7 神の定め(作定)' },
              { q: 8, label: 'Q8 定めの執行' }
            ]
          },
          {
            title: '創造と摂理の御業',
            nodes: [
              { q: 9, label: 'Q9 創造の御業' },
              { q: 10, label: 'Q10 人の創造' },
              { q: 11, label: 'Q11 摂理の御業' },
              { q: 12, label: 'Q12 生命の契約' }
            ]
          },
          {
            title: '人間の堕落・罪と悲惨',
            nodes: [
              { q: 13, label: 'Q13 初代の堕落' },
              { q: 14, label: 'Q14 罪の本質' },
              { q: 15, label: 'Q15 禁断の木の実' },
              { q: 16, label: 'Q16 全人類の堕落' },
              { q: 17, label: 'Q17 堕落した状態' },
              { q: 18, label: 'Q18 原罪と自犯罪' },
              { q: 19, label: 'Q19 堕落の悲惨' }
            ]
          },
          {
            title: '中保者キリスト（身位と職分）',
            nodes: [
              { q: 20, label: 'Q20 恵みの契約' },
              { q: 21, label: 'Q21 唯一の救い主' },
              { q: 22, label: 'Q22 キリストの受肉' },
              { q: 23, label: 'Q23 三重の職分' },
              { q: 24, label: 'Q24 預言者職' },
              { q: 25, label: 'Q25 祭司職' },
              { q: 26, label: 'Q26 王職' },
              { q: 27, label: 'Q27 卑下の状態' },
              { q: 28, label: 'Q28 昇挙の状態' }
            ]
          },
          {
            title: '聖霊と救いの適用（救いの順序）',
            nodes: [
              { q: 29, label: 'Q29 贖いの適用' },
              { q: 30, label: 'Q30 聖霊の働き' },
              { q: 31, label: 'Q31 有効な召命' },
              { q: 32, label: 'Q32 今生での益' },
              { q: 33, label: 'Q33 義認(称義)' },
              { q: 34, label: 'Q34 子とすること' },
              { q: 35, label: 'Q35 聖化' },
              { q: 36, label: 'Q36 確信と平安' },
              { q: 37, label: 'Q37 死のときの益' },
              { q: 38, label: 'Q38 復活と栄光' }
            ]
          }
        ]
      },
      {
        id: 'sc_duty',
        titleJp: '第2部：守るべき本分（律法・十戒・恵みの手段）',
        titleKr: '제2부: 행할 의무 (율법과 은혜의 방편)',
        qRange: 'Q39 - Q107',
        color: '#0d9488',
        subBranches: [
          {
            title: '道徳律と十戒の総綱',
            nodes: [
              { q: 39, label: 'Q39 人の本分' },
              { q: 40, label: 'Q40 道徳律' },
              { q: 41, label: 'Q41 十戒の総綱' },
              { q: 42, label: 'Q42 愛の要約' },
              { q: 43, label: 'Q43 十戒の序文' },
              { q: 44, label: 'Q44 序文の教え' }
            ]
          },
          {
            title: '十戒 第1〜4戒（神への愛）',
            nodes: [
              { q: 45, label: 'Q45 第1戒' },
              { q: 46, label: 'Q46 第1戒の要求' },
              { q: 47, label: 'Q47 第1戒の禁則' },
              { q: 48, label: 'Q48 前にの意' },
              { q: 49, label: 'Q49 第2戒' },
              { q: 50, label: 'Q50 第2戒の要求' },
              { q: 51, label: 'Q51 第2戒の禁則' },
              { q: 52, label: 'Q52 付帯の理由' },
              { q: 53, label: 'Q53 第3戒' },
              { q: 54, label: 'Q54 第3戒の要求' },
              { q: 55, label: 'Q55 第3戒の禁則' },
              { q: 56, label: 'Q56 第3戒の理由' },
              { q: 57, label: 'Q57 第4戒' },
              { q: 58, label: 'Q58 第4戒の要求' },
              { q: 59, label: 'Q59 安息日の指定' },
              { q: 60, label: 'Q60 聖別の方法' },
              { q: 61, label: 'Q61 第4戒の禁則' },
              { q: 62, label: 'Q62 第4戒の理由' }
            ]
          },
          {
            title: '十戒 第5〜10戒（隣人への愛）',
            nodes: [
              { q: 63, label: 'Q63 第5戒' },
              { q: 64, label: 'Q64 第5戒の要求' },
              { q: 65, label: 'Q65 第5戒の禁則' },
              { q: 66, label: 'Q66 約束の理由' },
              { q: 67, label: 'Q67 第6戒' },
              { q: 68, label: 'Q68 第6戒の要求' },
              { q: 69, label: 'Q69 第6戒の禁則' },
              { q: 70, label: 'Q70 第7戒' },
              { q: 71, label: 'Q71 第7戒の要求' },
              { q: 72, label: 'Q72 第7戒の禁則' },
              { q: 73, label: 'Q73 第8戒' },
              { q: 74, label: 'Q74 第8戒の要求' },
              { q: 75, label: 'Q75 第8戒の禁則' },
              { q: 76, label: 'Q76 第9戒' },
              { q: 77, label: 'Q77 第9戒の要求' },
              { q: 78, label: 'Q78 第9戒の禁則' },
              { q: 79, label: 'Q79 第10戒' },
              { q: 80, label: 'Q80 第10戒の要求' },
              { q: 81, label: 'Q81 第10戒の禁則' }
            ]
          },
          {
            title: '罪の刑罰・御言葉・聖礼典',
            nodes: [
              { q: 82, label: 'Q82 律法遵守の不能' },
              { q: 83, label: 'Q83 罪の重さ' },
              { q: 84, label: 'Q84 罪の当然の報い' },
              { q: 85, label: 'Q85 怒りを逃れる道' },
              { q: 86, label: 'Q86 イエスへの信仰' },
              { q: 87, label: 'Q87 命に至る悔改め' },
              { q: 88, label: 'Q88 外的手段(恵みの手段)' },
              { q: 89, label: 'Q89 御言葉の効力' },
              { q: 90, label: 'Q90 御言葉の聴き方' },
              { q: 91, label: 'Q91 聖礼典の効力' },
              { q: 92, label: 'Q92 聖礼典とは' },
              { q: 93, label: 'Q93 二つの聖礼典' },
              { q: 94, label: 'Q94 洗礼の意味' },
              { q: 95, label: 'Q95 洗礼の受給者' },
              { q: 96, label: 'Q96 主の晩餐' },
              { q: 97, label: 'Q97 晩餐への準備' }
            ]
          },
          {
            title: '祈りと主の祈り（解説）',
            nodes: [
              { q: 98, label: 'Q98 祈りとは' },
              { q: 99, label: 'Q99 主の祈りの指針' },
              { q: 100, label: 'Q100 序文の教え' },
              { q: 101, label: 'Q101 第1の祈願' },
              { q: 102, label: 'Q102 第2の祈願' },
              { q: 103, label: 'Q103 第3の祈願' },
              { q: 104, label: 'Q104 第4の祈願' },
              { q: 105, label: 'Q105 第5の祈願' },
              { q: 106, label: 'Q106 第6の祈願' },
              { q: 107, label: 'Q107 結びの讃美' }
            ]
          }
        ]
      }
    ]
  },

  // 2. Westminster Larger Catechism (웨스트민스터 대교리문답 Q1~Q196)
  'cat_cat_2': {
    id: 'cat_cat_2',
    titleJp: 'ウェストミンスター大教理問答 マインドマップ',
    titleKr: '웨스트민스터 대교리문답 마인드맵 (Q1~Q196)',
    subtitle: '詳細かつ網羅的な改革派神学の集大成（全196問・キム・ホンマン学長 体系分類）',
    themeClass: 'theme-larger-cat',
    color: '#047857',
    branches: [
      {
        id: 'lc_intro',
        titleJp: '序論：最高目的と聖書の完全性',
        titleKr: '서론: 최고 목적과 성경',
        qRange: 'Q1 - Q5',
        color: '#10b981',
        subBranches: [
          {
            title: '人の目的と神の言葉',
            nodes: [
              { q: 1, label: 'Q1 人の最高目的' },
              { q: 2, label: 'Q2 神の存在の証明' },
              { q: 3, label: 'Q3 聖書とは何か' },
              { q: 4, label: 'Q4 聖書の神性証明' },
              { q: 5, label: 'Q5 聖書の教える主要事' }
            ]
          }
        ]
      },
      {
        id: 'lc_faith',
        titleJp: '第1部：信ずべき教理（神、契約、キリスト、救い、審判）',
        titleKr: '제1부: 믿을 도리 (신론, 언약, 그리스도, 구원, 심판)',
        qRange: 'Q6 - Q90',
        color: '#059669',
        subBranches: [
          {
            title: '神論・三位一体・永遠の定め',
            nodes: [
              { q: 6, label: 'Q6-11 神の本質・三位一体' },
              { q: 12, label: 'Q12-14 神の永遠の定め' },
              { q: 15, label: 'Q15-17 創造の御業と人' },
              { q: 18, label: 'Q18-20 摂理と生命の契約' }
            ]
          },
          {
            title: '人間の堕落と恵みの契約',
            nodes: [
              { q: 21, label: 'Q21-29 堕落・原罪と悲惨' },
              { q: 30, label: 'Q30-35 恵みの契約' },
              { q: 36, label: 'Q36-42 救い主キリストの神人性' }
            ]
          },
          {
            title: 'キリストの三重職分と卑下・昇挙',
            nodes: [
              { q: 43, label: 'Q43-45 預言者・祭司・王職' },
              { q: 46, label: 'Q46-50 キリストの卑下の状態' },
              { q: 51, label: 'Q51-56 キリストの昇挙の状態' }
            ]
          },
          {
            title: '聖霊の適用・教会・救いの恩恵',
            nodes: [
              { q: 57, label: 'Q57-65 贖いの適用と不可視・可視教会' },
              { q: 66, label: 'Q66-69 有効な召命とキリストとの合一' },
              { q: 70, label: 'Q70-74 義認・養子縁組・聖化' },
              { q: 75, label: 'Q75-81 救いの確信と聖徒の堅忍' }
            ]
          },
          {
            title: '死・復活・最後の審判',
            nodes: [
              { q: 82, label: 'Q82-86 死における聖徒の益' },
              { q: 87, label: 'Q87-90 復活・最後の審判と永遠の栄光' }
            ]
          }
        ]
      },
      {
        id: 'lc_duty',
        titleJp: '第2部：守るべき本分（十戒詳細解題・恵みの手段・祈り）',
        titleKr: '제2부: 행할 의무 (십계명 상세강해, 은혜의 방편, 기도)',
        qRange: 'Q91 - Q196',
        color: '#0f766e',
        subBranches: [
          {
            title: '十戒の解釈原則と第1〜4戒（対神義務）',
            nodes: [
              { q: 91, label: 'Q91-99 律法の要求と解釈原則' },
              { q: 100, label: 'Q100-106 序文および第1戒' },
              { q: 107, label: 'Q107-110 第2戒（偶像礼拝の禁則）' },
              { q: 111, label: 'Q111-114 第3戒（神の御名）' },
              { q: 115, label: 'Q115-121 第4戒（安息日の聖別）' }
            ]
          },
          {
            title: '第5〜10戒（対人義務）',
            nodes: [
              { q: 122, label: 'Q122-133 第5戒（権威と両親）' },
              { q: 134, label: 'Q134-136 第6戒（生命の尊厳）' },
              { q: 137, label: 'Q137-139 第7戒（純潔と結婚）' },
              { q: 140, label: 'Q140-142 第8戒（財産と正義）' },
              { q: 143, label: 'Q143-145 第9戒（真理と証言）' },
              { q: 146, label: 'Q146-150 第10戒（満足と貪欲の禁止）' }
            ]
          },
          {
            title: '罪の重さと御言葉・聖礼典の恵み',
            nodes: [
              { q: 151, label: 'Q151-153 罪の度合いと報い' },
              { q: 154, label: 'Q154-160 外的手段と御言葉の説教' },
              { q: 161, label: 'Q161-164 聖礼典の本質' },
              { q: 165, label: 'Q165-167 洗礼の意義と対象' },
              { q: 168, label: 'Q168-177 主の晩餐とふさわしい準備' }
            ]
          },
          {
            title: '祈りの特権と主の祈り詳細講解',
            nodes: [
              { q: 178, label: 'Q178-185 祈りの本質・対象・キリストの仲保' },
              { q: 186, label: 'Q186-190 主の祈り序文と第1〜3祈願' },
              { q: 191, label: 'Q191-196 第4〜6祈願および結びの讃美' }
            ]
          }
        ]
      }
    ]
  },

  // 3. Westminster Confession of Faith (웨스트민스터 신앙고백서 1~33장)
  'cat_cat_3': {
    id: 'cat_cat_3',
    titleJp: 'ウェストミンスター信仰告白 マインドマップ',
    titleKr: '웨스트민스터 신앙고백서 마인드맵 (1~33장)',
    subtitle: '歴史的改革派信仰の標準文書（全33章・キム・ホンマン学長 体系分類）',
    themeClass: 'theme-wcf',
    color: '#831843',
    branches: [
      {
        id: 'wcf_b1',
        titleJp: '1. 聖書と神論（第1〜5章）',
        titleKr: '1. 성경과 신론 (1~5장)',
        qRange: '第1 - 5章',
        color: '#9f1239',
        subBranches: [
          {
            title: '神の啓示と本質・統治',
            nodes: [
              { cat: 'cat_wcf_01', ch: 1, label: '第1章 聖書 (10節)' },
              { cat: 'cat_wcf_02', ch: 2, label: '第2章 神と三位一体 (3節)' },
              { cat: 'cat_wcf_03', ch: 3, label: '第3章 神の永遠の定め (8節)' },
              { cat: 'cat_wcf_04', ch: 4, label: '第4章 創造 (2節)' },
              { cat: 'cat_wcf_05', ch: 5, label: '第5章 摂理 (7節)' }
            ]
          }
        ]
      },
      {
        id: 'wcf_b2',
        titleJp: '2. 堕落・契約・中保者（第6〜8章）',
        titleKr: '2. 타락, 언약, 중보자 그리스도 (6~8장)',
        qRange: '第6 - 8章',
        color: '#be123c',
        subBranches: [
          {
            title: '罪の現実と贖いの道',
            nodes: [
              { cat: 'cat_wcf_06', ch: 6, label: '第6章 罪と刑罰 (6節)' },
              { cat: 'cat_wcf_07', ch: 7, label: '第7章 神と人の契約 (6節)' },
              { cat: 'cat_wcf_08', ch: 8, label: '第8章 中保者キリスト (8節)' }
            ]
          }
        ]
      },
      {
        id: 'wcf_b3',
        titleJp: '3. 救いの恵みと聖徒の生活（第9〜18章）',
        titleKr: '3. 구원의 은혜와 성도의 삶 (9~18장)',
        qRange: '第9 - 18章',
        color: '#c026d3',
        subBranches: [
          {
            title: '救いの順序と恩恵',
            nodes: [
              { cat: 'cat_wcf_09', ch: 9, label: '第9章 自由意志 (5節)' },
              { cat: 'cat_wcf_10', ch: 10, label: '第10章 有効な召命 (4節)' },
              { cat: 'cat_wcf_11', ch: 11, label: '第11章 義認 (6節)' },
              { cat: 'cat_wcf_12', ch: 12, label: '第12章 養子縁組 (1節)' },
              { cat: 'cat_wcf_13', ch: 13, label: '第13章 聖化 (3節)' },
              { cat: 'cat_wcf_14', ch: 14, label: '第14章 救いに至る信仰 (3節)' },
              { cat: 'cat_wcf_15', ch: 15, label: '第15章 悔い改め (6節)' },
              { cat: 'cat_wcf_16', ch: 16, label: '第16章 善行 (7節)' },
              { cat: 'cat_wcf_17', ch: 17, label: '第17章 聖徒の堅忍 (3節)' },
              { cat: 'cat_wcf_18', ch: 18, label: '第18章 救いの確信 (4節)' }
            ]
          }
        ]
      },
      {
        id: 'wcf_b4',
        titleJp: '4. 律法・自由・礼拝・国家（第19〜24章）',
        titleKr: '4. 율법, 자유, 예배, 국가 (19~24장)',
        qRange: '第19 - 24章',
        color: '#7e22ce',
        subBranches: [
          {
            title: '敬虔と社会的秩序',
            nodes: [
              { cat: 'cat_wcf_19', ch: 19, label: '第19章 神の律法 (7節)' },
              { cat: 'cat_wcf_20', ch: 20, label: '第20章 キリスト者の自由 (4節)' },
              { cat: 'cat_wcf_21', ch: 21, label: '第21章 礼拝と安息日 (8節)' },
              { cat: 'cat_wcf_22', ch: 22, label: '第22章 誓いと誓願 (7節)' },
              { cat: 'cat_wcf_23', ch: 23, label: '第23章 市民政府 (4節)' },
              { cat: 'cat_wcf_24', ch: 24, label: '第24章 結婚と離婚 (6節)' }
            ]
          }
        ]
      },
      {
        id: 'wcf_b5',
        titleJp: '5. 教会・聖礼典・終末（第25〜33章）',
        titleKr: '5. 교회, 성례전, 종말과 최후심판 (25~33장)',
        qRange: '第25 - 33章',
        color: '#4338ca',
        subBranches: [
          {
            title: '教会の共同体と永遠の審判',
            nodes: [
              { cat: 'cat_wcf_25', ch: 25, label: '第25章 教会 (6節)' },
              { cat: 'cat_wcf_26', ch: 26, label: '第26章 聖徒の交わり (3節)' },
              { cat: 'cat_wcf_27', ch: 27, label: '第27章 聖礼典 (5節)' },
              { cat: 'cat_wcf_28', ch: 28, label: '第28章 洗礼 (7節)' },
              { cat: 'cat_wcf_29', ch: 29, label: '第29章 主の晩餐 (8節)' },
              { cat: 'cat_wcf_30', ch: 30, label: '第30章 教会の懲戒 (4節)' },
              { cat: 'cat_wcf_31', ch: 31, label: '第31章 大会と総会 (4節)' },
              { cat: 'cat_wcf_32', ch: 32, label: '第32章 死後と復活 (3節)' },
              { cat: 'cat_wcf_33', ch: 33, label: '第33章 最後の審判 (3節)' }
            ]
          }
        ]
      }
    ]
  },

  // 4. Heidelberg Catechism (하이델베르크 요리문답 Q1~Q129)
  'cat_cat_4': {
    id: 'cat_cat_4',
    titleJp: 'ハイデルベルク信仰問答 マインドマップ',
    titleKr: '하이델베르크 요리문답 마인드맵 (Q1~Q129)',
    subtitle: '福音的慰めとキリスト者の感謝の生活（全129問・キム・ホンマン学長 体系分類）',
    themeClass: 'theme-heidelberg',
    color: '#4f46e5',
    branches: [
      {
        id: 'hc_intro',
        titleJp: '序論：唯一の慰め',
        titleKr: '서론: 유일한 위로',
        qRange: '第1主日 (Q1-2)',
        color: '#6366f1',
        subBranches: [
          {
            title: '生と死における慰め',
            nodes: [
              { q: 1, label: 'Q1 唯一の慰め' },
              { q: 2, label: 'Q2 必要な3つの知識' }
            ]
          }
        ]
      },
      {
        id: 'hc_part1',
        titleJp: '第1部：人間の罪と悲惨',
        titleKr: '제1부: 죄와 비참',
        qRange: '第2〜4主日 (Q3-11)',
        color: '#ef4444',
        subBranches: [
          {
            title: '律法による罪の自覚と神の公義',
            nodes: [
              { q: 3, label: 'Q3 悲惨の知り方' },
              { q: 4, label: 'Q4 律法の要求' },
              { q: 5, label: 'Q5 不服従の罪' },
              { q: 6, label: 'Q6 神の創造の善さ' },
              { q: 7, label: 'Q7 堕落の起源' },
              { q: 8, label: 'Q8 全的腐敗' },
              { q: 9, label: 'Q9 神の正義' },
              { q: 10, label: 'Q10 罪への怒り' },
              { q: 11, label: 'Q11 義と憐れみ' }
            ]
          }
        ]
      },
      {
        id: 'hc_part2',
        titleJp: '第2部：人間の救いと贖い',
        titleKr: '제2부: 구속과 은혜',
        qRange: '第5〜31主日 (Q12-85)',
        color: '#3b82f6',
        subBranches: [
          {
            title: '中保者キリストと信仰',
            nodes: [
              { q: 12, label: 'Q12 救いの身代わり' },
              { q: 13, label: 'Q13 被造物の限界' },
              { q: 14, label: 'Q14 唯一の中保者' },
              { q: 15, label: 'Q15 真の神にして真の人' },
              { q: 16, label: 'Q16 なぜ真の人か' },
              { q: 17, label: 'Q17 なぜ真の神か' },
              { q: 18, label: 'Q18 中保イエス' },
              { q: 19, label: 'Q19 福音の啓示' },
              { q: 20, label: 'Q20 全員の救いか' },
              { q: 21, label: 'Q21 真の信仰とは' },
              { q: 22, label: 'Q22 信ずべき箇条' },
              { q: 23, label: 'Q23 使徒信条' }
            ]
          },
          {
            title: '使徒信条解説（父・子・聖霊）',
            nodes: [
              { q: 24, label: 'Q24-28 父なる神と創造' },
              { q: 29, label: 'Q29-39 御子イエス・受肉・十字架' },
              { q: 40, label: 'Q40-44 死とよみへの降下' },
              { q: 45, label: 'Q45-52 復活・昇天・再臨' },
              { q: 53, label: 'Q53-58 聖霊・教会・永遠の命' }
            ]
          },
          {
            title: '信仰義認・善行・聖礼典',
            nodes: [
              { q: 59, label: 'Q59-64 唯信仰による義認' },
              { q: 65, label: 'Q65-68 聖礼典の本質' },
              { q: 69, label: 'Q69-74 聖なる洗礼' },
              { q: 75, label: 'Q75-82 主の晩餐の恵み' },
              { q: 83, label: 'Q83-85 天国の鍵と教会の権懲' }
            ]
          }
        ]
      },
      {
        id: 'hc_part3',
        titleJp: '第3部：感謝の生活（十戒と祈り）',
        titleKr: '제3부: 감사의 삶',
        qRange: '第32〜52主日 (Q86-129)',
        color: '#10b981',
        subBranches: [
          {
            title: '悔い改めと十戒（感謝の実践）',
            nodes: [
              { q: 86, label: 'Q86-91 善行の動機と真の悔改め' },
              { q: 92, label: 'Q92-103 第1〜4戒（礼拝と安息日）' },
              { q: 104, label: 'Q104-115 第5〜10戒（隣人への愛）' }
            ]
          },
          {
            title: '祈りと主の祈り解説',
            nodes: [
              { q: 116, label: 'Q116-119 祈りの必要性と規範' },
              { q: 120, label: 'Q120-121 主の祈りの序文' },
              { q: 122, label: 'Q122-127 6つの祈願' },
              { q: 128, label: 'Q128-129 結びの讃美とアーメン' }
            ]
          }
        ]
      }
    ]
  }
};

// Check if a category ID is one of the 4 Reformed Confession/Catechism categories
function isCatechismOrWcfCategory(catId) {
  if (!catId) return false;
  if (catId === 'cat_cat_1' || catId === 'cat_cat_2' || catId === 'cat_cat_3' || catId === 'cat_cat_4') return true;
  if (catId.startsWith('cat_wcf_')) return true;
  return false;
}

// Get the root mindmap category ID ('cat_cat_1', 'cat_cat_2', 'cat_cat_3', 'cat_cat_4')
function getMindmapRootCategoryId(catId) {
  if (!catId) return 'cat_cat_1';
  if (catId === 'cat_cat_1') return 'cat_cat_1';
  if (catId === 'cat_cat_2') return 'cat_cat_2';
  if (catId === 'cat_cat_3' || catId.startsWith('cat_wcf_')) return 'cat_cat_3';
  if (catId === 'cat_cat_4') return 'cat_cat_4';
  return 'cat_cat_1';
}

// Find corresponding article object for a mindmap node
function findArticleForMindmapNode(node, rootCatId, allArticles) {
  if (!allArticles || allArticles.length === 0) return null;

  // 1. WCF Chapter Match
  if (rootCatId === 'cat_cat_3' && (node.cat || node.ch)) {
    if (node.cat) {
      const match = allArticles.find(a => a.categoryId === node.cat);
      if (match) return match;
    }
    if (node.ch) {
      const padCh = String(node.ch).padStart(2, '0');
      const match = allArticles.find(a => a.categoryId === `cat_wcf_${padCh}` || (a.title && a.title.includes(`[${node.ch}章`)));
      if (match) return match;
    }
  }

  // 2. Catechism Question Match (e.g. Q1, Q129)
  if (node.q !== undefined) {
    const qNum = Number(node.q);

    // Filter by category scope first
    let candidates = [];
    if (rootCatId === 'cat_cat_1') {
      candidates = allArticles.filter(a => a.categoryId === 'cat_cat_1');
    } else if (rootCatId === 'cat_cat_2') {
      candidates = allArticles.filter(a => a.categoryId === 'cat_cat_2');
    } else if (rootCatId === 'cat_cat_4') {
      candidates = allArticles.filter(a => a.categoryId === 'cat_cat_4');
    } else {
      candidates = allArticles;
    }

    // Exact question match in title
    for (const art of candidates) {
      const t = art.title || '';
      // Match patterns: "第1問", "질문 1", "Q1", "Question 1"
      const m = t.match(/(?:第|질문|Q|Question)\s*(\d+)\s*(?:問|:|：|\.|\s)/i);
      if (m && parseInt(m[1], 10) === qNum) {
        return art;
      }
    }

    // Fallback: match by position or ID sequence
    if (candidates.length >= qNum && qNum > 0) {
      return candidates[qNum - 1];
    }
  }

  return null;
}

// Render the Interactive Mindmap Board View
function renderMindmapBoard(container, targetCatId, allArticles) {
  if (!container) return;
  const rootCatId = getMindmapRootCategoryId(targetCatId);
  const data = MINDMAP_STRUCTURES[rootCatId] || MINDMAP_STRUCTURES['cat_cat_1'];

  container.innerHTML = '';
  container.className = 'mindmap-outer-container';

  // 1. Mindmap Board Header with Confession Switcher and Action Tools
  const header = document.createElement('div');
  header.className = 'mindmap-board-header';
  header.innerHTML = `
    <div class="mindmap-header-left">
      <div class="mindmap-badge"><i class="fa-solid fa-brain"></i> インタラクティブ・体系マインドマップ</div>
      <h2 class="mindmap-board-title">${data.titleJp}</h2>
      <div class="mindmap-board-subtitle">${data.subtitle}</div>
    </div>
    <div class="mindmap-header-right">
      <!-- Confession Quick Switcher Dropdown -->
      <div class="mindmap-switcher-group">
        <label style="font-size: 0.8rem; font-weight: 700; color: #64748b; margin-right: 6px;">文書選択:</label>
        <select class="form-input mindmap-confession-select" onchange="selectSubcategory(this.value, false); setArticleViewMode('mindmap');">
          <option value="cat_cat_1" ${rootCatId === 'cat_cat_1' ? 'selected' : ''}>ウェストミンスター小教理問答 (107問)</option>
          <option value="cat_cat_2" ${rootCatId === 'cat_cat_2' ? 'selected' : ''}>ウェストミンスター大教理問答 (196問)</option>
          <option value="cat_cat_3" ${rootCatId === 'cat_cat_3' ? 'selected' : ''}>ウェストミンスター信仰告白 (33章)</option>
          <option value="cat_cat_4" ${rootCatId === 'cat_cat_4' ? 'selected' : ''}>ハイデルベルク信仰問答 (129問)</option>
        </select>
      </div>
      <!-- Zoom/Layout Tool Buttons -->
      <div class="mindmap-tool-btns">
        <button type="button" class="btn-mindmap-tool" onclick="toggleMindmapFullscreen()" title="マインドマップ全画面表示 (전체화면)"><i class="fa-solid fa-expand"></i> 全画面</button>
      </div>
    </div>
  `;
  container.appendChild(header);

  // 2. Notice / Helper Bar
  const noticeBar = document.createElement('div');
  noticeBar.className = 'mindmap-notice-bar';
  noticeBar.innerHTML = `
    <span><i class="fa-solid fa-circle-info"></i> <strong>利用案内:</strong> 各項目（問・節）をクリックすると、キム・ホンマン学長の詳細解説と関連聖句の本文ページが即座に開きます。</span>
  `;
  container.appendChild(noticeBar);

  // 3. Canvas Container & Tree Layout
  const canvas = document.createElement('div');
  canvas.className = 'mindmap-canvas';
  canvas.id = 'mindmap-canvas-area';

  // Central Hub Node
  const centralHub = document.createElement('div');
  centralHub.className = 'mindmap-central-hub';
  centralHub.style.borderColor = data.color;
  centralHub.innerHTML = `
    <div class="hub-icon" style="background: ${data.color};"><i class="fa-solid fa-book-bible"></i></div>
    <div class="hub-title">${data.titleJp.replace(' マインドマップ', '')}</div>
    <div class="hub-tag">キム・ホンマン学長 体系綱要</div>
  `;
  canvas.appendChild(centralHub);

  // Tree Branches Grid Wrapper
  const branchesGrid = document.createElement('div');
  branchesGrid.className = 'mindmap-branches-grid';

  data.branches.forEach((branch, bIdx) => {
    const branchCard = document.createElement('div');
    branchCard.className = 'mindmap-branch-card';
    branchCard.style.borderTopColor = branch.color || data.color;

    // Branch Header
    const bHeader = document.createElement('div');
    bHeader.className = 'mindmap-branch-header';
    bHeader.style.background = branch.color || data.color;
    bHeader.innerHTML = `
      <div class="branch-header-title">${branch.titleJp}</div>
      <div class="branch-header-range">${branch.qRange}</div>
    `;
    branchCard.appendChild(bHeader);

    // Sub-branches container
    const subContainer = document.createElement('div');
    subContainer.className = 'mindmap-subbranches-container';

    branch.subBranches.forEach(sub => {
      const subBox = document.createElement('div');
      subBox.className = 'mindmap-subbranch-box';

      const subTitle = document.createElement('div');
      subTitle.className = 'mindmap-subbranch-title';
      subTitle.innerHTML = `<i class="fa-solid fa-tag"></i> ${sub.title}`;
      subBox.appendChild(subTitle);

      const pillsGrid = document.createElement('div');
      pillsGrid.className = 'mindmap-pills-grid';

      sub.nodes.forEach(node => {
        const pill = document.createElement('div');
        pill.className = 'mindmap-node-pill';
        
        // Find matching article
        const matchedArt = findArticleForMindmapNode(node, rootCatId, allArticles);
        
        if (matchedArt) {
          pill.classList.add('has-article');
          pill.title = `【クリックして閲覧】\n${matchedArt.title}\n著者: ${matchedArt.author || 'キム・ホンマン 学長'}`;
          pill.onclick = () => {
            viewArticleDetail(matchedArt.id);
          };
        } else {
          // If WCF chapter node, clicking can filter to that chapter
          if (node.cat) {
            pill.title = `【クリックして第${node.ch}章の一覧を開く】`;
            pill.onclick = () => {
              selectSubcategory(node.cat, true);
            };
          } else {
            pill.classList.add('disabled');
            pill.title = '準備中';
          }
        }

        pill.innerHTML = `
          <span class="pill-badge"><i class="fa-solid fa-circle-dot"></i></span>
          <span class="pill-text">${node.label}</span>
        `;
        pillsGrid.appendChild(pill);
      });

      subBox.appendChild(pillsGrid);
      subContainer.appendChild(subBox);
    });

    branchCard.appendChild(subContainer);
    branchesGrid.appendChild(branchCard);
  });

  canvas.appendChild(branchesGrid);
  container.appendChild(canvas);
}

// Fullscreen toggle helper for mindmap
function toggleMindmapFullscreen() {
  const container = document.getElementById('articles-list-container');
  if (!container) return;
  container.classList.toggle('mindmap-fullscreen-mode');
  if (container.classList.contains('mindmap-fullscreen-mode')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Export for global browser window access
if (typeof window !== 'undefined') {
  window.MINDMAP_STRUCTURES = MINDMAP_STRUCTURES;
  window.renderMindmapBoard = renderMindmapBoard;
  window.isCatechismOrWcfCategory = isCatechismOrWcfCategory;
  window.getMindmapRootCategoryId = getMindmapRootCategoryId;
  window.toggleMindmapFullscreen = toggleMindmapFullscreen;
}
