import React from "react";

import SingleBlog from "./SingleBlog";

const Blogs = () => {
  let data = [
    {
      name: "5 Common CSS Mistakes To Avoid",
      date: "May 11, 2021",
      details:
        " Sharing some of the CSS mistakes I've done, so that you can avoid them",
      link: "https://whosmudassir.hashnode.dev/5-common-css-mistakes-to-avoid?guid=3216dced-2274-4b9f-bd9f-d7a690f5d112&deviceId=eb4438c5-ad15-469f-9227-b19c24d06f07",
    },

    {
      name: "blog 2",
      date: "39 jun",
      details: "this is a blog 2",
      link: "link to blog 2",
    },
  ];

  return (
    <div>
      <header>
        <h1>
          <span>/</span>blogs :
        </h1>
      </header>

      <section>
        {data.map((data) => {
          return (
            <SingleBlog
              name={data.name}
              date={data.date}
              details={data.details}
              link={data.link}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
