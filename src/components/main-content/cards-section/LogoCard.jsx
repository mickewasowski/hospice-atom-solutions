import logo from '../../../assets/logo.png';
import {Article, Logo, H2, ReadMore} from './LogoCard.styles';

function LogoCard({start, end, row}){

    return(
        <Article style={{gridColumnStart: `${start}`, gridColumnEnd: `${end}`, gridRowStart: `${row}`}}>
            <Logo src={logo} alt="logo"/>
            <H2>Hvilket hospice er bedst</H2>
            <ReadMore>Read more</ReadMore>
        </Article>
    )
}

export default LogoCard;