'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

import ImageViewer from "./ImageViewer";
import arrowleft from "../src/media/arrowleft.png";
import minus from "../src/media/minus.png";
import plus from "../src/media/plus.png";
import shareproducticon from "../src/media/shareproducticon.png";
import downarrow from "../src/media/downarrow2.svg";
import uparrow from "../src/media/uparrow2.png";

export default function Product(produto){
    const [produtoFinalizado, setProdutoFinalizado] = useState();
    const [quantity, setQuantity] = useState(1);
    const minQuantity = 1;
    const maxQuantity = 10;

    const handleDecrease = () => {
        if (quantity > minQuantity) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncrease = () => {
        if (quantity < maxQuantity) {
          setQuantity(quantity + 1);
        }
      };

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(produto.produto.price);

    return(
        <div className="flex flex-col lg:flex-row items-center justify-center mt-3 lg:mt-12">

            {/* DESKTOP VERSION BELOW */}
            <div className="flex max-lg:hidden">
                <div className="flex w-[50%] md:justify-end md:items-center mr-24 ml-4">
                    <ImageViewer></ImageViewer>
                </div>

                <div className="flex flex-col px-2 max-lg:hidden w-[400px]">
                    <div className="">
                        <button className="flex items-center text-[#888] font-light underline">
                            <Image src={arrowleft}></Image>
                            {produto.produto.cor.categoria.nome}
                        </button>
                        <p className="mt-6 max-md:mb-[32px] text-xl font-bold text-[#9D8168]">{produto.produto.name}</p>
                    </div>

                    <div className="lg:mt-12">
                        <p><b>Tamanho.</b> <b className="text-[#9D8168]">Qual é o melhor para você?</b></p>
                    </div>

                    <div>

                    </div>

                    <div>
                        <p><b>Volume.</b> <b className="text-[#9D8168]">Quantas gramas você deseja?</b></p>
                    </div>

                    <div>

                    </div>

                    <div>
                        <p><b>Técnica.</b> <b className="text-[#9D8168]">Escolha a que mais combina com você.</b></p>
                    </div>

                    <div className="mt-12">
                        <p className="text-[#888]">Quantidade</p>
                        <div className="flex w-[120px] h-[40px] items-center justify-between mt-4 p-2 rounded-[8px] bg-[#F5F5F5]">
                            <button onClick={handleDecrease}>
                                <Image src={minus}></Image>
                            </button>
                            <p>{quantity}</p>
                            <button onClick={handleIncrease}>
                                <Image src={plus}></Image>
                            </button>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p>Valor total</p>
                        <p className="mt-2 text-[#2E2E2E] font-[600] text-2xl">{formattedPrice}</p>
                    </div>

                    <div className="mt-10">
                        <button className="py-4 px-8 bg-[#9D8168] text-[#fff] rounded-[10px]">
                            Adicionar à sacola
                        </button>
                    </div>

                    <div className="flex mt-10">
                        <button className="flex items-center text-center">
                            <Image src={shareproducticon}></Image>
                            <p className="text-[#9D8168] underline">Compartilhar</p>
                        </button>
                    </div>

                    <div>
                        <hr className="text-[#D1D1D1] mt-[46px]"></hr>
                    </div>

                    <div className="text-[#888888]">
                        <p>Vamos lá! Aqui está um guia fácil para escolher seu aplique perfeito:</p>
                        <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 1: </b>Primeiro, escolha o tamanho que você quer para o seu aplique, ou seja, o quanto ele vai ser comprido.</p>
                        <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 2:</b> Agora, decida quanto volume você deseja, isso é a quantia de gramas de cabelo. Se você não tem certeza de qual é volume ideal para você, não se preocupe! Dê uma olhada na seção "Volume Sugerido" logo abaixo para algumas dicas.</p>
                        <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 3:</b> Por último, escolha a técnica que você prefere para colocar o aplique. Nós explicamos todas as opções diferentes na seção "Técnicas" logo abaixo.</p>
                        <p className="mt-6">E se ainda estiver em dúvida, não hesite em entrar em contato com nossas especialistas. Elas estão prontas para ajudar!</p>
                    </div>

                    <div>

                    </div>
                </div>
            </div>


    {/* //MOBILE VERSION BELOW */}
            <div className="flex flex-col px-2 lg:hidden">
                <div className="mt-12">
                    <button className="flex items-center text-[#888] font-light underline">
                        <Image src={arrowleft}></Image>
                        {produto.produto.cor.categoria.nome}
                    </button>
                    <p className="mt-6 max-md:mb-[32px] text-xl font-bold text-[#9D8168]">{produto.produto.name}</p>
                </div>

                <div className="flex justify-center">
                    <ImageViewer></ImageViewer>
                </div>

                <div>
                    <p><b>Tamanho.</b> <b className="text-[#9D8168]">Qual é o melhor para você?</b></p>
                </div>

                <div>

                </div>

                <div>
                    <p><b>Volume.</b> <b className="text-[#9D8168]">Quantas gramas você deseja?</b></p>
                </div>

                <div>

                </div>

                <div>
                    <p><b>Técnica.</b> <b className="text-[#9D8168]">Escolha a que mais combina com você.</b></p>
                </div>

                <div className="mt-12">
                    <p className="text-[#888]">Quantidade</p>
                    <div className="flex items-center max-w-max mt-4 p-2 rounded-[8px] space-x-[29.5px] bg-[#F5F5F5]">
                        <button>
                            <Image src={minus}></Image>
                        </button>
                        <p>1</p>
                        <button>
                            <Image src={plus}></Image>
                        </button>
                    </div>
                </div>

                <div className="mt-12">
                    <p>Valor total</p>
                    <p className="mt-2 text-[#2E2E2E] font-[600] text-2xl">R$ {produto.produto.price}</p>
                </div>

                <div className="mt-10">
                    <button className="py-4 px-8 bg-[#9D8168] text-[#fff] rounded-[10px]">
                        Adicionar à sacola
                    </button>
                </div>

                <div className="flex mt-10">
                    <button className="flex items-center text-center">
                        <Image src={shareproducticon}></Image>
                        <p className="text-[#9D8168] underline">Compartilhar</p>
                    </button>
                </div>

                <div>
                    <hr className="text-[#D1D1D1] mt-[46px]"></hr>
                </div>

                <div className="text-[#888888]">
                    <p>Vamos lá! Aqui está um guia fácil para escolher seu aplique perfeito:</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 1: </b>Primeiro, escolha o tamanho que você quer para o seu aplique, ou seja, o quanto ele vai ser comprido.</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 2:</b> Agora, decida quanto volume você deseja, isso é a quantia de gramas de cabelo. Se você não tem certeza de qual é volume ideal para você, não se preocupe! Dê uma olhada na seção "Volume Sugerido" logo abaixo para algumas dicas.</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 3:</b> Por último, escolha a técnica que você prefere para colocar o aplique. Nós explicamos todas as opções diferentes na seção "Técnicas" logo abaixo.</p>
                    <p className="mt-6">E se ainda estiver em dúvida, não hesite em entrar em contato com nossas especialistas. Elas estão prontas para ajudar!</p>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}