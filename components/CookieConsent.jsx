'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [allowed, setAllowed] = useState(''); // Initialize state with an empty string

    useEffect(() => {
        const cookieInfo = localStorage.getItem("cookieinfo");
        if (cookieInfo === '1') {
            setAllowed('1');
        } else {
            setAllowed('0');
            localStorage.setItem("cookieinfo", "0");
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieinfo", "1");
        setAllowed('1');
    };

    return (
        allowed === '0' ? (
            <div className="fixed bottom-5 mx-4 px-4 md:left-5 rounded-[8px] bg-[#fff] md:h-[228px] md:w-[562px] z-50">
                <div className="mt-4">
                    <p className="font-semibold text-[16px] cursor-default">Esse site usa cookies</p>
                </div>

                <div className="mt-2 text-[14px]">
                    <p className="cursor-default">Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.</p>
                    <div className="w-fit">
                        <Link href={'/'}>
                            <p className="underline text-[#9D8168]">Política de Privacidade</p>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full justify-end">
                    <button className="py-[8px] px-[16px] mb-[24px] mt-[32px] rounded-[5px] text-[#fff] bg-[#9D8168]" onClick={() => handleAccept()}>Entendo</button>
                </div>
            </div>
        ) : null
    );
}