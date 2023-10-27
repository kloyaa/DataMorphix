const groupObjectsByKey = require("./src/groupObjectsByKey")


const array = [
    {
      gender: "male",
      name: "Allaiza",
    },
    {
      department: "product",
      name: "Allaiza",
    },
    {
      department: "product",
      name: "Kimberly",
    },
    {
      department: "tech",
      name: "Kolya",
    },
    {
      department: "tech",
      name: "Kolya",
    },
    {
      department: "tech",
      name: "Roni",
    },
    {
      department: "tech",
      name: "Aubrey",
    },
    {
      department: "marketing",
      name: "Sarah",
    },
    {
      department: "marketing",
      name: "Daniel",
    },
    {
      department: "design",
      name: "Oliver",
    },
    {
      department: "design",
      name: "Sophie",
    },
    {
      department: "finance",
      name: "Lucas",
    },
    {
      department: "finance",
      name: "Ella",
    },
    {
      department: "hr",
      name: "Liam",
    },
    {
      department: "hr",
      name: "Ava",
    },
    {
      department: "admin",
      name: "Brian",
    },
  ];
  

const result = groupObjectsByKey(array, 'gender', 'users');

console.log(result)