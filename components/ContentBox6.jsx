export default function ContentBox6(){
    return(
        <div className="flex flex-col items-center bg-[#F1E0CE]">
            <div className="flex flex-col items-center text-center md:w-[613px]">
                <p className="mt-16 text-2xl text-[#9D8168]">Entre em nossa lista VIP</p>
                <p className="mt-8 mx-8 text-[#888]">Receba um cupom de desconto para a primeira compra e cadastre-se em nossa lista VIP para ter acesso a promoções e conteúdos exclusivos.</p>
                <div className="flex w-full flex-col md:flex-row">
                    <div className="flex justify-center">
                        <input className="w-full mx-[24px] mt-[40px] pl-1 border border-[#888] rounded-[5px] md:w-[300px] md:mt-[48px] h-[44px]" placeholder="Digite seu e-mail"></input>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full mx-[24px] mt-[24px] mb-[64px] rounded-[5px] bg-[#9D8168] text-[#ffff] md:w-[142px] md:mt-[48px] h-[44px]">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}