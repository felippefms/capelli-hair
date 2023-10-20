'use client'

import Image from "next/image";
import { useState } from "react";
import Whatsappimg from '../src/media/whatsappimg.png';

export default function WhatsappButton() {

  const [showtext, setShowText] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 lg:bottom-10 lg:right-10 z-30">
      <button className="flex items-center">
        <p className={`${showtext ? "animate-wpptextslide" : "hidden"} showtext rounded-l-[16px] px-[20px] py-[8px] bg-[#3f3f3f] text-[#fff] z-20`}>Está procurando ajuda?</p>
        <Image src={Whatsappimg} alt="Whatsapp" className="z-30" onMouseOver={() => {setShowText(!showtext)}} onMouseLeave={() => {setShowText(!showtext)}}/>
      </button>
    </div>
  );
}