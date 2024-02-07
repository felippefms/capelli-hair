'use client'

import ChartItem from '../ChartItem';

export default function ChartStage(props) {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:justify-center'>
            <div className='flex flex-col w-full justify-between lg:mr-16 min-[1024px]:ml-4'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center lg:items-start'>
                        <p className='text-lg font-semibold lg:text-2xl lg:font-light mt-12 text-[#9D8168]'>Qual é o endereço de entrega?</p>
                        <div className='flex flex-col lg:flex-row mt-8 w-full items-center'>
                            <input placeholder='Insira o CEP' className='py-4 px-4 lg:mr-2 h-[44px] lg:w-[300px] w-full rounded-[10px] border border-[#888]'></input>
                            <button className='px-8 h-[44px] my-6 w-full lg:w-[147px] rounded-[10px] text-[#FFFFFF] bg-[#9D8168]'>Confirmar</button>
                            <p className='underline lg:ml-8'>Não sei meu CEP</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full my-14 px-4'>
                        <p className='text-lg font-semibold lg:text-xl lg:font-light text-[#9D8168]'>Carrinho</p>
                        {props.userChart.map((item) =>
                            <ChartItem key={item.id} id={item.produto.id} name={item.produto.name} quantity={item.quantidade} valorTotal={item.quantia} ></ChartItem>
                        )}
                    </div>
                </div>
            </div>

            <div className='w-full min-[425px]:max-w-[368px] flex flex-col justify-center items-center min-[1024px]:mr-4 mb-4 border-t lg:border border-[#D1D1D1] rounded-3xl py-10'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-lg lg:text-2xl lg:font-light font-semibold text-[#9D8168]'>Resumo</p>
                    <div className='flex items-center mt-10'>
                        <input placeholder='Cupom de desconto' className='py-4 px-4 h-[44px] rounded-[10px] border border-[#888]'></input>
                    </div>
                    <div className='mt-6'>
                        <p className='text-[#888]'>Frete</p>
                        <p>R$: 0,00</p>
                        <hr className='w-full my-6'></hr>
                        <p className='text-[#888]'>Valor total</p>
                        <p className='text-[#2E2E2E] font-[600] text-2xl'>R$: 9.891,00</p>
                        <p className='text-[#888]'>em até 10x de R$ 989,10 sem juros</p>
                    </div>
                </div>
                <div>
                    <button className='mt-14 h-[44px] px-8 rounded-[10px] text-[#fff] bg-[#9D8168]' onClick={()=> props.setChartStage('identification')}>Ir para o pagamento</button>
                </div>
                <div className='mt-6'>
                    <button className='border h-[44px] rounded-[10px] border-[#9D8168] px-6 text-[#9D8168]'>Continuar comprando</button>
                </div>
            </div>
        </div>
    )
}