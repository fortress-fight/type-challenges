type UniqueInclude<T, U extends any[]> = U extends [infer F, ...infer O]
  ? Equal<F, T> extends true
    ? true
    : UniqueInclude<T, O>
  : false

type Unique<T, R extends any[] = []> = T extends [infer F, ...infer O]
  ? UniqueInclude<F, R> extends true
    ? Unique<O, R>
    : Unique<O, [...R, F]>
  : R
