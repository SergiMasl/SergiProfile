import React from "react";


import Work from "../../img/work.svg"
import Reactico from "../../img/reactico.svg"
// import Icono from "../../img/x.svg"
import Java from "../../img/java.svg"
import Sql from "../../img/sql.svg"

function Skills() {
    return(
        <div className="skills-root">
            <ul>
                <li className="skill-elem">
                    <img src={Work} className="skill-svg"/>
                    3,5+ years experience in front-end development. TypeScript
                </li>
                <li className="skill-elem">
                    <img src={Reactico} className="skill-svg"/>
                    React.js, Angular
                </li>
                {/* <li className="skill-elem">
                    <img src={Icono} className="skill-svg"/>
                    Webpack, Node.js, Babel, NPM, graphql, stylus, GIT
                </li> */}
                <li className="skill-elem">
                    <img src={Java} className="skill-svg"/>
                    Java/Spring
                </li>
                <li className="skill-elem">
                    <img src={Sql} className="skill-svg"/>
                    SQL
                </li>
            </ul>
        </div>
    )
}

export default Skills;