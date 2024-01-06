'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import StorageService from "./storage"

const PrivateRoute = ( {children} ) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    const { push } = useRouter();

    useEffect(()=>{
        const isUserAuthenticated = StorageService.isAdminLoggedIn();
        setIsAuth(isUserAuthenticated);
        setIsCheck(true);
        if (!isUserAuthenticated) {
            push('/');
        }
    },[push]);

    return(
        isAuth && isCheck ? <>{children}</> : null
    )
}

export default PrivateRoute;