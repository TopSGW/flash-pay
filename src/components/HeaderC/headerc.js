import logo from '../../assets/landing/logo.png'
import arrowDownSvg from '../../assets/landing/arrow_down.svg';
import menuSvg from '../../assets/landing/menu.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function HeaderC(){
    const native = useNavigate();
    const [nativestate, setnativestate] = useState([true,false]);
    const handleTransactions = (index) =>{
        if(index === 0){
            setnativestate([true,false]);
            native('/');
        }
        else if(index === 1){
            setnativestate([false, true]);
            native('/step1');
        }
    }
    return(
    <div div className="w-auto m-0 p-0">
        <div className="pl-16 max-lg:pl-10 max-sm:pl-4 py-[8px] max-lg:py-[6px] max-sm:py-2 bg-black flex flex-row items-center">
            <div className='mr-4 xl:hidden'>
                <img src={menuSvg} alt={"Menu"} className="w-[25px] sm:w-[35px] xl:w-[40px]"/>
            </div>
            <div>
                <div className='flex flex-row items-center'>
                    <div>
                        <img src={logo} alt="logo" className='w-[35px] sm:w-[55px] xl:w-[75px]'></img>
                    </div>
                    <div className='ml-3 max-md:hidden'>
                        <h3 className='text-white text-xl xl:text-2xl font-bold leading-3'> Flash Technologies</h3>
                    </div>
                </div>
            </div>
            <div className='ml-auto mr-auto max-xl:hidden'>
                <div className="flex flex-row items-center w-[300px]">
                    <div className={`pb-1 ${nativestate[0] ? 'border-solid border-[#FFAB17] border-b-[1px]' :''} cursor-pointer`}
                        onClick={()=>handleTransactions(0)}>
                        <h3 className='text-[15px] text-[#FFAB17] leading-3'>Home</h3>
                    </div>
                    <div className='ml-auto mr-auto'>
                        <div className='flex flex-row items-center'>
                            <div className={`text-[15px] pb-1 ${nativestate[1] ? 'border-solid border-[#FFAB17] border-b-[1px]' :''} text-[#FFAB17] leading-3 cursor-pointer`}
                                onClick={() => handleTransactions(1)}>New Transaction</div>
                            <div className='ml-2'>
                                <img src={arrowDownSvg} alt="" className='w-[12px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='mr-0'>
                        <h3 className='text-[15px] text-[#FFAB17] leading-3 cursor-pointer'>FAQ</h3>
                    </div>
                </div>
            </div>
            <div className='mr-6 max-xl:ml-auto'>
                <button className='px-4 py-2 bg-[#FFAB17] text-center text-white
                    text-sm sm:text-base xl:text-[18px] flex justify-center items-center rounded-lg'>
                        Connect Wallet
                    </button>
            </div>
            <div className='mr-16 max-sm:hidden'>
                <div className='flex flex-row items-center'>
                    <div className='mt-1'>
                        <img src={logo} alt="logo" className='w-[35px]'></img>
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-[#FFAB17] text-[20px] leading-3'>PRICE $0.00144</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    )
}