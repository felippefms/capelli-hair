'use client'

import { useChartStore } from '../../store/ChartStore';

import ChartItem from '../ChartItem';

export default function ChartStage(props) {
    const setChartStage = useChartStore((state) => state.setChartStage)

    return (
        <div className='flex flex-col lg:flex-row items-center lg:justify-center'>
            <div className='flex flex-col w-full lg:w-max justify-between lg:mr-16 min-[1024px]:ml-4'>
                <div className='flex flex-col justify-center items-center lg:items-start'>
                    <div className='flex flex-col justify-center items-center lg:items-start'>
                        <p className='text-lg font-semibold lg:text-2xl lg:font-light mt-12 text-[#9D8168]'>Qual é o endereço de entrega?</p>
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

            <div className='w-full max-w-[404px] flex flex-col max-[404px]:border-t min-[405px]:border px-6 rounded-[24px] border-[#D1D1D1]'>
                <div className='pt-6'>
                    <p className='text-[20px] font-[600] text-[#9D8168]'>Resumo</p>
                    <div className='px-2 pt-6'>
                        <input placeholder='Cupom de desconto' className='w-full h-[44px] px-2 border rounded-[10px] border-[#888]'></input>
                    </div>
                    <div className='pt-5'>
                        <p className='text-[#888]'>Frete</p>
                        <p className='font-bold'>R$: 0,00</p>
                        <hr className='my-4'></hr>
                        <p className='text-[#888]'>Valor total</p>
                        <p className='font-[600] text-[24px] text-[#2E2E2E]'>R$: 9.891,00</p>
                        <p className='text-[14px] text-[#888]'>em até 10x de R$ 989,10 sem juros</p>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <div>
                        <button className='w-[288px] h-[53px] mt-10 rounded-[10px] text-[#fff] bg-[#9D8168]' onClick={()=> setChartStage('identification')}>Ir para o pagamento</button>
                    </div>
                    <div>
                        <button className='w-[288px] h-[53px] my-6 rounded-[10px] border border-[#9D8168] text-[#9D8168]'>Continuar comprando</button>
                    </div>
                </div>
            </div>
        </div>
    )
}