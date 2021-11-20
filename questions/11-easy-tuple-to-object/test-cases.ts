import { Equal, Expect } from "../../utils";

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type s = typeof tuple;
type s1 = [typeof tuple][number];

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
