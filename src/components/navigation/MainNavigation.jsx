import { Nav, Ul, Li, Button } from './MainNavigation.styles';

function MainNavigation(){

    return(
        <Nav>
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