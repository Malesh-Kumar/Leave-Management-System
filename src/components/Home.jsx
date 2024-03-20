import React from 'react'
import '../styles/Home.css'
import paperpen from './paperpen.png'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="padding">
    <ul className = "navbar1">
              <div className = "it">
                  <li className="list item1"><NavLink className="items" to="/About">About us</NavLink></li>
                  <li className="list item2"><NavLink className="items" to="/Contact" >Contact us</NavLink></li>
                  <li className="list item3"><NavLink className="items" to="/Service" >Service us</NavLink></li>
               
              </div>
          </ul>
          
    <div className="head">
      <div className="content"><h1>Leave it to go..!</h1><br></br>
      <p>Leave types. Leave tracking. Leave applications. Leave policy. And more.

If it’s to do with leave management, consider it done with MK</p>
<h4>Effortless, efficient, effective leave management</h4>
<img className= "img" alt= "paperpen.png" src={paperpen}/>
</div>
    

   <div className="content" style={{display : 'flex' ,textAlign:"justify"}} >
  </div>
    <div style={{display : 'flex'}}>
 
    </div>
    </div>
    
    </div>
    
  )
}

