// 模拟call
function call(ctx, ...params) {
  ctx.func = this;
  return ctx.func(...params);
}

Function.prototype._call = call;

// 测试用例
const obj = {
  name: "zs",
  age: 18,
};

function sayName(param) {
  return this.name + param;
}

result = sayName._call(obj, 2);
console.log(result);
