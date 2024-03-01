// 实现Promise

class _Promise {
  constructor(func) {
    this.state = "pending";
    this.result = undefined;
    this.err = undefined;
    func(this.resolve.bind(this), this.reject.bind(this));
  }
  catch() {}
  then(func) {
    func(this.result);
  }
  resolve(val) {
    this.result = val;
    this.state = "fulfilled";
  }
  reject(val) {
    this.err = val;
    this.state = "rejected";
  }
}

const myPromise = new _Promise((resolve, reject) => {
  resolve(2);
});

myPromise.then((res) => {
  console.log(res);
});
