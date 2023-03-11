import { createGlobalStyle } from 'styled-components'
import Roboto from '../../assests/fonts/Roboto-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        ::before,::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }


    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'Roboto;
        background: ${({ location }) =>
          location === '/' || location === '/signup' || location === '/signin'
            ? '#009EE4'
            : '#FAFAFA'};
    }

    a {
        text-decoration: none;
    }
`
