
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledContainer = styled.div`
    color: skyblue;
    padding: 2rem;
    text-align: center;

    a {
        text-decoration: none;
        font-size: 2rem;
        color: beige;
    }
`
export const StyledImg = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
            animation: logo-spin infinite 20s linear;
        }
    }
`
export const StyledDivLinks = styled.div`
    display: grid;
`
export const StyledLink = styled(Link)`
    display: grid;
    margin: 0.7rem;
`