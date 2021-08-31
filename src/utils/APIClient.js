import axios from 'axios'

const { NEXT_PUBLIC_API_URL } = process.env

const APIClient = (authorization = '') => {
    const defautOptions = {
        headers: {
            authorization
        }
    }

    return {
        get:(url, options = {}) => axios.get(`${NEXT_PUBLIC_API_URL}${url}` , {...defautOptions, ...options}),
        post:(url, data, options = {}) => axios.post(`${NEXT_PUBLIC_API_URL}${url}` ,data ,{...defautOptions, ...options}),
        put:(url, data, options = {}) => axios.put(`${NEXT_PUBLIC_API_URL}${url}` ,data  ,{...defautOptions, ...options}),
        delete:(url, options = {}) => axios.delete(`${NEXT_PUBLIC_API_URL}${url}` , {...defautOptions, ...options})
    }   
}

export default APIClient