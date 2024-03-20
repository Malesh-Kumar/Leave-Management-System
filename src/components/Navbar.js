import React from 'react'
import { NavLink } from 'react-router-dom';
import logo1 from './logo1.img.png'
import '../styles/nav.css'
import { useAuth } from './Auth';

export const NavBar = () => {
    const context = useAuth()
  return (
    <div className="nav-container" data-aos="fade-down" >
            <div className ="logo">
                <img className= "logoimg" alt= "logo1.img" src={logo1}/>
                <h2 className = "title">Leave Management</h2>
            </div>
            <ul className = "navbar">
                <div className = "it">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    <li className="list item2"><NavLink className="items" to="/admin" >Admin</NavLink></li>
                    <li className="list item3"><NavLink className="items" to="/user" >User</NavLink></li>
                </div>
                <li className="list item3"><NavLink className = "items" to="/login" >Login</NavLink></li>               
            </ul>
        </div>
  )
}
