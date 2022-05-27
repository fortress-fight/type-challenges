type Shift<T> = T extends [infer _F, ...infer O] ? O : never
