type PickByTypeFilter<
  T extends Record<string, any>,
  P extends keyof T,
  U,
> = T[P] extends U ? P : never
type PickByType<T, U> = {
  [P in keyof T as PickByTypeFilter<T, P, U>]: T[P]
}
