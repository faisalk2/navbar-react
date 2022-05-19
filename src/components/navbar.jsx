import React from "react";

const Navbar1 = () => {
    return <div id="d1"><h1>LOGOBAKERY</h1></div>
}

const Navbar2 = ({link}) => {
    return <div id="d2">
        <a href={link}>Services</a>
        <a href={link}>Projects</a>
        <a href={link}>About</a>
    </div>
}

const Navbar3 = () => {
    return <div id="d3"><button>Contact</button></div>

}
export default Navbar1;
export {  Navbar2, Navbar3 };

