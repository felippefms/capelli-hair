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
            const id = response.data.id;

            if (user === 'ADMIN') {
                StorageService.saveUser(user);    
            }
            StorageService.saveToken(bearerToken);
            StorageService.saveId(id);

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

{/* LOGIN GOOGLE */}

export function GoogleSignUp(name, email, picture){

    const userData = {
        name,
        email,
        picture
    };

    instance.post('/google', userData)
        .then((response) => {
            const bearerToken = response.data.jwtToken;
            const id = response.data.id;

            Cookies.remove('token','user');

            StorageService.saveToken(bearerToken);
            StorageService.saveId(id);

            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
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

{/* DELETAR CATEGORIA (ADMIN) */}

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

export function CreateProduct(name, description, categoriaId, price, estoque) {
    const token = CreateAuthorizationHeader();

    if (StorageService.isAdminLoggedIn() === true) {

        const produto = {
            name,
            description,
            categoriaId,
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

 {/* PEGAR OS BOTÕES DE TAMANHO DOS PRODUTOS */}

 export function getSizeButtons(callback) {
    instance.get('/tamanho')
    .then((response)=>{
        const sizes = response.data;
        callback(sizes);
    })
    .catch(()=>{
        console.log();
    })
 }

 {/* PEGAR OS BOTÕES DE VOLUME DOS PRODUTOS*/}

 export function getVolumeButtons(callback) {
    instance.get('/volume')
    .then((response)=>{
        const volumes = response.data;
        callback(volumes);
    })
    .catch(()=>{
        console.log();
    })
 }

  {/* PEGAR OS BOTÕES DE TÉCNICA DOS PRODUTOS */}

  export function getTecnicaButtons(callback) {
    instance.get('/tecnica')
    .then((response)=>{
        const tecnicas = response.data;
        callback(tecnicas);
    })
    .catch(()=>{
        console.log();
    })
 }

   {/* CRIAR OS BOTÕES DOS PRODUTOS */}

   export function createProductButtons(type, botaoValue) {
    const token = CreateAuthorizationHeader();
    
    if (StorageService.isAdminLoggedIn() === true) {
        if (type === 'volume') {
            instance.post('/admin/volume', { params : {gramas : botaoValue }},{
                headers: {
                    Authorization: token
                }
            })
            .then((response)=>{
    
            })
            .catch(()=>{
                console.log();
            })
        } else if (type === 'tecnica') {
            instance.post(`/admin/tecnica?nome=${botaoValue}`)
            .then((response)=>{
    
            })
            .catch(()=>{
                console.log();
            })
        } else if (type === 'tamanho') {
            instance.post(`/admin/tamanho?cm=${botaoValue}`)
            .then((response)=>{
    
            })
            .catch(()=>{
                console.log();
            })
        }
    }
 }

 {/* ADICIONAR UM PRODUTO AO CARRINHO (EM PROGRESSO) */}

export function AddProductChart(produtoFinalizado, callback) {
    const token = CreateAuthorizationHeader();
    const id = Cookies.get('id');

    if (StorageService.isUserLoggedIn() === true) {
        instance.post(`/api/carrinho/carrinhos/${id}`,produtoFinalizado ,{
            headers: {
                Authorization: token
            }
        })
        .then((response)=>{
            callback(response.data);
        })
        .catch(()=>{
            console.log();
        })
    }
}

 {/* RETORNA O CARRINHO DO USUÁRIO */}

 export function getChart(callback) {
    const token = CreateAuthorizationHeader();
    const id = Cookies.get('id');

    if (StorageService.isUserLoggedIn() === true) {
        instance.get(`/api/carrinho/carrinhos/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response)=>{
            const carrinho = response.data;
            callback(carrinho);
        })
        .catch(()=>{
            console.log();
        })
    }
}

 {/* RETORNA O VALOR TOTAL DO CARRINHO DO USUÁRIO */}

 export function getChartTotalValue(callback) {
    const token = CreateAuthorizationHeader();
    const id = Cookies.get('id');

    if (StorageService.isUserLoggedIn() === true) {
        instance.get(`/api/carrinho/carrinhos/calcula-valor-total/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response)=>{
            const totalValue = response.data;
            callback(totalValue);
        })
        .catch(()=>{
            console.log();
        })
    }
}

{/* EXLCUI UM PRODUTO DO CARRINHO DO USUÁRIO (EM PROGRESSO) */}

export function deleteChartItem(produtoId, callback) {
    const token = CreateAuthorizationHeader();
    const idUser = Cookies.get('id');

    if (StorageService.isUserLoggedIn() === true) {
        instance.delete(`/api/carrinho/carrinhos/${produtoId}/${idUser}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response)=>{
            callback(response.data);
        })
        .catch(()=>{
            console.log();
        })
    }
}

{/* HEADER DE AUTENTICAÇÃO PARA USAR NAS REQUESTS */}

export function CreateAuthorizationHeader(){
    const token = Cookies.get('token')
    return `Bearer ${token}`;
};