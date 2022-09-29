import {Footer as Wrapper,Section, P, Info,Parag, Links,H3,H4,Text, Contacts, ContH3,TextWrapper} from './Footer.styles';
import logo from '../../assets/logo.png';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FaCcVisa, FaCcMastercard, FaCcPaypal} from 'react-icons/fa';

function Footer(){

    return(
        <Wrapper>
            <Section>
                <Info>
                    <section>
                        <img src={logo} alt="logo" style={{width: "5rem", marginBottom: "1rem"}}/>
                        <Parag>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Parag>
                    </section>
                    <section style={{width: "7rem",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <BsFacebook style={{color: "#39559E", transform: "scale(1.5)"}}/>
                        <AiFillTwitterCircle style={{color: "#50ABF0", transform: "scale(1.8)"}}/>
                        <img src={logo} alt="logo" style={{width: "3rem", height: "2rem"}}/>
                    </section>
                </Info>
                <Links>
                    <H3>Quick Links</H3>
                    <div>
                        <H4>Services</H4>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna ac sem sollicitudin, ac ornare justo hendrerit. Nam ullamcorper.</Text>
                    </div>
                    <div>
                        <H4>Virksomheder</H4>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat vulputate enim, eget porta erat laoreet ut. Aenean tellus ipsum.</Text>
                    </div>
                    <div>
                        <H4>Virksomheder</H4>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula sem massa, eget ornare ex venenatis id. Sed nec augue.</Text>
                    </div>
                    <div>
                        <H4>Handelsbetingelser</H4>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere tortor at nulla scelerisque aliquam. Praesent dictum malesuada magna, vitae.</Text>
                    </div>
                </Links>
                <Contacts>
                    <ContH3>Kontakt os</ContH3>
                    <div>
                        <TextWrapper>
                            <HiOutlineLocationMarker style={{marginRight: ".4rem", color: "#BF1522"}}/>
                            <p>Fredericevej 69 7100 Vejle</p>
                        </TextWrapper>
                        <TextWrapper>
                            <AiOutlinePhone style={{marginRight: ".4rem", color: "#BF1522"}} />
                            <p>
                                Kontakt os:
                                <br />
                                70 70 80 80
                            </p>
                        </TextWrapper>
                        <TextWrapper>
                            <AiOutlineMail style={{marginRight: ".4rem", color: "#BF1522"}} />
                            <p>
                                E-mail:
                                <br />
                                mail@demolink.org
                            </p>
                        </TextWrapper>
                    </div>
                    <div>
                        <p style={{fontWeight: "300", fontSize: ".8rem", marginBottom: ".8rem"}}>Vi modtager folgende kort:</p>
                        <div style={{display: "flex", gap: "1rem"}}>
                            <FaCcVisa style={{transform: "scale(1.3)"}} />
                            <FaCcMastercard style={{transform: "scale(1.3)"}} />
                            <FaCcPaypal style={{transform: "scale(1.3)"}} />
                        </div>
                    </div>
                </Contacts>
            </Section>
            <P>Copyright &#169; 2019 All Right Reserved.</P>
        </Wrapper>
    )
}

export default Footer;