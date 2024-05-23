import { LitElement, css, html} from 'lit-element';
import {getInfo} from "./getData";

export class MyElement extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
    }
  }

  constructor() {
    super();
    this.data = [];
  }
  async loadProducts() {
    const datas = await getInfo();
    console.log(datas);
    this.data=datas;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.loadProducts();
  }
  async 
  static get styles() {
    return css`
    `
  }

  render() {
    return html`
      <div class="container">
        ${this.data}
      </div> 
    `;
  }
}
customElements.define('my-element', MyElement)