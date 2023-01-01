import React from "react";
import SectionTitle from "./SectionTitle";

// education api 
const education = [
  {
    num: 1,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.The point of using Lorem Ipsum",
  },
  {
    num: 2,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    num: 3,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error praesentium ut ipsa perspiciatis illo et nostrum nam, aliquam ipsam illum. Animi minus ea tempora commodi obcaecati iusto dolor, possimus unde!",
  },
];

// work experiences api
const workExperiences = [
  {
    num: 1,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    res: "Responsibility :",
    list: ["Validate CSS", "Project Management"],
  },
  {
    num: 2,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    res: "Responsibility :",
    list: ["Validate CSS", "Project Management"],
  },
  {
    num: 3,
    title1: "Art & Multimedia From",
    title2: "Oxford University",
    year: "2005-2008",
    res: "Responsibility :",
    list: ["Validate CSS", "Project Management", 'web development'],
  },
];

const Experiences = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* education */}
              <div>
                {/* section title */}
                <SectionTitle title="Education" />
                {/* education info */}
                <div className="grid grid-cols-1 grid-rows-3 gap-4 md:gap-6 mt-10">
                  {education.map((curr) => {
                    return (
                      <>
                        <div
                          data-aos="fade-right"
                          key={curr.num}
                          className="bg-slate-300 dark:bg-[#1E1E25] p-6 flex flex-col space-y-3">
                          <h2 className="font-bold text-xl md:text-2xl font-roboto">
                            {curr.title1}
                            <span className="text-m-pink dark:text-m-yellow">{curr.title2}</span>
                          </h2>
                          <span className="text-m-pink dark:text-m-yellow font-semibold">
                            {curr.year}
                          </span>
                          <p className="font-semibold text-[15px]">
                            {curr.desc}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* work experiences */}
              <div>
                {/* section title */}
                <SectionTitle title="Work Experiences" />
                {/* work info */}
                <div className="grid grid-cols-1 grid-rows-3 gap-4 md:gap-6 mt-10">
                  {workExperiences.map((curr) => {
                    return (
                      <>
                        <div
                          data-aos="fade-left"
                          key={curr.num}
                          className="bg-slate-300 dark:bg-[#1E1E25] p-6 flex flex-col space-y-3">
                          <h2 className="font-bold text-xl md:text-2xl font-roboto">
                            {curr.title1}
                            <span className="text-m-pink dark:text-m-yellow">{curr.title2}</span>
                          </h2>
                          <span className="text-m-pink dark:text-m-yellow font-semibold">
                            {curr.year}
                          </span>
                          <h6 className="font-semibold text-xs">{curr.res}</h6>
                          <ul className="font-roboto text-[14px] list-disc">
                            {curr.list.map((curr) => {
                              return (
                                <>
                                  <li>{curr}</li>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Experiences;
