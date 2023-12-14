const groupObjectsByKey = require("./src/groupObjectsByKey");
const sumObjectsByKey = require("./src/sumObjectsByKey");

// const array = [
//     {
//       gender: "male",
//       name: "Allaiza",
//     },
//     {
//       department: "product",
//       name: "Allaiza",
//     },
//     {
//       department: "product",
//       name: "Kimberly",
//     },
//     {
//       department: "tech",
//       name: "Kolya",
//     },
//     {
//       department: "tech",
//       name: "Kolya",
//     },
//     {
//       department: "tech",
//       name: "Roni",
//     },
//     {
//       department: "tech",
//       name: "Aubrey",
//     },
//     {
//       department: "marketing",
//       name: "Sarah",
//     },
//     {
//       department: "marketing",
//       name: "Daniel",
//     },
//     {
//       department: "design",
//       name: "Oliver",
//     },
//     {
//       department: "design",
//       name: "Sophie",
//     },
//     {
//       department: "finance",
//       name: "Lucas",
//     },
//     {
//       department: "finance",
//       name: "Ella",
//     },
//     {
//       department: "hr",
//       name: "Liam",
//     },
//     {
//       department: "hr",
//       name: "Ava",
//     },
//     {
//       department: "admin",
//       name: "Brian",
//     },
// ];

// const result = groupObjectsByKey(array, 'gender', 'users');

// console.log(result)

const array = [
  {
    name: "Toothpaste",
    price: 12,
    qty: 1,
  },
  {
    name: "Japanese Soy sauce",
    price: 35,
    qty: 99,
  },
];

// Example usage
const totalPrice = sumObjectsByKey(array, "price");
console.log("Total Price:", totalPrice);

const totalQty = sumObjectsByKey(array, "qty");
console.log("Total Quantity:", totalQty);
