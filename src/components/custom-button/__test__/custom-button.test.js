import { html, fixture } from '@open-wc/testing';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import { expect } from '@jest/globals';
import '../custom-button.js';

describe('custom-button', () => {
	it('matches the snapshot', async () => {
		const el = await fixture(html`<custom-button></custom-button>`);
		const data = getAllElementsAndShadowRoots(el, '*');
		expect(data).toMatchSnapshot();
	});

	it('matches the snapshot slot', async () => {
		const el = await fixture(
			html`<custom-button></custom-button>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		expect(data).toMatchSnapshot();
	});
});
