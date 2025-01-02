import cwuAnimation from "../assets/icons/cwu.svg";
export const ContactUs = () => {
  return (
    <>
      <div className="ContactUs flex justify-center items-center w-full mt-20">
        <div className="cwu w-3/4 max-md:w-full h-full flex items-center max-md:flex-col gap-10">
          <div className="illustration w-1/2 max-md:w-full">
            <div className="font-outfit text-5xl max-md:text-3xl max-md:text-center font-bold text-[#21040A]">
            आमच्याशी कनेक्ट व्हा...
            </div>
            <img className="w-2/3 max-md:hidden" src={cwuAnimation} alt="" />
          </div>
          <div className="form w-1/2 max-md:w-full flex">
            <div className="w-full flex flex-col gap-y-5">
              <div className="input-name w-full max-md:flex justify-center">
                <input
                  className="border-4 border-[#E3265A] rounded-full w-4/5 max-md:w-[90%] pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="input-phone-number w-full max-md:flex justify-center">
                <input
                  className="border-4 border-[#E3265A] rounded-full w-4/5 max-md:w-[90%] pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="input-phone-number w-full max-md:flex justify-center">
                <textarea
                  rows={6}
                  className="border-4 border-[#E3265A] rounded-3xl w-4/5 max-md:w-[90%] pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Message"
                />
              </div>
              <div className="button bg-[#E3265A] hover:bg-[#E3265A]/80 cursor-pointer rounded-full w-[15vw] max-md:w-[10rem] max-md:ml-5 h-10 py-2 flex items-center justify-center gap-x-1 text-white font-outfit uppercase font-bold tracking-widest">
                Send It Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
