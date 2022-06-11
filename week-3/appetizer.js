/*
  Title: Assignment 3.2 - Restaurant APP
  Author: April Yang
  Date: 06/10/2022
  Description: Creates Appetizer class and export module.
*/

// Import product class from product.js
import { Product } from "./product";

// Create Appetizer class and export module
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
