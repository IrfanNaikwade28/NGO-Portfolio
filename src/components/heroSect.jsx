import arrowRight from "../assets/icons/right-arrow.png";
import map from "../assets/map.png";
import startBG from "../assets/icons/starBG.png";
export const HeroSect = () => {
  return (
    <>
      <div className="Hero-sect flex max-md:flex-col items-center gap-5 w-full">
        <div className="hero-text w-1/2 max-md:w-full relative">
            <img
              className="absolute -z-10 size-[39vw] left-5 -top-20 max-md:top-0"
              src={startBG}
              alt=""
            />
          <div className="circle size-[45vw] max-md:size-[21rem] circle-shadow rounded-full absolute -left-24 -top-40 max-md:-top-14 max-md:-left-10 -z-10 bg-[#fdf3f6]"></div>
          <div className="text-section text-[#21040A] px-11 z-30 relative top-20 left-10 max-md:-left-5 max-md:top-12">
            <div className="headline tracking-wide text-5xl max-md:text-3xl max-md:gap-x-2 flex gap-x-4">
              <span>एक</span> <span>वैशिष्ट्यपूर्ण</span> <span>गाव</span>
            </div>
            <div className="headline tracking-wide text-5xl flex gap-x-4 max-md:gap-x-2 items-end max-md:text-3xl">
              माझं<span className="text-6xl max-md:text-4xl hero-font-gradient">शेठफळ</span>
              <span className="text-2xl">नागोबाचे...</span>
            </div>
            <div className="desc mt-5 max-md:mt-2 text-sm font-medium font-tiro italic w-2/3 max-md:text-[10px] max-md:leading-4 max-md:w-full">
              नागपूजा, प्राचीन देवस्थाने आणि आधुनिक शेतीतून आर्थिक उन्नती
              साधणारे सोलापूर जिल्ह्यातील करमाळा तालुक्याचे एक वैशिष्ट्यपूर्ण
              गाव...
            </div>
            <button className="bg-[#E3265A] rounded-full w-2/3 max-md:w-[10rem] h-10 max-md:h-8 flex items-center justify-center gap-x-1 max-md:text-sm text-white font-outfit uppercase font-bold tracking-widest mt-10 max-md:mt-5">
              Next <div className="w-[0.1px] h-full bg-white ml-5"></div>
              <img className="ml-2 max-md:w-8" src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="hero-map w-1/2 max-md:w-full flex max-md:block justify-center items-center">
          <img className="w-[50vw] max-md:w-full relative max-md:top-24 top-5 max-md:right-0 right-10 max-md:flex justify-center items-center" src={map} alt="" />
        </div>
      </div>
    </>
  );
};
