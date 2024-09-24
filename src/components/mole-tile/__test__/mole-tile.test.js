import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../utils/cleanedLit.js';
import '../mole-tile.js';

expect.extend(toHaveNoViolations);

describe('mole-tile', () => {
	it('mole-tile matches the snapshot', async () => {
		const el = await fixture(
			html`<mole-tile></mole-tile>`
		);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});

	it('accessibility test', async () => {
		const el = await fixture(html`<mole-tile icon="person"></mole-tile>`);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
