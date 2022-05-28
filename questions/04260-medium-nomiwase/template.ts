type Combinations<T extends string, Y extends string> =
  | T
  | Y
  | `${T}${Y}`
  | `${Y}${T}`

type CombinationUnion<S extends string, Y extends string = S> = S extends Y
  ? Combinations<S, CombinationUnion<Exclude<Y, S>>>
  : never

type AllCombinationsStringToUnion<
  S,
  R extends string = '',
> = S extends `${infer F}${infer O}`
  ? AllCombinationsStringToUnion<O, R | F>
  : R

type AllCombinations<S extends string> =
  | ''
  | CombinationUnion<AllCombinationsStringToUnion<S>>
