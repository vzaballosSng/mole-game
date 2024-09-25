import {
	POINTS_LEVEL,
	LEVELS_LIST,
	MOLE_STATUS,
} from '../../utils/constants.js';

export class MoleManager {
	constructor() {}

	generateTiles(numberOfTiles) {
		const tiles = [];
		for (let i = 0; i < numberOfTiles; i++) {
			tiles.push({
				id: `mole${i}`,
				show: false,
				position: i,
				status: MOLE_STATUS.dead,
			});
		}
		return tiles;
	}

	getPointsByLevel(level) {
		return POINTS_LEVEL[level];
	}

	getRandomTile(numberOfTiles, numberOfMoles, excludeNumber = []) {
		if (!excludeNumber) {
			excludeNumber = [];
		}

		const numbers = [];
		while (numbers.length < numberOfMoles) {
			const num = Math.floor(Math.random() * numberOfTiles);
			if (!numbers.includes(num) && !excludeNumber.includes(num)) {
				numbers.push(num);
			}
		}
		return numbers;
	}

	restartPoints() {
		return 0;
	}

	getLevels() {
		return LEVELS_LIST;
	}
}
