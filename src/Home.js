import { height } from '@mui/system'
import React from 'react'

import HeroSection from './Component/HeroSection'
import Trusted from './Component/Trusted'
import Services1 from './Component/Services1'





const Home = () => {
  const data = {
    name : 'Thapa Store'
  }
  return(<>
  <HeroSection myData={data}/> 
    <Services1/>
    <Trusted/>
   
  </>
    
  )
}





export default Home;