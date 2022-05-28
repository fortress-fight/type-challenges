/**
 * 如果是 "" 将会使用 D 进行替换
 */
type BEM_REPLACE_EMPTY<S extends string, D = never> = S extends '' ? D : S
type BEM_FLAT_M<
  BE extends string,
  M extends any[],
  R extends string = '',
> = M extends [infer F, ...infer O]
  ? BEM_FLAT_M<BE, O, BEM_REPLACE_EMPTY<`${BE}--${F & string}` | R>>
  : BEM_REPLACE_EMPTY<R, BE>

type BEM_FLAT_E<
  B extends string,
  E extends any[],
  R extends string = '',
> = E extends [infer F, ...infer O]
  ? BEM_FLAT_E<B, O, BEM_REPLACE_EMPTY<`${B}__${F & string}` | R>>
  : BEM_REPLACE_EMPTY<R, B>

type BEM<B extends string, E extends string[], M extends string[]> = BEM_FLAT_M<
  BEM_FLAT_E<B, E>,
  M
>
