import { Equal, Expect } from "../../utils";

// 可直接添加readonly
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
