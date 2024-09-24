import { LitElement, html } from 'lit';
import { customHeaderStyles } from './custom-header-styles.js';
import '../custom-select/custom-select.js';

export class CustomHeader extends LitElement {
	static get properties() {
		return {
			playerName: { type: String, attribute: 'player-name' },
		};
	}

	static get styles() {
		return [customHeaderStyles];
	}

	constructor() {
		super();
    this.playerName = '';
	}

	render() {
		return html`
		<header class="header">
      <slot name="left-side"></slot>
      <slot name="right-side"></slot>
		</header>
		`;
	}
}

window.customElements.define('custom-header', CustomHeader);
