import React from "react";
import "../App.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projectsList = [
    {
      name: "Pirate Language Translator",
      date: "April 16, 2021",
      info: "Talk like Jack Sparrow with this simple English to Pirate language translator.",
      tech: "Pirate API",
      demoLink: "https://mypiratetranslator.netlify.app/",
      codeLink: "https://github.com/whosmudassir/pirate-translator",
    },
    {
      name: "Banana Language Translator",
      date: "April 16, 2021",
      info: "Communicate with minions with this simple English to Banana language translator.",
      tech: "Minion API",
      demoLink: "https://myminionlanguagetranslator.netlify.app/",
      codeLink: "https://github.com/deadsoulartist/banana-translator",
    },
    {
      name: "Spider-Man Quiz",
      date: "April 14, 2021",
      info: "A CLI app, where you play a small quiz game about Spider-Man.",
      tech: "NodeJS",
      demoLink:
        "https://replit.com/@deadsoulartist/SpiderManQuiz?embed=1&output=1#index.js",
      codeLink: "https://github.com/whosmudassir/Spider-Man-Quiz",
    },
    {
      name: "How Well Do You Know Me?",
      date: "April 14, 2021",
      info: "A CLI app, where you answer in - yes or no.",
      tech: "NodeJS",
      demoLink:
        "https://replit.com/@deadsoulartist/howWellDoYouKnowMe?embed=1&output=1/",
      codeLink: "https://github.com/whosmudassir/how-well-do-you-know-me",
    },
    {
      name: "Guess The Number",
      date: "March 29, 2021",
      info: "A game where you win by guessing the secret number thats between 1-10 in 5 chances.",
      tech: "JavaScript",
      demoLink: "https://mudassirguessthenumber.netlify.app/",
      codeLink: "https://github.com/whosmudassir/Guess-the-number",
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
