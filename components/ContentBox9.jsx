'use client'

import Image from "next/image"

import fotomodelo6 from '../src/media/fotomodelo6.png';

export default function ContentBox9(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center h-[60vh] px-10 lg:w-[751px]">
                <div className="">
                    <p className="text-2xl text-[#9D8168]">Trajetória</p>
                    <p className="mt-8 text-[#888]">Desde 2018, trilhamos uma jornada sólida como loja online especializada em mega hair feminino. Com dedicação à excelência, conquistamos a confiança de mulheres que buscam qualidade, personalização e autenticidade. Nosso compromisso com a satisfação do cliente e a inovação nos impulsiona a continuar realçando a autoestima feminina através do poder do mega hair.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex items-start">
                    <Image src={fotomodelo6} width={500} height={391} alt="Foto modelos"></Image>
                </div>
                <div className="flex flex-col w-full items-start md:justify-center md:py-0 px-9 md:px-0 py-16 bg-[#9D8168]">
                    <div className="lg:w-[656px] md:pl-[87px]">
                        <p className="text-2xl text-[#F1E0CE]">Especialidade</p>
                        <p className="mt-8 text-[#F4F4F4]">Trabalhamos exclusivamente com cabelos brasileiros premium, escolhendo as melhores matérias-primas disponíveis. Nossa equipe, composta por coloristas e costureiros especializados em mega hair, foi desenvolvida e aprimorada ao longo dos últimos 5 anos de nossa história. Nosso objetivo primordial é oferecer a você o mega hair que mais lhe agrada - seja em termos de preferência, tamanho ou cor - com a garantia de que sua autoestima seja nossa maior prioridade.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}