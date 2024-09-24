import { css } from 'lit';

export const moleStyles = css`
	.tile {
		width: 6.25rem;
		height: 6.25rem;
		border: 1px solid black;
    background-color: #000000c9;
	}

	.bg-mole {
    width: 6.25rem;
		height: 6.25rem;
		background-image: url('public/molebg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
	}

  .player-name {
    color: white;
    line-height: 2rem;
  }

  .tile p {
    color: black;
  }
`;
