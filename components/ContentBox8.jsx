'use client'

import Image from 'next/image';

import Logo from '../src/media/logo.svg';

export default function ContentBox8(){
    return(
        <div className="flex flex-col h-[50vh] items-center justify-center bg-[#a7ac8b1c]">
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='mt-14 lg:shrink-0 lg:ml-7 lg:mt-0'>
                    <Image width={206} src={Logo} alt='Capelli Hair Logo'></Image>
                </div>
                <div className='mx-10 lg:mx-0 mt-14 lg:ml-28 lg:w-[560px]'>
                    <p className='text-2xl text-[#9D8168]'>Quem somos</p>
                    <p className='mt-8 lg:mt-4 mb-16 text-[#888888]'>Somos a <b>Capelli Hair</b>, uma loja online especializada em mega hair feminino de alto padrão. Trabalhamos exclusivamente com cabelos brasileiros, oferecendo uma ampla variedade de tamanhos e cores personalizadas.</p>
                </div>
            </div>
        </div>
    )
}