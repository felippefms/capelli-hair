'use client'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Carrinho(){
    return(
        <div className='flex flex-col'>
            <Header></Header>
            <div className='flex justify-between'>
                <div className='bg-red-400'>
                    <div>
                        <p className='text-2xl font-medium text-[#9D8168]'>Selecione o endereço</p>
                        <div className='h-[44px]'>
                            <input placeholder='Insira o CEP' className='py-4'></input>
                            <button className='px-8 py-4 rounded-[10px] text-[#FFFFFF] bg-[#9D8168]'>Confirmar</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='bg-blue-400'>
                    <div>
                        <p>Revisão</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}