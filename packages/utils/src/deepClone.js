export default deepClone = (obj) => {
  // 定义一个映射，解决循环引用
  const map = new WeakMap();
  map.set(obj, true);

  const copy = (obj) => {
    if (!obj || typeof obj !== "object") {
      return {};
    }
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      const value = obj[key];
      // 如果拷贝的是简单类型的值直接进行赋值
      if (typeof value !== "object") {
        newObj[key] = value;
      } else {
        // 如果拷贝的是复杂数据类型第一次拷贝后存入 map
        // 第二次再次遇到该值时直接赋值为 null，结束递归
        if (map.has(value)) {
          newObj[key] = null;
        } else {
          map.set(value, true);
          newObj[key] = copy(value);
        }
      }
    }
    return newObj;
  };
  return copy(obj);
};
