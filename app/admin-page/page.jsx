'use client'

import { useState } from 'react'
import { GetAllUsers } from '../api/requests'

export default function AdminPage() {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = () => {
        setIsLoading(true);

        GetAllUsers((usersList) => {
            setUsersList(usersList);
            setIsLoading(false);
        });
    };

    return (
        <div className='flex flex-col justify-center text-center'>
            <div>
                <p>voce está no painel de admin!</p>
            </div>
            <div className='flex flex-col'>
                <div>
                    <button onClick={fetchUsers} className='bg-slate-700 p-4 my-8'>ver lista de usuários</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Lista de Usuários</p>
                    <ul>
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            usersList.map((user) => (
                                <div className='flex' key={user.id}>
                                    <li>{user.id} - {user.email} - {user.role}</li>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}