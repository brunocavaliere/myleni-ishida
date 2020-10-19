import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Colors */

    --brandPrimary: #FF9326;
    --brandPrimaryDark: #FF8000;
    --brandPrimaryLightest: #FFF7EE;

    --brandSecondary: #000099;
    --brandSecondaryDark: #000066;
    --brandSecondaryLightest: #F7F7FC;

    --complementaryPrimary: #00AA99;
    --complementaryPrimaryLightest: #E4F5F3;

    --neutralPrimary: #AAAAB7;
    --neutralPrimaryDark: #777788;
    --neutralPrimaryDarkest: #444455;
    --neutralPrimaryLightest: #FFFFFF;

    --alerPrimary: #EC3137;

    /* Typography */

    --headingXLarge: 700 3.5rem/4rem 'Mulish', sans-serif;
    --headingLarge: 600 2.5rem/3rem 'Mulish', sans-serif;
    --headingMedium: 600 2rem/2.5rem 'Mulish', sans-serif;
    --headingSmall: 600 1.75rem/2rem 'Mulish', sans-serif;
    --headingXSmall: 600 1.25rem/1.5rem 'Mulish', sans-serif;

    --textLarge: 400 1.125rem/1.75rem 'Mulish', sans-serif;
    --textMedium: 400 1rem/1.5rem 'Mulish', sans-serif;
    --textSmall: 400 0.875rem/1rem 'Mulish', sans-serif;

    --textButton: 700 1.125rem/1.5rem 'Mulish', sans-serif;
    --textOverline: 600 1rem/1rem 'Mulish', sans-serif;

    /* Typography Responsive */

    --headingLargeResponsive: 700 3rem/3.75rem 'Mulish', sans-serif;
    --headingMediumResponsive: 600 2rem/2.5rem 'Mulish', sans-serif;
    --headingSmallResponsive: 600 1.5rem/2rem 'Mulish', sans-serif;
  }

  html, body, main, div, span, h1, h2, h3, h4, h5, h6, p, a,
  img, ol, ul, li, fieldset, form, label, legend, aside,
  figure, footer, header, nav, section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--neutralPrimaryLightest);
  }

  body, button, input {
    font: var(--textMedium);
    color: var(--neutralPrimaryDarkest);
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
	list-style: none;
  }

  img, svg {
    display: block;

    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
