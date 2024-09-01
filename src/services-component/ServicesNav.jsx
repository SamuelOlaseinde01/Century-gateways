import React from "react";
import { Link, NavLink , Outlet } from "react-router-dom";

export default function ServicesNav() {
    const styling={
        textDecoration: "none",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(0, 47, 255)",
        color: "white",
        fontSize: "1.1em"
    }

    const inActive = {
        textDecoration: "none", 
        fontSize: "1.1em",
    }

    return (
        <div className="container-servicesnav-container">
        <div className="servicesnav-container">
        <h2 className="services-h1">Our Services:</h2>
            <div className="servicesnav-links">
                <span className="TPM">
                    <NavLink end className={"servicesnav-link"} style={
                        ({isActive}) => isActive ? styling : inActive} to={"/services"}>Training</NavLink>
                    <NavLink end className={"servicesnav-link"} style={
                        ({isActive}) => isActive ? styling : inActive} to={"/services/procurement"}>Procurement</NavLink>
                    <NavLink end className={"servicesnav-link"} style={
                        ({isActive}) => isActive ? styling : inActive} to={"/services/maintenance"}>Maintenance</NavLink>
                </span>
                <span>
                    <NavLink end className={"servicesnav-link"} style={
                        ({isActive}) => isActive ? styling : inActive} to={"/services/consultancy"}>Consultancy</NavLink>
                </span>
            </div>
            <Outlet/>
        </div>
        </div>
    )
}