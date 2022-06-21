import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="parentbox">
      <div id="mainbox">
        <button>Admin</button>
        
        <button>Participant</button>
        
      </div>
    </div>
  )
}

export default Home;