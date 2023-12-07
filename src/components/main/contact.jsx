import React from "react";
import "./contact.css";
import facebook_bl from "../../assets/facebook_bl.png";
// import insta_bl from "../../assets/insta_bl.png";
import  twitter_b from "../../assets/twitter_b.png";
import linkedin_bl from "../../assets/linkedin_bl.png";
import behance from "../../assets/behance.png";
// import background2 from "../../assets/background2.jpg";
// import background3 from "../../assets/background3.jpg";

function contact (){
    return (
        <div id="contact">
            <div className="medias">
            <div className="links">
                    <div className="media1">
                        <div>

                        </div>
                        <p>instagram</p>
                    </div>
                    <a href="d"><div className="media"><img src={linkedin_bl} alt="" /></div></a>
                    <a href="s">
                    <div className="media"><img src={twitter_b} alt="" /></div>
                    </a>
                    <a href="s">
                    <div className="media"><img src={facebook_bl} alt="" /></div>
                    </a>
                    <a href="s">
                    <div className="media"><img src={behance} alt="" /></div>
                    </a>
                </div>
            </div>
            <form action="" className="contact">
                <h3>GET IN <b>TOUCH</b></h3>
                <p>we are available 24/7 to attend to your questions and guide you where necessary</p>
                <div className="name">
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                </div>
                <input type="email"  placeholder="Email"/> <br />
                <input type="number" placeholder="Phone"/> <br />
                <textarea name="" id="message" cols="30" rows="10">Let us know how we can help you</textarea> <br />
                <button className="btn3">send</button> <br /> <br />
                <button className="btn2" ><a href="#home">Go back home</a></button>?

            </form>

        </div>
    )
}

export default contact;