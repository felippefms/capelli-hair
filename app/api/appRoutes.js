export const APP_ROUTES = {
    adminPage: '/admin-page',
    adminPageUsers: '/admin-page/usuarios',
    adminPageAtegories: '/admin-page/categorias',
    adminPageProducts: '/admin-page/produtos',
    adminPageButtonsProjects: '/admin-page/botoesprodutos',
}

export const checkIsPrivateRoute = (asPath) => {
    const appPrivateRoutes = Object.values(APP_ROUTES);

    return !appPrivateRoutes.includes(asPath)
}