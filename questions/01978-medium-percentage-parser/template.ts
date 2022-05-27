type PercentageParser<
  A extends string,
  S extends string = '',
  N extends string = '',
  U extends string = '',
> = A extends `${infer F}${infer O}`
  ? F extends '+' | '-'
    ? PercentageParser<O, F, '', ''>
    : F extends '%'
      ? PercentageParser<O, S, N, F>
      : PercentageParser<O, S, `${N}${F}`, U>
  : [S, N, U]
