import Image from 'next/image';

import loadingimg from '../src/media/logo.svg';

export default function Loading(){
    return(
        <div className='w-full h-screen flex flex-col items-center z-30 absolute top-0 justify-center bg-[#ffffffe8]'>
            <div className='w-[400px] h-[200px] relative'>
                <Image src={loadingimg} alt='Carregando!' fill></Image>
            </div>
        </div>
    )
}