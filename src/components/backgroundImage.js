import styled from "styled-components";

const StyledBackground = styled.div`
 height: 90vh;
 background-image: url('/background.jpg');
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
`
function BackgroundImage ({ clidren }) {
    return (
        <StyledBackground>
            { clidren }
        </StyledBackground>
    )
}

export default BackgroundImage