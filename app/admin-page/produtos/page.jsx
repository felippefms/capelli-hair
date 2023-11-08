'use client'
import Link from "next/link"
import { useState } from "react";

import { ProductsList } from '../../api/requests'
import { CreateProduct } from '../../api/requests'
import { DeleteProduct } from '../../api/requests'
import ConfirmModal from '../../../components/ConfirmModal'

export default function PaginaDeProdutos(){
    const [productsList, setProductsList] = useState([]);

    const [confirmModal, setConfirmModal] = useState(false);
    const [message, setMessage] = useState('');
    const [execFunction, setExecFunction] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [corId, setCorId] = useState('');
    const [price, setPrice] = useState('');
    const [estoque, setEstoque] = useState('');

    const fetchAllProducts = () => {
        setIsLoading(true);

        ProductsList((productList) => {
            setProductsList(productList);
            setIsLoading(false);
        });
    };

    const deleteProduct = (product) => {
        setMessage(`Deseja remover o produto?`)
        setConfirmModal(true);
        setExecFunction(() => () => DeleteProduct(product.id));
    }

    return(
        <div className='flex flex-col w-screen h-screen justify-center text-center bg-[#6b6b6b]'>
            <div>
                <Link href={'/admin-page'}>
                    <button className='bg-[#fff]'>Voltar</button>
                </Link>
            </div>

            {/* LISTA DE PRODUTOS DO SISTEMA */}
            <div className='flex flex-col'>
                <div>
                    <button onClick={fetchAllProducts} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>ver lista de produtos</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Lista de Produtos</p>
                    <ul>
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            productsList.map((product) => (
                                <div className='flex items-center' key={product.id}>
                                    <li>{product.id} - {product.name}</li> <button onClick={() => deleteProduct(product)} className='ml-3 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            </div>

            {/* CRIAR NOVO PRODUTO NO SISTEMA */}
            <div className='flex flex-col mt-20'>
                <p>Criar novo produto:</p>
                <div>
                    <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                    <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                    <input placeholder="CorId" type="text" value={corId} onChange={(e) => setCorId(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                    <input placeholder="Preço" type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                    <input placeholder="Estoque" type="text" value={estoque} onChange={(e) => setEstoque(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                </div>
                <div>
                    <button onClick={() => CreateProduct(name, description, corId, price, estoque)} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>Criar produto</button>
                </div>
            </div>

            {/* MODAL DE COMFIRMAÇÃO */}
            {confirmModal ? (
                <ConfirmModal setConfirmModal={setConfirmModal} message={message} ExecFunction={execFunction}></ConfirmModal>
            ) : null}
        </div>
    )
}