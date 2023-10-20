import Image from "next/image";

import Imagemilustracaomobile from "../src/media/imagemilustracaomobile.png"
import Imagemilustracao from "../src/media/imagemilustracao.png"

export default function ContentBox4() {
  return (
    <div className="flex flex-col md:flex-row md:h-[90vh] bg-gradient-to-b md:items-center relative from-[#FFFFFF] to-[#f5e7d993]">
        <div className="flex flex-col items-center text-center mx-10 md:w-[442px] md:text-left md:m-[152px] md:items-start md:z-10">
            <p className="mt-[72px] text-2xl text-[#9D8168]">Excelência é o nosso propósito</p>
            <p className="mt-[24px] text-[#888]">Cada fio de cabelo é selecionado com carinho, passando por um processo minucioso. Afinal, você merece o melhor tratamento!</p>
            <button className="mt-[40px] px-8 py-4 rounded-[10px] bg-[#9D8168] text-[#ffff]">Conhecer mais</button>
        </div>
        <div className="w-full mt-[40px] md:hidden bg-black">
            <Image width={750} src={Imagemilustracaomobile} alt="Imagem Ilustrativa"></Image>
        </div>
        <div className="max-md:hidden">
            <Image fill style={{objectFit:"fill"}} src={Imagemilustracao} alt="Imagem Ilustrativa desktop"></Image>
        </div>
    </div>
  )
}
