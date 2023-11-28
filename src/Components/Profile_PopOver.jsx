import { useState } from "react";
import { Popover } from "@headlessui/react";

function ProfilePopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover as="div" className="relative inline-block">
      <Popover.Button onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/fingerprint.svg"
          alt="Profile Avatar"
          className="w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-110"
        />
      </Popover.Button>
      <Popover.Panel
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 mt-2 bg-white w-56 rounded-lg shadow-lg border border-gray-300 left-0 right-auto lg:left-auto lg:right-0`}
      >
        <div className="p-4">
          <b>Name :</b> Bhupendra Jogi
        </div>
        <div className="p-4">
          <b>Address : </b>C/16 Bhavani Society, Varachha Road, Surat Gujarat -
          395006
        </div>
        <div className="p-4">
          <b>Mobile No : </b>9898765678
        </div>
        <div className="p-4">
          <b>DOB : </b>05/11/1989
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default ProfilePopover;
