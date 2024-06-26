import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://localhost:${import.meta.env.PORT ?? 8080}/`
    })
}