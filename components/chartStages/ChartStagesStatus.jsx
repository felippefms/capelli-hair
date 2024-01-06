
import Image from 'next/image';
import chartStage1 from '../../src/media/chartstage1.png';
import chartStage2 from '../../src/media/chartstage2.png';
import chartStage3 from '../../src/media/chartstage3.png';
import chartStage4 from '../../src/media/chartstage4.png';
import chartStage5 from '../../src/media/chartstage5.png';

export default function ChartStagesStatus(props){
    return(
        <div className='hidden lg:flex mx-8 mt-14 items-center justify-center'>
            <div className='flex items-center'>
                <div>
                    <Image src={chartStage1} alt='Sacola'></Image>
                </div>
                <p className={`ml-2 font-semibold ${props.chartStage === 'chart' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Sacola</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage2} alt='Identificação'></Image>
                </div>
                <p className={`ml-2 font-semibold ${props.chartStage === 'identification' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Identificação</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage3} alt='Pagamento'></Image>
                </div>
                <p className={`ml-2 font-semibold ${props.chartStage === 'payment' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Pagamento</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage4} alt='Revisão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${props.chartStage === 'revision' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Revisão</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage5} alt='Conlusão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${props.chartStage === 'complete' ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Conlusão</p>
            </div>
        </div>
    )
}