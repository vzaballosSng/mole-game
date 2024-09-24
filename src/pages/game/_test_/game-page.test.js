
import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { cleanedLitElements } from '../../../utils/cleanedLit.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import '../game-page.js';

describe('game-page', () => {
	it('game-page matches the snapshot', async () => {
		const el = await fixture(
			html`<game-page player-name"test"></game-page>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		const dataCleaned = cleanedLitElements(data);
		expect(dataCleaned).toMatchSnapshot();
	});
});
