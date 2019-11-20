import React from 'react'
import Header1 from './Header1';
import Footer from './Footer.js'
import './Services.css'
function Services() {
    return (
        <div>
            <Header1 />
            <div className="container-fluid services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="Services1">SERVICES</h2>
                        <p>
                         Our all-inclusive service offering gives you everything you need to escape the war for talent. With InfoStride you gain access to worldwide talent pools and the InfoStride platform to support the entire remote team experience.</p>
                    </div>
                </div>
                </div></div>
                <div className="container solution">
                <div className="row">
                    <div className="col-md-6">
                        <img className="cloudImg" src="https://www.infostride.com/wp-content/uploads/2019/06/work-team-1.svg"alt ="Solutions"></img>
                        <h3>MANAGED SOLUTIONS</h3>
                    </div>
                    <div className="col-md-6">
                       
                        <img className="cloudImg" src="https://www.infostride.com/wp-content/uploads/2019/06/interactive-1.svg" alt="Digital"></img>
                        <h3>DIGITAL TRANSFROMATION</h3>
                 </div>
                    </div>
           
            </div>
            <Footer />
        </div>
    )
}
export default Services