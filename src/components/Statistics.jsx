import React from "react";
import image from "../assets/yetkenya/pic6.jpg";
import { Users, Briefcase, Clock, Award } from "lucide-react";

function Statistics() {
  const stats = [
    {
      icon: Users,
      number: "10+",
      label: "Happy Clients"
    },
    {
      icon: Briefcase,
      number: "10+",
      label: "Projects"
    },
    {
      icon: Clock,
      number: "3+",
      label: "Years of Experience"
    },
    {
      icon: Award,
      number: "2",
      label: "Awards"
    }
  ];

  return (
    <div className="w-full py-20 px-4 bg-gray-950 border-b border-theme_color">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-3xl font-bold text-white mb-4"
          >
            YETKENYA LIMITED <span className="text-3xl text-theme_color uppercase">Excellence Portfolio</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-theme_color/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  className="w-full h-[500px] object-cover"
                  src={image}
                  alt="YET Kenya Excellence"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right - Content & Stats */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-8"
          >
            {/* Mission Text */}
            <div className="backdrop-blur-md bg-gray-900/80 rounded-2xl p-8 border border-gray-800 shadow-xl">
              <p className="text-gray-200 leading-relaxed mb-4 text-lg">
                Our mission is simple yet profound: to empower businesses with cutting-edge
                technological solutions that transcend challenges and inspire growth. We believe
                in harnessing the power of innovation to create meaningful impact in the digital
                landscape.
              </p>
              <p className="text-gray-300 leading-relaxed">
                YETKENYA LIMITED is at the cutting edge of technological advancement, from
                AI-driven automation to immersive virtual reality experiences. Our team of
                seasoned professionals combines extensive industry experience with a passion
                for innovation, allowing us to develop custom solutions that are tailored to
                each client's particular requirements.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group flex gap-4 backdrop-blur-md bg-gray-900/80 rounded-2xl p-6 border border-gray-800 hover:border-theme_color/50 shadow-lg hover:shadow-theme_color/20 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-theme_color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="w-fit flex flex-col">
                      <h3 className="text-3xl font-bold text-theme_color mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-gray-200 font-semibold text-base">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;