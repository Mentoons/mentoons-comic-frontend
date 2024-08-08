import React from "react";
import Wordbreak from "./Wordbreak";
import TestimonialsSlider from "./Sliders";

const Testimonials: React.FC = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between bg-[#f0ebe5] py-20">
      <div className="w-full lg:w-[45%] space-y-4">
        <div className="text-red-500 lineBefore text-3xl">User Reviews</div>
        <div className="font-extrabold text-4xl lg:text-6xl">
          What Readers Say About Mentoons Comics
        </div>
        <div className="text-gray-500 text-lg tracking-wide">
          Lorem ipsum dolor sit amet, consectetur <Wordbreak /> adipisicing
          elit. Recusandae blanditi.
        </div>
        <button className="bg-primary uppercase text-lg font-medium hover:bg-white hover:text-primary transition-all duration-300 ease-in-out text-white py-3 px-7 rounded-full">
          All Reviews
        </button>
      </div>
      <TestimonialsSlider />
    </div>
  );
};

export default Testimonials;
