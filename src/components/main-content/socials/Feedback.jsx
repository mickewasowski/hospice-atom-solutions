import person from '../../../assets/sergio.jpg';
import {Section, H3, P, Article, Left, Right, UserInfo, Role} from './Feedback.styles'

function Feedback(){

    return(
        <Section>
            <H3>Vi anvendte hospiceguiden fordi...</H3>
            <P>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
            <Article>
                <Left />
                <UserInfo>
                    <img src={person} alt="portrait" style={{width: "5rem", borderRadius: "50%", height: "4rem"}}/>
                    <h5 style={{marginTop: ".5rem"}}>Karen Nielsem</h5>
                    <Role>Phasellus suwcipit vaius</Role>
                </UserInfo>
                <Right />
            </Article>
        </Section>
    )
}

export default Feedback;