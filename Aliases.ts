type stringOrNum = string | number
type userType = { name: string; age: number }

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `User id is ${id} and name is ${user.name} and age is ${user.age}`,
  )
}

const sayHello = (user: userType) => {
  console.log(`Hello ${user.name}, you are ${user.age} years old`)
}

sayHello({ name: 'Tanjil', age: 26 })
userDetails(5, { name: 'Tanjil', age: 26 })