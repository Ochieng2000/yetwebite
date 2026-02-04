import { BsArrowUp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Particle from "./Particle";
import image from "../assets/yetkenya/yet2121.png";
import ServiceTitles from "./ServiceTitles";
import Services from "./Services";
import bgImage from "../assets/yetkenya/pic4.jpg";

import About from "./About";
import MessageFromCeo from "./CEO";
import MissionVission from "./MissionVission";
import Heros from "./Heros";
import IndustryMarketFocus from "./IndustryMarketFocus";
const Main = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[80px] top-0 z-20 fixed bg-bg_color">
        <Header />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Heros />
        <div
          id="services"
          className="w-full relative h-auto flex flex-col items-center pt-[80px] bg-gray-100 pb-[60px] px-4"
        >
          <div className="mb-2">
            <h1 className="w-full text-center text-xl text-bg_color font-bold">
              Products & Services            </h1>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-[40px] h-1 bg-bg_color"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-theme_color"></div>
              <div className="w-[40px] h-1 bg-bg_color"></div>
            </div>
          </div>{" "}
          <Services />
        </div>
        <div
          id="about"
          className="w-full relative h-auto min-h-[70vh]  pt-[80px] flex flex-col items-center justify-center px-4 py-6 bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mb-3">
            <h1 className="w-full text-center text-xl text-white_color font-bold">
              About
            </h1>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-[40px] h-1 bg-white_color"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-bg_color"></div>
              <div className="w-[40px] h-1 bg-white_color"></div>
            </div>
          </div>
          <About />
        </div>
        <div
          id="message"
          className="w-full relative h-auto flex flex-col items-center pt-[80px] bg-white_color pb-[60px]"
        >
          <div className="mb-2">
            <h1 className="w-full text-center text-xl text-bg_color font-bold">
              Message from CEO
            </h1>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-[40px] h-1 bg-bg_color"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-theme_color"></div>
              <div className="w-[40px] h-1 bg-bg_color"></div>
            </div>
          </div>{" "}
          <MessageFromCeo />
        </div>
        <div
          id="purpose"
          className="w-full relative h-auto flex flex-col items-center pt-[80px] bg-gray-50 pb-[60px]"
        >
          <MissionVission />
        </div>
        <div
          id="industry-market"
          className="w-full relative h-auto flex flex-col items-center bg-white pt-[80px] pb-[60px]"
        >
          <IndustryMarketFocus />
        </div>
        <div
          id="portfolio"
          className="w-full relative h-auto bg-white_color flex items-center pt-[60px]"
        >
          <Statistics />
        </div>
        <div
          id="testimonials"
          className="w-full relative  h-auto py-12 bg-gray-950 pt-[80px]"
        >
          <Testimonials />
        </div>
        <div
          id="contact-us"
          className="w-full relative h-auto flex flex-col items-center justify-center bg-white_color pt-[80px]"
        >
          <ContactForm />
        </div>
        <div className="w-full relative min-h-[20vh] bg-gray-900 text-white_color font-normal text-base">
          <Footer />
        </div>
        <a
          href="#home"
          className="fixed z-40 transition-all ease-linear duration-300 right-4 bottom-1 py-2 px-2 text-theme_color hover:text-text_color rounded-md border border-theme_color hover:bg-theme_color grid place-content-center"
        >
          <BsArrowUp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
export default Main;
