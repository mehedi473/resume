import React from "react";
import heroImg from "../../public/images/hero.jpg";
import SocialMenu from "./SocialMenu";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between items-center gap-4 md:gap-8">
            <div
              className="order-2 md:order-1 flex flex-col md:justify-start justify-center md:items-start items-center  space-y-4 text-center md:text-left">
              <span className="font-bold bg-m-yellow p-4 py-2 rounded-full rounded-bl-none">
                Hello I'm
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-roboto">
                Mehedi Hassan Miraj
              </h1>
              <h4 className="text-xl md:text-2xl font-bold font-roboto">
                Front End Developer
              </h4>
              <p className="font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
              <SocialMenu />
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <img
                className="max-w-3/5 max-h-3/5 w-[400px] h-[400px] text-center object-cover border-[1rem] rounded-full border-slate-300"
                src={heroImg}
                alt="heroImg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
