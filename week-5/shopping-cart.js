/*
  Title: shopping-cart.js
  Author: April Yang
  Date: 06/23/2022
  Description: 
*/

export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product);
  }

  // iterator
  *[Symbol.iterator]() {
    for (let product of products) {
      yield product;
    }
  }

  // *[Symbol.iterator]() {
  //     yield* this.products;
  // }
}
