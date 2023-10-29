"use client"

import Image from "next/image"

import Fotomodelo1 from '../src/media/fotomodelo1.png'
import FotomodeloMobile from '../src/media/fotomodelo1mobile.png'
import Arrowleft from '../src/media/arrowleft.png'
import Arrowright from '../src/media/arrowright.png'

export default function ContentBox1(){
    return(
        <div className="flex flex-col min-[1140px]:h-[90vh] bg-gradient-to-b from-[#fffbe417] to-[#f5e7d993] min-[1140px]:flex-row-reverse min-[1140px]:justify-end">
            <div className="flex flex-col items-center min-[1140px]:justify-center">
                <div className="flex flex-col justify-center items-center min-[1140px]:items-start min-w-[300px] max-w-[380px] min-[1140px]:max-w-[579px] min-[1140px]:min-w-[380px] mx-[20px] md:mx-0">
                    <p className="mt-14 mb-6 text-2xl tracking-[2px] text-center cursor-default text-[#9D8168]">Revele sua grandeza</p>
                    <p className="text-normal leading-[24px] text-center min-[1140px]:text-left cursor-default text-[#888]">Explore nossas cores, defina o comprimento e alcance o volume perfeito para o seu cabelo. A transformação que você merece!</p>
                </div>
                <div className="flex w-full items-center justify-center min-[1140px]:justify-start">
                    <button className="rounded-[10px] py-4 px-8 my-8 bg-[#9D8168] text-white">Explorar cores</button>
                </div>
                <div className="flex w-full justify-center items-center min-[1140px]:justify-start my-10">
                    <div className="flex items-center justify-center">
                        <button>
                            <Image src={Arrowleft} alt="Anterior"></Image>
                        </button>
                        <hr className="w-40 bg-[#F1E0CE] h-2 rounded-full"></hr>
                        <button>
                            <Image src={Arrowright} alt="Próximo"></Image>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row min-[1140px]:w-1/2 items-center mb-10 min-[1140px]:order-1">
                <div className="w-1/2 min-[1140px]:w-1/2 flex items-center">
                    <div className="w-full min-[1140px]:w-[315px] h-[251px] min-[1140px]:h-[612px] bg-[#F1E0CE] rounded-tr-3xl rounded-br-3xl shrink-0"></div>
                    <div className="h-[331px] w-[280px] min-[1140px]:h-[452px] min-[1140px]:w-[381px] relative shrink-0 right-[138px]">
                        <Image className="z-10 rounded-[24px]" quality={100} fill src={Fotomodelo1} alt="Foto modelo cabelos loiros"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}