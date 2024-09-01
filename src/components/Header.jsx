import React from "react";
import {NavLink, Link } from "react-router-dom";
import HomeSection from "./Homesection";

function Header(props) {
    const styling = {
        textDecoration: "underline",
        color: "white"
    }

    return ( 
        <div className="home">
        <header>
            <Link 
                style={{
                    borderRadius: "5px",
                    padding: "5px",
                    textDecoration: "none",
                    color: "white", 
                    fontSize: "1.5em"
                }} to={"/"}>Century Gateways</Link>
            <nav>
                <div className={props.hamburgerState ? "nav-links inner" : "nav-links"} onClick={props.onclick}>
                    <NavLink style={({isActive}) => isActive ? styling : null} to="/">Home</NavLink>
                    <NavLink style={({isActive}) => isActive ? styling : null} to="/about">About</NavLink>
                    <NavLink style={({isActive}) => isActive ? styling : null} to="/services">Services</NavLink>
                    <NavLink href="#home">Contact us</NavLink>
                </div>
                <div className={props.hamburgerState ? "hamburger inner" : "hamburger"} onClick={props.onclick}>
                    <span className={props.hamburgerState ? "span1 inner" : "span1"}></span>
                    <span className={props.hamburgerState ? "span2 inner" : "span2"}></span>
                    <span className={props.hamburgerState ? "span3 inner" : "span3"}></span>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default Header