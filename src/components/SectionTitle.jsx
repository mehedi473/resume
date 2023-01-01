import React from "react";

const SectionTitle = (props) => {
  return (
    <h4 className={`text-2xl md:text-3xl font-bold font-roboto text-left text-m-pink dark:text-m-yellow ${props.center}`}>
      {props.title}
    </h4>
  );
};

export default SectionTitle;
