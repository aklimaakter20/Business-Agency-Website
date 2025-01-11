import React from 'react'

function ThingsCard() {
    const cards = [
        {
            imgSrc: "/things1.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "/things2.png",
            title: "Volley Ball Game"
        },   {
            imgSrc: "/things3.png",
            title: "Sight Seeing"
        },   {
            imgSrc: "/things1.png",
            title: "Wizkid Show"
        },
        {
            imgSrc: "/things1.png",
            title: "Sight Seeing"
        },
        {
            imgSrc: "/things3.png",
            title: "Volley Ball Game"
        },   {
            imgSrc: "/things1.png",
            title: "Sight Seeing"
        },   {
            imgSrc: "/things2.png",
            title: "Wizkid Show"
        }
    ]
  return (
    <section className='bg-[#F5FAFF] p-5'>
        <div className="container mx-auto">
        <h1 className='text-center lg:text-start text-[#26395C] text-2xl sm:text-3xl font-bold mt-10 mb-10'>Top things to do in Lagos</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10">
        {
            cards.map((card, index)=> (
                <div key= {index} className='flex flex-col items-center overflow-hidden'>
                    <img className='w-[350px] h-[250px] lg:h-[250px] rounded-2xl' src={card.imgSrc} alt="" />
                    <div>
                        <h2 className='text-lg sm:text-xl mt-4 mb-10 text-[#26395C] font-bold'>{card.title}</h2>
                    </div>

                </div>
            ))
        }
       
    </div>
        </div>
    
    
    </section>
  )
}

export default ThingsCard
