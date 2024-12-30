import templeImage from "../assets/image/templeImage.png";
export const VideoSect = () =>{
    return(
        <>
            <div className="w-full flex justify-center py-5 relative">
                <div className="w-3/4 relative">
                    <div className="sub-text absolute amita-bold text-xl top-10 left-10">
                        <div className="text1 text-white">
                        भक्तीचा आणि शिल्पकलेचा अद्भुत संगम,
                        </div>
                        <div className="text2 text-white">
                        ज्योतिर्लिंगाचे एक पवित्र स्थळ...
                        </div>
                    </div>
                    <div className="absolute amita-bold text-7xl top-1/2 left-1/3 text-white">
                    नागनाथ मंदिर
                    </div>
                    <img className="w-full" src={templeImage} alt="" />
                </div>
            </div>
        </>
    )
}