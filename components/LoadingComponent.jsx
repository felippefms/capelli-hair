import Image from 'next/image';

import loadingimg from '../src/media/logo.svg';

export default function LoadingComponent(){
    return(
        <div className='w-full h-screen flex flex-col items-center z-40 absolute top-0 justify-center bg-[#ffffffe8]'>
            <div className='w-[400px] h-[200px] md:relative'>
                <Image src={loadingimg} alt='Carregando!' fill></Image>
            </div>
        </div>
    )
}