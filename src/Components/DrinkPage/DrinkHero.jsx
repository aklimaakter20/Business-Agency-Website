import React from "react";
import { Button } from "@heroui/react";

function DrinkHero() {
  return (
    
    <section className='bg-[url("./Dhero.png")] -mt-48 w-full h-[80vh] bg-no-repeat bg-top md:bg-cover overflow-hidden mx-auto'>
     <div className="flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-5 pt-6 w-[80%] mx-auto">
     <div className="bg-[#FBFCFF] container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold pb-3.5 lg:pb-6 text-[#26395C]">Our top pick for the week!</h1>
        <h4 className="text-xl lg:text-3xl mb-2 font-bold text-[#26395C]">Nok by Alara</h4>
        <p className="text-lg w-[80%] pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
      
        <div className="flex justify-end items-center">
        <Button color="primary">Reserve Now</Button>

        </div>
      </div>
     </div>
    </section>
  );
}

export default DrinkHero;
