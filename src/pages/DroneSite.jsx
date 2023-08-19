import { useState } from "react"
import burgerMenu from "../assets/drone/menu.svg"
import drone from "../assets/drone/drone.png"
import blur from "../assets/drone/blur.png"
import footage1 from "../assets/drone/footage-1.jpg"
import footage2 from "../assets/drone/footage-2.jpg"
import footage3 from "../assets/drone/footage-3.jpg"
import footage4 from "../assets/drone/footage-4.jpg"
import footage5 from "../assets/drone/footage-5.jpg"
import exit from "../assets/drone/exit.svg"
import GlobalStyle from "../styles/global-drone.css"
import { 
    StyledContainer,
    StyledMenu,
    StyledLogo,
    StyledIntro,
    StyledLeftCol,
    StyledRightCol,
    StyledIntroContent,
    StyledQuote,
    StyledFootage,
    StyledPhotos,
    StyledCite,
    StyledRegister,
    StyledForm,
    StyledUL,
    StyledLI,
    StyledBgImg,
    StyledExitImg,
    StyledGallery,
    StyledCols2,
    StyledFormEl,
    StyledInfo,
    StyledType,
    StyledDroneContainer
 } from "../styles/drone.css"

export default function DroneSite() {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <GlobalStyle />
                
            <StyledIntro>
                <StyledLeftCol>
                    
                </StyledLeftCol>

                <StyledRightCol>
                    
                </StyledRightCol>
            </StyledIntro>

            <StyledContainer>
                <StyledMenu isVisible={visible}>
                    <StyledLogo href="#"><span>DRONE</span>.SERIES</StyledLogo>
                    
                    <StyledBgImg 
                        src={burgerMenu} 
                        alt="burger-menu" 
                        onClick={() => setVisible(!visible)} 
                    />
                    
                    <StyledUL isVisible={visible}>
                        <StyledLI>
                            <StyledExitImg
                                src={exit} 
                                alt="close-menu" 
                                onClick={() => setVisible(!visible)} 
                            />
                        </StyledLI>
                        <StyledLI>
                            <a href='#' >HOME</a>
                        </StyledLI>
                        <StyledLI>
                            <a href='#' >RACES</a>
                        </StyledLI>
                        <StyledLI>
                            <a href='#' >REGISTER</a>
                        </StyledLI>
                        <StyledLI>
                            <a href='#' >FAQ</a>
                        </StyledLI>
                        <StyledLI>
                            <a href='#' >CONTACT</a>
                        </StyledLI>
                    </StyledUL>
                </StyledMenu>

                <main>
                    <StyledIntroContent>
                        <StyledType>
                            <h1>DRONE RACING GONE WILD</h1>
                            <p>
                                Register now for the 
                                ultimate drone racing 
                                event. 5 mile courses and 
                                over $10 million in prize 
                                money!
                            </p>
                        </StyledType>
                        <StyledDroneContainer>
                            <img src={blur} className="blur" alt="drone-blur" />
                            <img src={drone} className="drone" alt="drone" />
                        </StyledDroneContainer>
                    </StyledIntroContent>
                </main>
            </StyledContainer>

            <StyledQuote>
                <blockquote>“the stadium is simply unreal.
                        scrimba hall will make this the 
                        best drone racing event ever, 
                        period.”
                </blockquote>
                <StyledCite>
                    anonymous guy
                </StyledCite>
            </StyledQuote>
            
            <StyledGallery>
                <StyledFootage>
                    <h2>last year’s footage</h2>
                    <p>With over 5,000 participants, 2020
                        featured some of the most 
                        amazing drone races from the 
                        most competitive field ever seen.
                    </p>
                    <p>In 2021, we’re about to double the
                        excitement with 10,000 race 
                        participants and 100,000 fans!
                    </p>
                </StyledFootage>
                <StyledPhotos>
                    <img src={footage1} alt="footage1" className="footage1" />
                    <img src={footage2} alt="footage2" className="footage2" />
                    <img src={footage3} alt="footage3" className="footage3" />
                    <img src={footage4} alt="footage4" className="footage4" />
                    <img src={footage5} alt="footage5" className="footage5" />
                </StyledPhotos>
            </StyledGallery>

            <StyledRegister>
                <h3>register for the event!</h3>
                <StyledCols2>
                    <StyledForm>
                        <StyledFormEl>
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" />
                        </StyledFormEl>
                        <StyledFormEl>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" />
                        </StyledFormEl>
                        <button>REGISTER NOW!</button>
                    </StyledForm>
                    <StyledInfo>
                        <ul>
                            <li>1-555-555-3298</li>
                            <li>some@email.com</li>
                        </ul>
                    </StyledInfo>
                </StyledCols2>
            </StyledRegister>

        </>
    )
}