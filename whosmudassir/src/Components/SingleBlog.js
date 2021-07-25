import React from "react";
import "../App.css";
const SingleBlog = ({ name, date, details, link }) => {
  return (
    <div>
      {/* <!-- section --> */}
      <section className="sec-01">
        <h2>{name}</h2>
        <br />
        <small>{date}</small>
        <p>{details}</p>
        <p>
          <a className="links" href={link} target="_blank">
            Read blog
          </a>
        </p>
      </section>
      <hr />
    </div>
  );
};

export default SingleBlog;
