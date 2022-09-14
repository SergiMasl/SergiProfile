import React from "react";
import { ReactDOM } from "react";
import Logo from '../../img/logo.png'

function Bio() {
    return (
        <div className="bio-root">
            <h2 className="bio-name">Sergey Maslinikov</h2>
            <p className="bio-position">Front End Engineer</p>
            <div className="bio-img">
                <img className="bio-img-logo" src={Logo} />
            </div>
            <p className="bio-history">I am a front-end engineer, I studied at the Kemerovo State University with a degree in Phisic & Western Michigan University with a degree in Biomedical scince. I have over 4 years of experience in front-end development. I enjoy learning new technologies and being at their intersection, solving problems and filling knowledge gaps. I try to look for parts and solutions in the code that can and should be improved or simplified. I enjoy creating end products and seeing the results of my work. Open mainly for remote vacancies from any country in the world.</p>
            <div className="bio-social">
                <a href="#" className="bio-social-link">Gmail</a>
                <a href="#" className="bio-social-link">LinkedId</a>
                <a href="#" className="bio-social-link">Github</a>
            </div>
        </div>
    )
}

export default Bio;



