import React from 'react'
import {
    NavLink
} from "react-router-dom"
import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="container">
                    <div className="col-md-2 md-offset-5">
                        <svg height="100" width="100">
                            <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="1" fill="white" />

                        </svg>
                    </div>
                    <div className="col-md-4 ">
                        <p className="address">Address:</p>
                        <p> E-40 phase-8,<br /> sector-71 Industrial Area.</p> <br />
                        <p className="fax"><strong>Mobile No:</strong> 978568xxxx</p>
                        <p className="fax"><strong>Fax No:</strong> abXXXX</p>
                        <p className="fax"><strong>Email:</strong> kamleshbishnoi812@gmail.com</p>


                    </div>
                    <div className="col-md-1 footer1">

                        <p className="navlink">
                            <NavLink  className="navLink" to="/About" exact={true} activeClassName='is-active footerAbout'>About</NavLink></p>


                        <p className="navlink"> <NavLink  className="navLink" to="/Blog" exact={true} activeClassName='is-active'>Blog</NavLink></p>


                        <p className="navlink"> <NavLink  className="navLink" to="/Services" exact={true} activeClassName='is-active'>Services</NavLink></p>


                    </div>


                </div>

            </div>
        </div>
    )
}
export default Footer












































