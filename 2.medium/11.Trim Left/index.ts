type trim = ' ' | '\n' | '\t'

type TrimLeft<T extends string> = T extends `${trim}${infer R}` ? TrimLeft<R> : T;

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
