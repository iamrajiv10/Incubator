import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="row">
          <div className="col">
            <img
              src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="logo"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              voluptas non ratione tempore id molestias quis. Numquam animi
              possimus dolore nisi modi consequuntur natus doloribus. Totam
              cumque laudantium voluptatum nobis?
            </p>
          </div> 
          <div className="col">
            <h3>Office</h3>
            <p>gali road</p>
            <p>West Champaran</p>
            <p>Bihar, PIN 845404</p>
            <p className="email-id">way2mayankshri@gmail.com</p>
            <h4>+91- 6234567891</h4>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Contect Us</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>NewsLetter</h3>
            <form>
              <i className="far" />
              <input type="email" placeholder="Enter Your email id" required />
              <button type="submit">Submit</button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook"> 👍 </i>
              <i className="fab fa-facebook"> 👍 </i>
              <i className="fab fa-facebook"> 👍 </i>
              <i className="fab fa-facebook"> 👍 </i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyRight">INCUBATOR ©2023- ALL RIGHT RESERVED</p>
      </footer>
    </div>
  );
};

export default Footer;
