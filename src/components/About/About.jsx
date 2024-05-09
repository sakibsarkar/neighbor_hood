import React from "react";
import AssentialIcon from "../../icon/AssentialIcon";
import HomeIcon from "../../icon/HomeIcon";
import LocationIcon from "../../icon/LocationIcon";
import "./index.css"
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-us-content-container">
      <div className="about-us-description-container">
        <div className="about-us-description-content-container"></div>
        <div className="about-us-headline">
          <div className="about-us-headline-text">
            Get the most out of your neighborhood with Neighborhood Node
          </div>
        </div>
        <div className="about-us-headline-description-container">
          <div className="about-us-headline-description">
            It&apos;s where communities come together to greet newcomers, exchange
            recommendations, and read the latest local news. Where neighbors
            support local businesses and get updates from public agencies. Where
            neighbors borrow tools and sell couches. It&apos;s how to get the most
            out of everything nearby. Welcome, neighbor.
          </div>
        </div>
      </div>
      <div className="three-icons-container">
        <div className="icon-container">
          <div className="individual-icon">
            <AssentialIcon />
          </div>
          <div className="icon-title">Essential</div>
          <p className="icon-description">
            Relevant news and information from neighbors, businesses, and public
            agencies in real time.
          </p>
        </div>
        <div className="icon-container">
          <div className="individual-icon">
            <LocationIcon />
          </div>
          <div className="icon-title">Local</div>
          <p className="icon-description">
            The only way to instantly connect to the people, businesses, and
            happenings near your home.
          </p>
        </div>
        <div className="icon-container">
          <div className="individual-icon">
            <HomeIcon />
          </div>
          <div className="icon-title">Trusted</div>
          <p className="icon-description">
            A secure environment where all neighbors are verified.
          </p>
        </div>
      </div>
      <div className="about-us-bottom-signup">
        <div className="about-us-bottom-signup-content">
          <div className="about-us-bottom-signup-content-header">
            Instantly connect with your neighborhood
          </div>
          <div className="about-us-bottom-signup-button-container">
            <div className="sub-about-us-bottom-signup-button-container">
              <button
                className="about-us-bottom-signup-button"
                type="button"
                onClick={scrollToTop}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
