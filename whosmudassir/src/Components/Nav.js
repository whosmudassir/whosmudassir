import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
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

          <ul class="navbar-content">
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/blogs">blogs</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
