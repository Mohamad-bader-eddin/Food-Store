import React from 'react'
import Chefs from '../Container/Chefs/Chefs'
import Contact from '../Container/Contact/Contact'
import Events from '../Container/Events/Events'
import Gallery from '../Container/Gallery/Gallery'
import Landing from '../Container/Landing/Landing'
import Service from '../Container/Service/Service'

const Home = () => {
  return (
    <>
        <Landing />
        <Gallery />
        <Service />
        <Chefs />
        <Events />
        <Contact />
    </>
  )
}

export default Home