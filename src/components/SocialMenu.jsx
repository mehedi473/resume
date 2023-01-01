import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaDownload } from "react-icons/fa";
import { AiFillGithub, AiOutlineMessage } from "react-icons/ai";
// social icons
const socialIcons = [
  { id: 1, iconLink: "https://www.facebook.com/", icon: <FaFacebookF /> },
  { id: 2, iconLink: "https://www.twitter.com/", icon: <FaTwitter /> },
  { id: 3, iconLink: "https://github.com/", icon: <AiFillGithub /> },
  { id: 4, iconLink: "https://dribbble.com/", icon: <FaDribbble /> },
  { id: 5, iconLink: "", icon: <AiOutlineMessage /> },
  { id: 6, iconLink: "", icon: <FaDownload /> },
];
const SocialMenu = () => {
  return (
    <ul className="flex justify-between items-center space-x-4">
      {socialIcons.map((curr, ind) => {
        return (
          <>
            <li
              className="p-4 rounded-full rounded-bl-none hover:bg-m-pink dark:hover:bg-m-yellow"
              key={ind}>
              <a href={curr.iconLink}>{curr.icon}</a>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SocialMenu;
