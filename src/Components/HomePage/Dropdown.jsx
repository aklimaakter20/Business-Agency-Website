import React from 'react'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@heroui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
function ProfileDropdown() {
  return (
    <div>
      <Dropdown>
              <DropdownTrigger>
                <Button variant="none"><FaRegUser className="text-gray-500 h-4 w-4"/>Account<FaChevronDown className="text-blue-500 w-4 h-4"/></Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}

export default ProfileDropdown
