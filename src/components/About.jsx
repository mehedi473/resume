import React from "react";
import aboutMe from "../../public/images/ab-img.png";
import SectionTitle from "./SectionTitle";

const skills = ['html', 'css', 'bootstrap', 'tailwind css', 'sass', 'javascript', 'react', 'wordpress', 'photoshop']

const About = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between items-center gap-4 md:gap-8 ">
              {/* about image */}
              <div>
                <img src={aboutMe} alt="aboutMe" />
              </div>
              {/* about info */}
              <div className="flex flex-col md:justify-start justify-center md:items-start items-center  space-y-4 text-center md:text-left">
                {/* section title */}
                <SectionTitle title="About Me" />
                <p>
                  Hello, I’m Mehedi Hassan Miraj, web-developer based on Dhaka.
                  I have rich experience in web site design & building and
                  customization. Also I am good at
                </p>
                {/* about skills */}
                <ul className="flex flex-wrap justify-center md:justify-start items-center">
                  {skills.map((curr, ind) => {
                    return (
                      <>
                        <li
                          key={ind}
                          className="border border-m-yellow p-3 rounded-md shadow py-1 m-3 cursor-pointer transition-colors hover:border-m-pink hover:text-m-pink">
                          {curr}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default About;
