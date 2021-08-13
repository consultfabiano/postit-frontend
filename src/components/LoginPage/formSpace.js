import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

import Image from 'next/image'
import styled from 'styled-components'
import axios from 'axios'

import Form from './form'

const { NEXT_PUBLIC_API_URL } = process.env

const StyledFormSpace = styled.div`
    margin-top: -28px;
`
function FormSpace () {
    const router = useRouter()
    const [cookie, setCookie] = useCookies(['authorization'])
    const [formState, setFormState] = useState(true)
    const [error, setError]= useState()

    const handleLogin = ({ email, login }) => {
        setError(false)
        console.log({email, login})
    }
    const handleRegister = async ({ email, password, firstName, lastName }) => {
        setError(false)
        try{
            const { data } = await axios.post( `${NEXT_PUBLIC_API_URL}/user/create`, {
                email, password, firstName, lastName
            })
            handleAuth(data.authorization)
        } catch (err) {
            console.error(err)
            console.error(err.message)
        }
    }

    const handleAuth = (token) => {
        setCookie('authorization', token)
        router.push('/dashboard')
    }


    return (
        <StyledFormSpace>
            <Image src='/logo.svg' width='1300' height='63' />
            {
                formState ?
            
            <Form 
                onSubmit={handleLogin}
                submitButtonText='Entrar'
                linkText='Não possui conta? Clique aqui!'
                onLinkClick= {()=> setFormState (false)}
                error={ error }
            /> :

            <Form 
                onSubmit={handleRegister}
                submitButtonText='Cadastrar'
                linkText='Já possui conta? Clique aqui!'
                onLinkClick= {()=> setFormState (true)}
                isRegister
                error={ error }
            />
            }
        </StyledFormSpace>
    )
}

export default FormSpace