import "./index.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "./images/rim.jpg";
import Image2 from "./images/istanbul.png";
import Image3 from "./images/london.jpg";

function Galery() {
    return (
        <div className="main-galery">
            <div className="gallery-text">
                <h2>Gallery</h2>
                <p>Where we go</p>
            </div>
            <div className="gallery">
                <Carousel showArrows={true} showThumbs={false}>
                    <div>
                        <img src={Image2} alt="img" />
                    </div>
                    <div>
                        <img src={Image3} alt="img" />
                    </div>
                    <div>
                        <img src={Image1} alt="img" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Galery;
