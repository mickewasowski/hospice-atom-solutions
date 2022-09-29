import styled from "styled-components";

const redColor = "#BF1522";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
`

export const Section = styled.section`
    background-color: #EFEFEF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    height: 75%;
`

export const Info = styled.article`
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: space-between;
    height: 100%;
`

export const Parag = styled.p`
    font-size: .7rem;
    font-weight: 300;
    line-height: 1.7;
`

export const Links = styled.article`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const H3 = styled.h2`
    color: ${redColor};
    text-transform: uppercase;
    font-size: 1rem;
`

export const H4 = styled.h4`
    text-transform: uppercase;
    font-size: .9em;
    margin-bottom: .2rem
`

export const Text = styled.p`
    font-weight: 300;
    font-size: .7rem;
    line-height: 1.5;
`

export const Contacts = styled.article`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContH3 = styled.h3`
    color: ${redColor};
    text-transform: uppercase;
    font-size: 1rem;
`

export const TextWrapper = styled.p`
    margin-top: 1rem;
    display: flex;
`

export const P = styled.p`
    width: 100%;
    height: 25%;
    background-color: ${redColor};
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 300;
    padding: .5rem 0;
`