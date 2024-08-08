import React from 'react' 
import HomePageRightSide from './Right Side/HomePageRightSide'
import HomePageLeftSide from './Left Side/HomePageLeftSide'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className='homePageBaseContainer'>
        <HomePageLeftSide/>
        <HomePageRightSide/>
    </div>
  )
}

export default HomePage