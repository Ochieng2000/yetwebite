import React from "react";
import boot1 from "../assets/yetkenya/boot1.png";
function HerosSection() {
  return (
    <div className="w-screen h-auto md:min-h-[75vh] flex items-center justify-center pt-10">
      <div className="w-screen h-full lg:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-10 px-4 md:px-8">
        <div className="w-full h-full flex items-center flex-col justify-center md:w-1/2">
          <h1 className="uppercase text-2xl text-center md:text-left md:text-4xl tracking-widest font-semibold text-theme_color">
            YET KENYA Ditial training program
          </h1>
          <p className="text-white_color mt-10 text-lg font-medium leading-loose">
            YET KENYA offers top-tier computer training and software engineering
            boot camps, both online and onsite, to equip participants with the
            skills and knowledge needed to excel in the tech industry.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 my-10">
            <a
              className="w-full md:w-[200px] px-2 py-3 mx-auto md:mx-0 rounded-3xl border border-theme_color text-white font-semibold text-center "
             href="https://docs.google.com/forms/d/e/1FAIpQLSd97Grn6aai63DXWlXU3Oz2ZUduRk8mDnc_p7uelqExr6Kv1w/viewform?vc=0&c=0&w=1&flr=0&pli=1"
              target="_blank"
            >
              Get Started
            </a>
            <a
              className="w-full md:w-[200px] px-2 py-3 mx-auto md:mx-0 rounded-3xl border border-theme_color text-white font-semibold text-center "
              href="#packages"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full h-full md:flex-1">
          <img className="w-full h-full object-contain" src={boot1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HerosSection;
