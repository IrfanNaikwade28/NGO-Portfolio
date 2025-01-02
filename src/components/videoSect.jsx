import hero from "../assets/video/hero.mp4";
export const VideoSect = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center md:items-center py-5 relative">
        <div className="bg-[#E3265A] size-52 blur-[50px] absolute right-20 md:top-10 max-md:bottom-10 max-md:right-0"></div>
        <div className="bg-[#EFBA80] size-52 blur-[50px] absolute left-20 bottom-10 max-md:bottom-10 max-md:left-0"></div>
        <div className="w-3/4 max-md:w-5/6 h-fit relative flex flex-col gap-5">
          <div className="sub-text flex flex-col gap-3 max-md:gap-1 md:absolute amita-bold text-xl max-md:text-sm top-10 left-10 z-20">
            <div className="text1 text-white max-md:text-smText">
              भक्तीचा आणि शिल्पकलेचा अद्भुत संगम,
            </div>
            <div className="text2 text-white max-md:text-smText">
              ज्योतिर्लिंगाचे एक पवित्र स्थळ...
            </div>
          </div>
          <div className="md:absolute md:hidden max-md:bg-hero-font-gradient hero-font-gradient amita-bold text-7xl top-1/2 left-1/3 text-white z-20">
            नागनाथ मंदिर
          </div>
          <div className="hidden md:flex absolute amita-bold text-7xl top-1/2 left-1/3 text-white z-20">
            नागनाथ मंदिर
          </div>
          <video className="w-full h-fit rounded-2xl" autoPlay muted loop>
            <source src={hero} type={"video/mp4"} />
          </video>
        </div>
      </div>
    </>
  );
};
