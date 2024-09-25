import { css } from 'lit';

export const customHeaderStyles = css`
	:host {
    display: block;
    box-sizing: border-box;
    background-color: var(--wood-texture-color);
    padding: 1.25rem;
    width: 100%;
	}

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;
