import { LitElement, html } from 'lit';
import { moleStyles } from './mole-tile-styles.js';

export class MoleTile extends LitElement {
  static get properties() {
    return {
      showMole: { type: Boolean, attribute: 'show-mole' },
      position: { type: Number },
    };
  }

  static get styles() {
    return [moleStyles];
  }

  constructor() {
    super();
    this.showMole = false;
  }

  render() {
    return html`
    <div class="tile">
      ${this.showMole ?  html`<div class="bg-mole"></div>` : ''}
    </div>`;
  }
}

window.customElements.define('mole-tile', MoleTile);
