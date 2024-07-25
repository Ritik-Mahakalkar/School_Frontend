import React from 'react'
import "./Nevbar.css"
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
const Nevbar = () => {
  return (
    <div className='nevbar'>
     <Link to='/'><img src={assets.logo} alt="" /></Link> 
      <ul className="nevbar-menu">
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/gallary' >Gallary</Link>
        <Link to='/contact' >Contact</Link>
        


      </ul>
      <div className="navebar-right">
        <Link to='/admission'>Admission</Link>
        
        <div className="navbar-profile">
        <button>Facilities</button>
          <ul className="nav-profile-dropdown">
            <Link to='/acadamics'><li><p className='para'>Acadamics</p></li></Link>
            <Link to='/faculty'><li ><p className='para'>Faculty</p></li></Link>
            <Link to='/student'><li ><p className='para'>Student</p></li></Link>
           <Link to='/about'> <li ><p className='para'>About</p></li></Link>
            <Link to='/contact'><li ><p className='para'>Contact</p></li></Link>
            
          </ul>
        </div>


      </div>
      
    </div>
  )
}

export default Nevbar

