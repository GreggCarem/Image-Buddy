import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__h1">Image Buddy</h1>

      <div className="footer__links">
        <img
          className="footer__linkedin"
          src="/images/LinkedIn.png"
          alt="LinkedIn"
        />
        <img className="footer__github" src="/images/GitHub.png" alt="GitHub" />
      </div>
    </footer>
  );
}

export default Footer;
