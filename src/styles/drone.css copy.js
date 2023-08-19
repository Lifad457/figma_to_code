import styled, {css} from 'styled-components'
import bgImg from '../assets/drone/streaks.jpg'
import bgImgStadium from '../assets/drone/stadium.jpg'
import { Link } from 'react-router-dom'

export const StyledContainer = styled.div`
    margin-left: 5.5rem;
    min-width: 60rem;
`

export const StyledIntro = styled.div`
    position: relative;
    display: grid;
    flex-direction: column;
    grid-template-columns: 4fr 1fr;
`

export const StyledMenu = styled.div`
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    font-size: 3rem;
    text-align: end;
    background: #363B4E;
    max-width: 55rem;

    ${props => !props.isVisible && css`
        display: none;
    `};

    @media only screen and (min-width: 1200px) {
        position: absolute;
        display: flex;
        background: unset;
        max-width: unset;
    }
`

export const StyledUL = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;

    @media only screen and (min-width: 1200px) {
        display: flex;
        margin: 1rem 5rem;
        font-size: 2rem;
    }
`

export const StyledLI = styled.li`
    width: 100%;
    margin-bottom: 1rem;
    
    img {
        cursor: pointer;
        height: 3rem;
        padding-right: 5.5rem;

        @media only screen and (min-width: 1200px) {
            display: none;
        }
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0.875rem 6rem;

    &:hover {
        background: #7988BE;
    }

    @media only screen and (min-width: 1200px) {
        &:hover {
            background: unset;
            color: #303853;
        }
        padding: 0 3rem;
    }
`

export const StyledLeftCol = styled.div`
    background-color: #B2DD9E;
    position: relative;
    height: 100vh;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${bgImg});
        background-size: cover;
        opacity: .12;
    }
`

export const StyledLogo = styled.div`
    display: inline-block;
    padding: 0 0.3em;
    margin-left: -2em;
    background-color: black;
    color: white;
    font-size: 2rem;
    letter-spacing: 0.4rem;

    p {
        margin: 0;
        padding: 0.6em;
        background: linear-gradient(to right, #6889FF 45%, white 0%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const StyledIntroContent = styled.div`
    text-align: center;
    position: absolute;

    h1 {
        font-size: 6rem;
        letter-spacing: 0.6rem;
        margin: 0.6em 0;
        padding: 0 2em 0 2em;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        margin: 0.4em 0;
        padding: 0 8em;
        letter-spacing: 0.25rem;
        line-height: 3rem;
        display: flex;
    }

    img {
        margin: 5em 0 9em;
        width: 30em;
        z-index: 2;
        position: relative;
    }

    .blur {
        opacity: 0.6;
        position: absolute;
        z-index: 1;
        margin: 11em -5em;
    }

    @media only screen and (min-width: 1200px) {
        display: flex;

    }
`

export const StyledRightCol = styled.div`
    background-color: #7988BE;;
    text-align: center;

    img {
        height: 3em;
        margin-top: 0.6em;
        cursor: pointer;
        
        @media only screen and (min-width: 1200px) {
            display: none;
        }
    }
`

export const StyledComment = styled.div`
    background: #303853;
    position: relative;
    padding: 8em;
    height: 80em;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${bgImgStadium});
        background-size: cover;
        opacity: .12;
    }

    h1 {
        margin: 0;
        color: white;
        font-size: 5rem;
        position: relative;
        letter-spacing: 0.15rem;
    }
`

export const StyledSignature = styled.div`
    display: flex;
    align-items: start;
    position: relative;
    padding-top: 5em;

    p {
        padding-left: 0.8em;
        margin: 0;
        color: white;
        font-size: 3rem;
        letter-spacing: 0.15rem;
    }

    hr {
        margin: 1.6em 0;
        width : 6em;
        height: 5px;
        background-color: white;
    }
`

export const StyledFootage = styled.div`
    padding-top: 5em;
    height: 60em;

    h1 {
        margin: 0;
        font-size: 6.5rem;
        letter-spacing: 0.25rem;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        letter-spacing: 0.35rem;
        line-height: 4rem;
        padding: 1.5em 4em 0 0;
    }
`

export const StyledPhotos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 5em 0 10em 0;

    img {
        width: 100%;
        height: 100%;
    }

    .footage4 {
        grid-column: 2;
        grid-row: 1;
    }

    .footage2 {
        grid-column: 3;
        grid-row: 1;
    }

    .footage5 {
        grid-column: 1;
        grid-row: 2;
    }

    .footage3 {
        grid-column: 2;
        grid-row: 2;
    }

    .footage1 {
        grid-column: 2;
        grid-row: 3;
    }
`

export const StyledRegister = styled.div`
    height: 80em;
    background-color: #B2DD9E;
    margin-left: -5.5rem;

    h1 {
        font-size: 3.5rem;
        letter-spacing: 0.35rem;
        background: #9FC88C;
        padding: 3rem 3rem 3rem 5.5rem;
        width: calc(100% - 15rem);
    }

    p {
        margin: 0;
        padding: 3rem 3rem 0 5.5rem;
        font-size: 2.5rem;
        letter-spacing: 0.35rem;
    }

    hr {
        margin-left: 5.5rem;
        width: calc(100% - 55rem);
        height: 0.2rem;
        background-color: lightgray;
    }
`

export const StyledForm = styled.div`
    margin-left: 5.5rem;
    padding-top: 4rem;

    label {
        display: block;
        font-size: 3rem;
        margin-bottom: .77rem;
    }

    input {
        width: calc(100% - 15rem);
        background: #EDEDED;
        border: 1px solid #C7C7C7;
        font-size: 3rem;
        padding: 1rem;
        outline: none;
        margin-bottom: 1.5em;
    }

    button {
        font-family: 'Bebas Neue',sans-serif;
        letter-spacing: 0.35rem;
        margin: 2rem 0 4rem 0;
        width: calc(100% - 15rem);
        background: black;
        padding: 1rem;
        color: white;
        border: none;
        font-size: 3rem;
        cursor: pointer;
    }
`