'use client'

import Link from "next/link"
import { useState } from "react";

import { CategoryList } from '../../api/requests'
import { DeleteCategory } from '../../api/requests'
import ConfirmModal from '../../../components/ConfirmModal'

export default function PaginaDeCategorias(){
    const [isLoading, setIsLoading] = useState(false);

    const [confirmModal, setConfirmModal] = useState(false);
    const [message, setMessage] = useState('');
    const [execFunction, setExecFunction] = useState();

    const [categoryList, setCategoryList] = useState([]);

    const fetchAllCategories = () => {
        setIsLoading(true);

        CategoryList((categoryList) => {
            setCategoryList(categoryList);
            setIsLoading(false);
        });
    };

    const deleteCategory = (category) => {
        setMessage(`Deseja remover o a categoria?`)
        setConfirmModal(true);
        setExecFunction(() => () => DeleteCategory(category.id));
    }

    return(
        <div className='flex flex-col w-screen h-screen justify-center text-center bg-[#6b6b6b]'>
            <div>
                <Link href={'/admin-page'}>
                    <button className='bg-[#fff]'>Voltar</button>
                </Link>
            </div>

            {/* LISTA DE CATEGORIAS DO SISTEMA */}
            <div className='flex flex-col'>
                <div>
                    <button onClick={fetchAllCategories} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>ver lista de categorias</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Lista de Categorias</p>
                    <ul>
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            categoryList.map((category) => (
                                <div className='flex items-center' key={category.id}>
                                    <li>{category.id} - {category.nome}</li> <button onClick={() => deleteCategory(category)} className='ml-3 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
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