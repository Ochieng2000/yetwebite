import React from "react";
import { Quote } from "lucide-react";
import ceo from "../assets/yetkenya/ceo.jpeg";

function MessageFromCeo() {
  return (
    <div className="w-full pb-4 px-4">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* CEO Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:col-span-2"
          >
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-theme_color/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  src={ceo}
                  alt="Mr. Peter Kibaki - CEO of YET Kenya"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Name badge on image */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4">
                  <h3 className="text-white font-bold text-xl mb-1">Mr. Peter Kibaki</h3>
                  <p className="text-theme_color font-semibold">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme_color rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 ml-6 mt-6">
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    At <span className="font-bold text-theme_color">YET Kenya Limited</span>, we harness technology to help
                    organizations rise above limitations and unlock new possibilities. Founded with a clear vision of
                    transformation, we believe technology should remove barriers, enable efficiency, and create lasting
                    value. Through our{" "}
                    <span className="font-bold text-theme_color">Technology & Innovation Hub (TEKNO-HUB)</span>, we design
                    and deploy intelligent, secure, and future-ready solutions across{" "}
                    <span className="font-semibold text-gray-900">FinTech</span>,{" "}
                    <span className="font-semibold text-gray-900">Artificial Intelligence</span>,{" "}
                    <span className="font-semibold text-gray-900">enterprise systems</span>, and{" "}
                    <span className="font-semibold text-gray-900">automation</span>.
                  </p>

                  <p>
                    By combining deep local insight with global technology standards, we partner with corporates, SMEs,
                    financial institutions, and public sector organizations to solve real challenges, streamline
                    operations, and drive sustainable growth. Our solutions are scalable, adaptable, and designed to
                    evolve with our clients' needs.
                  </p>

                  <p>
                    Our commitment is simple: to deliver innovation with purpose, integrity, and measurable impact while
                    consistently pioneering tomorrow's solutions, today.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-lg">Mr. Peter Kibaki</p>
                  <p className="text-theme_color font-semibold">Chief Executive Officer</p>
                  <p className="text-gray-500 text-base mt-1">YET Kenya Limited</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageFromCeo;