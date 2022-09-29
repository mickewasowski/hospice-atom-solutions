import styled from "styled-components";

const redColor = "#9A121C";
const btnHoverColor = "#BF1522";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
    width: 72%;
    margin: auto;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
`

export const Li = styled.li`
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8rem;
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
    font-size: .6rem;
    color: white;
    background-color: ${redColor};

    &:hover{
        background-color: ${btnHoverColor};
        cursor: pointer;
    }
`