import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
  Expect<Equal<BEM<'btn', [], []>, 'btn'>>,
  Expect<Equal<BEM<'btn', ['price', 'size'], ['small', 'medium', 'large']>, 'btn__price--small' | 'btn__size--small' | 'btn__price--medium' | 'btn__size--medium' | 'btn__price--large' | 'btn__size--large'>>,
]
