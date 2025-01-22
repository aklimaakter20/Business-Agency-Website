import React, { useState } from "react";
import { Navbar,NavbarBrand,NavbarContent,NavbarMenuItem,NavbarMenuToggle,NavbarItem,Link,NavbarMenu} from "@heroui/react";
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@heroui/react";
import { FaChevronDown } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import ShopCart from '/shop-cart.png'
import MyModal from "./HomePage/Modal";
import ProfileDropdown from "./HomePage/Dropdown";
import HomePage from "./HomePage";




function MyNavbar() {
  const value = "Hello, Navbar!";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Eat & Drink",
    "Club",
    "Things to do",
    "Shopping",
    "Account",
    "Contact",
  ];
  return (
    <section className="mb-48 py-3">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-level={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>
        <NavbarContent className="sm:hidden pr-3">
          <NavbarBrand>
            <img className="w-44" src={Logo} alt="" />
          </NavbarBrand>
        </NavbarContent>
        {/* Desktop Device */}
        <NavbarContent className="hidden sm:flex gap-4 w-full justify-center">
          <NavbarBrand>
            <NavLink to= '/'><img className="w-44" src={Logo} alt="" /></NavLink>
          </NavbarBrand>
          <NavbarItem>
            <NavLink to='/drink' style={({isActive}) => ({
              color: isActive ? "#0E8BFF" : "black",
            })}>Eat & Drink</NavLink>
          </NavbarItem>
          <NavbarItem>
           <NavLink to='club' style={({isActive})=> ({
            color: isActive ? "#0E8BFF" : "black"
           })}>Club <sup className="bg-blue-400 px-2 text-[8px]">+Hot</sup>
           </NavLink>
       
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">Things to Do<FaChevronDown className="text-blue-500 w-4 h-4"/></Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link className="foreground">
            <img src={ShopCart} alt="" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            
          {value === true ? <MyModal/> : <ProfileDropdown/>}
            
          </NavbarItem>
      
          <NavbarItem>
            <Button color="primary">Contact Now</Button>
          </NavbarItem>
        </NavbarContent>

     <div className="lg:hidden">
     <NavbarContent className="w-full" justify="end">
            <NavbarItem className="hidden lg:flex">   </NavbarItem>
                <NavbarItem>
                    <img src={ShopCart} alt="" />
                </NavbarItem>
         
        </NavbarContent>

        <NavbarMenu className="bg-[#c9def3]">
            {menuitems.map((item, index)=> (
                <NavbarMenuItem key={index}>
                    <Link className="w-full text-black cursor-pointer">{item}</Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
     </div>
      </Navbar>
    </section>
  );
}

export default MyNavbar;
