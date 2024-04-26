import React from 'react'

function Pickup({hide}) {
  return (
    <div className='blur-container'>
        <div className="card">
           <div className="card-top">
           <h1 className="card-heading">Pickup Order</h1>
           <button className='close' onClick={hide}>&times;</button>

           </div>
            <hr />

            <img src="https://th.bing.com/th/id/OIP.3cDMpKO7weo4Dq6e4JZWlgHaG-?rs=1&pid=ImgDetMain" alt="" />

            <p className="subheading">You have to collect the order from the Burger Club, Select Outlet, Select City </p>
            <p className="error">Delivery partners not Assaigned for Pickup orderes</p>
            <div className="btns">
                <button className="outline-btn">get delivery instead</button>
                <button className="solid-btn" >yes, i will pickup</button>
            </div>
        </div>
    </div>
  )
}

export default Pickup