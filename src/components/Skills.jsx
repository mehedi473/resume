import React from "react";
import SectionTitle from "./SectionTitle";

// technical skills
const technicalSkills = [
  {
    num: 1,
    name: "HTML",
    persentence: "86%",
  },
  {
    num: 2,
    name: "CSS",
    persentence: "70%",
  },
  {
    num: 3,
    name: "JavaScript",
    persentence: "65%",
  },
  {
    num: 4,
    name: "Bootstrap",
    persentence: "70%",
  },
  {
    num: 5,
    name: "Tailwind CSS",
    persentence: "82%",
  },
  {
    num: 6,
    name: "jQuery",
    persentence: "78%",
  },
  {
    num: 7,
    name: "React",
    persentence: "50%",
  },
];
// professional skills
const professionalSkills = [
  {
    num: 1,
    persentence: "58%",
    name: "Communication",
  },
  {
    num: 2,
    persentence: "89%",
    name: "Team Work",
  },
  {
    num: 3,
    persentence: "78%",
    name: "Project Management",
  },
  {
    num: 4,
    persentence: "90%",
    name: "Creativity",
  },
];

const Skills = () => {
  return (
    <>
      {/* Skills */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {/* technical skills */}
            <div>
              {/* section title */}
              <SectionTitle title="Technical Skills" center="text-center" />
              {/* technical skills */}
              <div className="font-roboto text-[15px] font-semibold mt-8">
                {technicalSkills.map((curr) => {
                  return (
                    <>
                      <div key={curr.num} className="my-4">
                        <div className="flex justify-between items-center">
                          <span>{curr.name}</span>
                          <span>{curr.persentence}</span>
                        </div>
                        <div className="relative w-full h-2 bg-m-pink dark:bg-m-yellow rounded-full mt-4">
                          <div
                            className={`absolute top-2/4 left-0 -translate-y-2/4 w-[${curr.persentence}] h-2 bg-m-yellow dark:bg-m-pink rounded-full`}></div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {/* professional skills */}
            <div>
              {/* section title */}
              <SectionTitle title="Professional Skills" center='text-center' />
              {/* professional skills */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 font-roboto text-[15px] font-semibold mt-8">
                {professionalSkills.map((curr) => {
                  return (
                    <>
                      <div
                        key={curr.num}
                        className="relative w-[170px] h-[170px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] mx-auto border-4 border-m-pink dark:border-m-yellow rounded-full my-8">
                        <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-xl">
                          {curr.persentence}
                        </span>
                        <h4 className="absolute -bottom-12 left-2/4 -translate-x-2/4 text-center">
                          {curr.name}
                        </h4>
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
}
export default Skills;
