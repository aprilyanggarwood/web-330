/*
  Title: Assignment 3.2 - Restaurant APP
  Author: April Yang
  Date: 06/10/2022
  Description: Creates Bill class and export module.
*/

// Creating Bill class with four parameters with menu items.
export class Bill {
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    // Each parameter is set to an empty array.
    // Each array will be filled with the value of each menu item.
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  // _beverages = [];
  // _appetizers = [];
  // _mainCourses = [];
  // _desserts = [];

  // creates addBeverage, addAppetizer, addMainCourse, and addDessert functions and push the each menu item object to their relative array.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // Creates getTotal function and uses forEach() function to loop over each menu item array, and calculate the total using the price field of each menu item object.
  getTotal() {
    let total = 0;

    this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });
    this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });
    this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });
    this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    console.log(`The total is ${total}`);
    // Return total up to the 2nd decimal.
    return total.toFixed(2);
  }
}
