import logo from '../../assets/landing/logo.png';
// import arrowDownSvg from '../../assets/landing/arrow_down.svg';
// import menuSvg from '../../assets/landing/menu.svg';
import selectArrowDonwSvg from '../../assets/landing/select-arrow-down.svg'
import blockchainBgImg from '../../assets/landing/blockchain-bg.png';
import binanceSvg from '../../assets/landing/binance.svg.svg';
import ethereumSvg from '../../assets/landing/etherium.svg.svg';
import fantomSvg from '../../assets/landing/fantom.svg.svg';
import polygonSvg from '../../assets/landing/polygon.svg.svg';
import avalancheSvg from '../../assets/landing/avalanche.svg.svg';
import optimismImg from '../../assets/landing/optimism.png';
import arbitrumImg from '../../assets/landing/arbitrum.png';
import tronSvg from '../../assets/landing/tron.svg.svg';
import tetherSvg from '../../assets/landing/tether.svg.svg';
import usdcoinSvg from '../../assets/landing/usd-coin.svg.svg';
import daiImg from '../../assets/landing/dai.png';
import trustSvg from '../../assets/landing/trust.svg';
import fastSvg from '../../assets/landing/fast.svg'
import goodsImg from '../../assets/landing/goods.png';
import nftImg from '../../assets/landing/nft.png';
import sourceCodeImg from '../../assets/landing/sourceCode.png';
import paypalapiImg from '../../assets/landing/paypalapi.png'
import ecosystemSvg from '../../assets/landing/ecosystem.svg';
import ecosystemMobileSvg from '../../assets/landing/ecosystem_mobile.svg';
import pancakeswapSvg from '../../assets/landing/pancakeswap.svg';
import uniswapSvg from '../../assets/landing/uniswap.svg'
import worldmapSvg from '../../assets/landing/worldmap.svg' 
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';

export default function Landing(){
    const networkImgs=[
        {
            img:binanceSvg,
            alt:"binance",
            width: "110px"
        },
        {
            img:ethereumSvg,
            alt:"ethereum",
            width: "140px"
        },
        {
            img:fantomSvg,
            alt:"fantom",
            width: "120px"
        },
        {
            img:polygonSvg,
            alt:"ploygon",
            width:"120px"
        },
        {
            img:avalancheSvg,
            alt: "avalanche",
            width: "160px"
        },
        {
            img:optimismImg,
            alt:'optimism',
            width:"127px"
        },
        {
            img:arbitrumImg,
            alt:"arbitrum",
            width: "124px"
        },
        {
            img:tronSvg,
            alt: "tron",
            width: "0px"
        },
        {
            img:tetherSvg,
            alt: "tether",
            width:"119px"
        },
        {
            img:usdcoinSvg,
            alt: "usdcoin",
            width:"126px"
        },
        {
            img:daiImg,
            alt:"dai",
            width:"76px"
        },
    ]
    const [DropdownState1, setDropdownState1] = useState(false)
    const [DropdownState2, setDropdownState2] = useState(false)
    const [CryptoUnit, setCryptoUnit] = useState("BUSD")
    return(
        <div className="w-auto m-0 p-0">
            <div className='mt-20 max-sm:mt-8 flex lg:justify-between max-lg:flex-col items-center px-16 max-lg:px-4'>
                <div className='w-full lg:w-[50%]'>
                    <div className='flex flex-row items-center px-4 py-2 bg-[#FFAB17] w-fit max-lg:mx-auto'>
                        <h3 className='text-white text-[16px] max-sm:text-[12px] font-semibold'>SECURE</h3>
                        <div className='mx-4 w-[8px] h-[8px] bg-white rounded-full'></div>
                        <h3 className='text-white text-[16px] font-semibold max-sm:text-[12px]'>SAFE</h3>
                        <div className='mx-4 w-[8px] h-[8px] bg-white rounded-full'></div>
                        <h3 className='text-white text-[16px] font-semibold max-sm:text-[12px]'>TRUSTED</h3>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-[40px] max-lg:text-[20px] text-[#012157] font-bold max-lg:leading-[24px]
                            max-lg:text-center'>
                            Empowering escrow and payments through <span className='text-[#FFAB17]'>Decentralization</span> to Escrow & Payments
                        </h3>
                    </div>
                    <div className='mt-4 max-lg:hidden'>
                        <h3 className='text-[20px] text-[#6B7280]'>
                            Use Flash Pay to exchange your crypto for goods, services, and NFTs without any concerns about fraud or incomplete services. Our smart contract technology ensures transparency and security throughout the process.
                        </h3>
                    </div>
                    <div className='mt-8 px-3 py-2 flex flex-row items-center rounded-lg
                        border-solid border-[#FFAB17] border-[1px] w-[350px] max-lg:hidden'>
                        <div>
                            <div className='flex flex-row items-center'>
                                <OutsideClickHandler onOutsideClick={()=>setDropdownState1(false)}>
                                    <button className='flex flex-row items-center relative' onClick={()=>setDropdownState1(true)}>
                                            <h3 className='text-[18px] font-medium text-[#143057]'>I’m Selling</h3>
                                            <div className='mx-4'>
                                                <img src={selectArrowDonwSvg} alt="" className='w-[12px]'></img>
                                            </div>
                                            <div className='flex flex-col p-2 absolute bg-white top-[37px] right-[16px] w-[125px]' style={{boxShadow: "0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06)", display: `${DropdownState1 === true ? 'flex' : 'none' }`}}>
                                                <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757]'>I’m Selling</div>
                                            </div>
                                    </button>
                                </OutsideClickHandler>                                    
                                <div className='pl-3 border-solid border-[#757575] border-l-[1px] w-[190px]'>
                                    <input className='text-[18px] text-[#757575] px-2 focus:outline-none w-full' placeholder='Graphics, Domain'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 px-3 py-2 flex flex-row items-center rounded-lg border-solid
                        border-[#FFAB17] border-[1px] w-[350px] max-lg:hidden'>
                        <h3 className='text-[18px] text-[#143057] font-medium'>For $</h3>
                        <h3 className='ml-8 mr-auto text-[17px] text-[#757575] font-medium'>800</h3>
                        <OutsideClickHandler onOutsideClick={()=>setDropdownState2(false)}>
                            <button className='flex flex-row items-center relative' onClick={()=>setDropdownState2(true)}>
                                <h3 className='text-[18px] text-[#143057] font-medium'>{CryptoUnit}</h3>
                                <div className='ml-2'>
                                    <img src={selectArrowDonwSvg} className="w-[12px]" alt=""></img>
                                </div>
                                <div className='flex flex-col p-2 absolute bg-white top-[37px]' style={{boxShadow: "0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06)", display: `${DropdownState2 === true ? 'flex' : 'none' }`}}>
                                    <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757] my-2 px-2' onClick={()=>setCryptoUnit("BUSD")}>BUSD</div>
                                    <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757] my-2 px-2' onClick={()=>setCryptoUnit("USDT")}>USDT</div>
                                </div>
                            </button>
                        </OutsideClickHandler>
                    </div>
                    <button className='mt-4 bg-[#FFAB17] py-2 rounded-lg w-[350px] max-lg:hidden active:bg-[#cd8a13]'>
                        <h3 className='text-[18px] text-white text-center font-semibold'>
                            Get Started
                        </h3>
                    </button>
                </div>
                <div className='w-full mt-5 lg:w-[45%]'>
                    <img src={blockchainBgImg} alt="" className='w-full'></img>
                    <div className='lg:hidden flex flex-col items-center'>
                        <div className='mt-4'>
                            <h3 className='text-[16px] text-[#6B7280] leading-[20px] text-center'>
                                Use Flash Pay to exchange your crypto for goods, services, and NFTs without any concerns about fraud or incomplete services. Our smart contract technology ensures transparency and security throughout the process.
                            </h3>
                        </div>
                        <div className='mt-8 px-3 py-2 flex flex-row items-center rounded-lg
                            border-solid border-[#FFAB17] border-[1px] w-[350px] max-sm:w-full'>
                            <OutsideClickHandler onOutsideClick={()=>setDropdownState1(false)}>
                                <button className='flex flex-row items-center relative' onClick={()=>setDropdownState1(true)}>
                                    <h3 className='text-[18px] font-medium text-[#143057]'>I’m Selling</h3>
                                    <div className='mx-4'>
                                        <img src={selectArrowDonwSvg} alt="" className='w-[12px]'></img>
                                    </div>
                                    <div className='pl-3 border-solid border-[#757575] border-l-[1px] w-[190px]'>
                                        <input className='text-[18px] text-[#757575] px-2 focus:outline-none w-full' placeholder='Graphics, Domain'/>
                                    </div>
                                    <div className='flex flex-col p-2 absolute bg-white top-[37px] w-[125px]' style={{boxShadow: "0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06)", display: `${DropdownState1 === true ? 'flex' : 'none' }`}}>
                                        <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757]'>I’m Selling</div>
                                    </div>
                                </button>
                            </OutsideClickHandler>
                        </div>
                        <div className='mt-4 px-3 py-2 flex flex-row items-center rounded-lg border-solid
                            border-[#FFAB17] border-[1px] w-[350px] max-sm:w-full'>
                            <h3 className='text-[18px] text-[#143057] font-medium'>For $</h3>
                            <h3 className='ml-8 mr-auto text-[17px] text-[#757575] font-medium'>800</h3>
                            <OutsideClickHandler onOutsideClick={()=>setDropdownState2(false)}>
                                <button className='flex flex-row items-center relative' onClick={()=>setDropdownState2(true)}>
                                    <h3 className='text-[18px] text-[#143057] font-medium'>{CryptoUnit}</h3>
                                    <div className='ml-2'>
                                        <img src={selectArrowDonwSvg} className="w-[12px]" alt=""></img>
                                    </div>
                                    <div className='flex flex-col p-2 absolute bg-white top-[37px]' style={{boxShadow: "0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06)", display: `${DropdownState2 === true ? 'flex' : 'none' }`}}>
                                        <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757] my-2 px-2' onClick={()=>setCryptoUnit("BUSD")}>BUSD</div>
                                        <div className=' hover:text-[#004299] hover:bg-[#9bd4fa] text-[#575757] my-2 px-2' onClick={()=>setCryptoUnit("USDT")}>USDT</div>
                                    </div>
                                </button>
                            </OutsideClickHandler>
                        </div>
                        <button className='mt-4 bg-[#FFAB17] py-2 rounded-lg w-[350px] max-sm:w-full active:bg-[#cd8a13]'>
                            <h3 className='text-[18px] text-white text-center font-semibold'>
                                Get Started
                            </h3>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-16 px-16 max-md:px-4 py-4 bg-[#E89400]'>
                <div className='flex flex-wrap sm:justify-center max-sm:justify-between items-center'>
                    {networkImgs.map((m,index)=>{
                        return(
                            <div key={index}>
                                <img src={m.img} alt={m.alt} className={`my-2 mx-12 max-sm:mx-2 max-sm:hidden`}/>
                                <img src={m.img} alt={m.alt} className={`my-2 mx-12 max-sm:mx-2 sm:hidden`} 
                                    style={{width:`${m.width}`}}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='px-10 max-sm:px-4 py-10 bg-[#EBF3FE] w-full'>
                <div className='mt-2'>
                    <h3 className='text-[40px] max-sm:text-[28px] text-[#143057] font-bold text-center'>We Secure and Protect you</h3>
                    <p className='text-[18px] max-sm:text-[14px] text-[#212529] tracking-[0.04em] text-center'>
                        Flash Pay enhances trust between buyers and sellers by locking buyer funds in an audited smart contract until receipt of goods or services is confirmed, ensuring secure and reliable transactions.
                    </p>
                </div>
                <div className='mt-10 max-sm:mt-2 flex sm:justify-between max-sm:flex-col pb-3'>
                    <div className='w-full sm:w-[48%] rounded-lg bg-white p-4'>
                        <div className='mt-2 flex flex-row items-center'>
                            <div><img src={trustSvg} alt="trust"/></div>
                            <h3 className='ml-4 font-bold text-[24px] text-[#143057]'>TRUST</h3>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[14px] text-[#212529]'>
                                Flash Pay strengthens the trust between buyers and sellers by holding buyer funds in a Certik-audited smart contract until goods are received or services are rendered. With all data and funds stored on-chain, our web3 platform provides a level of transparency and peace of mind that web2 competitors cannot match.
                            </p>
                        </div>
                    </div>
                    <div className='w-full sm:w-[48%] max-sm:mt-2 rounded-lg bg-white p-4'>
                        <div className='mt-2 flex flex-row items-center'>
                            <div><img src={fastSvg} alt="trust"/></div>
                            <h3 className='ml-4 font-bold text-[24px] text-[#143057]'>FAST</h3>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[14px] text-[#212529]'>
                                Buyers and sellers can rapidly generate escrow agreements using the Flash Pay App. Once goods or services are confirmed, funds are promptly transferred and made accessible to the seller using smart contract technology, ensuring a seamless and secure
                            </p>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='px-10 max-sm:px-4 py-6 bg-white w-full'>
                <div className='mt-4 flex sm:flex-row max-sm:flex-col items-center sm:justify-between'>
                    <div className='w-auto sm:w-[45%]'>
                        <img src={goodsImg} alt="goods"></img>
                    </div>
                    <div className='w-full sm:w-[47%]'>
                        <div className=''>
                            <h3 className='text-[40px] max-lg:text-3xl max-md:text-[24px] max-md:mt-4 text-[#143057] font-bold max-sm:text-center'>Services & Goods in Crypto</h3>
                            <p className='mt-3 text-[18px] max-lg:text-base max-md:text-[14px] text-[#212529] pb-10 max-[1118px]:pb-4 max-lg:pb-0
                                max-sm:text-center'>
                                With our platform, you can exchange your goods using secure and transparent escrow smart contracts, providing a guarantee that both parties will honor the agreed-upon terms.
                            </p>
                            <div className='mt-8 max-lg:mt-4 flex sm:flex-row max-sm:flex-col max-sm:items-center'>
                                <button className='max-sm:w-full px-4 py-2 text-white text-[16px] md:text-[18px] rounded-lg bg-[#FFAB17]'>
                                    Start Escrow
                                </button>
                                <button className='max-sm:w-full sm:ml-4 max-sm:mt-2 px-4 py-2 text-[#FFAB17] md:text-[18px] max-sm:text-[16px] rounded-lg bg-white
                                    border-solid border-[1px] border-[#FFAB17]'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-16 mt-6 flex sm:flex-row-reverse max-sm:flex-col items-center sm:justify-between'>
                    <div className='w-auto sm:w-[45%]'>
                        <img src={nftImg} alt="goods"></img>
                    </div>
                    <div className='w-full sm:w-[47%]'>
                        <div className=''>
                            <h3 className='text-[40px] max-lg:text-3xl max-md:text-[24px] max-md:mt-4 text-[#143057] font-bold max-sm:text-center'>NFT</h3>
                            <p className='mt-3 text-[18px] max-lg:text-base max-md:text-[14px] text-[#212529] pb-10 max-[1118px]:pb-4 max-lg:pb-0
                                max-sm:text-center'>
                                Flash Pay ensures honest and fair interactions between freelancers and clients by providing secure services and payment for both parties. Our platform also prevents the exchange of counterfeit NFTs by recognizing and rejecting fake items before finalizing the transaction.
                            </p>
                            <div className='mt-8 max-lg:mt-4 flex sm:flex-row max-sm:flex-col max-sm:items-center'>
                                <button className='max-sm:w-full px-4 py-2 text-white text-[16px] md:text-[18px] rounded-lg bg-[#FFAB17]'>
                                    Start Escrow
                                </button>
                                <button className='max-sm:w-full sm:ml-4 max-sm:mt-2 px-4 py-2 text-[#FFAB17] md:text-[18px] max-sm:text-[16px] rounded-lg bg-white
                                    border-solid border-[1px] border-[#FFAB17]'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-16 mt-6 flex sm:flex-row max-sm:flex-col items-center sm:justify-between'>
                    <div className='w-auto sm:w-[45%]'>
                        <img src={sourceCodeImg} alt="sourcecode"></img>
                    </div>
                    <div className='w-full sm:w-[47%]'>
                        <div className=''>
                            <h3 className='text-[40px] max-lg:text-3xl max-md:text-[24px] max-md:mt-4 text-[#143057] font-bold max-sm:text-center'>Source Code Escrow</h3>
                            <p className='mt-3 text-[18px] max-lg:text-base max-md:text-[14px] text-[#212529] pb-10 max-[1118px]:pb-4 max-lg:pb-0
                                max-sm:text-center'>
                               Flash Pay provides buyers with the ability to verify the authenticity and functionality of a seller's Source Code, while sellers benefit from secure smart contract escrow vaults that ensure they receive the agreed-upon payment.     
                            </p>
                            <div className='mt-8 max-lg:mt-4 flex sm:flex-row max-sm:flex-col max-sm:items-center'>
                                <button className='max-sm:w-full px-4 py-2 text-white text-[16px] md:text-[18px] rounded-lg bg-[#FFAB17]'>
                                    Start Escrow
                                </button>
                                <button className='max-sm:w-full sm:ml-4 max-sm:mt-2 px-4 py-2 text-[#FFAB17] md:text-[18px] max-sm:text-[16px] rounded-lg bg-white
                                    border-solid border-[1px] border-[#FFAB17]'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-16 mt-6 flex sm:flex-row-reverse max-sm:flex-col items-center sm:justify-between'>
                    <div className='w-auto sm:w-[45%]'>
                        <img src={paypalapiImg} alt="paypalAPI_img"></img>
                    </div>
                    <div className='w-full sm:w-[47%]'>
                        <div className=''>
                            <h3 className='text-[40px] max-lg:text-3xl max-md:text-[24px] max-md:mt-4 text-[#143057] font-bold max-sm:text-center'>Integrate Flash Pay in API</h3>
                            <p className='mt-3 text-[18px] max-lg:text-base max-md:text-[14px] text-[#212529] pb-10 max-[1118px]:pb-4 max-lg:pb-0
                                max-sm:text-center'>
                                You can integrate Flash Pay directly into your platform to secure all your crypto & nft transactions with our API.    
                            </p>
                            <div className='mt-8 max-lg:mt-4 flex sm:flex-row max-sm:flex-col max-sm:items-center'>
                                <button className='max-sm:w-full px-4 py-2 text-white text-[16px] md:text-[18px] rounded-lg bg-[#FFAB17]'>
                                    Read Sandbox
                                </button>
                                {/* <button className='max-sm:w-full sm:ml-4 max-sm:mt-2 px-4 py-2 text-[#FFAB17] md:text-[18px] max-sm:text-[16px] rounded-lg bg-white
                                    border-solid border-[1px] border-[#FFAB17]'>
                                    Learn More
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>                                                
            </div>
            <div className='px-10 max-sm:px-4 py-5 bg-[#EBF3FE]'>
                <h3 className='text-[40px] max-sm:mt-4 max-md:text-[28px] font-bold text-center text-[#143057]'>
                How Flash Pay Works
                </h3>
                <p className='mt-4 text-[18px] max-sm:text-[14px] text-[#020E1FB2]'>
                    With Flash Pay, you can rest assured of security and peace of mind thanks to our use of blockchain technology, which locks all funds in smart contracts and releases them to the seller gradually as the buyer receives proof of services rendered.
                </p>
            </div>
            <div className='px-10 max-sm:px-4 py-4' style={{
               background: "linear-gradient(236.23deg, #FF881B -24.06%, #FFBC46 51.99%, #FF881B 100%)" 
            }}>
                <div className='flex sm:flex-wrap max-sm:flex-col justify-center items-center'>
                    <div className='my-4 mx-4 max-sm:mx-0'>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-[94px] min-h-[94px] rounded-md flex justify-center items-center' style={{
                                background:"rgba(255, 255, 255, 0.1)"}}>
                                {/* <img src={oneSvg} alt="01"></img> */}
                                <h3 className='text-white text-[50px] font-extrabold mb-[4px]'>01</h3>
                            </div>
                            <div className='flex flex-col w-[222px] max-sm:w-full ml-2'>
                                <p className='text-black text-[14px] font-medium'>
                                    The buyer and seller come to an agreement on the terms of the transaction through milestones.
                                </p>
                                <p className='mt-2 text-black text-[12px] font-medium'>
                                    Both parties come together to agree on terms via milestone before proceeding to the next stage of business.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 mx-8 max-sm:mx-0'>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-[94px] min-h-[94px] rounded-md flex justify-center items-center' style={{
                                background:"rgba(255, 255, 255, 0.1)"}}>
                                <h3 className='text-white text-[50px] font-extrabold mb-[4px]'>02</h3>
                            </div>
                            <div className='flex flex-col w-[222px] max-sm:w-full ml-2'>
                                <p className='text-black text-[14px] font-medium'>
                                    The buyer deposits funds into the Escrow vault.
                                </p>
                                <p className='mt-2 text-black text-[12px] font-medium'>
                                   The buyer deposits funds into our secure smart contract which serves as an escrow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 mx-8 max-sm:mx-0'>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-[94px] min-h-[94px] rounded-md flex justify-center items-center' style={{
                                background:"rgba(255, 255, 255, 0.1)"}}>
                                <h3 className='text-white text-[50px] font-extrabold mb-[4px]'>03</h3>
                            </div>
                            <div className='flex flex-col w-[222px] max-sm:w-full ml-2'>
                                <p className='text-black text-[14px] font-medium'>
                                    The seller provides proof of goods or services by uploading it to the buyer.
                                </p>
                                <p className='mt-2 text-black text-[12px] font-medium'>
                                    Seller uploads every proof of goods or services inorder to be visible by the buyer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 mx-8 max-sm:mx-0'>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-[94px] min-h-[94px] rounded-md flex justify-center items-center' style={{
                                background:"rgba(255, 255, 255, 0.1)"}}>
                                <h3 className='text-white text-[50px] font-extrabold mb-[4px]'>04</h3>
                            </div>
                            <div className='flex flex-col w-[350px] max-sm:w-full ml-2'>
                                <p className='text-black text-[14px] font-medium'>
                                    The transaction's milestones require the buyer's approval of proof of goods or services before being authorized.
                                </p>
                                <p className='mt-2 text-black text-[12px] font-medium'>
                                    When the buyer is satisfied with the goods or services, he/she approves the proof for each set milestone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 mx-8 max-sm:mx-0'>
                        <div className='flex flex-row items-center'>
                            <div className='min-w-[94px] min-h-[94px] rounded-md flex justify-center items-center' style={{
                                background:"rgba(255, 255, 255, 0.1)"}}>
                                <h3 className='text-white text-[50px] font-extrabold mb-[4px]'>05</h3>
                            </div>
                            <div className='flex flex-col w-[350px] max-sm:w-full ml-2'>
                                <p className='text-black text-[14px] font-medium'>
                                    The smart contract automatically releases funds to the seller for each approved milestone in the transaction.
                                </p>
                                <p className='mt-2 text-black text-[12px] font-medium'>
                                    Cryptegrity releases the funds in the smart contract to the seller when each milestone has been approved by the buyer.
                                </p>
                            </div>
                        </div>
                    </div>                                                                                
                </div>
            </div>
            <div className='bg-white px-20 max-sm:px-4 py-10'>
                <h3 className='text-[40px] text-[#143057] max-sm:text-[24px] text-center'>
                    $Flash Token and Flash Pay Ecosystem
                </h3>
                <div className='mt-10 flex justify-center'>
                    <img src={ecosystemSvg} alt="ecosystem" className='max-[550px]:hidden'/>
                    <img src={ecosystemMobileSvg} alt="ecosystemMobileSvg" className='min-[551px]:hidden'></img>
                </div>
            </div>
            <div className='px-16 max-sm:px-4 py-6 bg-[#EBF3FE]'>
                <h3 className='mt-2 text-[40px] text-[#143057] max-sm:text-[24px] font-semibold text-center'>
                    Exchanges to buy Flash token
                </h3>
                <div className='mt-8 flex md:flex-wrap md:justify-center max-md:flex-col'>
                    <div className='w-[31%] max-md:w-full md:mx-2 my-2 flex justify-center items-center bg-white py-2'>
                        <div className='flex flex-row items-center'>
                            <img src={logo} alt="logo" className='w-[50px]'/>
                            <h3 className='text-[22px] max-sm:text-sm text-black font-semibold ml-3'>Flash Dex</h3>
                        </div>
                    </div>
                    <div className='w-[31%] max-md:w-full md:mx-2 my-2 flex justify-center items-center bg-white py-2'>
                        <div className='flex flex-row items-center'>
                            <img src={pancakeswapSvg} alt="logo" className='w-[48px]'/>
                            <h3 className='text-[22px] max-sm:text-sm text-black font-semibold ml-3'>Pancakeswap</h3>
                        </div>
                    </div>
                    <div className='w-[31%] max-md:w-full md:mx-2 my-2 flex justify-center items-center bg-white py-2'>
                        <div className='flex flex-row items-center'>
                            <img src={uniswapSvg} alt="logo" className='w-[48px]'/>
                            <h3 className='text-[22px] max-sm:text-sm text-black font-semibold ml-3'>Uniswap</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-6 max-sm:px-4 py-6'>
                <div className='flex lg:justify-between max-lg:flex-col items-center'>
                    <div className='w-full lg:w-[48%]'>
                        <h3 className='text-[40px] text-[#143057] max-sm:text-[17px] font-semibold
                             max-md:text-center'>
                            We serve the world efficiently
                        </h3>
                        <p className='mt-4 xl:mt-14 text-[#020E1FB2] text-[16px] max-sm:text-[12px] max-md:text-center'>
                            Provides security and peace of mind via blockchain technology. All funds are locked in smart contracts and released in milestones to seller once proof of services rendered has been provided to buyer.
                        </p>
                        <button className='mt-4 text-center text-white text-[18px] py-2 min-w-[300px] max-md:w-full
                          rounded-lg bg-[#FFAB17]'>Start Escrow</button>
                    </div>
                    <div className='w-full lg:w-[48%] max-lg:mt-6'>
                        <img src={worldmapSvg} alt={"worldmap"}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}