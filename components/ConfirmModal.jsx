'use client'

export default function ConfirmModal(props){
    return(
        <div className='w-screen h-screen flex items-center justify-center absolute bg-[#0000008f]'>
            <div className='flex flex-col justify-center w-[400px] h-[300px] rounded-lg bg-[#ff7878] relative'>
                <button onClick={() => props.setConfirmModal(false)} className='w-[30px] h-[30px] bg-white absolute top-0 right-0 rounded-bl-md rounded-tr-md'>X</button>
                <div className='cursor-default'>
                    <p>{props.message}</p>
                </div>
                <div className='mt-12 space-x-16'>
                    <button onClick={() => { props.ExecFunction(props); props.setConfirmModal(false); }} className='rounded-md w-12 h-10 bg-[#fff] hover:bg-[#00000091] hover:text-[#fff]'>SIM</button>
                    <button onClick={(() => props.setConfirmModal(false))} className='rounded-md w-12 h-10 bg-[#fff] hover:bg-[#00000091] hover:text-[#fff]'>NÃO</button>
                </div>
            </div>
        </div>
    )
}