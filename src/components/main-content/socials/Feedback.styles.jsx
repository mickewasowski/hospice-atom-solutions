import styled from "styled-components";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 4rem auto;
    align-items: center;
`

export const Left = styled(BsChevronLeft)`
    transform: scale(3);
    color: #E6E6E6;

    &:hover{
        cursor: pointer;
        color: black;
    }
`

export const Right = styled(BsChevronRight)`
    transform: scale(3);
    color: #E6E6E6;

    &:hover{
        cursor: pointer;
        color: black;
    }
`

export const H3 = styled.h3`
    text-transform: uppercase;
    margin-bottom: 2rem;
`

export const P = styled.p`
    text-align: center;
    font-weight: 300;
    margin-bottom: 2rem;
    width: 80%;
`

export const Article = styled.article`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Role = styled.p`
    text-transform: uppercase;
    font-weight: 300;
    font-size: .8rem;
`