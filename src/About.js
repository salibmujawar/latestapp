import React from 'react'
import HeroSection from './Component/HeroSection';

const About = () => {
  const data = {
    name: 'Thapa ECommerce',
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About;