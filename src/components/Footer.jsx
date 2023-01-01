import React from "react";
import SocialMenu from "./SocialMenu";

const year = () => {
  const date = new Date()
  return(date.getFullYear())
}
const Footer = () => {
    return (
      <>
        <footer className="pb-8 dark:bg-gray-700 dark:text-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 text-center md:text-left justify-center items-center gap-4">
            <p>
              All right reserved <span className="text-m-pink dark:text-m-yellow/90 cursor-pointer">Mehedi Hassan Miraj</span> @ {year()}
            </p>
            <SocialMenu />
          </div>
        </footer>
      </>
    );
};

export default Footer;
