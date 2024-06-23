let a = ''
let b = !!a
console.log(b)

//null coalesce operator prend le premier non null
const foo = undefined ?? null ?? 'une chaine' ?? 'toto'
console.log(foo)