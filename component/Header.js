import React from 'react'
import './Header.css'
class Header extends React.Component {
    render() {
        return (

            <div>
                <div className="container-fluid container-fluid1">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h2">Multiply Your Success</h2>
                            <p className="p2">We help you organize, document, and market your</p>
                            <p className="p2">business to be duplicated as successful franchises</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="div3">
                                <p className="p3">Love For All, Hatred For None. ...</p>
                                <button className="button2" type="button"> Subscribe Today</button>
                            </div></div>
                    </div>
                </div>
            </div>




        )
    }
}

export default Header