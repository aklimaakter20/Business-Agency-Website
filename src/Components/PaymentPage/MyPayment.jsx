import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import PayModal from "./PayModal";

function MyPayment() {
  const [showPaymentInfo,SetShowPaymentInfo] = useState(false)
   
  const [CartItem, SetCartItem] = useState([
    {
      id: 1,
      img: "/person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022 ",
      location: " Quilox Club",
      time : "11am",
      price: 10000,
      quantity: 1,
    },
    {
      id: 2,
      img: "/person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022 ",
      location: " Quilox Club",
      time : "11am",
      price: 5000,
      quantity: 1,
    }
  ]);
// for quantity increment, decrement, and Price part
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
  // for remove item
    const removeItem = (id)=> {
      SetCartItem(CartItem.filter((item)=> item.id !== id))
    }

const addNewItem = () => {
  const NewItem = {
    id:CartItem.length + 1,
    img: "person1.png",
    title: "The 90s with Dj Neptune",
    date: "Dec 14 2024",
    location : "New Venue",
    time : "12:00 pm",
    price : 100,
    quantity: 1
  }
  SetCartItem([... CartItem, NewItem])
}
  return (
    <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mt-24 container mx-auto">
    
        {/* left side */}
        <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold text-[#969DAA]">Your Cart</h2>
            {
                CartItem.map((item)=>(
                    <div key={item.id} className="flex items-center gap-4 mb-6 p-4 border-b-1 relative">
                        <div className="">
                        <img className="w-32 h-32 rounded-lg " src={item.img} alt="" />

                        </div>
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
                              <p className="mt-2 text-lg font-bold">${item.price.toLocaleString()}</p>

                              {/* remove item button */}
                           <div >
                           <button  onClick={()=> removeItem(item.id)}>
                                <RxCross2 className="absolute top-0 right-0"/>
                              </button>
                           </div>

                        </div>
                    </div>
                ) )
            }
            <button className="bg-primary px-16 py-2 rounded-lg text-white" onClick={addNewItem}>Add New Item</button>
        </div>
        {/* right side */}
        <div className="flex-1 p-6 border-1">
          {/* Account Info */}
            <div className="mb-6 ">
              <div className="flex items-center gap-4">
              <FaCircleCheck className="text-[#0E8BFF]"/>
              <h3 className="text-lg font-semibold mb-2 text-[#26395C]">Account information
              </h3>
            
              </div>
           
            <div className="ms-8">
              <p>Tunde Chukmu</p>
              <p>tundechukwu12@gmail.com</p>
            </div>

            </div>
            {/* phone info */}
            <div className="mb-6 ">
              <div className="flex items-center gap-4">
              <FaCircleCheck className="text-[#0E8BFF]"/>
              <h3 className="text-lg font-semibold mb-2 text-[#26395C]">Phone number
              </h3>
              </div>
           
            <div className="ms-8">
              <p>+2341123465799</p>
            </div>

            </div>
            {/* payment info */}
            <div className="mb-6 ">
              <div className="flex items-center gap-4">
              <FaCircleCheck className="text-[#0E8BFF]"/>
              <div className="flex items-center gap-2 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-[#26395C] ">Payment</h3> 
              
              <span className="text-sm text-[#969DAA]">Card</span>
              
              <IoIosArrowDown onClick={()=> SetShowPaymentInfo(!showPaymentInfo)} className="text-sm text-[#969DAA]" />
            
              </div>
            
              </div>
              {
                showPaymentInfo && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input type="number" placeholder="Card Number" className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="text" placeholder="Card Holder Name" className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="date" placeholder="MM/YY" className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="text" placeholder="CVV" className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />

                  </div>
                )
              }
            </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <ul className="mb-4">
                    {
                    
                    CartItem.map((item)=> (
                      <li key={item.id} className="flex justify-between mb-2">
                        <span>
                          {item.title}{item.quantity}
                        </span>
                        <span>${item.price.toLocaleString()}</span>

                      </li>
                    ))
                    }
                    </ul>
                     {/* Subtotal calculation */}
                    <hr className="my-2"/>
                    <div className="flex justify-between border-t-3 border-gray-300 py-1 px-3">
                      <span>SubTotal : </span>
                      <span> $ {CartItem
                      .reduce((sum,item)=> sum + item.price, 0)
                        .toLocaleString()

                        }
                        </span>
                    </div>
                    {/* Tax calculation */}
                    <div className="flex justify-between mt-4 border-t-3 border-gray-300 py-1 px-3">
                      <span>Tax (5%): </span>
                      <span> $ {(
                        CartItem.reduce((sum, item)=> sum + item.price, 0) * 0.05
                      ).toLocaleString()}</span>
                    </div>

                    {/* Total calculation */}
                    <hr className="my-2"/>
                    <div className="flex justify-between font-bold border-t-3 border-gray-300 py-1 px-3">
                      <span className="mt-2">Total Amount : </span>
                      <span className="mt-2">${(
                        CartItem.reduce((sum,item)=> sum + item.price, 0)* 1.05
                      ).toLocaleString()
                      }</span>
                    </div>
                    <PayModal/>
                </div> 
        </div>
    
    </section>
  );
}

export default  MyPayment;
