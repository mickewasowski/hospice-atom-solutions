import { useEffect } from 'react';
import { Nav, Ul, Li, Button } from './MainNavigation.styles';

function MainNavigation({status}){
    const isMobile = window.outerWidth < 1024 ? true : false;
    useEffect(() => {}, [isMobile]);

    return(
        <Nav style={isMobile ? {display: `${status ? 'flex' : 'none'}`} : {display: 'flex'}}>
            <Ul>
                <Li>Fordsiden</Li>
                <Li>Hospice Guide</Li>
                <Li>Om Os</Li>
                <Li>Nyheder</Li>
                <Li>Sog plads pa et hospice</Li>
            </Ul>
            <Button>Donation</Button>
        </Nav>
    )
}

export default MainNavigation;