/*
  Title: finance-calculator.js
  Author: April Yang
  Date: 06/30/2022
  Description: Creates FinanceCalculator class and export module.
*/

export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;
  // For calculate future value, set up three parameters for static function
  static calculateFutureValue(monthlyPayment, rate, years) {
    const months = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * months;
    let futureValue = presentValue * Math.pow(interestRate, months);
    return futureValue.toFixed(2);
  }

  // Set up currency format to US currency with the 2nd decimal place.
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormatter.format(field);
  }
}
