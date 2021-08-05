import React from "react";
import "../App.css";
const SingleProject = ({ name, date, info, tech, demoLink, codeLink }) => {
  return (
    <div>
      <section className="single-block">
        <h2>{name}</h2>
        <br />
        <small>{date}</small>
        <p className="info-para">
          {info}, built using {tech}
        </p>
        <p>
          <a class="links" href={demoLink} target="_blank">
            Demo
          </a>
          <a class="links" href={codeLink} target="_blank">
            Code
          </a>
        </p>
      </section>
      <hr />
    </div>
  );
};

export default SingleProject;
