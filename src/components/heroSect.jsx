import arrowRight from "../assets/icons/right-arrow.png";
import map from "../assets/map.png";
import startBG from "../assets/starBG.png";
export const HeroSect = () => {
  return (
    <>
      <div className="Hero-sect flex items-center gap-x-5 w-full">
        <div className="hero-text w-1/2 relative">
            <img
              className="absolute -z-10 size-[39vw] left-5 -top-20"
              src={startBG}
              alt=""
            />
          <div className="circle size-[45vw] circle-shadow rounded-full absolute -left-24 -top-40 -z-10 bg-[#fdf3f6]"></div>
          <div className="text-section text-[#21040A] px-11 w-2/3 z-30 relative top-20 left-10">
            <div className="headline tracking-wide text-5xl flex gap-x-4">
              <span>एक</span> <span>वैशिष्ट्यपूर्ण</span> <span>गाव</span>
            </div>
            <div className="headline tracking-wide text-5xl flex gap-x-4 items-end">
              माझं<span className="text-6xl hero-font-gradient">शेठफळ</span>
              <span className="text-2xl">नागोबाचे...</span>
            </div>
            <div className="desc mt-5 text-sm font-medium font-tiro italic">
              नागपूजा, प्राचीन देवस्थाने आणि आधुनिक शेतीतून आर्थिक उन्नती
              साधणारे सोलापूर जिल्ह्यातील करमाळा तालुक्याचे एक वैशिष्ट्यपूर्ण
              गाव...
            </div>
            <button className="bg-[#E3265A] rounded-full w-2/3 h-10 py-2 flex items-center justify-center gap-x-1 text-white font-outfit uppercase font-bold tracking-widest mt-10">
              Next <div className="w-[0.1px] h-full bg-white ml-5"></div>
              <img className="ml-2" src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="hero-map w-1/2 flex justify-center items-center">
          <img className="w-[50vw] relative top-5 right-10" src={map} alt="" />
        </div>
      </div>
    </>
  );
};
