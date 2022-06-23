/*
  Title: cart-component.js
  Author: April Yang
  Date: 06/23/2022
  Description: 
*/

class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTM = `<i id="cartIcon" class="fa-solid fa-cart-shopping"></i> (<span id='cart-count'></span>)
    `;
  }
}

customElements.define("cart-component", CartComponent);
