'use client'

import Image from "next/image"

import localizacaoimg from "../src/media/localizacaoimg.png";

export default function Localização(){
    return(
        <div className="flex flex-col md:flex-row md:items-center md:h-[60vh] justify-center py-16 bg-[#2E2E2E]">
            <div className="pl-4 shrink-0">
                <Image src={localizacaoimg} width={140} height={140} alt="Localização"></Image>
            </div>
            <div className="mx-9 md:w-[751px]">
                <p className="mt-14 md:m-0 text-2xl text-[#F1E0CE]">Localização</p>
                <p className="mt-8 text-[#F4F4F4]">Estamos no Rio de Janeiro, um lugar incrível! É daqui que enviamos nossos produtos para todo o Brasil e o mundo. Nossa paixão pelo mega hair chega a todos os lugares, trazendo beleza e confiança para mulheres como você, em qualquer canto do planeta.</p>
            </div>
        </div>
    )
}