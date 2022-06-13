/*
  Title: Assignment 3.2 - Restaurant APP
  Author: April Yang
  Date: 06/10/2022
  Description: Creates Dessert class and export module.
*/

// Import product class from product.js
import { Product } from "./product.js";
// Create Dessert class and export module.
export class Dessert extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
