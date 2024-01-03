'use client'

import Image from "next/image"
import Link from "next/link";

import rightarrowimg from "../src/media/arrowright4.png";
import placeholderimg from "../src/media/fotomodelo3.png";
import placeholderimg2 from "../src/media/cabelomodelo3.png";

export default function ExclusiveColorsBox(props){

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    const formattedValue = props.valor / 100;

    return(
        <div className="flex flex-col mx-4 md:mx-6 mt-8 mb-16 relative rounded-[13.898px]">
            <div className="w-5/6 self-center z-10 relative">
            <Link href={`${props.categoria}/${props.idproduto}`}>
                <Image width={240} height={162} alt="Imagem do Produto" src={props.colorimg ? props.colorimg : placeholderimg} className="rounded-[10.424px]"></Image>
            </Link>
                <Link href="/">
                    <Image src={props.cabeloamostra ? props.cabeloamostra : placeholderimg2  } alt="Categoria" className="w-12 h-14 absolute z-0 bottom-0 rounded-tr-lg rounded-bl-lg border-t-[5px] border-r-[5px] border-[#F1E0CE]"></Image>
                </Link>
            </div>
            <div className="flex flex-col absolute bottom-[-5rem] w-full h-[136px] z-0 pt-8 pb-4 px-[23px] bg-[#ffff] shadow-md rounded-2xl">
                <Link href={`${props.categoria}/${props.idproduto}`}>
                <p className="text-sm mt-8 mb-1 leading-1 font-semibold">{props.nome}</p>
                </Link>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold mt-2 text-xs text-[#9D8168]">{formatCurrency(formattedValue)}</p>
                        <Link href={`${props.categoria}/${props.idproduto}`}>
                            <div className="flex items-center justify-center text-center max-sm:hidden py-1 px-2 border-solid border-[1px] rounded-[5px] border-[#9D8168] mt-2 bg-[#F1E0CE]">
                                <button className="font-semibold text-xs mr-1 text-[#9D8168]">Ver mais</button>
                                <Image width={14} height={14} src={rightarrowimg} alt="Ver mais" className="stroke-[#9D8168]"></Image>
                            </div>
                        </Link>
                    </div>
            </div>  
        </div>
    )
}