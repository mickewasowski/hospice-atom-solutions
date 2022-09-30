import styled from "styled-components";

const redColor = "#9A121C";
const btnHoverColor = "#BF1522";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;

    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 3;

    ${'' /* &:before{
        content: "";
        width: 100vw;
        background-color: black;
        height: 1px;
    } */}
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
`

export const Li = styled.li`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
    padding-bottom: .1rem;
    border-bottom: 3px solid transparent;

    &:hover{
        border-bottom: 3px solid ${redColor};
        cursor: pointer;
    }
`

export const Button = styled.button`
    border: none;
    text-transform: uppercase;
    padding: .5rem 1.4rem;
    font-size: .9rem;
    color: white;
    background-color: ${redColor};

    &:hover{
        background-color: ${btnHoverColor};
        cursor: pointer;
    }
`