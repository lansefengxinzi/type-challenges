import { Equal, Expect } from "../../utils";

// 方法1
// type First<T extends any[]> = T extends [] ? never : T[0];

// 方法2
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// infer 定义第一个元素 first， 数组中如果有第一个元素 ，则返回 first， 否则 never
type First<T extends any[]> = T extends { 0: infer first } ? first : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
