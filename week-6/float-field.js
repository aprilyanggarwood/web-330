/*
  Title: float-field.js
  Author: April Yang
  Date: 06/30/2022
  Description: Creates FloatField class and export module.
*/

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    // ParseFloat user input. If input is not a number, will be false and return a message.
    let parseForNaN = parseFloat(this.field);
    return !isNaN(parseForNaN);
  }

  getMessage() {
    return `${this.name} must be a float value, You entered ${this.field}`;
  }
}
