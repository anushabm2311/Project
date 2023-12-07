import React, { useState } from "react";
import './Dashboard.css';
import AddEmployee from "./AddEmployee"
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.jpeg'
import img7 from './images/img7.jpeg'
import img8 from './images/img8.jpeg'
import img9 from './images/img9.jpeg'
import img10 from './images/img10.jpeg'
import img11 from './images/img11.jpeg'
import img12 from './images/img12.jpeg'
import Edit from './images/Edit.jpg'
import settings from './images/settings.jpeg'
import grid from './images/grid.png'
import list from './images/list.png'
import EditEmployee from "./EditEmployee";







function DashBoard() {
    const[isAddEmployee, setAddEmployee]=useState(false);

    
    const openAddEmployee = () => {
        setAddEmployee(true);
    };


    const[isEditEmployee, setEditEmployee]=useState(false);

    
    const openEditEmployee = () => {
        setEditEmployee(true);
    };
    
    return (
           <>

        <div className="main-container">


            
             <div className="div-1">

                <div className="div-1-1">
                    <div className="Emp">
                        <h1>Employee</h1>
                        <h4>Dashboard / Employee</h4>
                        
                    </div>
                </div>

                <div className="div-1-1">
                    <div className="div-1-11">
                        <br/>
                        <div className="div-view">
                            <button className="button-grid">
                            <img src={grid} alt="grid" className="div-grid"/>
                            </button>
                            <button className="button-list"> 
                            <img src={list} alt="list" className="div-list"/>

                            </button>
                            
                            
                                <button type="button"  id="Add-button" onClick={openAddEmployee}>
                                + Add Employee
                            </button> 

                            
                            

                        </div>
                        

                    </div>
                </div>

             </div>

             <div>
                <div className="div-2">
                    <div className="div-2-1">
                    <input type="text" placeholder="Employee ID"/>
                    </div>
                    <div className="div-2-1">
                    <input type="text" placeholder="Employee Name"/>
                    </div>
                    <div className="div-2-1">
                    <select name='Select'>
                            <option >Select Designation    </option>
                            <option >Web Designer    </option>
                            <option >Web Developer   </option>
                            <option >Team Leader     </option>
                           </select> 
                    </div>
                    <div className="div-2-1">
                        <div className="div-2-11">
                            <button type="text" id="search-button">SEARCH</button>

                        </div>
                    

                    </div>
                       
                </div>
                <br/>

                <div className="div-3">
                       <div className="Grid-cantainer">
                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img1} alt="img1"/>
                                <h3>John doe</h3>
                                <p aria-disabled>Web Designer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                        {/* <ul class="dropdown-menu dropdown-content" >
                                            <li><a href="#" onClick={openEditEmployee}>Edit</a></li>
                                            <li><a href="#">Delete</a></li>
                                        </ul> */}
                                    </div>     
                                
                            </div>
                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img2} alt="img1"/>
                                <h3>Wilmer Deluna</h3>
                                <p aria-disabled>Web Designer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button onClick={openEditEmployee} className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>



                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img3} alt="img1"/>
                                <h3>Richard miles</h3>
                                <p aria-disabled>Web Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button onClick={openEditEmployee} className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img4} alt="img1"/>
                                <h3>John Smith</h3>
                                <p aria-disabled> Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img5} alt="img1"/>
                                <h3>Mike Litorus</h3>
                                <p aria-disabled>IOS Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img6} alt="img1"/>
                                <h3>Jeffrey Warden</h3>
                                <p aria-disabled>Web Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img7} alt="img1"/>
                                <h3>Bernardo</h3>
                                <p aria-disabled>Web Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img8} alt="img1"/>
                                <h3>Lesley</h3>
                                <p aria-disabled>Web Designer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                           <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img9} alt="img1"/>
                                <h3>jeffery</h3>
                                <p aria-disabled>Web Designer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img10} alt="img1"/>
                                <h3>loren Gatlin8</h3>
                                <p aria-disabled>Web Developer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img11} alt="img1"/>
                                <h3>Tarah</h3>
                                <p aria-disabled>Team Leader</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>


                            <div className="div-3-1">
                               
                               <div className="div-3-11">
                                
                                <img src={img12} alt="img1"/>
                                <h3>Catherine</h3>
                                <p aria-disabled>Web Designer</p>
                               </div>
                               <div class="div-3-11" >
                                      <button  onClick={openEditEmployee}  className="Edit-icon"><img className="edit-icon" src={Edit} alt="edit-icon"/></button> 
                                    </div>     
                                
                            </div>
                       </div>



                </div>
                <div className="div-4">
                    <br/>
                    
                    <img src={settings} alt="settings" className="setting-1"/>

                </div>


             </div>



        </div>

        
        {isAddEmployee && (
            <AddEmployee isOpen={AddEmployee} />
        )}

        {isEditEmployee && (
            <EditEmployee isOpen={EditEmployee} />
        )}
        

        </>

    )
}



export default DashBoard;