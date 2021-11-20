import { Equal, Expect } from "../../utils";

// 条件判断
type If<C, T, F> = C extends true ? T : F;

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
