'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { HandleLogin, HandleSignUp, GoogleSignUp } from "../app/api/requests";
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react";

import Logo from "../src/media/logo.svg";
import Menubtn from "../src/media/menubtn.svg";
import Closebtn from "../src/media/closebtn.svg";
import Carrinhoimg from "../src/media/bolsa.png";
import Searchimg from "../src/media/searchimg.png";
import Searchimgdsktp from "../src/media/searchimgdsktp.png";
import Unlock from "../src/media/unlock.svg";
import ArrowRight2img from "../src/media/arrowright2.svg";
import Instaimg from "../src/media/instaimg.png";
import Tiktokimg from "../src/media/tiktokimg.png";
import Facebookimg from "../src/media/facebookimg.png";

import CloseBtn from "../src/media/closebtn.svg"
import FacebookLoginImg from "../src/media/facebookloginimg.png"
import GoogleLoginImg from "../src/media/googleloginimg.png"
import AppleLoginImg from "../src/media/appleloginimg.png"
import Eyeimg from "../src/media/eyeimg.png"
import Eyeslashimg from "../src/media/eyeslash.png"

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const activeMenuItem = usePathname();

  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const session = useSession();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const googleLogin = async() => {
    signIn('google')
    .then(
      googleLogin2()
    )
  }

  const googleLogin2 = async () => {
    if (session.status === 'authenticated') {
      GoogleSignUp(session.data.user.name,session.data.user.email)
    }
  }

  useEffect(() => {
    //controlar rolamento da tela quando o menu está aberto
    if (menuOpen || loginOpen || signUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen,loginOpen,signUpOpen]);

  return (
    <div className="flex">
      <div className="flex justify-center items-center">
        <button onClick={(() => setMenuOpen(!menuOpen))} className="ml-6">
          <Image src={Menubtn} alt="Menu"></Image>
        </button>
      </div>

      <nav
        id="menu"
        className={`h-screen w-full absolute z-30 bg-[#F1E0CE] ${menuOpen ? "animate-fadein" : "hidden"} xl:flex xl:flex-row xl:h-auto xl:items-center xl:justify-center xl:bg-[#fff]`}>
        <div className="flex flex-row justify-between h-20 flex-shrink-0 xl:m-0">
          <div className="flex justify-center items-center">
            <button className="ml-4 xl:hidden">
              <Image src={Closebtn} alt="Fechar" onClick={(() => setMenuOpen(!menuOpen))}></Image>
            </button>
          </div>
          <div className="flex items-center mr-2 xl:mr-10">
            <Link href={'/'}>
              <Image src={Logo} alt="Capelli Hair Logo"></Image>
            </Link>
          </div>
          <button className="pr-4 xl:p-0">
            <Link href='/carrinho'>
              <Image src={Carrinhoimg} alt="Carrinho" className="w-7 xl:hidden"></Image>
            </Link>
          </button>
        </div>

        <div className="flex rounded-xl mx-6 h-11 px-4 border border-[#888] bg-white text-center xl:m-0 xl:hidden">
          <button className="pr-4">
            <Image src={Searchimg} alt="Pesquisar"></Image>
          </button>
          <input className="w-full rounded-xl border-none outline-none" type="text" placeholder="Busque por cores, cabelos, técnicas..."></input>
        </div>

        <ul className="flex flex-col items-center space-y-10 pt-10 text-[#2E2E2E] text-lg xl:text-base xl:flex-row xl:mr-8 xl:p-0 xl:space-y-0 xl:space-x-[25px] whitespace-nowrap">
          <li className={activeMenuItem === "/" ? "text-[#9D8168] font-[700]" : ""}>
            <Link href="/">Início</Link>
          </li>
          <li className={activeMenuItem === "/cabelos" ? "text-[#9D8168] font-[700]" : ""}>
            <Link href="/cabelos">Cabelos</Link>
          </li>
          <li className={activeMenuItem === "/encontrar-cor" ? "text-[#9D8168] font-[700]" : ""}>
            <Link href="/">Encontrar minha cor</Link>
          </li>
          <li className={activeMenuItem === "/quem-somos" ? "text-[#9D8168] font-[700]" : ""}>
            <Link href="/quem-somos">Quem somos</Link>
          </li>
          <li className={activeMenuItem === "/fale-conosco" ? "text-[#9D8168] font-[700]" : ""}>
            <Link href="/">Fale conosco</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center pt-14 space-y-12 xl:flex-row xl:m-0 xl:p-0 xl:space-y-0 xl:space-x-[9px] xl:mr-[26px]">
            <button onClick={(() => setLoginOpen(!loginOpen))} className="flex items-center justify-center py-2 px-5 rounded-lg text-white bg-[#9D8168]">
              <p className="pr-1">Entrar</p>
              <Image src={Unlock} alt="Entrar" className="w-4"></Image>
            </button>

            <button onClick={(() => setSignUpOpen(!signUpOpen))} className="flex items-center rounded-lg py-3 text-[#2E2E2E] whitespace-nowrap">
              <p className="pr-1 xl:pr-1">Criar conta</p>
              <Image
                src={ArrowRight2img}
                alt="Entrar"
                className="w-5 flex-shrink-0"
              ></Image>
            </button>
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
            <Link href='/carrinho'>
              <Image src={Carrinhoimg} alt="Carrinho" className="w-7 h-7 max-xl:hidden"></Image>
            </Link>
          </button>
          <button>
            <Image src={Instaimg} alt="Instagram" className="w-7 h-7"></Image>
          </button>
        </div>
      </nav>
{/**-------------------------LOGIN---------------------------- */}
      <div id="loginmodal" className={`w-full absolute ${loginOpen ? "animate-fadein" : "hidden"} z-30`}>
          <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:bg-[#2e2e2e7e]">
            <div className="flex flex-col w-full h-screen bg-[#F1E0CE] lg:bg-[#fff] lg:w-[50vh] lg:mt-11 lg:h-auto lg:rounded-[24px]">
                <div className="flex flex-row justify-center items-center mt-5 lg:justify-start">
                    <button onClick={(() => setLoginOpen(!loginOpen))} className="absolute left-0 ml-4 lg:relative lg:mr-24">
                        <Image src={CloseBtn} alt="Fechar"></Image>
                    </button>
                    <p className="text-lg cursor-default text-[#9D8168]">Seja bem-vinda a</p>
                </div>
                <div className="flex justify-center mb-12">
                    <Image src={Logo} alt="Capelli Hair Logo"></Image>
                </div>
                <div className="px-6">
                    <div className="flex flex-col justify-center">
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                        <div className="relative">
                            <input placeholder="Senha" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border pl-4 pr-12 relative min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                            <button onClick={togglePasswordVisibility} className="absolute right-0 h-full px-4">
                                <Image src={showPassword ? Eyeimg : Eyeslashimg} alt="Esconder/Mostrar Senha"></Image>
                            </button>
                        </div>
                        <Link href={''} className="mt-5 underline text-[#888888] mb-8">
                            Esqueci minha senha
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button onClick={() => HandleLogin(email, password)} className="flex justify-center w-full rounded-lg py-[10px] text-lg text-[#ffff] bg-[#9D8168]">
                            Entrar
                        </button>
                        <p className="text-lg cursor-default text-[#9D8168] my-8">
                            Ou
                        </p>
                        <button onClick={() => signIn('facebook')} className="flex w-full py-[10px] justify-center relative rounded-lg text-[#ffff] bg-[#1877F2]">
                            <Image src={FacebookLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4 bg-[#1877F2]"></Image>
                            Continuar com Facebook
                        </button>
                        <button onClick={() => googleLogin()} className="flex w-full py-[10px] mt-4 justify-center relative rounded-lg text-[#888] bg-[#ffff] border">
                            <Image src={GoogleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com google
                        </button>
                        <button className="flex w-full py-[10px] mt-4 justify-center relative rounded-lg text-[#ffff] bg-[#171717]">
                            <Image src={AppleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com Apple
                        </button>
                    </div>
                    <div className="flex justify-center mt-8 lg:mb-[36px] max-[380px]:text-[0.700rem] text-sm">
                        <p className="cursor-default text-[#888]">Ainda não está na Capelli Hair?</p>
                        <button onClick={(() => setSignUpOpen(!signUpOpen))} className="ml-2 underline text-[#9D8168]">Crie uma conta</button>
                    </div>
                </div>    
            </div>
          </div>
        </div>
{/**-------------------------CREATE ACCOUNT--------------------------- */}
        <div className={`flex absolute flex-col w-full ${signUpOpen ? "animate-fadein" : "hidden"} animate-fadein z-30`}>
          <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:bg-[#2e2e2e7e]">
            <div className="flex flex-col w-full h-screen bg-[#F1E0CE] lg:bg-[#fff] lg:w-[50vh] lg:mt-11 lg:h-auto lg:rounded-[24px]">
                <div className="flex flex-row justify-center items-center lg:justify-start">
                        <button onClick={(() => setSignUpOpen(!signUpOpen))} className="absolute left-4 top-5 lg:relative lg:mr-24">
                            <Image src={CloseBtn} alt="Fechar"></Image>
                        </button>
                    <p className="mt-[1.6rem] text-lg text-[#9D8168]">Seja bem-vinda a</p>
                </div>
                <div className="flex justify-center mt-6">
                    <Image src={Logo} alt="Capelli Hair Logo"></Image>
                </div>
                <div className="px-6">
                    <div className="flex flex-col justify-center space-y-6">
                        <input placeholder="Nome Completo" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border pl-4 pr-12 mt-8 relative h-11 rounded-[10px] border-[#888888]"></input>
                        <input placeholder="Telefone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-4 h-11 rounded-[10px] border-[#888888]"></input>
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border pl-4 pr-12 relative h-11 rounded-[10px] border-[#888888]"></input>
                        <div className="relative">
                            <input placeholder="Senha" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border pl-4 pr-12 relative h-11 rounded-[10px] border-[#888888]"></input>
                            <button onClick={togglePasswordVisibility} className="absolute right-0 h-full px-4">
                                <Image src={showPassword ? Eyeimg : Eyeslashimg} alt="Esconder/Mostrar Senha"></Image>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6">
                        <button onClick={() => HandleSignUp(fullName, phone, email, password)} className="flex justify-center w-full rounded-lg py-[10px] text-lg text-[#ffff] bg-[#9D8168]">
                            Criar Conta
                        </button>
                        <p className="text-lg text-[#9D8168] my-8">
                            Ou
                        </p>
                        <button className="flex w-full h-11 py-[10px] justify-center relative rounded-lg text-[#ffff] bg-[#1877F2]">
                            <Image src={FacebookLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4 bg-[#1877F2]"></Image>
                            Continuar com Facebook
                        </button>
                        <button onClick={() => signIn('google')} className="flex w-full h-11 py-[10px] mt-4 justify-center relative rounded-lg text-[#888] bg-[#ffff] border">
                            <Image src={GoogleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com google
                        </button>
                        <button className="flex w-full h-11 py-[10px] mt-4 justify-center relative rounded-lg text-[#ffff] bg-[#171717]">
                            <Image src={AppleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com Apple
                        </button>
                    </div>
                    <div className="flex justify-center mt-8 whitespace-nowrap lg:mb-[36px]">
                        <p className="text-[#888]">Já tem conta?</p>
                        <button onClick={() => loginOpen ? setSignUpOpen(!signUpOpen) : (setLoginOpen(true), setSignUpOpen(false))} className="ml-2 underline text-[#9D8168]">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export function openLogin(){
  document.getElementById("loginmodal").classList.remove("hidden");
  document.getElementById("loginmodal").classList.remove("animate-fadeout");
  document.getElementById("loginmodal").classList.add("animate-fadein");
  document.getElementById("loginmodal").classList.add("absolute");
}

export function closeLogin(){
  document.getElementById("loginmodal").classList.remove("animate-fadein");
  document.getElementById("loginmodal").classList.add("animate-fadeout");
  setTimeout(() =>{
    document.getElementById("loginmodal").classList.add("hidden");
  },1100)
}