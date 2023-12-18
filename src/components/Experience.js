// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div classname="card text-center" id="experience">
        <div classname="px-4 py-5 my-5 text-center">
          <h1 classname="display-5 fw-bold text-body-emphasis">Hi, I'm Nick</h1>
          <div classname="col-lg-6 mx-auto">
            <p classname="lead mb-4">
                "I have over a decade of experience solving complex problems in high stress environments.  I want to work with you to resolve all of your coding issues."
            </p>
            <div classname="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" classname="btn btn-primary btn-lg px-4 gap-3">
                  <a id="butt2" target="_blank" href="https://google.com">My Resume</a>
                  </button>
                <button type="button" id="butt1" classname="btn btn-outline-secondary btn-lg px-4">Contact</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experience;
