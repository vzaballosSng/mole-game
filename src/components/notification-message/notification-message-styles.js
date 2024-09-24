import { css } from 'lit';

export const notificationMessageStyles = css`
	:host {
    background-color: #050605a3;
    bottom: 0;
    color: white;

		height: 1.875rem;
    opacity: 0;
    padding: 1.25rem;
    position: fixed;
    width: 100%;
	}

  :host([show]) {
    opacity: 1;
    transition: opacity 1s ease;
  }

  .message {
    margin: 0;
    line-height: 2rem;
  }
`;
