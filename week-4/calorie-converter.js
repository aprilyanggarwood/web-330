/*
  Title: calorie-converter.js
  Author: April Yang
  Date: 06/18/2022
  Description: Creates CalorieConverter class and export module.
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Created CalorieConverter class.
export class CalorieConverter {
  // Creates an array for each food object with the static property name data.
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  // Use static property find method to return an array of objects if the object.name is included in user input.
  static find(string) {
    return this.data.filter((foodModel) => {
      if (string.includes(foodModel.name.toLowerCase())) {
        return foodModel;
      }
    });
  }
}
