import React from "react";
import { Fade, Zoom } from "react-reveal";
//import for the Zoom effect component

function Landing() {
  return (
    <div className="landing" id="Home">
      <div className="landing__left">
        <div className="landing__left__content">
          <Fade top>
            <h1 className="landing__left__content__title">
              <span>We Build with AI's</span> While You Rest
            </h1>
          </Fade>
          <Fade bottom>
            <p className="landing__left__content__description">
              Here at Hange Artificial Intelligence - Builder, we provide
              services such as building AI powered homes, state of the art as
              you desire. We can also personalize anything you want. We have a
              wide range of AI's that can do anything from automating your house
              processes to making you a cup of coffee. We have the best AI's in
              the world and we are here to help you.
            </p>
          </Fade>
          {/* directions for fade can be: up, bottom, left, right, big */}
          <div className="landing__left__content__button">
            <button className="landing__left__content__button__getAQuote">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* add zoom animation to the site landing image */}
      <div className="landing__right">
        <Zoom>
          <div className=" landing__right__content">
            <img src={"/ai.png"} alt="AI" className="landing__right__image" />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Landing;
