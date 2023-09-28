import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    Headers: {
        "Content-Type": "aplication"
    }
})

export default instance