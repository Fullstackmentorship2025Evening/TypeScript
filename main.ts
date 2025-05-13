// console.log("Hello World TypeScript");

let myName:string = "Mohamed Abdi"
console.log(myName);

let price:number = 1.5;
console.log(price)

const button = document.querySelector('button') as HTMLButtonElement
const p = document.querySelector('p') as HTMLParagraphElement

button.addEventListener("click",()=>{
      
let a:number = 5;
let b:number = 10
let result:number = a+b;
      p.innerHTML = `${a} + ${b} = ${result}`
})