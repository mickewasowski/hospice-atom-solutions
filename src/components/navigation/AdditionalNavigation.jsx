import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import {Nav, Ul,Li, Logo} from './AdditionalNavigation.styles';

function AdditionalNavigation({status}){
    const isMobile = window.outerWidth < 1024 ? true : false;
    useEffect(() => {}, [isMobile]);
    
    return(
        <Nav style={isMobile ? {display: `${status ? 'flex' : 'none'}`} : {display: 'flex'}}>
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