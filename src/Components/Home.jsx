import React, { useState } from 'react'
import Pickup from '../popup/Pickup'

function Home() {
    const [show, setShow] = useState(false)
  
  const showPop =() =>{
    setShow(true)
  }

  const hidePop =() =>{
      setShow(false)
  }
  return (
    <div>
           <div className="bg">
      <div className="inside">
      <div id="Card">
    <h4>Delivery</h4>
    <h4 onClick={showPop}>Picup</h4>
    </div>
    <div id="Card-bottom">
    <h1>The Berger club online Delivery</h1>
    <h2>Fresh Wholesome , Gourment Burgers Full Of Flavers </h2>
      </div>
    <div className="bottom">
      <button className='main-btn'>Use my current location</button>
      <span>or</span>
      <div className="selector">
      <select name="Select city" id="">
    <option value="/">Select City</option>
      <option value="/">Amritsar</option>
      <option value="/">Delhi</option>
      <option value="/">Faridabad</option>
      <option value="/">Ghaziabab</option>
      <option value="/">Gurgan</option>
      <option value="/">Noida</option>
    </select>
    <select name="Select Outlet" id="">
      <option value="">Select Outlet</option>
    </select>
      </div>
    </div>
      </div>
    </div> 
    <div id="About">
      <h1>About</h1>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum magni natus nobis adipisci, voluptas quidem quo cum maiores dolore eos! Minus magnam ab autem placeat laborum nihil tempore? Voluptatem!
      </p>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum magni natus nobis adipisci, voluptas quidem quo cum maiores dolore eos! Minus magnam ab autem placeat laborum nihil tempore? Voluptatem!
      </p>

      <div className="about-btn">
        <a href='/readmore' >Read more</a>
      </div>
</div>
<div className='Customer-Favourite'>
<div className='Customer-Name'>
  <h1>Our Customer's  favourite</h1>
</div>
<div className='Customers-images'>
  <div className='images-folder'>
  <img src="https://static.uengage.in/uploads/29124/image-953946-1696421547.png" alt="" />
  <h5>BYOB(Build Your Own Burger)</h5>
  </div>
  <div className='images-folder-1'>
  <img src="https://static.uengage.in/uploads/29124/image-181123-1693205773.png" alt="" />
  <h5>Luanch Offer 99</h5>
  </div>
  <div className='images-folder-2'>
  <img src="https://static.uengage.in/uploads/29124/image-953453-1692188741.png" alt="" />
  <h5>New In The club</h5>
  </div>
  <div className='images-folder-3'>
  <img src="https://static.uengage.in/uploads/29124/image-211591-1692188741.png" alt="" />
  <h5>Must Tray</h5>
  </div>
  <div className='images-folder-4'>
  <img src="https://static.uengage.in/uploads/29124/image-949752-1692188741.png" alt="" />
  <h5>Burgers</h5>
  </div>
  <div className='images-folder-5'>
  <img src="https://static.uengage.in/uploads/29124/image-949752-1692188741.png" alt="" />
  <h5>Burgers</h5>
  </div>
 <div className='images-folder-6'>
 <img src="https://static.uengage.in/uploads/29124/image-161883-1692188741.png" alt="" />
  <h5>Wraps</h5>
 </div>
 <div className='images-folder-7'>
 <img src="https://static.uengage.in/uploads/29124/image-161883-1692188741.png" alt="" />
  <h5>Wraps</h5>
 </div>
 <div className='images-folder-8'>
 <img src="https://static.uengage.in/uploads/29124/image-794572-1692188741.png" alt="" />
  <h5>Salad</h5>
 </div>
 <div className='images-folder-9'>
 <img src="https://static.uengage.in/uploads/29124/image-794572-1692188741.png" alt="" />
  <h5>Salad</h5>
 </div>
  <div className='images-folder-10'>
  <img src="https://static.uengage.in/uploads/29124/image-521746-1692188741.png" alt="" />
  <h5>Sides</h5>
  </div>
 <div className='images-folder-11'>
 <img src="https://static.uengage.in/uploads/29124/image-895836-1692188741.png" alt="" />
  <h5>Club Cafe</h5>
 </div>
 <div className='images-folder-12'>
 <img src="https://static.uengage.in/uploads/29124/image-917417-1692188741.png" alt="" />
  <h5>Fries</h5>
 </div>
 <div className='images-folder-13'>
 <img src="https://static.uengage.in/uploads/29124/image-331369-1692188741.png" alt="" />
  <h5>Dessert And Bevarages</h5>
 </div>
  <div className='images-folder-14'>
  <img src="https://static.uengage.in/uploads/29124/image-881873-1692188741.png" alt="" />
  <h5>Kids Meal</h5>
  </div>
 <div className='images-folder-15'>
 <img src="https://static.uengage.in/uploads/29124/image-827297-1692188741.png" alt="" />
  <h5>Dipping Sauce</h5>
 </div>
  <div className='images-folder-16'>
  <img src="https://static.uengage.in/uploads/29124/image-686389-1692188741.png" alt="" />
  <h5>Extra</h5>
  </div>
 <div className='images-folder-17'>
 <img src="https://static.uengage.in/uploads/29124/image-272875-1692188741.png" alt="" />
  <h5>Make A Cambo</h5>
 </div>
 </div>
</div>
<div className='image'>
  <img src="https://theburgerclub.uengage.in/assets/wla_new/img/full-banner-web.png" alt="" />
</div>
<div className='Club-App'>
  <div className='Club-left'>
    <h2>Get The the Berger Club App</h2>
    <h4>Download App From </h4>
    <div className='Club-Image'>
    <img src="https://theburgerclub.in/assets/wla_new/img/play-store.png" alt="" />
    <img src="https://theburgerclub.in/assets/wla_new/img/ios-app.png" alt="" />
    </div>
   
</div>
<div className='Club-right'>

</div>

</div>


{
      show == true ? (
        <Pickup hide={hidePop}/>
      ):(null)
    }
    </div>
  )
}

export default Home