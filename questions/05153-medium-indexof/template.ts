type IndexOf<T, U, C extends any[] = []> = T extends [infer F, ...infer O]
  ? Equal<F, U> extends true
    ? C['length']
    : IndexOf<O, U, [...C, 1]>
  : -1
