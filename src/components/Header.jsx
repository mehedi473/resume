import React, {useState, useEffect} from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from 'react-icons/ci';

const menuItems = [
  "Home",
  "About",
  "Skills",
  "Experiences",
  "Portfolio",
  "Pricing",
  'Blog',
  'Contact'
];


const Header = () => {
  const [menuIcon, setMenuicon] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const [darkIcon, setDarkIcon] = useState(false);
  // stick menu
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    setStickyClass(
      windowHeight > 250
        ? "fixed top-0 left-0 w-full h-auto shadow-m-black shadow-sm bg-white z-[999]"
        : setStickyClass("")
    );
  };
  // scrolling effect
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  // add class in body tag
  const addClass = () => {
    setDarkIcon(!darkIcon);
    let body = document.querySelector('body')
    body.classList.toggle('dark');
  };
  return (
    <>
      <header className={`dark:bg-gray-700 dark:text-white ${stickyClass}`}>
        <div className="container">
          <div className="flex justify-between items-center py-6">
            {/* logo */}
            <a href="#">
              <span className="text-2xl font-roboto font-bold uppercase shadow transition-colors hover:bg-m-yellow p-4 py-2 rounded-full rounded-bl-none">
                Mehedi
              </span>
            </a>
            {/* button */}
            <div className="flex justify-between items-center space-x-2">
              {/* dark mode */}
              <button
                className="text-3xl transition-colors hover:text-m-yellow"
                onClick={addClass}>
                {darkIcon ? <CiLight /> : <MdDarkMode />}
              </button>
              {/* bars */}
              <button
                className="text-3xl lg:hidden transition-colors hover:text-m-yellow"
                onClick={() => {
                  setMenuicon(!menuIcon);
                }}>
                {menuIcon ? <CgClose /> : <CgMenu />}
              </button>
            </div>
            {/* menu */}
            <ul
              className={
                menuIcon
                  ? "fixed top-0 left-0 p-8 z-10 bg-m-pink w-2/3 h-screen flex-col space-y-5"
                  : "hidden lg:flex justify-between items-center space-x-3"
              }>
              {menuItems.map((curr, ind) => {
                return (
                  <li key={ind}>
                    <a
                      onClick={() => {
                        setMenuicon(false);
                      }}
                      className="m-3 font-semibold transition-colors hover:text-m-yellow text-[18px]"
                      href="#">
                      {curr}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
