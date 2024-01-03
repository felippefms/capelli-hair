'use client'

const VolumeButtons = ({ content, setProdutoFinalizado, selected, setSelected }) => {
  const handleVolumeButtonClick = () => {
    setSelected(content);
    setProdutoFinalizado((prevProdutoFinalizado) => {
      return {
        ...prevProdutoFinalizado,
        volume: content,
      };
    });
  };

  return (
    <div>
      <button
        onClick={handleVolumeButtonClick}
        className={`flex justify-center m-0.5 items-center text-[#888] w-[70px] h-[30px] rounded-[5px] ${
          selected === content ? 'bg-[#F1E0CE]' : 'bg-[#F4F4F4]'
        }`}
      >
        {content}
      </button>
    </div>
  );
};

export default VolumeButtons;