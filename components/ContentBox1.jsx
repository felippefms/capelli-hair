"use client"

import Image from "next/image"

import Fotomodelo1 from '../src/media/fotomodelo1.png'
import FotomodeloMobile from '../src/media/fotomodelo1mobile.png'
import Arrowleft from '../src/media/arrowleft.png'
import Arrowright from '../src/media/arrowright.png'

export default function ContentBox1(){
    return(
        <div className="flex flex-col lg:h-[90vh] bg-gradient-to-b from-[#fffbe417] to-[#f5e7d993] lg:flex-row-reverse">
            <div className="flex flex-col items-center lg:justify-center lg:mr-36">
                <p className="mt-14 mb-6 text-2xl tracking-[2px] text-center cursor-default text-[#9D8168]">Revele sua grandeza</p>
                <p className="mx-10 text-normal leading-[24px] text-center cursor-default text-[#888]">Explore nossas cores, defina o comprimento e alcance o volume perfeito para o seu cabelo. A transformação que você merece!</p>
                <button className="rounded-[10px] py-4 px-8 m-8 bg-[#9D8168] text-white">Explorar cores</button>
                <div className="flex w-full justify-center items-center my-10">
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
            <div className="flex flex-row w-full items-center justify-start mb-10 lg:order-1">
                <div className="w-1/2 lg:w-[315px] xl:w-[350px] h-[251px] lg:h-[612px] bg-[#F1E0CE] rounded-tr-3xl rounded-br-3xl shrink-0"></div>
                <div className="flex items-center relative shrink-0 right-[138px]">
                    <Image className="rounded-[24px] z-10" src={FotomodeloMobile} alt="Foto modelo cabelos loiros"></Image>
                </div>
            </div>
        </div>
    )
}