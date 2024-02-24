import Eye from "./components/Eye";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import About from "./components/about";
import BottomPage from "./components/bottomPage";
import Feature from "./components/feature";
import Footer from "./components/footer";
import ItemCard from "./components/itemCard";
import Screen from "./components/screen";
// import {LocomotiveScroll} from 'locomotive-scroll';  // ignore the error becuse this is reponsed by the library


// Vendors
// import 'node_modules/locomotive-scroll/dist/locomotive-scroll';



export default function App() {

  return (
    // use the min-h-screen for the colo on the screen page when the rounded the individual
    <div className=" text-white  w-full bg-gray-100 min-h-screen" 
         >
      <Navigation />
      <LandingPage /> {/* here start the page after the navigation page*/}
      <Screen />   {/* here the green page section  */}
     
      <About />
      <div className="">

      <Eye />
      </div>
      <Feature />
      <ItemCard />
      <div className="py-10">

        <BottomPage />
      </div>
      <Footer />
    </div>
  )
}