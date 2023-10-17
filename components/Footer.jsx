import Image from 'next/image'
import Link from 'next/link'

import Instafooterimg from "@/src/media/instafooterimg.png";
import Tiktokfooterimg from "@/src/media/tiktokfooterimg.png";
import Faceboofooterkimg from "@/src/media/facebookfooterimg.png";

import Logofooterimg from '@/src/media/logofooter.png'

export default function Footer(){
    return(
        <footer className="flex flex-col md:flex-row md:justify-between bg-[#9D8168] text-[#ffff]">
            <div className='flex flex-col mt-12 md:my-[64px] ml-9 md:ml-[152px]'>
                <Image src={Logofooterimg} alt="Capelli Hair Logo"></Image>
                <p className="text-[#ffff]">Ajudamos você a encontrar</p>
                <p className="text-[#ffff]">o cabelo dos sonhos.</p>
                <div className='flex mt-11'>
                    <Image src={Faceboofooterkimg} alt='Facebook' className='w-8 h-8 flex'></Image>
                    <Image src={Instafooterimg} alt='Facebook' className='w-8 h-8 flex ml-12'></Image>
                    <Image src={Tiktokfooterimg} alt='Facebook' className='w-8 h-8 flex ml-12'></Image>
                </div>
            </div>
            <div className='flex flex-col md:flex-row ml-[49px] md:mr-[152px] md:space-x-12'>
                <div className='mt-[60px]'>
                    <p className='font-bold'>Sobre nós</p>
                    <nav>
                        <ul>
                            <li className='mt-6'><Link  href={""}>Quem somos</Link></li>
                            <li className='mt-6'><Link  href={""}>Perguntas frequentes</Link></li>
                            <li className='mt-6'><Link  href={""}>Termos de uso</Link></li>
                            <li className='mt-6'><Link  href={""}>Políticas de devolução</Link></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className='mt-16 font-bold'>Descubra</p>
                    <nav>
                        <ul>
                            <li className='mt-6'><Link  href={""}>Cuidados com o cabelo</Link></li>
                            <li className='mt-6'><Link  href={""}>Dicas para o volume</Link></li>
                            <li className='mt-6'><Link  href={""}>Técnicas de aplique</Link></li>
                            <li className='mt-6'><Link  href={""}>Fale conosco</Link></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className='mt-16 font-bold'>Capelli Hair</p>
                    <nav>
                        <ul>
                            <li className='mt-6'><Link  href={""}>(21) 91234-5678</Link></li>
                            <li className='mt-6'><Link  href={""}>CNPJ 12.345.678/0001-23</Link></li>
                            <li className='mt-6 mb-[55px]'><Link  href={""}>Rio de Janeiro - RJ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}