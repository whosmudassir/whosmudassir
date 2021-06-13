import React from "react";
import "../App.css";
const SingleProject = ({ name, date, info, tech, demoLink, codeLink }) => {
  return (
    <div>
      <section>
        <h2>
          <span>• </span>
          {name}
        </h2>
        <br />
        <small>{date}</small>
        <p>
          {info}, built with
          <span> {tech}</span>
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
