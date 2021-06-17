import React from "react";
import "../App.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projectsList = [
    {
      name: "pro1",
      date: "25252",
      info: "mmmmmmmmmm",
      tech: "react",
      demoLink: "111",
      codeLink: "2222",
    },
    {
      name: "pro1",
      date: "25252",
      info: "mmmmmmmmmm",
      tech: "react",
      demoLink: "111",
      codeLink: "2222",
    },
    {
      name: "pro1",
      date: "25252",
      info: "mmmmmmmmmm",
      tech: "react",
      demoLink: "111",
      codeLink: "2222",
    },
  ];

  return (
    <div>
      {/* <!-- header --> */}
      <header>
        <h1>
          <span>/</span>projects :
        </h1>
      </header>

      {/* <!-- section --> */}
      <section>
        {projectsList.map((data) => {
          return (
            <SingleProject
              name={data.name}
              date={data.date}
              info={data.info}
              tech={data.tech}
              demoLink={data.demoLink}
              codeLink={data.codeLink}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
