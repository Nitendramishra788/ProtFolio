import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <hr />

      <div className="container py-4">

        <div className="row text-center text-md-start">

          {/* LOGO */}
          <div className="col-md-3 mb-4">
            <img src="/image/logo.png" alt="logo" className="footer-logo" />
            <p className="footer-text">
              Building modern web experiences 🚀
            </p>
          </div>

          {/* LINKS */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <p><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></p>
            <p><a href="https://www.instagram.com/" target="_blank">Instagram</a></p>
            <p><a href="https://github.com/" target="_blank">GitHub</a></p>
          </div>

          {/* SERVICES */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Services</h5>
            <p className="footer-text">Web Dev</p>
            <p className="footer-text">UI Design</p>
            <p className="footer-text">Backend</p>
          </div>

          {/* CONTACT */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Contact</h5>
            <p className="footer-text">Email: nitendramishra788@gmail.com</p>
            <p className="footer-text">Phone: +91 9956168757</p>
          </div>

        </div>

        <hr />

        <div className="text-center footer-bottom">
          © 2026 Nitendra Nit Mishra | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;