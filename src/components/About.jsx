import React from "react";

function About(props) {
    return ( 
        <section id={props.hamburgerState ? "section-about-inner" : "section-about"} className="section-about">
            <div className="container-about">
                <h1 className="our-company">Our company</h1>
                <div className="container-mission-vision">
                    <div className="container-vision">
                        <h2>Vision:</h2>
                        <p>To become, by virtue of hard work, dedication, 
                        innovative thinking, and the use of high-tech equipment and experienced personnel, 
                        the prime company that provides information and communication technology(ICT) services 
                        that conform with international standards; attaining the status of a front line 
                        in the ICT industry.</p>
                    </div>
                    <div className="container-mission">
                        <h2>Mission:</h2>
                        <p>Our mission is to provide excellent information and
                        communication services that will create optimal satisfaction for our clients.
                        Specifically, we channel our mission to the efficient delivery of quality 
                        services by effective use of skilled personnel and high tech equipment.
                        This objective drives all our corporate actions.</p>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default About