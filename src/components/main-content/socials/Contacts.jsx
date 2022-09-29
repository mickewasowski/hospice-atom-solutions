import {AiOutlineWhatsApp, AiOutlinePercentage} from 'react-icons/ai';
import {GiEarthAmerica} from 'react-icons/gi';
import {Section, H2, P, Article,Wrapper,H4, Button} from './Contacts.styles';

function Contacts(){
    return(
        <Section>
            <H2>Hospiceguiden</H2>
            <P>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</P>
            <Article>
                <Wrapper>
                    <Button>
                        <AiOutlineWhatsApp style={{transform: "scale(5)"}}/>
                    </Button>
                    <H4>Kontakt hospiceguiden</H4>
                </Wrapper>
                <Wrapper>
                    <Button>
                        <GiEarthAmerica style={{transform: "scale(5)"}} />
                    </Button>
                    <H4>Find det naermeste hospice</H4>
                </Wrapper>
                <Wrapper>
                    <Button>
                        <AiOutlinePercentage style={{transform: "scale(5)"}} />
                    </Button>
                    <H4>Gode rad & vejledning til at vaelge et hospice</H4>
                </Wrapper>
            </Article>
        </Section>
    )
}

export default Contacts;