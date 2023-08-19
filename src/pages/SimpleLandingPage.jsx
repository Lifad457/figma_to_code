import { 
    StyledLink,
    StyledLeftCol,
    StyledContent,
    StyledRightCol,
    StyledForm
} from "../styles/simple-landing-page.css"
import GlobalStyle from "../styles/global-slp.css"

export default function SimpleLandingPage() {

    return (
        <>
            <GlobalStyle />
            <StyledLink to="/">
                <StyledLeftCol>
                    <StyledContent>
                        <h1>
                            Got Marketing?<br/>
                            Advance your<br/>
                            Business Insight.
                        </h1>
                        <p>
                            Fill out the form and receive our<br/>
                            award winning newsletter.
                        </p>
                    </StyledContent>
                </StyledLeftCol>
            </StyledLink>

            <StyledRightCol>
                <StyledForm>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div>
                        <button>Sign me up</button>
                    </div>
                </StyledForm>
            </StyledRightCol>  
        </>
    )
}