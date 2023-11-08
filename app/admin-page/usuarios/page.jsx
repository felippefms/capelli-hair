'use client'

import Link from 'next/link'
import { useState } from 'react'

import { GetAllUsers } from '../../api/requests'
import { DeleteUser } from '../../api/requests'
import ConfirmModal from '../../../components/ConfirmModal'

export default function PaginaDeUsuarios(){
    const [isLoading, setIsLoading] = useState(false);

    const [confirmModal, setConfirmModal] = useState(false);
    const [message, setMessage] = useState('');
    const [execFunction, setExecFunction] = useState();
    
    const [usersList, setUsersList] = useState([]);

    const fetchUsers = () => {
        setIsLoading(true);

        GetAllUsers((usersList) => {
            setUsersList(usersList);
            setIsLoading(false);
        });
    };

    const deleteUser = (user) => {
        setMessage(`Deseja remover o usuário?`);
        setConfirmModal(true);
        setExecFunction(() => () => DeleteUser(user.id));
    }

    return(
        <div className='flex flex-col w-screen h-screen justify-center text-center bg-[#6b6b6b]'>
            <div>
                <Link href={'/admin-page'}>
                    <button className='bg-[#fff]'>Voltar</button>
                </Link>
            </div>
            
            {/* LISTA DE USUÁRIOS DO SISTEMA */}
            <div className='flex flex-col'>
                <div>
                    <button onClick={fetchUsers} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>ver lista de usuários</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Lista de Usuários</p>
                    <ul>
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            usersList.map((user) => (
                                <div className='flex items-center' key={user.id}>
                                    <li>{user.id} - {user.email} - {user.role}</li> <button onClick={() => deleteUser(user)} className='ml-3 my-1 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            </div>

            {/* MODAL DE COMFIRMAÇÃO */}
            {confirmModal ? (
                <ConfirmModal setConfirmModal={setConfirmModal} message={message} ExecFunction={execFunction}></ConfirmModal>
            ) : null}
        </div>
    )
}