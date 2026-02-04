import React, { useState } from "react";
import { FaXTwitter, FaWhatsapp, FaAngleRight } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Code, Brain, Cog, Building2, Lightbulb, Send } from "lucide-react";
import logo from "../assets/yetkenya/logo.png";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  const majorServices = [
    {
      icon: Code,
      title: "FinTech Solutions",
      description: "Advanced financial technology platforms"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "AI-driven systems and ML solutions"
    },
    {
      icon: Cog,
      title: "Smart Automation",
      description: "Industrial and process automation"
    },
    {
      icon: Building2,
      title: "Enterprise Software",
      description: "Management software and ERP systems"
    },
    {
      icon: Lightbulb,
      title: "Technology Consultancy",
      description: "Strategic technology guidance"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Our Purpose", href: "#purpose" },
    { name: "Industry & Market", href: "#industry-market" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact-us" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ];

  const socialLinks = [
    {
      icon: FaXTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/yetkenyalimited/",
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    {
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send?phone=254796808883&text=*Hi*,",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    },
    {
      icon: CiLinkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 pt-16 pb-8">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:col-span-1"
          >
            <div className="w-40 h-20 mb-6">
              <img 
                className="w-full h-full object-contain" 
                src={logo} 
                alt="YET Kenya Logo" 
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <span className="text-theme_color font-bold">Young Eagles of Transformation Kenya</span>
              <br />
              Pioneering technology solutions that transform businesses and drive innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-theme_color flex-shrink-0 mt-1" />
                <p className="text-base">International House, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-theme_color flex-shrink-0" />
                <a href="tel:+254796808883" className="text-base hover:text-theme_color transition-colors">
                  +254 796 808 883
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-theme_color flex-shrink-0" />
                <a 
                  href="mailto:info@yet-kenya.com" 
                  className="text-base hover:text-theme_color transition-colors"
                >
                  info@yet-kenya.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Major Services */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-theme_color rounded-full"></div>
              Our Core Services
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {majorServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-theme_color/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gray-950 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-theme_color" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-theme_color transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-theme_color rounded-full"></div>
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-6 text-base leading-relaxed">
              Subscribe to our newsletter for the latest updates, insights, and technology trends.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-theme_color focus:ring-2 focus:ring-theme_color/20 outline-none transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="group w-full px-6 py-3 bg-theme_color rounded-3xl text-white font-semibold shadow-lg shadow-theme_color/30 hover:shadow-theme_color/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-base font-bold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-1 text-base text-gray-400 hover:text-theme_color transition-colors"
                  >
                    <FaAngleRight className="w-3 h-3 text-theme_color" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="text-theme_color font-semibold">YET Kenya Limited</span>. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-base text-gray-400 hover:text-theme_color transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-6 text-center">
            <p className="text-base text-gray-500 italic">
              "Transforming visions into reality through innovation and excellence"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;