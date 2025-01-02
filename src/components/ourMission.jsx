import { MissionCardLeft } from "./missionCardLeft";
import { MissionCardRight } from "./missionCardRight";
import card1 from "../assets/image/card1.png"
import card2 from "../assets/image/card2.png"
import card3 from "../assets/image/card3.png"
import card4 from "../assets/image/card4.png"
export const OurMission = () => {
  return (
    <>
      <div className="flex flex-col items-center my-40 w-full">
        <div className="font-bold uppercase text-3xl">आमचे वेगळेपण</div>
        <div className="subText w-1/2 max-md:w-full max-md:px-5 text-center font-tiro font-medium text-base max-md:text-sm mt-5">
        सोलापूर जिल्ह्यातील करमाळा तालुक्यात तीन हजार लोकसंख्या असणारे नागांचा संभाळ करणारे विविध परंपरा त्याचे जतन संवर्धन करत सन वेगवेगळे सण उत्सव उत्साहात साजरा करणार आधुनिक पद्धतीने शेती करून आर्थिक उन्नती साधणाऱ्या या गावाविषयी.
        </div>
        <div className="button bg-[#E3265A] rounded-full w-[20vw] max-md:w-[10rem] h-10 py-2 flex items-center justify-center gap-x-1 text-white font-outfit uppercase font-bold tracking-widest mt-10 hover:scale-105 cursor-pointer hover:bg-[#E3265A]/80 select-none">
          Let&apos;s See
        </div>
        <div className="flex flex-col w-full items-center gap-y-40 mt-20">
            <MissionCardLeft cardImage={card1} cardText={"हेमाडपंथी पद्धतीने बांधलेले यादवपुर्व काळातील पुरातन शिवमंदिर ( नागनाथ मंदिर) उंच शिखर भव्य दरवाजा दगडी बांधकामातून उभारलेले स्थापत्य कलेचा उत्तम नमुना असलेले प्राचीन मंदिर आत शिवलिंग त्याच्या मागे  पंचधातूची  सुबक अशी मुख्य मुर्ती त्यावर नागफणी शेजारी शेटफळ नाथाचे दुसरे एक मंदिर त्याच्यासमोर आखीव रेखीव अशी बारव शेजारी भव्य असे पुष्करणी तीर्थकुंड (मोठी विहीर)"}/>
            <MissionCardRight cardText={"या गावांमध्ये वर्षभरात वेगवेगळे सण उत्सव मोठ्या उत्साही वातावरणात साजरे केले जातात यामध्ये नागपंचमी भंडारा उत्सव यात्रा शिवजयंती अखंड हरिनाम सप्ताह गणेशोत्सव नवरात्र उत्सव आंबेडकर जयंती इ."} cardImage={card2}/>
            <MissionCardLeft cardImage={card3} cardText={"विज्ञान युगात आगळे वेगळे वैशिष्ट्ये जपणाऱ्या या गावाचे आकर्षण   राज्यातील  देशातीलच  नव्हे तर परदेशातील पर्यटक व अभ्यासकांना असून आजपर्यंत रशिया, मलेशिया, ल्यूथेनिया,  इराण या देशातील अनेकांनी येथे  भेटी दिल्या आहेत"}/>
            <MissionCardRight cardText={"ऐतिहासिक परंपरेत सण उत्सवात रमणाऱ्या या गावाने आपली आर्थिक उन्नती ही साधली आहे आधुनिक तंत्रज्ञानाचा वापर करून केळी ऊस व इतर पिकांचे भरघोस उत्पादन घेऊन त्याचे मार्केटिंग करण्याची किमया गावाने साधली आहे"} cardImage={card4}/>
        </div>
      </div>
    </>
  );
};
