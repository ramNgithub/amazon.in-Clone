import React from 'react'
import Sidebar from '../../componentsAdmin/sidebar/Sidebar';
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
        {/* <h1 className='title'>रV</h1> */}
        <Sidebar/>
        <div className='homeContainer'>container</div>
    </div>
  )
}

export default Home