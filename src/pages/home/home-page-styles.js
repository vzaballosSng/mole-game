import { css } from 'lit';

export const homePageStyle = css`
	p {
		color: black;
	}

  input {
    background-color: transparent;
    padding: .625rem 0;
    border: none;
    border-bottom: 2px solid black;
    font-size: 1rem;
    outline: none;
    color: white;
  }

  input::placeholder {
   color: white;
  }

  .home-section {
    align-items: center;
    background: linear-gradient(to bottom, #7ec850, #4caf50, #388e3c);
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
