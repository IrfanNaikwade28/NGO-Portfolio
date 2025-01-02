import { useState } from "react";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import logo from "../assets/image/logo.png";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navbar bg-[#fdf3f6] flex justify-between border-b border-[#00000040] px-5 mt-1">
        <div className="flex justify-between w-full gap-x-20 items-center mt-1 py-1">
          <div className="logo">
            <img className="w-[14rem] max-md:w-[10rem]" src={logo} alt="" />
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className="menu-icon hidden max-md:block"
          >{
            toggle?
            <img src={closeIcon} alt="" />:
            <img src={menuIcon} alt="" />
            }
          </div>
          <div className="nav-items flex gap-x-10 font-tiro text-sm font-normal max-md:hidden">
            <div className="nav-item cursor-pointer">नागनाथ तीर्थक्षेत्र</div>
            <div className="nav-item cursor-pointer">उत्सव</div>
            <div className="nav-item cursor-pointer">संस्था मंडळे</div>
            <div className="nav-item cursor-pointer">शेती विकास</div>
            <div className="nav-item cursor-pointer">परदेशी नागरिक भेटी</div>
            <div className="nav-item cursor-pointer">बातम्या</div>
          </div>
        </div>
      </div>
      <div
        className={`toggle-nav ${toggle ? "flex" : "hidden"} flex-col justify-between bg-[#fdf3f6] w-full h-60 absolute top-20 left-0 z-50 px-5`}>
        <div className="flex flex-col gap-x-10 font-tiro text-smText text-lg items-start justify-center gap-y-3 font-normal">
          <div className="nav-item cursor-pointer">नागनाथ तीर्थक्षेत्र</div>
          <div className="nav-item cursor-pointer">उत्सव</div>
          <div className="nav-item cursor-pointer">संस्था मंडळे</div>
          <div className="nav-item cursor-pointer">शेती विकास</div>
          <div className="nav-item cursor-pointer">परदेशी नागरिक भेटी</div>
          <div className="nav-item cursor-pointer">बातम्या</div>
        </div>
        <div className="bg-[#E3265A] w-72 h-1 self-center rounded-2xl"></div>
      </div>
    </>
  );
};
