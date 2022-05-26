type IsUnion<T, N = T> = T extends T ? ([N] extends [T] ? false : true) : never
