/*
  Title: food-model.js
  Author: April Yang
  Date: 06/18/2022
  Description: Creates FoodModel class and export module.
*/

export class FoodModel {
  // Set up three parameters:id, name, and calories in constructor
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
