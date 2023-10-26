import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'

import Logo from '../src/media/logo.svg'
import Carrinhoimg  from '../src/media/bolsa.png'

export default function Header() {
    return (
        <header className='flex flex-row justify-between h-20 shadow-sm shadow-[#e7d5c2e1]'>
            <Menu></Menu>
            <div className='flex items-center'>
                <Link href='/'>
                    <Image src={Logo} alt="Capelli Hair Logo"></Image>
                </Link>
            </div>
            <div className='flex mr-4 items-center content-center'>
                <Link href='/carrinho'>
                    <Image src={Carrinhoimg} alt="Carrinho" className='w-7'></Image>
                </Link>
            </div>
        </header>
    )
}