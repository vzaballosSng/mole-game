import { css } from 'lit';

export const gamePageStyles = css`
  :host {
    display: block;
    background: var(--main-bg);
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
		color: var(--white-color);
    font-size: 1.5rem;
    text-align: right;
    padding-right: 1.25rem;
	}
`;
