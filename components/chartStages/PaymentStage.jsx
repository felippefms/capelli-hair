'use client'

import { useChartStore } from '../../store/ChartStore';

export default function PaymentStage() {
    const chartStage = useChartStore((state) => state.ChartStage)
    const setChartStage = useChartStore((state) => state.setChartStage)

    return(
        <div className='flex flex-col lg:flex-row items-center lg:justify-center'>
        <p>teste payment</p>

        <div className='w-full flex flex-col items-center'>
            <div>
                <button className='w-[288px] h-[53px] mt-10 rounded-[10px] text-[#fff] bg-[#9D8168]' onClick={()=> setChartStage('revision')}>Ir para o pagamento</button>
            </div>
            <div>
                <button className='w-[288px] h-[53px] my-6 rounded-[10px] border border-[#9D8168] text-[#9D8168]'>Continuar comprando</button>
            </div>
        </div>
    </div>
    )
}