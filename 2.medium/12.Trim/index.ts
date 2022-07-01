export type trim = ' ' | '\n' | '\t'

type Trim<T extends string> =
T extends `${trim}${infer R}` ? Trim<R> : (T extends `${infer L}${trim}` ? Trim<L> : T);

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

// 第二种方法
type TrimLeft<S extends string> = S extends `${trim}${infer R}` ? TrimLeft<R> : S
type TrimRight<S extends string> = S extends `${infer R}${trim}` ? TrimRight<R> : S
type Trim2<S extends string> = TrimLeft<TrimRight<S>>
