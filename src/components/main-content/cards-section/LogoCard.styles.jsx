import styled from "styled-components";
import background from '../../../assets/background.png';

const redColor = "#BF1522";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${background});
`

export const Logo = styled.img`
    width: 10rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
`

export const H2 = styled.h2`
    color: ${redColor};
    font-size: .9rem;
    width: 8rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: .7rem;
`

export const ReadMore = styled.button`
    background-color: ${redColor};
    color: white;
    border: none;
    padding: .3rem 1rem;
    text-transform: uppercase;
    font-size: .7rem;

    &:hover{
        background-color: white;
        color: ${redColor};
        cursor: pointer;
        font-weight: bold;
    }
`