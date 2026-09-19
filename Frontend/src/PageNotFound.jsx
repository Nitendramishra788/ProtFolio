import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found">

      {/* Illustration */}
      <div className="not-found-image">
        <img
          src="/image/pageNotFound.png"
          alt="Page not found"
        />
      </div>

      {/* Content */}
      <div className="not-found-content">

        <div className="error-code">
          4<span>0</span>4
        </div>

        <h1>Oops! The Page Escaped 😶‍🌫️</h1>

        <p>
          Looks like this page went on a coffee break.
          We searched everywhere, but couldn't find it.
        </p>

        <p className="developer-error">
          Error: Page not found <br />
          Status: Still searching... <br />
          Developer: Probably blaming the router 🤨
        </p>

        <Link to="/" className="home-button">
          &lt; Back to Home
        </Link>

      </div>

    </div>
  );
}

export default PageNotFound;