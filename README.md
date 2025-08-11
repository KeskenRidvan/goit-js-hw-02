# GoIT JavaScript Homework - Module 2 🚀

This document outlines the tasks for Module 2 of your GoIT JavaScript homework.

## Homework Assignment №2 📚

- Create a new GitHub repository named `goit-js-hw-02` and clone it to your computer.
- In the `goit-js-hw-02` folder, create the project structure as shown in the diagram below:

```text
goit-js-hw-02/
├── index.html
└── js/
  ├── task-1.js
  ├── task-2.js
  ├── task-3.js
  └── task-4.js
```

#### :bangbang: Attention!

- File and folder names, as well as the nesting structure, must match the specified diagram. Otherwise, the work will not be accepted. ❌
- Read each task and complete it in the corresponding file. 📝
- Ensure that the code is formatted with `Prettier` and that the live page does not show any errors or warnings in the console. ✨
- Submit your homework for review. ✅

**Submission Format:** The assignment must include links to the source files and to the live page on `GitHub Pages`.🔗

---

## Task 1. Droid Orders

#### :bangbang: Complete this task in the `task-1.js` file.

The sales station for repaired droids is ready, and you need to write the software for the sales department. Define the function `makeTransaction(quantity, pricePerDroid, customerCredits)` that generates a message about the purchase of repaired droids. 🤖
The function is defined to take three parameters when called:

- `quantity` - The number of droids ordered.
- `pricePerDroid` - The price of one droid. 💰
- `customerCredits` - The total amount in the customer's account. 💳

**Complete the function as follows:**

- Define a variable to store the total cost of the order (the total value of all ordered droids) and assign an expression to calculate this amount.
- Check if the customer can pay for the order:
- If the amount to be paid is greater than the credits in the customer's account, the function should return the string `"Insufficient funds!"`. 😔
- Otherwise, the function should return the string `"You ordered <quantity> droids worth <totalPrice> credits!"`, where `<quantity>` is the number of droids ordered, and `<totalPrice>` is their total value. ✅

Take the following code and paste it after defining your function to check its correctness. The results will be printed to the console.

```js
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
```

Leave this code for your mentor to check. 🧑‍🏫
Mentor's review criteria:

- A function `makeTransaction(quantity, pricePerDroid, customerCredits)` is defined.
- The call `makeTransaction(5, 3000, 23000)` returns `"You ordered 5 droids worth 15000 credits!"`.
- The call `makeTransaction(3, 1000, 15000)` returns `"You ordered 3 droids worth 3000 credits!"`.
- The call `makeTransaction(10, 5000, 8000)` returns `"Insufficient funds!"`.
- The call `makeTransaction(8, 2000, 10000)` returns `"Insufficient funds!"`.
- The call `makeTransaction(10, 500, 5000)` returns `"You ordered 10 droids worth 5000 credits!"`.

---

## Task 2. Message Formatting

#### :bangbang: Complete this task in the `task-2.js` file.

Declare a function `formatMessage(message, maxLength)` that takes a string (`message` parameter) and checks its length against the maximum length (`maxLength` parameter). ✍️

Complete the function code as follows:

- If the string length is equal to or shorter than `maxLength`, the function returns the original string without changes.
- If the length exceeds `maxLength`, the function truncates the string to `maxLength` characters, adds an ellipsis `"..."` to the end, and returns the shortened version. ✂️
- Paste the following code after defining your function to check its correctness. The results of the operation will be printed to the console.

```js
// "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 16));

// "Curabitur ligula sapien"
console.log(formatMessage('Curabitur ligula sapien', 23));

// "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 20));

// "Vestibulum facilisis purus nec"
console.log(formatMessage('Vestibulum facilisis purus nec', 30));

// "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));

// "Nunc sed turpis a felis in nunc fringilla"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
```

Leave this code for your mentor to check. 🧑‍🏫

Mentor's review criteria:

- The function `formatMessage(message, maxLength)` is defined.
- The function call formatMessage("Curabitur ligula sapien", 16) returns `"Curabitur ligula..."`.
- The function call `formatMessage("Curabitur ligula sapien", 23)` returns `"Curabitur ligula sapien"`.
- The function call `formatMessage("Vestibulum facilisis purus nec", 20)` returns `"Vestibulum facilisis..."`.
- The function call `formatMessage("Vestibulum facilisis purus nec", 30)` returns `"Vestibulum facilisis purus nec"`.
- The function call `formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)` returns `"Nunc sed turpis..."`.
- The function call `formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)` returns `"Nunc sed turpis a felis in nunc fringilla"`.

---

## Task 3. Spam Check

Complete this task in the `task-3.js` file. 🗑️
The function `checkForSpam(message)` takes a string (`message` parameter), checks for the presence of forbidden words (`spam` and `sale`), and returns the result of the check. The words in the `message` string can be in any case, e.g., `SPAM` or `SALE`.
Complete the function's code as follows:

- If the forbidden word (`spam` or `sale`) is found, the function returns `true`. ✅
- If the forbidden words are not found in the string, the function returns `false`. ❌

Take the following code and paste it after your function's declaration to check if it works correctly. The results of the operation will be printed to the console.

```js
// false
console.log(checkForSpam('Latest technology news'));

// false
console.log(checkForSpam('JavaScript weekly newsletter'));

// true
console.log(checkForSpam('Get best sale offers now!'));

// true
console.log(checkForSpam('Amazing SalE, only tonight!'));

// true
console.log(checkForSpam('Trust me, this is not a spam message'));

// true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));

// true
console.log(checkForSpam('[SPAM] How to earn fast money?'));
```

Leave this code for your mentor to check. 🧑‍🏫

Mentor's review criteria:

- A function `checkForSpam(message)` is defined.
- The call `checkForSpam("Latest technology news")` returns `false`.
- The call `checkForSpam("JavaScript weekly newsletter")` returns `false`.
- The call `checkForSpam("Get best sale offers now!")` returns `true`.
- The call `checkForSpam("Amazing SalE, only tonight!")` returns `true`.
- The call `checkForSpam("Trust me, this is not a spam message")` returns true.
- The call `checkForSpam("Get rid of sPaM emails. Our book in on sale!")` returns `true`.
- The call `checkForSpam("[SPAM] How to earn fast money?")` returns `true`.

---

## Task 4. Shipping Cost

Complete this task in the `task-4.js` file. 🚚
Define the function `getShippingCost(country)` that checks if product delivery to the user's `country` (given as the country parameter) is possible and returns a message about the result. You must use a switch statement. 💡
The returned string format is `"Shipping to <country> will cost <price> credits"`, where `<country>` and `<price>` should be replaced with the corresponding values.

List of countries and delivery costs:

- `China` - 100 credits
- `Chile` - 250 credits
- `Australia` - 170 credits
- `Jamaica` - 120 credits

As can be seen from the list, delivery is not possible everywhere. If the specified country is not on the list, the function should return the string `"Sorry, there is no delivery to your country"`. 😥
You can take the following code and paste it after defining your function to check its correctness. The results will be printed to the console.

```js
// "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Australia'));

// "Sorry, there is no delivery to your country"
console.log(getShippingCost('Germany'));

// "Shipping to China will cost 100 credits"
console.log(getShippingCost('China'));

// "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Chile'));

// "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Jamaica'));

// "Sorry, there is no delivery to your country"
console.log(getShippingCost('Sweden'));
```

Leave this code for your mentor to check. 🧑‍🏫

Mentor's review criteria:

- A function `getShippingCost(country)` is defined.
- A `switch` statement is used inside the function.
- The call `getShippingCost("Australia")` returns `"Shipping to Australia will cost 170 credits"`.
- The call `getShippingCost("Germany")` returns `"Sorry, there is no delivery to your country"`.
- The call `getShippingCost("China")` returns `"Shipping to China will cost 100 credits"`.
- The call `getShippingCost("Chile")` returns `"Shipping to Chile will cost 250 credits"`.
- The call `getShippingCost("Jamaica")` returns `"Shipping to Jamaica will cost 120 credits"`.
- The call `getShippingCost("Sweden")` returns `"Sorry, there is no delivery to your country"`.
