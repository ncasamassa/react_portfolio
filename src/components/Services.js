// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div classname="container px-4 py-5" id="services">
        <h2 classname="pb-2 border-bottom text-center">What I can do for you</h2>
        <div classname="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div classname="feature col">
            <div classname="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg classname="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
            </div>
            <h3 classname="fs-2 text-body-emphasis">HTML Development</h3>
            <p>I can take your dream of what you want your webpage to be, and make it a reality, so your customers can easily access it.</p>
          </div>
          <div classname="feature col">
            <div classname="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg classname="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>
            </div>
            <h3 classname="fs-2 text-body-emphasis">Javascript</h3>
            <p>I can both build and examine coding to streamline functionality and aid in debugging.</p>
          </div>
          <div classname="feature col">
            <div classname="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg classname="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
            </div>
            <h3 classname="fs-2 text-body-emphasis">Some Future Thing</h3>
            <p>This is where I'll put the thing I learn later in class that I don't realize exists yet.</p>
          </div>
        </div>
      </div>
  );
};

export default Services;
