import styled from "styled-components";

import BackgroundImage from "../src/components/backgroundImage";

const StyledHomePage = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
       
`

function HomePage () {
    return (
        <BackgroundImage>
            <StyledHomePage>
            Hello word
            </StyledHomePage>
        </BackgroundImage>
    )
}

export default HomePage