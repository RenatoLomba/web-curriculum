import { createGlobalStyle } from 'styled-components';

const MyGlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.bg};
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.font};
    background-image: url('images/wallpaper.jpg');
    background-size: cover;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export { MyGlobalStyle };
