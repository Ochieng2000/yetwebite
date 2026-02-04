import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

function Mision() {
  return (
    <div className="w-full md:w-5/6 h-auto my-3 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-10 ">
      <div className="w-full h-full md:w-1/2 flex flex-col items-center gap-4 ">
        <div className=" p-4 w-fit">
          <IoMdEye className="text-4xl text-theme_color" />
        </div>
        <h1 className="text-white_color text-2xl md:text-3xl uppercase font-semibold tracking-widest">
          Vision
        </h1>
        <p className="text-white_color font-medium tracking-wider text-center">
          To cultivate a community of forward-thinking professionals who
          leverage advanced computing capabilities, strategic business insights
          and industry expertise to drive innovation and create positive impact.
        </p>
      </div>
      <div className="w-full md:w-[2px] h-[2px] md:h-full bg-theme_color"></div>
      <div className="w-full h-full md:w-1/2 flex flex-col items-center gap-4">
        <div className=" p-4 w-fit">
          <MdPeopleAlt className="text-4xl text-theme_color" />
        </div>
        <h1 className="text-white_color text-2xl md:text-3xl uppercase font-semibold tracking-widest">
          Mission
        </h1>
        <p className="text-white_color font-medium tracking-wider text-center">
          To empower individuals with advanced computing skills, business acumen
          and industrial knowledge, preparing them to thrive in the digital age.
        </p>
      </div>
    </div>
  );
}

export default Mision;
