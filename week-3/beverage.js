/*
  Title: Assignment 3.2 - Restaurant APP
  Author: April Yang
  Date: 06/10/2022
  Description: Creates Beverage class and export module.
*/

// Import product class from product.js
import { Product } from "./product";

// Create Beverage class and export module.
export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
