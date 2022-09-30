import {useEffect, useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import AdditionalNavigation from './AdditionalNavigation';
import MainNavigation from './MainNavigation';
import {HeaderWrapper, HR} from './Header.styles';

function Header(){
    const isMobile = window.outerWidth < 1024 ? true : false;
    useEffect(() => {}, [isMobile]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return(
        <HeaderWrapper style={isMobile ? {display: 'flex', height: `${!isOpen ? '3rem' : '100vh'}`} : {display: "grid"}}>
            <div style={isMobile ? {display: `${isOpen ? 'block' : 'none'}`,position: "absolute", backgroundColor: "rgba(0,0,0,.5)", width: "100vw", height: "100vh", zIndex: "1"} : {}}></div>
            <AiOutlineMenu style={{display: `${isOpen ? 'none' : 'block'}`, zIndex: "2", paddingTop: ".5rem", paddingLeft: ".5rem"}} onClick={toggleNavbar}/>
            <AiOutlineClose style={{display: `${!isOpen ? 'none' : 'block'}`, position: 'absolute', zIndex: "3", paddingTop: ".5rem", paddingLeft: ".5rem"}} onClick={toggleNavbar}/>
            <AdditionalNavigation status={isOpen}/>
            <HR />
            <MainNavigation status={isOpen}/>
        </HeaderWrapper>
    )
}

export default Header;