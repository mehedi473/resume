import React from "react";
import SectionTitle from "./SectionTitle";

// priceing table
const priceTable = [
  {
    num: 1,
    icon: "fa-solid fa-calendar-days",
    title: "Full-time work",
    subTitle: "I am available for full time",
    price: "$1500",
    list: [
      "Web Development",
      "Advetising",
      "Game Development",
      "Music Writing",
    ],
    btn: "Hire Me",
  },
  {
    num: 2,
    icon: "fa-regular fa-file",
    title: "Fixed Price Project",
    subTitle: "I am available for full time",
    price: "$1500",
    list: [
      "Web Development",
      "Advetising",
      "Game Development",
      "Music Writing",
    ],
    btn: "Hire Me",
  },
  {
    num: 3,
    icon: "fa-solid fa-hourglass-start",
    title: "Hourley work",
    subTitle: "I am available for full time",
    price: "$1500",
    list: [
      "Web Development",
      "Advetising",
      "Game Development",
      "Music Writing",
    ],
    btn: "Hire Me",
  },
];

const Price = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* section title */}
          <SectionTitle title="Pricing Table" center="text-center" />
          {/* all table */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
            {priceTable.map((curr) => {
              return (
                <>
                  <div
                    data-aos="zoom-in-up"
                    className="flex flex-col justify-center items-center space-y-4 text-center bg-slate-300 dark:bg-[#1E1E25] p-4 py-8 shadow rounded-md">
                    <i
                      className={`${curr.icon} text-3xl md:text-4xl text-m-pink dark:text-m-yellow`}></i>
                    <h3 className="font-roboto font-bold text-3xl md:text-4xl">
                      {curr.title}
                    </h3>
                    <h5>{curr.subTitle}</h5>
                    <span className="text-m-pink dark:text-m-yellow text-2xl md:text-3xl font-roboto font-bold">
                      {curr.price}
                    </span>
                    <ul className="flex flex-col justify-center items-center space-y-2">
                      {curr.list.map((curr) => {
                        return (
                          <>
                            <li>{curr}</li>
                          </>
                        );
                      })}
                    </ul>
                    <button className="p-4 py-2 font-roboto font-semibold rounded-full transition-all bg-m-pink dark:bg-m-yellow">
                      {curr.btn}
                    </button>
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

export default Price;
