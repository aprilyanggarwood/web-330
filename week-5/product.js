/*
  Title: product.js
  Author: April Yang
  Date: 06/23/2022
  Description: Creates Product class and export module.
*/

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
