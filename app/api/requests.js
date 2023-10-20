import { instance } from "./api";
import StorageService from "./storage";

export const HandleLogin = (email, password) => {
    const userData = {
        email,
        password,
    };

    instance.post('/login', userData)
        .then((response) => {
            // coleta o token de dentro do body da response
            const bearerToken = response.data.jwtToken;
            // guarda o token no localstorage
            StorageService.saveToken(bearerToken);
            if(response.data.role === "ADMIN"){
                window.location.href = '/admin-page'
            } else {
                window.location.href = '/'
            }
        })
        .catch(() => {
            console.log(Response.error);
        });
};

export const HandleSignUp = (fullName, phone, email, password) => {

    const userData = {
        fullName,
        phone,
        email,
        password,
    };

    instance.post('/register', userData)
        .then(() => {
            StorageService.saveToken(token);
            window.location.href = '/'
        })
        .catch(() => {
            console.log(Response.error);
        });
};

export const createAuthorizationHeader = () => {
    let authHeader
}