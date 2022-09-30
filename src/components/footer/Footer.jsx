import {Footer as Wrapper,Section, Info,InfoLogo,Parag,InfoIcons,Facebook,Twitter,InfoLogoSmall, Links,H3,H4,Text, Contacts, ContH3,TextWrapper, Location, Phone,Email,TextParag,CardsP,CardsWrapper,Visa,MasterCard,PayPal, P} from './Footer.styles';
import logo from '../../assets/logo.png';

function Footer(){

    return(
        <Wrapper>
            <Section>
                <Info>
                    <section>
                        <InfoLogo src={logo} alt="logo"/>
                        <Parag>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Parag>
                    </section>
                    <InfoIcons>
                        <Facebook />
                        <Twitter />
                        <InfoLogoSmall src={logo} alt="logo" />
                    </InfoIcons>
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
                            <Location />
                            <TextParag>Fredericevej 69 7100 Vejle</TextParag>
                        </TextWrapper>
                        <TextWrapper>
                            <Phone />
                            <TextParag>
                                Kontakt os:
                                <br />
                                70 70 80 80
                            </TextParag>
                        </TextWrapper>
                        <TextWrapper>
                            <Email />
                            <TextParag>
                                E-mail:
                                <br />
                                mail@demolink.org
                            </TextParag>
                        </TextWrapper>
                    </div>
                    <div>
                        <CardsP>Vi modtager folgende kort:</CardsP>
                        <CardsWrapper>
                            <Visa />
                            <MasterCard />
                            <PayPal />
                        </CardsWrapper>
                    </div>
                </Contacts>
            </Section>
            <P>Copyright &#169; 2019 All Right Reserved.</P>
        </Wrapper>
    )
}

export default Footer;