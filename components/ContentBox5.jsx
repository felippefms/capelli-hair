import Image from 'next/image'

import Arrowleft from '../src/media/arrowleft.png'
import Arrowright from '../src/media/arrowright.png'
import Craseimg from '../src/media/craseimg.png'

export default function ContentBox5() {
  return (
    <div className="flex flex-col min-[1272px]:flex-row text-center min-[1272px]:items-center min-[1272px]:justify-start mb-[62px] bg-[#ffff]">
      <div className='min-[1272px]:flex min-[1272px]:relative min-[1272px]:flex-col min-[1272px]:justify-start min-[1140px]:items-start min-[1272px]:text-left min-[1272px]:w-[479px] min-[1272px]:mr-[50px] min-[1272px]:order-2'>
        
        <Image width={40} height={40} src={Craseimg} alt='fala' className='max-[1272px]:hidden min-[1272px]:relative top-[160px] right-[50px]'></Image>
        
        <div className='flex flex-col w-full items-center min-[1272px]:items-start'>

          <div>
            <p className="mt-16 text-2xl max-w-[400px] text-[#9D8168]">O que falam de nós</p>
          </div>

          <div className='min-[1272px]:max-w-[362px]'>
            <p className="mt-4 mx-[50px] max-w-[400px] min-[1272px]:mt-[32px] min-[1272px]:mx-0 text-[#888]">Não poderia estar mais satisfeita com a minha compra na Capelli Hair. Eles fizeram um trabalho impecável, entregando um mega hair que superou todas as minhas expectativas. Minha autoestima nunca esteve tão elevada!</p>
          </div>

          <div>
            <p className="mt-8 text-[#888]">Mariana Ferraz</p>
          </div>

          <div className="flex w-full items-center justify-center min-[1272px]:justify-start">
            <div className="flex items-center mt-8 min-[1272px]:mt-16 mb-6">
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

      </div>

      <div className='flex min-[1270px]:order-1 shrink-0 min-[1270px]:mt-[81px] min-[1270px]:w-1/2'>
        <div className='w-1/2 min-[1270px]:w-[350px] h-[590px] bg-[#9D8168] rounded-tr-3xl rounded-br-3xl shrink-0'></div>
          <div className='flex items-center justify-center shrink-0 relative right-[140px] z-10'>
            <video controls className='w-[296px] h-[526px] rounded-[24px]'>
              <source src="/video1.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className='w-[160px] h-[292px] shrink-0 flex justify-center items-center relative top-[140px] right-[220px] rounded-[24px] max-[1272px]:hidden bg-[#9D8168]'>
          <div className='w-[135px] h-[272px] rounded-[14px] bg-[#fff]'></div>
        </div>
      </div>
    </div>
  )
}
