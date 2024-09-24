import { LitElement, html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { Routes } from '@lit-labs/router';
import './pages/game/game-page.js';
import './pages/home/home-page.js';

const appRoutes = [
	{ 
		path: '/home',
		render: () => html` <home-page></home-page>` },
	{
		path: '/game*',
		render: () => {
			const urlParams = new URLSearchParams(window.location.search);
			const playerName = urlParams.get('playerName');
			return html`<game-page player-name=${ifDefined(playerName)}></game-page>`;
		},
	},
	{ 
		path: '/*',
		render: () => html`<home-page></home-page>`
  },
];

export class RouterElement extends LitElement {
	_navegateUrl(url) {
		const pathName = new URL(url).pathname;
		this._routes.goto(pathName);
		history.pushState({}, 'URL Rewrite by router: ', pathName);
	}

	_navegatePath(path) {
		this._routes.goto(path);
		history.pushState({}, 'URL Rewrite by router: ', path);
	}

	constructor() {
		super();
		this._routes = new Routes(this, appRoutes);
		this._routes.goto(window.location.pathname);

		this.addEventListener('router-navigate', (e) => {
			this._navegatePath(e.detail);
		});
	}

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('popstate', async () => {
			await this._routes.goto(window.location.pathname);
		});
	}

	render() {
		return html` <main>${this._routes.outlet()}</main> `;
	}
}

customElements.define('router-element', RouterElement);
