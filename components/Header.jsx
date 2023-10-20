import Image from 'next/image'
import Menu from './Menu'

import Logo from '../src/media/logo.svg'
import Carrinhoimg  from '../src/media/bolsa.png'

export default function Header() {
    return (
        <header className='flex flex-row justify-between h-20 shadow-sm shadow-[#e7d5c2e1]'>
            <Menu></Menu>
            <div className='flex'>
                <Image src={Logo} alt="Capelli Hair Logo"></Image>
            </div>
            <div className='flex mr-4 items-center content-center'>
                <Image src={Carrinhoimg} alt="Carrinho" className='w-7'></Image>
            </div>
        </header>
    )
}