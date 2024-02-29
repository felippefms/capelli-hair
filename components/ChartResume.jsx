'use client'

import { useChartStore } from "../store/ChartStore"

export default function ChartResume() {
    const ChartStage = useChartStore((state) => state.ChartStage)
    const setChartStage = useChartStore((state) => state.setChartStage)
    const TotalValue = useChartStore((state) => state.TotalValue)

    return (
        <div className='flex flex-col lg:flex-row mt-[56px] items-center lg:justify-center'>
            <div className='w-full max-w-[320px] flex flex-col max-[320px]:border-t min-[321px]:border px-6 rounded-[24px] border-[#D1D1D1]'>
                <div className='pt-6'>
                    <p className='text-[20px] font-[600] text-[#9D8168]'>Resumo</p>
                    <div className='px-2 pt-6'>
                        <input placeholder='Cupom de desconto' className='w-full h-[44px] px-2 border rounded-[10px] border-[#888]'></input>
                    </div>
                    <div className='pt-5'>
                        <p className='text-[#888]'>Frete</p>
                        <p className='font-semibold'>R$: 0,00</p>
                        <hr className='my-4'></hr>
                        <p className='text-[#888]'>Valor total</p>
                        <p className='font-[600] text-[24px] text-[#2E2E2E]'>R$: {TotalValue}</p>
                        <p className='text-[14px] text-[#888]'>em até 10x de R$ 989,10 sem juros</p>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <div>
                        <button className='w-[288px] h-[53px] mt-10 rounded-[10px] text-[#fff] bg-[#9D8168]' onClick={() => 
                            ChartStage === 'chart' && setChartStage('identification') 
                         || ChartStage === 'identification' && setChartStage('payment') 
                         || ChartStage === 'payment' && setChartStage('revision') 
                         || ChartStage === 'revision' && setChartStage('complete')}>Ir para o pagamento</button>
                    </div>
                    <div>
                        <button className='w-[288px] h-[53px] my-6 rounded-[10px] border border-[#9D8168] text-[#9D8168]'>Continuar comprando</button>
                    </div>
                </div>
            </div>
        </div>
    )
}