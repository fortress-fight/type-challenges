type DiffKey<C, C1> = C extends C1 ? never : C

type Diff<O, O1> = {
  [P in DiffKey<keyof (O & O1), keyof (O | O1)>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
      ? O1[P]
      : never
}
