
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: grid;
    place-items: center;
    font-family: 'Poppins';
`
export const StyledImg = styled.img`
    width: 100%;
    border-radius: .2rem;

    @media only screen and (min-width: 550px) {
        max-width: 14rem;
        margin-right: 1rem;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;

    @media only screen and (min-width: 550px) {
        display: flex;
        align-items: end;
    }
`
export const StyledCard = styled.div`
    background: #383A45;
    margin: 1rem;
    padding: 1rem;
    border-radius: .4rem;
    max-width: 270px;

    @media only screen and (min-width: 550px) {
        max-width: 600px;
    }
`
export const StyledTitle = styled.p`
    color: white;
    font-size: 1.2rem;
    line-height: 119.7%;
`
export const StyledDescription = styled.p`
    color: #8D91A6;
    font-size: .8rem;
`
export const StyledIcon = styled.img`
    max-width: .8rem;
`
