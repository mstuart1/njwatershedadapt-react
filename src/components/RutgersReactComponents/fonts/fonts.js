import { createGlobalStyle } from "styled-components";

import LibreBaskervilleWoff from "./Libre Baskerville.woff";
import LibreBaskervilleWoff2 from "./Libre Baskerville.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Libre Baskerville';
        src: local('Libre Baskerville'), local('LibreBaskerville'),
        url(${LibreBaskervilleWoff2}) format('woff2'),
        url(${LibreBaskervilleWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
