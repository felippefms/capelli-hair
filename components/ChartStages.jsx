
import Image from 'next/image';
import chartStage1 from '../src/media/chartstage1.png';
import chartStage2 from '../src/media/chartstage2.png';
import chartStage3 from '../src/media/chartstage3.png';
import chartStage4 from '../src/media/chartstage4.png';
import chartStage5 from '../src/media/chartstage5.png';
import { useState } from 'react';

export default function ChartStages(){
    const [stage1, setStage1] = useState(true);
    const [stage2, setStage2] = useState(false);
    const [stage3, setStage3] = useState(false);
    const [stage4, setStage4] = useState(false);
    const [stage5, setStage5] = useState(false);

    return(
        <div className='hidden lg:flex mx-8 mt-14 items-center justify-center'>
            <div className='flex items-center'>
                <div>
                    <Image src={chartStage1} alt='Sacola'></Image>
                </div>
                <p className={`ml-2 font-semibold ${stage1 === true ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Sacola</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage2} alt='Identificação'></Image>
                </div>
                <p className={`ml-2 font-semibold ${stage2 === true ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Identificação</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage3} alt='Pagamento'></Image>
                </div>
                <p className={`ml-2 font-semibold ${stage3 === true ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Pagamento</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage4} alt='Revisão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${stage4 === true ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Revisão</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage5} alt='Conlusão'></Image>
                </div>
                <p className={`ml-2 font-semibold ${stage5 === true ? `text-[#9D8168]` : `text-[#D1D1D1]`}`}>Conlusão</p>
            </div>
        </div>
    )
}