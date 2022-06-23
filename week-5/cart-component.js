/*
  Title: cart-component.js
  Author: April Yang
  Date: 06/23/2022
  Description: 
*/

export class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTM = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id='cart-count'></span>)
    `;
  }
}

customElements.define("cart-component", CartComponent);
