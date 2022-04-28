type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}
const myTuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
let test: TupleToObject<typeof myTuple>
