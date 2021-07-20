import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      {/* <!-- header --> */}
      <header>
        <h1>Hey, I'm Mudassir Ahmed Khan!</h1>
      </header>

      {/* body */}
      <h2>Front End Developer</h2>

      {/* <!-- footer --> */}
      <footer>
        <ul class="socials">
          <li>
            Made with <span>React.js</span> • View on <span>Github</span> • Find
            me on <span>Twitter</span>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
