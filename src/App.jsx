
import './App.css'
import Carousel from './Components/Carousel'
import ChillsBay from './Components/ChillsBay'
import Footer from './Components/Footer'
import Galary from './Components/Galary'
import HeroArea from './Components/HeroArea'
import ImgCardSection from './Components/ImgCardSection'
import Navbar from './Components/Navbar'
import ThingsToDo from './Components/ThingsCard'

function App() {

  return (
    <>
  <Navbar/>
  <HeroArea/>
  <ImgCardSection/>
  <ThingsToDo/>
  <ChillsBay/>
  <Carousel/>
  <Galary/>
  <Footer/>
    </>
  )
}

export default App
