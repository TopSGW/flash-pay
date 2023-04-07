import transactionCompleteSvg from '../../assets/steps/transactioncomplete.svg';
import copySvg from '../../assets/steps/copy.svg';
import TransactionSteps from "./transactionsteps"
import { useNavigate } from 'react-router-dom';

export default function Step3(){
    const transactionsteps = [true, true, true, false];
    const native = useNavigate();
    return(
        <div className="w-auto m-0 p-0">
            <TransactionSteps steps={transactionsteps}/>
            <div className="my-12 sm:my-16 max-w-[870px] p-4 mx-auto">
                <img src={transactionCompleteSvg} alt="checked" className='mt-3 mx-auto'></img>
                <h3 className='my-4 text-[24px] sm:text-[36px] font-bold text-center'>Transfer Completed!</h3>
                <p className='text-[12px] sm:text-[16px] text-center'>Your transfer has been created , waiting for both parties to agree. Share the trasnfer via the URL so that other party can agree to the terms.</p>
                <div className='mt-4 rounded-lg flex flex-row border-solid border-[#D1D5DB] border-[1px]'>
                    <div className=' bg-[#D1D5DB] px-3 flex items-center rounded-l-lg'>
                        <h3 className='text-[#6B7280] text-[14px]'>https://</h3>
                    </div>
                    <div className='flex flex-row w-full items-center px-3 py-2'>
                        <input type="text" className='text-[14px] text-[#6B7280] px-3 py-2 placeholder:text-[#6B7280] w-full' placeholder='flash-payment.com/transaction/0xkde415ial;s'></input>
                        <div className='ml-auto'><img src={copySvg} alt="copy"></img></div>
                    </div>
                </div>
                    <button className='my-4 flex justify-center sm:my-6 mx-auto px-4 py-2 text-white bg-[#FFAB17] text-[16px] rounded-lg'
                        onClick={()=> native('/step4')}>
                        View Transaction
                    </button>
            </div>
        </div>
    )
}