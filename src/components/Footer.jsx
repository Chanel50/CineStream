import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* FONT AWESOME */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* GOOGLE FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet" />

      <div className="footer">
        <div className="row">
          <a href="/Notfaund"><i className="fa fa-facebook"></i></a>
          <a href="/Notfaund"><i className="fa fa-instagram"></i></a>
          <a href="/Notfaund"><i className="fa fa-youtube"></i></a>
          <a href="/Notfaund"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="row">
          <ul>
            <li><a href="/Notfaund">Contactez nous</a></li>
            <li><a href="/Notfaund">Nos Services</a></li>
            <li><a href="/Notfaund">Privacy Policy</a></li>
            <li><a href="/Notfaund">Terms &amp; Conditions</a></li>
            <li><a href="/Notfaund">Aide</a></li>
          </ul>
        </div>

        <div className="row">
          Copyright © 2023Inferno - All rights reserved ||
          Designed By: CHANEL
        </div>
      </div>
    </footer>
  );
}
