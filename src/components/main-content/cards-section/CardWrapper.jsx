import {TextSection, P, ReadMore, CardsSection} from './CardWrapper.styles';
import hall from '../../../assets/hall.png';
import hands from '../../../assets/hands.png';
import couple from '../../../assets/couple.png';
import people from '../../../assets/people.png';
import meeting from '../../../assets/meeting.png';
import Card from './Card';
import LogoCard from './LogoCard';

function CardWrapper(){
    return(
        <>
            <TextSection>
                <P>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</P>
                <ReadMore>Read more</ReadMore>
            </TextSection>
            <CardsSection>
                <Card start={"1"} end={"3"} row={"1"} title="Udvalgt hospice laes om deres tryghedscertifikat" backgroundImage={hall} width={"26rem"}/>
                <LogoCard start={"3"} end={"4"} row={"1"} />
                <Card start={"4"} end={"5"} row={"1"} title="Lorem ipsum dolor sit amet, consectetur" backgroundImage={hands} width={"14rem"}/>
                <Card start={"1"} end={"2"} row={"2"} title="Mauris maximus nisi et sapien tristique, quis" backgroundImage={couple} width={"14rem"}/>
                <Card start={"2"} end={"3"} row={"2"} title="Aenean suscipit lea nec est convallis faucibus" backgroundImage={people} width={"14rem"}/>
                <Card start={"3"} end={"5"} row={"2"} title="Hvad kan vi forvente i fremditen" backgroundImage={meeting} width={"27rem"}/>
            </CardsSection>
        </>       
    )
}

export default CardWrapper;