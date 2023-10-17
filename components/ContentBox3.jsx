import Image from "next/image"

import Qualidadeimg1 from "@/src/media/qualidadeimg1.png"
import Qualidadeimg2 from "@/src/media/qualidadeimg2.png"
import Qualidadeimg3 from "@/src/media/qualidadeimg3.png"

export default function ContentBox3(){
    return(
        <div className="flex flex-col justify-center text-center bg-[#F5ECE2] md:flex-row md:py-40">
            <div className="flex flex-col items-center mt-[72px] md:mt-0">
                <Image src={Qualidadeimg1} alt="img" className="w-32 h-32"></Image>
                <p className="mt-8 text-lg text-[#9D8168]">Loja confiável</p>
                <p className="mt-6 mx-9 text-[#888]">Nós temos processos transparentes e suporte dedicado. Sua satisfação é nossa prioridade máxima.</p>
            </div>
            <div className="flex flex-col items-center mt-[72px] md:mt-0">
                <Image src={Qualidadeimg2} alt="img" className="w-32 h-32"></Image>
                <p className="mt-8 text-lg text-[#9D8168]">Procedência garantida</p>
                <p className="mt-6 mx-9 text-[#888]">Trabalhamos exclusivamente com cabelos humanos 100% naturais, higienizados e saudáveis.</p>
            </div>
            <div className="flex flex-col items-center my-[72px] md:mt-0">
                <Image src={Qualidadeimg3} alt="img" className="w-32 h-32"></Image>
                <p className="mt-8 text-lg text-[#9D8168]">Compra segura</p>
                <p className="mt-6 mx-9 text-[#888]">Investimos em tecnologias de última geração para proporcionar pagamentos protegidos e segurança de dados robusta.</p>
            </div>
        </div>
    )
}