import AdditionalNavigation from './AdditionalNavigation';
import MainNavigation from './MainNavigation';
import {HeaderWrapper} from './Header.styles';

function Header(){

    return(
        <HeaderWrapper>
            <AdditionalNavigation />
            <hr style={{gridRowStart: "2",gridRowEnd: "3",gridColumnStart: "1", gridColumnEnd: "6", width: "100vw", border: "1px solid #EFEFEF", backgroundColor: "#EFEFEF"}} />
            <MainNavigation />
        </HeaderWrapper>
    )
}

export default Header;