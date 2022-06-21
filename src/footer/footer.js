import React from "react";
import "./footer.css";

const Footer = () => {
    return <div className="row  bgfooter text-light " >
        <div className="col-4">
            <h5>GET IN TOCUH </h5>
            <br />
            <i className="fa fa-envelope text-light m-2" aria-hidden="true">  shaza@gmail.com</i>
            <br />
            <i className="fa fa-mobile text-light m-2" aria-hidden="true">  7560489</i>
        </div>
        <div className="col-4 " style={{textAlign:"center",marginTop:"3%"}}>
            <button className="btn btn-outline-light " style={{width:"150px"}} >Contact Us</button>
        </div>
        <div className="col-4 " style={{textAlign:"right",marginTop:"2%"}}>
            <div>
                <i className="fa fa-linkedin-square text-light m-1" aria-hidden="true"></i>
                <i className="fa fa-facebook-square text-light m-1" aria-hidden="true"></i>
                <i className="fa fa-twitter text-light m-1" aria-hidden="true"></i>
            </div>
            <h6>copyRight @ 2022</h6>
        </div>
    </div>



};

export default Footer;