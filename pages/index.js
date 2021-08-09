import styled from "styled-components";

import BackgroundImage from "../src/components/backgroundImage";
import FormSpace from "../src/components/LoginPage/formSpace";


const StyledHomePage = styled.div`
    width: 100%;
    height: 600px;
    background-image: linear-gradient(to right, white, black, white);       
`

function HomePage () {
    return (
            <StyledHomePage>
            <FormSpace />
            </StyledHomePage>
        
    )
}

export default HomePage