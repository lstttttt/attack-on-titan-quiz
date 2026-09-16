const questions = [
  { text: "紧急情况下，我通常会立刻采取行动，即使需要自己承担风险。", dimension: "勇气", key: "courage" },
  { text: "当集体处于危机中，我愿意牺牲个人利益换取更多人的安全。", dimension: "责任与牺牲", key: "loyalty" },
  { text: "我通常愿意先相信伙伴，并把重要任务交给他们。", dimension: "合作与信任", key: "empathy" },
  { text: "遭到背叛后，我很难真正放下，会长久记得这件事。", dimension: "情绪与宽恕", key: "stability", reverse: true },
  { text: "面对复杂任务，我喜欢先做完整计划，再开始行动。", dimension: "计划与理性", key: "strategy" },
  { text: "遇到未知事物时，我会忍不住追问它背后的真相。", dimension: "好奇与开放", key: "curiosity" },
  { text: "即使周围一片混乱，我也能保持冷静并继续判断。", dimension: "压力与稳定", key: "stability" },
  { text: "即使权威已经下令，我仍会在必要时提出质疑。", dimension: "独立判断", key: "independence" },
  { text: "越是强大的对手，越能激起我的斗志。", dimension: "竞争与行动", key: "courage" },
  { text: "我有清晰的是非判断，不容易因为现场情绪改变立场。", dimension: "信念与决断", key: "conviction" },
  { text: "压力越大，我越容易怀疑自己的能力。", dimension: "压力与稳定", key: "stability", reverse: true },
  { text: "与同伴意见冲突时，我会先理解对方，再寻找共同方案。", dimension: "合作与同理", key: "empathy" },
  { text: "我更愿意独自把问题解决，而不是等待团队帮助。", dimension: "独立与距离", key: "independence" },
  { text: "即使会让自己陷入不利，我也会优先帮助处境更弱的人。", dimension: "保护与利他", key: "loyalty" },
  { text: "只要目标值得，我愿意接受长期、枯燥而严格的训练。", dimension: "自律与尽责", key: "discipline" },
  { text: "比起让仇恨延续，我更愿意在适当的时候选择放下。", dimension: "情绪与宽恕", key: "empathy" },
  { text: "为了长远目标，我能接受眼前的损失与误解。", dimension: "战略与牺牲", key: "strategy" },
  { text: "面对没有答案的未知，我感到兴奋而不是退缩。", dimension: "探索与开放", key: "curiosity" },
  { text: "情绪强烈时，我有时会先行动，之后才考虑后果。", dimension: "冲动与克制", key: "discipline", reverse: true },
  { text: "团队陷入混乱时，我愿意站出来做决定并承担结果。", dimension: "领导与责任", key: "leadership" }
];

const scale = [
  { label: "非常不同意", note: "完全不像我" },
  { label: "比较不同意", note: "多数时候不符合" },
  { label: "不确定", note: "视情况而定" },
  { label: "比较同意", note: "多数时候符合" },
  { label: "非常同意", note: "非常像我" }
];

const roles = [
  { name:"艾伦·耶格尔", short:"艾伦", tags:["自由意志","行动果断","信念强烈"], profile:{courage:.98,loyalty:.72,empathy:.42,stability:.35,strategy:.48,curiosity:.72,independence:.92,conviction:.98,discipline:.55,leadership:.78}, summary:"你对自由与目标有强烈执着。面对阻碍时，你倾向于亲自打破僵局，而不是等待局势替你选择。", advice:["把锋芒变成方向","你的行动力足以带动他人；在冲锋前多留一次复盘，会让力量更稳定。","为情绪留出出口","强烈的信念是燃料，也可能压缩视野。让可信赖的人挑战你的判断。"] },
  { name:"米卡莎·阿克曼", short:"米卡莎", tags:["忠诚守护","冷静果断","韧性出众"], profile:{courage:.93,loyalty:.98,empathy:.7,stability:.82,strategy:.62,curiosity:.38,independence:.55,conviction:.84,discipline:.94,leadership:.58}, summary:"你习惯用行动保护重要的人。危机越迫近，你越能收起杂念，以稳定而直接的方式解决问题。", advice:["守护也要有边界","忠诚是你的核心优势，但别把所有人的安全都变成一个人的责任。","说出你的需要","你很擅长承担，却容易省略自己的感受。表达需求不会削弱你的可靠。"] },
  { name:"阿尔敏·阿鲁雷特", short:"阿尔敏", tags:["战略思考","温和坚定","好奇求真"], profile:{courage:.62,loyalty:.84,empathy:.95,stability:.58,strategy:.98,curiosity:.94,independence:.56,conviction:.76,discipline:.76,leadership:.66}, summary:"你擅长在混乱中寻找另一条路。你看见细节与可能性，也愿意为了更少的伤害承担艰难决定。", advice:["相信你的判断","完整分析并不等于犹豫。为决策设置时限，会让你的智慧更快产生影响。","保留理想主义","你能同时看见现实与更好的可能；别因为环境粗粝而放弃这种能力。"] },
  { name:"利威尔·阿克曼", short:"利威尔", tags:["高度自律","冷静高效","责任感强"], profile:{courage:.94,loyalty:.84,empathy:.58,stability:.98,strategy:.84,curiosity:.42,independence:.88,conviction:.9,discipline:1,leadership:.82}, summary:"你重视效率、纪律与可执行的结果。越是艰难的局面，你越会把情绪收紧，把注意力放在必须完成的事上。", advice:["允许不完美存在","高标准让你可靠，也会带来持续消耗。区分关键细节与可接受误差。","让关心被看见","你可能更习惯用行动表达在意；偶尔把它说出来，会减少彼此的误判。"] },
  { name:"艾尔文·史密斯", short:"艾尔文", tags:["战略领导","长期主义","敢担代价"], profile:{courage:.9,loyalty:.78,empathy:.55,stability:.9,strategy:1,curiosity:.86,independence:.86,conviction:.96,discipline:.92,leadership:1}, summary:"你能够为了远方目标承受当下代价。你善于凝聚团队、分配资源，并在信息不完整时做出承担后果的决定。", advice:["别让目标吞没自己","长期主义需要代价，但你的个人需要也应该进入决策模型。","公开决策依据","你能承受复杂权衡；让团队理解原因，会把服从变成真正的共识。"] },
  { name:"韩吉·佐耶", short:"韩吉", tags:["探索欲强","热情开放","理性共情"], profile:{courage:.76,loyalty:.76,empathy:.84,stability:.7,strategy:.82,curiosity:1,independence:.86,conviction:.72,discipline:.66,leadership:.72}, summary:"未知不会让你停下，反而会点燃你的注意力。你擅长把热情变成观察，并用新的理解改写旧结论。", advice:["给好奇心设锚点","探索能打开局面；明确阶段目标，可以避免兴趣把精力拉得过散。","让热情感染团队","你天然能降低未知带来的恐惧，把发现讲给别人听会放大你的价值。"] },
  { name:"莱纳·布朗", short:"莱纳", tags:["责任沉重","坚韧可靠","内在冲突"], profile:{courage:.86,loyalty:.9,empathy:.64,stability:.38,strategy:.62,curiosity:.35,independence:.38,conviction:.62,discipline:.82,leadership:.74}, summary:"你很容易成为他人眼中可靠的人，也常把责任放在自己肩上。即使内在矛盾，你仍会努力完成承诺。", advice:["区分责任与负罪感","承担不等于惩罚自己。把事实责任和情绪负担分开，才能恢复力量。","允许角色之外的自己","你不必永远符合别人期待的形象。稳定来自一致，而不是压抑。"] },
  { name:"吉克·耶格尔", short:"吉克", tags:["冷静布局","独立判断","悲观理性"], profile:{courage:.66,loyalty:.34,empathy:.3,stability:.82,strategy:.96,curiosity:.76,independence:.94,conviction:.9,discipline:.8,leadership:.8}, summary:"你倾向于退后一步观察系统，再寻找能改变全局的杠杆。你独立、克制，不轻易被群体情绪左右。", advice:["别让逻辑隔离经验","宏观方案需要真实个体校验。主动收集与你判断相反的感受和事实。","给希望留一席之地","悲观能降低风险，但也会过滤可能性。保留一个可逆的小实验。"] },
  { name:"希斯特莉亚·雷斯", short:"希斯特莉亚", tags:["温柔坚定","承担责任","同理心强"], profile:{courage:.72,loyalty:.88,empathy:.98,stability:.68,strategy:.62,curiosity:.55,independence:.7,conviction:.82,discipline:.72,leadership:.7}, summary:"你的温和并不等于软弱。你会认真看见他人的处境，也能在关键时刻拒绝被安排的人生。", advice:["善意不必讨好","真正的同理心也包含对自己的尊重。答应之前，先确认那是不是你的意愿。","把价值观变成边界","你知道什么值得保护；清晰边界会让你的善意更有持续性。"] },
  { name:"安妮·莱昂哈特", short:"安妮", tags:["独立克制","现实清醒","精准行动"], profile:{courage:.78,loyalty:.46,empathy:.45,stability:.86,strategy:.74,curiosity:.4,independence:1,conviction:.68,discipline:.94,leadership:.34}, summary:"你不热衷于表态，更愿意观察、判断，然后精准行动。你珍惜独处与自主，也很少向外界暴露脆弱。", advice:["独立不等于隔绝","选择值得信任的少数关系，让支持成为选项，而不是风险。","把冷静用在沟通上","你看得清局势；提前说出底线，比沉默到最后再抽离更有效。"] }
];

const dims = ["courage","strategy","loyalty","empathy","stability","independence"];
const dimNames = { courage:"勇气", strategy:"谋略", loyalty:"忠诚", empathy:"共情", stability:"稳定", independence:"独立" };
const state = { index: 0, answers: Array(questions.length).fill(null) };
const $ = (id) => document.getElementById(id);
const screens = ["introScreen","quizScreen","resultScreen"];

function showScreen(id) {
  screens.forEach(name => $(name).classList.toggle("is-active", name === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveState() {
  localStorage.setItem("wall-personality-progress", JSON.stringify(state));
  $("resumeButton").hidden = !state.answers.some(v => v !== null);
}

function renderQuestion() {
  const q = questions[state.index];
  $("currentNumber").textContent = String(state.index + 1).padStart(2, "0");
  $("progressBar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("dimensionLabel").textContent = q.dimension;
  $("questionCode").textContent = `Q-${String(state.index + 1).padStart(2, "0")}`;
  $("questionText").textContent = q.text;
  $("answerList").innerHTML = scale.map((item, i) => `
    <div class="answer-option">
      <input type="radio" name="answer" id="answer-${i}" value="${i}" ${state.answers[state.index] === i ? "checked" : ""}>
      <label for="answer-${i}"><span class="option-key">${i + 1}</span><strong>${item.label}</strong><span class="option-note">${item.note}</span></label>
    </div>`).join("");
  $("answerList").querySelectorAll("input").forEach(input => input.addEventListener("change", event => {
    state.answers[state.index] = Number(event.target.value);
    $("nextButton").disabled = false;
    $("nextButton").textContent = state.index === questions.length - 1 ? "生成档案 →" : "下一题 →";
    saveState();
  }));
  $("prevButton").disabled = state.index === 0;
  $("nextButton").disabled = state.answers[state.index] === null;
  $("nextButton").textContent = state.index === questions.length - 1 ? "生成档案 →" : "下一题 →";
}

function startQuiz(resume = false) {
  if (!resume) { state.index = 0; state.answers = Array(questions.length).fill(null); }
  showScreen("quizScreen"); renderQuestion(); saveState();
}

function userVector() {
  const totals = {}, counts = {};
  questions.forEach((q, i) => {
    let v = state.answers[i] / 4;
    if (q.reverse) v = 1 - v;
    totals[q.key] = (totals[q.key] || 0) + v;
    counts[q.key] = (counts[q.key] || 0) + 1;
  });
  Object.keys(totals).forEach(k => totals[k] /= counts[k]);
  return totals;
}

function similarity(a, b) {
  const keys = Object.keys(b);
  const distance = Math.sqrt(keys.reduce((sum, key) => sum + Math.pow((a[key] ?? .5) - b[key], 2), 0) / keys.length);
  return Math.max(0, 1 - distance);
}

function drawRadar(vector) {
  const svg = $("radarChart"), cx = 180, cy = 148, radius = 108;
  const point = (idx, value) => { const angle = -Math.PI / 2 + idx * Math.PI * 2 / dims.length; return [cx + Math.cos(angle) * radius * value, cy + Math.sin(angle) * radius * value]; };
  const polygon = value => dims.map((_, i) => point(i, value).join(",")).join(" ");
  const grids = [1,.75,.5,.25].map(v => `<polygon class="radar-grid" points="${polygon(v)}"/>`).join("");
  const axes = dims.map((_, i) => { const [x,y] = point(i,1); return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; }).join("");
  const shapePoints = dims.map((d,i) => point(i, vector[d] ?? .5));
  const shape = `<polygon class="radar-shape" points="${shapePoints.map(p=>p.join(",")).join(" ")}"/>${shapePoints.map(p=>`<circle class="radar-dot" cx="${p[0]}" cy="${p[1]}" r="4"/>`).join("")}`;
  const labels = dims.map((d,i) => { const [x,y] = point(i,1.25); const anchor = x < cx - 8 ? "end" : x > cx + 8 ? "start" : "middle"; return `<text class="radar-label" x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle">${dimNames[d]} ${Math.round((vector[d] ?? .5)*100)}</text>`; }).join("");
  svg.innerHTML = grids + axes + shape + labels;
}

function renderResults() {
  const vector = userVector();
  const ranked = roles.map(role => ({...role, score: similarity(vector, role.profile)})).sort((a,b) => b.score - a.score);
  const top = ranked[0];
  const displayScore = score => Math.round(60 + score * 38);
  $("resultTitle").textContent = top.name;
  $("topScore").textContent = displayScore(top.score);
  $("tagList").innerHTML = top.tags.map(tag => `<span>${tag}</span>`).join("");
  $("resultSummary").textContent = top.summary;
  $("resultScreen").querySelector(".result-hero").dataset.initial = top.short.slice(0,1);
  $("rankingList").innerHTML = ranked.slice(0,3).map((role, i) => `<li class="rank-row"><span class="rank-number">0${i+1}</span><div class="rank-name"><strong>${role.name}</strong><div class="rank-bar"><i style="width:${displayScore(role.score)}%"></i></div></div><span class="rank-score">${displayScore(role.score)}%</span></li>`).join("");
  $("adviceContent").innerHTML = `<div class="advice-item"><span>CORE / 核心模式</span><h3>${top.tags[0]} × ${top.tags[1]}</h3><p>${top.summary}</p></div>${top.advice.map((item, i) => i % 2 === 0 ? `<div class="advice-item"><span>NOTE / 行动建议</span><h3>${item}</h3><p>${top.advice[i+1]}</p></div>` : "").join("")}`;
  drawRadar(vector);
  window.latestResult = `我的墙内人格档案：最像${top.name}（${displayScore(top.score)}%）。关键词：${top.tags.join("、")}。`;
  localStorage.setItem("wall-personality-result", JSON.stringify({ name: top.name, score: displayScore(top.score), tags: top.tags }));
  localStorage.removeItem("wall-personality-progress");
  $("resumeButton").hidden = true;
  showScreen("resultScreen");
}

$("startButton").addEventListener("click", () => startQuiz(false));
$("resumeButton").addEventListener("click", () => startQuiz(true));
$("prevButton").addEventListener("click", () => { if (state.index > 0) { state.index--; renderQuestion(); saveState(); } });
$("nextButton").addEventListener("click", () => { if (state.answers[state.index] === null) return; if (state.index < questions.length - 1) { state.index++; renderQuestion(); saveState(); } else renderResults(); });
$("exitButton").addEventListener("click", () => { saveState(); showScreen("introScreen"); });
$("restartButton").addEventListener("click", () => startQuiz(false));
$("copyButton").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(window.latestResult); $("toast").textContent = "结果已复制"; }
  catch { $("toast").textContent = "复制失败，请手动截图保存"; }
  $("toast").classList.add("is-visible"); setTimeout(() => $("toast").classList.remove("is-visible"), 1800);
});
document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); showScreen("introScreen"); });
document.addEventListener("keydown", event => {
  if (!$("quizScreen").classList.contains("is-active")) return;
  const n = Number(event.key);
  if (n >= 1 && n <= 5) { const input = $(`answer-${n-1}`); input.checked = true; input.dispatchEvent(new Event("change", {bubbles:true})); }
  if (event.key === "Enter" && !$("nextButton").disabled) $("nextButton").click();
});

try {
  const saved = JSON.parse(localStorage.getItem("wall-personality-progress"));
  if (saved && Array.isArray(saved.answers) && saved.answers.length === questions.length) { state.index = saved.index || 0; state.answers = saved.answers; $("resumeButton").hidden = false; }
} catch { localStorage.removeItem("wall-personality-progress"); }

function registerWebTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const controller = new AbortController();
  const schema = {
    type: "object",
    properties: {
      answers: {
        type: "array",
        description: "按题号排列的 20 个答案；0=非常不同意，1=比较不同意，2=不确定，3=比较同意，4=非常同意。",
        minItems: questions.length,
        maxItems: questions.length,
        items: { type: "integer", minimum: 0, maximum: 4 }
      }
    },
    required: ["answers"],
    additionalProperties: false
  };
  try {
    void Promise.resolve(context.registerTool({
      name: "complete_character_questionnaire",
      title: "完成角色匹配问卷",
      description: "提交整套 20 题答案，更新页面并生成角色匹配结果。仅在用户明确给出每题答案后使用。",
      inputSchema: schema,
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const answers = input?.answers;
        if (!Array.isArray(answers) || answers.length !== questions.length || answers.some(v => !Number.isInteger(v) || v < 0 || v > 4)) {
          throw new Error("answers 必须是由 20 个 0—4 整数组成的数组");
        }
        state.answers = answers.slice();
        state.index = questions.length - 1;
        renderResults();
        const saved = JSON.parse(localStorage.getItem("wall-personality-result"));
        return { status: "completed", top_role: saved.name, match_percent: saved.score, tags: saved.tags };
      }
    }, { signal: controller.signal })).catch(() => {});
  } catch {}
}

registerWebTools();
