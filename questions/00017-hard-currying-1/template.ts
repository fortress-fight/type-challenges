// #region
// 测试一：失败原因，传递的函数返回值没有收敛.
// 以 curried1 为例，返回值类型为 boolean 而不是测试要求的 true
// type test<F extends (...params: any[]) => any, R> = F extends (
//   ...args: [infer K, ...infer J]
// ) => any
//   ? (arg: K) => J extends [...any[], any] ? test<(...param: J) => any, R> : R
//   : never

// declare function Currying<T extends (...params: any[]) => any>(
//   fn: T,
// ): T extends (...args: any[]) => infer R ? test<T, R> : never

// const curried1 = Currying((a: string, b: number, c: boolean) => true)
// #endregion

type Currying<T extends Function> = T extends (...args: infer A) => infer V
  ? A extends [infer K, ...infer J]
    ? (arg: K) => Currying<(...param: J) => V>
    : V
  : never

declare function Currying<T extends Function>(fn: T): Currying<T>
