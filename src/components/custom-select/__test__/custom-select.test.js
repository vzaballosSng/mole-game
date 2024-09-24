import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../utils/cleanedLit.js';
import '../custom-select.js';

expect.extend(toHaveNoViolations);

describe('custom-select', () => {
	it('custom-select matches the snapshot', async () => {
		const el = await fixture(
			html`<custom-select></custom-select>
			>`
		);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});
	
	it('accessibility test', async () => {
		const el = await fixture(html`<custom-select></custom-select>`);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
