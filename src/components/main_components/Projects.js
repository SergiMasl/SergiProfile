import React, { useState } from "react";

import Img1 from "../../img/one.png"
import Img2 from "../../img/2.png"
import Img3 from "../../img/three.png"

const slideArr =[
    {
        "num": "1 / 3",
        "img": Img1,
        "descrip": "Project One",
    },
    {
        "num": "2 / 3",
        "img": Img2,
        "descrip": "Project Two",
    },
    {
        "num": "3 / 3",
        "img": Img3,
        "descrip": "Project Three",
    }
];

function Projects() {
   
    const [slideIndex, setSlideIndex] = useState(0);
    const activeSlide = slideArr[slideIndex];
    
    function plusSlides(n) {
      let newIndex = slideIndex + n;
      console.log(newIndex)
      if(newIndex < 0) {
        newIndex = slideArr.length-1;
      }
      if(newIndex > slideArr.length-1) {
        newIndex = 0;
      }
      setSlideIndex(newIndex)
    }


    return(
        <div className="projects-root">

            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">{activeSlide.num}</div>
                    <img src={activeSlide.img} className="slider-img"/>
                    <div className="text">{activeSlide.descrip}</div>
                </div>

                <a 
                    className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(-1)}>&#10095;</a>

            </div>
                
            <br />

            <div className="slider-dotes">
                {/* <span className="dot" onClick={currentSlide(1)}></span> 
                <span className="dot" onClick={currentSlide(2)}></span> 
                <span className="dot" onClick={currentSlide(3)}></span>  */}
            </div>

        </div>
           
    )
}

export default Projects;