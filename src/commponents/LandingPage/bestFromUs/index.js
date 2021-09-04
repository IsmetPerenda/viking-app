import React, { useEffect } from "react";
import "./index.css";
import {
    loadMenuItems,
} from "../../../actions/menuItems";
import BestFromUs from "./BestFromUs";
import BestFromUsSec from "./BestFromUsSec";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../images/italy.jpg";
import Image2 from "../images/amsterdam.jpg";
import Image3 from "../images/russia.png";
import Image4 from "../images/italy.jpg";
import Image5 from "../images/italy.jpg";
function BestFrom({ menuItems }) {



    const stableDispatch = useDispatch()


    useEffect(() => {
        stableDispatch(loadMenuItems("offer"));
    }, [stableDispatch]);



    function renderItems() {
        return menuItems.map((item, i) => {

            if (i % 2 === 0) {
                return (
                    <BestFromUs
                        key={i}
                        item={item}
                    />
                );
            } else {
                return (
                    <BestFromUsSec
                        key={i}
                        item={item}
                    />
                )
            };
        });
    }

    return (
        <>
            <div className="bestFromUsContainer">
                <h1>Best rating packages</h1>
                <h2>Choose your favorite</h2>
             
                <Carousel showArrows={true} showThumbs={false}>
                    <div class="card">
                  
                        <div class="container">
                        <img src={Image1} alt="Avatar" />
                            <h4><b>Italy</b></h4>
                            <p>339$</p>
                            <p>Click to open for more information</p>
                            <br/>
                        </div>
                    </div>
                    <div class="card">
                  
                  <div class="container">
                  <img src={Image2} alt="Avatar" />
                      <h4><b>Netherland</b></h4>
                      <p>339$</p>
                        <p>Click to open for more information</p>
                      <br/>
                  </div>
              </div>
              <div class="card">
                  
                  <div class="container">
                  <img src={Image3} alt="Avatar" />
                      <h4><b>Russia</b></h4>
                      <p>339$</p>
                            <p>Click to open for more information</p>
                      <br/>
                  </div>
              </div>
                </Carousel>
                {renderItems()}
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(BestFrom);