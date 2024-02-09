"use strict";
console.log("Hello World");
var age = 20;
if (age < 50)
    age += 10;
const mySize = 2;
console.log(mySize);
function calulateTax(income) {
    if (income < 30000)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Razia",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee.retire);
function showHeight(height) {
    if (typeof height === "number") {
        return height * 2.2;
    }
    else {
        return parseInt(height) * 2;
    }
}
showHeight("20");
showHeight(11);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(2);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map