type Subsequence<T extends any[], R = []> = T extends [infer F, ...infer O]
  ? Subsequence<O, [F, ...Subsequence<O>] | R>
  : R
