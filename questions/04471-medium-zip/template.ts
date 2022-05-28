type Zip<A extends any[], A2 extends any[], R extends any[] = []> = A extends [
  infer F,
  ...infer O,
]
  ? A2 extends [infer F2, ...infer O2]
    ? Zip<O, O2, [...R, [F, F2]]>
    : R
  : R
