import React, { useState } from 'react'
// import {FaArrowLeft,FaArrowRight} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@heroui/react";
function Carousel() {

const CarouselData = [
    {
        id: 1,
        image: "/slider.png",
        heading: "Wizkid made in lagos tour",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        id: 2,
        image: "/dSlider.png",
        heading: "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        id: 3,
        image: "/slider.png",
        heading: "The 90s with Dj Neptune",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
    
];
const TagData = [
    {
        id: 10,
        img: "Calendar.png",
        title: "Dec 12 2024",
    },
    {
        id: 11,
        img: "Mark.png",
        title: "TBS Lagos",
    },
    {
        id: 12,
        img: "Clock.png",
        title: "9:00",
    },
    {
        id: 13,
        img: "Tag.png",
        title: "N20,000",
    }
]
const [currentIndex,setCurrentIndex ]= useState(0);

const handleDotClick = (index) => {
    setCurrentIndex(index)
}
const currentSlider = CarouselData[currentIndex];

const handlePrev = () => {
     setCurrentIndex((prevIndex) =>(
        prevIndex === 0 ? CarouselData.length - 1: prevIndex -1
     ))
};
const handleNext = () => {
    setCurrentIndex((prevIndex) =>(

        prevIndex  === CarouselData.length - 1 ? 0 : prevIndex + 1
    ))
}
  return (
    <section className='overflow-hidden px-10'>
        <div className="container mx-auto py-5 lg:py-10">
            <h1 className='text-center text-2xl lg:text-5xl text-[#26395C]  mb-12 font-semibold'>See How People are Chilling On Chillsbay</h1>
            <div className='relative w-full max-w-screen-2xl mx-auto'>
                <div className='flex items-center justify-between'>
                    
                    <button 
                    onClick={handlePrev}
                    className='absolute left-0 transform -translate-x-6 flex items-center justify-center bg-gray-700 text-white rounded-full w-12 h-12'>
                    <FaArrowLeft />
                    </button>
                    <div className='flex flex-col lg:flex-row items-center gap-6 w-full px-12'>
                        <div className='w-full lg:1/2'>
                            <h3 className='text-3xl font-semibold text-[#26395C] lg:ms-10 text-center'>Upcoming events this weekend</h3>
                            <img className='object-cover w-full h-fit' src={currentSlider.image} alt="" />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                            <h2 className='text-2xl lg:text-4xl font-bold lg:w-[70%] leading-tight'>{currentSlider.heading}</h2>
                            <p className='text-gray-700 lg:w-[100%] text-xl'>{currentSlider.des}</p>
                            <div className='grid grid-cols-2 lg:w-[80%]'>
                                {
                                    TagData.map((data, id)=>(
                                        <div key={id} className='flex items-center mt-5 mb-5'>
                                            <img src={data.img} alt="" />
                                            <p className='ms-2 text-lg'>{data.title}</p>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className='flex gap-4'>
                                <Button color='primary' variant='bordered' size='lg'>Add To Cart</Button>
                                <Button color='primary' size='lg'>Book Now</Button>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <p>Connect with us on :</p>
                              
                                    <img className='w-4 h-4' src="/Twitter.png" alt="" />
                                    <img className='w-4 h-4' src="/Instagram.png" alt="" />
                               
                            </div>
                        </div>
                    </div>

                    <button onClick={handleNext}  className='absolute right-0 transform -translate-x-6 flex items-center justify-center bg-gray-700 text-white rounded-full w-12 h-12'>
                    <FaArrowRight />

                    </button>
                </div>

            </div>
            <div className='flex items-center justify-center gap-2 mt-6'>
                {
                    CarouselData.map((data, index)=> (
                        <button onClick={()=> handleDotClick(index)} className={`w-3 h-4 rounded-full ${
                            index === currentIndex
                            ? "bg-blue-500"
                            : "bg-gray-300"

                        }`}>

                        </button>
                    ))
                }

            </div>
        </div>
      
    </section>
  )
}

export default Carousel
