import React from "react";
import { ReactDOM } from "react";
import Bio from './main_components/Bio'
import Experience from './main_components/Experience'
import Skills from './main_components/Skills'
import Projects from './main_components/Projects'

function Main() {
    return (
        <div className="main">
            <Bio />
            <Experience />
            <div className="line"></div>
            <Skills />
            <div className="line"></div>
            <Projects />
        </div>
    )
}


export default Main;