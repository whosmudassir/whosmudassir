import React from "react";
import "../App.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projectsList = [
    {
      name: "WhatsApp clone",
      date: "May 5, 2021",
      info: "A WhatsApp clone for group chats",
      tech: "React and Firebase",
      demoLink: "https://mudassir-chatter.web.app/",
      codeLink: "https://github.com/whosmudassir/chatter-app",
    },
    {
      name: "EverNote clone",
      date: "April 23, 2021",
      info: "A EverNote clone",
      tech: "React and Firebase",
      demoLink: "https://mudassir-evernote.web.app/",
      codeLink: "https://github.com/whosmudassir/evernote-app",
    },
    {
      name: "Instagram clone",
      date: "April 21, 2021",
      info: "A Instagram clone to share photos",
      tech: "React and Firebase",
      demoLink: "https://mudassir-firegram.web.app/",
      codeLink: "https://github.com/whosmudassir/picsgram-app",
    },
    {
      name: "Facebook Clone",
      date: "July 19, 2021",
      info: "A fackbook clone where you post along with GIFs",
      tech: "React and Giphy API",
      demoLink: "https://csb-yesws.netlify.app/",
      codeLink: "https://github.com/whosmudassir/fb-clone",
    },
    {
      name: "MovieBox App",
      date: "May 7, 2021",
      info: "Scroll down the lastest and trending movies in MovieBox app",
      tech: "React and MovieDB API",
      demoLink: "https://mudassir-moviebox.netlify.app/",
      codeLink: "https://github.com/whosmudassir/moviebox-app",
    },
    {
      name: "Cocktail World",
      date: "May 17, 2021",
      info: "Get to know more about your favourite cocktails here",
      tech: "React and CocktailDB API",
      demoLink: "https://mudassir-cocktails.netlify.app/",
      codeLink: "https://github.com/whosmudassir/cocktail-db",
    },

    {
      name: "To-Do List",
      date: "April 17, 2021",
      info: "A simple to-do list",
      tech: "React and Firebase",
      demoLink: "https://43ft5.csb.app/",
      codeLink: "https://codesandbox.io/s/todo-final-43ft5",
    },
    {
      name: "My Movie Recommendations",
      date: "April 16, 2021",
      info: "A list of movies i recommend",
      tech: "React",
      demoLink: "https://4c2uv.csb.app/",
      codeLink: "https://github.com/deadsoulartist/my-movie-recommendations",
    },
    {
      name: "Emoji Meaning",
      date: "April 16, 2021",
      info: "Know the real meaning behind confusing emojis",
      tech: "React",
      demoLink: "https://j3xfl.csb.app/",
      codeLink:
        "https://codesandbox.io/s/emoji-meaning-app-j3xfl?file=/src/App.js:355-371",
    },
    {
      name: "Pirate Language Translator",
      date: "April 16, 2021",
      info: "Talk like Jack Sparrow with this simple English to Pirate language translator",
      tech: "Pirate API",
      demoLink: "https://mypiratetranslator.netlify.app/",
      codeLink: "https://github.com/whosmudassir/pirate-translator",
    },
    {
      name: "Banana Language Translator",
      date: "April 16, 2021",
      info: "Communicate with minions with this simple English to Banana language translator",
      tech: "Minion API",
      demoLink: "https://myminionlanguagetranslator.netlify.app/",
      codeLink: "https://github.com/deadsoulartist/banana-translator",
    },
    {
      name: "Spider-Man Quiz",
      date: "April 14, 2021",
      info: "A CLI app, where you play a small quiz game about Spider-Man",
      tech: "NodeJS",
      demoLink:
        "https://replit.com/@deadsoulartist/SpiderManQuiz?embed=1&output=1#index.js",
      codeLink: "https://github.com/whosmudassir/Spider-Man-Quiz",
    },
    {
      name: "How Well Do You Know Me?",
      date: "April 14, 2021",
      info: "A CLI app, where you answer in - yes or no",
      tech: "NodeJS",
      demoLink:
        "https://replit.com/@deadsoulartist/howWellDoYouKnowMe?embed=1&output=1/",
      codeLink: "https://github.com/whosmudassir/how-well-do-you-know-me",
    },
    {
      name: "Guess The Number",
      date: "March 29, 2021",
      info: "A game where you win by guessing the secret number thats between 1-10 in 5 chances",
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
