'use client'
import Link from 'next/link'

export default function AdminPage() {
    return (
        <div className='flex flex-col w-screen h-screen justify-center text-center bg-[#6b6b6b]'>
            <div className='mb-12'>
                <p className='text-lg text-[#fff]'>voce está no painel de administrador!</p>
            </div>
            
            <nav className='flex items-center justify-center'>
                <ul className='flex space-x-6'>
                    <li>
                        <Link href={'/'}>
                            <button className='p-2 rounded-md bg-[#fff]'>Página Inicial</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin-page/usuarios'}>
                            <button className='p-2 rounded-md bg-[#fff]'>Usuários</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin-page/categorias'}>
                            <button className='p-2 rounded-md bg-[#fff]'>Categorias</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin-page/produtos'}>
                            <button className='p-2 rounded-md bg-[#fff]'>Produtos</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}