import TransactionSteps from "./transactionsteps"
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
      yellowcheckbox: {
        main: '#FFAB17',
      },
    },
  });
const label = { inputProps: { 'aria-label': 'Checkbox' } };

export default function Step2(){
    const transactionsteps = [true, true, false, false];
    const native = useNavigate();
    return(
        <ThemeProvider theme={theme}>
        <div className="w-auto m-0 p-0">
            <TransactionSteps steps={transactionsteps}/>
            <div className="px-4 py-6 sm:px-16 sm:py-16">
                <h3 className="text-black text-[24px] sm:text-[40px]">Summary</h3>
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
                <div className="sm:px-4 px-2 sm:py-5 py-3 bg-[#F8F8F8] rounded-lg">
                    <div className="flex max-sm:flex-col sm:flex-row items-center">
                        <div className="w-full sm:w-[50%]">
                            <div className="flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Title</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">Test 11</p>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Milestone Sub</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">$123</p>
                                </div>
                            </div>
                            <div className=" mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Item Name</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">Test</p>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Escrow Type</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">Goods</p>
                                </div>
                            </div>                                                                                    
                        </div>

                        <div className="w-full max-sm:mt-2 sm:w-[50%] sm:pl-10 sm:border-solid sm:border-l-[1px] sm:border-[#858181]">
                            <div className="flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Item Category</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">Category</p>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Item Discrip</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181]">Test</p>
                                </div>
                            </div>
                            <div className=" mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Milestones</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#E19000]">Test($123)</p>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-row items-center">
                                <div className="w-[30%] min-w-[124px] flex justify-between">
                                    <p className="text-[14px] sm:text-[18px] text-black">Duration</p>
                                    <p className="text-[14px] sm:text-[18px] text-black">:</p>
                                </div>
                                <div className="ml-auto sm:mr-10">
                                    <p className="text-[14px] sm:text-[18px] text-[#858181] sm:min-w-[60px]">1 Week</p>
                                </div>
                            </div>                                                                                    
                        </div>
                    </div>
                </div>
                <h3 className="my-6 text-[28px] text-black">Transaction Summary</h3>
                <div className="flex justify-between items-center pb-3 border-solid border-[#e7e4e4] border-b-[1px]">
                    <div className="flex flex-col">
                        <h3 className="text-black text-[14px] sm:text-[18px]">Escrow Fee Paid By</h3>
                        <p className="text-[10px] sm:text-[12px] text-[#E23A45]">(3% of milestone subtotal)</p>
                    </div>
                    <h3 className="text-[14px] sm:text-[18px] text-black">$12</h3>
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-black text-[14px] sm:text-[18px]">Total to be Paid by seller:</h3>
                    <h3 className="text-[14px] sm:text-[18px] text-black">$12</h3>
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-black text-[14px] sm:text-[18px]">Total to be Paid by Buyer:</h3>
                    <h3 className="text-[14px] sm:text-[18px] text-black">$12</h3>
                </div>
                <h3 className="my-3 text-[24px] sm:text-[28px] text-black">Seller's Detail</h3>
                <p className="text-[#374151] text-[14px] sm:text-[16px]">BSC Address</p>
                <input className="mt-1 rounded-lg px-4 py-2 border-[#6B7280] border-[1px] border-solid 
                    text-[14px] sm:text-[16px] placeholder:text-[#6B7280] w-full" placeholder="abc..."></input>
                <div className="mt-5 flex flex-row items-center">
                    <Checkbox {...label} defaultChecked color="yellowcheckbox"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <p className="text-[14px] sm:text-[16px] text-black"> I Have read and agreed to the <span className="text-[#FFAB17]">General Escrow Terms</span> and <span className="text-[#FFAB17]">Privacy Policy</span></p>
                </div>
                <div className="mt-4 flex max-sm:flex-col-reverse sm:flex-row items-center">
                    <button className="max-sm:mt-4 sm:ml-auto max-sm:w-full px-4 py-2 rounded-lg border-solid border-[#FFAB17] border-[1px] text-[#FFAB17]" onClick={()=>native('/step1')}>Back</button>
                    <button className="max-sm:w-full sm:ml-4 sm:mr-0 px-4 py-2 bg-[#FFAB17] rounded-lg text-white border-solid border-[#FFAB17] border-[1px]" onClick={()=>native('/step3')}>Start Escrow</button>
                </div>
            </div>
        </div>
        </ThemeProvider>
    )
}