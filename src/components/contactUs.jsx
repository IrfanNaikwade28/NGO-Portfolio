import cwuAnimation from "../assets/icons/cwu.svg";
export const ContactUs = () => {
  return (
    <>
      <div className="ContactUs flex justify-center w-full mt-20">
        <div className="cwu w-3/4 h-full flex ">
          <div className="illustration w-1/2">
            <div className="font-outfit text-5xl font-bold text-[#21040A]">
              Connect with Us
            </div>
            <img className="w-2/3" src={cwuAnimation} alt="" />
          </div>
          <div className="form w-1/2 flex">
            <div className="w-full flex flex-col gap-y-5">
              <div className="input-name w-full">
                <input
                  className="border-4 border-[#E3265A] rounded-full w-4/5 pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="input-phone-number w-full">
                <input
                  className="border-4 border-[#E3265A] rounded-full w-4/5 pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="input-phone-number w-full">
                <textarea
                  rows={6}
                  className="border-4 border-[#E3265A] rounded-3xl w-4/5 pl-4 py-3 bg-transparent font-semibold text-[#E3265A] font-outfit text-xl placeholder:text-[#E3265A]/60 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Message"
                />
              </div>
              <div className="button bg-[#E3265A] rounded-full w-[15vw] h-10 py-2 flex items-center justify-center gap-x-1 text-white font-outfit uppercase font-bold tracking-widest">
                Send It Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
