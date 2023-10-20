import { instance } from "./api";
import StorageService from "./storage";

export const LoginHandler = (email, password) => {
    const userData = {
        email,
        password,
    };

    instance.post('/authenticate', userData)
        .then((response) => {
            // coleta o token de dentro do body da response
            const bearerToken = response.data.jwtToken;
            // guarda o token no localstorage
            StorageService.saveToken(bearerToken);
            window.location.href = '/'
        })
        .catch(() => {
            console.log(Response.error);
        });
};

export const SignUpHandler = (fullName, phone, email, password) => {

    const userData = {
        fullName,
        phone,
        email,
        password,
    };

    instance.post('api/user', userData)
        .then(() => {
            StorageService.saveToken(token);
        })
        .catch(() => {
        });
};

export const createAuthorizationHeader = () => {
    let authHeader
}