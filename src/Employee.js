import React from "react";
import Navbar from "./Header";
import './Header.css'
import DashBoard from './Dashboard';
import './Dashboard.css'
import AddEmployee from './AddEmployee'
import './AddEmployee.css';
import EditEmployee from './EditEmployee';
import './EditEmployee.css';

const Employee1 = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <DashBoard/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AddEmployee/>
                <br/>
                <br/>
                <br/>
            
                <EditEmployee/>
            </div>
        </div>
    )
}

export default Employee1;