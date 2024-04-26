import React from 'react'
import './Style.css'

function Order() {
  return (
    <div className='Order-Card'>
    <h2>Download The App  For Seamless Experience</h2>
        <div className='Order-img'>
       <img src="https://theburgerclub.in/assets/wla_new/img/google-store-black.png" alt="" />
        <img src="https://theburgerclub.in/assets/wla_new/img/app-store-black.png" alt="" />
        </div>
        <div className='Order-Burger'>
            <h2>The Burger Club Online Ordering </h2>
            <p>Search City or Locality To Start Ordering</p>
        </div>
        <div className='Order-search'>
            <input type="text"  placeholder='Enter City  Or Locality To Start Ordering'/>
            <button className='Locate'>Location</button>
        </div>
        <div className='Location-Data'>
        <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Delhi </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div>
        {/* <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Delhi </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div> */}
        <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Faridabad </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div>
        <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Ghaziabad </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div>
        <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Gurgoan </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div>
        <div className="location-card">
        <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="" />
         <div className='Location-Name'>
         <p><i class="bi bi-geo-alt-fill"></i>Noida </p>
         <small><i class="bi bi-shop-window"></i>19 OutLets</small>
         </div>
            <button>Explore</button>
        </div>
        

        </div>
        <div className='Recent-serch'>
          <h2>Recent Searches</h2>
        </div>
        <div className='Search-input'>
<input type="text" placeholder='Sector 15 Faridabad'/>
<input type="text" placeholder='Ranjith Avenue Amritsar'/>
        </div>
    </div>
  )
}

export default Order