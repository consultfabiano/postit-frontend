import Image from 'next/image'
import styled from 'styled-components'

import LoginForm from './loginForm'

const StyledFormSpace = styled.div`

`   
function FormSpace () {
    return (
        <StyledFormSpace>
            <Image src='/logo.svg' width='1300' height='63' />
            <LoginForm />
                        
        </StyledFormSpace>
    )
}

export default FormSpace