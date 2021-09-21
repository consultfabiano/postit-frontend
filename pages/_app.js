import { createGlobalStyle } from 'styled-components'
import HomePage from '.';
import Theme from '../src/Theme'

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        heigth: 100%
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        background-color: ${({theme}) => theme.colors.light}
        color: ${({theme}) => theme.colors.white}

        
    }
    
`;

import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
dayjs.locale('pt-br')


export default function App ({ Component, pageProps }) {
    return (
       <Theme>
        <GlobalStyle />
        <Component { ...pageProps } />
        </Theme>
    )
}