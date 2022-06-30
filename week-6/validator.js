/*
  Title: validator.js
  Author: April Yang
  Date: 06/30/2022
  Description: Creates Validator class and export module.
*/

// Import RequiredField, FloatField,FloatMinField,and FloatMaxField classes.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
  // Create empty arrays
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Creates functions for pushing imported objects to arrays.
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // Validates each user input value, if failed will returns an error message.
  validate() {
    for (let validator of this.validators) {
      if (!validator.validate()) {
        this.messages.push(validator.getMessage());
        return false;
      }
    }
    return true;
  }
}
