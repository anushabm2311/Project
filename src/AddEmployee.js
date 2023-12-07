import React from "react";
import './AddEmployee.css';
import cancel from './images/cancel.png'






function AddEmployee(isOpen){
   if (!isOpen) return null;

    return(
      // className={`Employee-container ${isOpen ? 'show' : ''}`}  style={{ display: isOpen ? 'block' : 'none' }} 
      <div className="Employee-container" >
             <div className="Employee-box">
                  <div className="div-1">
                  <h3 className="heading">Add Employee</h3>
                  <img src={cancel} alt="cancel" className="cancel-logo"/>

                  </div>

                
                <form>
                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">First Name</label><br/>
                           <input type="text" class="form-control"placeholder=""/>
                        </div>
                        <div className="form-group">
                           <label  class="form-label">Last Name</label><br/>
                           <input type="text" class="form-control"placeholder=""/>   
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">Username</label><br/>
                           <input type="text" class="form-control"placeholder=""/>
                        </div>
                        <div className="form-group">
                           <label  class="form-label">Email</label><br/>
                           <input type="email" class="form-control"placeholder=""/>   
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">Password</label><br/>
                           <input type="password" class="form-control"placeholder=""/>
                        </div>
                        <div className="form-group">
                           <label  class="form-label">Confirm Password</label><br/>
                           <input type="password" class="form-control"placeholder=""/>   
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">Employee ID</label><br/>
                           <input type="text" class="form-control"placeholder=""/>
                        </div>
                        <div className="form-group">
                           <label  class="form-label">Joining Date</label><br/>
                           <input type="date" class="form-control"placeholder=""/>   
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">Phone </label><br/>
                           <input type="phone" class="form-control"placeholder=""/>
                        </div>
                        <div className="form-group">
                           <label  class="form-label">Company</label><br/>
                           <select name='Select'>
                            <option >Global Technologies  </option>
                            <option >HCL Technologies     </option>
                            <option >Tech Mahindhra       </option>
                           </select>  
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                           <label  class="form-label">Department</label><br/>
                           <select name='Select'>
                           <option >Select Department    </option>
                            <option >Finance         </option>
                            <option >Human Resource  </option>
                            <option >IT              </option>
                           </select>
                        </div>
                        <div className="form-group">
                           <label  class="form-label" >Designation</label><br/>
                           
                           <select name='Select'>
                            <option >Select Designation    </option>
                            <option >Web Designer    </option>
                            <option >Web Developer   </option>
                            <option >Team Leader     </option>
                           </select>   
                        </div>
                    </div>
                    


                  <div className="mod">
                     <div className="mod-1">
                        <p>Module Permission</p>
                     </div>
                     <div className="mod-1">
                        <p>Read</p>
                        <p>Write</p>
                        <p>Create</p>
                        <p>Delete</p>
                        <p>Import</p>
                        <p>Export</p>
                     </div>
                  </div>


                  <div className="Holidays">
                     <div className="holidays-1">
                        <p>Holidays</p>
                     </div>
                     <div className="holidays-1">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays2">
                     <div className="holidays-2">
                        <p>Leaves</p>
                     </div>
                     <div className="holidays-2">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays3">
                     <div className="holidays-3">
                        <p>Project</p>
                     </div>
                     <div className="holidays-3">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays4">
                     <div className="holidays-4">
                        <p>Task</p>
                     </div>
                     <div className="holidays-4">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays5">
                     <div className="holidays-5">
                        <p>Chat</p>
                     </div>
                     <div className="holidays-5">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays6">
                     <div className="holidays-6">
                        <p>Assets</p>
                     </div>
                     <div className="holidays-6">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="Holidays7">
                     <div className="holidays-7">
                        <p>Timing Sheets</p>
                     </div>
                     <div className="holidays-7 ">
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />
                        <input value="test" type="checkbox" />

                     </div>
                  </div>

                  <div className="submit-button">
                     <br/>
                     

                     <label>
                     </label>
                     <button type="submit">Submit</button>

                  </div>
          

                  </form>
          </div>


        </div>


    )
}

export default AddEmployee;

