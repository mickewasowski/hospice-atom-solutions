import styled from "styled-components";

const lightRed = "#BF1522";

export const TextSection = styled.section`
    width: 60%;
    margin: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`

export const P = styled.p`
    text-align: center;
    font-weight: 300;
`

export const ReadMore = styled.button`
    width: 10rem;
    height: 2.5rem;
    border: 1px solid ${lightRed};
    background-color: white;
    color: ${lightRed};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;

    &:hover{
        background-color: ${lightRed};
        color: white;
        cursor: pointer;
    }
`

export const CardsSection = styled.section`
    margin: 4rem auto;
    width: 60%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`