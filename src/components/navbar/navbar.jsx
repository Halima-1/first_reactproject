// import { Fragment } from 'react';
import "./navbar.css";
import { Fragment } from "react";
import React from 'react';
function navbar(){
    return (
        <Fragment>
        <header>
            <nav>
                <div className="logo">
                    <h3><b>eLearn</b></h3>
                    <input type="text" />
                </div>
                <ul className="nav">
                    <li><a href="#courses">course</a></li>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#blog">blog</a></li>
                </ul>
                <ul className="sign-in">
                <li><a href="#log-in">log-in</a></li>
                <li><a href="#register">register</a></li>
                </ul>
            </nav>
        </header>
        
        </Fragment>
    )
}

export default navbar;