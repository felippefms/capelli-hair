
import Image from 'next/image';
import { useChartStore } from '../../store/ChartStore';

import chartStage1 from '../../src/media/chartstage1.png';
import chartStage2 from '../../src/media/chartstage2.png';
import chartStage2Active from '../../src/media/chartstage2active.png';
import chartStage3 from '../../src/media/chartstage3.png';
import chartStage3Active from '../../src/media/chartstage3active.png';
import chartStage4 from '../../src/media/chartstage4.png';
import chartStage4Active from '../../src/media/chartstage4active.png';
import chartStage5 from '../../src/media/chartstage5.png';
import chartStage5Active from '../../src/media/chartstage5active.png';

export default function ChartStagesIcons() {
    const chartStage = useChartStore((state) => state.ChartStage)

    console.log(chartStage);

    return (
        <div className='hidden lg:flex mx-8 mt-14 items-center justify-center'>
            <div className='flex items-center shrink-0'>
                <div>
                    <Image src={chartStage1} alt='Sacola'></Image>
                </div>
                <p className={`ml-2 font-semibold text-[#9D8168]`}>Sacola</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center shrink-0'>
                <div>
                    <Image src={chartStage === 'identification' || chartStage === 'payment' || chartStage === 'revision' || chartStage === 'complete' ? chartStage2Active : chartStage2} alt='Identificação'></Image>
                </div>
                <p className={`ml-2 font-semibold ${chartStage === 'identification' || chartStage === 'payment' || chartStage === 'revision' || chartStage === 'complete' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Identificação</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center shrink-0'>
                <div>
                    <Image src={chartStage === 'payment' || chartStage === 'revision' || chartStage === 'complete' ? chartStage3Active : chartStage3} alt='Pagamento'></Image>
                </div>
                <p className={`ml-2 font-semibold ${chartStage === 'payment' || chartStage === 'revision' || chartStage === 'complete' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Pagamento</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center shrink-0'>
                <div>
                    <Image src={chartStage === 'revision' || chartStage === 'complete' ? chartStage4Active : chartStage4} alt='Revisão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${chartStage === 'revision' || chartStage === 'complete' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Revisão</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center shrink-0'>
                <div>
                    <Image src={chartStage === 'complete' ? chartStage5Active : chartStage5} alt='Conlusão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${chartStage === 'complete' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Conlusão</p>
            </div>
        </div>
    )
}