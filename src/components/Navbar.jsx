import React from "react";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className=" py-4 border-b">
        {/* nav container */}
        <div className="flex items-center gap-2 w-full justify-between center">
          <div>
            <h1 className="text-2xl font-medium">QuickBuy</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/auth/register"}>Sign Up</NavLink>
          </div>

          {/* navbar search and card icons */}
          <div className="flex gap-4 items-center">
            <form>
              <div className="flex items-center bg-gray-50 gap-6 px-2">
                <input
                  className=" outline-none text-sm py-1"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <CiSearch size={15} />
              </div>
            </form>

            <div>
              <CiHeart className="cursor-pointer" size={25} />
            </div>
            <div>
              <IoCartOutline className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
