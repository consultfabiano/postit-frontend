import Image from 'next/image'
import styled from 'styled-components'

const StyledFormSpace = styled.div`

`   
function FormSpace () {
    return (
        <StyledFormSpace>
            <Image src='/logo.svg' width='1300' height='63'/>
        </StyledFormSpace>
    )
}

export default FormSpace