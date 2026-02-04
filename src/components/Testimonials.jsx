import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

function Testimonials() {
  const NextArrow = (props) => (
    <button
      className="group w-12 h-12 rounded-full flex items-center justify-center bg-theme_color hover:shadow-lg hover:shadow-theme_color/50 absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
      onClick={props.onClick}
      aria-label="Next testimonial"
    >
      <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
    </button>
  );

  const PrevArrow = (props) => (
    <button
      className="group w-12 h-12 rounded-full flex items-center justify-center bg-theme_color hover:shadow-lg hover:shadow-theme_color/50 absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
      onClick={props.onClick}
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonies = [
    {
      name: "Winnie Wanjiku",
      position: "Operations Director",
      company: "FinTech Solutions Ltd",
      content:
        "Young Eagles of Transformation provided us with cutting-edge fintech solutions that streamlined our operations and significantly improved our efficiency. Their innovative approach to technology is truly commendable.",
      rating: 5,
      date: "February 2024",
      avatar: "WW"
    },
    {
      name: "Mike Wasike",
      position: "CEO",
      company: "Digital Innovations Inc",
      content:
        "We are extremely satisfied with the services provided by Y.E.T KENYA. Their expertise in financial technology and commitment to excellence have transformed our business operations, making us more competitive in the digital age.",
      rating: 5,
      date: "February 2024",
      avatar: "MW"
    },
    {
      name: "Abdul Kharim",
      position: "CTO",
      company: "Enterprise Systems",
      content:
        "Choosing Young Eagles of Transformation was the best decision for our company. Their fintech solutions are top-notch, and the team is dedicated to ensuring our success in the ever-evolving digital landscape.",
      rating: 5,
      date: "March 2024",
      avatar: "AK"
    },
    {
      name: "Franck Omondi",
      position: "Financial Manager",
      company: "TechCorp Africa",
      content:
        "The impact of Young Eagles of Transformation on our financial processes is remarkable. Their fintech services have not only increased efficiency but also positioned us as leaders in embracing technological advancements.",
      rating: 5,
      date: "June 2024",
      avatar: "FO"
    },
    {
      name: "Denis Rotich",
      position: "Managing Director",
      company: "Innovation Hub Kenya",
      content:
        "Kudos to the team at Y.E.T KENYA! Their commitment to delivering high-quality fintech solutions is evident in every aspect. We've experienced a significant transformation in our financial operations since partnering with them.",
      rating: 5,
      date: "August 2024",
      avatar: "DR"
    },
  ];

  return (
    <div className="w-full pb-4 px-4">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-4"
          >
            <Star className="w-4 h-4 text-theme_color" />
            <span className="text-base text-theme_color font-semibold uppercase tracking-wide">
              Client Testimonials
            </span>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Our Clients <span className="text-theme_color">Say</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Trusted by leading organizations for transformative technology solutions
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-2 lg:px-12">
          <Slider {...settings} className="testimonials-slider">
            {testimonies.map((testimony, index) => (
              <div key={index} className="px-3 pb-4">
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative backdrop-blur-md bg-white/5 rounded-2xl px-8 py-8 overflow-hidden border border-white/10 hover:border-theme_color/50 shadow-lg hover:shadow-2xl hover:shadow-theme_color/20 transition-all duration-300 h-full"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 left-8 w-12 h-12 bg-theme_color rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                <div className="py-6"></div>
                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimony.content}"
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 bg-theme_color rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <span className="text-white font-bold text-lg">
                        {testimony.avatar}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-lg group-hover:text-theme_color transition-colors duration-300">
                        {testimony.name}
                      </h4>
                      <p className="text-base text-gray-400 font-medium">
                        {testimony.position}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimony.company}
                      </p>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-8 right-8">
                    <span className="text-xs text-gray-500 font-medium">
                      {testimony.date}
                    </span>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-theme_color rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
        .testimonials-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;