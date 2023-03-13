import React from "react";
import "./style.css";
import logo from "./benove-logo.svg";



export default function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" /><br/>
        
        </div>
    )
}