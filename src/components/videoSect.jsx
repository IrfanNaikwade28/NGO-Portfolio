import templeImage from "../assets/image/templeImage.png";
import hero from "../assets/video/hero.mp4"
export const VideoSect = () =>{
    return(
        <>
            <div className="w-full h-screen flex justify-center items-center py-5 relative">
                <div className="bg-[#E3265A] size-52 blur-[50px] absolute right-20 top-10"></div>
                <div className="bg-[#EFBA80] size-52 blur-[50px] absolute left-20 bottom-10"></div>
                <div className="w-3/4 h-fit relative">
                    <div className="sub-text flex flex-col gap-3 absolute amita-bold text-xl top-10 left-10 z-20">
                        <div className="text1 text-white">
                        भक्तीचा आणि शिल्पकलेचा अद्भुत संगम,
                        </div>
                        <div className="text2 text-white">
                        ज्योतिर्लिंगाचे एक पवित्र स्थळ...
                        </div>
                    </div>
                    <div className="absolute amita-bold text-7xl top-1/2 left-1/3 text-white z-20">
                    नागनाथ मंदिर
                    </div>
                        <div className="bg-black/60 absolute z-10 w-full h-full rounded-2xl"></div>
                    <video className="w-full rounded-2xl" autoPlay muted>
                        <source src={hero} type={"video/mp4"}/>
                    </video>
                </div>
            </div>
        </>
    )
}