import React from 'react'
import './Gallary.css'
import {assets,Gallary_list} from '../../assets/assets'
const Gallary = () => {
  return (
    <div className='table'>
      <h2>Gallary</h2>
      
      {Gallary_list.map((item,index)=>{
                return(
                  <div class="responsive">
                        <div class="gallery">
                              <a target="_blank" href={item.Gallary_image}>
                                   <img src={item.Gallary_image} alt="Cinque Terre" width="600" height="400"/>
                              </a>
                              <div class="desc">{item.image_name}</div>
                        </div>
                 </div>
                )})}



      
    </div>
  )
}

export default Gallary
