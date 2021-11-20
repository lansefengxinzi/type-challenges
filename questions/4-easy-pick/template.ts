// 对于对象，通过使用 keyof 来遍历属性
// 对于 union 类型， 通过 in 遍历对象
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
