'use client'

import Image from "next/image"
import Link from "next/link";

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
                <Image width={240} height={162} src={props.excluivecolorimg} alt={props.alttxt} className="rounded-[10.424px]"></Image>
                <Link href="/">
                    <Image src={props.cabeloamostra} alt={props.altcabeloamostra} className="w-12 h-14 absolute z-0 bottom-0 rounded-tr-lg rounded-bl-lg border-t-[5px] border-r-[5px] border-[#F1E0CE]"></Image>
                </Link>
            </div>
            <div className="flex flex-col absolute bottom-[-5rem] w-full z-0 pt-5 pb-4 px-2 bg-[#ffff] shadow-md rounded-2xl">
                <p className="text-sm mt-8 mb-1 leading-1 font-semibold">{props.nome}</p>
                <p className="font-semibold mt-2 text-xs text-[#9D8168]">{formatCurrency(formattedValue)}</p>
            </div>
        </div>
    )
}