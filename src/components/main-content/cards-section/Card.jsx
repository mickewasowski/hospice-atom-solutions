import {Article, H2} from './Card.styles';

function Card({title, backgroundImage, start, end, row}){

    return(
        <Article style={
            {backgroundImage: `url(${backgroundImage})`, 
            gridColumnStart: `${start}`,
            gridColumnEnd: `${end}`,
            gridRowStart: `${row}`}}
        >
            <H2>{title}</H2>
        </Article>
    )
}

export default Card;