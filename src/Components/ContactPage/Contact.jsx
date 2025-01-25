import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Input } from "@heroui/react";
import {Select, SelectItem} from "@heroui/react";
import {Textarea} from "@heroui/react";
import {Button} from "@heroui/react";

function Contact() {
  const Items = [
    {
      img: "Influencer.png",
      heading : "Become an Influencer",
      description: "Join a company that’s passionate about design and technology",
      website: "chills@chillsbay.com"
    },
    {
      img: "Help.png",
      heading : "Need Help?",
      description: "Questions about using  Market? Our support team is here to help.",
      website: "chills@chillsbay.com"
    },
    {
      img: "refund.png",
      heading : "Refunds & Others",
      description: "Join a company that’s passionate about design and technology",
      website: "chills@chillsbay.com"
    },
  ]
  return (
    <section>
      <div className="lg:w-[80%] mx-auto py-16 ">
        <div className="flex flex-col md:flex-row justify-center p-6 md:p-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 text-center lg:text-start">
            <h2 className="text-[#26395C] text-xl md:text-2xl lg:text-4xl font-bold mb-5 text-center md:text-start">
              Contact Us
            </h2>
            <p className="text-[#656B89] text-center md:text-start text-md md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
              quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
              massa sapien facilisi netu.
            </p>
            <div className="mt-5 w-[50%] mx-auto md:w-full md:mx-0 ">
              <p className="flex items-center gap-4 text-[#656B89] font-semibold mb-3">
                <FaPhoneAlt className="text-primary w-5 h-5" />
                <span>(840) 371 - 2514</span>
              </p>
              <p className="flex items-center gap-4 text-[#656B89] font-semibold">
                <MdEmail className="text-primary w-5 h-5" />
                <span>chills@chillsbay.com</span>
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-xl">
            <form className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  labelPlacement="outside"
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  labelPlacement="outside"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="aklimaakter20@gmail.com"
                  labelPlacement="outside"
                />
                <Input
                  label="Phone number"
                  type="number"
                  placeholder="Phone Number"
                  labelPlacement="outside"
                />
              </div>
              {/* Course select options */}
              <div className="!mt-10 ">
                <Select
                 
                  label="Subject"
                  placeholder="Select an option"
                  labelPlacement="outside"
                >
                   <SelectItem>Front end Webdevelopment Course</SelectItem>
                   <SelectItem>Full Stack Web Development Course</SelectItem>
                   <SelectItem>UI/UX Design</SelectItem>
                   <SelectItem>Graphic Design</SelectItem>
                   <SelectItem>Digital Marketing</SelectItem>
                   <SelectItem>Data Analysis</SelectItem>
                </Select>
              </div>
              {/* text-area */}
              <div>
              <Textarea isRequired label="Message" placeholder="Enter your description" labelPlacement="outside"/>
              <Button className="mt-5 mb-4 w-full" color="primary">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
            {
              Items.map((item,index)=>(
                <div key={index} className="text-center justify-center items-center">
                  <img className="w-20 h-20 object-cover rounded mb-8 mx-auto" src={item.img} alt="" />
                  <h3 className="text-xl font-bold mb-2 text-[#26395C]">{item.heading}</h3>
                  <p className="text-[#656B89] w-[80%] mb-2 mx-auto text-sm">{item.description}</p>
                  <a className="text-primary hover:underline cursor-pointer text-xs">{item.website}</a>

                </div>
              ))
            }

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
