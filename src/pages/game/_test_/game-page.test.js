import { html, fixture } from '@open-wc/testing';
import { expect } from '@jest/globals';
import { cleanedLitElements } from '../../../utils/cleanedLit.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import { MoleManager } from '../../../managers/mole-manager/mole-manager.js';
import '../game-page.js';

describe('game-page', () => {
	it('game-page matches the snapshot', async () => {
		const el = await fixture(html`<game-page player-name="test"></game-page>`);
		const data = getAllElementsAndShadowRoots(el, '*');
		const dataCleaned = cleanedLitElements(data);
		expect(dataCleaned).toMatchSnapshot();
	});
});

describe('MoleManager', () => {
	const moleManager = new MoleManager();
	describe('getPointsByLevel', () => {
		it('should return correct points for a given level', () => {
			expect(moleManager.getPointsByLevel('Low')).toBe(10);
			expect(moleManager.getPointsByLevel('Medium')).toBe(20);
			expect(moleManager.getPointsByLevel('High')).toBe(30);
		});

		it('should return undefined for an unknown level', () => {
			expect(moleManager.getPointsByLevel('unknown')).toBeUndefined();
		});
	});

	describe('getRandomTile', () => {
		it('should return the correct number of moles to show', () => {
			const numberOfTiles = 9;
			const numberOfMoles = 3;
			const randomTiles = moleManager.getRandomTile(
				numberOfTiles,
				numberOfMoles
			);

			expect(randomTiles.length).toBe(numberOfMoles);
		});

		it('should not include excluded numbers', () => {
			const numberOfTiles = 9;
			const numberOfMoles = 3;
			const excludeNumber = [1, 2, 3];
			const randomTiles = moleManager.getRandomTile(
				numberOfTiles,
				numberOfMoles,
				excludeNumber
			);

			expect(randomTiles.length).toBe(numberOfMoles);
			randomTiles.forEach((tile) => {
				expect(excludeNumber).not.toContain(tile);
			});
		});

		it('should return an empty array if numberOfMoles is 0', () => {
			const numberOfTiles = 9;
			const numberOfMoles = 0;
			const randomTiles = moleManager.getRandomTile(
				numberOfTiles,
				numberOfMoles
			);

			expect(randomTiles.length).toBe(0);
		});

		it('should return 0 points when restart is required', () => {
			const points = moleManager.restartPoints();
			expect(points).toBe(0);
		});
	});
});
