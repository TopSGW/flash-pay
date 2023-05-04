import filterSvg from '../../assets/steps/filter.svg'
import exclamationSvg from '../../assets/steps/exclamation.svg';
import downloadSvg from '../../assets/steps/download.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Result(){
    const navigate = useNavigate();
    const [ToggleBtnState, setToggleBtnState] = useState(true)
    return(
        <div className="w-auto m-0 p-0">
            <div className='px-4 sm:px-16'>
                <h3 className='mt-14 text-[24px] sm:text-[32px] font-bold'>My Transactions</h3>
                <div className='mt-8 p-4 bg-[#F4F4F4] rounded-lg flex sm:flex-row max-sm:flex-col items-center'>
                    <div className='max-sm:self-start'>
                        <div className='p-1 rounded-full bg-white flex flex-row cursor-pointer' onClick={()=>setToggleBtnState(!ToggleBtnState)}>
                            <div className={`py-2 px-3 rounded-full ${ToggleBtnState === true ? 'bg-[#E1ECF7]' : ''}`}>
                                <p className='text-[18px] text-black'>Open</p>
                            </div>
                            <div className={`py-2 px-3 rounded-full ${ToggleBtnState === false ? 'bg-[#E1ECF7]' : ''}`}>
                                <p className='text-[18px] text-black'>Close</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:ml-auto max-sm:mt-4 max-sm:self-center max-sm:w-full'>
                        <div className='flex flex-row max-sm:w-full'>
                            <div className='bg-white min-w-[200px] max-sm:w-full px-2 py-3 rounded-lg border-solid border-[1px] border-[#6A6A6A] flex flex-row items-center'>
                                <input className='text-[16px] text-[#6A6A6A] px-2 rounded-lg placeholder:text-[#6A6A6A] focus:outline-none' placeholder='Inter transaction ID'/>
                                <img src={exclamationSvg} alt="exclamation" className="max-sm:hidden ml-12"/>
                            </div>
                            <button className='ml-4 px-4 py-2 bg-[#FFAB17] flex flex-row items-center rounded-lg active:bg-[#cd8a13]'>
                                <img src={filterSvg} alt="filter"/>
                                <p className='text-[14px] text-white ml-2 max-sm:hidden'>Filter</p>
                            </button>
                        </div>
                    </div>
                </div>
                <table className='mt-2 w-full max-sm:hidden'>
                    <thead>
                        <tr className='text-[#84818A] text-[15px] border-b-[1px] border-[#dfdde0] border-solid'>
                            <th className='py-2'>ID</th>
                            <th className='py-2'>Transaction Title</th>
                            <th className='py-2'>Date Created</th>
                            <th className='py-2'>Amount</th>
                            <th className='py-2'>Role</th>
                            <th className='py-2'>Status</th>
                        </tr>
                    </thead>
                </table>
                <div className='mb-16 mx-auto max-w-[857px] p-4'>
                    <img src={downloadSvg} alt="download" className='mx-auto flex justify-center mt-5'/>
                    <h3 className='text-[14px] text-center text-black sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]'>
                        Nothing is here yet , click here to start the new transaction.
                    </h3>
                    <button className='rounded-lg mt-10 mx-auto px-4 py-2 bg-[#FFAB17] text-white text-[18px] flex justify-center'
                        onClick={()=>navigate('/step1')}>
                        Start New Transaction
                    </button>
                </div>            
            </div>
        </div>
    )
}