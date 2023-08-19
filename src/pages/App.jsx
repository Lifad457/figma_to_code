import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { 
  StyledContainer,
  StyledImg,
  StyledDivLinks,
  StyledLink
 } from '../styles/app.css'
import GlobalStyle from '../styles/global-app.css'

function App() {

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <div>
            <StyledImg src={viteLogo} alt="Vite logo" />
            <StyledImg src={reactLogo} alt="React logo" />
        </div>
        <h1>Figma to Code : </h1>
        <StyledDivLinks>
          <StyledLink to='/simple-card' relative='path'>
            Simple Card
          </StyledLink>
          <StyledLink to='/simple-landing-page' relative='path'>
            Simple Landing Page
          </StyledLink>
          <StyledLink to='/data-analytics' relative='path'>
            Data Analytics Dashboard
          </StyledLink>
          <StyledLink to='/car-sales' relative='path'>
            Car Sales Site
          </StyledLink>
          <StyledLink to='/drone-site' relative='path'>
            Drone Site
          </StyledLink>
        </StyledDivLinks>
      </StyledContainer>
    </>
  )
}

export default App
