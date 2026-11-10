const questions = [
  {
    "number": 1,
    "title": "行动与责任",
    "dimension": "行动与责任",
    "text": "例行巡逻结束前，一名新兵没有按时回到集合点。你只知道他最后出现的路口，天色正在变暗。",
    "options": [
      {
        "text": "我会先去最后出现的路口找人；等完整命令下来，可能已经错过时机。",
        "signal": "在“行动与责任”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会留下一人守住集合点，自己去确认他是否安全。",
        "signal": "在“行动与责任”中选择这种处理方式",
        "roleId": "mikasa"
      },
      {
        "text": "我会核对他最后的路线、时间和沿途标记，再划出一个有限的搜寻范围。",
        "signal": "在“行动与责任”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会先点清现有人数，安排最近的巡逻组搜索，避免整队失去秩序。",
        "signal": "在“行动与责任”中选择这种处理方式",
        "roleId": "levi"
      }
    ]
  },
  {
    "number": 2,
    "title": "真相与领导责任",
    "dimension": "真相与领导责任",
    "text": "一次行动顺利结束，汇报却略过了一个险些让同伴受伤的判断。你知道这段经过会影响下一次任务。",
    "options": [
      {
        "text": "我会说明这次行动真正要解决的问题，也把被略过的判断写进后续部署依据。",
        "signal": "在“真相与领导责任”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会回到记录里核对细节；如果证据与汇报不符，就要求更正。",
        "signal": "在“真相与领导责任”中选择这种处理方式",
        "roleId": "hange"
      },
      {
        "text": "如果那个判断出自我，我会把自己的部分说清楚，不让同伴替我承担。",
        "signal": "在“真相与领导责任”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会先判断这项遗漏会造成哪些长期风险，再把最影响决策的事实交给需要知道的人。",
        "signal": "在“真相与领导责任”中选择这种处理方式",
        "roleId": "zeke"
      }
    ]
  },
  {
    "number": 3,
    "title": "身份与自主",
    "dimension": "身份与自主",
    "text": "训练结束后，长官依据你的表现替你定下了一个固定位置。这个安排适合队伍，却不是你想走的方向。",
    "options": [
      {
        "text": "我会承认自己曾经迎合过别人的期待，但这次要说清楚我愿意承担什么。",
        "signal": "在“身份与自主”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "我会先接受有限任务，观察它是否真的适合我；不急着把一个称呼当成全部。",
        "signal": "在“身份与自主”中选择这种处理方式",
        "roleId": "annie"
      },
      {
        "text": "我会直接质疑这个安排，至少要让自己的选择进入讨论。",
        "signal": "在“身份与自主”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会先确认这个位置会影响谁的安全，再作决定，同时不把自己的意愿完全交出去。",
        "signal": "在“身份与自主”中选择这种处理方式",
        "roleId": "mikasa"
      }
    ]
  },
  {
    "number": 4,
    "title": "事实与公开时机",
    "dimension": "事实与公开时机",
    "text": "你整理一份旧调查记录时，发现其中的地图标记与口头说明对不上。现在公开疑点，可能会让刚恢复的队伍再次争执。",
    "options": [
      {
        "text": "我会找第二份记录交叉核实，并把目前仍不确定的部分也说明白。",
        "signal": "在“事实与公开时机”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会先报告已确认的事实和会影响行动的部分，不让猜测混进命令。",
        "signal": "在“事实与公开时机”中选择这种处理方式",
        "roleId": "levi"
      },
      {
        "text": "我会判断哪些人必须立刻知道、哪些决定依赖这条信息，再确定公开顺序。",
        "signal": "在“事实与公开时机”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会回到原始记录和现场重新检查，看看究竟是哪一个假设出了错。",
        "signal": "在“事实与公开时机”中选择这种处理方式",
        "roleId": "hange"
      }
    ]
  },
  {
    "number": 5,
    "title": "承诺与边界",
    "dimension": "承诺与边界",
    "text": "难得的休息时间里，一位同伴想和你谈谈；另一边还有一件你答应帮忙的事。你最近已经很疲惫。",
    "options": [
      {
        "text": "我可能会先答应两边，之后再想办法补上；我不想让任何人觉得被丢下。",
        "signal": "在“承诺与边界”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会比较两件事的后续影响，尽早告诉其中一方我能做到什么、做不到什么。",
        "signal": "在“承诺与边界”中选择这种处理方式",
        "roleId": "zeke"
      },
      {
        "text": "我会直接说出自己更想陪谁、愿意帮到哪一步；善意不等于必须全答应。",
        "signal": "在“承诺与边界”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "我会承认自己需要休息，清楚拒绝一件事，而不是带着怨气勉强完成。",
        "signal": "在“承诺与边界”中选择这种处理方式",
        "roleId": "annie"
      }
    ]
  },
  {
    "number": 6,
    "title": "失败与修正",
    "dimension": "失败与修正",
    "text": "一次训练演习与你提出的计划有关。计划刚开始就失效，队伍只剩很短时间调整。",
    "options": [
      {
        "text": "我会先抓住现场出现的新机会；计划已经不管用，就不能只等下一道命令。",
        "signal": "在“失败与修正”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会先确认被困住的同伴，再带他回到队伍重新行动。",
        "signal": "在“失败与修正”中选择这种处理方式",
        "roleId": "mikasa"
      },
      {
        "text": "我会指出计划依赖的假设是什么，快速换一套能被现场信息支持的方案。",
        "signal": "在“失败与修正”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会先收拢队形，执行眼下最稳妥的动作，复盘等危险过去再说。",
        "signal": "在“失败与修正”中选择这种处理方式",
        "roleId": "levi"
      }
    ]
  },
  {
    "number": 7,
    "title": "未知与使命",
    "dimension": "未知与使命",
    "text": "巡查途中，你们发现一种从未记录过的异常痕迹。继续观察可能得到重要线索，也会占用原定任务时间。",
    "options": [
      {
        "text": "我会判断它是否可能改变接下来的行动目标；若值得，就安排有限的人手与时间调查。",
        "signal": "在“未知与使命”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会想办法留下样本、记录变化，并争取一次可重复的观察。",
        "signal": "在“未知与使命”中选择这种处理方式",
        "roleId": "hange"
      },
      {
        "text": "我会先保护负责记录的人和队伍；即使自己也好奇，仍先把眼前责任完成。",
        "signal": "在“未知与使命”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会先问这条线索能否改变整体判断；如果不能，就不让好奇心替全队决定风险。",
        "signal": "在“未知与使命”中选择这种处理方式",
        "roleId": "zeke"
      }
    ]
  },
  {
    "number": 8,
    "title": "被期待的可靠",
    "dimension": "被期待的可靠",
    "text": "大家习惯把最难处理的事交给你。一位同伴又说“你最可靠，还是你来扛吧”，但你已经接近极限。",
    "options": [
      {
        "text": "我会承认自己不想再靠迎合证明价值，提出一个我确实愿意承担的范围。",
        "signal": "在“被期待的可靠”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "我会明确说出不能接下的部分；别人觉得我冷淡，也比作出无法兑现的承诺好。",
        "signal": "在“被期待的可靠”中选择这种处理方式",
        "roleId": "annie"
      },
      {
        "text": "我会质疑为什么总由我承担，并要求重新分配，而不是继续接受这个默认安排。",
        "signal": "在“被期待的可靠”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会先保护眼下最容易受伤的人，再要求队伍看见守护不能永远只由一个人负责。",
        "signal": "在“被期待的可靠”中选择这种处理方式",
        "roleId": "mikasa"
      }
    ]
  },
  {
    "number": 9,
    "title": "探索与返程",
    "dimension": "探索与返程",
    "text": "队伍来到一处未标记的区域。再往前也许能找到关键答案，但按照现有时间继续深入，可能赶不上返程。",
    "options": [
      {
        "text": "我会先整理路线和已知条件，留下能让下一次行动更可靠的记录。",
        "signal": "在“探索与返程”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会按返程时间撤回；不能把队伍的安全押在一个尚未证实的发现上。",
        "signal": "在“探索与返程”中选择这种处理方式",
        "roleId": "levi"
      },
      {
        "text": "我会评估这项发现对总目标的价值，决定是否让小队承担一次有边界的风险。",
        "signal": "在“探索与返程”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会争取一个明确的观察时限，至少确认痕迹从哪里来、是否值得再追。",
        "signal": "在“探索与返程”中选择这种处理方式",
        "roleId": "hange"
      }
    ]
  },
  {
    "number": 10,
    "title": "两边都想守住",
    "dimension": "两边都想守住",
    "text": "你答应同一天陪两位重要的人处理不同的事。时间不够，两边都不能简单地说不重要。",
    "options": [
      {
        "text": "我会先试着同时赶到两边；如果做不到，再承担自己没安排好的后果。",
        "signal": "在“两边都想守住”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会先判断哪件事的延误会带来更大后果，然后尽早向另一方解释原因。",
        "signal": "在“两边都想守住”中选择这种处理方式",
        "roleId": "zeke"
      },
      {
        "text": "我会把时间冲突说清楚，和两个人一起商量重新安排，而不是替他们决定谁更重要。",
        "signal": "在“两边都想守住”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "我会诚实取消一个承诺，并说明自己能提供的替代帮助，不作无法保证的补偿。",
        "signal": "在“两边都想守住”中选择这种处理方式",
        "roleId": "annie"
      }
    ]
  },
  {
    "number": 11,
    "title": "多数意见与质疑",
    "dimension": "多数意见与质疑",
    "text": "队伍多数人已经接受一项计划，你觉得其中有问题，但手头只有疑点，没有足够证据证明它一定会失败。",
    "options": [
      {
        "text": "我会先阻止最不可逆的部分，哪怕大家认为我在拖延。",
        "signal": "在“多数意见与质疑”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会先问最可能受到影响的人是否了解风险，再判断自己该不该服从安排。",
        "signal": "在“多数意见与质疑”中选择这种处理方式",
        "roleId": "mikasa"
      },
      {
        "text": "我会提出一个能尽快验证的关键问题；若验证不完，就把不确定性和替代方案说清。",
        "signal": "在“多数意见与质疑”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会只陈述已确认的事实；除非现场证据变化，否则先按现有命令行动并保留后手。",
        "signal": "在“多数意见与质疑”中选择这种处理方式",
        "roleId": "levi"
      }
    ]
  },
  {
    "number": 12,
    "title": "错误与承担",
    "dimension": "错误与承担",
    "text": "复盘时你发现自己的计算失误造成了损失。现在需要尽快恢复工作，完整说明经过也可能引发追责。",
    "options": [
      {
        "text": "我会讲清当时的判断、真正的目标和错误造成的代价，并让后续安排接受质疑。",
        "signal": "在“错误与承担”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会检查原始数据与计算步骤，把错误位置和更正方法完整留下来。",
        "signal": "在“错误与承担”中选择这种处理方式",
        "roleId": "hange"
      },
      {
        "text": "如果责任在我，我会完整承认，不把羞愧包装成沉默或“我已经尽力了”。",
        "signal": "在“错误与承担”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会拆开个人失误与流程缺口，先修复会再次造成损失的环节，再讨论责任。",
        "signal": "在“错误与承担”中选择这种处理方式",
        "roleId": "zeke"
      }
    ]
  },
  {
    "number": 13,
    "title": "有限信任",
    "dimension": "有限信任",
    "text": "一位曾与你们敌对的人愿意交换信息，却不肯解释自己的真正目的。合作可能减少伤害，也可能让队伍暴露弱点。",
    "options": [
      {
        "text": "我会先听受这次合作影响的人怎么想，让他们参与设定条件。",
        "signal": "在“有限信任”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "我只接受可核实、可停止的交换，不把有限合作误当成信任。",
        "signal": "在“有限信任”中选择这种处理方式",
        "roleId": "annie"
      },
      {
        "text": "我会追问对方真正想得到什么；如果合作意味着把选择权交给对方，我宁可拒绝。",
        "signal": "在“有限信任”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会优先确认同伴的安全边界，再决定是否给对方一次有限的机会。",
        "signal": "在“有限信任”中选择这种处理方式",
        "roleId": "mikasa"
      }
    ]
  },
  {
    "number": 14,
    "title": "团队分歧",
    "dimension": "团队分歧",
    "text": "队伍对下一步行动意见不一：有人想继续，有人要求撤回；所有人都在等一个决定。",
    "options": [
      {
        "text": "我会先把双方忽略的条件说出来，看看是否有一种能够减少损失的第三种做法。",
        "signal": "在“团队分歧”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会听最了解现场的人报告，然后定下明确动作，不让争论取代行动。",
        "signal": "在“团队分歧”中选择这种处理方式",
        "roleId": "levi"
      },
      {
        "text": "我会选定当前必须完成的目标，公开代价，并由自己承担决定带来的质疑。",
        "signal": "在“团队分歧”中选择这种处理方式",
        "roleId": "erwin"
      },
      {
        "text": "我会检查争执背后的假设和证据；若事实不同，计划也该随之改变。",
        "signal": "在“团队分歧”中选择这种处理方式",
        "roleId": "hange"
      }
    ]
  },
  {
    "number": 15,
    "title": "集体安排与个人选择",
    "dimension": "集体安排与个人选择",
    "text": "一项对大多数人有利的安排，要求某个人放弃自己的选择。大家说这只是必要代价，那个当事人却没有真正参与决定。",
    "options": [
      {
        "text": "如果队伍需要我，我可能会先接受安排；只是我未必能立刻分清这是责任还是害怕让人失望。",
        "signal": "在“集体安排与个人选择”中选择这种处理方式",
        "roleId": "reiner"
      },
      {
        "text": "我会先计算这项安排是否真的减少了长期痛苦；只看眼前情绪，可能会让更多人受损。",
        "signal": "在“集体安排与个人选择”中选择这种处理方式",
        "roleId": "zeke"
      },
      {
        "text": "我会反对替当事人作决定，先把选择权还给本人，再共同承担结果。",
        "signal": "在“集体安排与个人选择”中选择这种处理方式",
        "roleId": "historia"
      },
      {
        "text": "没有当事人同意，我不会承诺让他接受这项安排；先划清谁有权决定。",
        "signal": "在“集体安排与个人选择”中选择这种处理方式",
        "roleId": "annie"
      }
    ]
  },
  {
    "number": 16,
    "title": "胜利与真相",
    "dimension": "胜利与真相",
    "text": "一次行动成功后，你发现结果建立在一项被隐瞒的事实之上。现在公开它会让一些人失望，也可能改变他们对这次行动的理解。",
    "options": [
      {
        "text": "我会继续追问事实，并要求重新讨论这次行动是否真的达成了原本的目标。",
        "signal": "在“胜利与真相”中选择这种处理方式",
        "roleId": "eren"
      },
      {
        "text": "我会把事实告诉真正受影响的人；即使难以接受，他们也有权作出自己的判断。",
        "signal": "在“胜利与真相”中选择这种处理方式",
        "roleId": "mikasa"
      },
      {
        "text": "我会先核实事实、说明背景和仍然未知的部分，让它成为下一步选择的依据。",
        "signal": "在“胜利与真相”中选择这种处理方式",
        "roleId": "armin"
      },
      {
        "text": "我会保存完整记录，先阻止事实继续造成伤害，再决定怎样公开和追责。",
        "signal": "在“胜利与真相”中选择这种处理方式",
        "roleId": "levi"
      }
    ]
  }
];

const dimensions = ["action","planning","collective","inquiry","flexibility","trust"];
const dimensionNames = { action:"行动倾向", planning:"计划判断", collective:"群体责任", inquiry:"求知与核实", flexibility:"调整能力", trust:"信任与边界" };

const roles = [
  {
    "id": "eren",
    "name": "艾伦·耶格尔",
    "short": "艾伦",
    "asset": "assets/chibi/eren.png",
    "alt": "Q版艾伦·耶格尔全身人物插画",
    "accent": "#a24a38",
    "profile": {
      "action": 0.96,
      "planning": 0.34,
      "collective": 0.56,
      "inquiry": 0.72,
      "flexibility": 0.28,
      "trust": 0.46
    },
    "verdict": "你不愿把选择权交给命运",
    "summary": "当一条规则把人推向无可选择的结局，你很难只按原路线走。你更愿意先确认自己不能接受什么，再用行动争回改变局面的可能。",
    "costLead": "行动能打破僵局；若你不再听取他人的代价，争取自由也可能替别人作出决定。",
    "similarityTitle": "你会先拒绝被安排",
    "similarity": "你倾向于把“我是否还有选择”看得很重。比起等待所有人同意，你更愿意先推动局面变化，再为行动负责。",
    "costTitle": "自由也要给别人留下位置",
    "cost": "艾伦把对自由的渴望推到极处；这份意志既使他向前，也让身边人的选择空间不断缩小。行动可以打破控制，却不能自动证明方向正确。",
    "archetype": "以自由意志打破停滞的人",
    "intro": "从墙内的少年到能够改变战局的人，艾伦一直把“墙外还有什么”与“我能否自由选择”绑在一起。他的成长并非勇气变多，而是行动造成的后果越来越无法只由自己承担。",
    "comment": "原作的力量不只在于他敢向前，也在于作品持续追问：当一个人以自由为名，是否仍能承认别人同样需要自由？",
    "continuation": "如果故事继续，你会是最早推动局面变化的人。更难的部分，是在自己已经有能力改变一切时，仍给别人留下选择的余地。",
    "share": "我更接近艾伦：不愿把选择权交给命运。",
    "timeline": [
      "墙内的日常让他把墙外视作必须抵达的未知。",
      "获得改变战局的力量后，他的选择开始牵动整个队伍。",
      "他对自由的追求逐渐与他人的选择权发生冲突。"
    ]
  },
  {
    "id": "mikasa",
    "name": "米卡莎·阿克曼",
    "short": "米卡莎",
    "asset": "assets/chibi/mikasa.png",
    "alt": "Q版米卡莎·阿克曼全身人物插画",
    "accent": "#9f3d3d",
    "profile": {
      "action": 0.9,
      "planning": 0.62,
      "collective": 0.94,
      "inquiry": 0.34,
      "flexibility": 0.46,
      "trust": 0.76
    },
    "verdict": "你会先护住重要的人，再作选择",
    "summary": "当危险突然靠近，你很少站在原地讨论情感有没有用。你会先确认重要的人是否安全，再决定自己该留、该走，或该承担哪一部分。",
    "costLead": "守护能让人不再孤立；若所有决定都围着一个人转，你也可能听不见自己的意愿。",
    "similarityTitle": "你把牵挂变成具体行动",
    "similarity": "你在意的人遇到危险时，倾向于先做能保护对方的事。你的关心不是漂亮承诺，而是记得危险在哪里、自己还能怎样帮忙。",
    "costTitle": "保护不应替别人完成选择",
    "cost": "米卡莎的牵挂很深，原作也不断让她面对一个难题：守护一个人，是否等于永远跟随对方？真正属于自己的选择，不能只由害怕失去决定。",
    "archetype": "在危险中把牵挂化为行动的人",
    "intro": "童年失去与新的家人，让“守住重要的人”成为米卡莎最直接的行动本能。她的能力使她成为可靠的防线；她的成长，则与保护、依恋和独立判断之间的界线有关。",
    "comment": "她不是只会为别人而活的人。牵挂给她力量，但最终作出选择的人仍然是她自己。",
    "continuation": "如果故事继续，你会是那个让同伴知道自己没有被遗忘的人。也请替自己留一个问题：这一次留下，是出于爱、责任，还是害怕失去之后不知道该往哪里走？",
    "share": "我更接近米卡莎：先护住重要的人，再作选择。",
    "timeline": [
      "童年的失去使“家人”和“安全”成为她最重要的牵挂。",
      "进入兵团后，她以行动成为同伴可靠的保护者。",
      "她必须在深厚的爱与自己的判断之间作出选择。"
    ]
  },
  {
    "id": "armin",
    "name": "阿尔敏·阿鲁雷特",
    "short": "阿尔敏",
    "asset": "assets/chibi/armin.png",
    "alt": "Q版阿尔敏·阿鲁雷特全身人物插画",
    "accent": "#c89f52",
    "profile": {
      "action": 0.48,
      "planning": 0.97,
      "collective": 0.78,
      "inquiry": 0.94,
      "flexibility": 0.88,
      "trust": 0.84
    },
    "verdict": "你会先问：还有没有第三条路",
    "summary": "当所有人都急着在两种结果里选一个，你会继续检查有没有遗漏的条件。你愿意先听、先查、先把问题拆开；但时间到了，你也知道必须由人来作决定。",
    "costLead": "寻找更好的答案能减少伤害，也可能让你在必须行动时仍想再等一条证据。",
    "similarityTitle": "你愿意为可能性多走一步",
    "similarity": "你不会只把谨慎理解成退缩。你会试着理解各方的顾虑，找出被忽略的变量，并提出能让队伍继续行动的办法。",
    "costTitle": "理解各方之后，仍然要承担决定",
    "cost": "阿尔敏的价值不在于永远算对，而在于看见选择会伤到人，仍努力寻找出口。可每多理解一层，决定也不会自动变得轻松。",
    "archetype": "在两条路之外寻找可能的人",
    "intro": "阿尔敏从对墙外世界的想象出发，逐渐学会把好奇、推理和沟通变成实际行动。他并非只负责提出方案；在无法两全的时刻，他也必须承担方案的后果。",
    "comment": "他真正的勇气不是从不害怕，而是知道自己可能判断错误，仍愿意把理由讲清楚、把责任接过来。",
    "continuation": "如果故事继续，你会是让队伍重新看见可能的人。下一步不是放弃谨慎，而是给求证设定一个期限，让理解最终走向行动。",
    "share": "我更接近阿尔敏：总想确认，还有没有第三条路。",
    "timeline": [
      "对墙外世界的好奇，让他和伙伴共同走向未知。",
      "他以观察、推理与沟通多次为困局打开出口。",
      "面对无法避免的损失，他从提出方案走向承担领导责任。"
    ]
  },
  {
    "id": "levi",
    "name": "利威尔·阿克曼",
    "short": "利威尔",
    "asset": "assets/chibi/levi.png",
    "alt": "Q版利威尔·阿克曼全身人物插画",
    "accent": "#66796b",
    "profile": {
      "action": 0.91,
      "planning": 0.86,
      "collective": 0.82,
      "inquiry": 0.44,
      "flexibility": 0.58,
      "trust": 0.6
    },
    "verdict": "没有完美答案，也要把眼前的事做好",
    "summary": "信息不完整、损失已经发生时，你更关心下一步还能够做对什么。你倾向于先确认事实、收拢队伍、给出能执行的安排，不用漂亮话遮住风险。",
    "costLead": "稳定能保护队伍；但如果你总把情绪留到“事情结束以后”，失去可能一直没有被安放。",
    "similarityTitle": "你会在混乱里恢复秩序",
    "similarity": "你更相信经过判断的实际行动。事情出错时，你不会只找一个人责怪，而会先确认现状、降低继续受伤的可能，再处理责任。",
    "costTitle": "克制不是没有重量",
    "cost": "利威尔的强悍之外，是一次次面对信息不足、命令变化和无法挽回的损失。效率能让人活下来，却不能替任何人处理悲伤。",
    "archetype": "在不确定里承担决定的人",
    "intro": "利威尔来自不容许人轻易松懈的环境，进入调查兵团后，仍必须在命令、现场和同伴托付之间作判断。他的行动简洁，却并不意味着他把牺牲看得轻。",
    "comment": "“强”只是外在印象。真正支撑他的，是失去之后仍把责任握在手里，也记得那些已经无法同行的人。",
    "continuation": "如果故事继续，你会是危机里能让队伍重新行动的人。也许要给自己留一处不必立刻解决问题的空间，让悲伤不必总排在任务之后。",
    "share": "我更接近利威尔：没有完美答案，也要把眼前的事做好。",
    "timeline": [
      "地下街的生存经验，使他习惯先判断眼前真正能控制的事。",
      "加入调查兵团后，他多次在命令变化与现场风险间作出执行判断。",
      "同伴的托付和无法挽回的损失，成为他继续前行的重量。"
    ]
  },
  {
    "id": "erwin",
    "name": "艾尔文·史密斯",
    "short": "艾尔文",
    "asset": "assets/chibi/erwin.png",
    "alt": "Q版艾尔文·史密斯全身人物插画",
    "accent": "#8a7041",
    "profile": {
      "action": 0.82,
      "planning": 0.99,
      "collective": 0.9,
      "inquiry": 0.8,
      "flexibility": 0.5,
      "trust": 0.7
    },
    "verdict": "你会把远方目标变成共同方向",
    "summary": "当队伍意见散开，你会试着找出此刻最值得共同承担的目标。你擅长把复杂局势整理成行动路线，也愿意承受别人对决定的质疑。",
    "costLead": "明确方向能让人一起前进；但领导者也要辨认，自己追求的目标是否借用了“大局”的名义。",
    "similarityTitle": "你能让分散的人重新朝同一处行动",
    "similarity": "面对混乱，你倾向于先问“什么必须保住”，再安排资源、分工和后手。你不仅想说服别人，也愿意为决定留下责任位置。",
    "costTitle": "大局里也可能藏着自己的愿望",
    "cost": "艾尔文以战略与表达推动集体行动，但他追求真相也有私人动机。承担代价之前，领导者需要诚实辨认自己究竟在为谁争取答案。",
    "archetype": "用目标聚拢不确定的人",
    "intro": "艾尔文把调查兵团一次次推向未知，让个人愿望与人类共同目标长期缠在一起。他的领导力不仅是决断，也包括把代价摆到众人面前，再承担自己作出的判断。",
    "comment": "越能说服别人，越需要保留一个能质疑自己动机的位置。领导者不能永远躲在“为了大局”之后。",
    "continuation": "如果故事继续，你会是让队伍重新拥有方向的人。下一次作决定时，不妨也问自己：这个目标除了重要，对我个人还意味着什么？",
    "share": "我更接近艾尔文：把远方目标变成共同方向。",
    "timeline": [
      "对世界真相的追寻，推动他加入调查兵团并不断向外探索。",
      "他用战略、表达与长期部署组织集体行动。",
      "个人愿望与共同使命逐渐交叠，选择的代价也由更多人共同承担。"
    ]
  },
  {
    "id": "hange",
    "name": "韩吉·佐耶",
    "short": "韩吉",
    "asset": "assets/chibi/hange.png",
    "alt": "Q版韩吉·佐耶全身人物插画",
    "accent": "#9c6b48",
    "profile": {
      "action": 0.68,
      "planning": 0.78,
      "collective": 0.7,
      "inquiry": 1,
      "flexibility": 0.94,
      "trust": 0.82
    },
    "verdict": "你会先把陌生变成一个问题",
    "summary": "面对陌生、矛盾或被当作敌人的事物，你倾向于先弄清它如何运作。新证据可以改变旧结论；你愿意追问，也会被有趣的问题吸引得忘了时间。",
    "costLead": "好奇能拆掉恐惧；但探索不能永远排在时间、资源和他人安全之前。",
    "similarityTitle": "你允许新证据改写旧判断",
    "similarity": "你不会满足于“大家一直这么说”。发现解释对不上时，你更愿意回到记录、观察现场、提出新问题，再让结论接受检验。",
    "costTitle": "探索也要对现实负责",
    "cost": "韩吉的好奇不是没有代价。研究者成为负责人以后，不能永远追随最有趣的问题，还要判断这次探索由谁承担风险、是否值得继续。",
    "archetype": "用理解削弱恐惧的人",
    "intro": "韩吉把巨人从纯粹的敌人变成可以观察、记录和研究的对象。韩吉的热情不断挑战理所当然的结论；承担领导责任后，也必须让探索与保护生命共享方向。",
    "comment": "好奇不是轻松的天赋。它会不断要求人承认：昨天确信的解释，今天可能需要重写。",
    "continuation": "如果故事继续，你会是最先把未知变成问题的人。请保留热情，也记得有些问题是否继续追查，需要由整个队伍共同决定。",
    "share": "我更接近韩吉：先把陌生变成一个问题。",
    "timeline": [
      "韩吉从研究巨人的行为开始，逐步改变调查兵团理解敌人的方式。",
      "TA不断用观察和实验挑战被视为理所当然的结论。",
      "承担指挥职责后，探索欲必须与生命、时间和队伍责任一起权衡。"
    ]
  },
  {
    "id": "reiner",
    "name": "莱纳·布朗",
    "short": "莱纳",
    "asset": "assets/chibi/reiner.png",
    "alt": "Q版莱纳·布朗全身人物插画",
    "accent": "#8b715b",
    "profile": {
      "action": 0.78,
      "planning": 0.58,
      "collective": 0.9,
      "inquiry": 0.36,
      "flexibility": 0.32,
      "trust": 0.66
    },
    "verdict": "你会在彼此冲突的责任之间硬撑",
    "summary": "当承诺、身份和真实感受互相拉扯，你可能仍先把眼前的事做完，不让别人看见自己已经撑不住。你不是不在乎，而是很难判断哪一种责任可以放下。",
    "costLead": "承担能让别人暂时有依靠；若把所有矛盾都吞下去，责任会慢慢变成惩罚自己。",
    "similarityTitle": "你不容易在矛盾里转身离开",
    "similarity": "你会认真看待自己答应过的事，也容易为了维持关系和队伍的稳定，把难以启齿的冲突先压在心里。",
    "costTitle": "硬撑不是解决冲突",
    "cost": "莱纳的痛苦来自两套身份与责任同时为真。他曾经伤害过在意的人，也确实与他们建立过真实关系。承认其中一面，不会抹掉另一面。",
    "archetype": "背着冲突身份继续前行的人",
    "intro": "莱纳既承担战士的任务，也在墙内与同伴共同生活。两种身份长期彼此撕扯，让“可靠的伙伴”和“造成伤害的人”无法被简单分开。",
    "comment": "他的经历不该被缩成“坚强”。真正需要面对的是：一个人怎样承认自己做过的伤害，又怎样继续承担修复与后果。",
    "continuation": "如果故事继续，你会是即使心里矛盾也不轻易离席的人。下一步不是再多扛一点，而是让责任回到真正该承担它的人手中。",
    "share": "我更接近莱纳：在彼此冲突的责任之间硬撑。",
    "timeline": [
      "他带着战士任务进入墙内，也努力成为被认可的同伴。",
      "长期生活让任务身份与真实关系发生撕裂。",
      "过去造成的伤害与仍然存在的牵挂，都成为他无法绕开的责任。"
    ]
  },
  {
    "id": "zeke",
    "name": "吉克·耶格尔",
    "short": "吉克",
    "asset": "assets/chibi/zeke.png",
    "alt": "Q版吉克·耶格尔全身人物插画",
    "accent": "#8d7a50",
    "profile": {
      "action": 0.46,
      "planning": 0.96,
      "collective": 0.28,
      "inquiry": 0.82,
      "flexibility": 0.36,
      "trust": 0.3
    },
    "verdict": "你会先从整个系统推演后果",
    "summary": "你习惯退后一步看规则、资源和长期影响，不容易只被眼前最强烈的情绪推动。你愿意为一个长远方案放弃短期满足，也可能低估具体的人如何看待自己的选择。",
    "costLead": "宏观判断能看见结构性问题；但当人被压缩成数字，完整的方案也可能夺走他们同意或拒绝的权利。",
    "similarityTitle": "你会先问这套安排会走向哪里",
    "similarity": "面对争执或短期危机，你倾向于寻找更长的因果链，想知道眼下的决定会把更多人带到什么结果。",
    "costTitle": "推演不能替别人同意",
    "cost": "吉克的逻辑试图减少长期痛苦，却把许多人的选择排除在方案之外。冷静不自动等于客观，解释得通也不表示有权替所有人决定。",
    "archetype": "从结构层面寻找终局方案的人",
    "intro": "吉克以情报、耐心和长期布局影响局势，也以宏观理论回应族群困境。他的经历展示了一个危险：当具体生命只剩模型里的变量，减少痛苦的计划仍可能剥夺人的选择。",
    "comment": "模型能解释世界的一部分，却没有任何模型有权替所有人同意。",
    "continuation": "如果故事继续，你会是最早看见系统裂缝的人。让具体的人质疑一次方案，可能比把推演再精密一层更重要。",
    "share": "我更接近吉克：先从整个系统推演后果。",
    "timeline": [
      "家庭期待与外部压力，逐渐塑造他对世界的悲观判断。",
      "他凭借情报和多层部署成为影响局势的重要人物。",
      "宏观计划与具体生命的选择相遇，让他的理论受到挑战。"
    ]
  },
  {
    "id": "historia",
    "name": "希斯特莉亚·雷斯",
    "short": "希斯特莉亚",
    "asset": "assets/chibi/historia.png",
    "alt": "Q版希斯特莉亚·雷斯全身人物插画",
    "accent": "#c2a353",
    "profile": {
      "action": 0.58,
      "planning": 0.62,
      "collective": 0.91,
      "inquiry": 0.56,
      "flexibility": 0.9,
      "trust": 0.94
    },
    "verdict": "你不再迎合期待，重新选择善良",
    "summary": "你会看见规则里那个具体的人，也愿意质疑谁有权替别人作决定。你不是永远答应，而是希望帮助与承担都来自自己的选择。",
    "costLead": "善意能让被忽略的人重新进入决定；但如果你只为证明自己是好人而付出，善意也会变成新的束缚。",
    "similarityTitle": "你会把选择权还给当事人",
    "similarity": "当安排伤害了眼前的人，你倾向于让当事人的声音进入讨论，而不是替他们接受一个听起来更体面的代价。",
    "costTitle": "善良也需要拒绝的能力",
    "cost": "希斯特莉亚曾经靠符合期待寻找位置，后来才开始承认自己的意愿。她的善良不是永远服从，而是终于可以拒绝，再决定自己愿意承担什么。",
    "archetype": "从迎合走向自主承担的人",
    "intro": "希斯特莉亚曾以克里斯塔的身份生活，努力成为别人期待的“好人”。她后来逐渐承认自己的名字、愿望与责任，并把对弱者的关心变成主动的选择。",
    "comment": "她的善良之所以有力量，不是因为她从不拒绝，而是因为她终于能说“不”，再决定自己真正愿意承担什么。",
    "continuation": "如果故事继续，你会是让决定重新看见具体人的一方。请同时保留善意和拒绝；两者都属于你，选择才真正属于你。",
    "share": "我更接近希斯特莉亚：不再迎合期待，重新选择善良。",
    "timeline": [
      "她曾以克里斯塔的身份生活，用符合期待的形象换取认可。",
      "在重要关系与关键选择中，她开始承认并保护真实意愿。",
      "承担王室职责后，她把个人觉醒转化为对弱者的实际保护。"
    ]
  },
  {
    "id": "annie",
    "name": "安妮·莱昂哈特",
    "short": "安妮",
    "asset": "assets/chibi/annie.png",
    "alt": "Q版安妮·莱昂哈特全身人物插画",
    "accent": "#67717a",
    "profile": {
      "action": 0.72,
      "planning": 0.84,
      "collective": 0.4,
      "inquiry": 0.38,
      "flexibility": 0.64,
      "trust": 0.3
    },
    "verdict": "你只承诺自己能真正做到的事",
    "summary": "你不容易把自己交给群体情绪，更愿意看清事实、守住边界，只答应能够兑现的部分。你并非不在意，只是不相信热烈表态本身就能保护任何人。",
    "costLead": "边界能减少被利用的风险；但如果所有关系都只能停在可控范围，别人也很难知道你其实在意。",
    "similarityTitle": "你会先划清可控与不可控",
    "similarity": "面对陌生合作或难以兑现的承诺，你倾向于先确认条件、限制范围，再用行动而不是表态建立判断。",
    "costTitle": "距离也会挡住理解",
    "cost": "安妮的现实并非没有情感，而是不轻易相信情感足以让人安全。过度自保会让有限的信任始终无法长大，也让牵挂只能藏在行动之后。",
    "archetype": "以克制和边界保护自己的人",
    "intro": "安妮依靠训练、判断和距离感生存，对宏大口号保持警惕。冷淡表象下仍有对父亲的牵挂；她的选择让人看见，自我保护与重新参与世界可以同时存在。",
    "comment": "她的独立并不轻松，而是把风险和情感都控制在有限范围内。边界能保护人，也需要有人知道边界为何存在。",
    "continuation": "如果故事继续，你会是最少轻率许诺的人。让少数可信的人知道你的边界从何而来，距离才不必成为永久的封闭。",
    "share": "我更接近安妮：只承诺自己能真正做到的事。",
    "timeline": [
      "严格训练和任务要求，使她形成克制、独立的生存方式。",
      "潜伏与执行任务让她不断在责任、风险和有限信任间选择。",
      "重新面对曾经留下的人与关系后，她开始决定是否参与共同的未来。"
    ]
  }
];

const roleMap = Object.fromEntries(roles.map(role => [role.id, role]));

function optionVector(option) {
  return { ...roleMap[option.roleId].profile };
}

function calculateResult(answers) {
  const primaryCounts = Object.fromEntries(roles.map(role => [role.id, 0]));
  const vector = Object.fromEntries(dimensions.map(dim => [dim, 0]));
  questions.forEach((question, index) => {
    const option = question.options[answers[index]];
    if (!option) return;
    primaryCounts[option.roleId] += 1;
    const values = optionVector(option);
    dimensions.forEach(dim => { vector[dim] += values[dim]; });
  });
  dimensions.forEach(dim => { vector[dim] /= questions.length; });
  const ranked = roles.map((role, order) => {
    const distance = Math.sqrt(dimensions.reduce((sum, dim) => sum + Math.pow(vector[dim] - role.profile[dim], 2), 0) / dimensions.length);
    return { ...role, primaryCount:primaryCounts[role.id], distance, order };
  }).sort((a, b) => b.primaryCount - a.primaryCount || a.distance - b.distance || a.order - b.order);
  return { ranked, vector, primaryCounts };
}

function browserApp() {
  const $ = id => document.getElementById(id);
  const screens = ["introScreen","quizScreen","resultScreen"];
  const state = { index:0, answers:Array(questions.length).fill(null), result:null };
  const storageKey = "wall-character-choices-v3";

  function showScreen(id) {
    screens.forEach(name => $(name).classList.toggle("is-active", name === id));
    window.scrollTo({ top:0, behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    requestAnimationFrame(() => {
      const focusTarget = id === "quizScreen" ? $("questionText") : id === "resultScreen" ? $("resultTitle") : $("startButton");
      focusTarget?.focus({ preventScroll:true });
    });
  }
  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify({ index:state.index, answers:state.answers })); } catch {}
    $("resumeButton").hidden = !state.answers.some(value => value !== null);
  }
  function renderQuestion() {
    const question = questions[state.index];
    $("currentNumber").textContent = String(state.index + 1).padStart(2,"0");
    $("currentNumber").nextElementSibling.textContent = `/ ${questions.length}`;
    $("progressBar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
    $("dimensionLabel").textContent = question.dimension;
    $("questionCode").textContent = `处境 ${String(state.index + 1).padStart(2,"0")} / ${questions.length}`;
    $("questionText").textContent = question.text;
    $("answerList").innerHTML = question.options.map((option, index) => `<div class="answer-option"><input type="radio" name="answer" id="answer-${index}" value="${index}" ${state.answers[state.index] === index ? "checked" : ""}><label for="answer-${index}"><span class="option-key">${index + 1}</span><strong>${option.text}</strong><span class="selected-mark" aria-hidden="true">已选择</span></label></div>`).join("");
    $("answerList").querySelectorAll("input").forEach(input => input.addEventListener("change", event => {
      state.answers[state.index] = Number(event.target.value);
      $("nextButton").disabled = false;
      $("nextButton").textContent = state.index === questions.length - 1 ? "查看人物档案" : "下一题";
      saveState();
    }));
    $("prevButton").disabled = state.index === 0;
    $("nextButton").disabled = state.answers[state.index] === null;
    $("nextButton").textContent = state.index === questions.length - 1 ? "查看人物档案" : "下一题";
  }
  function startQuiz(resume = false) {
    if (!resume) {
      state.index = 0;
      state.answers = Array(questions.length).fill(null);
      try { localStorage.removeItem("wall-character-choices-v2"); } catch {}
    }
    showScreen("quizScreen"); renderQuestion(); saveState();
  }
  function evidenceFor(roleId) {
    return questions.map((question, index) => ({
      questionIndex:index + 1,
      title:question.title,
      question:question.text,
      selectedAnswer:question.options[state.answers[index]]?.text,
      signal:question.options[state.answers[index]]?.signal,
      roleId:question.options[state.answers[index]]?.roleId
    })).filter(item => item.roleId === roleId).slice(0,3);
  }
  function evidenceExplanation(role, item) {
    return `这一选择与“${role.similarityTitle}”的行事方式相近。`;
  }
  function fullEvidenceMarkup(role, item) {
    return `<article class="evidence-item"><span>第 ${String(item.questionIndex).padStart(2,"0")} 题 · ${item.title}</span><p>${item.selectedAnswer}</p><small>${evidenceExplanation(role, item)}</small></article>`;
  }
  function renderDimensions(vector) {
    $("dimensionList").innerHTML = dimensions.map(dim => `<div class="dimension-row"><strong>${dimensionNames[dim]}</strong><div class="dimension-meter" aria-hidden="true"><i style="width:${Math.round(vector[dim] * 100)}%"></i></div><span>${vector[dim] >= .72 ? "本次较常出现" : vector[dim] >= .52 ? "部分场景出现" : "本次较少出现"}</span></div>`).join("");
  }
  function renderResults() {
    const result = calculateResult(state.answers);
    state.result = result;
    const top = result.ranked[0];
    const evidence = evidenceFor(top.id);
    document.documentElement.style.setProperty("--role-accent", top.accent);
    $("resultCharacter").src = top.asset;
    $("resultCharacter").alt = top.alt;
    $("resultTitle").textContent = top.name;
    $("resultVerdict").textContent = top.verdict;
    $("resultSummary").textContent = top.summary;
    $("resultCost").textContent = top.costLead;
    $("evidenceLead").textContent = evidence.length >= 2 ? "以下选择共同构成了这次角色侧影：" : "有一处选择与你的角色侧影相近：";
    $("evidenceChips").innerHTML = evidence.slice(0,2).map(item => `<span>第 ${String(item.questionIndex).padStart(2,"0")} 题 · ${item.title}：${item.selectedAnswer}</span>`).join("");
    $("similarityTitle").textContent = top.similarityTitle;
    $("similarityText").textContent = top.similarity;
    $("dossierEvidence").innerHTML = evidence.slice(2).map(item => fullEvidenceMarkup(top, item)).join("");
    $("costTitle").textContent = top.costTitle;
    $("costText").textContent = top.cost;
    $("roleCode").textContent = top.id.toUpperCase();
    $("roleArchetype").textContent = top.archetype;
    $("roleIntro").textContent = top.intro;
    $("roleCreed").textContent = top.comment;
    $("roleTimeline").innerHTML = top.timeline.map(text => `<li>${text}</li>`).join("");
    $("alternativeRoles").innerHTML = result.ranked.slice(1,3).map(role => {
      const item = evidenceFor(role.id)[0];
      const reason = item ? `第 ${String(item.questionIndex).padStart(2,"0")} 题中，你选择了“${item.selectedAnswer}”` : "直接关联不多；六项选择轮廓与该角色的行事方式较接近。";
      return `<article class="alternative-card"><img src="${role.asset}" alt="${role.alt}" loading="lazy"><div><span>相近侧影</span><h3>${role.name}</h3><p class="alternative-verdict">${role.verdict}</p><small>${reason}</small></div></article>`;
    }).join("");
    $("continuationText").textContent = top.continuation;
    renderDimensions(result.vector);
    window.latestResult = `${top.share} 本次作答中，${result.ranked[1].short}与${result.ranked[2].short}也是相近侧影。非官方同人娱乐测试。`;
    try { localStorage.removeItem(storageKey); } catch {}
    $("resumeButton").hidden = true;
    $("timelinePanel").open = false;
    $("resultReveal").classList.remove("is-revealed","is-opened");
    showScreen("resultScreen");
    requestAnimationFrame(() => {
      $("resultReveal").classList.add("is-revealed");
      window.setTimeout(() => $("resultReveal").classList.add("is-opened"), 850);
    });
  }
  function showToast(text) {
    $("toast").textContent = text; $("toast").classList.add("is-visible");
    window.setTimeout(() => $("toast").classList.remove("is-visible"), 1900);
  }
  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const chars = [...text]; let line = "", lines = [];
    chars.forEach(char => { const test = line + char; if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = char; } else line = test; });
    if (line) lines.push(line);
    lines.slice(0,maxLines).forEach((value,index) => ctx.fillText(value, x, y + index * lineHeight));
  }
  async function saveResultCard() {
    const top = state.result?.ranked[0]; if (!top) return;
    const canvas = $("shareCanvas"), ctx = canvas.getContext("2d");
    const image = new Image(); image.src = top.asset; await image.decode();
    ctx.clearRect(0,0,1080,1440); ctx.fillStyle = "#18221b"; ctx.fillRect(0,0,1080,1440);
    ctx.strokeStyle = top.accent; ctx.lineWidth = 8; ctx.strokeRect(40,40,1000,1360);
    ctx.fillStyle = "#c8a66a"; ctx.font = "700 28px sans-serif"; ctx.fillText("进击的巨人 · 人物侧影档案",80,105);
    const box = {x:135,y:135,w:810,h:700}; const scale = Math.min(box.w/image.width,box.h/image.height); const w=image.width*scale,h=image.height*scale;
    ctx.save(); ctx.shadowColor="rgba(0,0,0,.45)"; ctx.shadowBlur=32; ctx.drawImage(image,box.x+(box.w-w)/2,box.y+(box.h-h)/2,w,h); ctx.restore();
    ctx.fillStyle = "#f4eedf"; ctx.font = "700 68px Georgia, serif"; ctx.fillText(top.name,80,930);
    ctx.fillStyle = top.accent; ctx.font = "700 38px sans-serif"; wrapCanvasText(ctx,top.verdict,80,995,920,50,2);
    ctx.fillStyle = "#d9d1c1"; ctx.font = "30px sans-serif"; wrapCanvasText(ctx,top.summary,80,1110,920,48,4);
    ctx.fillStyle = "#8e978e"; ctx.font = "24px monospace"; ctx.fillText("WALL CHARACTER ARCHIVE / 2026",80,1360);
    canvas.toBlob(blob => { if (!blob) return showToast("结果卡生成失败"); const url=URL.createObjectURL(blob); const link=document.createElement("a"); link.href=url; link.download=`墙内人物档案-${top.short}.png`; link.click(); URL.revokeObjectURL(url); showToast("结果卡已保存"); },"image/png");
  }
  $("startButton").addEventListener("click", () => startQuiz(false));
  $("resumeButton").addEventListener("click", () => startQuiz(true));
  $("prevButton").addEventListener("click", () => { if (state.index > 0) { state.index--; renderQuestion(); saveState(); } });
  $("nextButton").addEventListener("click", () => { if (state.answers[state.index] === null) return; if (state.index < questions.length - 1) { state.index++; renderQuestion(); saveState(); } else renderResults(); });
  $("exitButton").addEventListener("click", () => { saveState(); showScreen("introScreen"); });
  $("restartButton").addEventListener("click", () => startQuiz(false));
  $("saveCardButton").addEventListener("click", saveResultCard);
  $("copyButton").addEventListener("click", async () => { try { await navigator.clipboard.writeText(window.latestResult); showToast("结果文案已复制"); } catch { showToast("复制失败，请手动选择文字"); } });
  document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); showScreen("introScreen"); });
  document.addEventListener("keydown", event => { if (!$("quizScreen").classList.contains("is-active")) return; const number=Number(event.key); if (number>=1 && number<=4) { const input=$(`answer-${number-1}`); input.checked=true; input.dispatchEvent(new Event("change",{bubbles:true})); } if (event.key==="Enter" && !$("nextButton").disabled) $("nextButton").click(); });
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey));
    const validAnswers=saved && Array.isArray(saved.answers) && saved.answers.length===questions.length && saved.answers.every(value => value === null || (Number.isInteger(value) && value >= 0 && value <= 3));
    if (validAnswers) {
      state.index=Math.min(Math.max(Number(saved.index)||0,0),questions.length-1);
      state.answers=saved.answers;
      $("resumeButton").hidden=!saved.answers.some(value=>value!==null);
    }
  } catch {}
  const context = document.modelContext;
  if (context?.registerTool) {
    try { void Promise.resolve(context.registerTool({ name:"complete_character_scenarios", title:"完成墙内人物选择", description:"提交 16 个处境选择并在页面显示人物档案。答案值为 0—3。", inputSchema:{type:"object",properties:{answers:{type:"array",minItems:questions.length,maxItems:questions.length,items:{type:"integer",minimum:0,maximum:3}}},required:["answers"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, async execute(input){ if(!Array.isArray(input?.answers)||input.answers.length!==questions.length||input.answers.some(value=>!Number.isInteger(value)||value<0||value>3)) throw new Error("answers 必须包含 16 个 0—3 的整数"); state.answers=input.answers.slice(); renderResults(); return {status:"completed",top_role:state.result.ranked[0].name,secondary_roles:state.result.ranked.slice(1,3).map(role=>role.name)}; } })).catch(()=>{}); } catch {}
  }
}

if (typeof document !== "undefined") browserApp();
if (typeof module !== "undefined") module.exports = { questions, roles, dimensions, calculateResult };
