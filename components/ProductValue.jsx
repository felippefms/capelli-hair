export default function ProductValue(actualValue){

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(actualValue.actualValue);
      
    return(
        <div>
            <p>Valor total</p>
            <p className="mt-5 text-[#2E2E2E] font-[600] text-2xl">{formattedPrice}</p>
        </div>
    )
}