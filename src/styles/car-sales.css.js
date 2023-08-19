import { Link } from "react-router-dom";
import { css, styled } from "styled-components";
import searchImg from "../assets/search.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
    margin: 2.8em;

    h1 {
        margin-bottom: 0;
    }

`
export const StyledHeader = styled.header`
    @media only screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const StyledHeadings = styled.div`
    p {
        font-size: 1.125rem;
        color: var(--text-color);
    }

    @media only screen and (min-width: 900px) {
        p {
            margin: .5em 0 3em;
        }
    }
`
export const StyledOptions = styled.div`
    position: relative;
`
export const StyledIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;

    @media only screen and (min-width: 900px) {
        margin-bottom: 0;
    }
`
export const StyledMenuImg = styled.img`
    margin: 0 .5em;
    cursor: pointer;
`
export const StyledInput = styled.input`
    border: none;
    padding: .8em;
    border-radius: 2em;
    background: white url(${searchImg}) no-repeat right .8em center;
    width: 100%;
    &:focus {
        outline: thin dotted;
    }

`
export const StyledFilter = styled.div`
    position: absolute;
    top: 3em;
    right: 1em;
    background: white;
    padding: 2em 1.5em;
    border-radius: 6px;
    box-shadow: 11px 18px 54px rgba(0,0,0, .11);
    //Animation
    clip-path: circle(0% at 100% 0%);
    ${props => props.filter ? css`
        clip-path: circle(100% at 50% 50%);
    `
    :  
    css`
        clip-path: circle(0% at 100% 0%);
    `   
    };
    transition: clip-path .3s ease-in-out;
`
export const StyledChkBox = styled.div`
    margin-bottom: 1.125em;

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const StyledMain = styled.main`
`
export const StyledLabels = styled.div`
    display: none;
    margin: -1em -1em 2em;
    padding: 1em;
    border-radius: 6px;

    @media only screen and (min-width: 900px) {
        display: block;
        background-color: var(--primary-color);
        color: white;
        text-transform: uppercase;
        font-size: .875rem;
        display: grid;
        grid-template-columns: 40% 30% 20% auto;
        padding: .2em 1em;
    }
`
export const StyledCars = styled.div`
    margin: -1em -1em 2em;
    padding: 1em;
    border-radius: 6px;

    &:hover {
        background: white;
    }

    @media only screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 40% 30% auto;
    }
`
export const StyledLblDetails = styled.p`
`
export const StyledLblLocation = styled.p`
`
export const StyledLblPrice = styled.p`
`
export const StyledLblAction = styled.p`
`
export const StyledCarName = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1.22rem;
`
export const StyledCarLocation = styled.p`
    color: var(--text-color);
    font-size: 1.125rem;

    @media only screen and (min-width: 900px) {
        margin: 0;
    }
`
export const StyledCols = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledCarPrice = styled.p`
    font-size: 1.5rem;
    margin: 0;
`
export const StyledCarHeart = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 1.5em;

    @media only screen and (min-width: 900px) {
        margin-right: 1.6em;
    }
`
