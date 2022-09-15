import React from "react";

import Bio from './main_components/Bio'
import Experience from './main_components/Experience'
import Skills from './main_components/Skills'
import Projects from './main_components/Projects'

const ComponentsArray = [Bio, Experience, Skills, Projects];

function Main(props) {
    const ActiveComp = ComponentsArray[props.componentIndex];

    return (
        <div className="main">
            <ActiveComp />
        </div>
    )
}


export default Main;