import React, { useState } from 'react'
import './Style.css'

function Online_order() {
  const Data_cell=[{
    Name:"Isaland Veg Burger",
    img1:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg",
    money:"159"



  }]
  const Data = [
    {
      Name:"BYOG VEG",
      Img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg",
      Rupees:'189',
    },
    {
      Name:"BYOG NONVEG",
      Img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg",
      Rupees:'200',
    },
    {
      Name:"BYOG MUTTON",
      Img:"https://cdn.uengage.io/uploads/29124/image-1738-1705563055.jpg",
      Rupees:'299',
    },
  ]
const Data1=[{
  Name:"Burger Club Meal",
  para:"Experiance Ultimate Burger Club Meal Which Includes delicious burger a refreshing pepsi",
  Rupees:" 249"
 
},]
const Data2=[{
  Name:"Cripsy Chicken Bites + Dip (Medium)",
  para:"100% Fresh Juisy Chicken marinated in spaecially made mix of indian ",
  Rupees:" 69",
  img:"https://cdn.uengage.io/uploads/29124/image-2831-1704260849.jpg"
},
{
  Name:"Spicy Chicken Stripes + 3 Dips",
  para:"100% Fresh Juisy Chicken marinated in spaecially made mix of indian ",
  Rupees:" 139",
  img:"https://cdn.uengage.io/uploads/29124/image-4841-1704260851.jpg"
},
{
  Name:"Cripsy Potato Wrap",
  para:"100% Fresh Juisy Chicken marinated in spaecially made mix of indian ",
  Rupees:"149",
  img:"https://cdn.uengage.io/uploads/29124/image-2188-1705991415.jpg"
},]
const Data3=[{
  Name:"Garlic Bread",
  para:"100% Fresh Juisy Chicken marinated in spaecially made mix of indian ",
  Rupees:"149",
  img:"https://cdn.uengage.io/uploads/29124/image-7446-1704445223.jpg"
},
{
  Name:"Club spicy Chicken wrap",
  para:"100% Fresh Juisy Chicken marinated in spaecially made mix of indian ",
  Rupees:"189",
  img:"https://cdn.uengage.io/uploads/29124/image-4831-1704260854.jpg"
},
{
  Name:"Choco Blost",
  para:"Baked ",
  Rupees:"119",
  img:"https://cdn.uengage.io/uploads/29124/image-9487-1704260826.jpg"
}
]
const Data4=[{
  Name:"Island Veg Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"159",
  img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg"
},
{
  Name:"Devil Veg Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"159",
  img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg"
},
{
  Name:" junior Devil Veg Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"109",
  img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg"
},
{
  Name:"Rayal  Veg Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"69",
  img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg"
},
{
  Name:"Veg Club Chesi",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"68",
  img:"https://cdn.uengage.io/uploads/29124/image-4899-1705563024.jpg"
},
{
  Name:"Veg Club Berger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-6749-1704445245.jpg"
},
{
  Name:"Spicy paneer burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"159",
  img:"https://cdn.uengage.io/uploads/29124/image-9377-1710769536.png"
},
]
const Data5=[{
  Name:"Classic Veg  burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"79",
  img:"https://cdn.uengage.io/uploads/29124/image-3347-1704260855.jpg"
},
{
  Name:"Cripsy Chicken Veg Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"79",
  img:" https://cdn.uengage.io/uploads/29124/image-7323-1704260848.jpg"
},
{
  Name:"Chicken Club Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"89",
  img:"https://cdn.uengage.io/uploads/29124/image-5495-1704260846.jpg"
},
{
  Name:"Chicken Cheese Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"109",
  img:"https://cdn.uengage.io/uploads/29124/image-6274-1704260845.jpg"
},
{
  Name:"Spicy Chicken Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"149",
  img:"https://cdn.uengage.io/uploads/29124/image-8235-1704260843.jpg"
},
{
  Name:"Spicy Chicken Club Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"179",
  img:"https://cdn.uengage.io/uploads/29124/image-6428-1704260839.jpg"
},
{
  Name:"Devil Chicken Club Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"189",
  img:"https://cdn.uengage.io/uploads/29124/image-7836-1704260834.jpg"
},
{
  Name:"Doubble Chicken Cheese Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"209",
  img:"https://cdn.uengage.io/uploads/29124/image-1515-1704260831.jpg"
},
{
  Name:"Ultimate Chicken Burger",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"269",
  img:"https://cdn.uengage.io/uploads/29124/image-3584-1704260827.jpg"
},
]
const Data6=[{
  Name:"Mr panner Wrap",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"139",
  img:"https://cdn.uengage.io/uploads/29124/image-7182-1705563026.jpg"
},
{
  Name:"Mr Spicy Chicken Wrap",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"179",
  img:"https://cdn.uengage.io/uploads/29124/image-7534-1705563053.jpg"
},
{
  Name:"Mr Chicken Wrap",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"149",
  img:"https://cdn.uengage.io/uploads/29124/image-7534-1705563053.jpg"
},
]
const Data7=[{
  Name:"Veg Salad",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"179",
  img:"https://cdn.uengage.io/uploads/29124/image-6916-1704260741.jpg"
},
{
  Name:"Chicken Salad",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"209",
  img:"https://cdn.uengage.io/uploads/29124/image-9363-1705563050.jpg"
}
]
const Data8=[{
  Name:"Magic Plater",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"139",
  img:"https://cdn.uengage.io/uploads/29124/image-5593-1704260761.jpg"
},
{
  Name:"Tingy Bites",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"119",
  img:"https://cdn.uengage.io/uploads/29124/image-7177-1704260764.jpg"
},
{
  Name:"Chisy Widges",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"59",
  img:"https://cdn.uengage.io/uploads/29124/image-8597-1704260806.jpg"
},
{
  Name:"Onion Ring",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"59",
  img:"https://cdn.uengage.io/uploads/29124/image-8768-1705563048.jpg"
},
]
const Data9=[{
  Name:"Double Choco cookis",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"59",
  img:"https://cdn.uengage.io/uploads/29124/image-1271-1704260815.jpg"
},
{
  Name:"Double Choco Cookie Box",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"119",
  img:"https://cdn.uengage.io/uploads/29124/image-6919-1689686182.jpeg"
},
{
  Name:"Tbc Almonder Double Cookie",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"119",
  img:"https://cdn.uengage.io/uploads/29124/image-4728-1689686183.jpeg"
},
{
  Name:"Big Freanch cookie",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-5184-1705563044.jpg"
},
{
  Name:"Osmetal Cookie",
  para:"Our Signature Tropical Burger with freshly Backed Burns in House",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-5196-1705563045.jpg"
},]

const Data10=[{
  Name:"Chiptole Cheese fries",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-1822-1704260784.jpg"
},
{
  Name:"Tandoori Cheese Fries",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"99",
  img:"https://cdn.uengage.io/uploads/29124/image-1822-1704260784.jpg"
},
{
  Name:"Sweet Cheese",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"99",
  img:"https://cdn.uengage.io/uploads/29124/image-1822-1704260784.jpg"
},
]
const Data11=[{
  Name:"Green tea",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-2243-1705563047.jpg"
},
{
  Name:"Masala tea",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"49",
  img:"https://cdn.uengage.io/uploads/29124/image-1698-1704445244.jpg"
},
{
  Name:"Hot Chocolate",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"79",
  img:"https://cdn.uengage.io/uploads/29124/image-9145-1704445239.jpg"
},
{
  Name:"Cuppiccino",
  para:"120 grams | served with Chipotole cheese sause",
  Rupees:"89",
  img:"https://cdn.uengage.io/uploads/29124/image-9198-1704260797.jpg"
},
]
const Data12=[{
  Name:"Kids Meal Veg",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"159",
  img:"https://cdn.uengage.io/uploads/29124/image-5564-1704260740.jpg"
},
{
  Name:"Kids Meal Non Veg",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"189",
  img:"https://cdn.uengage.io/uploads/29124/image-5392-1705991416.jpg"
}
]
const Data13=[{
  Name:"Cheese Dip",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"59",
  img:"https://cdn.uengage.io/uploads/29124/image-1758-1704445247.jpg"
},
{
  Name:"Siracha Dip",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"59",
  img:"https://cdn.uengage.io/uploads/29124/image-1716-1704260818.jpg"
},
{
  Name:"Tandoori Dip",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"15",
  img:"https://cdn.uengage.io/uploads/29124/image-8164-1704260820.jpg"
},
{
  Name:"Salasal Dip",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"15",
  img:"https://cdn.uengage.io/uploads/29124/image-7543-1704260819.jpg"
},
]
const Data14=[{
  Name:"Kinder Joy",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"15",
  
},
{
  Name:"Add Chese",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"15",
},
{
  Name:"Mix fruit Juise",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"45",
},
{
  Name:"Whete Bun",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"15",
},
]
const Data15=[{
  Name:"Veg Burger Combo ",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"115",
},
{
  Name:"Non Veg Burger Combo ",
  para:"120 grams | served with Kids Meal veg",
  Rupees:"115",
}
]

const [product, setProduct] = useState({
  name:'',
  price:''

})
const [cart, setCart] = useState([])

const cartAdder = (name, price, quantity) =>{
  const data = {
    product:name, 
    productPrice:price,
    productQuantity:quantity
  }
  setCart(cart => [...cart, data])

  console.log(cart);
}


const submitHandler = (productName, productPrice)=>{
setProduct({
  name:productName,
  price:productPrice

})
console.log(product)
}


const quantityincrees = (index, name, price) =>{
  cart.map((item, i)=>{
    if(i == index){
      item.productQuantity++
    }
  })

}
const quantityDecrees = (index) =>{
  cart.map((item, i)=>{
    if(i == index){
      item.productQuantity--
    }
  })

}








  

  return (
    <div>
      <div className='Online_order'>
          <div className='Online_order_left'>
            <p className='Categories_item'>Categories</p>
            <div className='Categories' >
                <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/128px/1f90d.png" alt="img" />
                <a href="">Featured Items</a>
                <span>(6)</span>
                <hr />
            </div>
            

            <ul>
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-953946-1696421547.png" alt="BoG" />
             <a href="#test"> <p>Build Your Own Burger</p></a>
              <span>(3)</span>
             </li>
              <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-181123-1693205773.png" alt="Launch" />
             <a href="#test1"> <p>Launch Offer 99</p></a>
              <span>(1)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-953453-1692188741.png" alt="New In The Club" />
              <a href="#test2"><p>New In The Club</p></a>
              <span>(3)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-211591-1692188741.png" alt="Must Tray" />
              <a href="#test3"><p>Must Tray</p></a>
              <span>(3)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-949752-1692188741.png" alt="Burger" />
             <a href="#test4"> <p>Burgers</p></a>
              <span>(16)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-161883-1692188741.png" alt="Wraps" />
              <a href="#test5"><p>Wraps</p></a>
              <span>(3)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-794572-1692188741.png" alt="salad" />
              <a href="$test6"><p>salad</p></a>
              <span>(2)</span>
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-521746-1692188741.png" alt="side" />
             <a href="#test7"> <p>Side</p></a>
              <span>(4)</span>

             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-895836-1692188741.png" alt="Club" />
              <a href="#test8"><p>Club Cafe</p></a>
              <span>(5)</span>
              
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-917417-1692188741.png" alt="Fries" />
             <a href="#test9"> <p>Fries</p></a>
              <span>(11)</span>
              
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-331369-1692188741.png" alt="Dessert and Bevarages" />
              <a href="#test10"><p>Dessert And Bevarages</p></a>
              <span>(30)</span>
              
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-881873-1692188741.png" alt="Kids Meal" />
             <a href="#test11"> <p>Kids Meal</p></a>
              <span>(2)</span>
              
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-827297-1692188741.png" alt="Dipping Sauce" />
              <a href="#test12"><p>Dipping Sauce</p></a>
              <span>(7)</span>
              
             </li>
             <hr />
             <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-686389-1692188741.png" alt="Extra" />
             <a href="#test13"> <p>Extra</p></a>
              <span>(4)</span>
              
             </li>
             <hr />
              <li className='Online_Food_Item'>
              <img src="https://cdn.uengage.io/uploads/29124/image-272875-1692188741.png" alt="Make A Combo" />
              <a href="#test14"><p>Make A Combo</p></a>
              <span>(2)</span>
              
             </li>
             <hr />
            </ul>
          </div>

          <div className='Online_order_Middle'>
           <div className="main-top-card">
           <div className="m-card-top">
            <div className='online_order_middle_img_1'>
             <div className='online_order_middle_img'>
                  <img src="https://www.uengage.in/images/addo/logos/logo-29124-1689661084.png" alt="img" />
              </div>
              <div className='online_order_middle_Burger_club'>
                  <h3>The Burger Club - Rajouri Garden, <br />Delihi</h3>
                  <button><i class="bi bi-clock">Open</i></button>
                 
              </div>
             </div>



            <div className='online_order_middle_right'>

            
              <div className='Burger-Card'>
              <div className='online_order_middle_Burger_club_right'>
              <p><i class="bi bi-bicycle"></i>Delivery In 40 Minutes</p>
              <div className='online_order_middle_Burger_bottom'>
                <p><i class="bi bi-geo-alt"></i></p>
                <p><i class="bi bi-telephone"></i></p>
                <p><i class="bi bi-info-circle-fill"></i></p>
              </div>
              </div>
            
              <div className='online_order_middle_Burger_star'> 
                <p><i class="bi bi-star-fill"></i> 4</p>
                <hr />
                <p> 10 Reviews</p>
              </div>
              </div>
              <hr />
                
            </div>

            </div>
            <hr />
            <div className='online_order_middle_Burger_bottom_line'>
                <div className='Card-1'>
                <img src="https://theburgerclub.in/assets/wla_new/img/offer_logo_new.png" alt="img" />
                  <div className='Card-2'>
                  <h5>Get Burger at Rs99</h5>
                  <p>Use Code:LAUNCHOFFE99</p>
                  </div>
                </div>
                </div>
           </div>
           <div className='Online_search_Card'>
            <div className='Online_search_Value'>
            <i class="bi bi-search"> </i> 
           <input type="search" placeholder='Search.....'/>
            </div>
          
           <div className='Online_search_Card_right' id=''>
              <p className='Veg1'>Veg</p>
              <p className='Non-Veg'>Non Veg</p>
           </div>
           </div>
           <h3 className='f1'>Featured Items</h3>
           <div className='order-images'>
              <img src="https://static.uengage.in/uploads/29124/image-999824-1693310667.jpeg" alt="" />
              <img src="https://static.uengage.in/uploads/29124/image-447267-1693310667.jpeg" alt="" />
              <img src="https://static.uengage.in/uploads/29124/image-366478-1693310667.jpeg" alt="" />
              <img src="https://static.uengage.in/uploads/29124/image-447267-1693310667.jpeg" alt="" />
              <img src="https://static.uengage.in/uploads/29124/image-165253-1693310667.jpeg" alt="" />
            </div>
           
            {/* <div className='feature_cara'>
             {
               Data_cell.map((item,index)=>(
                < div className='Feature_card_cell'>
                <h3>{item.Name}</h3>
                <img src={item.img1} alt="" />
                <h4>{item.money}</h4>
                </div>
               ))
             }
            </div> */}

           <h3 id="test">BYOB(Build Your Own Burger)</h3><hr />
          
           
         
        <div className="food-item-container">
        {
             Data.map((item, index)=>(
              <div className='Data_Storing'>
            <div className='Data_item'>
            <h4>{item.Name}</h4>
            <p>Build Your Own Burger</p>
            <p>Customisation Available</p>
            <h5>{item.Rupees}</h5>
            
            </div>

             <div className='Data_item1'>
              <img src={item.Img} alt="" />
             <button onClick={()=>submitHandler(item.Name, item.Rupees, )}>Add+</button>
             </div>

              </div>
              
              ))
          }
        </div>
        <div className='devider'>
        <hr />
        </div>
       
        <h3 id="test1">Launch Offer @99</h3>
        <div className='Data_items'>
          {
            Data1.map((item, index)=>(
            <>
              <div className='Data_item_3'>
                <h4>{item.Name}</h4>
                <p>{item.para}</p>
              <small><i class="bi bi-star"></i></small>
              <small><i class="bi bi-star"></i></small>
              <small><i class="bi bi-star"></i></small>
              <small><i class="bi bi-star"></i></small>
              <small><i class="bi bi-star"></i></small>
            </div>
            <div className='Data_item_4'>
              <h4>{item.Rupees}</h4>
          <button onClick={()=>submitHandler(item.Name,item.Rupees,)}>Add+</button>
          </div>
         
         
            </>
            ))
          }

           </div>
           <div className='devider'>
          <hr />
          </div>
            <h3 id="test2">New In The Club</h3>
            <div className='Data_Folder'> 
            {
              Data2.map((item,index)=>(
                <div className='data_f_card'>
                <div className='Data_item_Folder'>
                <h4>{item.Name}</h4>
                
                <p>{item.para}</p>
                <small><i class="bi bi-star"></i></small>
                <small><i class="bi bi-star"></i></small>
                <small><i class="bi bi-star"></i></small>
                <small><i class="bi bi-star"></i></small>
                <h4>{item.Rupees}</h4>
                </div>
                <div className='Data_items_images'>
                <img src={item.img} alt="" />
                <button onClick={()=>submitHandler(item.Name,item.Rupees,)}>Add+</button>
                </div>
                </div>
              ))
            }
        </div>
        <div className='devider'>
            
            </div>
            <h3 id="test3">Must Tray</h3>
            <div className='Must_Tray_item'>
             {
              Data3.map((item,index)=>(
                <div className='Must_folder_item'>
                  <div className='Must_Folder'>
                  <h3>{item.Name}</h3>
                <hp>{item.para}</hp>
                <h4>{item.Rupees}</h4>
                  </div>
                  <div className='Must_Tray_img1'>
                  <img src={item.img} alt="" />
                  <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
               ))
              }
              </div>
              <div className='devider'>
            
            </div>

            <h3 id="test4">Burger</h3>
            <h4 className='Veg'>Veg Burgers .....</h4>
            <div className='Burger_items'>
             
                {
                  Data4.map((item,index)=>(
                    <div className='Burger_veg_1'>
                    <div className='Burger_1'>
                    <div className='Burger_Veg'>
                    <h4>{item.Name}</h4>
                    <p>{item.para}</p>
                    <h4>{item.Rupees}</h4>
                   </div>
                   <div className='Burger_veg_2'>
                    <img src={item.img} alt="" />
                    <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                   </div>
                   </div>
                   </div>
                  
                  ))
                }
             </div>
            <div className='devider'>
          </div>
                <h4 id="test5">Non Veg Burgers</h4>
                <div className='Burger_items'>
             
             {
               Data5.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
             <h3 id="test6">Wraps.....</h3>

             <div className='Burger_items'>
             
             {
               Data6.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test7">Salad</h3>
          <div className='Burger_items'>
             
             {
               Data7.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test8">Sides.....</h3>
          <div className='Burger_items'>
             
             {
               Data8.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>cartAdder(item.Name, item.Rupees, 10)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test9">Club Cafe ....</h3>
          <div className='Burger_items'>
             
             {
               Data9.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
            <div className='devider'>
          </div>
          <h3 id="test10">Fries ....</h3>
          <h4>Cheesi Fries</h4>
          <div className='Burger_items'>
             
             {
               Data10.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test11">Desert and Bevarages ....</h3>
          <h4>Chai</h4>
          <div className='Burger_items'>
             
             {
               Data11.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test12">Kids Meal ....</h3>
          <h4>..........</h4>
          <div className='Burger_items'>
             
             {
               Data12.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test13">Dipping Sause ....</h3>
          
          <div className='Burger_items'>
             
             {
               Data13.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div>
          <div className='devider'>
          </div>
          <h3 id="test14">Extra ....</h3>
          
          <div className='Burger_items'>
             
             {
               Data14.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div> 
          <div className='devider'>
          </div>
          <h3>Make A Combo ....</h3>
          
          <div className='Burger_items'>
             
             {
               Data15.map((item,index)=>(
                 <div className='Burger_veg_1'>
                 <div className='Burger_1'>
                 <div className='Burger_Veg'>
                 <h4>{item.Name}</h4>
                 <p>{item.para}</p>
                 <h4>{item.Rupees}</h4>
                </div>
                <div className='Burger_veg_2'>
                 <img src={item.img} alt="" />
                 <button onClick={()=>submitHandler(item.Name,item.Rupees)}>Add+</button>
                </div>
                </div>
                </div>
               ))
             }
          </div> 








            </div>
           

         

          <div className='Online_order_right'>
            
            <div className='Online_order_right_Card'>
            <h5>Your Cart</h5>
            <div className='devider'>
          </div>
            <h5>{product.name}</h5>
             <h5>{product.price}</h5>
            <div className='Your_cart'>
             <div className='Your_cart_para'>
             <p>Island Chicken Burger</p>
            
             <p>1 x &#8377; 179 &#8377; 179</p>
             </div>
             <div className='Your_card_button'>
              <div className='Your_card_para'>
              <button>-</button>
              <span>1</span>
              <button>+</button>
              </div>
            
             </div>
            
            </div>


            </div>
            {
              cart.map((item, index)=>(
               <div className='cart'>
                <div>
                <small>{item.product}</small><br />
                <small>{ item.productQuantity} * &#8377;{ item.productPrice} =  &#8377;{Number(item.productQuantity) * Number(item.productPrice)}</small> <br />
                </div>
                
                
                <div className='Your_card_button'>
              <div className='Your_card_para'>
              <button onClick={()=>quantityDecrees(index)}>-</button>
              <span>{item.productQuantity}</span>
              <button onClick={()=>quantityincrees(index)}>+</button>
              </div>
            
             </div>
               </div>
              ))
            }
            
          </div>
          
      </div>
    </div>
  )
}

export default Online_order