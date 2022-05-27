type TupleToNestedObject<T, U> = T extends [infer F, ...infer O]
  ? {
      [P in F & string]: TupleToNestedObject<O, U>
    }
  : U
