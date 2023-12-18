// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div classname="container">
        <footer classname="py-3 my-4">
          <ul classname="nav justify-content-center border-bottom pb-3 mb-3">
            <li classname="nav-item"><a href="#home" classname="nav-link px-2 text-body-secondary">Home</a></li>
            <li classname="nav-item"><a href="#experience" classname="nav-link px-2 text-body-secondary">Experience</a></li>
            <li classname="nav-item"><a href="#projects" classname="nav-link px-2 text-body-secondary">Projects</a></li>
            <li classname="nav-item"><a href="#services" classname="nav-link px-2 text-body-secondary">Services</a></li>
          </ul>
          <p classname="text-center text-body-secondary">© 2023 The Nick Company</p>
        </footer>
      </div>
  );
};

export default Footer;
