import { TypeAnimation } from "react-type-animation";

const ServiceTitles = () => {
  return (
    <TypeAnimation
      sequence={[
        "FinTech Solutions",
        2000,
        "Artificial Intelligence",
        2000,
        "Industrial & Smart Automation",
        2000,
        "Management Software & ERP",
        2000,
        "Technology Consultancy",
        2000,
      ]}
      wrapper="span"
      speed={50}
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="uppercase text-theme_color mb-2 font-extrabold text-2xl md:text-3xl"
      repeat={Infinity}
    />
  );
};

export default ServiceTitles;
