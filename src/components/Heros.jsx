import { ArrowRight, Sparkles } from 'lucide-react';
import Particle from './Particle';
import { TypeAnimation } from 'react-type-animation';
import image from "../assets/yetkenya/yet2121.png";

function Heros() {
    return (
        <div
            id="home"
            className="relative w-full min-h-screen pt-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center overflow-hidden"
        >
            <Particle />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-theme_color/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div 
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-theme_color animate-pulse" />
                            <span className="text-base text-gray-300 font-medium">Pioneering Tomorrow's Solutions Today</span>
                        </div>

                        {/* Main Headline */}
                        <div>
                            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                                Transform
                                <br />
                                Beyond{" "}
                                <span className="bg-gradient-to-r from-theme_color via-blue-500/50 to-theme_color bg-clip-text text-5xl text-transparent animate-gradient">
                                    Limitations
                                </span>
                            </h1>
                        </div>

                        {/* Company Intro */}
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-theme_color mb-2">
                                    Young Eagles of Transformation Kenya
                                </h2>
                                <p className="text-gray-400 text-base uppercase tracking-widest">(Y.E.T KENYA)</p>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Your strategic partner in <span className="text-white font-semibold">technology development</span>, 
                                <span className="text-white font-semibold"> innovation deployment</span>, 
                                <span className="text-white font-semibold"> automation solutions</span>, and 
                                <span className="text-white font-semibold"> consultancy</span>-driving transformation across industries.
                            </p>
                        </div>

                        {/* Services Typewriter */}
                        <div className="border-l-4 bg-gradient-to-r from-theme_color/10 via-blue-600/10 to-transparent border-theme_color pl-6 py-2">
                            <h3 className="text-base font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                                We Excel In
                            </h3>
                            <div className="h-12 flex items-center">
                                <TypeAnimation
                                    sequence={[
                                        'FinTech Solutions & Innovation',
                                        2000,
                                        'Artificial Intelligence & Machine Learning',
                                        2000,
                                        'Industrial & Smart Automation',
                                        2000,
                                        'Enterprise Software & ERP Systems',
                                        2000,
                                        'Strategic Technology Consultancy',
                                        2000,
                                        'Digital Transformation Services',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="text-xl font-bold text-white uppercase"
                                    repeat={Infinity}
                                />
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-gradient-to-r from-theme_color/10 via-blue-600/10 to-transparent border-l-4 border-theme_color pl-6 py-4 rounded-r-xl">
                            <p className="text-gray-300 text-base leading-relaxed italic">
                                <span className="font-bold text-white not-italic">Inspired by the eagle's vision</span>-we help
                                organizations identify technology gaps, innovate boldly, automate intelligently,
                                and rise beyond constraints into sustainable excellence.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#contact-us"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-theme_color rounded-full text-white font-semibold shadow-lg shadow-theme_color/30 hover:shadow-theme_color/50 hover:scale-105 transition-all duration-300"
                            >
                                Start Your Transformation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                            >
                                Explore Solutions
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-theme_color/20 to-blue-600/20 rounded-full blur-3xl"></div>

                        {/* Image Container */}
                        <div className="relative">
                            {/* Image Wrapper */}
                            <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src={image}
                                    className="w-full h-full object-cover"
                                    alt="YET Kenya Innovation"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                
                                {/* Inner Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                    <h3 className="text-2xl font-bold text-theme_color mb-2">
                                        Technology. Innovation. Excellence.
                                    </h3>
                                    <p className="text-gray-200 text-base">
                                        Transforming visions into reality
                                    </p>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    );
}

export default Heros;