import React from "react";
import './Header.css'
import Navbar_Logo from './images/Navbar_Logo.png'
import {FaBars,FaSistrix} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import flag from './images/flag.jpg'
import img9 from './images/img9.jpeg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";



function Navbar(){
    const notificationCount = 3;
    const commentCount = 8;


    return(

        <div className="nav-container">

        <div className="nav-1">
            <img src={Navbar_Logo} alt='logo' className='logopic' /> 
            <a href='#icon' className='menu-icon'><FaBars/></a>  
            <a href='#a' className="nav-brand">Dreamguy's Technologies</a>

        </div>

        <div className="nav-1">
            <div className="nav-1-1">
            <Form  className="d-flex">
          <Form.Control
           type="search"
           placeholder='Search here'
           className='me-2'
           aria-label="search"
           style={{background:'#ffcccc',borderRadius:'18px',margin:'5px 0px'}}
           />
           <span className='sIcon'><FaSistrix/></span>
          </Form> 
          </div>
          <img src={flag} alt='flag' className='flagpic' />
          <div className="English">
          <label  class="English-label" ></label>
          <select name='Select'>
                            <option >English</option>
                            <option >Arabic</option>
                            <option >Spanish</option>
                            <option >French</option>
                           </select> 

          </div>
          <IoIosNotificationsOutline className="bell-icon"/>
          <span className="notification-badge">{notificationCount}</span>
          <FiMessageCircle className="bell-icon"/>
          <span className="notification-badge">{commentCount}</span>
          <div className="Admin">
          <img src={img9} alt="img1" className="admin-img"/>
          
          <label  class="Admin-label" ></label>
          <select name='Select'>
                            <option >Admin</option>
                            <option >profile</option>
                            <option >settings</option>
                            <option >logout</option>
                            
                           </select> 

          </div>
          
                           
                           
          
           

          
        </div>


        
        </div>


    )
}

export default Navbar;