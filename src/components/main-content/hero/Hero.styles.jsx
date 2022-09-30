import styled from "styled-components";
import image from '../../../assets/main-image.png';

const redColor = "#9A121C";

export const Section = styled.section`
    height: 50rem;
    width: 100%;
    background: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top: 3px solid ${redColor};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
    color: white;

    @media (min-width: 320px) AND (max-width: 1023px) {
        height: 60vh;
    }
`

export const H2 = styled.h2`
    text-transform: uppercase;
    font-size: 3rem;

    @media (min-width: 320px) AND (max-width: 1023px) {
        font-size: 2rem;
        text-align: center;
    }
`

export const H4 = styled.h4`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;

    @media (min-width: 320px) AND (max-width: 1023px) {
        font-size: 1rem;
        text-align: center;
    }
`

export const P = styled.p`
    font-weight: 100;
    font-style: italic;
    font-size: 1.3rem;
    background-color: ${redColor};
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    margin-top: 1.2rem;

    @media (min-width: 320px) AND (max-width: 1023px) {
        font-size: 1rem;
        margin-top: .8rem;
    }
`