'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/src/media/logo.svg";
import Menubtn from "@/src/media/menubtn.svg";
import Closebtn from "@/src/media/closebtn.svg";
import Carrinhoimg from "@/src/media/bolsa.png";
import Searchimg from "@/src/media/searchimg.png";
import Searchimgdsktp from "@/src/media/searchimgdsktp.png";
import Unlock from "@/src/media/unlock.svg";
import ArrowRight2img from "@/src/media/arrowright2.svg";
import Instaimg from "@/src/media/instaimg.png";
import Tiktokimg from "@/src/media/tiktokimg.png";
import Facebookimg from "@/src/media/facebookimg.png";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    //controlar rolamento da tela quando o menu está aberto
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="flex">
      <button onClick={openMenu} className="ml-6">
        <Image src={Menubtn} alt="Menu"></Image>
      </button>

      <nav
        id="menu"
        className={`h-screen w-full absolute z-30 bg-[#F1E0CE] ${isMenuOpen ? "" : "hidden"} xl:flex xl:flex-row xl:h-auto xl:items-center xl:justify-center xl:bg-[#fff]`}>
        <div className="flex flex-row justify-between h-20 flex-shrink-0 xl:m-0">
          <button className="ml-4 xl:hidden">
            <Image src={Closebtn} alt="Fechar" onClick={closeMenu}></Image>
          </button>
          <div className="flex">
            <Image src={Logo} alt="Capelli Hair Logo" className="mr-2 xl:mr-10"></Image>
          </div>
          <button className="pr-4  xl:p-0">
            <Image src={Carrinhoimg} alt="Carrinho" className="w-7 xl:hidden"></Image>
          </button>
        </div>

        <div className="flex rounded-xl mx-6 h-11 px-4 border border-[#888] bg-white text-center xl:m-0 xl:hidden">
          <button className="pr-4">
            <Image src={Searchimg} alt="Pesquisar"></Image>
          </button>
          <input className="w-full rounded-xl border-none outline-none" type="text" placeholder="Busque por cores, cabelos, técnicas..."></input>
        </div>

        <ul className="flex flex-col items-center space-y-10 pt-10 text-[#2E2E2E] text-lg xl:text-base xl:flex-row xl:mr-8 xl:p-0 xl:space-y-0 xl:space-x-[25px] whitespace-nowrap">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/">Cabelos</Link>
          </li>
          <li>
            <Link href="/">Encontrar minha cor</Link>
          </li>
          <li>
            <Link href="/">Quem somos</Link>
          </li>
          <li>
            <Link href="/">Fale conosco</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center pt-14 space-y-12 xl:flex-row xl:m-0 xl:p-0 xl:space-y-0 xl:space-x-[9px] xl:mr-[26px]">
          <Link href="login">
            <button className="flex items-center justify-center py-2 px-5 rounded-lg text-white bg-[#9D8168]">
              <p className="pr-1">Entrar</p>
              <Image src={Unlock} alt="Entrar" className="w-4"></Image>
            </button>
          </Link>

          <Link href="/criar-conta">
            <button className="flex items-center rounded-lg py-3 text-[#2E2E2E] whitespace-nowrap">
              <p className="pr-1 xl:pr-1">Criar conta</p>
              <Image
                src={ArrowRight2img}
                alt="Entrar"
                className="w-5 flex-shrink-0"
              ></Image>
            </button>
          </Link>
        </div>

        <div className="flex justify-center pt-12 space-x-6 xl:p-0 xl:space-x-0 xl:hidden">
          <Image src={Facebookimg} alt="Facebook" className="w-8 h-8"></Image>
          <Image src={Instaimg} alt="Instagram" className="w-8 h-8"></Image>
          <Image src={Tiktokimg} alt="Tiktok" className="w-8 h-8"></Image>
        </div>

        <div className="flex justify-center pt-12 space-x-6 xl:p-0 max-xl:hidden xl:space-x-4 flex-shrink-0">
          <button>
            <Image src={Searchimgdsktp} alt="Pesquisar" className="w-7 h-7"></Image>
          </button>
          <button className="pr-4 xl:p-0">
            <Image src={Carrinhoimg} alt="Carrinho" className="w-7 h-7 max-xl:hidden"></Image>
          </button>
          <button>
            <Image src={Instaimg} alt="Instagram" className="w-7 h-7"></Image>
          </button>
        </div>
      </nav>
    </div>
  );
}