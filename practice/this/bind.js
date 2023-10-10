function bind(ctx) {
  ctx.func = this;
  const func = (...params) => {
    ctx.func(...params);
  };

  return func;
}

Function.prototype._bind = bind;

// 测试用例
function saySomething(key) {
  console.log(this[key]);
}

const obj = {
  name: "zs",
};
saySomething._bind(obj)("name");
