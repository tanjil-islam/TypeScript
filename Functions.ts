const myFunc = (a: string, b: string, c: string = 'Tanjil') => {
  console.log(c)
  return a + ' -----  ' + b
}

console.log(myFunc('Hello', 'World'))
