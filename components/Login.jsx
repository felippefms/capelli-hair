'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import CloseBtn from "@/src/media/closebtn.svg"
import Logo from "@/src/media/logo.svg"
import FacebookLoginImg from "@/src/media/facebookloginimg.png"
import GoogleLoginImg from "@/src/media/googleloginimg.png"
import AppleLoginImg from "@/src/media/appleloginimg.png"
import Eyeimg from "@/src/media/eyeimg.png"
import Eyeslashimg from "@/src/media/eyeslash.png"

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return(
        <div id="loginmodal" className="w-full hidden z-30">
            <div className="flex flex-col w-full h-screen bg-[#ffff]">
                <div className="flex flex-row justify-center h-20 items-center">
                    <button onClick={closeLogin} className="absolute left-0 ml-4">
                        <Image src={CloseBtn} alt="Fechar"></Image>
                    </button>
                    <p className="text-lg text-[#9D8168]">Seja bem-vinda a</p>
                </div>
                <div className="flex justify-center mb-12">
                    <Image src={Logo} alt="Capelli Hair Logo"></Image>
                </div>
                <div className="px-6">
                    <div className="flex flex-col justify-center">
                        <input placeholder="E-maaaaail" type="email" className="w-full border mb-2 px-4 min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                        <div className="relative">
                            <input placeholder="Senha" type={showPassword ? "text" : "password"} className="w-full border pl-4 pr-12 relative min-h-[61px] max-h-[61px] rounded-[10px] border-[#888888]"></input>
                            <button onClick={togglePasswordVisibility} className="absolute right-0 h-full px-4">
                                <Image src={showPassword ? Eyeimg : Eyeslashimg} alt="Esconder/Mostrar Senha"></Image>
                            </button>
                        </div>
                        <Link href={''} className="mt-5 underline text-[#888888] mb-8">
                            Esqueci minha senha
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button className="flex justify-center w-full rounded-lg py-[10px] text-lg text-[#ffff] bg-[#9D8168]">
                            Entrar
                        </button>
                        <p className="text-lg text-[#9D8168] my-8">
                            Ou
                        </p>
                        <button className="flex w-full py-[10px] justify-center relative rounded-lg text-[#ffff] bg-[#1877F2]">
                            <Image src={FacebookLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4 bg-[#1877F2]"></Image>
                            Continuar com Facebook
                        </button>
                        <button className="flex w-full py-[10px] mt-4 justify-center relative rounded-lg text-[#888] bg-[#ffff] border">
                            <Image src={GoogleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com google
                        </button>
                        <button className="flex w-full py-[10px] mt-4 justify-center relative rounded-lg text-[#ffff] bg-[#171717]">
                            <Image src={AppleLoginImg} alt="Continuar com Facebook" className="absolute left-0 ml-4"></Image>
                            Continuar com Apple
                        </button>
                    </div>
                    <div className="flex justify-center mt-8 whitespace-nowrap">
                        <p className="text-[#888]">Ainda não está na Capelli Hair?</p>
                        <Link href="criar-conta" className="ml-2 underline text-[#9D8168]">Crie uma conta</Link>
                    </div>
                </div>    
            </div>
        </div>
    )
}

// export function openLogin(){
//     document.getElementById("loginmodal")!.classList.remove("hidden");
//     document.getElementById("loginmodal")!.classList.remove("animate-fadeout");
//     document.getElementById("loginmodal")!.classList.add("animate-fadein");
//     document.getElementById("loginmodal")!.classList.add("absolute");
// }

// export function closeLogin(){
//     document.getElementById("loginmodal")!.classList.remove("animate-fadein");
//     document.getElementById("loginmodal")!.classList.add("animate-fadeout");
//     setTimeout(() =>{
//       document.getElementById("loginmodal")!.classList.add("hidden");
//     },1100)
// }