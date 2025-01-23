import React,{ useState, useEffect} from 'react'
import { Button } from "@heroui/react";

function RestaurantsCard({title}) {
    const [data, setData ] = useState([]);

    useEffect(()=> {
        fetch("./data.json")
        .then ((response)=> {
            return response.json()

        })
        .then((jsonData)=> {
            setData(jsonData)
        })
    },[])

  return (
    <section className='bg-[#F5FAFF] p-10'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl md:text-4xl mb-4 mt-4 text-[#26395C]'>{title}</h2>
                <Button variant='outline' className='text-[#0E8BFF] text-xl'>See More</Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {
                    data.map((myData)=>(
                        <div key={myData.id}>
                            <img className='w-[400px] object-cover rounded-lg mb-4' src={myData.img} alt="" />
                                <h2 className='font-bold text-xl md:text-2xl mb-2 text-[#26395C]'>{myData.title}</h2>
                                <p className='text-sm text-[#26395C] mb-1'>{myData.des}</p>
                                <p className='text-sm text-[#26395C]'>{myData.tag}</p>
                                <Button className='mt-3 w-[150px] text-sm md:text-md' color='primary'>Reserve Now</Button>
                        </div>
                    ))
                }


            </div>
        </div>
    </section>
  )
}

export default RestaurantsCard
