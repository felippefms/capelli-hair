'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

import imageviewerclose from "../src/media/imageviewerclose.png";
import imageviewerprevious from "../src/media/imageviewerprevious.png";
import imageviewernext from "../src/media/imageviewernext.png";

import image1 from "../src/media/fotomodelo1.png"
import image2 from "../src/media/fotomodelo2.png"
import image3 from "../src/media/fotomodelo3.png"
import image4 from "../src/media/fotomodelo4.png"
import image5 from "../src/media/fotomodelo5.png"

export default function ImageViewer(){
    const [modalOpen, setModalOpen] = useState(false);
    const [imageList, setImageList] = useState([image1,image2,image3,image4,image5,image1,image2,image3,image4,image5]);
    const [currentImageIndex, setCurrentImageIndex] = useState();

    const selectImage = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
    }

    const handlePrevious = () => {
        const newIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
        setCurrentImageIndex(newIndex);
      };
    
      const handleNext = () => {
        const newIndex = (currentImageIndex + 1) % imageList.length;
        setCurrentImageIndex(newIndex);
      };

      const handleClose = () => {
        setModalOpen(false);
        window.scrollTo(0, 0);
        document.body.style.overflow = '';
    }

    return(
        <div>
            {/* DESKTOP VERSION BELOW */}
            <div className="max-lg:hidden">
                <div className="grid grid-cols-2">
                    {imageList.map((image, index) => (
                        <div key={index}>
                            <div className={`cursor-pointer max-w-[300px]`} onClick={() => selectImage(index)}>
                                <Image src={image} alt={`Image ${index}`} className={`${index == 0 && `rounded-tl-[15px]`} ${index == 1 && `rounded-tr-[15px]`} ${index === imageList.length - 1 && `rounded-br-[15px]`} ${index === imageList.length - 2 && `rounded-bl-[15px]`}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {modalOpen? 
                    <div className="flex justify-center items-center absolute top-0 left-0 z-30 h-screen w-full bg-[#2e2e2e85]">
                        <button onClick={handleClose} className="absolute top-0 left-0 mt-5 ml-5">
                            <Image src={imageviewerclose} alt="Fechar"></Image>
                        </button>
                        <button onClick={handlePrevious}>
                            <Image src={imageviewerprevious} alt="Anterior"></Image>
                        </button>
                        <div className="w-[600px] h-[800px] relative">
                            <Image fill src={imageList[currentImageIndex]} alt="Imagem Atual" />
                        </div>
                        <button onClick={handleNext}>
                            <Image src={imageviewernext} alt="Próxima"></Image>
                        </button>
                    </div> 
                    : 
                    null}
            </div>

            {/* MOBILE VERSION BELOW */}

            <div className="flex flex-col lg:hidden lg:w-full">
                <div className="flex max-lg:hidden h-[200px] w-[40%]">
                    <div className="flex flex-wrap h-full">
                        {imageList.map((image, index) => (
                            <div key={index} className="w-[50%] h-[50%]">
                                <Image src={image} alt={`Image ${index}`} className="h-full w-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-[400px] lg:hidden">
                    <div className="cursor-pointer w-[300px] h-[400px] relative" onClick={() => selectImage(0)}>
                        <Image fill alt="Imagem" className="rounded-tl-[10px] rounded-tr-[10px]" src={imageList[0]}></Image>
                    </div>
                    <div className="flex w-[300px]">
                        <div className="cursor-pointer" onClick={() => selectImage(1)}>
                            <Image className="rounded-bl-[10px]" alt="Imagem" src={imageList[1]?imageList[1]:imageList[0]}></Image>
                        </div>
                        <div className="cursor-pointer" onClick={() => selectImage(2)}>
                            <Image src={imageList[2]?imageList[2]:imageList[0]} alt="Imagem"></Image>
                        </div>
                        <div className="cursor-pointer" onClick={() => selectImage(3)}>
                            <Image src={imageList[3]?imageList[3]:imageList[0]} alt="Imagem"></Image>
                        </div>
                        <div className="cursor-pointer" onClick={() => selectImage(4)}>
                            <div className="relative flex items-center justify-center text-center">
                                <Image className="rounded-br-[10px]" alt="Imagem" src={imageList[4]?imageList[4]:imageList[0]}></Image>
                                <p className="absolute inset-0 rounded-br-[10px] flex items-center justify-center text-[#fff] text-lg bg-[#9D816899]">+<br></br> Ver Mais</p>
                            </div>
                        </div>
                    </div>

                    {modalOpen? 
                    <div className="flex justify-center items-center absolute top-0 z-30 h-screen w-full bg-[#2e2e2ec2]">
                        <button onClick={handleClose} className="absolute top-0 left-0 mt-5 ml-5">
                            <Image src={imageviewerclose}></Image>
                        </button>
                        <button onClick={handlePrevious} className="w-[20px] sm:w-[50px] md:w-[80px] h-[20px] sm:h-[50px] md:h-[80px] relative">
                            <Image fill src={imageviewerprevious}></Image>
                        </button>
                        <div className="w-[250px] sm:w-[500px] md:w-[500px] h-[350px] sm:h-[700px] md:h-[700px] relative">
                            <Image fill src={imageList[currentImageIndex]} />
                        </div>
                        <button onClick={handleNext} className="w-[20px] sm:w-[50px] md:w-[80px] h-[20px] sm:h-[50px] md:h-[80px] relative">
                            <Image fill src={imageviewernext}></Image>
                        </button>
                    </div> 
                    : 
                    null}
                </div>
            </div>
        </div>
    )
}