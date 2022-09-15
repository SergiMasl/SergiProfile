import React from "react";
import { ReactDOM } from "react";

function Navbar(props) {

   const navArr = ["BIO", "EXPERIENCE", "SKILLS", "PROJECT"];
   
   const clickNav = props.onTabClick;
    const activeClass = props.rootIndex;
    //activeNav
    const defaultclassName = "header-button";
    const activetclassName = "header-button activeNav";

    return(
        <header className="header-root">
            <div className="header-tabs">
               
               { 
                    navArr.map((elem, index) => <a key={elem} href="#" className={index == props.rootIndex ? activetclassName : defaultclassName} onClick={()=>clickNav(index)}>{elem}</a>)
               }

            </div>
        </header>
    )
}

export default Navbar;