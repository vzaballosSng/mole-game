import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../utils/cleanedLit.js';
import '../notification-message.js';

expect.extend(toHaveNoViolations);

describe('notification-message', () => {
	it('notification-message matches the snapshot', async () => {
		const el = await fixture(
			html`<notification-message></notification-message>`
		);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});

	it('accessibility test', async () => {
		const el = await fixture(html`<notification-message></notification-message>`);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
