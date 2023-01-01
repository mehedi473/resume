import React, {useState} from "react";
import SectionTitle from "./SectionTitle";

// portfolio gallery api
const portfolioGallery = [
  {
    id: 1,
    img: "images/g1.jpg",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Web Design",
  },
  {
    id: 2,
    img: "images/g2.png",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Branding",
  },
  {
    id: 3,
    img: "images/g3.png",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Photography",
  },
  {
    id: 4,
    img: "images/g4.png",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Mockups",
  },
  {
    id: 5,
    img: "images/g5.png",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Photography",
  },
  {
    id: 6,
    img: "images/g6.png",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Web Design",
  },
  {
    id: 7,
    img: "images/g7.jpg",
    icon: "fa-solid fa-magnifying-glass",
    title: "CREATIVE DESIGN",
    category: "Graphics Design",
  },
];

// filter unic category value
const menuCategory = ['all', ...new Set(portfolioGallery.map((cate) => { return cate.category }))]

const Portfolio = () => {
 const [gallery, setGallery] = useState(portfolioGallery);
  const filterGallery = (category) => {
    if (category === "all") {
      setGallery(portfolioGallery);
      return;
    }
    const filterCategory = portfolioGallery.filter((elem) => {
      return elem.category === category;
    });
    
    setGallery(filterCategory);
  };
  
    return (
      <>
        <section>
          <div className="container">
            {/* section title */}
            <SectionTitle title="Recent Portfolio" center="text-center" />
            {/* portfolio items */}
            <ul className="flex flex-wrap justify-center items-center">
              {menuCategory.map((cate, id) => {
                return (
                  <>
                    <li
                      onClick={() => filterGallery(cate)}
                      key={id}
                      className="m-4 font-roboto font-semibold cursor-pointer p-4 py-2 rounded-full rounded-bl-none transition-colors bg-m-pink dark:bg-m-yellow">
                      {cate}
                    </li>
                  </>
                );
              })}
            </ul>
            {/* all portfolio */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 my-4">
              {gallery.map((curr) => {
                return (
                  <>
                    <div
                      key={curr.id}
                      className="relative rounded-lg overflow-hidden group">
                      <img
                        className="w-full h-full object-cover"
                        src={curr.img}
                        alt=""
                      />
                      <div className="bg-m-pink/80 dark:bg-m-yellow text-red w-full h-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center text-center transition-opacity opacity-0 group-hover:opacity-100">
                        <i class={`${curr.icon} md:text-xl font-bold`}></i>
                        <h4 className="text-base md:text-xl font-roboto font-bold uppercase">
                          {curr.title}
                        </h4>
                        <span className="font-semibold uppercase">
                          {curr.category}
                        </span>
                      </div>
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

export default Portfolio;
