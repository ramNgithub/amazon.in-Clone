import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './Header/Header'

const Homepage = (props) => {
  return (
    <div>
        <Navbar username={props.name}/>
        <Header/>
    </div>
  )
}

export default Homepage