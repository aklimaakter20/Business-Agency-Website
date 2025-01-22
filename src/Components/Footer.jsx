import React from 'react'
import Logo from '/logo.png'
import { Button } from "@heroui/button"

    const footerData = {
        socialIcons: [
            "facebook.png",
            "Instagram.png",
            "youtube.png",
            "Twitter.png",
            "linkedin.png"
        ],
        sections: [
            {
                title: "Menu",
                menus: [
                    { items: ["Home", "Eat", "Drink", "Events", "Club"], },
                    { items: ["Blog", "Careers", "Contact", "FAQ"], },
                ]
            },
            {
                title: "Utility Pages",
                menus: [
                    { items: ["Start Here", "Pay with Crypto", "Style Guide", "Password Protected", "404 Not Found","Licenses", "Changelog"], },
                ]
            },

        ],
        PartnerSection: {
            image : " partner.png",
            title: "Become a Partner",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere."
        },
        logo: "logo.png",
        copyright: `@ ${new Date().getFullYear()} All rights reserved.`
    }
    const MenuSection = ({title, menus}) => {
        return(
            <div>
                <p className='font-semibold text-2xl border-b-1 mb-5 py-3'>{title}</p>
                <div className='flex gap-12 text-xl'>
                    {menus.map((menu,index)=>(
                        <ul key={index}>
                           {menu.items.map((item,idx)=>(
                            <li key={idx} className='mb-4'>{item}</li>
                           ))

                           }
                        </ul>
                    ))}
                </div>
            </div>
        )
    }

function Footer() {
    const {socialIcons, sections,PartnerSection,logo,copyright} = footerData;
  return (
    <footer className='p-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2'>
         
                {/* left-side */}
                <div className='col-span-1'>
                    <img className='w-fit' src={Logo} alt="" />
                    <p className='text-sm mb-4'>{copyright}</p>
                    <div className='flex space-x-4'>
                        {socialIcons.map((icon,index)=>(
                            <a href="" key={index}>
                            <img className='w-4 h-4' src={icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
                {/* right-side */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-28 ms-auto col-span-3'>
                        {sections.map((section,index)=>(
                            <MenuSection key={index}
                            title = {section.title}
                            menus= {section.menus} />

                         
                        ))}
                              <div className='w-full bg-[#F5FAFF] p-5'>
                    <img src={PartnerSection.image} alt="" />
                    <h3 className='text-3xl text-[#26395c] font-bold py-2'>{PartnerSection.title}</h3>
                    <p className='text-sm text-gray-400'>{PartnerSection.des}</p>
                    <Button color='primary' className='w-full mt-4' size='xl'>Join Now</Button>
                </div>
                </div>
          
            
        </div>
      
    </footer>
  )
}

export default Footer
