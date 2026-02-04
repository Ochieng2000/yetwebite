import React from 'react';
import { 
  Target, 
  Globe, 
  Trophy, 
  Zap, 
  Building2, 
  Store, 
  Landmark, 
  Factory, 
  Users, 
  Heart, 
  ShoppingCart, 
  Rocket,
  MapPin,
  TrendingUp,
  Award,
  Shield,
  Lightbulb,
  Network,
  Gauge
} from 'lucide-react';

function IndustryMarketFocus() {
  const targetMarkets = [
    {
      icon: Building2,
      title: "Large Corporates & Enterprises",
      description: "Enterprise-grade solutions for established organizations"
    },
    {
      icon: Store,
      title: "SMEs",
      description: "Small and Medium Enterprises seeking growth"
    },
    {
      icon: Landmark,
      title: "Financial Institutions",
      description: "Banks, FinTechs, and financial service providers"
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Industrial organizations and manufacturers"
    },
    {
      icon: Users,
      title: "Government & Public Sector",
      description: "Government entities and public institutions"
    },
    {
      icon: Heart,
      title: "NGOs & Development",
      description: "Non-profits and development organizations"
    },
    {
      icon: ShoppingCart,
      title: "Retail & Commercial",
      description: "Retail and commercial businesses"
    },
    {
      icon: Rocket,
      title: "Tech Startups & Innovation Hubs",
      description: "Technology-driven startups and innovation centers"
    }
  ];

  const geographicReach = [
    {
      icon: MapPin,
      title: "Primary Market",
      location: "Kenya",
      description: "Deep local presence and expertise",
      color: "from-theme_color to-blue-600"
    },
    {
      icon: Globe,
      title: "Regional Focus",
      location: "East Africa",
      description: "Expanding across the region",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Extended Reach",
      location: "International Markets",
      description: "Scalable digital solutions worldwide",
      color: "from-purple-600 to-theme_color"
    }
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      title: "End-to-End Innovation Support",
      description: "From ideation to deployment-comprehensive innovation lifecycle management"
    },
    {
      icon: Globe,
      title: "Local + Global Standards",
      description: "Deep understanding of local challenges combined with global technology standards"
    },
    {
      icon: Network,
      title: "Scalable & Future-Ready",
      description: "White-label platforms designed to scale with your growth"
    },
    {
      icon: Target,
      title: "Problem-Solving Focus",
      description: "Addressing real organizational and societal challenges with technology"
    }
  ];

  const keyStrengths = [
    {
      icon: Zap,
      number: "01",
      title: "Advanced Technology Expertise",
      description: "Mastery across FinTech, AI, ERP, and Automation technologies"
    },
    {
      icon: Rocket,
      number: "02",
      title: "Innovation-Driven Leadership",
      description: "Inspired by transformation and lasting impact"
    },
    {
      icon: Gauge,
      number: "03",
      title: "Agile Delivery Model",
      description: "Adaptive approach for complex and dynamic environments"
    },
    {
      icon: Award,
      number: "04",
      title: "Strategic Partnerships",
      description: "Strong network across finance, technology, and innovation ecosystems"
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Regional Scalability",
      description: "Solutions engineered for growth beyond borders"
    }
  ];

  return (
    <div className="w-full  px-4">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Industry & Market <span className="text-theme_color text-4xl">Focus</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Serving diverse markets with innovative technology solutions tailored for transformation
          </p>
        </div>

        {/* Target Markets Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-theme_color rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Target <span className="text-theme_color text-3xl">Markets</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => {
              const IconComponent = market.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  data-aos-duration="600"
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-theme_color/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-theme_color/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-12 h-12 bg-theme_color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-theme_color transition-colors duration-300">
                      {market.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {market.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Geographic Reach Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-theme_color rounded-2xl flex items-center justify-center shadow-lg">
              <Globe className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Geographic <span className="text-theme_color text-3xl">Reach</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {geographicReach.map((geo, index) => {
              const IconComponent = geo.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="800"
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-theme_color rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-theme_color/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-theme_color rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-base font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        {geo.title}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-theme_color transition-colors duration-300">
                        {geo.location}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {geo.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-3 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-theme_color rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Competitive <span className="text-theme_color">Advantage</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="600"
                    className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-theme_color/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-theme_color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-theme_color transition-colors duration-300">
                          {diff.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Strengths Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-theme_color rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Key <span className="text-theme_color">Strengths</span>
            </h2>
          </div>

          <div className="space-y-6">
            {keyStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-theme_color/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="absolute -left-4 top-8 w-12 h-12 bg-theme_color rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {strength.number}
                  </div>

                  <div className="flex items-start gap-6 pl-4">                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-theme_color transition-colors duration-300">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mission Statement Footer */}
        <section>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative bg-theme_color rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                YET KENYA TECHNOLOGY & INNOVATION HUB (TEKNO‑HUB)
              </h3>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Exists to help organizations identify technology gaps, innovate boldly,
                automate intelligently, and soar beyond limitations into sustainable excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IndustryMarketFocus;