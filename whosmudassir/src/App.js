import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      {" "}
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
