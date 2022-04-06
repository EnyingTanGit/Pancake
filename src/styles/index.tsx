import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
: root {
  --shade-dark: #8364E2;
  --header: #9370d8;
  --header-text: #fff;
  --header-text-hover: #000;
  --header-logo-text: #203b54;
  --body-bg-color: #d1d1d1;
  --notification-bg-color: #000;
  
  body {
    padding: 0;
    margin: 0;
    color: black;
  };

}

`;

export default GlobalStyles;
