type MyParameters<T extends Function> = T extends (...args: infer K) => any
  ? K
  : []
