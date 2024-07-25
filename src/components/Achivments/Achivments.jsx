import React from 'react'
import './Achivments.css'
import { assets,achivements } from '../../assets/assets'
const Achivments = () => {
  return (
    <div className='achivements' id='achivement'>
        <h3>Achivments</h3>
        {achivements.map((item,index)=>{
                return(
                    <div className="achivment-container">
        <div className="left">
          <div className="achivment-image">
          <img src={item.image} alt="" />
          </div>
          <p>{item.date} at {item.place} </p>
          
          
          

        </div>
        <div className="right">
            
              <p><span>{item.program}</span><hr/>{item.description} </p>

          
        </div>
      </div>

                )})}
        
      
    </div>
  )
}

export default Achivments
