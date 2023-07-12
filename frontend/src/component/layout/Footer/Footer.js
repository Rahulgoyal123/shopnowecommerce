import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SHOPNOW.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; RAHUL GOYAL</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/rahul_goyal567/">Instagram</a>
        <a href="http://youtube.com/@rahulgoyal6665">Youtube</a>
        <a href="https://www.linkedin.com/in/rahul-goyal-7b097720a/">
          LinkdIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
