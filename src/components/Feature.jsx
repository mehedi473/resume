import React from "react";
import SectionTitle from "./SectionTitle";

// featured posts
const featuredPosts = [
  {
    num: 1,
    img: "images/b-1.png",
    title: "A life without the daily traffic jams",
    date: " 24.11.19",
    author: "Mehedi",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    btn: "Read More",
    icon: "fa-solid fa-arrow-right",
  },
  {
    num: 2,
    img: "images/b-2.png",
    title: "A life without the daily traffic jams",
    date: " 24.11.19",
    author: "Hassan",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    btn: "Read More",
    icon: "fa-solid fa-arrow-right",
  },
  {
    num: 3,
    img: "images/b-3.png",
    title: "A life without the daily traffic jams",
    date: " 24.11.19",
    author: "Hassan",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    btn: "Read More",
    icon: "fa-solid fa-arrow-right",
  },
];

const Feature = () => {
    return (
      <>
        <section>
          <div className="container">
            {/* section title */}
            <SectionTitle title="Featured Posts" center='text-center' />
            {/* featured all posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
              {featuredPosts.map((curr) => {
                return (
                  <>
                    <div
                      key={curr.num}
                      className="bg-slate-300 dark:bg-[#1E1E25] rounded-bl-xl rounded-br-xl">
                      <img
                        className="w-full h-auto object-cover"
                        src={curr.img}
                        alt="fimg"
                      />
                      <div className="flex flex-col justify-start items-start space-y-3 px-4 pb-6 mt-4 opacity-90">
                        <h1 className="text-2xl md:text-3xl font-roboto font-bold text-m-pink dark:text-m-yellow transition-colors hover:text-m-pink">
                          {curr.title}
                        </h1>
                        <p className="font-semibold">
                          Post On{" "}
                          <span className="text-m-pink dark:text-m-yellow">{curr.date} </span>
                          By{" "}
                          <span className="text-m-pink dark:text-m-yellow"> {curr.author}</span>
                        </p>
                        <p>{curr.desc}</p>
                        <a href="#">
                          <button className="text-m-pink dark:text-m-yellow transition-colors hover:text-m-pink group">
                            {curr.btn}
                            <i
                              class={`${curr.icon} transition-all group-hover:rotate-90`}></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
};

export default Feature;
