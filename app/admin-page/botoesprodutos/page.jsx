'use client'
import Link from "next/link"
import { useState } from "react";

import { getSizeButtons, getVolumeButtons, getTecnicaButtons } from '../../api/requests'
import { createProductButtons } from '../../api/requests'
// import { DeleteButton } from '../../api/requests'
import ConfirmModal from '../../../components/ConfirmModal'

export default function PaginadeBotoes(){
    const [sizeList, setSizeList] = useState([]);
    const [volumeList, setVolumeList] = useState([]);
    const [tecnicaList, setTecnicaList] = useState([]);

    const [botaoValue, setBotaoValue] = useState('');

    const [confirmModal, setConfirmModal] = useState(false);
    const [message, setMessage] = useState('');
    const [execFunction, setExecFunction] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const fetchAllButtons = () => {
        setIsLoading(true);

        getSizeButtons((sizeButtons) => {
            setSizeList(sizeButtons);
        });

        getVolumeButtons((volumeButtons) => {
            setVolumeList(volumeButtons);
        });

        getTecnicaButtons((tecnicaButtons) => {
            setTecnicaList(tecnicaButtons);
        });
        setIsLoading(false);
    };

    // const deleteProduct = (product) => {
    //     setMessage(`Deseja remover o botão?`)
    //     setConfirmModal(true);
    //     setExecFunction(() => () => DeleteButton());
    // }

    return(
        <div className='flex flex-col w-screen h-screen justify-center text-center bg-[#6b6b6b]'>
            <div>
                <Link href={'/admin-page'}>
                    <button className='bg-[#fff]'>Voltar</button>
                </Link>
            </div>

            {/* LISTA DE BOTOÊS DOS PRODUTOS */}
            <div className='flex flex-col'>
                <div>
                    <button onClick={fetchAllButtons} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>ver lista de botôes</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Lista de Botões</p>
                    <ul>
                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : (
                            sizeList.map((sizes) => (
                                <div className='flex items-center' key={sizes.id}>
                                    <li>{sizes.id} - {sizes}</li> <button onClick={() => deleteProduct(sizes)} className='ml-3 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
                                </div>
                            )),
                            volumeList.map((volumes)=> (
                                <div className='flex items-center' key={volumes.id}>
                                    <li>{volumes.id} - {volumes}</li> <button onClick={() => deleteProduct(volumes)} className='ml-3 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
                                </div>
                            )),
                            tecnicaList.map((tecnicas)=> (
                                <div className='flex items-center' key={tecnicas.id}>
                                    <li>{tecnicas.id} - {tecnicas.nome}</li> <button onClick={() => deleteProduct(tecnicas)} className='ml-3 bg-red-500 rounded-md p-1 hover:text-[#fff]'>excluir</button>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            </div>

            {/* CRIAR NOVO PRODUTO NO SISTEMA */}
            <div className='flex flex-col mt-20'>
                <p>Criar novo botão:</p>
                <div>
                    <select>
                        <option value="Tamanho">Tamanho</option>
                        <option value="Volume">Volume</option>
                        <option value="Técnica">Técnica</option>
                    </select>
                </div>
                <div>
                    <input placeholder="Conteúdo do botão" type="text" value={botaoValue} onChange={(e) => setBotaoValue(e.target.value)} className="border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                </div>
                <div>
                    <button onClick={() => createProductButtons('volume', botaoValue)} className='bg-slate-700 rounded-md p-4 my-8 hover:text-[#fff]'>Criar botão</button>
                </div>
            </div>

            {/* MODAL DE COMFIRMAÇÃO */}
            {confirmModal ? (
                <ConfirmModal setConfirmModal={setConfirmModal} message={message} ExecFunction={execFunction}></ConfirmModal>
            ) : null}
        </div>
    )
}