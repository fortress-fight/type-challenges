type AppendArgument<Fn extends (...param: any[]) => any, A> = Fn extends (
  ...param: infer T
) => infer R
  ? (...param: [...T, A]) => R
  : never
