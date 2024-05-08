import React, { useState } from 'react'
import './style.css'
function Franchise() {
  const [Name, setName]=useState(null)
  const [City, setCity]=useState(null)
  const [PhoneNumber, setPhoneNumber]=useState(null)
  const [Email, setemail]=useState(null)
  const [Meassge, setMessage]=useState(null)
  const [fomrData, SetformData]=useState({
    Name:'',
    City:"",
    PhoneNumber:"",
    Email:"",
    Message:""
    
  })
  const submitHandler = ()=>{
    SetformData({
      Name:Name,
      City:City,
      PhoneNumber:PhoneNumber,
      Email:Email,
      Message:Meassge
    })
    console.log(fomrData)
  }
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
                <input type="text"  size={50} required='required' value={Name}  onChange={(event)=>setName(event
                  .target.value)}/>
                </div>
                <div className='Form-2'>
                <h5>City <sup>*</sup></h5>
                </div>
                <div className='Form-level-2'>
                <input type="text"  size={50} required='required'  value={City} onChange={(event)=>setCity(event.target.value)}/>
                </div>
                <div className='Form-3'>
                <h5>Phone Number <sup>*</sup></h5>
                </div>
                <div className='Form-level-3'>
                <input type="text"  size={50}  required='required' value={PhoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>
                </div>
                <div className='Form-4'>
                <h5>Email Id <sup>*</sup></h5>
                </div>
                <div className='Form-level-4'>
                <input type="email"  size={50} required='required'  value={Email} onChange={(event)=>setemail(event.target.value)}/>
                </div>
                <div className='Form-5'>
                <h5>Message <sup>*</sup></h5>
                </div>
              <div className='Form-level-5'>
                <input type="text"  size={50} required='required'  value={Meassge} onChange={(event)=>setMessage(event.target.value)}/><br />
                </div>
              
                <div className='Submit-Details'>
               <button className='Button-Detials' type='button' onClick={submitHandler}>Submit Details</button>
                </div>
               
                </form>

             </div>
                 
                 
    </div>
  )
}

export default Franchise