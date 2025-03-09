import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

export default function NavBar() {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <div className="flex items-center gap-4 text-xl font-bold">
        <img src="/public/swit-small.webp" className="w-10 h-10 rounded-full" alt="Swit" />
        <span>Swit</span>
      </div>
      {/*Mobile Menu*/}
      <div className="visible md:hidden">
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
            {open ? <IoCloseCircle /> : <GiHamburgerMenu />}
        </div>
      </div>
      {/*Desktop Menu*/}
      <div className="hidden md:flex">D</div>
    </div>
  );
}
