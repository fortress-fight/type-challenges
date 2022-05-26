type Flatten<T extends any[], N extends any[] = []> = T extends [
  infer F,
  ...infer O,
]
  ? F extends any[]
    ? Flatten<O, [...N, ...Flatten<F>]>
    : Flatten<O, [...N, F]>
  : N
