import React from "react";
import SectionTitle from "./SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Grid } from "swiper";



// client reviews
const clientReviews = [
  {
    num: 1,
    img: "images/c-1.png",
    quote:"Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality",
    name: "Mehedi",
    position: "CEO",
  },
  {
    num: 2,
    img: "images/c-1.png",
    quote:"Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality",
    name: "Hassan",
    position: "Author.Inc",
  },
  {
    num: 3,
    img: "images/c-1.png",
    quote:"Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality",
    name: "Miraj",
    position: "Front End Developer",
  },
];
const Client = () => {
    return (
      <>
        <section>
          <div className="container">
            {/* section title */}
            <SectionTitle title="Client Reviews" center="text-center" />
            {/* testimonial client slider with swiper */}
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper mt-8">
              {clientReviews.map((curr) => {
                return (
                  <>
                    <SwiperSlide className="bg-slate-300 dark:bg-[#1E1E25] p-6 flex flex-col justify-center items-center text-center space-y-3 rounded-lg py-8 pb-10">
                      <img
                        className="border-4 border-m-pink dark:border-m-yellow rounded-full w-auto h-auto object-cover"
                        src={curr.img}
                        alt=""
                      />
                      <p className="text-[15px] opacity-90">
                        <i class="fa-solid fa-quote-left text-m-pink dark:text-m-yellow mr-2"></i>
                        {curr.quote}
                        <i class="fa-solid fa-quote-right text-m-pink dark:text-m-yellow ml-2"></i>
                      </p>
                      <h4 className="font-roboto font-bold text-xl md:text-2xl text-m-pink dark:text-m-yellow">
                        {curr.name}
                      </h4>
                      <span className="font-semibold">{curr.position}</span>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </section>
      </>
    );
};

export default Client;
