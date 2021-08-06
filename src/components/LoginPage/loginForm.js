import styled from "styled-components";

import Input from '../Inputs/input'
import Button from '../Buttons/button'

const StyledForm = styled.form`
margin-top 15px;
display: flex;
flex-direction: column;
align-items: center;

`

const StyledText = styled.a`
margin-top 15px;
font-size: 14px;
color: white;

`

function LoginForm () {
    return (
        <StyledForm>
            <Input type='email' placeholder='E-mail' required /> 
            <Input type='password' placeholder='Senha' required />
            <Button type='submit'>Entrar</Button>
            <StyledText href="#">Não possui conta? Clique aqui</StyledText> 

        </StyledForm>
    )
}

export default LoginForm