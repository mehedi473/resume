import React from "react";
import SectionTitle from "./SectionTitle";

// what i do
const whatsDo = [
  {
    num: 1,
    icon: "fa-solid fa-bullseye text-m-teal",
    title: "UI Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    num: 2,
    icon: "fa-solid fa-code text-m-pink",
    title: "UI Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    num: 3,
    icon: "fa-regular fa-object-ungroup text-m-yellow",
    title: "UI Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const whatIDo = () => {
    return (
      <>
        <section>
          <div className="container">
            {/* section title */}
            <SectionTitle title="What I Do" center="text-center" />
            {/* whats i do */}
            <div
              data-aos="fade-right"
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 my-8">
              {whatsDo.map((curr) => {
                return (
                  <>
                    <div
                      key={curr.num}
                      className="flex flex-col items-center md:items-start space-y-3 p-6 px-4 shadow-md bg-slate-300 dark:bg-[#1E1E25] rounded-md text-center md:text-left">
                      <i className={`${curr.icon} text-2xl`}></i>
                      <h4 className="text-xl md:text-2xl font-bold font-roboto">
                        {curr.title}
                      </h4>
                      <p className="font-roboto opacity-80 text-[15px]">
                        {curr.desc}
                      </p>
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

export default whatIDo;
