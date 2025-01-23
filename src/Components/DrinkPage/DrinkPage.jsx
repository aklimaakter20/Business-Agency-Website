import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlaces from './FindPlaces'
import RestaurantsCard from '../Common/RestaurantsCard'
import DrinkCarousel from './DrinkCarousel'
import Map from './Map'
const DrinkPage = () => {
  return (
  <>
    <DrinkHero/>
    <FindPlaces/>
    <RestaurantsCard title= "Popular Restaurants in Lagos"/>
    <DrinkCarousel/>
    <RestaurantsCard title= "Restaurants nearby"/>
    <Map/>
    </>
  )
}

export default DrinkPage
