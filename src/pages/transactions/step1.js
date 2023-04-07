import TransactionSteps from "./transactionsteps"
import plusSvg from '../../assets/steps/plus.svg'
import { useNavigate } from "react-router-dom";
export default function Step1(){
    const transactionsteps = [true, false, false, false];
    const native = useNavigate();
    return(
        <div className="w-auto m-0 p-0">
            <TransactionSteps steps={transactionsteps}/>
            <div className="px-4 py-6 sm:px-16 sm:py-16">
                <p className="mt-4 sm:mt-10 text-[14px] sm:text-[18px] text-[#374151]">Transaction Title</p>
                <input className="mt-1 w-full border-solid border-[#374151] border-[1px] rounded-md px-4 py-2
                     placeholder:text-[#374151] text-[14px] sm:text-[16px] focus:outline-none" placeholder="Title here..."/>
                <div className="mt-4 w-full flex max-sm:flex-col sm:justify-between">
                    <div className="w-full sm:w-[48%]">
                        <h3 className="text-[14px] sm:[text-16px] text-[#374151]">My Role</h3>
                        <select className="mt-1 w-full rounded-lg border-[#D1D5DB] border-solid border-[1px]
                            px-3 py-2">
                            <option value={"seller"} className="text-[#6B7280]">Seller</option>
                        </select>
                    </div>
                    <div className="w-full max-sm:mt-4 sm:w-[48%]">
                        <h3 className="text-[14px] sm:[text-16px] text-[#374151]">Payment Token</h3>
                        <select className="mt-1 w-full px-3 py-2 rounded-lg border-[#D1D5DB] border-solid border-[1px]">
                            <option value={"seller"}>Choosen From here...</option>
                        </select>
                    </div>
                </div>
                <div className="my-6">
                    <h3 className="text-[24px] sm:text-[40px] text-black font-semibold">Transaction Details</h3>
                </div>
                <div className="mt-4 w-full flex max-sm:flex-col sm:justify-between">
                    <div className="w-full sm:w-[48%]">
                        <h3 className="text-[14px] sm:[text-16px] text-[#374151]">Transaction Title</h3>
                        <input className="mt-1 w-full border-solid border-[#D1D5DB] border-[1px] rounded-md px-4 py-2
                         placeholder:text-[#374151] text-[14px] sm:text-[16px] focus:outline-none" placeholder="Title here..."/>
                    </div>
                    <div className="w-full max-sm:mt-4 sm:w-[48%]">
                        <h3 className="text-[14px] sm:[text-16px] text-[#374151]">Payment Token</h3>
                        <select className="mt-1 w-full px-3 max-sm:py-2 sm:h-11 rounded-lg border-[#D1D5DB] border-solid border-[1px]
                            text-[14px] sm:text-[16px]">
                            <option value={"seller"}>Choosen From here...</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-[14px] sm:[text-16px] text-[#374151] font-semibold">Transaction Title</h3>
                    <textarea className="mt-2 w-full min-h-[150px] rounded-lg border-solid border-[1px] border-[#D1D5DB]">
                    </textarea>
                    <div className="mt-4 w-full flex max-sm:flex-col sm:justify-between">
                        <div className="w-full sm:w-[48%]">
                            <h3 className="text-[14px] sm:[text-16px] text-[#374151]">My Role</h3>
                            <select className="w-full rounded-lg border-[#D1D5DB] border-solid border-[1px]
                                px-3 py-2">
                                <option value={"seller"} className="text-[#6B7280]">Seller</option>
                            </select>
                        </div>
                        <div className="w-full max-sm:mt-4 sm:w-[48%]">
                            <h3 className="text-[14px] sm:[text-16px] text-[#374151]">Payment Token</h3>
                            <select className="w-full px-3 py-2 rounded-lg border-[#D1D5DB] border-solid border-[1px]">
                                <option value={"seller"}>Choosen From here...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h3 className="my-6 text-[24px] sm:text-[40px] text-black font-semibold">Add Milestone</h3>
                <p className="text-[14px] sm:text-[16px] text-[#374151]">Milestone detail</p>
                <div className="mt-1 w-full px-4 py-2 flex justify-between border-solid border-[1px] border-[#D1D5DB] rounded-lg">
                    <p className="text-[14px] text-[#6B7280]">Milestone detail</p>
                    <p className="text-[14px] text-[#6B7280]">Set up a payout</p>
                </div>
                <button className="mt-6 px-3 py-2 border-solid border-[1px] border-[#0000003b] 
                    flex flex-row items-center rounded-lg">
                    <img src={plusSvg} alt="plus"/>
                    <p className="ml-4 text-[14px] text-black">Add More Millstones</p>
                </button>
                <div className="mt-6 w-full flex justify-end">
                    <button className="px-4 py-2 bg-[#FFAB17] text-white text-[16px] rounded-lg"
                        onClick={() => native('/step2')}>
                        Start Escrow
                    </button>
                </div>
            </div>
        </div>
    )
}