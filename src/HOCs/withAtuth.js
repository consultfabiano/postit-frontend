/**Autenticação e HOC
continuar do min 13 */

import { useCookies } from 'react-cookie'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

const LOGIN_REDIRECT = '/'

const withAuth = (WrappedComponent) => {
    const AuthComponent = props => {

        const newProps = {}
        const [cookies] = useCookies(['authorization'])
        
        console.log(cookies)

        if (cookies ['authorization']){
            newProps.user = jwt_decode(cookies['authorization'])
            newProps.authorization = cookies['authorization']
        } 

        if (process.browser && !newProps.user) {
            const router = useRouter()
            router.push(LOGIN_REDIRECT)
        }

        return (
            <WrappedComponent {...props} {...newProps} />
        )
    }

    return AuthComponent
}

export default withAuth