import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <div className="flex items-center gap-4 text-xl font-bold">
        <img
          src="https://ik.imagekit.io/WBswitCG/swit-small.webp"
          className="w-10 h-10 rounded-full"
          alt="Swit"
        />
        <span>Swit</span>
      </div>
      {/*Mobile Menu*/}
      <div className="visible md:hidden">
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? <IoCloseCircle /> : <GiHamburgerMenu />}
        </div>
        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Populat</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-2 px-4 rounded-3xl bg-purple-400 text-white">
              Log In ✐
            </button>
          </a>
        </div>
      </div>
      {/*Desktop Menu*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Populat</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl bg-purple-400 text-white">
            Log In ✐
          </button>
        </a>
      </div>
    </div>
  );
}
