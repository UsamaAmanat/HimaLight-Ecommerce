import * as Route from "@/constants/routes";
import logo from "@/images/logo-full.png";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const { pathname } = useLocation();

  // Static pages where footer should always be visible
  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP,
    Route.FEATURED_PRODUCTS,
    Route.RECOMMENDED_PRODUCTS,
    Route.CHECKOUT_STEP_1,
    Route.CHECKOUT_STEP_2,
    Route.CHECKOUT_STEP_3,
    Route.SIGNIN,
    Route.SIGNUP,
    Route.FORGOT_PASSWORD,
  ];

  // Show footer if pathname matches a static route OR is a single product page
  const showFooter =
    visibleOnlyPath.includes(pathname) || pathname.startsWith("/product/");

  if (!showFooter) return null;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About & Logo */}
        <div className="footer-col footer-col-1">
          <img alt="HimaLight logo" className="footer-logo" src={logo} />
          <p className="footer-description">
            Discover authentic Himalayan salt lamps that transform your space
            into a sanctuary of warmth and wellness.
          </p>
          <div className="footer-social">
            <a href="#" title="Facebook">
              <FacebookOutlined />
            </a>
            <a href="#" title="Twitter">
              <TwitterOutlined />
            </a>
            <a href="#" title="Instagram">
              <InstagramOutlined />
            </a>
            <a href="#" title="LinkedIn">
              <LinkedinOutlined />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-col-2">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href={Route.HOME}>Home</a>
            </li>
            <li>
              <a href={Route.SHOP}>Shop</a>
            </li>
            <li>
              <a href={Route.FEATURED_PRODUCTS}>Featured</a>
            </li>
            <li>
              <a href={Route.RECOMMENDED_PRODUCTS}>Recommended</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-col footer-col-3">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#shipping">Shipping Info</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="footer-col footer-col-4">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#returns">Returns Policy</a>
            </li>
            <li>
              <a href="#warranty">Warranty</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy;&nbsp;
          {new Date().getFullYear()}
          &nbsp;HimaLight. All rights reserved.
        </p>
        <p className="footer-credit">
          Developed by&nbsp;
          <a
            href="https://www.linkedin.com/in/usama-amanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Usama Amanat
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
