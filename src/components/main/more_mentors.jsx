import React from "react";
import "./main.css";
import { useState } from "react";
import mentor1 from "../../assets/mentor1.jpg";
import mentor3 from "../../assets/mentor3.jpg";
import mentor11 from "../../assets/mentor11.png";
import mentor22 from "../../assets/mentor22.png";
import mentor33 from "../../assets/mentor33.png";
// import ViewLessToggle from "./view-button";

function moreMentors (){

   return (
    <div>
            <div className="mentor-img">
                <div className="mentors">
                <div>
                    <img src={mentor1} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>David philips</b>
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
                    <img src={mentor3} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>Alex Roy</b>
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
            </div>            <div className="mentor-img">
                <div className="mentors">
                <div>
                    <img src={mentor11} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>John philips</b>
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
                        <b>Thomas John</b>
                        <p>Software engineering</p>
                    </div>
                    <div>
                    <p>230k+ courses</p>
                    <p>54k+ reviews</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="mentor-img">
                <div className="mentors">
                <div>
                    <img src={mentor11} alt="" />
                </div>
                <div className="about">
                    <div>
                        <b>George Ben</b>
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
            </div>
   ) 
}

export default moreMentors;