import React from 'react'
import HeroArea from './HeroArea'
import ImgCardSection from './ImgCardSection'
import ThingsToDo from './ThingsCard'
import ChillsBay from './ChillsBay'
import Carousel from './Carousel'
import GALLERY from './GALLERY'
// import MyModal from './Modal'


function HomePage() {
  return (
    <>
   <HeroArea/>
  <ImgCardSection/>
  <ThingsToDo/>
  <ChillsBay/>
  <Carousel/>
  <GALLERY/>
  {/* <MyModal/> */}
    </>
  )
}

export default HomePage
