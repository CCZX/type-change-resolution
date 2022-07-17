type Replace<S extends string, FROM extends string, TO extends string> = S extends `${infer START}${FROM}${infer END}` ? `${START}${TO}${END}` : never
