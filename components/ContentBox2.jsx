'use client'

import Image from "next/image"

import ExclusiveColorsBox from "./ExclusiveColorsBox"

import Fotomodelo2 from "@/src/media/fotomodelo2.png"
import Fotomodelo3 from "@/src/media/fotomodelo3.png"
import Fotomodelo4 from "@/src/media/fotomodelo4.png"
import Fotomodelo5 from "@/src/media/fotomodelo5.png"

import LoiroClaro from "@/src/media/cabelomodelo2.png"
import CastanhoEscuro from "@/src/media/cabelomodelo3.png"
import CastanhoClaro from "@/src/media/cabelomodelo4.png"
import CinzaEscuro from "@/src/media/cabelomodelo5.png"

import ArrowRight3img from "@/src/media/arrowright3.png"

export default function ContentBox2(){
    return(
        <div className="mt-11 md:mt-[88px] mb-4 md:mb-14">
            <div className="flex justify-center ">
                <p className="text-2xl text-[#9D8168]">Conheça nossos cabelos</p>
            </div>
            <div className="flex flex-row max-lg:flex-col justify-center">
                <div className="flex justify-center">
                    <ExclusiveColorsBox excluivecolorimg={Fotomodelo2} alttxt="Modelo Loiro Claro" cabeloamostra={LoiroClaro} altcabeloamostra="LoiroClaro" nome="Loiro Claro" valor={329700}></ExclusiveColorsBox>
                    <ExclusiveColorsBox excluivecolorimg={Fotomodelo3} alttxt="Modelo Castanho Escuro" cabeloamostra={CastanhoEscuro} altcabeloamostra="CastanhoEscuro" nome="Castanho Escuro" valor={329700}></ExclusiveColorsBox>
                </div>
                <div className="flex justify-center">
                    <ExclusiveColorsBox excluivecolorimg={Fotomodelo4} alttxt="Modelo Castanho Claro" cabeloamostra={CastanhoClaro} altcabeloamostra="CastanhoClaro" nome="Castanho Claro" valor={329700}></ExclusiveColorsBox>
                    <ExclusiveColorsBox excluivecolorimg={Fotomodelo5} alttxt="Modelo Cinza Escuro" cabeloamostra={CinzaEscuro} altcabeloamostra="CinzaEscuro" nome="Cinza Escuro" valor={329700}></ExclusiveColorsBox>
                </div>
            </div>
            <div className="flex justify-center mt-16 mb-14">
                <button className="flex items-center px-7 py-4 rounded-lg text-white bg-[#9D8168]">
                    <p className="text-xl mr-2">Explorar</p>
                    <Image src={ArrowRight3img} alt="Explorar"></Image>
                </button>
            </div>
        </div>
    )
}