import GlobalStyle from "../styles/global-car-sales.css"
import {
        StyledContainer,
        StyledHeader,
        StyledHeadings,
        StyledOptions,
        StyledInput,
        StyledMenuImg,
        StyledFilter,
        StyledChkBox,
        StyledMain,
        StyledLabels,
        StyledLblDetails,
        StyledLblLocation,
        StyledLblPrice,
        StyledLblAction,
        StyledCars,
        StyledCarName,
        StyledCarLocation,
        StyledCols,
        StyledCarPrice,
        StyledCarHeart,
        StyledIcons
    } from "../styles/car-sales.css"
import menuImg from "../assets/menu.svg"
import { useState } from "react"
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export default function CarSales() {
    const [menu, setMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(false)

    function closeMenu(e) {
        const panel = document.querySelector('#filter-div');
        const menuImage = document.querySelector("#menu-img");
        if (!panel.contains(e.target) && !menuImage.contains(e.target)) {
            setMenu(false);
        }
    }

    return (
        <>
            <GlobalStyle />
            <StyledContainer onMouseUp={ (e) => closeMenu(e) }>
                <StyledHeader>
                    <StyledHeadings>
                        <h1>Available Cars</h1>
                        <p>There are 15 cars that match your criteria</p>
                    </StyledHeadings>
                    <StyledOptions>
                        <StyledIcons>
                            <StyledInput></StyledInput>
                            <StyledMenuImg 
                                id="menu-img"
                                src={menuImg} 
                                onClick={ () => setMenu(!menu) }
                            />
                        </StyledIcons>
                        <StyledFilter filter={menu ? menu : false} id="filter-div">
                            <StyledChkBox>
                                <input type="checkbox" id="new" />
                                <label htmlFor="new">New cars</label>
                            </StyledChkBox>
                            <StyledChkBox>
                                <input type="checkbox" id="used" />
                                <label htmlFor="used">Used cars</label>
                            </StyledChkBox>
                            <StyledChkBox>
                                <input type="checkbox" id="dealer" />
                                <label htmlFor="dealer">Dealership</label>
                            </StyledChkBox>
                            <StyledChkBox>
                                <input type="checkbox" id="owner" />
                                <label htmlFor="owner">For sale by owner</label>
                            </StyledChkBox>
                        </StyledFilter>
                    </StyledOptions>
                </StyledHeader>
                <StyledMain>
                    <StyledLabels>
                        <StyledLblDetails>Car Details</StyledLblDetails>
                        <StyledLblLocation>Location</StyledLblLocation>
                        <StyledLblPrice>Price</StyledLblPrice>
                        <StyledLblAction>Action</StyledLblAction>
                    </StyledLabels>

                    <StyledCars>
                        <StyledCarName>2017 Toyota Highlander V4</StyledCarName>
                        <StyledCarLocation>1944 Scrimba Ln<br/>Youngstown, OH 44481</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$17,400</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                    <StyledCars>
                        <StyledCarName>2012 Toyota Tundra 4x4</StyledCarName>
                        <StyledCarLocation>301 Fantasy Dr<br/>Beverly Hills, CA 90210</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$23,900</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                    <StyledCars>
                        <StyledCarName>2004 Dodge Ram 4x4</StyledCarName>
                        <StyledCarLocation>9104 Falsety Ave<br/>AnonyVille, FL 40440</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$7,998</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                    <StyledCars>
                        <StyledCarName>2021 Tesla Model 3</StyledCarName>
                        <StyledCarLocation>993 Fiscal<br/>St Boulder, CO 93391</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$37,490</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                    <StyledCars>
                        <StyledCarName>2017 Toyota Highlander V4</StyledCarName>
                        <StyledCarLocation>1944 Scrimba Ln<br/>Youngstown, OH 44481</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$17,400</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                    <StyledCars>
                        <StyledCarName>2012 Toyota Tundra 4x4</StyledCarName>
                        <StyledCarLocation>301 Fantasy Dr<br/>Beverly Hills, CA 90210</StyledCarLocation>
                        <StyledCols>
                            <StyledCarPrice>$23,900</StyledCarPrice>
                            <StyledCarHeart 
                                onClick={() => setIsClicked(!isClicked)} 
                                icon={isClicked ? fasHeart : farHeart} 
                            />
                        </StyledCols>
                    </StyledCars>
                </StyledMain>
            </StyledContainer>
        </>
    )
}