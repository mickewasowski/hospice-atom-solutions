import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: .3rem;

    grid-column-start: 2;
    grid-column-end: 5;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    font-size: .8rem;
    font-weight: 300;
    margin: 0;
    height: fit-content;
`

export const Li = styled.li`
    height: fit-content;
    margin-bottom: .3rem;
`

export const Logo = styled.img`
    width: 4.3rem;
    height: 2.3rem;
`