type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer T
) => any
  ? T
  : []
