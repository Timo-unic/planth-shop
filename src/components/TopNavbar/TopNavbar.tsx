import { Container } from '@mui/material'
import Emailicon from 'assets/Emailicon.png'
import Phoneicon from 'assets/Phoneicon.png'
import Location from 'assets/Location.png'
import Arrowdown from 'assets/Arrowdown.png'
import './TopNavbar.scss'

type Props = {}

const TopNavbar = (props: Props) => {
    return (
        <Container>
            <div className="top-navbar">
                <div className="top-navbar-info">
                    <div className="top-navbar-mail">
                        <img
                            src={Emailicon}
                            alt="e-mail"
                            className="top-navbar-img"
                        />
                        Email: Plantingservice@7oroof.com
                    </div>
                    <div className="top-navbar-phone">
                        <img
                            src={Phoneicon}
                            alt="phone"
                            className="top-navbar-img"
                        />
                        +01 123456789
                    </div>
                    <div className="top-navbar-locate">
                        <img
                            src={Location}
                            alt="location"
                            className="top-navbar-img"
                        />
                        2072 Pinnickinick Street, WA 98370
                    </div>
                </div>
                <div className="top-navbar-lang">
                    English <img src={Arrowdown} alt="arrowdown" />
                </div>
            </div>
        </Container>
    )
}

export default TopNavbar
