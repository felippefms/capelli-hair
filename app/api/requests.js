import { instance } from "./api";
import StorageService from "./storage";
import Cookies from 'js-cookie';

{/* FAZER LOGIN */}

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

{/* CRIAR CONTA */}

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

{/* PEGAR TODOS OS USUÁRIOS (ADMIN) */}

export function GetAllUsers(callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
        instance.get('/admin/users', {
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

{/* DELETAR USUÁRIO (ADMIN) */}

export function DeleteUser(user, callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
        instance.delete(`/admin/user/${user}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                const deleteMsg = `o Usuário ${user.id} foi excluido !`
                callback(deleteMsg);
            })
            .catch(() => {
                console.log();
            });
    }
};

{/* PEGAR A LISTA DE CATEGORIAS */}

export function CategoryList(callback) {
    instance.get('/client/categoria')
        .then((response) => {
            const categoryList = response.data
            callback(categoryList);
        })
        .catch(() => {
            console.log();
        });
};

{/* PEGAR UMA CATEGORIA POR ID */}

export function CategoryById(id, callback) {
    instance.get(`/client/categoria/${id}`)
        .then((response) => {
            const category = response.data
            callback(category);
        })
        .catch(() => {
            console.log();
        });
};

{/* PEGAR UMA CATEGORIA PELO NOME */}

export function CategoryByName(nome, callback) {
    instance.get(`/client/buscar-por-nome/categoria/${nome}`)
        .then((response) => {
            const category = response.data
            callback(category);
        })
        .catch(() => {
            console.log();
        });
};

{/* PEGAR TODOS OS PRODUTOS DE UMA CATEGORIA PELO ID */}

export async function ProductsByCategoryId(id, callback) {
    instance.get(`/client/produto/lista-produtos-por-categoria/${id}`)
        .then((response) => {
            const products = response.data
            callback(products);
        })
        .catch(() => {
            console.log();
        });
};

{/* PEGAR TODOS OS PRODUTOS DE UMA CATEGORIA PELO NOME */}

export async function ProductsByCategoryName(nome, callback) {
    instance.get(`/client/produto/lista-produtos-por-nomeCategoria/${nome}`)
        .then((response) => {
            const products = response.data
            callback(products);
        })
        .catch(() => {
            console.log();
        });
};

{/* CRIAR CATEGORIA (ADMIN) */}

export function CreateCategory(callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
        instance.post('/admin/categoria', {
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                // const usersList = response.data
                // callback(usersList);
            })
            .catch(() => {
                console.log();
            });
    }
};

{/* DELETAR CATEGORIA */}

export function DeleteCategory(category, callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
        instance.delete(`/admin/categoria/${category}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                const deleteMsg = `A categoria ${category.id} foi excluida !`
                callback(deleteMsg);
            })
            .catch(() => {
                console.log();
            });
    }
};

{/* PEGAR A LISTA DE TODOS OS PRODUTOS */}

export function ProductsList(callback) {
    instance.get('/client/produto')
        .then((response) => {
            const productsList = response.data
            callback(productsList);
        })
        .catch(() => {
            console.log();
        });
};

{/* PEGAR UM PRODUTO PELO ID */}

export function ProductById(id, callback) {
    instance.get(`/client/produto/${id}`)
    .then((response) => {
        const product = response.data
        callback(product);
    })
    .catch(() => {
        console.log();
    });
}

{/* CRIAR UM PRODUTO (ADMIN) */}

export function CreateProduct(name, description, corId, price, estoque) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {

        const produto = {
            name,
            description,
            corId,
            price,
            estoque
        }

        instance.post('/admin/produto', produto, {
            headers: {
                Authorization: token
            }
        })
            .catch(() => {
                console.log();
            });
    }
};

{/* DELETAR UM PRODUTO (ADMIN) */}

export function DeleteProduct(product, callback) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {
        instance.delete(`/admin/produto/${product}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                const deleteMsg = `O produto ${product.id} foi excluido !`
                callback(deleteMsg);
            })
            .catch(() => {
                console.log();
            });
    }
};

{/* HEADER DE AUTENTICAÇÃO PARA USAR NAS REQUESTS */}

export function CreateAuthorizationHeader(){
    const token = Cookies.get('token')
    return `Bearer ${token}`;
};