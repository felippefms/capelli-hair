import Image from 'next/image'

import Arrowleft from '@/src/media/arrowleft.png'
import Arrowright from '@/src/media/arrowright.png'
import Craseimg from '@/src/media/craseimg.png'

export default function ContentBox5() {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:items-center lg:justify-start bg-[#ffff]">
      <div className='lg:flex lg:relative lg:flex-col lg:justify-start lg:items-start lg:text-left lg:w-[479px] lg:mr-[50px] lg:order-2'>
        <Image width={40} height={40} src={Craseimg} alt='fala' className='max-lg:hidden lg:relative top-[160px] right-[50px]'></Image>
        <p className="mt-16 text-2xl text-[#9D8168]">O que falam de nós</p>
        <div className='lg:max-w-[362px]'>
          <p className="mt-4 mx-[50px] lg:mt-[32px] lg:mx-0 text-[#888]">Não poderia estar mais satisfeita com a minha compra na Capelli Hair. Eles fizeram um trabalho impecável, entregando um mega hair que superou todas as minhas expectativas. Minha autoestima nunca esteve tão elevada!</p>
        </div>
        <p className="mt-8 text-[#888]">Mariana Ferraz</p>
        <div className="flex w-full items-center justify-center lg:justify-start">
          <div className="flex items-center mt-8 lg:mt-16 mb-6">
            <button>
              <Image src={Arrowleft} alt="Anterior"></Image>
            </button>
            <hr className="w-40 bg-[#F1E0CE] h-2 rounded-full"></hr>
            <button>
              <Image src={Arrowright} alt="Próximo"></Image>
            </button>
          </div>
        </div>
      </div>
      <div className='flex lg:order-1 shrink-0 lg:mt-[81px]'>
        <div className='w-1/2 lg:w-[350px] h-[590px] bg-[#9D8168] rounded-tr-3xl rounded-br-3xl shrink-0'></div>
          <div className='flex items-center justify-center shrink-0 relative right-[140px] z-10'>
            <video controls className='w-[296px] h-[526px] rounded-[24px]'>
              <source src="/video1.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className='w-[160px] h-[292px] flex justify-center items-center relative top-[140px] right-[220px] rounded-[24px] max-lg:hidden bg-[#9D8168]'>
          <div className='w-[135px] h-[272px] rounded-[14px] bg-[#fff]'></div>
        </div>
      </div>
    </div>
  )
}
