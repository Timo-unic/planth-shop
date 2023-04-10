import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
} from '@mui/material/styles'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, sans-serif',
    },
})

const app = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default app
