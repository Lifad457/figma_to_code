import { useState } from 'react'
import {
    StyledMenu,
    StyledNav,
    StyleArrowImg,
    StyledUL,
    StyledLI,
    StyledLink,
    StyledContainer,
    StyledSection,
    StyledHeader,
    StyledImgMenu,
    StyledLogo,
    StyledRightCol,
    StyledContent
} from '../styles/data-analytics.css'
import GlobalStyle from '../styles/global-data-analytics.css'
import arrowLeft from '../assets/arrow-left.png'
import menuIcon from '../assets/menu.png'

export default function DataAnalytics() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <StyledMenu>
                    <StyledNav isVisible={visible} >
                        <StyleArrowImg 
                            src={arrowLeft} 
                            alt='arrow-left' 
                            onClick={() => setVisible(!visible) }
                        />
                        <StyledUL>
                            <StyledLI><StyledLink to='.' active>Home</StyledLink></StyledLI>
                            <StyledLI><StyledLink to='.'>MY STATS</StyledLink></StyledLI>
                            <StyledLI><StyledLink to='.'>MEMBERS</StyledLink></StyledLI>
                            <StyledLI><StyledLink to='.'>SETTINGS</StyledLink></StyledLI>
                            <StyledLI><StyledLink to='.'>HELP</StyledLink></StyledLI>
                        </StyledUL>
                    </StyledNav>
                </StyledMenu>
                <StyledSection>
                    <StyledHeader>
                        <StyledImgMenu 
                            src={menuIcon} 
                            alt='menu-icon' 
                            onClick={() => setVisible(!visible) }
                        />
                        <StyledLogo>LOGO</StyledLogo>
                    </StyledHeader>
                    <StyledRightCol>
                        <StyledContent>
                            <h1>DATA<br/>ANALYTICS</h1>
                            <p>Making sense of<br/>your traffic.</p>
                            <button>&rarr; GO TO MY STATS</button>
                        </StyledContent>
                    </StyledRightCol>
                </StyledSection>
            </StyledContainer>
        </>
    )
}