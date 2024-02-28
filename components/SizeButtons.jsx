'use client'

export default function SizeButtons({ content, setProdutoFinalizado, selected, setSelected }) {
    const handleSizeButtonClick = () => {
      setSelected(content.id)
      setProdutoFinalizado((prevProdutoFinalizado) => {
        return {
          ...prevProdutoFinalizado,
          tamanhoId: content.id
        };
      });
    };
  
    return (
      <div>
        <button 
          onClick={handleSizeButtonClick} 
          className={`flex justify-center m-0.5 items-center text-[#888] w-[70px] h-[30px] rounded-[5px] ${selected === content.id ? 'bg-[#F1E0CE]' : 'bg-[#F4F4F4]'}`}>
          {content.cm}
        </button>
      </div>
    );
  }