import React from 'react'
import './style.css'

function Store() {
  return (
    <div>
       <h1></h1>
       <div className="store">
        <div className="store-left">
            <div className="popular-card">
              <h2>Popular cities</h2>
              <hr />
              <ul>
                <li><i class="bi bi-geo-alt-fill"></i> Amrithsar</li>
                <li><i class="bi bi-geo-alt-fill"></i> Delhi</li>
                <li><i class="bi bi-geo-alt-fill"></i> Faridabad</li>
                <li><i class="bi bi-geo-alt-fill"></i> Ghaziabad</li>
                <li><i class="bi bi-geo-alt-fill"></i> Gurgon</li>
                <li><i class="bi bi-geo-alt-fill"></i> Noida</li>
              </ul>
            </div>
        </div>
        <div className="store-right">
              <div className="item-card">
                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Rajpuri Garden,Delhi </small>
                      <small><i class="bi bi-geo-alt-fill"></i>40 mins Delvery Time</small>
                    </div>
                    <p>Z9 First Floor  Nazafgarkh  Rd Bloock  Rajpuri garden </p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                      <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Sohan Road Gurgon </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Delivery Time</small>
                    </div>
                    <p>Ground Floor Shop Num 32 Haryana</p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                    <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Lakshmi Nagar Delhi </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Delhi</small>
                    </div>
                    <p>E-56 metro piller Vikhas Nagar Delhi</p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                    <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Sector 141 Noida </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Noida</small>
                    </div>
                    <p>E-56 metro piller Vikhas Nagar Noida</p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                    <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Saroji Nagar Delhi </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Delhi</small>
                    </div>
                    <p>E-56 metro piller saroji Nagar Delhi</p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                    <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>Dwraka Nagar Delhi </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Delhi</small>
                    </div>
                    <p>E-56 metro piller Dwaraka Nagar Delhi</p>
                    <div className="item-btns">
                    <a href='/view' className="dark-btn">View Store</a>
                    <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>

                <div className="item-inner">
                  <img src="https://www.uengage.in/images/addo/logos/image-1687608172.jpg" alt="" />
                  <div>
                    <h2>The Burger Club</h2>
                    <div className="location">
                      <small><i class="bi bi-geo-alt-fill"></i>GTB Nagar Delhi </small>
                      <small><i class="bi bi-geo-alt-fill"></i>30 mins Delhi</small>
                    </div>
                    <p>E-56 metro piller GTB Nagar Delhi</p>
                    <div className="item-btns">
                      <a href='/view' className="dark-btn">View Store</a>
                      <a href="/Online" className='dark-btn'>Online Order</a>
                    </div>
                  </div>
                </div>
              </div>

              
        </div>
       </div>
    </div>
  )
}

export default Store