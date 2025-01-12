import React from 'react'

function Galary() {
    const GalaryImg = [
        {
           img: "galary1.png" 
        },
        {
            img: "galary2.png" 
         },
         {
            img: "galary3.png" 
         },    {
            img: "galary4.png" 
         },    {
            img: "galary5.png" 
         },    {
            img: "galary6.png" 
         }
    ]
  return (
    <section className='border p-10 '>
        <div className="container mx-auto py-10">
            <h3 className='text-3xl font-semibold text-center lg:text-start text-[#26395C]'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 mt-8'>
                {
                    GalaryImg.map((source)=> (
                        <div className='mt-5'>
                            <img className='w-full object-cover h-full' src={source.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
      
    </section>
  )
}

export default Galary
