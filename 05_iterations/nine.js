const myNums = [1, 2, 3];

// const num = myNums.reduce(function (acc, cur) {
//   return (acc += cur);
// }, 0);

// const num = myNums.reduce((acc = 0, cur) => (acc += cur), 0);

// console.log(num);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, cur) => {
  return (acc += cur.price);
}, 0);

console.log(priceToPay);
