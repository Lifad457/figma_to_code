import styled, {css} from 'styled-components'
import bgImg from '../assets/drone/streaks.jpg'
import bgImgStadium from '../assets/drone/stadium.jpg'

export const StyledIntro = styled.div`
    height: 100vh;
    position: absolute;
    width: 90%;
    top: 0;
    right: 0;
    display: grid;
    grid-template-columns: 80% auto;
    z-index: -1;

    @media only screen and (min-width: 900px) {
        width: 80%;
        grid-template-columns: 60% auto;
    }
`
export const StyledLeftCol = styled.div`
    background: #B2DD9E url(${bgImg});
    background-blend-mode: screen;
    background-size: cover;
    height: 100vh;
`
export const StyledRightCol = styled.div`
    background-color: #7988BE;
`
export const StyledContainer = styled.div`
    margin: 0 1em;

    @media only screen and (min-width: 900px) {
        width: 80%;
        margin: 0 auto;
    }
`
export const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 900px) {
        img {
            display: none;
        }

        ul li a {
            font-size: 1rem;
            padding: 0 1em;
        }
    }
`
export const StyledLogo = styled.a`
    display: inline-block;
    background-color: black;
    padding: .2em .4em;
    color: white;
    font-size: 1.8rem;

    span {
        color: #6889FF;
    }
`
export const StyledBgImg = styled.img`
    width: 2.5em;
    cursor: pointer;
`
export const StyledExitImg = styled.img`
    width: 2em;
    margin: 2em;
    cursor: pointer;
`
export const StyledUL = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    width: 66%;
    background-color: #363B4E;
    height: 100vh;
    z-index: 2;
    padding: 2em 0;

    transform: translateX(100%);
    transition: transform .3s;

    ${props => !props.isVisible && css`
        transform: translateX(0%);
    `};

    @media only screen and (min-width: 900px) {
        transform: translateX(0);
        width: unset;
        background: none;
        display: flex;
        padding-top: 1em;
        padding-bottom: 0;
        position: unset;
        height: auto;
    }
`
export const StyledLI = styled.li`
   text-align: right;

    a {
        color: white;
        display: block;
        padding: .4em 1.5em;
        font-size: 1.5rem;;
    }
`
export const StyledIntroContent = styled.div`
    text-align: center;
    margin: 8em 3em 0;
    height: 75vh;

    @media only screen and (min-width: 900px) { 
        display: flex;
        text-align: left;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
    }
` 
export const StyledType = styled.div`
    h1 {
        font-size: 3rem;
        font-weight: normal;
        line-height: 92%;
    }

    p {
        font-family: 'Montserrat';
        font-size: 1.125rem;
        line-height: 141.6%;
    }

    @media only screen and (min-width: 900px) { 
        h1 {
            font-size: 5rem;
            width: 80%;
        }

        p {
            width: 80%;
        }
    }
`
export const StyledDroneContainer = styled.div`
    position: relative;
    margin: 5em auto;
    width: 65%;

    .blur, .drone {
        position: absolute;
        left: 0;
        z-index: 1;
    }

    .blur {
        opacity: .3;
        top: 1em;
        animation: pulse 2s alternate-reverse infinite;
    }

    .drone {
        animation: hover 2s alternate-reverse infinite;
    }

    @keyframes hover {
        from {
            transform: translateY(-30px);
        }
    }

    @keyframes pulse {
        from {
            opacity: 0;
        }
    }
`
export const StyledQuote = styled.section`
    width: 90%;
    background-color: #303853;
    color: white;
    position: relative;
    padding: 4em 2em;
    margin-left: auto;
    height: 75vh;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url(${bgImgStadium});
        width: 100%;
        height: 100%;
        opacity: 17%;
    }

    blockquote {
        margin: 0 0 2em 0;
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 900px) {
        width: 80%;
        display: grid;
        place-content: center;

        blockquote, cite {
            width: 50%;
            justify-self: center;
        }
        
        blockquote {
            font-size: 2rem;
        }
    }
`
export const StyledCite = styled.cite`
    position: relative;
    padding-left: 1.5em;

    &:before {
        content: '';
        position: absolute;
        width: 1em;
        border-bottom: 1px solid white;
        left: 0;
        top: 50%;
    }
`
export const StyledGallery = styled.section`
    display: block;
    width: 90%;
    margin-left: auto;
    margin-bottom: 2em;

    @media only screen and (min-width: 900px) {
        display: flex;
        gap: 4em;
    }
`
export const StyledFootage = styled.div`
    h2 {
        font-size: 2.5rem;
        margin-bottom: 0;
        font-weight: normal;
    }

    p {
        font-family: 'Montserrat';
    }

    @media only screen and (min-width: 900px) {
        h2 {
            font-size: 4rem;
            font-weight: normal;
            line-height: 91.6%;
        }
    }
`
export const StyledPhotos = styled.div`
    display: grid;
    grid-template-areas:
        ". a b"
        "c d ."
        ". e .";
    margin-top: 2em;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        cursor: pointer;
    }

    img:nth-of-type(1) {
        grid-area: a;
    }
    img:nth-of-type(2) {
        grid-area: b;
    }
    img:nth-of-type(3) {
        grid-area: c;
    }
    img:nth-of-type(4) {
        grid-area: d;
    }
    img:nth-of-type(5) {
        grid-area: e;
    }

    @media only screen and (min-width: 900px) {
        margin-top: -5em;
        z-index: 1;
    }
`
export const StyledRegister = styled.section`
    background: #B2DD9E;

    h3 {
        padding: 1em 1em 1em 10%;
        font-size: 2rem;
        background-color: rgba(0,0,0,.1);
        display: inline-block;
        margin: 0;
        font-weight: normal;
    }
`
export const StyledCols2 = styled.div`
    width: 90%;
    margin: 2em 2em 2em 10%;
    padding-right: 2em;
    padding-bottom: 2em;

    @media only screen and (min-width: 900px) {
        display: flex;
        gap: 3em;
    }
`
export const StyledForm = styled.div`
    label {
        display: block;
        font-size: 1.2rem;
        margin-bottom: .5em;
    }

    input {
        width: 100%;
        border: none;
        padding: 1em;
        margin-bottom: 2em;
    }

    button {
        background: black;
        border: none;
        padding: .8em;
        width: 100%;
        color: white;
        text-transform: uppercase;
        font-family: 'Bebas Neue';
        font-size: 1.3rem;
        cursor: pointer;
    }
`
export const StyledFormEl = styled.div`
    @media only screen and (min-width: 900px) {
        flex-basis: 0;
        flex-grow: 1;

        input {
            padding: 1.5em;
        }
    }
`
export const StyledInfo = styled.div`
    margin-top: 3em;
    width: 50%;

    ul li {
        padding: .5em;
        border-bottom: 1px solid rgba(0,0,0,.2);
        display: block;
        border-radius: .2em;
        font-family: 'Montserrat';
        font-size: .9rem;
    }

    a {
        color: black;
    }

    @media only screen and (min-width: 900px) {
        margin-top: 2em;
        flex-basis: 0;
        flex-grow: 1;
    }
`