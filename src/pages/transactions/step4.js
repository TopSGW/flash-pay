import eyeSvg from '../../assets/steps/eye.svg'
import criticalCancelSvg from '../../assets/steps/critical_cancel.svg'
import refreshSvg from '../../assets/steps/refresh.svg'
import downloadSvg from '../../assets/steps/download.svg'
import infoSvg from '../../assets/steps/info.svg'
import uploadSvg from '../../assets/steps/upload.svg'
import modalcancelSvg from '../../assets/steps/modalcancel.svg'

import TransactionSteps from "./transactionsteps"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 857,
    width: '80%',
    borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

export default function Step4(){
    const transactionsteps = [true, true, true, true];
    const [refreshState, SetrefreshState] = useState(true);
    const native = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    
    return(
        <div className='w-auto m-0 p-0'>
            <TransactionSteps steps={transactionsteps}/>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='p-3 flex justify-between items-center bg-[#F2F5F7] rounded-t-lg'>
                            <h3 className='text-sm sm:text-base md:text-lg lg:text-xl'>
                                Terms of escrow
                            </h3>
                            <div className='cursor-pointer' onClick={()=>handleClose()}>
                                <img src={modalcancelSvg} alt="modalcancel"/>
                            </div>
                        </div>
                        <div className='px-3 sm:px-5 py-3 sm:py-6'>
                            <div className='flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Title</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>Test 11</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Milestone Sub</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>$123</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Item Name</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>Test</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Item Category</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>Category</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Item Description </h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>Test</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Milestones Subtotal</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#E19000]'>$4654654984</h3>
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-row items-center'>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <h4 className='text-[14px] sm:text-[18px] text-black'>Milestone Subtotal</h4>
                                        <h4 className='ml-1 text-[14px] sm:text-[18px] text-black'>:</h4>
                                    </div>
                                </div>
                                <div className='ml-auto'>
                                    <h3 className='text-[14px] sm:text-[18px] text-[#979393]'>test(4545454684)</h3>
                                </div>
                            </div>
                            <button className='py-2 mt-4 sm:mt-6 w-full rounded-lg bg-[#FFAB17] text-white text-[18px] text-center'>
                                Got it
                            </button>                            
                        </div>
                    </Box>
                </Fade>
            </Modal>
            <div className='max-w-[870px] mt-11 mb-[50px] p-5 mx-auto'>
                <div className='max-w-[857px] rounded-[12px] mx-auto pb-6' style={{boxShadow:'0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)'}}>
                    <div className=' rounded-t-[12px] bg-[#F2F5F7] py-4 px-3'>
                        <div className='flex flex-row items-center'>
                            <div>
                                <div className='flex flex-row items-center'>
                                    <div className='px-3 py-2 bg-[#FFAB17] rounded-l-lg'>
                                        <h3 className='text-[14px] sm:text-[28px] text-black font-bold'>Milestone</h3>
                                    </div>
                                    <div className='px-2 py-4 bg-white rounded-lg'>
                                        <h3 className='text-[14px] sm:text-[28px] text-black font-bold'>1</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-auto'>
                                <div className='flex flex-row'>
                                    <button className='flex flex-row items-center px-1 sm:px-2 py-1 border-solid border-[#FFAB17] border-[1px] rounded-md'
                                        onClick={()=>handleOpen()}>
                                        <img src={eyeSvg} alt="eye" className=''></img>
                                        <p className='text-black text-[12px] max-sm:hidden ml-2'>View Terms</p>
                                    </button>
                                    <button className='ml-4 flex flex-row items-center px-1 sm:px-2 py-1 border-solid border-[#FFAB17] border-[1px] rounded-md max-sm:hidden'
                                        onClick={()=>SetrefreshState(!refreshState)}>
                                        <img src={refreshSvg} alt="refresh" className=''></img>
                                        <p className='text-black text-[12px] max-sm:hidden ml-2'>Refresh</p>
                                    </button>
                                    <button className='ml-4 flex flex-row items-center sm:px-2 px-1 py-1 bg-[#FF2B38] border-solid border-[#FF2B38] border-[1px] rounded-md'
                                        onClick={()=>native('/result')}>
                                        <img src={criticalCancelSvg} alt="cancel" className=''></img>
                                        <p className='text-white text-[12px] max-sm:hidden ml-2'>Cancel Escrow</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        refreshState ?
                    <div>
                        <div className='my-[40px] flex justify-center'>
                            <img src={downloadSvg} alt={"download"} className=''/>
                        </div>
                        <h3 className='text-[22px] sm:text-[28px] text-center text-black font-bold'>
                            Seller hasn't sent any files for review in this milestone yet
                        </h3>
                        <div className='my-10 flex max-sm:flex-col sm:justify-center items-center'>
                            <img src={infoSvg} alt="info" className='max-sm:flex max-sm:justify-center'/>
                            <p className='sm:ml-4 max-sm:mt-8 text-black text-sm sm:text-lg text-center'>
                                Milestone is not approved by the buyer yer
                            </p>
                        </div>
                    </div> 
                    :
                    <div>
                        <div className='mt-[35px] max-w-[270px] mx-auto p-4 rounded-lg border-solid border-[1px]
                            border-[#EAECF0]'>
                            <img src={uploadSvg} alt="upload" className='mt-1 flex justify-center mx-auto'/>
                            <p className='text-[#475467] text-[12px] text-center'>
                                <span className='text-[#FFAB17]'>Click to upload</span> or drag and drop</p>
                            <p className='text-[#475467] text-[12px] text-center'>SVG, PNG, JPG or GIF (max. 800x400px)</p>            
                        </div>
                        <button className='mt-12 max-w-[372px] py-2 mx-auto w-[60%] flex justify-center bg-[#8E8E8E] rounded-lg'>
                            <p className='text-center text-white'>Send File Buyer</p>
                        </button>
                        <div className='mt-10 flex max-sm:flex-col sm:justify-center items-center'>
                            <div className=''><img src={infoSvg} alt="info" className='max-sm:flex max-sm:justify-center'></img></div>
                            <h3 className='text-[18px] sm:ml-5 max-sm:mt-7 text-center'>Millstone is not approved by the buyer</h3>
                        </div>
                    </div>                      
                    }

                </div>
            </div>
        </div>
    )
}