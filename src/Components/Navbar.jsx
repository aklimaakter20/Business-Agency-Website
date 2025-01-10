import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  NavbarMenu,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";
import ShopCart from '../assets/shopcart.png'
// import User from '../assets/User.png'


function MyNavbar() {
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
    <section>
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
            <img className="w-44" src={Logo} alt="" />
          </NavbarBrand>
          <NavbarItem>
            <Link className="text-black">Eat & Drink</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="foreground">
              Club <sup className="bg-blue-600 text-[8px]">+Hot</sup>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">Things to Do<ChevronDownIcon className="text-blue-500 w-4 h-4"/></Button>
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
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none"><UserIcon className="text-gray-500 h-4 w-4"/>Account<ChevronDownIcon className="text-blue-500 w-4 h-4"/></Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
