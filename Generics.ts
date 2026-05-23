const addId = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100)
  return { ...obj, id }
}

let user = addId({
  name: 'Sakib',
  age: 35,
  country: 'Bangladesh',
})

addId(user)
console.log(user)

interface APIResponse<T> {
  status: number
  type: string
  data: T
}

const response1: APIResponse<object> = {
  status: 200,
  type: 'success',
  data: {
    name: 'Sakib',
    age: 35,
    country: 'Bangladesh',
  },
}

console.log(response1)
