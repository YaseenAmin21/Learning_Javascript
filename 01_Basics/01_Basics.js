const accountId = 144553;
let accountEmail = "yaseen@google.com";
var accountPassword = "12345";
accountCity = "Karachi";

// accountId = 2; not allowed

accountEmail = "amin@gmail.com";
accountPassword = "21212121";
accountCity = "Lahore";
let accountState;

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/* 
Prefer not to use var
Becuase of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
