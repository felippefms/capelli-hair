'use client'

import ChartResume from '../ChartResume';
import ChartItem from '../ChartItem';

export default function ChartStage(props) {

    return (
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-start mb-[40px] lg:mb-[80px] items-center'>



            <div className='flex flex-col w-full lg:w-max justify-between lg:mr-16 min-[1024px]:ml-4'>
                <div className='flex flex-col justify-center items-center lg:items-start'>
                    <div className='flex flex-col justify-center mt-[64px] items-center lg:items-start'>
                        <p className='text-lg font-semibold lg:text-2xl lg:font-light text-[#9D8168]'>Qual é o endereço de entrega?</p>
                        <div className='flex flex-col lg:flex-row mt-8 w-full items-center'>
                            <input placeholder='Insira o CEP' className='py-4 px-4 h-[44px] lg:w-[300px] w-full rounded-[10px] border border-[#888]'></input>
                            <button className='px-8 h-[44px] my-6 lg:ml-2 w-full lg:w-[147px] rounded-[10px] text-[#FFFFFF] bg-[#9D8168]'>Confirmar</button>
                            <p className='underline lg:ml-8'>Não sei meu CEP</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full lg:max-w-[704px] max-w-[404px] lg:w-full my-14 px-4'>
                        <p className='text-lg font-semibold lg:text-xl lg:font-light text-[#9D8168]'>Carrinho</p>
                        {props.userChart.map((item) =>
                            <ChartItem key={item.id} id={item.produto.id} name={item.produto.name} quantity={item.quantidade} valorTotal={item.quantia}></ChartItem>
                        )}
                    </div>
                </div>
            </div>


            <ChartResume></ChartResume>

        </div>
    )
}