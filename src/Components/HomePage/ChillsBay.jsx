import React from 'react'

function ChillsBay() {
    const CardInfo = [
        {   id: 1,
            logo: "/logo1.png",
            title: "Your  entire  trip in one checkout!",
            des: "Add multiple experiences to your  cart and checkout on one click."
        },
        {
            id: 2,
            logo: "/logo2.png",
            title: "Pay with Crypto on the go",
            des: "Enjoy the freedom of universal payments for a seamless marketplace experience"
        },
        {
            id: 3,
            logo: "/logo3.png",
            title: "Free Cancellation and ticket transfer",
            des: "Add multiple experiences to your cart and checkout on one click."
        }
    ]

  return (
    <section>
        <div className="container mx-auto">
            <h2 className='text-center text-2xl sm:text-3xl lg:text-5xl text-[#26395C] font-bold'>Why Use Chillsbay?</h2>
        <div className=" bg-[#d3e2f2] grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10 p-12 rounded-2xl shadow-xl">
    {
        CardInfo.map((info,i)=>(
            <div key={i} className='mt-10 '>
                <img className='w-fit mx-auto' src={info.logo} alt="" />
                <div className='w-[60%] mx-auto text-center'>
                    <h3 className='text-2xl font-semibold mt-2 mb-3'>{info.title}</h3>
                    <p className='text-lg'>{info.des}</p>
                </div>
            </div>
        ))
    }
        </div>

      </div>
    </section>
  )
}

export default ChillsBay
