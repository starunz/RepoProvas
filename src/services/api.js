import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promise = api.post('/sign-up', body);

    return promise;
}

const login = (body) => {
    const promise = api.post('/login', body);
    return promise;
}

export {
    signUp,
    login,
}