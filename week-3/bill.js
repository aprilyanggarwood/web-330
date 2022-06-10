export class Bill {
  _beverages = [];
  _appetizers = [];
  _mainCourses = [];
  _desserts = [];

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

  addDessert(dessert) {
    this._desserts.push(dessert);
  }

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
    return total.toFixed(2);
  }
}
