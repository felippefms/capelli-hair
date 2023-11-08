'use client'

import Image from 'next/image';

import downarrow from '../src/media/downarrow.svg';

export default function ContentBox10(){
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-14'>
                <p className='text-xl font-[600] text-[#9D8168]'>Cabelos exclusivos</p>
            </div>
            <div className='mt-8 max-w-[350px] md:max-w-[626px] text-center'>
                <p className='text-[#888888]'>Explore nossas coleções de mega hair e encontre tons deslumbrantes, desde os clássicos castanhos e loiros até os dourados. Seja a sua própria obra-prima.</p>
            </div>
            <div className='w-[60px] h-[60px] mt-14 mb-[56px] md:mb-[96px]'>
                <Image src={downarrow}></Image>
            </div>
        </div>
    )
}