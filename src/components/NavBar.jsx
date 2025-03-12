import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router";
import Image from "./Image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <Link to="/" className="flex items-center gap-4 text-xl font-bold">
        <Image
          src="/swit-small.webp"
          alt="Swit Logo"
          w={32}
          h={32}
          className={"rounded-full"}
        />
        <span>Bites of NYC</span>
      </Link>
      {/*Mobile Menu*/}
      <div className="visible md:hidden ">
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? <IoCloseCircle /> : <GiHamburgerMenu />}
        </div>
        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out bg-purple-200 ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About · Contact</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-purple-400 text-white">
                Log In ✐
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/*Desktop Menu*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/about">About · Contact</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-purple-400 text-white">
              Log In ✐
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
