import AdditionalNavigation from './AdditionalNavigation';
import MainNavigation from './MainNavigation';
import {HeaderWrapper, HR} from './Header.styles';

function Header(){

    return(
        <HeaderWrapper>
            <AdditionalNavigation />
            <HR />
            <MainNavigation />
        </HeaderWrapper>
    )
}

export default Header;