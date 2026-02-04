import React from "react";
import { GiCheckMark } from "react-icons/gi";
import banner2 from "../assets/yetkenya/banner2.jpg";
import banner1 from "../assets/yetkenya/banner1.jpg";
import HerosSection from "./HerosSection";
import Mision from "./Mision";
import Packages from "./Packages";
import WhyUs from "./WhyUs";
import Countdown from "./CountDown";

function Bootcamp() {
  return (
    <div className="w-full h-screen bg-gray-950  overflow-y-auto flex flex-col overflow-x-hidden">
      <HerosSection />
      <Mision />
      <div className="w-full h-auto flex flex-col mt-4 lg:flex-row gap-8 px-3">
        <img
          className="w-full lg:w-3/4 h-full object-contain"
          src={banner1}
          alt=""
        />
        <div className="w-full lg:flex-1 text-white_color ">
          <h1 className="uppercase text-2xl font-bold mb-2 md:mb-10">
            Our technical Principals
          </h1>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Experimental Learning</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Industrial Relevant Learning</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Qualified & Experienced Instructors</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Continous Assessment & Feedback</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Hands-on Workshops & Projects</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Career Development & Support</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <GiCheckMark className="text-xl text-theme_color" />
            <p className="font-medium">Continous Improvement & Innovation</p>
          </div>
        </div>
      </div>
      <div id="packages" className="">
        <Packages />
      </div>
      <div className="w-full h-auto my-3">
        {" "}
        <WhyUs />
      </div>
      <div className="w-full  flex flex-col lg:flex-row gap-8 my-6 px-3">
        <div className="w-full lg:flex-1 flex items-center justify-center text-white_color">
          <Countdown />
        </div>
        <img
          className="w-full lg:w-3/4 h-full object-contain"
          src={banner2}
          alt=""
        />
      </div>
    </div>
  );
}

export default Bootcamp;
