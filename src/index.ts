console.log("Hello World")
var age: number = 20
if (age < 50) age += 10

const enum Size {
  Small = 1,
  Medium,
  Large,
}
const mySize: Size = Size.Medium
console.log(mySize)

function calulateTax(income: number): number {
  if (income < 30_000) return income * 1.2
  return income * 1.3
}

//alias
type Employee = {
  readonly id: number
  name: string
  retire: (date: Date) => void
}
let employee: Employee = {
  id: 1,
  name: "Razia",
  retire: (date: Date) => {
    console.log(date)
  },
}

console.log(employee.retire)

//union

function showHeight(height: number | string) {
  //narrowing
  if (typeof height === "number") {
    return height * 2.2
  } else {
    return parseInt(height) * 2
  }
}

showHeight("20")
showHeight(11)

//intersection

type Draggable = {
  drag: () => void
}
type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}
//Literal Types (exact, specific)
type Quantity = 50 | 100

let quantity: Quantity = 100

type Metric = "inch" | "cm"
type Customer = {
  birthday: Date
}

//optional property access operator
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(2)

console.log(customer?.birthday)
