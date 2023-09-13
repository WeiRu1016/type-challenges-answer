// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]


// ============= Your Code Here =============
type MyEqual<T, U> = T extends U ? U extends T ? true : false : false;

type LastIndexOf<T extends unknown[], U, R extends unknown[] = []> = T extends [infer A, ...infer B] ? MyEqual<A, U> extends true ? LastIndexOf<B, U, [...R, '']> extends -1 ? R['length'] : LastIndexOf<B, U, [...R, '']> : LastIndexOf<B, U, [...R, '']> : -1;
