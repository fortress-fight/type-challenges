type RequiredByKeysMerge<T> = {
  [P in keyof T]: T[P]
}
type RequiredByKeys<T, K = keyof T> = RequiredByKeysMerge<
  T & Required<Pick<T, K & keyof T>>
>
