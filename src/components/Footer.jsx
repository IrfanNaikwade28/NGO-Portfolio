import fb from "../assets/icons/facebook.svg"
import tw from "../assets/icons/twitter.svg"
import insta from "../assets/icons/instagram.svg"
import yt from "../assets/icons/YT.svg"
import logo from "../assets/image/logo.png";
export const Footer = () =>{
    return(
        <>
            <div className="flex max-md:flex-col justify-between mt-10 px-5 h-28 max-md:h-48 items-center border-2 border-t-[#E3265A]">
                <div className="logo color-gradient font-bold text-5xl bebas-neue-regular max-md:mt-5">
                    <img src={logo} className="w-[14rem]" alt="" />
                </div>
                <div className="footer-options flex flex-col gap-y-3 items-center text-xs text-smText font-outfit">
                    <div className="options flex gap-5 max-md:hidden">
                        <div className="option">Annual Report</div>
                        <div className="option">Press & Awards</div>
                        <div className="option">Privacy & Policy</div>
                        <div className="option">Events</div>
                        <div className="option">CSR Policy</div>
                    </div>
                    <div className="rights text-smText font-outfit ">
                    Sandesh - Copyright © 2024. All rights reserved.
                    </div>
                </div>
                <div className="social-icons flex gap-x-3">
                    <div className="icon w-10">
                        <img src={yt} alt="" />
                    </div>
                    <div className="icon w-10">
                        <img src={fb} alt="" />
                    </div>
                    <div className="icon w-10">
                        <img src={insta} alt="" />
                    </div>
                    <div className="icon w-10">
                        <img src={tw} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}