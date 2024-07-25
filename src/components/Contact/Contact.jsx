import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <h2>CONTACT US</h2>
            <hr/>
      <div className="contact">
      <div className="left">
        <div className="contact_details">
            
            <h4>Contact Detail</h4>
            <h7 className='detail'>  9834670878</h7><br/>
            <h7 className='detail'>  schooleducation@gmail.com</h7>
            
         </div>
         <br/>
         <div className="address">
          <h4>Address</h4>
          <h7  className='detail'>  Plot no.75 kharbi road, nagpur</h7>
          <h7  className='detail'> Maharastra</h7><br/>


         </div><br/>
         
         
         <div className="organization">
          <h4>organization</h4>
          <h7 className="detail">School international Pvt.Ltd.</h7>
         </div>
      </div>
      
      <div className="right">

                <div className='contact-form'>
                      <div className="contactfild">
                           
                           <div class=" input">
                           
                              <input  placeholder='Name' type="text"  name='name' required/>
                               
                            </div>
                            <div class=" input">
                            
                              <input placeholder='Email'  type="email"  name='name' required/>
                              
                            </div>
                            <div class=" input">
                           
                              <input   type="phone" placeholder='Phone' name='name' required/>
                               
                            </div>
                            <div class=" input">
                            
                            <textarea type='text' placeholder='message' name="message" rows="4" cols="40"></textarea>
                              
                            </div>
                           <button className="btn">Submit</button>
                      </div>
        
                  </div>
        
      </div>
        
      </div>
      
      
    </div>
    
  )
}

export default Contact
