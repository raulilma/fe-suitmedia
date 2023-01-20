import Image from "next/image";

export default function Footer() {
    return (
        <footer className='sticky w-full'>
            <div className='text-center py-4 bg-footer'>
                <p className='text-white mt-4'>Copyright @ 2016. PT Company</p>
                <div className='w-fit mx-auto mb-3 mt-2'>
                    <a href="https://www.facebook.com/baksorusukjoss/">
                        <Image src='/img/facebook-official.png' alt='Facebook' width={30} height={30} className='inline scale-[70%] mx-2 hover:scale-75 duration-100' />
                    </a>
                    <a href="https://www.twitter.com/BaksoRusukJossPusat/">
                        <Image src='/img/twitter.png' alt='Twitter' width={30} height={30} className='inline scale-[70%] mx-2 hover:scale-75 duration-100' />
                    </a>
                </div>
            </div>
        </footer>
    )
}