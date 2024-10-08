import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { cleanedLitElements } from '../../../utils/cleanedLit.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import '../home-page.js';

describe('home-page', () => {
	it('home-page matches the snapshot', async () => {
		const el = await fixture(
			html`<home-page></home-page>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		const dataCleaned = cleanedLitElements(data);
		expect(dataCleaned).toMatchSnapshot();
	});
});
