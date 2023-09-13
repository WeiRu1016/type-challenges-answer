// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]

type CurryFn<F> = F extends (...args: infer P) => infer R ? P extends [infer A, ...infer B] ? (a: A) => B['length'] extends 0 ? R : CurryFn<(...args: B) => R> : () => R : never;

// ============= Your Code Here =============
declare function Currying<T>(fn: T): CurryFn<T>;
