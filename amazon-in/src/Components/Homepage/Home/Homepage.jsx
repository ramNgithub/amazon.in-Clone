import React from 'react'
import Navbar from '../Navbar/Navbar'

const Homepage = (props) => {
  return (
    <div>
        <Navbar username={props.name}/>
    </div>
  )
}

export default Homepage