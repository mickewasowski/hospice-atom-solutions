import styled from "styled-components";

export const HeaderWrapper = styled.header`
    ${'' /* display: grid; */}
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1px 1fr;

    @media (min-width: 320px) AND (max-width: 1023px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
`

export const HR = styled.hr`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 6;
    width: 100vw;
    border: 1px solid #EFEFEF;
    background-color: #EFEFEF;

    @media (min-width: 320px) AND (max-width: 1023px) {
       display: none;
    }
`