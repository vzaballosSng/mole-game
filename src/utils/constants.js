const LEVELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export const TIME_LEVEL = {
  [LEVELS.low]: 1000,
  [LEVELS.medium]: 750,
  [LEVELS.high]: 500,
};

export const POINTS_LEVEL = {
  [LEVELS.low]: 10,
  [LEVELS.medium]: 20,
  [LEVELS.high]: 30,
};

export const TILES_NUMBER = 9;
export const MOLES_NUMBER = 2;

export const STATES = {
  stop: 'STOP',
  play: 'PLAY',
};

export const MOLE_STATUS = {
  alive: 'alive',
  dead: 'dead',
};

export const LEVELS_LIST = Object.values(LEVELS);
