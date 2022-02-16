import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    body,
    html,

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        font-family: Open Sans, sans-serif;
    }

    * {
        font-family: Open Sans, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Open Sans, sans-serif;
    }

    *:focus {
        outline: none;
    }
`;

export default Styles;
