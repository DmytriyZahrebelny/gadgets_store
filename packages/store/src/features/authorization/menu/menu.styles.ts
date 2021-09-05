import { css } from '@emotion/css';

export const menuStyles = css`
  display: flex;
  box-shadow: 0 8px 32px rgb(39 59 97 / 8%);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 15px 0;
    font-size: large;
    font-weight: bold;
    color: #273b61;
  }
`;

export const activeLinkStyle = css`
  background-color: #d5edfe;
`;
