import styled from "styled-components";

export const Nav = styled.nav`
    ${'' /* display: flex; */}
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: .3rem;

    grid-column-start: 2;
    grid-column-end: 5;

    @media (min-width: 320px) AND (max-width: 1023px) {
        ${'' /* display: flex; */}
        flex-direction: column;
        width: 70vw;
        height: 50vh;
        align-items: center;
        z-index: 2;
        background-color: white;
        padding-top: 2rem;
    }
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    font-size: .8rem;
    font-weight: 300;
    margin: 0;
    height: fit-content;

    @media (min-width: 320px) AND (max-width: 1023px) {
        flex-direction: column;
    }
`

export const Li = styled.li`
    height: fit-content;
    margin-bottom: .3rem;
`

export const Logo = styled.img`
    width: 4.3rem;
    height: 2.3rem;
`