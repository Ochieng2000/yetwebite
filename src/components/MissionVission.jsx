import React from "react";
import { Target, Eye, Lightbulb, Award, Shield, Rocket, Zap, Users, TrendingUp } from "lucide-react";

function MissionVision() {
  const coreValues = [
    {
      title: "Innovation with Purpose",
      description: "Technology must solve real problems and create meaningful impact.",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "We pursue world-class standards in design, delivery, and performance.",
      icon: Award
    },
    {
      title: "Integrity",
      description: "Trust, transparency, and ethical conduct guide all we do.",
      icon: Shield
    },
    {
      title: "Bold Thinking",
      description: "We challenge limits and redefine what is possible.",
      icon: Rocket
    },
    {
      title: "Agility",
      description: "We adapt quickly in a fast-evolving technological landscape.",
      icon: Zap
    },
    {
      title: "Collaboration",
      description: "We believe in partnerships and ecosystem-driven success.",
      icon: Users
    },
    {
      title: "Impact Orientation",
      description: "We measure success by transformation, not just output.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="max-w-[90rem] mx-auto mb-8 text-center">
        <h2
          className="text-4xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Our Purpose & <span className="text-4xl text-theme_color">Direction</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Driving transformation through innovation, excellence, and impact
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 h-0.5 bg-theme_color"></div>
          <div className="w-3 h-3 rotate-45 border-2 border-theme_color"></div>
          <div className="w-12 h-0.5 bg-theme_color"></div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-[90rem] mx-auto mb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-theme_color/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
              <div className="flex items-start gap-5 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-theme_color/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/40">
                  <Eye className="w-8 h-8 text-theme_color" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
                    Vision
                  </h3>
                  <div className="w-16 h-1 bg-theme_color mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To see organizations, industries, and nations{" "}
                <span className="text-theme_color font-semibold">rise above systemic limitations</span>{" "}
                through transformative technology - soaring to new heights of efficiency, inclusion, and sustainable growth.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-theme_color/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
              <div className="flex items-start gap-5 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-theme_color/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/40">
                  <Target className="w-8 h-8 text-theme_color" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
                    Mission
                  </h3>
                  <div className="w-16 h-1 bg-theme_color mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To design, build, and deploy{" "}
                <span className="text-theme_color font-semibold">innovative technology solutions</span>{" "}
                while guiding organizations through their innovation journeys, identifying gaps, automating processes, and unlocking new value through intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-10">
          <h3
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Our <span className="text-3xl md:text-4xl text-theme_color">Core Values</span>
          </h3>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            The principles that guide our work and define our culture
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-8 h-0.5 bg-theme_color"></div>
            <div className="w-2 h-2 rotate-45 bg-theme_color"></div>
            <div className="w-8 h-0.5 bg-theme_color"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                data-aos-duration="800"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-theme_color/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100 group-hover:border-theme_color/30">
                  <div className="w-14 h-14 bg-theme_color/20 rounded-xl flex items-center justify-center mb-5 group-hover:from-theme_color transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-theme_color/30">
                    <IconComponent className="w-7 h-7 text-theme_color group-hover:text-black transition-colors duration-500" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme_color transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  <div className="w-0 h-0.5 bg-theme_color mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="max-w-[90rem] mx-auto mt-20">
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-3"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-theme_color"></div>
          <div className="w-3 h-3 rounded-full bg-theme_color"></div>
          <div className="w-24 h-0.5 bg-theme_color"></div>
          <div className="w-3 h-3 rounded-full bg-theme_color"></div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-theme_color"></div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;