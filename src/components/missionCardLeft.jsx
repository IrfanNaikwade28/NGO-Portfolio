import PropTypes from "prop-types";
export const MissionCardLeft = ({ cardImage, cardText }) => {
  return (
    <>
      <div className="flex max-md:flex-col w-[70vw] max-md:w-[80vw] gap-5 items-center">
        <div className="image w-1/2 max-md:w-full cursor-pointer overflow-hidden rounded-2xl">
          <img
            className="w-full hover:scale-110 rounded-2xl transition-all duration-300"
            src={cardImage}
            alt=""
          />
        </div>
        <div className="line w-1 max-md:w-full h-60 max-md:h-1 bg-[#EFBA80]"></div>
        <div className="text-container w-1/2 max-md:w-full text-justify  flex flex-col gap-y-2">
          <div className="text tracking-wide leading-6 w-[80%] max-md:w-full text-xl max-md:text-sm font-tiro font-medium">
            {cardText}
          </div>
          <button className="button text-[#E3265A] border-2 border-[#E3265A] rounded-full w-32 h-10 py-1 flex items-center justify-center gap-x-1 text-sm font-outfit uppercase font-bold tracking-widest hover:bg-[#E3265A] hover:text-white cursor-pointer">
            अधिक पहा
          </button>
        </div>
      </div>
    </>
  );
};
MissionCardLeft.propTypes = {
  cardImage: PropTypes.string,
  cardText: PropTypes.string,
};
