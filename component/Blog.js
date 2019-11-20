import React from 'react'
import Header1 from './Header1'
import Footer from './Footer.js'
import './Blog.css'
function Blog(){
    return(
        <div>
            <Header1 />
           <div className="container-fluid   blog">
               <div className="container">
               <div className="row">
               <div className="col-md-12">
                   <h2>STARTUP THAT USES TECHNOLOGY FOR GOOD</h2>
                   <p>InfoStride is a technology services company - built by founders and team members who are entrepreneurs, leaders in finance, retail, healthcare and technology with a strong history of building successful businesses.</p>
               </div>
               </div>
               </div>
           </div>
           <div className="container post">
               <div className="row">
                   <div className="col-md-12">
                       <h1>View latest posts from Our Blog&nbsp;&nbsp;&nbsp;<img src="https://www.infostride.com/wp-content/uploads/2019/05/landing-arrow.png" alt="Blog"></img>
                        </h1>
                   </div>
               </div>
           </div>
           <Footer />
        </div>
    )
}
export default Blog