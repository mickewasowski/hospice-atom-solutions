import styled from "styled-components";
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FaCcVisa, FaCcMastercard, FaCcPaypal} from 'react-icons/fa';

const redColor = "#BF1522";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50vh;

    @media (min-width: 320px) AND (max-width: 1023px) {
        height: auto;
    }
`

export const Section = styled.section`
    background-color: #EFEFEF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    height: 75%;

    @media (min-width: 320px) AND (max-width: 1023px) {
        flex-direction: column;
        height: auto;
        gap: 2rem;
    }

    @media (min-width: 1024px) AND (max-width: 1440px){
        height: auto;
    }
`

export const Info = styled.article`
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: space-between;
    height: 100%;

    @media (min-width: 320px) AND (max-width: 1023px) {
        width: 90%;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`

export const InfoLogo = styled.img`
    width: 5rem;
    margin-bottom: 1rem;
`

export const InfoIcons = styled.section`
    width: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Facebook = styled(BsFacebook)`
    color: #39559E;
    transform: scale(1.5);

    &:hover{
        cursor: pointer;
    }
`

export const Twitter = styled(AiFillTwitterCircle)`
    color: #50ABF0;
    transform: scale(1.8);

    &:hover{
        cursor: pointer;
    }
`

export const InfoLogoSmall = styled.img`
    width: 3rem;
    height: 2rem;

    &:hover{
        cursor: pointer;
    }
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

    @media (min-width: 320px) AND (max-width: 1023px) {
        width: 90%;
        align-items: center;
    }
`

export const H3 = styled.h2`
    color: ${redColor};
    text-transform: uppercase;
    font-size: 1rem;

    @media (min-width: 320px) AND (max-width: 1023px) {
        margin-bottom: 1rem;
    }
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

    @media (min-width: 320px) AND (max-width: 1023px) {
        width: 90%;
        align-items: center;
        gap: 1rem;
    }
`

export const ContH3 = styled.h3`
    color: ${redColor};
    text-transform: uppercase;
    font-size: 1rem;

    @media (min-width: 320px) AND (max-width: 1023px) {
        margin-bottom: 1rem;
    }
`

export const TextWrapper = styled.p`
    margin-top: 1rem;
    display: flex;
`

export const Location = styled(HiOutlineLocationMarker)`
    margin-right: .4rem;
    color: ${redColor};
`

export const Phone = styled(AiOutlinePhone)`
    margin-right: .4rem;
    color: ${redColor};
`

export const Email = styled(AiOutlineMail)`
    margin-right: .4rem;
    color: ${redColor};
`

export const TextParag = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const PaymentInfo = styled.div`
    @media (min-width: 320px) AND (max-width: 1023px) {
        align-self: flex-start;
    }
`

export const CardsP = styled.p`
    font-weight: 300;
    font-size: .8rem;
    margin-bottom: .8rem;
`

export const CardsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`

export const Visa = styled(FaCcVisa)`
    transform: scale(1.3);
    color: #0C5B9E;

    &:hover{
        cursor: pointer;
    }
`

export const MasterCard = styled(FaCcMastercard)`
    transform: scale(1.3);
    color: #F58B2E;

    &:hover{
        cursor: pointer;
    }
`

export const PayPal = styled(FaCcPaypal)`
    transform: scale(1.3);
    color: #2B84AC;

    &:hover{
        cursor: pointer;
    }
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