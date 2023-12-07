/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from "react";
import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./main.css";
import woman_holding from "../../assets/woman_holding.png";
import man_standing from "../../assets/man_standing.png";
import girl_writing from "../../assets/girl_writing.png";
import mentor1 from "../../assets/mentor1.jpg";
import mentor3 from "../../assets/mentor3.jpg";
import mentor11 from "../../assets/mentor11.png";
import mentor22 from "../../assets/mentor22.png";
import mentor33 from "../../assets/mentor33.png";
import paypal from "../../assets/paypal.png";
import ebay from "../../assets/ebay.png";
import microsoft from "../../assets/microsoft.png";
import  netflix from "../../assets/netflix.png";
import  amazon from "../../assets/amazon.png";
import facebook_bl from "../../assets/facebook_bl.png";
// import insta_bl from "../../assets/insta_bl.png";
import  twitter_b from "../../assets/twitter_b.png";
import linkedin_bl from "../../assets/linkedin_bl.png";
import behance from "../../assets/behance.png";
import MoreMentors  from './more_mentors' ;
import Contact  from "./contact";
import ViewLessToggle from "./view-button";


function main (){

    const [showContact, setShowContact] = useState (false);

    function toggleContact (){
        setShowContact ((showContact) => !showContact);
    }


    const form = useRef ()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0y5082t', 'template_4zrsuwb', form.current, 'h71E_TPgzzVw2_ker')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
        // const [ btnState, setBtnState] = useState (false);

        // function handleClick () {
        //     setBtnState (btnState => !btnState);
        //     let toggle = btnState ? 'show-mentors': 'hide-mentors';
            
        // }
    
        const [show, setShow] = useState (false);

    function toggle (){
        setShow ((show) => !show);
    }

    // const [showw, setShoww] = useState (true);

    // function lessToggle (){
    //     setShoww ((showw) => !showw);
    //     // {showw && <MoreMentors />}
    // }


    return(
        <Fragment>
            <main id="home">   
            <div className="intro">
            <div className="intro-text">
                <h3>get started <br /> with digital learning</h3>
                <p>it is long established that a reader will be distracted by the readable content of a page when looking at layout.</p>
                <button className="btn1">get started</button>
                <button className="btn2" onClick={toggleContact}><a href="#contact">contact us</a></button>

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
            <div className="intro-img">
            <img src={man_standing} alt="" />
            </div>
        </div>
        <section className="section2">
            <div >
                <a href="s"><div className="partners"><img src={netflix} alt="netflix" /></div></a>
                <a href="s"><div className="partners"><img src={paypal} alt="paypal" /></div></a>
                <a href="s"><div className="partners"><img src={ebay} alt="ebay" /></div></a>
                <a href="s"><div className="partners"><img src={amazon} alt="amazon" /></div></a>
                <a href="s"><div className="partners"><img src={microsoft} alt="microsoft" /></div></a>
            </div>
        </section>
        <section className="courses">
            <div className="courses-text">
                <h3>discover our popular courses</h3>
                <p>these courses are the most sort after by our students in the last two years.</p>
                <p>these courses are the most sort after by our students in the last two years.</p>
                <button className="btn1">see more courses</button>
            </div>
            <div className="course-preview">
                <div className="preview">
                <a href="e"><div><img src={girl_writing} alt="" /></div></a>
                    <div>
                        <h3>UI/UX design</h3>
                        <p>we have produced large numbers of certified UI/UX designers in the recent years. </p>
                    </div>
                </div>
                <div className="preview">
                <a href="y"><div><img src={mentor1} alt="" /></div></a>

                    <div>
                        <h3>digital marketing</h3>
                        <p>our certified digital marketers are doing in excellently in many marketing firms today. </p>
                    </div>
                </div>
                <div className="preview">
                <a href="h"><div><img src={mentor3} alt="" /></div></a>
                    <div>
                        <h3>web development</h3>
                        <p>this has being one of our highly demanding courses over the years. with a lot of fascinating testimonials.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="explore">
            <div>
                <div>
                <img src={woman_holding} alt="explore"  className="explore-img"/>
                </div>
            </div>
            <div className="explore-text">
                <h3>Explore The eLearn Institute</h3>
                <p>as one of the best and biggest online learning institute, we are committed to breeding and producing the best employable graduates. our courses are all available and highly recommended by our alumnus from different countries in africa and beyond.</p>
                <div className="remark">
                    <div className="rate">
                        <b>14.3k+</b>
                        <p>online courses</p>
                    </div>
                    <div className="rate">
                        <b>275</b>
                        <p>experienced mentors</p>
                    </div>
                    <div className="rate">
                        <b>25k+</b>
                        <p>testimonials</p>
                    </div>
                </div>
                <button className="btn1">read more</button>
            </div>
        </section>
        <section className="mentor">
            <div className="mentor-text">
            <h3>meet with our professional mentors</h3>
            <button
            className="btn2" 
            onClick={toggle}
            >view all</button>
            </div>
            <div className="mentor-img">
                <div className="mentors">
                <div>
                    <img src={mentor11} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>sunday philips</b>
                        <p>UI/UX designer</p>
                    </div>
                    <div>
                        <p>120+ courses</p>
                        <p>2k+ reviews</p>
                    </div>
                </div>
                </div>
                <div className="mentors">
                <div>
                    <img src={mentor22} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>Badmus Abdul</b>
                        <p>Digital marketing</p>
                    </div>
                    <div>
                    <p>170k+ courses</p>
                    <p>95k+ reviews</p>
                    </div>
                </div>
                </div>
                <div className="mentors">
                <div>
                    <img src={mentor33} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>Alexandra John</b>
                        <p>Software engineering</p>
                    </div>
                    <div>
                    <p>230k+ courses</p>
                    <p>54k+ reviews</p>
                    </div>
                </div>
                </div>
            </div>
            {show && <div> <MoreMentors />
             <div className="view-less">
            <button
        onClick={toggle}
        >view less</button>
            </div>
 </div>};
        </section>
        <h3>subscribe to our weekly learning tips</h3>
        <form ref={form} action="" onSubmit={sendEmail}>
            <div>
            <input  type="email" name="user_email" placeholder="enter your email" />
            <button className="btn1" >subscribe</button>
            </div>
        </form>
        <section id="blog">
                <h3>our latest blogs</h3>
                <p>here you can find whats new in our institute and some current tech related topics.</p>
                <ul className="latest">
                    <li><a href="d">want a carrier in tech? take a look at this insightful topic on our twitter page. it might be helpful</a></li>
                    <li><a href="d">few tips on how to become a better UI/UX designer within few months of learning.</a></li>
                    <li><a href="d">python/django or PHP/laravel? which one is best suitable as a backend framework.</a></li>
                    <li><a href="d">meet the best graduating student in digital marketing from our 2022 cohort6 trainning.</a></li>
                </ul>
        </section>
        {showContact && <Contact />}
            </main>
        </Fragment>
    )
}

export default main;