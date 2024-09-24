import {
  POINTS_LEVEL,
  LEVELS_LIST
} from '../../utils/constants.js';

export class MoleManager {
	constructor() {}

	generateTiles(numberOfTiles) {
		const tiles = [];
		for (let i = 0; i < numberOfTiles; i++) {
			tiles.push({id: `mole${i}`, show: false});
		}
		return tiles;
	}

  getPointsByLevel(level) {
    return POINTS_LEVEL[level];
  }

  getRandomTile(numberOfTiles, excludeNumber = false) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * numberOfTiles);
    } while ((randomNumber === excludeNumber) && excludeNumber);
    return randomNumber.toString();
  }

  restartPoints() {
    return 0;
  }

  getLevels() {
    return LEVELS_LIST;
  }
}
