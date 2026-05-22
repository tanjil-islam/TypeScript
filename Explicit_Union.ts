let a : number;
a = 5
let b: string
b = 'Tanjil'

let c:string | number
c = 5
c = 'Tanjil'

//array

let d: (string | number)[] = []
d.push('Tanjil')
d.push(5,'Islam')
console.log(d) 

//object 

let e :{
    name: string,
    age: number,
    isMarried: boolean
}

e={
    name: 'Tanjil',
    age: 25,
    isMarried: false
}
console.log(e)