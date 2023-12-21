function apply(ctx, params) {
  ctx.func = this;
  return ctx.func(...params);
}

Function.prototype._apply = apply;

// 测试用例
function saySomething(key) {
  console.log(this[key]);
}

const obj = {
  name: "zs",
};

saySomething._apply(obj, ["name"]);
