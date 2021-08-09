import styled from 'styled-components'
import Image from 'next/image'

const StyledInfoBar = styled.div`
background-color: ${({theme})=> theme.colors.primary};
height: 70px;
width: 100%;

`

function InfoBar () {
    return (
        <StyledInfoBar>
            <a href="/"><Image src="/logo.svg" width="145" height="63"/></a>
        </StyledInfoBar>
    )
}

export default InfoBar