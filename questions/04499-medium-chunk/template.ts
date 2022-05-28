type Chunk<
  T extends any[],
  N extends number,
  R extends any[] = [],
  R2 extends any[] = [],
  C extends any[] = [],
> = T extends [infer F, ...infer O]
  ? C['length'] extends N
    ? Chunk<T, N, [...R, R2], [], []>
    : Chunk<O, N, R, [...R2, F], [...C, 1]>
  : [] extends R2
      ? [...R]
      : [...R, R2]
