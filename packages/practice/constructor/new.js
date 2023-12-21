// 模拟new命令符
function _new(cFunc, ...params) {
  const obj = {};

  obj.__proto__ = cFunc.prototype;
  const result = cFunc.call(obj, ...params);
  return result instanceof Object ? result : obj;
}

// 测试用例
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function sayName() {
  console.log(this.name);
};

const p = _new(Person, "zs", 18);
p.sayName();
