import React from 'react'
import Header1 from './Header1'
import './About.css'
import Footer from './Footer.js'
function About() {
    return (
        <div>
            <Header1 />
            <div className="container-fluid footerabout">
                <div className="row">
                    <div className="col-md-12">
                        <img className="AboutImg" src="http://www.glittergraphics.org/img/81/819653/about-us-wallpaper.jpg" alt="About us"></img>
                    </div>
                </div>
             
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="challenges">We Are Ready For Challenges </h2></div></div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Cloud:-</h3>
                            <p>Cloud Build, Migration and Development of AWS, Azure or ‘big data’ frameworks, resources & solutions. The cloud is all about ease and flexibility, but that doesn't mean it's always plain sailing when getting things up and running.</p>
        
                        </div>
                        <div className="col-md-6">
                            <h3>
                            Data Analytics and VisualizationData Analytics and Visualization:-
                            </h3>
                            <p>
                             Highly skilled teams for your toughest data challenges Data storytelling goes hand in hand with visual communication and the visual representation of data. When clients need to communicate complex data clearly and intuitively to a targeted audience.</p>
                        </div>
                    </div>
                

            </div>
            <Footer />
        </div>
    )
}
export default About