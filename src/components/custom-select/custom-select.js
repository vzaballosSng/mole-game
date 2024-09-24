import { LitElement, html } from 'lit';
import { customSelectStyles } from './custom-select-styles.js';

export class CustomSelect extends LitElement {
	static get properties() {
		return {
			listOptions: { type: Array },
      labelName: { type: String, attribute: 'label-name' }
		};
	}

	static get styles() {
		return [customSelectStyles];
	}

	constructor() {
		super();
    this.labelName = '';
    this.listOptions = [];
	}

  get _renderOptions() {
    return this.listOptions.map(option => {
      return html` <option value="${option}">${option}</option>`;
    })
  }

  _sendSelectValue(e) {
    this.dispatchEvent(new CustomEvent('change-select-value', {
      detail: {
        value: e.target.value,
      },
      bubbles: true,
			composed: true,
    }));
  }


	render() {
		return html`
      <label for="level">${this.labelName}</label>
			<select
        aria-labelledby="level"
        aria-label="level"
        id="level"
        name="select-level"
        @change=${this._sendSelectValue}
      >
        ${this._renderOptions}
			</select>
		`;
	}
}

window.customElements.define('custom-select', CustomSelect);
