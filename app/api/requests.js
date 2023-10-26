import { instance } from "./api";
import StorageService from "./storage";

export function HandleLogin (email, password){
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
            // coleta o user inteiro de dentro do body da response
            const user = response.data;
            // guarda o user no localstorage
            StorageService.saveUser(user);

            if(response.data.role === "ADMIN"){
                window.location.href = '/admin-page'
            } else {
                window.location.href = '/'
            }
        })
        .catch(() => {
            console.log();
        });
};

export function HandleSignUp(fullName, phone, email, password){

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
            console.log();
        });
};

export function GetAllUsers(callback) {
    const token = CreateAuthorizationHeader();

    instance.get('/api/user', {
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            const usersList = response.data
            callback(usersList);
        })
        .catch(() => {
            console.log();
        });
};

export function CreateAuthorizationHeader(){
    const token = StorageService.getToken();

    return `Bearer ${token}`;
};