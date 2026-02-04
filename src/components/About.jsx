import React from "react";
import { Rocket, TrendingUp, Award, Users, Building2, Lightbulb, Sparkles } from "lucide-react";
import { SiStoryblok } from "react-icons/si";

function About() {
  const milestones = [
    {
      icon: Building2,
      title: "Advanced FinTech Infrastructures",
      description: "Development and deployment of cutting-edge financial technology platforms"
    },
    {
      icon: Lightbulb,
      title: "AI-Driven Systems",
      description: "Design and implementation of intelligent systems and consultancy services"
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Delivery of Management Software and ERP solutions for enterprises"
    },
    {
      icon: Rocket,
      title: "TEKNO-HUB Launch",
      description: "Establishment of the YET Kenya Technology & Innovation Hub"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Premium Client Portfolio",
      description: "Successfully served multiple premium corporate and institutional clients"
    },
    {
      icon: TrendingUp,
      title: "Enterprise Platforms",
      description: "Built and deployed scalable, enterprise-grade technology platforms"
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Closed strategic partnerships across technology, finance, and innovation ecosystems"
    }
  ];

  return (
    <div className="w-fullpx-4">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl md:text-5xl font-bold text-gray-50 mb-4"
          >
            About <span className="text-theme_color text-4xl md:text-5xl ">YET Kenya</span>
          </h1>
          <p className="text-gray-50 text-lg max-w-2xl mx-auto">
            Discover our journey, milestones, and achievements
          </p>
        </div>

        {/* History and Milestones Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* History Section - Left */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="h-full"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-800 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-theme_color to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <SiStoryblok className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-theme_color">
                  Origin Story
                </h2>
              </div>

              <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed flex-grow">
                <p className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
                  <span className="text-theme_color font-bold">YET KENYA</span> was founded from a deeply observative and innovative mindset-one inspired by the eagle. The eagle's vision, altitude, resilience, and mastery of its environment revealed a powerful truth:{" "}
                  <span className="font-semibold text-white">the eagle does not struggle with limitations; it rises above them.</span>
                </p>
                <p className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
                  Through this lens, technology emerged as the modern force capable of liberating nations and organizations from inefficiency, stagnation, and exclusion. <span className="text-theme_color font-bold">YET KENYA</span> was established to harness technology as a tool of transformation-helping institutions soar beyond operational, financial, and structural constraints, just as the eagle commands the skies.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex justify-around gap-4">
                  {["Vision", "Innovation", "Excellence"].map((value, idx) => (
                    <div key={idx} className="text-center group">
                      <div className="w-14 h-14 bg-gradient-to-br from-theme_color/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-theme_color group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-theme_color">{idx + 1}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-400 group-hover:text-theme_color transition-colors duration-300">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Milestones Section - Right */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="h-full"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-800 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-theme_color to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-50">
                  Key <span className="text-3xl text-theme_color">Milestones</span>
                </h2>
              </div>

              <div className="space-y-5 flex-grow">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;

                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-theme_color/10 to-theme_color/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 group-hover:border-theme_color/30 transition-all duration-300">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-theme_color rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                          <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-50 mb-1 group-hover:text-theme_color transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className=" text-gray-300 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section - Bottom */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-theme_color/50 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme_color">
              Major Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-theme_color/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 group-hover:border-theme_color/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-theme_color/40 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-lg mb-5 mx-auto">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="text-center flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-theme_color transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed ">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-theme_color to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;