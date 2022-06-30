/*
  Title: required-field.js
  Author: April Yang
  Date: 06/30/2022
  Description: Creates RequiredField class and export module.
*/

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // If user input value is a valid string, will return true, else false and display a message.
  validate() {
    if (this.field) {
      return true;
    }
    return false;
  }

  getMessage() {
    return `${this.name} is a required field.`;
  }
}
