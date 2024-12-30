import PropTypes from "prop-types"
export const MissionCardLeft = ({cardImage,cardText}) =>{
    return(
        <>
            <div className="flex w-[70vw] gap-x-7 items-center">
                <div className="image w-1/2 cursor-pointer overflow-hidden rounded-2xl">
                    <img className="w-full hover:scale-110 rounded-2xl transition-all duration-300" src={cardImage} alt="" />
                </div>
                <div className="line w-1 h-60 bg-[#EFBA80]"></div>
                <div className="text-container w-1/2 flex flex-col gap-y-2">
                    <div className="text tracking-widest leading-6 w-[80%] text-sm font-tiro font-medium">
                        {cardText}
                    </div>
                    <div className="button text-[#E3265A] border-2 border-[#E3265A] rounded-full w-32 h-10 py-1 flex items-center justify-center gap-x-1 text-sm font-outfit uppercase font-bold tracking-widest hover:bg-[#E3265A] hover:text-white">
                        See More
                    </div>
                </div>
            </div>
        </>
    )
}
MissionCardLeft.propTypes = {
    cardImage:PropTypes.string,
    cardText:PropTypes.string
}