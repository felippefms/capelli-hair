'use client'

export default function TecnicaButtons({ content, setProdutoFinalizado, selected, setSelected }) {
    const handleTecnicaButtonClick = () => {
      setSelected(content);
      setProdutoFinalizado((prevProdutoFinalizado) => {
        return {
          ...prevProdutoFinalizado,
          tecnica: content,
        };
      });
    };
  
    return (
      <div>
        <button 
        onClick={handleTecnicaButtonClick}
        className={`flex justify-center m-0.5 p-1 items-center text-[#888] h-[30px] rounded-[5px] ${
          selected === content ? 'bg-[#F1E0CE]' : 'bg-[#F4F4F4]'
        }`}>
          {content}
        </button>
      </div>
    );
  }