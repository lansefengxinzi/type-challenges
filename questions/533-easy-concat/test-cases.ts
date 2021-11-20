import { Equal, Expect } from "../../utils";

// 想复杂了， 可以使用一些js 的思想， 数组合并就是 ... 就OK了
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];
