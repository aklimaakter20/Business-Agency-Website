import React, { useState } from "react";

function MyPayment() {
  const [CartItem, SetCartItem] = useState([
    {
      id: 1,
      img: "/person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022 ",
      location: " Quilox Club",
      time : "11am",
      price: "10000",
      quantity: 1,
    },
    {
      id: 2,
      img: "/person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022 ",
      location: " Quilox Club",
      time : "11am",
      price: "5000",
      quantity: 1,
    }
  ]);
  
  const updateQuantity = (id, increment) =>{
    SetCartItem((item)=>(
      item.map((item)=> (
        item.id === id 
        ? {
          ...item,
          quantity: Math.max(item.quantity + increment, 1),
          price: 
          Math.max(item.quantity + increment, 1)* (item.price / item.quantity)

        }
        : item
      ))
    ))

  }
  return (
    <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mt-24 container mx-auto">
    
        {/* left side */}
        <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold text-[#969DAA]">Your Cart</h2>
            {
                CartItem.map((item)=>(
                    <div key={item.id} className="flex items-center gap-4 mb-6 p-4 border-b-1">
                        <img className="w-32 h-32 rounded-lg" src={item.img} alt="" />
                        <div className="flex-1">
                            <h3>{item.title}</h3>
                            <div className=" mt-4">
                                <div className="flex gap-3 items-center">
                                    <div className="flex item-center gap-2">
                                        <img className="w-4 h-4" src="/Calendar.png" alt="" />
                                        <p className="text-sm text-gray-600">{item.date}</p>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <img className="w-4 h-4" src="/Mark.png" alt="" />
                                        <p className="text-sm text-gray-600">{item.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img className="w-4 h-4" src="/Clock.png" alt="" />
                                    <p className="text-sm text-gray-600">{item.time}</p>

                                </div>

                            </div>
                            {/* Quantity Control */}
                              <div className="flex items-center gap-4 mt-4 bg-gray-200 rounded w-[15%]">
                                <button className="px-2 py-1 hover:bg-gray-300" onClick={()=> updateQuantity(item.id, - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="px-2 py-1 hover:bg-gray-300" onClick={()=> updateQuantity(item.id,  1)}>+</button>
                              </div>
                              <p className="mt-2 text-lg font-bold">${item.price}</p>

                        </div>
                    </div>
                ) )
            }
        </div>
        {/* right side */}
        <div>

        </div>
    
    </section>
  );
}

export default  MyPayment;
