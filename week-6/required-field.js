export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

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
