import { css } from 'lit';

export const homePageStyle = css`
	p {
		color: var(--black-color);
	}

  input {
    background-color: transparent;
    padding: .625rem 0;
    border: none;
    border-bottom: 2px solid black;
    font-size: 1rem;
    outline: none;
    color: var(--white-color);
  }

  input::placeholder {
   color: var(--white-color);;
  }

  .home-section {
    align-items: center;
    background: var(--main-bg);
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		font-size: 1rem;
		gap: 5rem;
	}

  .input-container {
    display: flex;
    flex-direction: column;
  }

  .msg-error {
    margin-top: .3125rem;
  }
`;
