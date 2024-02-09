/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];
const product1 = {name: "Cherry",
                  price: 6.00,
                  quantity: 0,
                  productId: 1,
                  image: "images/cherry.jpg"
                  };
const product2 = {name: "Orange",
                  price: 2.00,
                  quantity: 0,
                  productId: 2,
                  image: "images/orange.jpg"
                 };
const product3 = {name: "Strawberry",
                  price: 4.00,
                  quantity: 0,
                  productId: 3,
                  image: "images/strawberry.jpg"
                 };
 products.push(product1, product2, product3);
 
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
let cart = [];

function find(productId){
  if (productId === 1){
    return products[0];
  }
  if (productId === 2){
    return products[1];
  }
  if (productId === 3){
    return products[2];
  }
}

function addProductToCart(productId){
  find(productId).quantity += 1
    if (find(productId).quantity === 1){
      cart.push(find(productId));
    }
  }

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function increaseQuantity(productId){
  find(productId).quantity += 1;
  }

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity

*/
function deleteItem(productId){
  if (productId === 1){
    let index = cart.indexOf(product1);
    cart.splice(index, 1)
  }
  if (productId === 2){
    let index = cart.indexOf(product2);
    cart.splice(index, 1)
  }
  if (productId === 3){
    let index = cart.indexOf(product3);
    cart.splice(index, 1)
  }
}

function decreaseQuantity(productId){
  find(productId).quantity -= 1;
    if (find(productId).quantity === 0){
      deleteItem(productId);
    }
  }
  

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function removeProductFromCart(productId){
  find(productId).quantity = 0;
  deleteItem(productId);
  }


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function cartTotal(){
  let total = 0;
  for (let x = 0; x < cart.length; x++){
    let item = cart[x];
    total += item.quantity * item.price;  
  }
  return total
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function emptyCart(){
  cart.splice(0, cart.length);
}
/* Create a function called emptyCart that empties the products from the cart */

var totalPaid = 0

function pay(amount){
  let change = (totalPaid + amount) - cartTotal();
  if (change >= 0){ 
    return change
  }
  if (change < 0){
    totalPaid += amount;
    return change
  }
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
}
  
/* Uncomment the following line if completing the currency converter bonus */
  // currency
