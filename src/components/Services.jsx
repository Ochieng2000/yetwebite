import React, { useState } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import {
  FaRegCreditCard,
  FaWallet,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaDatabase,
  FaMobile,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPayments, MdPeopleAlt, MdSmartToy, MdHome } from "react-icons/md";
import { BsCurrencyBitcoin, BsLightning } from "react-icons/bs";
import { HiChip } from "react-icons/hi";
import { RiRobot2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaCog } from "react-icons/fa";

function Services() {
  const [expandedCategory, setExpandedCategory] = useState("fintech");

  const categories = [
    {
      id: "fintech",
      title: "FinTech Solutions",
      icon: <FaRegCreditCard />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { icon: <FaRegCreditCard />, text: "Robust white-label payment gateway infrastructure" },
        { icon: <FaMobile />, text: "Android mobile POS terminals" },
        { icon: <CgWebsite />, text: "Internal enterprise payment management portals" },
        { icon: <MdPeopleAlt />, text: "Merchant and customer payment portals" },
        { icon: <BsCurrencyBitcoin />, text: "Crypto payment processing infrastructure (white-label)" },
        { icon: <FaWallet />, text: "Custodial and non-custodial crypto wallets" },
        { icon: <GiReceiveMoney />, text: "Digital lending and collections platforms" },
        { icon: <MdPayments />, text: "Agency banking and merchant acquiring solutions" },
        { icon: <FaChartLine />, text: "Financial data analytics and reporting systems" }
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence (AI)",
      icon: <AiOutlineRobot />,
      color: "from-purple-500 to-pink-500",
      services: [
        { icon: <FaLightbulb />, text: "AI strategy and consultancy services" },
        { icon: <RiRobot2Fill />, text: "Voice AI installation and conversational systems" },
        { icon: <MdSmartToy />, text: "Intelligent chatbots and virtual assistants" },
        { icon: <FaDatabase />, text: "Machine learning and predictive analytics" },
        { icon: <FaUsers />, text: "AI-powered customer experience platforms" },
        { icon: <BsLightning />, text: "Intelligent process automation" }
      ]
    },
    {
      id: "automation",
      title: "Industrial & Smart Automation",
      icon: <HiChip />,
      color: "from-orange-500 to-red-500",
      services: [
        { icon: <MdHome />, text: "Smart home automation and installation services" },
        { icon: <FaCog />, text: "Industrial process and workflow automation" },
        { icon: <HiChip />, text: "IoT-based monitoring and control systems" },
        { icon: <BsLightning />, text: "Computerized and sensor-driven automation solutions" }
      ]
    },
    {
      id: "erp",
      title: "Management Software & ERP Solutions",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-500",
      services: [
        { icon: <FaDatabase />, text: "Enterprise Resource Planning (ERP) systems" },
        { icon: <FaCog />, text: "Custom management and workflow automation software" },
        { icon: <MdPayments />, text: "Finance, HR, procurement, and operations systems" },
        { icon: <FaChartLine />, text: "Executive dashboards and data-driven reporting tools" }
      ]
    },
    {
      id: "consultancy",
      title: "Technology Consultancy Services",
      icon: <FaLightbulb />,
      color: "from-yellow-500 to-amber-500",
      services: [
        { icon: <FaUsers />, text: "Corporate technology training and upskilling" },
        { icon: <FaLightbulb />, text: "Digital transformation and innovation advisory" },
        { icon: <FaChartLine />, text: "Technology audits and gap analysis" },
        { icon: <CgWebsite />, text: "Systems architecture, integration, and optimization" },
        { icon: <BsLightning />, text: "Innovation incubation and product development support" }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <p className="text-lg text-text_color opacity-80 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to transform your business
        </p>
      </div>

      {/* Category Cards - Vertical Stack */}
      <div className="max-w-[90rem] mx-auto space-y-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`
              relative overflow-hidden rounded-3xl bg-white_color
              transition-all duration-500 cursor-pointer
              ${expandedCategory === category.id
                ? 'shadow-2xl'
                : 'shadow-lg hover:shadow-xl hover:-translate-y-2'
              }
            `}
            onClick={() => toggleCategory(category.id)}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`} />

            {/* Card Header */}
            <div className="relative p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`
                    p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white
                    shadow-lg text-3xl lg:text-4xl
                    transition-transform duration-300
                    ${expandedCategory === category.id ? 'scale-110' : 'group-hover:scale-105'}
                  `}>
                    {category.icon}
                  </div>

                  {/* Title & Count */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-text_color mb-1">
                      {category.title}
                    </h3>
                    <p className="text-text_color/60 text-base">
                      {category.services.length} Services
                    </p>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <div className={`
                  text-2xl text-text_color/40 transition-transform duration-300
                  ${expandedCategory === category.id ? 'rotate-180' : ''}
                `}>
                  <FaChevronDown />
                </div>
              </div>
            </div>

            {/* Expanded Services List with Grid */}
            <div className={`
              overflow-hidden transition-all duration-500
              ${expandedCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                <div className="border-t-2 border-gray-100 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="group/item flex items-start gap-3 p-4 rounded-xl
                                 bg-gradient-to-br from-gray-50 to-white
                                 hover:from-white hover:to-gray-50
                                 border border-gray-100 hover:border-theme_color/30
                                 transition-all duration-300 hover:shadow-md"
                      >
                        {/* Service Icon */}
                        <div className={`
                          flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${category.color} 
                          text-white text-lg
                          group-hover/item:scale-110 transition-transform duration-300
                        `}>
                          {service.icon}
                        </div>

                        {/* Service Text */}
                        <p className="text-text_color/80 text-base leading-relaxed flex-1">
                          {service.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={`
              absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} 
              opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16
              transition-transform duration-700
              ${expandedCategory === category.id ? 'translate-x-0 translate-y-0' : ''}
            `} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;