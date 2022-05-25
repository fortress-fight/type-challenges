type Chainable<T extends Object = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ): Chainable<T & { [P in K]: V }>
  get(): { [P in keyof T]: T[P] }
}
