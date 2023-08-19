import styled from 'styled-components'
import BGImg from '../assets/bg.png'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link) `
    text-decoration: none;
`
export const StyledContent = styled.div`
    position: relative;
`
export const StyledLeftCol = styled.div`
    padding: 6.75rem 8vw; /* 108 / 16 = 6.75rem */
    background: #5200FF;
    color: white;
    text-align: center;
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BGImg});
        background-size: cover;
        opacity: .52;
    }

    h1 {
        margin: 0;
        font-family: 'Bebas Neue';
        font-weight: normal;
        font-size: 4rem;
        line-height: 1.2em;
    }

    p {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1260px) {
        flex-basis: 0;
        flex-grow: 1;
        height: 100vh;
        display: grid;
        place-items: center;
        text-align: right;
    }
`
export const StyledRightCol = styled.div`
    padding: 6.75rem 8vw; /* 108 / 16 = 6.75rem */

    @media only screen and (min-width: 1260px) {
        flex-basis: 0;
        flex-grow: 1;
        height: 100vh;
        display: grid;
        place-items: center;
    }
`
export const StyledForm = styled.div`
    label {
        display: block;
        font-size: 1.125rem;
        margin-bottom: .77rem;
        font-weight: 500;
    }

    input {
        width: 100%;
        background: #EDEDED;
        border: 1px solid #C7C7C7;
        font-size: 1rem;
        padding: .75rem;
        outline: none;
        margin-bottom: 2.5em;
    }

    button {
        width: 100%;
        background: #5200FF;
        padding: 1em;
        color: white;
        border: none;
        font-size: 1.125rem;
        cursor: pointer;
    }

    @media only screen and (min-width: 770px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 2em;
        
        button {
            width: auto;
            padding: 1em 2.5em;
        }
    }

    @media only screen and (min-width: 1260px) {
        display: inline-block;
        width: 30rem;
    }
`