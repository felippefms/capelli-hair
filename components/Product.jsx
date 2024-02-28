'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

import ImageViewer from "./ImageViewer";
import arrowleft from "../src/media/arrowleft.png";
import uparrow from "../src/media/uparrow2.png";
import downarrow from "../src/media/downarrow3.png";
import shareproducticon from "../src/media/shareproducticon.png";
import QuantityChanger from "./QuantityChanger";
import ProductValue from "./ProductValue";
import SizeButtons from "./SizeButtons";
import VolumeButtons from "./VolumeButtons";
import TecnicaButtons from "./TecnicaButtons";
import { useRouter } from "next/navigation";
import { getVolumeButtons, getSizeButtons, getTecnicaButtons, AddProductChart } from "../app/api/requests";

export default function Product(produto){
    const [sizeButtonsList, setSizeButtonsList] = useState([]);
    const [volumeButtonsList, setVolumeButtonsList] = useState([]);
    const [tecnicaButtonsList, setTecnicaButtonsList] = useState([]);
    const [showhide, setShowHide] = useState(false);
    const [showhide2, setShowHide2] = useState(false);
    const [showhide3, setShowHide3] = useState(false);
    const [showhide4, setShowHide4] = useState(false);
    const [selectedVolume, setSelectedVolume] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedTecnica, setSelectedTecnica] = useState(null);
    const [baseValue, setBaseValue] = useState(produto.produto.price);
    const [actualValue, setActualValue] = useState(produto.produto.price.toFixed(2));
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();
    const [produtoFinalizado, setProdutoFinalizado] = useState({
        produtoId : produto.produto.id,
        quantidade : quantity,
        tamanhoId : null,
        tecnicaId : null,
        volumeId : null,
    });
    
    useEffect(() => {
        getSizeButtons((sizes) => {
            setSizeButtonsList(sizes);
        });
    
        getVolumeButtons((volumes) => {
            setVolumeButtonsList(volumes);
        });
    
        getTecnicaButtons((tecnicas) => {
            setTecnicaButtonsList(tecnicas);
        });
    }, []);

    return(
        <div className="flex flex-col lg:flex-row items-center justify-center mt-3 lg:mt-12">

            {/* MOBILE VERSION BELOW */}
            <div className="flex max-lg:hidden">
                <div className="flex w-[50%] md:justify-end md:items-center mr-24 ml-4">
                    <ImageViewer></ImageViewer>
                </div>

                <div className="flex flex-col px-2 max-lg:hidden w-[400px]">
                    <div>
                        <button onClick={()=> router.back()} className="flex items-center text-[#888] font-light underline">
                            <Image src={arrowleft} alt="Retroceder"></Image>
                            {produto.produto.categoria.nome}
                        </button>
                        <p className="mt-6 max-md:mb-[32px] text-xl font-bold text-[#9D8168]">{produto.produto.name}</p>
                    </div>

                    <div className="lg:mt-12">
                        <p><b>Tamanho.</b> <b className="text-[#9D8168]">Qual é o melhor para você?</b></p>
                        <div className="flex items-center flex-wrap max-w-[380px] mt-6 justify-left">
                            {sizeButtonsList.map((content, index)=>(
                                <SizeButtons key={index} content={content} selected={selectedSize} setSelected={setSelectedSize} setProdutoFinalizado={setProdutoFinalizado}></SizeButtons>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <p><b>Volume.</b> <b className="text-[#9D8168]">Quantas gramas você deseja?</b></p>
                        <div className="flex items-center mt-6 flex-wrap max-w-[380px] justify-left">
                            {volumeButtonsList.map((content, index)=>(
                                <VolumeButtons key={index} content={content} selected={selectedVolume} setSelected={setSelectedVolume} setProdutoFinalizado={setProdutoFinalizado}></VolumeButtons>
                            ))}
                        </div>
                    </div>

                    <div className="mt-14">
                        <p><b>Técnica.</b> <b className="text-[#9D8168]">Escolha a que mais combina com você.</b></p>
                        <div className="flex items-center mt-6 flex-wrap max-w-[380px] justify-left">
                            {tecnicaButtonsList.map((content, index)=>(
                                <TecnicaButtons key={index} content={content} selected={selectedTecnica} setSelected={setSelectedTecnica} setProdutoFinalizado={setProdutoFinalizado}></TecnicaButtons>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <QuantityChanger baseValue={baseValue} setProdutoFinalizado={setProdutoFinalizado} setQuantity={setQuantity} actualValue={actualValue} setActualValue={setActualValue} quantity={quantity}></QuantityChanger>
                    </div>

                    <div className="mt-12">
                        <ProductValue actualValue={actualValue}></ProductValue>
                    </div>

                    <div className="mt-10">
                        <button onClick={()=>AddProductChart(produtoFinalizado)} className="py-4 px-8 bg-[#9D8168] text-[#fff] rounded-[10px]">
                            Adicionar à sacola
                        </button>
                    </div>

                    <div className="flex mt-10">
                        <button className="flex items-center text-center">
                            <Image src={shareproducticon} alt="Compartilhar"></Image>
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

                    <div className="mt-10">
                        <div>
                            <div className="flex justify-between mb-4">
                                <p className="text-[#888]">Sugestão de volume</p>
                                <button onClick={() => setShowHide(!showhide)}>
                                    <Image src={showhide === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                                </button>
                            </div>
                            <div className={`${showhide === true ? 'block' : 'hidden'} my-4`}>
                                <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                            </div>
                            <hr className="bg-[#000]"></hr>
                        </div>

                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#888]">Técnicas</p>
                                <button onClick={() => setShowHide2(!showhide2)}>
                                    <Image src={showhide2 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                                </button>
                            </div>
                            <div className={`${showhide2 === true ? 'block' : 'hidden'} my-4`}>
                                <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                            </div>
                            <hr className="bg-[#000]"></hr>
                        </div>

                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#888]">Cabelos naturais</p>
                                <button onClick={() => setShowHide3(!showhide3)}>
                                    <Image src={showhide3 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                                </button>
                            </div>
                            <div className={`${showhide3 === true ? 'block' : 'hidden'} my-4`}>
                                <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                            </div>
                            <hr className="bg-[#000]"></hr>
                        </div>

                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-[#888]">Envio para todo o Brasil</p>
                                <button onClick={() => setShowHide4(!showhide4)}>
                                    <Image src={showhide4 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                                </button>
                            </div>
                            <div className={`${showhide4 === true ? 'hidden' : 'block'} my-4`}>
                                <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                            </div>
                            <hr className="bg-[#000]"></hr>
                        </div>
                    </div>
                </div>
            </div>


            {/* DESKTOP VERSION BELOW */}
            <div className="flex flex-col px-2 lg:hidden">
                <div className="mt-12">
                    <button onClick={()=> router.back()} className="flex items-center text-[#888] font-light underline">
                        <Image src={arrowleft} alt="Retroceder"></Image>
                        {produto.produto.categoria.nome}
                    </button>
                    <p className="mt-6 max-md:mb-[32px] text-xl font-bold text-[#9D8168]">{produto.produto.name}</p>
                </div>

                <div className="flex justify-center">
                    <ImageViewer></ImageViewer>
                </div>

                <div className="flex flex-col items-center mt-11 mb-8">
                    <p><b>Tamanho.</b> <b className="text-[#9D8168]">Qual é o melhor para você?</b></p>
                    <div className="flex items-center flex-wrap max-w-[360px] justify-center">
                        {sizeButtonsList.map((content, index)=>(
                            <SizeButtons key={index} content={content} selected={selectedSize} setSelected={setSelectedSize} setProdutoFinalizado={setProdutoFinalizado}></SizeButtons>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <p><b>Volume.</b> <b className="text-[#9D8168]">Quantas gramas você deseja?</b></p>
                    <div className="flex items-center flex-wrap max-w-[360px] justify-center">
                        {volumeButtonsList.map((content, index)=>(
                            <VolumeButtons key={index} content={content.gramas} selected={selectedVolume} setSelected={setSelectedVolume} setProdutoFinalizado={setProdutoFinalizado}></VolumeButtons>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p><b>Técnica.</b> <b className="text-[#9D8168]">Escolha a que mais combina com você.</b></p>
                    <div className="flex items-center flex-wrap max-w-[360px] justify-center">
                        {tecnicaButtonsList.map((content, index)=>(
                            <TecnicaButtons key={index} content={content} selected={selectedTecnica} setSelected={setSelectedTecnica} setProdutoFinalizado={setProdutoFinalizado}></TecnicaButtons>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <QuantityChanger baseValue={baseValue} setProdutoFinalizado={setProdutoFinalizado} setQuantity={setQuantity} actualValue={actualValue} setActualValue={setActualValue} quantity={quantity}></QuantityChanger>
                </div>
                
                <div className="mt-12">
                    <ProductValue actualValue={actualValue}></ProductValue>
                </div>

                <div className="mt-10">
                    <button onClick={()=> AddProductChart(produtoFinalizado)} className="py-4 px-8 bg-[#9D8168] text-[#fff] rounded-[10px]">
                        Adicionar à sacola
                    </button>
                </div>

                <div className="flex mt-10">
                    <button className="flex items-center text-center">
                        <Image src={shareproducticon} alt="Compartilhar"></Image>
                        <p className="text-[#9D8168] underline">Compartilhar</p>
                    </button>
                </div>

                <div>
                    <hr className="text-[#D1D1D1] mt-[46px]"></hr>
                </div>

                <div className="mt-[40px] text-[#888888]">
                    <p>Vamos lá! Aqui está um guia fácil para escolher seu aplique perfeito:</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 1: </b>Primeiro, escolha o tamanho que você quer para o seu aplique, ou seja, o quanto ele vai ser comprido.</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 2:</b> Agora, decida quanto volume você deseja, isso é a quantia de gramas de cabelo. Se você não tem certeza de qual é volume ideal para você, não se preocupe! Dê uma olhada na seção "Volume Sugerido" logo abaixo para algumas dicas.</p>
                    <p className="mt-6"><b className="font-bold text-[#9D8168]">Passo 3:</b> Por último, escolha a técnica que você prefere para colocar o aplique. Nós explicamos todas as opções diferentes na seção "Técnicas" logo abaixo.</p>
                    <p className="mt-6">E se ainda estiver em dúvida, não hesite em entrar em contato com nossas especialistas. Elas estão prontas para ajudar!</p>
                </div>

                <div className="mt-10">
                    <div>
                        <div className="flex justify-between mb-4">
                            <p className="text-[#888]">Sugestão de volume</p>
                            <button onClick={() => setShowHide(!showhide)}>
                                <Image src={showhide === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                            </button>
                        </div>
                        <div className={`${showhide === true ? 'block' : 'hidden'} my-4`}>
                            <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                        </div>
                        <hr className="bg-[#000]"></hr>
                    </div>

                    <div>
                        <div className="flex justify-between my-4">
                            <p className="text-[#888]">Técnicas</p>
                            <button onClick={() => setShowHide2(!showhide2)}>
                                <Image src={showhide2 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                            </button>
                        </div>
                        <div className={`${showhide2 === true ? 'block' : 'hidden'} my-4`}>
                            <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                        </div>
                        <hr className="bg-[#000]"></hr>
                    </div>

                    <div>
                        <div className="flex justify-between my-4">
                            <p className="text-[#888]">Cabelos naturais</p>
                            <button onClick={() => setShowHide3(!showhide3)}>
                                <Image src={showhide3 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                            </button>
                        </div>
                        <div className={`${showhide3 === true ? 'block' : 'hidden'} my-4`}>
                            <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                        </div>
                        <hr className="bg-[#000]"></hr>
                    </div>

                    <div>
                        <div className="flex justify-between my-4">
                            <p className="text-[#888]">Envio para todo o Brasil</p>
                            <button onClick={() => setShowHide4(!showhide4)}>
                                <Image src={showhide4 === true ? uparrow : downarrow} width={20} height={20} className="mostrar/esconder" alt="Mostrar/Esconder"></Image>
                            </button>
                        </div>
                        <div className={`${showhide4 === true ? 'hidden' : 'block'} my-4`}>
                            <p className="text-[#888]">Embalamos o seu produto com todo o carinho e proteção. Enviamos para todo o Brasil, calcule o frete e prazos na página de finalização de compra.</p>
                        </div>
                        <hr className="bg-[#000]"></hr>
                    </div>
                </div>
            </div>
        </div>
    )
}