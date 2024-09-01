import React from "react";
import { Link } from "react-router-dom";

export default function HomeSection(props) {
    return(
        <section id={props.hamburgerState ? "section-home-inner" : "section-home"}>
            <div className="company-name">
                <h1>Welcome to</h1>
                <p>Century Gateways</p>
                <span className="quote">
                    <p>"...uniting for a common cause, unlocking a better tomorrow"</p>
                </span>
                <span className="leearn">
                <Link to={"/login"} className="signin-btn">Sign up/Login</Link>
                <Link to={"/about"} className="learn">Learn more</Link>
                </span>
            </div>
        </section>
    )
}