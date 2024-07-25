import React from 'react'
import "./Faculty.css"
import {assets,teacher} from '../../assets/assets'

const Faculty = () => {
  return (
    <div className='teacher'>
      <h3>FACULTY</h3>
        <div>
        <div className="type-container">
        {teacher.map((item,i)=>{
            return(
                <div className="part">
                <div className="part-image">
                    <img src={item.image} alt="" />
                </div>
                <p><b>{item.name}</b><br/>
                {`( ${item.qualification} )`}<br/>
                {item.type}<br/>
                {item.description}</p>
                
                

            </div>
            )})}
            
        </div>
      
        </div>
      </div>
  )
}

export default Faculty
