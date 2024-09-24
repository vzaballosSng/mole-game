import { LitElement, html } from 'lit';
import { customButtonStyles } from './custom-button-styles.js';

export class CustomButton extends LitElement {
	static get styles() {
		return [customButtonStyles];
	}
	/**
	 * @property {String} size - Button's size.
	 */
	static get properties() {
		return {
      size: { type: String },
    };
	}

	constructor() {
		super();
    this._buttonClass = {
      'large': 'large',
      'show': 'short'
    }
    this.size = 'short'
	}

	render() {
		return html`
			<button
				class="${this.size}"
				@click="${this._onClick}"
			>
			  <slot></slot>
			</button>
		`;
	}
}

window.customElements.define('custom-button', CustomButton);
