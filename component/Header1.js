import React from 'react'
import {
    NavLink
} from "react-router-dom"
import './Header1.css'
class Header1 extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink to="/Home" exact={true} activeClassName='is-active'>
                            <img className="img1" src="https://s3.amazonaws.com/marketir/upload/img/company2/690/834240/834240_logo_1558012859_eab2ce29b6f2461bbd95be3df68d5dfa.png" alt="LOGO"></img>
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse nav1" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink className="navLink" to="/About" exact={true} activeClassName='is-active'>About</NavLink>
                            </li>

                            <li>
                                <NavLink className="navLink" to="/Blog" exact={true} activeClassName='is-active'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink className="navLink" to="/Services" exact={true} activeClassName='is-active'>Services</NavLink>
                            </li>
                        </ul>
                        <button type="button" className="NavButton">Hi! Kamlesh</button>
                    </div>


                </nav>

            </div>


        )
    }
}
export default Header1