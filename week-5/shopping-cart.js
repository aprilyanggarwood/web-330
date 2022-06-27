/*
  Title: shopping-cart.js
  Author: April Yang
  Date: 06/23/2022
  Description: Using generators to iterate object
*/

export class ShoppingCart {
  constructor() {
    this._products = [];
  }

  count() {
    return this._products.length;
  }

  add(product) {
    this._products.push(product);
  }

  // iterator function that will yield the results of the product array

  [Symbol.iterator] = function* () {
    for (let product of _products) {
      yield product;
    }
  };
}
