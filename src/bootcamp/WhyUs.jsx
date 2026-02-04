import React from 'react'
import { BsCalendar2DateFill, BsFillLightbulbFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAccessTimeFilled, MdPhone } from 'react-icons/md'

function WhyUs() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row mt-10 px-2 md:px-8">
        <div className="w-full h-auto bg-gray-200 md:w-1/2 flex flex-col gap-4 py-4">
          <h1 className="text-3xl font-bold uppercase text-center w-fit px-4">
            Registration Details
          </h1>
          <p className="text-text_color px-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 my-3">
              <BsCalendar2DateFill className="w-fit" />
              <p className="flex-1">
                2nd intake from{" "}
                <span className="font-bold">September 16, 2024</span>
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <MdAccessTimeFilled className="w-fit" />
              <p className="flex-1">Time: 24hrs</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <FaLocationDot className="w-fit" />
              <p className="flex-1">Venue:Online forms</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <MdPhone className="w-fit" />
              <a className="font-semibold" href="tel:+254796808883">
                +254 796 808 883
              </a>
            </div>
          </p>
          <div className="w-full px-4">
            <a
              className="w-fit px-10 py-2 rounded-3xl uppercase bg-gray-950 text-theme_color font-bold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd97Grn6aai63DXWlXU3Oz2ZUduRk8mDnc_p7uelqExr6Kv1w/viewform?vc=0&c=0&w=1&flr=0&pli=1"
              target="_blank"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="w-full h-auto text-white_color md:w-1/2 flex flex-col gap-4 py-4">
          <h1 className="text-3xl font-bold uppercase text-center w-fit px-4">
            Why Choose YET KENYA?
          </h1>
          <p className="px-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 my-3">
              <BsFillLightbulbFill className="w-fit" />
              <p className="flex-1">
                Flexible learning options: Online and onsite classes available.{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <BsFillLightbulbFill className="w-fit" />
              <p className="flex-1">
                Comprehensive curriculum: Covering essential topics in computing
                and beyond.{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <BsFillLightbulbFill className="w-fit" />
              <p className="flex-1">
                Industry-relevant skills: Learn from professionals with years of
                experience.
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <BsFillLightbulbFill className="w-fit" />
              <p className="flex-1">
                Career support: Access to resources and guidance to help you
                achieve your goals
              </p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <BsFillLightbulbFill className="w-fit" />
              <p className="flex-1">
                Global Reach and Collaboration with Tech Companies.
              </p>
            </div>
          </p>
          <p className="px-4">
            Don't miss this opportunity to unlock your potential and become a
            proficient computing professional. Register now to secure your spot
            in our upcoming boot camp!
          </p>
        </div>        
        <a
          className="fixed bottom-2 z-20 right-3 w-fit h-fit px-4 py-2 bg-gray-950 bg-opacity-65 text-theme_color rounded-3xl font-bold"
          href="/"
        >
          Go to Home
        </a>
      </div>
  )
}

export default WhyUs