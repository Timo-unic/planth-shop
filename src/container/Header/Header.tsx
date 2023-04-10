import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import TopNavbar from 'components/TopNavbar/TopNavbar'
import Phonecallus from 'assets/Phonecallus.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'grey' }}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#0C4B35' }}>
                <TopNavbar />
            </Container>
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'green',
                            margin: '0 0 0 50px',
                            padding: '0 20px',
                        }}
                    >
                        <img src={Phonecallus} alt="call-us" />
                        Call us
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
