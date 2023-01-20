import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './Header/Header'
import MiddleCenter from './MiddlePart/MidCenter/MiddleCenter'
import MiddleOne from './MiddlePart/MiddleOne'
import MiddleLower from './MiddlePart/MidLower/MiddleLower'

const Homepage = (props) => {
  return (
    <div>
        <Navbar username={props.name}/>
        <Header/>
        <MiddleOne/>
        <MiddleCenter/>
        <MiddleLower/>
    </div>
  )
}

export default Homepage