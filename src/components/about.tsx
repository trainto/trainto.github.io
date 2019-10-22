import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [active, setActive] = useState("Skills");

  return (
    <section className="py-5" id="about">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block border-under">
            <h2 className="text-center">About</h2>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === "Skills" ? "font-weight-bold" : "text-muted"
            }`}
            onClick={() => setActive("Skills")}
          >
            Skills
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === "Careers" ? "font-weight-bold" : "text-muted"
            }`}
            onClick={() => setActive("Careers")}
          >
            Careers
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === "Education" ? "font-weight-bold" : "text-muted"
            }`}
            onClick={() => setActive("Education")}
          >
            Education
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === "Papers" ? "font-weight-bold" : "text-muted"
            }`}
            onClick={() => setActive("Papers")}
          >
            Papers
          </div>
        </div>
      </div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
    </section>
  );
};

export default About;
