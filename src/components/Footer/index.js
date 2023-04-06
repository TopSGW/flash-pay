import telegramSvg from '../../assets/landing/footer/telegram-icon.svg.svg';
import instagramSvg from '../../assets/landing/footer/instagram-icon.svg.svg';
import twitterSvg from '../../assets/landing/footer/twitter-icon.svg.svg';
import bookSvg from '../../assets/landing/footer/book-icon.svg.svg';
import redditSvg from '../../assets/landing/footer/reddit-icon.svg.svg';
import myspaceSvg from '../../assets/landing/footer/my-space-icon.svg.svg';
import githubSvg from '../../assets/landing/footer/github-icon.svg.svg';
import cmcSvg from '../../assets/landing/footer/cmc-icon.svg.svg';
import logo from '../../assets/landing/logo.png';

export default function Footer(){
    const footerImgs=[
        {img:telegramSvg},
        {img:instagramSvg},
        {img:twitterSvg},
        {img:bookSvg},
        {img:redditSvg},
        {img:myspaceSvg},
        {img:githubSvg},
        {img:cmcSvg}
    ]
    return(
        <div className="w-auto m-0 p-0">
            <div className='px-2 sm:px-16 py-6 bg-black'>
                <div className='max-sm:pl-2 flex sm:justify-center sm:items-center max-sm:flex-col'>
                    <div className='sm:hidden'>
                        <img src={logo} alt="logo" className='w-[50px] max-sm:w-[45px]'></img>
                    </div>
                    <h3 className='text-[16px] text-white max-sm:mt-4'>Terms of Service</h3>
                    <h3 className='sm:ml-8 text-[16px] text-white max-sm:mt-4'>Privacy & Security</h3>
                </div>
                <div className='mt-6 flex flex-row justify-center items-center'>
                    {footerImgs.map((m,index) =>{
                        return(
                            <div key={index}>
                                <img src={m.img} alt="img" className='mx-4 max-md:mx-2 max-sm:mx-1
                                max-sm:max-w-[35px]'></img>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-6 max-sm:pl-2'>
                    <h3 className='text-white text-[16px] sm:text-center'>© 2023 Flash Pay. All rights reserved.</h3>
                </div>
            </div>
        </div>    
    )
}