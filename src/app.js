import React from "react";
import Cars from "./pages/cars";
import Header from "./header"
import "./style.css";

export default function App() {
    return (
        <div className="main">
            <Header />
            <h2>One Stop Shop App</h2>

            <Cars/>
        </div>
    )
}