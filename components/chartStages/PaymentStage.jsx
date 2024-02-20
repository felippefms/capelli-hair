'use client'

import { useState } from 'react';
import { useChartStore } from '../../store/ChartStore';
import Image from 'next/image';

import downarrowimg from '../../src/media/downarrow3.png';
import uparrowimg from '../../src/media/uparrow2.png';
import nupayimg from '../../src/media/nupayimg.png';
import nupayimg1 from '../../src/media/nupayimg1.png';
import nupayimg2 from '../../src/media/nupayimg2.png';
import nupayimg3 from '../../src/media/nupayimg3.png';
import nupayimg4 from '../../src/media/nupayimg4.png';

export default function PaymentStage() {
    const chartStage = useChartStore((state) => state.ChartStage)
    const setChartStage = useChartStore((state) => state.setChartStage)

    const [pixdesc, setPixDesc] = useState(false);
    const [boletodesc, setBoletoDesc] = useState(false);
    const [creddesc, setCredDesc] = useState(false);
    const [nupaydesc, setNupayDesc] = useState(false);
    const [applepaydesc, setApplePayDesc] = useState(false);
    const [parcelamentoOptions, setParcelamentoOptions] = useState(false);

    return (
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-start mb-[40px] lg:mb-[80px] items-center'>
            <div className='w-full flex flex-col max-w-[338px] px-[36px] lg:mr-[64px] lg:mt-8 lg:max-w-[704px]'>
                <p className='text-lg font-semibold mt-[20px] text-[#9D8168]'>Como deseja pagar?</p>
                <div>
                    {/*-----------------------------------------------PIX---------------------------------------------------------- */}

                    <div className='flex flex-col items-center mt-[15px]'>
                        <div className='flex flex-row items-center w-full'>
                            <div className='flex items-center justify-center rounded-full border w-5 h-4 mr-4 border-[#9D8168]'>
                                <input onClick={() => setPixDesc(!pixdesc)} type="radio" name="paymentMethod" id='pix' className='appearance-none h-2 w-2 rounded-full p-[3px] checked:bg-[#9D8168]'></input>
                            </div>
                            <label for='pix' className='font-semibold w-full'>PIX</label>
                            <button onClick={() => setPixDesc(!pixdesc)}>
                                <div className='w-[20px] h-[20px] relative shrink-0'>
                                    <Image src={pixdesc === true ? uparrowimg : downarrowimg} fill alt='arrow'></Image>
                                </div>
                            </button>
                        </div>
                        {pixdesc && (
                            <div>
                                <p className='text-[14px] mt-3 text-[#888888]'>Ganhe até 10% de desconto com aprovação imediata, acelerando o envio do pedido.</p>
                            </div>
                        )}
                        <hr className="w-full my-[15px] border-[#D1D1D1]"></hr>
                    </div>

                     {/*---------------------------------------------BOLETO------------------------------------------------------------ */}

                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row items-center w-full'>
                            <div className='flex items-center justify-center rounded-full border w-5 h-4 mr-4 border-[#9D8168]'>
                                <input onClick={() => setBoletoDesc(!boletodesc)} type="radio" name="paymentMethod" id='boleto' className='appearance-none h-2 w-2 rounded-full p-[3px] checked:bg-[#9D8168]'></input>
                            </div>
                            <label for='boleto' className='font-semibold w-full'>Boleto bancário</label>
                            <button onClick={() => setBoletoDesc(!boletodesc)}>
                                <div className='w-[20px] h-[20px] relative shrink-0'>
                                    <Image src={boletodesc === true ? uparrowimg : downarrowimg} fill alt='arrow'></Image>
                                </div>
                            </button>
                        </div>
                            {boletodesc && (
                                <div>
                                    <p className='text-[14px] mt-3 text-[#888888]'>Receba até 10% de desconto. Você pode abrir ou imprimir o boleto após finalizar. Mas fique de olho! Após a data de vencimento, seu pedido será cancelado automaticamente.</p>
                                </div>
                            )}
                            <hr className="w-full my-[15px] border-[#D1D1D1]"></hr>
                    </div>

                     {/*--------------------------------------------CARTÃO DE CRÉDITO------------------------------------------------------------- */}

                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row items-center w-full'>
                            <div className='flex items-center justify-center rounded-full border w-5 h-4 mr-4 border-[#9D8168]'>
                                <input onClick={() => setCredDesc(!creddesc)} type="radio" name="paymentMethod" id='credito' className='appearance-none h-2 w-2 rounded-full p-[3px] checked:bg-[#9D8168]'></input>
                            </div>
                            <label for='credito' className='font-semibold w-full'>Cartão de crédito</label>
                            <button onClick={() => setCredDesc(!creddesc)}>
                                <div className='w-[20px] h-[20px] relative shrink-0'>
                                    <Image src={creddesc === true ? uparrowimg : downarrowimg} fill alt='arrow'></Image>
                                </div>
                            </button>
                        </div>
                        {creddesc && (
                            <div className='flex'>
                                <form>
                                    <input type="text" placeholder='*Número do cartão' className='w-full lg:max-w-[48%] lg:mr-2 rounded-[10px] my-3 border h-[44px] px-3 text-sm'></input>
                                    <input type="text" placeholder='*Nome impresso no cartão' className='w-full lg:max-w-[48%] lg:ml-2 rounded-[10px] my-3 border h-[44px] px-3 text-sm'></input>
                                    <input type="text" placeholder='*Validade' className='w-full rounded-[10px] my-3 lg:max-w-[48%] lg:mr-2 border h-[44px] px-3 text-sm'></input>
                                    <input type="text" placeholder='*Código de segurança' className='w-full rounded-[10px] lg:max-w-[48%] lg:ml-2 my-3 border h-[44px] px-3 text-sm'></input>
                                    <input type="text" placeholder='*CPF/CNPJ do titular' className='w-full rounded-[10px] lg:max-w-[48%] lg:mr-2 my-3 border h-[44px] px-3 text-sm'></input>
                                    <input type="text" placeholder='*Data de nascimento' className='w-full rounded-[10px] lg:max-w-[48%] lg:ml-2 my-3 border h-[44px] px-3 text-sm'></input>
                                    <div onClick={() => setParcelamentoOptions(!parcelamentoOptions)} className='relative'>
                                        <input type="text" placeholder='*Forma de pagamento' className='w-full cursor-pointer rounded-[10px] my-3 lg:max-w-[622px] border h-[44px] px-3 text-sm'></input>
                                        <div className='w-[20px] h-[20px] cursor-pointer shrink-0 absolute right-5 bottom-[1.4rem]'>
                                            <Image src={parcelamentoOptions == true ? uparrowimg : downarrowimg} fill alt='Forma de pagamento'></Image>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                        <hr className="w-full my-[15px] border-[#D1D1D1]"></hr>
                    </div>

                     {/*--------------------------------------------------NUPAY------------------------------------------------------- */}

                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row items-center w-full'>
                            <div className='flex items-center justify-center rounded-full border w-5 h-4 mr-4 border-[#9D8168]'>
                                <input onClick={() => setNupayDesc(!nupaydesc)} type="radio" name="paymentMethod" id='nupay' className='appearance-none h-2 w-2 rounded-full p-[3px] checked:bg-[#9D8168]'></input>
                            </div>
                            <label for='nupay' className='font-semibold w-full'>NuPay</label>
                            <button onClick={() => setNupayDesc(!nupaydesc)}>
                                <div className='w-[20px] h-[20px] relative shrink-0'>
                                    <Image src={nupaydesc === true ? uparrowimg : downarrowimg} fill alt='arrow'></Image>
                                </div>
                            </button>
                        </div>
                        {nupaydesc && (
                            <div className='flex flex-col w-full mt-4'>
                                <div className='w-[132px] h-[40px] relative'>
                                    <Image src={nupayimg} alt='nupay'></Image>
                                </div>
                                
                                <p className='mt-[16px] text-[14px] text-[#4A0A73]'>Mais rápido, fácil e seguro</p>
                                
                                <div className='flex mt-[31px]'>
                                    <div className='w-[24px] h-[24px] shrink-0 relative'>
                                        <Image src={nupayimg1} fill alt='Conheça o novo pagamento do Nubank!'></Image>
                                    </div>
                                    <p className='ml-[11px] text-[14px] text-[#888888]'>Conheça o novo pagamento do Nubank!</p>
                                </div>

                                <div className='flex mt-[21px]'>
                                    <div className='w-[24px] h-[24px] shrink-0 relative'>
                                        <Image src={nupayimg2} fill alt='Parcele sua compra em juros ou pague à vista pelo débito'></Image>
                                    </div>
                                    <p className='ml-[11px] text-[14px] text-[#888888]'>Parcele sua compra em juros ou pague à vista pelo débito</p>
                                </div>

                                <div className='flex mt-[21px]'>
                                    <div className='w-[24px] h-[24px] shrink-0 relative'>
                                        <Image src={nupayimg3} fill alt='Não precisa preencher os dados do seu cartão'></Image>
                                    </div>
                                    <p className='ml-[11px] text-[14px] text-[#888888]'>Não precisa preencher os dados do seu cartão</p>
                                </div>

                                <div className='flex mt-[21px]'>
                                    <div className='w-[24px] h-[24px] shrink-0 relative'>
                                        <Image src={nupayimg4} fill alt='Pode confiar, é seguro. Sua compra é protegida pelas nossas medidas de segurança'></Image>
                                    </div>
                                    <p className='ml-[11px] text-[14px] text-[#888888]'>Pode confiar, é seguro. Sua compra é protegida pelas nossas medidas de segurança</p>
                                </div>

                                <div>
                                    <input type="text" placeholder='*CPF do titular da NuConta' className='w-full rounded-[10px] mt-3 border h-[44px] px-3 text-sm'></input>
                                    <p className='text-[10px] mt-[8px] text-[#888888]'>Quer pagar com a NuConta de outra pessoa? É só inserir o CPF do titular.</p>
                                    <p className='text-[12px] mt-[24px] font-semibold text-[#888888]'>*Para usar essa forma de pagamento, você precisa ser cliente do Nubank e ter limite de crédito ou saldo disponível na conta.</p>
                                </div>
                            </div>
                        )}
                        <hr className="w-full my-[15px] border-[#D1D1D1]"></hr>
                    </div>

                     {/*---------------------------------------------------APPLE PAY------------------------------------------------------ */}

                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row items-center w-full'>

                            <div className='flex items-center justify-center rounded-full border w-5 h-4 mr-4 border-[#9D8168]'>
                                <input onClick={() => setApplePayDesc(!applepaydesc)} type="radio" name="paymentMethod" id='applepay' className='appearance-none h-2 w-2 rounded-full p-[3px] checked:bg-[#9D8168]'></input>
                            </div>

                            <label for='applepay' className='font-semibold w-full'>Apple Pay</label>

                            <button onClick={() => setApplePayDesc(!applepaydesc)}>
                                <div className='w-[20px] h-[20px] relative shrink-0'>
                                    <Image src={applepaydesc === true ? uparrowimg : downarrowimg} fill alt='arrow'></Image>
                                </div>
                            </button>
                        </div>
                        {applepaydesc && (
                            <div>
                                <p className='text-[14px] mt-3 text-[#888888]'>Otimize seu tempo com o Apple Pay. Com um toque, efetue pagamentos online de maneira rápida e segura.</p>
                            </div>
                        )}

                        <hr className="w-full my-[15px] border-[#D1D1D1]"></hr>
                    </div>

                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-[56px] items-center lg:justify-center'>
                <div className='w-full max-w-[320px] flex flex-col max-[320px]:border-t min-[321px]:border px-6 rounded-[24px] border-[#D1D1D1]'>
                    <div className='pt-6'>
                        <p className='text-[20px] font-[600] text-[#9D8168]'>Resumo</p>
                        <div className='px-2 pt-6'>
                            <input placeholder='Cupom de desconto' className='w-full h-[44px] px-2 border rounded-[10px] border-[#888]'></input>
                        </div>
                        <div className='pt-5'>
                            <p className='text-[#888]'>Frete</p>
                            <p className='font-bold'>R$: 0,00</p>
                            <hr className='my-4'></hr>
                            <p className='text-[#888]'>Valor total</p>
                            <p className='font-[600] text-[24px] text-[#2E2E2E]'>R$: 9.891,00</p>
                            <p className='text-[14px] text-[#888]'>em até 10x de R$ 989,10 sem juros</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center'>
                        <div>
                            <button className='w-[288px] h-[53px] mt-10 rounded-[10px] text-[#fff] bg-[#9D8168]' onClick={() => setChartStage('revision')}>Ir para o pagamento</button>
                        </div>
                        <div>
                            <button className='w-[288px] h-[53px] my-6 rounded-[10px] border border-[#9D8168] text-[#9D8168]'>Continuar comprando</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}