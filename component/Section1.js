import React from 'react'
import './Section1.css'
function Section1() {

    return (

        <div>
            <div className="container-fluid threeCircle">
            <div  className=" giveCircle">
                <div className="row">
                <div className="col-md-3  md-offset-1">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="3" fill=" dodgerblue" />
                </svg> 
                <p className="text">Give Your<br /> Business</p>
            </div>
            <div className="col-md-4 ">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="white"  strokeWidth="3" fill=" dodgerblue"  />
                </svg>
                <p className="text">Build Something<br /> Bigger Than Yourself</p>
            </div>
            <div  className="col-md-4 ">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="white"  strokeWidth="3" fill=" dodgerblue"  />
                </svg>
                <p className="text">Share Your Success<br /> With Others</p>
            </div></div>
            </div>
            </div>
           
        </div>


    )

}

export default Section1