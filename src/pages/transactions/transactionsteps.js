
export default function TransactionSteps(props){
    return(
        <div className="mt-20 max-sm:mt-8 px-16 max-sm:px-4 pt-6 pb-16 bg-black">
            <div className="flex justify-center items-center">
                <div className={`min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] rounded-full flex justify-center items-center ${props.steps[0] ? 'bg-white': 'bg-[#BABBBD]'}
                    relative`}>
                    <p className={`${props.steps[0] ? 'text-[#FFAB17]' : 'text-[#020E1FB2]'} text-[20px]`}>1</p>
                    <h3 className={`text-[20px] max-lg:text-[14px] max-sm:text-[12px] text-center 
                        ${props.steps[0] ? 'text-[#FFAB17]' : 'text-[#BABBBD]'} absolute top-[60px] max-sm:top-[45px] w-[150px] max-sm:w-[67px]`}>Start Transaction</h3>
                </div>
                <div className={`w-[20%] h-[8px] ${props.steps[1] ? 'bg-[#FFAB17]' : 'bg-[#BABBBD]'}`}></div>
                <div className={`min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] rounded-full flex justify-center 
                    items-center ${props.steps[1] ? 'bg-white': 'bg-[#BABBBD]'} relative`}>
                    <p className={`${props.steps[1] ? 'text-[#FFAB17]' : 'text-[#020E1FB2]'} text-[20px]`}>2</p>
                    <h3 className={`text-[20px] max-lg:text-[14px] max-sm:text-[12px] text-center 
                        ${props.steps[1] ? 'text-[#FFAB17]' : 'text-[#BABBBD]'} absolute top-[60px] max-sm:top-[50px] w-[150px] max-sm:w-[67px]`}>Summary</h3>
                </div>
                <div className={`w-[20%] h-[8px] ${props.steps[2] ? 'bg-[#FFAB17]' : 'bg-[#BABBBD]'}`}></div>
                <div className={`min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] rounded-full flex justify-center 
                    items-center ${props.steps[2] ? 'bg-white': 'bg-[#BABBBD]'} relative`}>
                    <p className={`${props.steps[2] ? 'text-[#FFAB17]' : 'text-[#020E1FB2]'} text-[20px]`}>3</p>
                    <h3 className={`text-[20px] max-lg:text-[14px] max-sm:text-[12px] text-center 
                        ${props.steps[2] ? 'text-[#FFAB17]' : 'text-[#BABBBD]'} absolute top-[60px] max-sm:top-[50px] w-[150px] max-sm:w-[67px]`}>Invitation</h3>                    
                </div>
                <div className={`w-[20%] h-[8px] ${props.steps[3] ? 'bg-[#FFAB17]' : 'bg-[#BABBBD]'}`}></div>
                <div className={`min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] rounded-full flex justify-center 
                    items-center ${props.steps[3] ? 'bg-white': 'bg-[#BABBBD]'} relative`}>
                    <p className={`${props.steps[3] ? 'text-[#FFAB17]' : 'text-[#020E1FB2]'} text-[20px]`}>4</p>
                    <h3 className={`text-[20px] max-lg:text-[14px] max-sm:text-[12px] text-center 
                        ${props.steps[3] ? 'text-[#FFAB17]' : 'text-[#BABBBD]'} absolute top-[60px] max-sm:top-[50px] w-[150px] max-sm:w-[67px]`}>Activity</h3>
                </div>
            </div>
        </div>
    )
}