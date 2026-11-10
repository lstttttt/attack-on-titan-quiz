const assert = require("node:assert/strict");
const { questions, roles, dimensions, calculateResult } = require("../dist/app.js");

assert.equal(questions.length, 16, "问卷应有 16 题");
assert.equal(dimensions.length, 6, "应保留 6 个可解释维度");
assert.equal(roles.length, 10, "应有 10 个结果角色");

const ids = new Set(roles.map(role => role.id));
const appearances = Object.fromEntries(roles.map(role => [role.id, 0]));

questions.forEach((question, questionIndex) => {
  assert.ok(question.text?.trim(), `第 ${questionIndex + 1} 题缺少题干`);
  assert.equal(question.options.length, 4, `第 ${questionIndex + 1} 题应有 4 个选项`);
  question.options.forEach((option, optionIndex) => {
    assert.ok(option.text?.trim(), `第 ${questionIndex + 1} 题第 ${optionIndex + 1} 个选项缺少文字`);
    assert.ok(ids.has(option.roleId), `发现未知角色 ${option.roleId}`);
    appearances[option.roleId] += 1;
  });
  assert.equal(new Set(question.options.map(option => option.roleId)).size, 4, `第 ${questionIndex + 1} 题的角色关联应互不重复`);
});

const expectedAppearances = { eren:7, mikasa:7, armin:7, levi:7, erwin:6, hange:6, reiner:6, zeke:6, historia:6, annie:6 };
assert.deepEqual(appearances, expectedAppearances, "64 个选项的角色映射数量与规格不符");

function strongestPath(roleId) {
  const fallbackCounts = Object.fromEntries(roles.map(role => [role.id, 0]));
  return questions.map(question => {
    const directIndex = question.options.findIndex(option => option.roleId === roleId);
    if (directIndex >= 0) return directIndex;
    const target = roles.find(role => role.id === roleId);
    const selected = question.options.map((option, index) => {
      const profile = roles.find(role => role.id === option.roleId).profile;
      const distance = dimensions.reduce((sum, dim) => sum + Math.pow(profile[dim] - target.profile[dim], 2), 0);
      return { index, roleId:option.roleId, distance };
    }).sort((a,b) => fallbackCounts[a.roleId] - fallbackCounts[b.roleId] || a.distance - b.distance || a.index - b.index)[0];
    fallbackCounts[selected.roleId] += 1;
    return selected.index;
  });
}

roles.forEach(role => {
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
  mappedOptions: appearances[role.id],
  randomShare: `${(winners[role.id] / runs * 100).toFixed(2)}%`
})));
