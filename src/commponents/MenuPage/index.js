import React, { useEffect } from "react";
import "./index.css";
import { loadAllMenuItems } from "../../actions/menuItems";
import MenuItems from "./MenuItems";
import Footer from "../Footer/index";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import drinkImg from "./image/europe.png";
import startImg from "./image/asia.jpg";
import mainImg from "./image/america.jpg";

function MenuPage({ menuItems }) {
  const stableDispatch = useDispatch();

  useEffect(() => {
    stableDispatch(loadAllMenuItems("offer"));
  }, [stableDispatch]);

  function renderItemsByTag(tag) {
    const list = menuItems.filter((item) => item.tag === tag);
    return list.map((item, i) => {
      return <MenuItems key={i} item={item} />;
    });
  }

  return (
    <>
      <div>
        <div className="menuContainerImg">
          {" "}
          <div className="overlayMenuPhoto">
            <h2>Our special offers</h2>
            <h1>DISCOVER THE WORLD</h1>
          </div>
        </div>

        <div className="ui stackable four column grid menuPageStyleContainer">
          <div className="menuLandingText">
            <h2>Challenging yourself</h2>
            <h1>Expanding your perspective</h1>
            <div className="menuParagrph">
              <p>
                Getting away from home gives you the opportunity to reflect on your life. You have the needed time and space to let your mind wander and take stock. Traveling is one of the best ways to learn more about yourself. Every day traveling brings a new set of issues and opportunities. The way you handle those also gives you insight into who you are. You’ll come home knowing yourself better, and with a fresh perspective on what you want out of life. The experience will change your life.
              </p>
            </div>
          </div>
          <div className="menuText">
            <div className="drinksPhoto">
              <img alt="drink" src={drinkImg} />
            </div>
            <h4>EUROPE</h4>
          </div>
          <div className="renderContainer">{renderItemsByTag("drinks")}</div>
          <div className="menuLandingText">
            <h2>For start</h2>
            <h1>Italy, France, Spain</h1>
          </div>
          <div className="menuText">
            <div className="drinksPhoto">
              <img alt="drink" src={startImg} />
            </div>
            <h4>ASIA</h4>
          </div>
          <div className="renderContainer">
            {renderItemsByTag("appetizers")}
          </div>
          <div className="menuLandingText">
            <h2>Than</h2>
            <h1>Japan,China,Russia</h1>
          </div>
          <div className="menuText">
            <div className="drinksPhoto">
              <img alt="drink" src={mainImg} />
            </div>
            <h4>AMERICA</h4>
            <div className="menuLandingText">
              <h2>And finaly</h2>
              <h1>USA,Mexico,Brazil</h1>
            </div>
          </div>
          <div className="renderContainer">{renderItemsByTag("ala_carte")}</div>
        </div>
      </div>


    </>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(MenuPage);
