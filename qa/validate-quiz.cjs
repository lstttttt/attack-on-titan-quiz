const assert = require("node:assert/strict");
const { questions, roles, dimensions, calculateResult } = require("../dist/app.js");

assert.equal(questions.length, 16, "问卷应有 16 题");
assert.equal(dimensions.length, 6, "应保留 6 个可解释维度");
assert.equal(roles.length, 10, "应有 10 个结果角色");

const ids = new Set(roles.map(role => role.id));
const appearances = Object.fromEntries(roles.map(role => [role.id, { primary: 0, secondary: 0 }]));

questions.forEach((question, questionIndex) => {
  assert.ok(question.text?.trim(), `第 ${questionIndex + 1} 题缺少题干`);
  assert.equal(question.options.length, 4, `第 ${questionIndex + 1} 题应有 4 个选项`);
  question.options.forEach((option, optionIndex) => {
    assert.ok(option.text?.trim(), `第 ${questionIndex + 1} 题第 ${optionIndex + 1} 个选项缺少文字`);
    assert.equal(option.roles.length, 2, `第 ${questionIndex + 1} 题第 ${optionIndex + 1} 个选项应关联 2 个角色`);
    option.roles.forEach(([id, weight], roleIndex) => {
      assert.ok(ids.has(id), `发现未知角色 ${id}`);
      assert.equal(weight, roleIndex === 0 ? 2 : 1, "角色权重应为 2/1");
      appearances[id][roleIndex === 0 ? "primary" : "secondary"] += 1;
    });
  });
});

function strongestPath(roleId) {
  return questions.map(question => {
    let bestIndex = 0;
    let bestWeight = -1;
    question.options.forEach((option, index) => {
      const weight = option.roles.find(([id]) => id === roleId)?.[1] || 0;
      if (weight > bestWeight) {
        bestIndex = index;
        bestWeight = weight;
      }
    });
    return bestIndex;
  });
}

roles.forEach(role => {
  assert.ok(appearances[role.id].primary >= 3, `${role.name} 的主关联题过少`);
  assert.ok(appearances[role.id].secondary >= 1, `${role.name} 的次关联题过少`);
  const result = calculateResult(strongestPath(role.id));
  assert.equal(result.ranked[0].id, role.id, `${role.name} 的典型路径未得到本人结果`);
});

let seed = 0x5eed1234;
function random() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 0x100000000;
}

const runs = 50000;
const winners = Object.fromEntries(roles.map(role => [role.id, 0]));
for (let run = 0; run < runs; run += 1) {
  const answers = questions.map(() => Math.floor(random() * 4));
  winners[calculateResult(answers).ranked[0].id] += 1;
}

roles.forEach(role => {
  const share = winners[role.id] / runs;
  assert.ok(share >= 0.01, `${role.name} 随机可达率过低：${(share * 100).toFixed(2)}%`);
  assert.ok(share <= 0.3, `${role.name} 随机结果占比过高：${(share * 100).toFixed(2)}%`);
});

console.log("结构、典型路径与随机可达性检查通过。\n");
console.table(roles.map(role => ({
  role: role.name,
  primary: appearances[role.id].primary,
  secondary: appearances[role.id].secondary,
  randomShare: `${(winners[role.id] / runs * 100).toFixed(2)}%`
})));
