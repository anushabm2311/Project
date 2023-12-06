import React from "react";
import './Dashboard.css';
import {Link,BrowserRouter} from 'react-router-dom'
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
import settings from './images/settings.jpeg'
import grid from './images/grid.png'
import list from './images/list.png'







function DashBoard() {
    // const navigate = useNavigate();
    return (
           

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
                            <img src={grid} alt="grid" className="div-grid"/>
                            <img src={list} alt="list" className="div-list"/>
                            <BrowserRouter>

                            <Link to="/AddEmployee">
                            <button  id="Add-button">+ Add Employee</button>
                            
                            </Link>
                            
                            </BrowserRouter>
                            

                            {/* <button onClick={()=>navigate("/AddEmployee")} id="Add-button">+ Add Employee</button> */}
                           
                           
                            
                            
                            

                          
                            
                            
                           

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
                                <img src={img1} alt="img1"/>
                                <h3>John doe</h3>
                                <p aria-disabled>Web Designer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img2} alt="img1"/>
                                <h3>Richard Miles</h3>
                                <p aria-disabled>Web Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img3} alt="img1"/>
                                <h3>John Smith</h3>
                                <p aria-disabled>Android Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img4} alt="img1"/>
                                <h3>Mike Litorus</h3>
                                <p aria-disabled>IOS Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img5} alt="img1"/>
                                <h3>Wilmer Deluna</h3>
                                <p aria-disabled>Team Leader</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img6} alt="img1"/>
                                <h3>Jeffrey Warden</h3>
                                <p aria-disabled>Web Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img7} alt="img1"/>
                                <h3>Benardo GalaviZ</h3>
                                <p aria-disabled>Web Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img8} alt="img1"/>
                                <h3>Lesley Grauer</h3>
                                <p aria-disabled>Team Leader</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img9} alt="img1"/>
                                <h3>Jeffrey Lalor</h3>
                                <p aria-disabled>Team Leader</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img10} alt="img1"/>
                                <h3>Loren Gatlin</h3>
                                <p aria-disabled>Android Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img11} alt="img1"/>
                                <h3>Tarah Shropshire</h3>
                                <p aria-disabled>Android Developer</p>
                            </div>
                            <div className="div-3-1">
                            <img src={img12} alt="img1"/>
                                <h3>Catherine Manseau</h3>
                                <p aria-disabled>Android Developer</p>
                            </div>
                       </div>



                </div>
                <div className="div-4">
                    <br/>
                    
                    <img src={settings} alt="settings" className="setting-1"/>

                </div>


             </div>










        </div>



    )
}

// function AddEmployeee(){
//     return (
//         <div>
//             <AddEmployee/>
//         </div>
//     )
// }

export default DashBoard;