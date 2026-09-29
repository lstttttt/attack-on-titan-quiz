const choice = (text, signal, primary, secondary) => ({ text, signal, roles: [[primary, 2], [secondary, 1]] });

const questions = [
  { dimension:"行动与风险", text:"撤离信号已经发出，一名队友还没有回来。你只知道他最后出现的位置。", options:[
    choice("立刻折返，自己承担落队的风险。","在同伴失联时选择亲自折返","eren","mikasa"),
    choice("带队按原路线撤离，同时请求最近的小队搜索。","先维持撤离秩序，再调动支援","levi","erwin"),
    choice("先确认最后线索，判断是否还有安全折返的窗口。","先核对线索，再决定是否冒险","armin","annie"),
    choice("向指挥者报告，争取暂停撤离并重新分工。","把救援变成团队共同承担的任务","historia","hange")
  ]},
  { dimension:"真相与责任", text:"你发现一份记录与公开解释对不上，但立刻公开可能使队伍失去信任。", options:[
    choice("保存证据，继续查证其他记录。","面对矛盾记录时选择继续求证","hange","armin"),
    choice("直接提出疑点，让所有人参与判断。","宁愿承受震荡也要公开疑点","eren","historia"),
    choice("先找最相关的人核实，避免无根据的扩散。","先小范围核实，再决定是否公开","annie","levi"),
    choice("先稳定眼前行动，把追查放到任务之后。","把当前秩序放在真相之前","erwin","reiner")
  ]},
  { dimension:"命令与自主", text:"上级给出的路线很稳妥，但你发现一个能明显缩短时间、风险也更高的方案。", options:[
    choice("提出新方案；若无人同意，就自己先证明它可行。","在稳妥命令前仍想主动破局","eren","historia"),
    choice("执行原路线，除非现场出现明确变化。","在信息不足时先维持可执行的命令","levi","mikasa"),
    choice("快速列出两种方案的后果，请团队共同校验。","把方案差异摊开给团队判断","armin","hange"),
    choice("保留新方案作为备用，不让队伍在出发前分裂。","把冒险方案留作局势恶化时的后手","erwin","reiner")
  ]},
  { dimension:"资源与公平", text:"补给只够支撑一个方向：救助附近居民，或保证主力小队继续执行任务。", options:[
    choice("优先救助眼前的人，任务可以重新想办法。","先保护眼前具体的人","historia","mikasa"),
    choice("保证主力任务；成功后才可能救更多人。","用整体收益衡量眼前损失","zeke","erwin"),
    choice("拆分补给，重新设计一个能同时维持两边的最低方案。","试图找到不必二选一的资源方案","armin","hange"),
    choice("按既定优先级执行，避免临场情绪改变规则。","让事先规则压过临场情绪","levi","annie")
  ]},
  { dimension:"敌意与理解", text:"一个曾与你敌对的人愿意提供情报，但拒绝解释自己的真正目的。", options:[
    choice("继续交谈，从细节里判断他真正害怕什么。","把敌意对象当作需要理解的信息源","hange","armin"),
    choice("只验证情报，不给对方接触核心成员的机会。","有限使用情报，同时保持边界","annie","levi"),
    choice("要求他先用行动证明立场，否则不合作。","要求对方用行动证明立场","eren","mikasa"),
    choice("给一次受控合作机会，但由团队共同承担风险。","允许有限信任并让风险被共同承担","reiner","historia")
  ]},
  { dimension:"失败与修正", text:"你主导的计划失败了，队伍只剩很短时间重新行动。", options:[
    choice("立刻带头尝试最直接的突破口。","计划失败后先用行动打开缺口","eren","mikasa"),
    choice("承认原判断失效，迅速收集现场的新信息。","愿意推翻自己的判断重新观察","hange","armin"),
    choice("先收拢队形，执行最熟悉、失误率最低的动作。","失败后先恢复秩序与基本动作","levi","annie"),
    choice("重新明确唯一目标，舍弃已经无法兼顾的部分。","危机中重新聚焦唯一目标","erwin","reiner")
  ]},
  { dimension:"同伴与界限", text:"一名伙伴情绪濒临崩溃，却坚持继续承担关键位置。", options:[
    choice("陪在他身边，必要时替他接下任务。","在伙伴崩溃时选择贴身守护","mikasa","historia"),
    choice("明确告诉他现在不适合继续，并立即换人。","用明确边界阻止伙伴继续硬撑","levi","annie"),
    choice("先听完他的顾虑，再一起决定还能承担哪一部分。","先理解感受，再重分任务","armin","hange"),
    choice("让他自己决定，但告诉他后果不会由他独自承担。","尊重伙伴选择，同时共同承担后果","reiner","eren")
  ]},
  { dimension:"领导与分工", text:"队伍意见完全分裂，而所有人都等着你给出下一步。", options:[
    choice("迅速定下方向，清楚说明代价由自己承担。","在分歧中直接决断并承担责任","erwin","levi"),
    choice("先指出双方都忽略的条件，再提出第三种方案。","在两派之间寻找被遗漏的选项","armin","hange"),
    choice("让最了解现场的人决定，自己负责保护执行者。","把决定交给更了解现场的人","mikasa","historia"),
    choice("缩小目标，只决定此刻必须完成的一步。","把混乱问题压缩成眼前一步","annie","zeke")
  ]},
  { dimension:"未知与秩序", text:"你们找到一处未知区域，继续探索可能获得关键答案，也可能错过返程时间。", options:[
    choice("继续深入；机会消失后可能再也不会回来。","面对未知时愿意抓住短暂窗口","eren","hange"),
    choice("记录入口和已知条件，制定下一次完整探索计划。","先留下证据，为下一次探索布局","armin","erwin"),
    choice("按时返程，不让好奇心打乱整个队伍。","让既定返程秩序约束好奇心","levi","annie"),
    choice("由少数人短暂确认，其余人先撤离。","把探索风险集中在少数人身上","mikasa","reiner")
  ]},
  { dimension:"牺牲与边界", text:"一个高风险动作能显著提高全队生还机会，但执行者很可能无法撤离。", options:[
    choice("如果必须有人去，自己先站出来。","把高风险任务先放到自己肩上","eren","mikasa"),
    choice("选择最有成功条件的人，并向所有人说明判断依据。","把整体生还概率放在个体感受之前","zeke","erwin"),
    choice("继续寻找能降低牺牲概率的替代方案，直到最后时限。","在最后时限前仍寻找减损方案","armin","historia"),
    choice("执行最有效方案，不用空洞承诺掩盖风险。","承认代价后执行最有效的方案","levi","annie")
  ]},
  { dimension:"信念与质疑", text:"多数人支持一个你认为有问题的决定，但你暂时拿不出完整证据。", options:[
    choice("明确反对，先阻止不可逆的行动。","证据不足时仍先阻止不可逆后果","eren","historia"),
    choice("提出关键疑问，让大家看见判断里的空白。","用问题让群体重新检查盲点","armin","hange"),
    choice("先接受决定，同时暗中准备失败后的替代方案。","以结果为先，接受暂时不被理解","zeke","erwin"),
    choice("只陈述自己确认的事实，不用情绪争夺支持。","只用确认事实表达异议","levi","mikasa")
  ]},
  { dimension:"错误与承担", text:"任务失败与你的判断有关，但公开全部经过会让队伍对你失去信心。", options:[
    choice("完整说明经过，不为自己删掉难看的部分。","不删减地承担自己的错误","reiner","mikasa"),
    choice("先说明关键错误和补救方案，细节随后公开。","先交代错误与补救，再补全细节","armin","historia"),
    choice("不解释情绪，只把下一步修正落实到行动。","用后续行动承担而非辩解","levi","annie"),
    choice("承担责任，但不让团队在行动前陷入追责。","把追责推迟到危机之后","erwin","hange")
  ]},
  { dimension:"谈判与底线", text:"对方愿意停手，但条件会让你的一部分同伴认为自己被背叛。", options:[
    choice("继续谈，先弄清哪些条件还能改变。","在不完美谈判中继续寻找空间","armin","historia"),
    choice("接受能减少整体伤亡的条件，并承担骂名。","为减少整体损失接受骂名","erwin","zeke"),
    choice("拒绝用同伴的信任交换短暂安全。","不愿用同伴信任换取眼前安全","eren","mikasa"),
    choice("只接受可验证、可撤回的部分，不做长期承诺。","只接受可验证且可撤回的合作","annie","levi")
  ]},
  { dimension:"时间与判断", text:"警报响起，你只有一分钟决定：立即行动，还是等一条尚未确认的消息。", options:[
    choice("立即行动，错误可以在途中修正。","时间紧迫时先行动再修正","eren","mikasa"),
    choice("按已知最可靠的流程行动，不赌未知消息。","在时限内依靠可靠流程","levi","annie"),
    choice("用这最后一分钟验证消息来源。","把最后时间用来验证关键信息","armin","hange"),
    choice("同时布置两手准备，在消息到来时切换。","在信息到来前保留两套方案","erwin","reiner")
  ]},
  { dimension:"个人与集体", text:"你最在意的人和队伍的整体安排发生冲突，而两边都无法保证安全。", options:[
    choice("优先守在重要的人身边，至少不让他独自面对。","当个人与集体冲突时选择守在身边","mikasa","reiner"),
    choice("服从整体安排，因为没人能只为自己例外。","让整体安排压过个人牵挂","zeke","erwin"),
    choice("坦白冲突，请团队一起调整分工。","公开个人牵挂并请求重新分工","historia","armin"),
    choice("接受无法两全，选择自己最能控制的那一边。","在无法两全时选择可控的一边","annie","levi")
  ]},
  { dimension:"胜利与真相", text:"任务结束后，你发现胜利建立在一个被隐瞒的事实之上。", options:[
    choice("继续追查；没有弄清事实，就不能定义这次胜利。","胜利之后仍继续追问真相","hange","armin"),
    choice("先判断公开事实会改变什么，再决定时机。","从全局后果判断公开时机","erwin","zeke"),
    choice("告诉受影响的人，让他们拥有选择是否知情的权利。","把知情选择还给被影响的人","historia","mikasa"),
    choice("保存事实，但不让它立刻破坏刚恢复的秩序。","暂存事实以保护刚恢复的秩序","annie","reiner")
  ]}
];

const dimensions = ["action","planning","collective","inquiry","flexibility","trust"];
const dimensionNames = { action:"行动", planning:"规划", collective:"集体", inquiry:"求知", flexibility:"修正", trust:"信任" };

const roles = [
  { id:"eren", name:"艾伦·耶格尔", short:"艾伦", asset:"assets/chibi/eren.png", alt:"Q版艾伦·耶格尔全身人物插画", accent:"#a24a38", profile:{action:.96,planning:.34,collective:.56,inquiry:.72,flexibility:.28,trust:.46}, verdict:"先撞向边界，再面对代价", summary:"别人还在衡量出口时，你更容易先确认自己不能接受什么，然后用行动逼局势改变。你和艾伦相似的地方，不只是敢冲，而是很难把选择权交给别人。", costLead:"这种力量能打破停滞，也可能让目标变得比沿途的人更响亮。", similarityTitle:"你不愿让局势替你决定", similarity:"当规则、命令或多数意见指向你无法接受的结果，你倾向于先阻止它发生，再在行动中修正路线。", costTitle:"自由要求会不断制造代价", cost:"艾伦的冲突在于：越想夺回选择，越可能把别人的选择压缩。你的行动力值得保留，但它并不会自动证明方向正确。", archetype:"把自由当作行动起点的人", intro:"他把不自由视为必须打破的现实，意志与行动彼此推动；故事也不断追问，这种推动一旦不再接受修正，会把人带到哪里。", comment:"档案重点不是“勇敢”，而是对被安排命运的强烈拒绝，以及拒绝之后必须承担的后果。", continuation:"如果故事继续，你会是最早打破僵局的人。真正困难的不是继续向前，而是在力量已经足够时，仍给别人留下选择。", share:"我更接近艾伦：先撞向边界，再面对代价。", timeline:["从墙内少年出发，把自由与墙外世界视为不可放弃的方向。","获得改变局势的力量后，个人意志开始影响越来越多人的命运。","追求自由与行动代价之间的矛盾，最终成为无法回避的核心。"] },
  { id:"mikasa", name:"米卡莎·阿克曼", short:"米卡莎", asset:"assets/chibi/mikasa.png", alt:"Q版米卡莎·阿克曼全身人物插画", accent:"#9f3d3d", profile:{action:.90,planning:.62,collective:.94,inquiry:.34,flexibility:.46,trust:.76}, verdict:"先护住重要的人，再作选择", summary:"风险靠近时，你不会先解释立场，而会迅速站到重要的人身边。你和米卡莎相似的地方，是把牵挂变成行动；不同的是，守护越强，越需要确认那也是你自己的选择。", costLead:"保护能让人安心，也可能让你把自己的方向藏在关系后面。", similarityTitle:"你的承诺会直接变成行动", similarity:"当个人安危与抽象目标冲突，你更容易先确认重要的人没有被独自留下，再考虑之后的安排。", costTitle:"守护不能替代自主", cost:"米卡莎真正的张力不在忠诚本身，而在于能否从牵挂中分辨自己的意志。一直替别人承担，也可能让彼此都失去选择空间。", archetype:"在危险中把牵挂化为行动的人", intro:"她在混乱中异常稳定，习惯用能力和行动守住重要关系；成长则发生在她必须独立判断何为真正的保护时。", comment:"她的力量既来自深厚连接，也来自最终能够不让连接替自己作完所有决定。", continuation:"如果故事继续，你会是让同伴敢于回头确认的人。别忘了问自己：这次留下，是出于爱、责任，还是害怕失去后的空白。", share:"我更接近米卡莎：先护住重要的人，再作选择。", timeline:["童年失去与新的家人，让“守护”成为最深的行动本能。","以顶尖能力进入兵团，在多次危机中成为同伴最可靠的防线。","最终必须把爱与服从分开，完成属于自己的决定。"] },
  { id:"armin", name:"阿尔敏·阿鲁雷特", short:"阿尔敏", asset:"assets/chibi/armin.png", alt:"Q版阿尔敏·阿鲁雷特全身人物插画", accent:"#c89f52", profile:{action:.48,planning:.97,collective:.78,inquiry:.94,flexibility:.88,trust:.84}, verdict:"他会先问：还有第三条路吗", summary:"周围的人急着在两条路中选一条时，你往往还会追问：有没有被漏掉的可能？你愿意先听完同伴的顾虑，再决定下一步，也知道无法两全时仍必须行动。", costLead:"寻找更好的答案能减少伤害，也可能让你错过必须出手的时刻。", similarityTitle:"你会为选择多找一个出口", similarity:"你不把犹豫当作软弱，而会用它检查信息、寻找遗漏条件，并尽量让决定不只剩下输赢两端。", costTitle:"理解得更多，不等于能永远推迟", cost:"阿尔敏的难处是：看见每一方的代价后，仍要亲手落下决定。继续求证有价值，但时限不会总等到答案完整。", archetype:"在两条路之外寻找可能的人", intro:"他以观察、想象和沟通改变战局，珍视生命也理解牺牲有时无法回避；真正的成长是从提出方案走向承担方案。", comment:"他并非因为“总能算对”而重要，而是知道决定会伤到人，仍认真寻找伤害更小的路径。", continuation:"如果故事继续，你会是让队伍多看见一种可能的人。下一步不是放弃谨慎，而是为谨慎设定一个必须行动的时刻。", share:"我更接近阿尔敏：他会先问，还有第三条路吗？", timeline:["对墙外世界的好奇，让他与伙伴共同走向未知。","多次用推理、沟通与策略为几乎封死的局面打开出口。","在无法避免的牺牲面前，从提出可能走向承担领导责任。"] },
  { id:"levi", name:"利威尔·阿克曼", short:"利威尔", asset:"assets/chibi/levi.png", alt:"Q版利威尔·阿克曼全身人物插画", accent:"#66796b", profile:{action:.91,planning:.86,collective:.82,inquiry:.44,flexibility:.58,trust:.60}, verdict:"没有完美答案，也要作出选择", summary:"信息不足、损失已经发生时，你更关心下一步还能做对什么。你和利威尔相似的地方，是不拿漂亮口号掩盖风险，并愿意对无法保证的选择负责。", costLead:"冷静能保护队伍，但长期只处理结果，也会让情绪没有被安放的位置。", similarityTitle:"你会在混乱里恢复可执行的秩序", similarity:"面对失败或时间压力，你倾向于先收拢队形、确认事实并采取可靠动作，而不是用激烈表态替代决定。", costTitle:"克制并不等于没有重量", cost:"利威尔承担的是明知无法证明哪条路正确，仍必须选择的压力。效率能让人活下来，却不能自动处理失去留下的情感。", archetype:"在不确定里承担决定的人", intro:"他重视可执行的判断，也从不把选择包装成确定答案；一次次失去之后，仍要决定怎样让牺牲不被浪费。", comment:"“强”只是表面，档案真正记录的是：无法挽回时仍保持判断，并把责任留在自己手中。", continuation:"如果故事继续，你会是危机里最可靠的执行者。也许要给自己留一处不必立即处理、不必马上坚强的空间。", share:"我更接近利威尔：没有完美答案，也要作出选择。", timeline:["从地下街的生存经验进入调查兵团，逐渐成为核心战力。","在多次任务中面对信息不足、命令变化与无法挽回的损失。","背负同伴托付继续前行，让承诺体现在最终行动里。"] },
  { id:"erwin", name:"艾尔文·史密斯", short:"艾尔文", asset:"assets/chibi/erwin.png", alt:"Q版艾尔文·史密斯全身人物插画", accent:"#8a7041", profile:{action:.82,planning:.99,collective:.90,inquiry:.80,flexibility:.50,trust:.70}, verdict:"把远方目标变成共同方向", summary:"局势分裂时，你会先决定什么必须保住，再让资源和人围绕它重新排列。你和艾尔文相似的地方，是能承担集体判断；危险则在于，个人愿望可能披上“大局”的外衣。", costLead:"领导让方向变清楚，也会让别人的代价集中到你的决定上。", similarityTitle:"你习惯先确定不可放弃的目标", similarity:"当计划失败或团队分裂，你倾向于收束目标、保留后手，并让决定能够被整个队伍执行。", costTitle:"大局与私愿有时很难分开", cost:"艾尔文的独特冲突是追寻真相既是公共目标，也是私人执念。承担代价之前，领导者必须诚实辨认两者。", archetype:"用目标聚拢不确定的人", intro:"他以战略和表达让集体行动成为可能，也长期面对一个问题：自己要求他人支付的代价，究竟服务于人类，还是自己的真相。", comment:"真正的领导力不只在决断，更在于不躲到“大局”背后，承认决定里也有自己的欲望。", continuation:"如果故事继续，你会是让混乱重新拥有方向的人。越能说服别人，越需要保留一个能质疑你动机的位置。", share:"我更接近艾尔文：把远方目标变成共同方向。", timeline:["因追寻世界真相加入调查兵团，并逐步成为团长。","用新的作战体系与长期布局，把不可能的探索变成集体行动。","在个人执念与集体使命抵达同一终点时，作出最终选择。"] },
  { id:"hange", name:"韩吉·佐耶", short:"韩吉", asset:"assets/chibi/hange.png", alt:"Q版韩吉·佐耶全身人物插画", accent:"#9c6b48", profile:{action:.68,planning:.78,collective:.70,inquiry:1,flexibility:.94,trust:.82}, verdict:"把恐惧对象变成研究对象", summary:"面对陌生或敌意，你更愿意先理解它如何运作，而不是急着把它归入敌我。你和韩吉相似的地方，是能让新证据改变旧看法，也会因问题太迷人而忘记责任的重量。", costLead:"好奇能打开边界，但领导位置要求你在想知道与必须保护之间取舍。", similarityTitle:"未知会让你靠近，而不是退开", similarity:"发现记录矛盾、陌生区域或难以理解的对象时，你倾向于保留证据、继续观察，并允许结论被新事实修改。", costTitle:"热情也会占用判断空间", cost:"韩吉的张力不只是研究欲，而是成为负责人后，不能永远追随最有趣的问题。好奇需要与时间、资源和他人安全谈判。", archetype:"用理解削弱恐惧的人", intro:"他把敌意对象转化为可观察、可提问的存在；当研究者成为领导者，探索的热情必须与现实责任共享方向。", comment:"好奇不是轻松的天赋，它会不断迫使人承认：自己昨天确信的结论，今天可能需要重写。", continuation:"如果故事继续，你会是最先把未知变成问题的人。别熄灭热情，只要记得有些问题必须由整个队伍决定是否继续追。", share:"我更接近韩吉：把恐惧对象变成研究对象。", timeline:["从单纯对抗转向观察与研究，建立对巨人的关键知识。","不断用实验和新证据挑战被视为理所当然的结论。","承担领导职责后，在探索、生命与现实压力之间作出取舍。"] },
  { id:"reiner", name:"莱纳·布朗", short:"莱纳", asset:"assets/chibi/reiner.png", alt:"Q版莱纳·布朗全身人物插画", accent:"#8b715b", profile:{action:.78,planning:.58,collective:.90,inquiry:.36,flexibility:.32,trust:.66}, verdict:"在彼此冲突的责任之间硬撑", summary:"你容易成为别人眼里“能扛住”的人，也会在身份、承诺和真实感受冲突时继续完成眼前任务。你和莱纳相似的地方，是责任不会因矛盾消失；代价是你可能把撕裂误认成坚强。", costLead:"可靠可以保护别人，也可能让你长期扮演一个无法呼吸的角色。", similarityTitle:"你不会因为内心冲突就停止承担", similarity:"当个人牵挂、集体命令和过去承诺互相拉扯，你仍会试图让至少一部分人安全抵达下一步。", costTitle:"两个身份不能靠硬撑永远共存", cost:"莱纳的核心不是“坚韧可靠”，而是长期扮演互相冲突的角色。若不承认矛盾，责任感最终会变成对自己的惩罚。", archetype:"背着冲突身份继续前行的人", intro:"他既是执行任务的人，也是与同伴共同生活的人；两套责任同时为真，让“英雄”与“加害者”的边界不断破裂。", comment:"档案里的强壮外形不是答案。真正需要被看见的是：一个人如何面对自己确实伤害过、也确实在意的人。", continuation:"如果故事继续，你会是即使矛盾也不轻易离席的人。下一步不是再扛一点，而是停止用角色要求替代真实的责任边界。", share:"我更接近莱纳：在彼此冲突的责任之间硬撑。", timeline:["带着战士任务进入墙内，并试图成为被认可的可靠同伴。","长期生活让任务身份与真实关系发生撕裂。","面对过去的伤害后，责任从完成命令逐渐转向承担后果。"] },
  { id:"zeke", name:"吉克·耶格尔", short:"吉克", asset:"assets/chibi/zeke.png", alt:"Q版吉克·耶格尔全身人物插画", accent:"#8d7a50", profile:{action:.46,planning:.96,collective:.28,inquiry:.82,flexibility:.36,trust:.30}, verdict:"从系统上推演，却容易漏掉人", summary:"你擅长退后一步看结构，愿意为长期方案延迟眼前满足。你和吉克相似的地方，是不轻易被现场情绪带走；危险则是模型越完整，具体生命越可能只剩变量。", costLead:"宏观视角能发现系统问题，也可能替别人决定何为“更好的结局”。", similarityTitle:"你会先寻找改变全局的杠杆", similarity:"面对资源、谈判或长期风险，你更愿意计算整体后果、保留多步计划，而不是只回应眼前最响亮的需求。", costTitle:"正确模型也无法代替他人同意", cost:"吉克的落差在于宏观推演与具体生命之间。他试图减少痛苦，却把别人的选择排除在方案之外。", archetype:"从结构层面寻找终局方案的人", intro:"他以长期布局和宏观逻辑处理族群困境，却也展示了一个危险：当人被缩成数字，减少痛苦的方案仍可能夺走选择。", comment:"冷静并不自动等于客观。模型能解释世界的一部分，但没有任何模型有权替所有人同意。", continuation:"如果故事继续，你会是看见系统裂缝的人。让方案多经历一次具体人物的质疑，可能比让推演再精密一层更重要。", share:"我更接近吉克：从系统上推演，却容易漏掉人。", timeline:["在家庭期待与外部压力中形成对世界的悲观判断。","凭借情报、耐心和多层部署成为关键战略角色。","最终在与具体生命的重新连接中，触碰到模型之外的意义。"] },
  { id:"historia", name:"希斯特莉亚·雷斯", short:"希斯特莉亚", asset:"assets/chibi/historia.png", alt:"Q版希斯特莉亚·雷斯全身人物插画", accent:"#c2a353", profile:{action:.58,planning:.62,collective:.91,inquiry:.56,flexibility:.90,trust:.94}, verdict:"不再迎合期待，重新选择善良", summary:"你会认真看见具体的人，也愿意为了公平质疑既定安排。你和希斯特莉亚相似的地方，不是“温柔”，而是逐渐拒绝用讨好换取位置，让帮助别人变成自己决定的事。", costLead:"善意一旦只剩迎合，就会让你的真实意愿从关系里消失。", similarityTitle:"你希望善意仍然保留选择", similarity:"当规则伤到眼前的人，你更愿意公开冲突、邀请他人共同调整，而不是让一个人默默承担所谓的大局。", costTitle:"被需要不等于被看见", cost:"希斯特莉亚经历过把自我牺牲包装成善良的阶段。真正的自主，是允许自己拒绝别人期待的“好人”角色。", archetype:"从迎合走向自主承担的人", intro:"她曾通过符合他人期待来寻找存在价值，后来学会拒绝被安排，并把对弱者的关心转化为主动选择。", comment:"她的善良之所以有力量，不是因为永远答应，而是因为终于能够说“不”，再决定自己真正愿意承担什么。", continuation:"如果故事继续，你会是让决定重新看见具体人的一方。请保留善意，也保留拒绝；两者同时存在，选择才真正属于你。", share:"我更接近希斯特莉亚：不再迎合期待，重新选择善良。", timeline:["以克里斯塔身份生活，长期用符合期待的形象换取认可。","在重要关系与关键选择中，开始承认并保护真实意愿。","承担女王职责后，把个人觉醒转化为对弱者的长期保护。"] },
  { id:"annie", name:"安妮·莱昂哈特", short:"安妮", asset:"assets/chibi/annie.png", alt:"Q版安妮·莱昂哈特全身人物插画", accent:"#67717a", profile:{action:.72,planning:.84,collective:.40,inquiry:.38,flexibility:.64,trust:.30}, verdict:"只承诺能控制的那一部分", summary:"你不容易把自己交给群体情绪，更愿意验证事实、守住边界，只承诺真正能做到的事。你和安妮相似的地方，是现实而克制；代价是有限信任也会让连接难以发生。", costLead:"自保让你减少被利用的风险，也可能让别人永远不知道你其实在意。", similarityTitle:"你会先划清可控与不可控", similarity:"面对陌生合作、混乱命令或无法两全的关系，你倾向于限制承诺范围，用可验证的行动而不是表态建立判断。", costTitle:"保持距离也会失去被理解的机会", cost:"安妮的现实并非没有情感，而是不相信情感足以保护任何人。过度自保会让有限的信任始终无法长大。", archetype:"以克制和边界保护自己的人", intro:"她依靠训练、判断和距离感生存，对宏大口号保持警惕；冷淡表象下仍有牵挂，只是不轻易允许它主导行动。", comment:"她的独立不是轻松自由，而是把风险和情感都控制在有限范围内，以免再次被他人的目标吞没。", continuation:"如果故事继续，你会是最少轻率许诺的人。试着让少数可信关系知道你的边界为何存在，距离才不会成为永久封闭。", share:"我更接近安妮：只承诺能控制的那一部分。", timeline:["在严格训练与任务要求中形成克制、独立的生存方式。","长期潜伏并执行危险任务，以有限信任维持边界。","重新面对世界后，开始承认牵挂，并选择参与共同的未来。"] }
];

const roleMap = Object.fromEntries(roles.map(role => [role.id, role]));

function optionVector(option) {
  const total = option.roles.reduce((sum, [, weight]) => sum + weight, 0);
  return Object.fromEntries(dimensions.map(dim => [dim, option.roles.reduce((sum, [id, weight]) => sum + roleMap[id].profile[dim] * weight, 0) / total]));
}

function calculateResult(answers) {
  const direct = Object.fromEntries(roles.map(role => [role.id, 0]));
  const maximum = Object.fromEntries(roles.map(role => [role.id, 0]));
  const vector = Object.fromEntries(dimensions.map(dim => [dim, 0]));
  questions.forEach((question, index) => {
    roles.forEach(role => {
      maximum[role.id] += Math.max(
        0,
        ...question.options.map(option => option.roles.find(([id]) => id === role.id)?.[1] || 0)
      );
    });
    const option = question.options[answers[index]];
    option.roles.forEach(([id, weight]) => { direct[id] += weight; });
    const values = optionVector(option);
    dimensions.forEach(dim => { vector[dim] += values[dim]; });
  });
  dimensions.forEach(dim => { vector[dim] /= questions.length; });
  const ranked = roles.map((role, order) => {
    const distance = Math.sqrt(dimensions.reduce((sum, dim) => sum + Math.pow(vector[dim] - role.profile[dim], 2), 0) / dimensions.length);
    const shape = Math.max(0, 1 - distance);
    const affinity = direct[role.id] / Math.max(1, maximum[role.id]);
    return { ...role, direct: direct[role.id], shape, score: affinity * .7 + shape * .3, order };
  }).sort((a, b) => b.score - a.score || b.direct - a.direct || b.shape - a.shape || a.order - b.order);
  return { ranked, vector };
}

function browserApp() {
  const $ = id => document.getElementById(id);
  const screens = ["introScreen","quizScreen","resultScreen"];
  const state = { index:0, answers:Array(questions.length).fill(null), result:null };
  const storageKey = "wall-character-choices-v2";

  function showScreen(id) {
    screens.forEach(name => $(name).classList.toggle("is-active", name === id));
    window.scrollTo({ top:0, behavior:"smooth" });
  }
  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify({ index:state.index, answers:state.answers }));
    $("resumeButton").hidden = !state.answers.some(value => value !== null);
  }
  function renderQuestion() {
    const question = questions[state.index];
    $("currentNumber").textContent = String(state.index + 1).padStart(2,"0");
    $("currentNumber").nextElementSibling.textContent = `/ ${questions.length}`;
    $("progressBar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
    $("dimensionLabel").textContent = question.dimension;
    $("questionCode").textContent = `SCENE-${String(state.index + 1).padStart(2,"0")}`;
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
    if (!resume) { state.index = 0; state.answers = Array(questions.length).fill(null); }
    showScreen("quizScreen"); renderQuestion(); saveState();
  }
  function evidenceFor(roleId) {
    return questions.map((question, index) => ({ option:question.options[state.answers[index]], index })).filter(item => item.option.roles.some(([id]) => id === roleId)).sort((a,b) => (b.option.roles.find(([id]) => id === roleId)?.[1] || 0) - (a.option.roles.find(([id]) => id === roleId)?.[1] || 0)).slice(0,3).map(item => item.option.signal);
  }
  function renderDimensions(vector) {
    $("dimensionList").innerHTML = dimensions.map(dim => `<div class="dimension-row"><strong>${dimensionNames[dim]}</strong><div class="dimension-meter"><i style="width:${Math.round(vector[dim] * 100)}%"></i></div><span>${vector[dim] >= .72 ? "鲜明" : vector[dim] >= .52 ? "适中" : "克制"}</span></div>`).join("");
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
    $("evidenceChips").innerHTML = evidence.slice(0,2).map(text => `<span>${text}</span>`).join("");
    $("similarityTitle").textContent = top.similarityTitle;
    $("similarityText").textContent = `${top.similarity}${evidence.length ? ` 你的选择中反复出现了“${evidence.join("”“")}”。` : ""}`;
    $("costTitle").textContent = top.costTitle;
    $("costText").textContent = top.cost;
    $("roleCode").textContent = top.id.toUpperCase();
    $("roleArchetype").textContent = top.archetype;
    $("roleIntro").textContent = top.intro;
    $("roleCreed").textContent = top.comment;
    $("roleTimeline").innerHTML = top.timeline.map(text => `<li>${text}</li>`).join("");
    $("alternativeRoles").innerHTML = result.ranked.slice(1,3).map((role, index) => `<article class="alternative-card"><img src="${role.asset}" alt="${role.alt}" loading="lazy"><div><span>${index === 0 ? "也很接近" : "还带有"}</span><h3>${role.name}</h3><p>${role.verdict}</p></div></article>`).join("");
    $("continuationText").textContent = top.continuation;
    renderDimensions(result.vector);
    window.latestResult = `我的墙内人物档案：我更接近${top.name}——${top.verdict}。${top.share} 也有${result.ranked[1].short}与${result.ranked[2].short}的侧影。非官方同人娱乐测试。`;
    localStorage.removeItem(storageKey);
    $("resumeButton").hidden = true;
    $("resultReveal").classList.remove("is-revealed");
    showScreen("resultScreen");
    requestAnimationFrame(() => $("resultReveal").classList.add("is-revealed"));
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
    ctx.fillStyle = "#c8a66a"; ctx.font = "700 28px sans-serif"; ctx.fillText("墙内人物档案 · 非官方同人测试",80,105);
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
  try { const saved=JSON.parse(localStorage.getItem(storageKey)); if (saved && Array.isArray(saved.answers) && saved.answers.length===questions.length) { state.index=Math.min(saved.index||0,questions.length-1); state.answers=saved.answers; $("resumeButton").hidden=!saved.answers.some(value=>value!==null); } } catch { localStorage.removeItem(storageKey); }
  const context = document.modelContext;
  if (context?.registerTool) {
    try { void Promise.resolve(context.registerTool({ name:"complete_character_scenarios", title:"完成墙内人物选择", description:"提交 16 个处境选择并在页面显示人物档案。答案值为 0—3。", inputSchema:{type:"object",properties:{answers:{type:"array",minItems:questions.length,maxItems:questions.length,items:{type:"integer",minimum:0,maximum:3}}},required:["answers"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, async execute(input){ if(!Array.isArray(input?.answers)||input.answers.length!==questions.length||input.answers.some(value=>!Number.isInteger(value)||value<0||value>3)) throw new Error("answers 必须包含 16 个 0—3 的整数"); state.answers=input.answers.slice(); renderResults(); return {status:"completed",top_role:state.result.ranked[0].name,secondary_roles:state.result.ranked.slice(1,3).map(role=>role.name)}; } })).catch(()=>{}); } catch {}
  }
}

if (typeof document !== "undefined") browserApp();
if (typeof module !== "undefined") module.exports = { questions, roles, dimensions, calculateResult };
