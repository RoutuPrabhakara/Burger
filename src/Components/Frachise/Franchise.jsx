import React from 'react'
import './style.css'
function Franchise() {
  return (
    
    <div className='Franchise-main-heading'>
            <div className='Franchise-images'>
             <img src="https://static.uengage.in/uploads/29124/image-1692001896.jpeg" alt="" />
            </div>
                <div className='Franchise-Card'>
                 <h2>Franchise Enquiry</h2>
                <div className='Franchise-para'>
                 <p>Come And Join As</p>
                 </div>
                 </div>
                 <div className='Franchise-Form'>
             <div className='Franchise-label'>
                <h3>Enter Basic Information </h3>
               <p>Please Fill The Form</p>
             </div>
              </div>
              <div className='Franchise-Submit'>
                <form action="">
                 <div className='Form-1'>
                <h5>Name <sup>*</sup></h5>
                </div>
                <div className='Form-level-1'>
                <input type="text"  size={50} required='required'/>
                </div>
                <div className='Form-2'>
                <h5>City <sup>*</sup></h5>
                </div>
                <div className='Form-level-2'>
                <input type="text"  size={50} required='required'/>
                </div>
                <div className='Form-3'>
                <h5>Phone Number <sup>*</sup></h5>
                </div>
                <div className='Form-level-3'>
                <input type="text"  size={50}  required='required'/>
                </div>
                <div className='Form-4'>
                <h5>Email Id <sup>*</sup></h5>
                </div>
                <div className='Form-level-4'>
                <input type="email"  size={50} required='required'/>
                </div>
                <div className='Form-5'>
                <h5>Message <sup>*</sup></h5>
                </div>
              <div className='Form-level-5'>
                <input type="text"  size={50} required='required'/><br />
                </div>
              
                <div className='Submit-Details'>
               <button className='Button-Detials'>Submit Details</button>
                </div>
               
                </form>

             </div>
                 
                 
    </div>
  )
}

export default Franchise