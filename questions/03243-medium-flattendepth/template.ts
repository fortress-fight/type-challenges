type FlattenDepth<
  T,
  N extends number = 1,
  U extends any[] = [],
  C extends any[] = [],
> = T extends [infer F, ...infer O]
  ? F extends any[]
    ? N extends C['length']
      ? FlattenDepth<O, N, [...U, F], C>
      : FlattenDepth<O, N, [...U, ...FlattenDepth<F, N, [], [...C, 1]>], C>
    : FlattenDepth<O, N, [...U, F], C>
  : U
