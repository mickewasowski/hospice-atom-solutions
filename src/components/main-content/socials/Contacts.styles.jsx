import styled from "styled-components";

const redColor = "#BF1522";

export const Section = styled.section`
    width: 50%;
    margin: 3rem auto;
`
export const H2 = styled.h2`
    color: ${redColor};
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`
export const P = styled.p`
    text-align: center;
    font-weight: 300;
    margin-bottom: 1rem;
`

export const Article = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 320px) AND (max-width: 1023px) {
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
    }
`

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const H4 = styled.h4`
    width: 12rem;
    text-align: center;
    margin-top: .7rem;
    text-transform: uppercase;
    font-size: .8rem;
`

export const Button = styled.button`
    border: none;
    background-color: ${redColor};
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    color: white;
`