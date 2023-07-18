import React from 'react'
import HeadSlider from './HeadSlider'
import Banner from '../../SharedPages/Banner'
import Secondhead from './Secondhead'
import Bannertwo from './Bannertwo'
import Features from './Features'
import Connected from './Connected'
import Beyond from '../../SharedPages/Beyond'
import Business from './Business'
import Confidence from './Confidence'
// import Writeup from './Writeup'
import '../../Styles/style.css'
import Footer from '../../SharedPages/Footer'
import Writeup from '../../SharedPages/Writeup'
// import Categories from './Categories'

const Home = () => {
  return (
    <div>
      <HeadSlider/>
      <Banner/>
      <Secondhead/>
      <Bannertwo/>
      <Features/>
      {/* <Categories/> */}
      <Connected/>
      <Beyond/>
      <Business/>
      <Confidence/>
      <Writeup/>
      <Footer/>
    </div>
  )
}

export default Home