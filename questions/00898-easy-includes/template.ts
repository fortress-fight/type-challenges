// 关于如何实现 Equal 的讨论：https://github.com/microsoft/TypeScript/issues/27024

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Other,
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Other, U>
  : false
