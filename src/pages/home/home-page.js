import { LitElement, html } from 'lit';
import { homePageStyle } from './home-page-styles.js';
import { commonStyle } from '../../styles/common.js';
import '../../components/custom-button/custom-button.js';

export class HomePage extends LitElement {
	static get styles() {
		return [homePageStyle, commonStyle];
	}

  static get properties() {
    return {
      _playerName: { type: String },
      _showError: { type: Boolean },
    };
  }

	constructor() {
		super();
		this._playerName = '';
		this._showError = false;
	}

	get isValidInputName() {
		return !this._validInputName
			? html`<span class="input-error">Please, insert a valid name</span>`
			: '';
	}

  _handleInput(ev) {
		this.playerName = ev.target.value;
	}

	_handleButton() {
		if (!this.playerName) {
      this._showError = true;
		} else {
      this._showError = false;
      this.dispatchEvent(
        new CustomEvent('router-navigate', {
          detail: '/game?playerName=' + encodeURIComponent(this.playerName),
          bubbles: true,
          composed: true,
        })
      );
    }
	}

	render() {
		return html`
			<section class="home-section">
        <div class="input-container">
          <input placeholder="Insert name" @input="${this._handleInput}" />
          ${this._showError ? html`<span class="msg-error">Please, insert a valid name</span>` : ''}
        </div>
				<custom-button
					class="play-button"
					text="START"
					@click="${this._handleButton}"
				> START
				</custom-button>
      </section>
		`;
	}
}

window.customElements.define(
	'home-page',
	HomePage
);
