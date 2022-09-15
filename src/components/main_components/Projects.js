import React from "react";

import Img1 from "../../img/one.png"
import Img2 from "../../img/2.png"
import Img3 from "../../img/three.png"

function Projects() {

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.querySelector("mySlides");
      let dots = document.querySelector("dot");
      
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    return(
        <div className="projects-root">

            <div className="slideshow-container">

                <div className="mySlides fade">
                    
                    <div className="numbertext">1 / 3</div>
                    <img src={Img1} className="slider-img"/>
                    <div className="text">Project One</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src={Img2} className="slider-img"/>
                    <div class="text">Project Two</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src={Img3} className="slider-img"/>
                    <div class="text">Project Three</div>
                </div>

                <a class="prev" onclick={plusSlides(-1)}>&#10094;</a>
                <a class="next" onclick={plusSlides(1)}>&#10095;</a>

            </div>
                
            <br />

            <div className="slider-dotes">
                <span className="dot" onclick={currentSlide(1)}></span> 
                <span className="dot" onclick={currentSlide(2)}></span> 
                <span className="dot" onclick={currentSlide(3)}></span> 
            </div>

        </div>
           
    )
}

export default Projects;