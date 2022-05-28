type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  S extends any[] = [],
  R extends any[] = [],
> = T extends [infer F, ...infer O]
  ? S['length'] extends Start
    ? R['length'] extends End
      ? [...R, F, ...O]
      : Fill<O, N, Start, End, S, [...R, N]>
    : Fill<O, N, Start, End, [...S, F], [...R, F]>
  : R
