import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer_headtext">Contact Us</h1>
        <p className="p__opensans">Address</p>
        <p className="p__opensans">phone number</p>
        <p className="p__opensans">phone number 2</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">
          "The best way to find yourself is lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon_img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer_headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
