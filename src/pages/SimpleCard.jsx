import linkIcon from "../assets/link.png"
import mountainImg from "../assets/mountain.png"
import { 
    StyledContainer, 
    StyledImg, 
    StyledLink, 
    StyledCard, 
    StyledTitle, 
    StyledDescription, 
    StyledIcon } from "../styles/simple-card.css"
import GlobalStyle from "../styles/global-app.css"

export default function SimpleCard() {

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <StyledCard>
                    <StyledLink to="/">
                        <StyledImg src={mountainImg} alt="Mountains" />
                        
                        <div>
                            <StyledTitle>An Above Average Experience</StyledTitle>
                            <StyledDescription>
                                Travel to the premiere mountain tops of New Zealand 
                                with our guided tours. Take in the majestic scenary 
                                and witness beauty.
                            </StyledDescription>
                            
                            <StyledIcon src={linkIcon} alt="link" />
                        </div>
                    </StyledLink>
                </StyledCard>
            </StyledContainer>
        </>
    )
}