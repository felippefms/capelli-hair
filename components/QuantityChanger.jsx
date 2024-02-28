'use client'

import Image from "next/image";

import minus from "../src/media/minus.png";
import plus from "../src/media/plus.png";

export default function QuantityChanger({setQuantity, baseValue, quantity, actualValue, setActualValue, setProdutoFinalizado}){
    const minQuantity = 1;
    const maxQuantity = 10;
    
    const handleDecrease = () => {
        if (quantity > minQuantity) {
          const newQuantity = quantity - 1;
          setProdutoFinalizado((prevProdutoFinalizado)=>{
            return {
              ...prevProdutoFinalizado,
              valor: (actualValue - baseValue).toFixed(2),
              quantidade: newQuantity
            }
          })
          setQuantity(newQuantity);
          setActualValue( actualValue - baseValue )
        }
      };
    
      const handleIncrease = () => {
        if (quantity < maxQuantity) {
          const newQuantity = quantity + 1;
          setProdutoFinalizado((prevProdutoFinalizado)=>{
            return {
              ...prevProdutoFinalizado,
              valor: (baseValue * newQuantity).toFixed(2),
              quantidade: newQuantity
            }
          })
          setQuantity(newQuantity);
          setActualValue(baseValue * newQuantity)
        }
      };

    return(
        <div>
            <p className="text-[#888]">Quantidade</p>
            <div className="flex w-[120px] h-[40px] items-center justify-between mt-4 p-2 rounded-[8px] bg-[#F5F5F5]">
                <button onClick={handleDecrease}>
                    <Image src={minus}></Image>
                </button>
                <p>{quantity}</p>
                <button onClick={handleIncrease}>
                    <Image src={plus}></Image>
                </button>
            </div>
        </div>
    )
}