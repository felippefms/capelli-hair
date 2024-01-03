
import Image from 'next/image';
import chartStage2 from '../src/media/chartstage2.png';
import chartStage3 from '../src/media/chartstage3.png';
import chartStage4 from '../src/media/chartstage4.png';

export default function ChartStages(){
    return(
        <div className='hidden lg:flex mx-8 mt-14 items-center justify-center'>
            <div className='flex items-center'>
                <div>
                    <Image src={chartStage2}></Image>
                </div>
                <p className='ml-2 text-[#D1D1D1]'>Sacola</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage3}></Image>
                </div>
                <p className='ml-2 text-[#D1D1D1]'>Identificação</p>
            </div>

            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage4}></Image>
                </div>
                <p className='ml-2 text-[#D1D1D1]'>Pagamento</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage4}></Image>
                </div>
                <p className='ml-2 text-[#D1D1D1]'>Revisão</p>
            </div>
            <hr className="w-[69px] border-t-2 mx-8 border-[#D1D1D1]" />

            <div className='flex items-center'>
                <div>
                    <Image src={chartStage4}></Image>
                </div>
                <p className='ml-2 text-[#D1D1D1]'>Conlusão</p>
            </div>
        </div>
    )
}