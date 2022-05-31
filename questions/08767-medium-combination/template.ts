type UnionCombination<T extends string, Y extends string = T> = T extends Y
  ? T | `${T} ${UnionCombination<Exclude<Y, T>>}`
  : never

type ArrToUnion<T, R extends string | never = never> = T extends [
  infer F,
  ...infer O,
]
  ? ArrToUnion<O, R | (F & string)>
  : R

type Combination<T extends any[]> = UnionCombination<ArrToUnion<T>>
