import logo from '../assets/logo.png';
import {Nav, Ul,Li, Logo} from './AdditionalNavigation.styles';

function AdditionalNavigation(){

    return(
        <Nav>
            <Logo src={logo} alt="logo"/>
            <Ul>
                <Li>Bliv frivilig</Li>
                <Li>Bliv medlem</Li>
                <Li>FAQ</Li>
                <Li>Presse</Li>
                <Li>Visksomheder</Li>
            </Ul>
        </Nav>
    )
}

export default AdditionalNavigation;