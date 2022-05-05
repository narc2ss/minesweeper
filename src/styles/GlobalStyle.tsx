import { css, Global } from "@emotion/react";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #999;
    border: none;
    color: white;
    border-radius: 0.5rem;
  }
  button.transparent {
    background-color: inherit;
    border: 1px solid #999;
    color: #000;
    border-radius: 0.5rem;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
