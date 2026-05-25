import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Featured from "./components/Featured"
import MenuPreview from "./components/MenuPreview"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Location from "./components/Location"

function App() {

  return (

    <div className="bg-black text-white overflow-x-hidden">

      {/* Components */}
      <Navbar />
      <Hero />
      <Featured />
      <MenuPreview />
      <Gallery />
      <Contact />
      <Location />
      <Footer />

    </div>

  )

}

export default App