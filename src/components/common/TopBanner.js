import React, { useState, useEffect } from 'react';
import image1 from '../../assets/AirBanner.jpg';
import image2 from '../../assets/OceanBanner.jpg';
import image3 from '../../assets/RailBanner.jpg';
import image4 from '../../assets/RoadBanner.jpg';
import image5 from '../../assets/CustomBanner.png';
import image6 from '../../assets/CourierBanner.jpg';
import image7 from '../../assets/WarehouseBanner.jpg';
import image8 from '../../assets/ServicesBanner.jpg';
import imageLogo from '../../assets/LOGO.png';


const Carousel = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevState => (prevState === images.length - 1 ? 0 : prevState + 1));
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <div className='h-[730px] md:h-full'>
            <div className='flex justify-center mb-10 '>
                <img src={imageLogo} className="bottom-[485px] md:top-[-42px] lg:bottom-[300px] left-1/2    h-[13rem] lg:h-[20rem]" alt="Logo" />
                <div className=' absolute top-[13rem] left-1/2 transform -translate-x-1/2  text-center w-full px-4 md:px-8 lg:px-16 md:pt-[9rem] '>
                    <h1 className='text-black text-2xl  md:text-3xl font-bold font-serif  lg:text-[50px]  lg:leading-[50px] pt-[75px] md:pt-0'>
                        Born in India & Serving the World</h1>

                </div>
            </div>
            <div id="default-carousel" className=" h-screen overflow-hidden" data-carousel="slide">
                <div className="relative w-full h-full">
                   
                    {images.map((image, index) => (
                        <div key={index} className={`absolute inset-0 duration-50 ease-in-out ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item>
                            {/* <img src={image} className="w-screen h-[500px] md:h-[900px] object-fit md:object-cover brightness-100" alt="Banner" /> */}
                            <img
                                src={image}
                                className="w-full h-[500px] md:h-[900px] object-cover brightness-100"
                                alt="Banner"
                            />

                            {/* <img src={imageLogo} className="absolute bottom-[485px] md:top-[-42px] lg:bottom-[300px] left-1/2 transform -translate-x-1/2 md:left-1/2 z-50 h-[13rem] lg:h-[20rem]" alt="Logo" /> */}

                            {/* <div className=' absolute top-[13rem] left-1/2 transform -translate-x-1/2 z-50 text-center w-full px-4 md:px-8 lg:px-16 md:pt-[9rem] '>
                            <h1 className='text-white text-2xl  md:text-3xl font-bold font-serif  lg:text-[50px]  lg:leading-[50px] pt-[40px] md:pt-0'>Born in North America & Serving the World</h1>
                            
                        </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;


