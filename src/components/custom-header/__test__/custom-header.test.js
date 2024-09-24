import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../utils/cleanedLit.js';
import '../custom-header.js';

expect.extend(toHaveNoViolations);

describe('custom-header', () => {
	it('matches the snapshot', async () => {
		const el = await fixture(
			html`<custom-header></custom-header>
			>`
		);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});

	it('accessibility test', async () => {
		const el = await fixture(html`<custom-header></custom-header>`);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
