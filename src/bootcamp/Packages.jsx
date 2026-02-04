import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";

function Packages() {
  return (
    <div className="w-full md:w-5/6 mx-auto h-auto px-4 ">
      <h1>Our packages</h1>
      <div className="w-full lg:flex-1 h-full grid grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-3">
        <div className="w-full min-h-[300px] text-white_color rounded-md overflow-hidden flex flex-col justify-between">
          <div className="py-2 bg-white">
            <h1 className="font-semibold capitalize text-center text-text_color">
              Basic Package (5 Weeks)
            </h1>
          </div>
          <div className="w-full flex-1 px-2 py-1 flex flex-col border-l border-r border-theme_color">
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">
                Computer Essentials (Hardware and Software)
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Microsoft Office Package</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Online Essentials & Online Collaboration</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">File Management</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Life Skills and Soft Skills</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <MdAccessTimeFilled className="w-fit text-xl" />
              <p className="flex-1">
                Period: <span className="font-bold">5 Weeks</span>
              </p>
            </div>
          </div>
          <div className="w-full py-2 bg-theme_color  border border-theme_color text-text_color text-2xl text-center font-bold">
            Ksh. 5,000
          </div>
        </div>
        <div className="w-full min-h-[300px] text-white_color rounded-md overflow-hidden flex flex-col justify-between">
          <div className="py-2 bg-white">
            <h1 className="font-semibold capitalize text-center text-text_color">
              Standard Package (3 Months)
            </h1>
          </div>
          <div className="w-full px-2 py-1 flex flex-1  border-l border-r border-theme_color flex-col">
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">
                Presentation, Business Writing, Proposal Writing, and
                Communication Skills
              </p>
            </div>
            <div className="flex flex-1 items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">IT Security</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">
                Idea Development & Digital Entrepreneurship
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Digital Marketing</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Graphic Design</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">IT and Business</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <MdAccessTimeFilled className="w-fit text-xl" />
              <p className="flex-1">
                Period: <span className="font-bold">3 Months</span>
              </p>
            </div>
          </div>
          <div className="w-full py-2  border border-theme_color bg-theme_color text-text_color text-2xl text-center font-bold">
            Ksh. 30,000
          </div>
        </div>
        <div className="w-full min-h-[300px] text-white_color rounded-md overflow-hidden flex flex-col justify-between">
          <div className="py-2 bg-white">
            <h1 className="font-semibold capitalize text-center text-text_color">
              Advanced Package (6 Months)
            </h1>
          </div>
          <div className="w-full flex-1 px-2 py-1 flex flex-col border-l border-r border-theme_color">
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Software Design and Engineering</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Web Development</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Mobile Development</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Databases</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <GiCheckMark className="w-fit" />
              <p className="flex-1">Professional Practices and Ethics</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <MdAccessTimeFilled className="w-fit text-xl" />
              <p className="flex-1">
                Period: <span className="font-bold">6 Months</span>
              </p>
            </div>
          </div>
          <div className="w-full py-2  border border-theme_color bg-theme_color text-text_color text-2xl text-center font-bold">
            Ksh. 50,000
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
