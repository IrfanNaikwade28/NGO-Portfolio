import { Navbar } from "./components/navbar";
import { HeroSect } from "./components/heroSect";
import { OurMission } from "./components/ourMission";
import { VideoSect } from "./components/VideoSect";
import { ContactUs } from "./components/contactUs";
function App() {
  return (
    <>
        <Navbar/>
        <HeroSect/>
        <OurMission/>
        <VideoSect/>
        <ContactUs/>
    </>
  )
}

export default App
