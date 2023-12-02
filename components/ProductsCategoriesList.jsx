'use client'

import { useState, useEffect } from "react"
import Image from "next/image";
import { CategoryList } from "../app/api/requests";

import exemploimg from "../src/media/cabelomodelo2.png"
import { useRouter } from "next/navigation";

export default function ProductsCategoriesList(){

const router = useRouter();
const [categoryList, setCategoryList] = useState([]);

const fetchAllCategories = () => {
    CategoryList((categoryList) => {
        setCategoryList(categoryList);
    });
};

function categoryRedirect(category){
    router.push(`/cabelos/${category.nome}`)
}

useEffect(()=>{
    fetchAllCategories();
},[])

const backgroundColors = ["#2E2E2E", "#9D8168", "#F5ECE2"];
const textColors = ["#F4F4F4", "#F4F4F4", "#888888"];
const titleColors = ["#F1E0CE", "#F1E0CE", "#9D8168"];
const bgButtonColors = ["#9D8168", "#FFFFFF", "#9D8168"];
const textButtonColors = ["#FFFFFF", "#9D8168", "#FFFFFF"];

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="w-full list-none">
                {categoryList.map((category, index) => (
                    <div className='flex flex-col md:flex-row items-center justify-center' style={{ backgroundColor: backgroundColors[index % 3] }} key={category.id}>
                        <div className="w-[287px] h-[339px] relative mt-[40px] md:mt-[96px] md:mb-[96px] md:mr-[112px]">
                            <Image src={exemploimg} alt={index} fill sizes="(max-width: 287px)" className="rounded-[32px]"></Image>
                        </div>
                        <div>
                            <div className="flex flex-col items-start justify-center text-left max-w-[287px] md:max-w-[350px] lg:max-w-[559px] md:min-w-full">
                                <p className="mt-[77px] mb-[32px] text-lg md:text-xl" style={{ color: titleColors[index % 3] }}>{category.nome}</p>
                                <p style={{ color: textColors[index % 3] }}>Nesta paleta de tonalidades, temos: Castanho claro, Castanho médio e Castanho escuro. Os cabelos são de origem natural (adquiridos e comercializados em sua cor original), não passaram por processos de coloração e são cabelos virgens (sem tratamentos químicos).</p>
                            </div>
                            <div className="mt-[56px] mb-[74px]">
                                <button onClick={() => categoryRedirect(category)} className="px-[32px] py-[16px] rounded-[10px]" style={{ backgroundColor: bgButtonColors[index % 3], color: textButtonColors[index % 3] }}>Explorar cabelos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}