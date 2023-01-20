import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Slider() {    
    const slides = [
        {
            direktori: '/img/bg.jpg',
            deskripsi: 'THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY'
        },
        {
            direktori: '/img/about-bg.jpg',
            deskripsi: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-full h-[1150px] w-full m-auto py-16 relative group -mt-4'>
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].direktori})` }}
            className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        {/* Panah Kiri */}
        <div className='hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full outline outline-white outline-1 text-white cursor-pointer'>
            <AiOutlineLeft onClick={prevSlide} size={20} />
        </div>
        {/* Panah Kanan */}
        <div className='hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full outline outline-white outline-1 text-white cursor-pointer'>
            <AiOutlineRight onClick={nextSlide} size={20} />
        </div>
        <div class="hidden group-hover:block top-[75%] left-[15%] max-w-[800px] -translate-x-0 translate-y-[-50%] lg:block absolute w-100 bg-black bg-opacity-60 p-5 ml-12">
            <p className="text-3xl font-bold text-white mr-16">{slides[currentIndex].deskripsi}</p>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer text-red -mt-12 ml-4'
            >
                {slideIndex == currentIndex && (
                    <div className='hidden group-hover:block text-2xl rounded-full p-2 bg-white cursor-pointer'>
                    </div>
                )}
                {slideIndex != currentIndex && (
                    <div className='hidden group-hover:block text-2xl rounded-full p-2 bg-slider cursor-pointer'>
                    </div>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}