import { Equal, Expect } from "../../utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;

// 注意 infer 的使用， 可以用infer 重新定义类型， 获取类型
type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
];

// @ts-expect-error
type error = Awaited<number>;
