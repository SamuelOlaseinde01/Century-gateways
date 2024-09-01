import React from "react";
import { Link, NavLink , Outlet } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { PersonAddAlt1 } from "@mui/icons-material";

export default function LoginPage() {
    const styling={
        textDecoration: "none",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "rgb(0, 47, 255)",
        color: "White"
    }

    const inActive = {
        textDecoration: "none", 
        color: "rgb(59, 59, 59)"
    }

    return (
        <div className="container-forms-container">
        <div className="forms-container">
            <div className="form-links">
            <NavLink end className={"signup-link"} style={
                    ({isActive}) => isActive ? styling : inActive} to={"/login"}><PersonAddAlt1/>Sign up</NavLink>
                <NavLink end style={
                    ({isActive}) => isActive ? styling : inActive} to={"/login/signin"}><Person/><p>Sign in</p></NavLink>
            </div>
            <Outlet/>
        </div>
        </div>
    )
}