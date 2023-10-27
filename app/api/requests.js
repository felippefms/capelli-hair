import { instance } from "./api";
import StorageService from "./storage";
import Cookies from 'js-cookie';

export function HandleLogin (email, password){
    const userData = {
        email,
        password,
    };

    instance.post('/login', userData)
        .then((response) => {
            const bearerToken = response.data.jwtToken;
            const user = response.data.role;

            StorageService.saveUser(user);
            StorageService.saveToken(bearerToken);

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
            Cookies.remove('token','user');

            Cookies.set('token', bearerToken, { expires: 5 });
            Cookies.set('user', userType, { expires: 5 });

            window.location.href = '/'
    })
        .catch(() => {
            console.log();
        });
};

export function GetAllUsers(callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
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
    }
};

export function CreateAuthorizationHeader(){
    const token = Cookies.get('token')
    return `Bearer ${token}`;
};