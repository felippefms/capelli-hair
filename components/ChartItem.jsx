'use client'

import Image from "next/image";
import loadingimg from '../src/media/logo.svg';
import QuantityChanger from "./QuantityChanger";
import ProductValue from "./ProductValue";

import { deleteChartItem } from "../app/api/requests";

export default function ChartItem(props){
    return(
        <div className="flex flex-wrap">
            <div className="flex">
                <div className="w-[88px] h-[112px] flex">
                    <Image src={loadingimg} alt="Imagem Produto"></Image>
                </div>
                <div className="flex flex-col items-start lg:mr-[100px] min-[409px]:mr-4 justify-center ml-14">
                    <p className="font-bold">{props.name}</p>
                    <button onClick={()=>deleteChartItem(props.id)} className="underline">Remover</button>
                </div>
            </div>
            <div className="flex items-start space-x-5 lg:space-x-12 mb-11">
                <QuantityChanger></QuantityChanger>
                <ProductValue></ProductValue>
            </div>
            <hr className="w-full border-t-2 border-[#D1D1D1]" />
        </div>
    )
}