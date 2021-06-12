import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      {/* <!-- header --> */}
      <header>
        <h1>Hey, I'm Mudassir Ahmed Khan!</h1>
      </header>
      {/* <!-- section 13 --> */}
      <section>
        <h2>
          <span>• </span>Cocktail World
        </h2>
        <br />
        <small>May 17, 2021</small>
        <p>
          Get to know more about your favourite cocktails here, built with
          <span>React</span>
        </p>
        <p>
          <a
            class="links"
            href="https://mudassir-cocktails.netlify.app/"
            target="_blank"
          >
            Demo
          </a>
          <a
            class="links"
            href="https://github.com/whosmudassir/cocktail-db"
            target="_blank"
          >
            Code
          </a>
        </p>
      </section>
      <hr />

      {/* <!-- section 12 --> */}
      <section>
        <h2>
          <span>• </span>MovieBox App
        </h2>
        <br />
        <small>May 7, 2021</small>
        <p>
          Scroll down the lastest and trending movies in MovieBox app built with
          <span>React</span>
        </p>
        <p>
          <a
            class="links"
            href="https://mudassir-moviebox.netlify.app/"
            target="_blank"
          >
            Demo
          </a>
          <a
            class="links"
            href="https://github.com/deadsoulartist/moviebox-app"
            target="_blank"
          >
            Code
          </a>
        </p>
      </section>
      <hr />

      {/* <!-- section 11 --> */}
      <section>
        <h2>
          <span>• </span>Chatter App
        </h2>
        <br />
        <small>May 5, 2021</small>
        <p>
          A chat room app built with <span>React</span> and{" "}
          <span>Firebase</span>
        </p>

        <p>
          <a
            class="links"
            href="https://mudassir-chatter.web.app/"
            target="_blank"
          >
            Demo
          </a>

          <a
            class="links"
            href="https://github.com/deadsoulartist/chatter-app"
            target="_blank"
          >
            Code
          </a>
        </p>
      </section>
      <hr />

      {/* <!-- section 10 --> */}
      <section>
        <h2>
          <span>• </span>Evernote App
        </h2>
        <br />
        <small>April 23, 2021</small>
        <p>
          A note making app like evernote built with <span>React</span> and
          <span>Firebase</span>
        </p>
        <p>
          <a
            class="links"
            href="https://mudassir-evernote.web.app/"
            target="_blank"
          >
            Demo
          </a>
          <a
            class="links"
            href="https://github.com/deadsoulartist/evernote-app"
            target="_blank"
          >
            Code
          </a>
        </p>
      </section>
      <hr />

      {/* <!-- footer --> */}
      <footer>
        <ul class="socials">
          <li>
            Made with <span>React.js</span> • Hosted on <span>Netlify</span>
            View source on Github • Find me on <span>Twitter</span>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/in/mudassir-khan-08139a195"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/deadsoulartist" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/deadsoulartist/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
