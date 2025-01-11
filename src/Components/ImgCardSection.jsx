import React from 'react'

function ImgCardSection() {
    const cards = [
        {
            imgSrc: "/imgcard1.png",
            title: "Eat & Drink"
        },
        {
            imgSrc: "/imgcard2.png",
            title: "Events"
        },   {
            imgSrc: "/imgcard3.png",
            title: "Club"
        },   {
            imgSrc: "/imgcard4.png",
            title: "Things to do"
        }
    ]
  return (
    <section>
      <h1 className='text-center text-[#26395C] text-2xl sm:text-3xl lg:text-5xl font-bold mt-10 mb-10'>What are you in the mood for?</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4">
        {
            cards.map((card, index)=> (
                <div key= {index} className='flex flex-col items-center overflow-hidden'>
                    <img className='w-full h-[300px] lg:h-[450px]' src={card.imgSrc} alt="" />
                    <div>
                        <h2 className='text-2xl sm:text-3xl mt-4 mb-10 text-[#26395C] font-bold'>{card.title}</h2>
                    </div>

                </div>
            ))
        }
    </div>
    
    </section>
  )
}

export default ImgCardSection
