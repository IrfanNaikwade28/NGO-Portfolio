export const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between border-b border-[#00000040] px-20 mt-1">
        <div className="flex gap-x-20 items-center mt-1 py-1">
          <div className="logo color-gradient font-bold text-5xl bebas-neue-regular">LOGO</div>
          <div className="nav-items flex gap-x-10 font-tiro text-xs font-normal">
            <div className="nav-item cursor-pointer">नागनाथ तीर्थक्षेत्र</div>
            <div className="nav-item cursor-pointer">उत्सव</div>
            <div className="nav-item cursor-pointer">संस्था मंडळे</div>
            <div className="nav-item cursor-pointer">शेती विकास</div>
            <div className="nav-item cursor-pointer">परदेशी नागरिक भेटी</div>
            <div className="nav-item cursor-pointer">बातम्या</div>
          </div>
        </div>
      </div>
    </>
  );
};
