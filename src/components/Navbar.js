import React from "react";
import { ReactDOM } from "react";

function Navbar() {

    return(
        <header className="header-root">
            <div className="header-tabs">
                <a href="#" className="header-button">BIO</a>
                <a href="#" className="header-button">EXPERIENCE</a>
                <a href="#" className="header-button">SKILLS</a>
                <a href="#" className="header-button">PROJECTS</a>
            </div>
        </header>
    )
}

export default Navbar;