let cal: (a2: number, b2: number, z: string) => number;

cal = (a2: number, b2: number, z: string) => {
  if (z === 'add') {
    return a2 + b2
  } else {
    return a2 - b2
  }
}

console.log(cal(5, 3, 'add')) 

let userDetails: (id:number|string, UserInfo:{name:string, age:number}) => void;

userDetails = (id: number | string, UserInfo: { name: string; age: number }) => {
  console.log(`User ID: ${id}, Name: ${UserInfo.name}, Age: ${UserInfo.age}`);
}
userDetails(1, { name: 'Alice', age: 30 });