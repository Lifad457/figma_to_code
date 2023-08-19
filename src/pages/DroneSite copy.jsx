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
    StyledComment,
    StyledFootage,
    StyledPhotos,
    StyledSignature,
    StyledRegister,
    StyledForm,
    StyledLink,
    StyledUL,
    StyledLI
 } from "../styles/drone.css"

export default function DroneSite() {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <StyledIntro>
                    <StyledMenu isVisible={visible}>
                        <StyledUL>
                            <StyledLI>
                                <img 
                                    src={exit} 
                                    alt="close-menu" 
                                    onClick={() => setVisible(!visible)} 
                                />
                            </StyledLI>
                            <StyledLI>
                                <StyledLink to='.' >HOME</StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink to='.' >RACES</StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink to='.' >REGISTER</StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink to='.' >FAQ</StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink to='.' >CONTACT</StyledLink>
                            </StyledLI>
                        </StyledUL>
                    </StyledMenu>
                    <StyledLeftCol>
                        <StyledLogo>
                            <p>DRONE.SERIES</p>
                        </StyledLogo>
                        <StyledIntroContent>
                            <div>
                                <h1>DRONE RACING GONE WILD</h1>
                                <p>
                                    Register now for the 
                                    ultimate drone racing 
                                    event. 5 mile courses and 
                                    over $10 million in prize 
                                    money!
                                </p>
                            </div>
                            <div>
                                <img src={blur} className="blur" alt="drone-blur" />
                                <img src={drone} alt="drone" />
                            </div>
                        </StyledIntroContent>
                    </StyledLeftCol>
                    <StyledRightCol>
                        <img 
                            src={burgerMenu} 
                            alt="burger-menu" 
                            onClick={() => setVisible(!visible)} 
                        />
                    </StyledRightCol>
                </StyledIntro>
                
                <StyledComment>
                    <h1>“the stadium is simply unreal.
                         scrimba hall will make this the 
                         best drone racing event ever, 
                         period.”
                    </h1>
                    <StyledSignature>
                        <hr/><p>anonymous guy</p>
                    </StyledSignature>
                </StyledComment>

                <StyledFootage>
                    <h1>last year’s footage</h1>
                    <p>With over 5,000 participants, 2020
                         featured some of the most 
                         amazing drone races from the 
                         most competitive field ever seen.
                        <br/><br/>
                       in 2021, we’re about to double the
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
                
                <StyledRegister>
                    <h1>register for the event!</h1>
                    <StyledForm>
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" />
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" id="email" />
                        <button>REGISTER NOW!</button>
                    </StyledForm>
                    <p>1-555-555-3298</p>
                    <hr/>
                    <p>some@email.com</p>
                    <hr/>
                </StyledRegister>
            </StyledContainer>
        </>
    )
}