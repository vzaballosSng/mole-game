import { css } from 'lit';

export const gamePageStyles = css`
  :host {
    display: block;
    background: linear-gradient(to bottom, #7ec850, #4caf50, #388e3c);
    height: 100vh;
  }

  .button-container {
    margin-top: 1rem;
    text-align: center;
  }

	.mole-container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
  }

	.points {
		color: white;
    font-size: 1.5rem;
    text-align: right;
    padding-right: 1.25rem;
	}
`;
