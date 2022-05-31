type LastIndexOf<
  T,
  U,
  L extends any[] = [],
  R extends any[] | -1 = -1,
> = T extends [infer F, ...infer O]
  ? Equal<F, U> extends true
    ? R extends any[]
      ? LastIndexOf<O, U, [], [...L, ...R, 1]>
      : LastIndexOf<O, U, [], [...L]>
    : LastIndexOf<O, U, [...L, 1], R>
  : R extends any[]
    ? R['length']
    : R
