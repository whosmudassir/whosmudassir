import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div class="nav-wrap">
        <nav>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="check" />
          <label>
            <Link to="/">M</Link>
          </label>

          <ul class="navbar-content" data-theme={darkMode ? "dark" : "light"}>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/blogs">blogs</Link>
            </li>

            <li>
              <a href="https://github.com/whosmudassir/" target="_blank">
                github
              </a>
            </li>
          </ul>
          <button onClick={toggle}>
            <li>
              {darkMode ? (
                <i class="fas fa-sun"></i>
              ) : (
                <i class="fas fa-moon"></i>
              )}
            </li>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
