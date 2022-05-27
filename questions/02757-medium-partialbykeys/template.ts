type PartialByKeysMerge<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = PartialByKeysMerge<
  {
    [P in keyof T & K]?: T[P]
  } & {
    [P in Exclude<keyof T, K>]: T[P]
  }
>
