import { styled, css } from 'styled-components'
import { Link } from 'react-router-dom'
import bgImg from '../assets/data_bg.jpg'

export const StyledContainer = styled.div`
    margin: 1em .5em;
    height: calc(100% - 2em);

    @media only screen and (min-width: 1000px) {
        display: flex;
        padding: 2em;
    }
`
export const StyledSection = styled.section `
    background: #221F26 url(${bgImg});
    background-size: cover;
    background-blend-mode: screen;
    height: calc(100vh - 2em);
    background-position: -100px;
    padding: 2em;
    border-radius: 13px;

    @media only screen and (min-width: 1000px) {
        border-radius: unset;
        border-top-right-radius: 13px;
        border-bottom-right-radius: 13px;
        width: 100%;
        background-size: cover;
        background-position: 0;
        background-attachment: unset;
    }
`
export const StyledMenu = styled.div `
    color: white;

    @media only screen and (min-width: 700px) {
        display: flex;
    }
`
export const StyledNav = styled.nav`
    position: fixed;
    z-index: 1;
    background: #2C2931;
    left: 0;
    top: 0;
    height: 100vh;
    max-width: 300px;
    transform: translateX(-100%);
    transition: transform .3s;
    ${props => props.isVisible && css`
        transform: translateX(0);
    `};

    @media only screen and (min-width: 1000px) {
        position: unset;
        transform: translateX(0) !important;
        border-radius: unset;
        border-top-left-radius: 13px;
        border-bottom-left-radius: 13px;
        height: 100%;
        transition: unset;
    }
`
export const StyledLogo = styled.p`
    color: var(--primary-color);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: -.1em;
    text-align: center;
    width: 100%;
    margin: 0;

    @media only screen and (min-width: 1000px) {
        text-align: left;
    }
`
export const StyledHeader = styled.header `
    display: flex;

    @media only screen and (min-width: 1000px) {
        padding: 1.6em;
    }
`
export const StyledImgMenu = styled.img`
    cursor: pointer;
    @media only screen and (min-width: 1000px) {
        display: none;
    }
`
export const StyledContent = styled.div`
    h1 {
        font-size: 3rem;
        font-size: clamp(2.5rem, -0.875rem + 8.333vw, 4rem);
        font-weight: 800;
        text-transform: uppercase;
        color: white;
        line-height: 89%;
    }

    p {
        font-size: 2.1rem;
        font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
        font-weight: 300;
        line-height: 111%;
        color: #847D93;
        margin-top: 1.1em;
    }

    button {
        position: relative;
        color: white;
        font-weight: 800;
        background-color: Transparent;
        background-repeat:no-repeat;
        padding: 1.25rem;
        border: 1px solid #4D4D4D;
        cursor: pointer;
        overflow: hidden;
    
        &:hover {
            background: var(--primary-color);
        }
    }

    @media only screen and (min-width: 700px) {
        p {
            width: 70%;
        }
    }

    @media only screen and (min-width: 1000px) {
        justify-self: left;
        margin-left: 4em;
    }
`
export const StyledRightCol = styled.div`
    display: grid;
    place-items: center start;
    height: 80%;
    padding-left: 3rem;
`
export const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;
    display: block;
    padding: .875em 5em .875em 4em;

    &:hover {
        background: #413E47;
    }

    ${props => props.active && css`
        background: var(--primary-color);
        &:hover {background: #4497FF}
    `};
`
export const StyledUL = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;

    @media only screen and (min-width: 1000px) {
        margin-top: 4em;
    }
`
export const StyledLI = styled.li`
    width: 100%;
`
export const StyleArrowImg = styled.img`
    padding: 3em 4em 2em;
    cursor: pointer;
    transition: transform .3s;
    &:hover {transform: translateX(6px)};

    @media only screen and (min-width: 1000px) {
        display: none;
    }
`
