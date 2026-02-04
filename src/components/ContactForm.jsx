import React, { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bj5e5mi",
        "template_f4priip",
        form.current,
        "cz2L5Ay7QKfR9Ic7A"
      )
      .then(
        (result) => {
          setLoading(false);
          if (result.status === 200) {
            setFormData({
              from_name: "",
              from_email: "",
              from_subject: "",
              message: ""
            });
            toast.success("Message sent successfully! We'll get back to you soon.", {
              position: "top-right",
              autoClose: 3000,
            });
          }
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "International House, Nairobi, Kenya",
      link: null,
      gradient: "from-theme_color to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@yet-kenya.com",
      link: "mailto:info@yet-kenya.com",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Mail,
      title: "Postal Address",
      content: "P.O BOX 22272 - Thika",
      link: null,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 796 808 883",
      link: "tel:+254796808883",
      gradient: "from-pink-600 to-theme_color"
    },
    {
      icon: BiLogoWhatsappSquare,
      title: "WhatsApp Us",
      content: "+254 796 808 883",
      link: "https://api.whatsapp.com/send?phone=254796808883",
      gradient: "from-green-600 to-green-500"
    }
  ];

  return (
    <div
      id="contact-us"
      className="w-full bg-gradient-to-b from-gray-50 to-white px-4 pb-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get In <span className="text-theme_color text-4xl ">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information - Left Side */}
          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                Reach out to us through any of these channels
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = info.link ? (
                    <a
                      href={info.link}
                      target={info.link?.startsWith('http') ? '_blank' : undefined}
                      rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-theme_color transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  );

                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group flex items-start gap-4"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                          {info.title}
                        </h3>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Element */}
              <div className="mt-10 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm text-center italic">
                  "Transforming visions into reality through innovation and excellence"
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div
            className="lg:col-span-3"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700 block"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-theme_color focus:ring-2 focus:ring-theme_color/20 outline-none transition-all duration-300 text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 block"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-theme_color focus:ring-2 focus:ring-theme_color/20 outline-none transition-all duration-300 text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700 block"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="from_subject"
                    id="subject"
                    value={formData.from_subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-theme_color focus:ring-2 focus:ring-theme_color/20 outline-none transition-all duration-300 text-gray-900"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 block"
                  >
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-theme_color focus:ring-2 focus:ring-theme_color/20 outline-none transition-all duration-300 resize-none text-gray-900"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full md:w-auto px-8 py-4 bg-theme_color rounded-full text-white font-semibold shadow-lg shadow-theme_color/30 hover:shadow-theme_color/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-16 bg-gradient-to-br from-theme_color to-blue-400 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Digital Transformation?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Pioneering Tomorrow's Solutions Today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+254796808883"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-theme_color rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=254796808883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <BiLogoWhatsappSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;