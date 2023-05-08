import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1>We would love to fulfill your Digital Goals</h1><br/>
      <p>Let’s join forces to drive awe-inspiring results.</p>
      <p className="text-center mt-3">
        <Link to="/about">About </Link>|<Link to="/contact">Contact </Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <h1 className="text-center">All Right Reserved &copy; Mayank</h1>
    </div>
  );
};

export default Footer;
