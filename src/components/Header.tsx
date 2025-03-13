import Nav from "./Nav";
import logo from "./../assets/logo.svg";
import menu from "./../assets/menu-svgrepo-com 1.svg";

import { useState } from "react";
import Language from "./Language";

function Header() {
    const [menubar, setMenubar] = useState(false)
    console.log(menubar, "bosildi")
  return (
    <header className="bg-[#120E18] z-50 p-5 xl:top-[72px] sm:top-8 top-2.5 fixed flex justify-between items-center w-full 2xl:max-w-[1355px] xl:max-w-[1200px] rounded-xl ">
        <img className="sm:w-[144px] w-[120px]" src={logo} alt="" />
        <div className={`${menubar ? "block xl:hidden" : "xl:block hidden"}`}><Nav /></div>
        
        <div className="flex gap-3 items-center">
          <Language />
          <div className="menu flex mr-3 xl:hidden items-center"
          onClick={() => setMenubar(!menubar)}
          >
            <img src={menu} alt="" />
          </div>
        </div>
      </header>
  )
}

export default Header
