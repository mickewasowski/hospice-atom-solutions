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
        <HeaderWrapper style={isMobile ? {backgroundColor: `${!isOpen ? 'white' : ''}` ,display: 'flex', height: `${!isOpen ? '3rem' : '100vh'}`, width: `${!isOpen ? '100vw' : ''}`} : {display: "grid"}}>
            <div style={isMobile ? {display: `${isOpen ? 'block' : 'none'}`,position: "absolute", backgroundColor: "rgba(0,0,0,.5)", width: "100vw", height: "100vh", zIndex: "1"} : {}}></div>
            <AiOutlineMenu style={isMobile ? {display: `${isOpen ? 'none' : 'block'}`, zIndex: "2", paddingTop: ".5rem", paddingLeft: ".5rem"} : {display: 'none'}} onClick={toggleNavbar}/>
            <AiOutlineClose style={isMobile ? {display: `${!isOpen ? 'none' : 'block'}`, position: 'absolute', zIndex: "3", paddingTop: ".5rem", paddingLeft: ".5rem"} : {display: 'none'}} onClick={toggleNavbar}/>
            <AdditionalNavigation status={isOpen}/>
            <HR />
            <MainNavigation status={isOpen}/>
        </HeaderWrapper>
    )
}

export default Header;