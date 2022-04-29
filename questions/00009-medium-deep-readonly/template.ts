type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? T[P]
    : DeepReadonly<T[P]>
}
