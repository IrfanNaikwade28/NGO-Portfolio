import { Navbar } from "./components/navbar";
import { HeroSect } from "./components/heroSect";
import { OurMission } from "./components/ourMission";
import { VideoSect } from "./components/videoSect";
import { ContactUs } from "./components/contactUs";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSect />
      <OurMission />
      <VideoSect/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
export default App;
