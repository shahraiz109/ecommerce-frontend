import React from 'react'
import Header from "../components/Layout/Header.jsx"
import Hero from "../components/Route/Hero/hero.jsx"
import Categories from "../components/Route/Categories/Categories.jsx"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
import FeatureProducts from "../components/Route/FeatureProducts/FeatureProducts.jsx"
import Events from "../components/Events/Events.jsx"
import Sponsored from "../components/Route/Sponsored/Sponsored.jsx"
import Footer from "../components/Layout/Footer.jsx"

const  HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeatureProducts/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default  HomePage
