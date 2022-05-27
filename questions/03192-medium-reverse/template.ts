type Reverse<T, R extends unknown[] = []> = T extends [infer F, ...infer O]
  ? Reverse<O, [F, ...R]>
  : R
