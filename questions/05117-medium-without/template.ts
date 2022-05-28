type Without<T, U, R extends any[] = []> = T extends [infer F, ...infer O]
  ? U extends [infer FU, ...infer FO]
    ? Without<Without<T, FU>, FO>
    : F extends U
      ? Without<O, U, R>
      : Without<O, U, [...R, F]>
  : R
