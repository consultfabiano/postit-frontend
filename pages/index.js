import styled from "styled-components";

import BackgroundImage from "../src/components/backgroundImage";
import FormSpace from "../src/components/LoginPage/formSpace";


const StyledHomePage = styled.div`
    width: 100%;
    height: 600px;
          
`

function HomePage () {
    return (
        <BackgroundImage>
            <StyledHomePage>
            <FormSpace />
            </StyledHomePage>
        </BackgroundImage>
        
    )
}

export default HomePage