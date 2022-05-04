import { css, Global } from "@emotion/react";

const styles = css`
  * {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
