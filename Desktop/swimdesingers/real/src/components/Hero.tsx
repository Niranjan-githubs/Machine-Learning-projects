import React from 'react';
import { ArrowRight, Star, Award, Users, Phone } from 'lucide-react';
import Aurora from './Aurora';
import ExpandingGallery from './ExpandingGallery';
import BlurText from './BlurText';
import RotatingText from './RotatingText';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-[40vh] sm:min-h-[130vh] md:min-h-[140vh] lg:min-h-[150vh] overflow-hidden bg-white">
        
        {/* Hero Content - Top Section */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
          {/* Main Headline - Centered Style like the image */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <BlurText
              text="Providing Top Notch"
              delay={150}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight font-display whitespace-nowrap"
              animateBy="words"
              direction="top"
              threshold={0.1}
              stepDuration={0.4}
            />
            <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center items-center flex-wrap">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight tracking-tight flex items-center flex-wrap justify-center">
                <span className="text-gray-900 mr-2 sm:mr-3 md:mr-4 lg:mr-6 font-display">Pool</span>
                <RotatingText
                  texts={[
                    "Solutions",
                    "Design",
                    "Products", 
                    "Consultants",
                    "Construction",
                    "Maintenance"
                  ]}
                  mainClassName="font-display"
                  staggerFrom="last"
                  initial={{ y: '100%', filter: 'blur(10px)', opacity: 0 }}
                  animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
                  exit={{ y: '-120%', filter: 'blur(10px)', opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                  gradient={true}
                  gradientColors="from-blue-600 via-sky-500 to-cyan-500"
                  loop={true}
                  auto={true}
                />
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <BlurText
            text="We transform your vision into reality through innovative technology and proficient construction management."
            delay={100}
            className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-8 md:mb-10 lg:mb-12 text-gray-600 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed px-4 font-light font-sans"
            animateBy="words"
            direction="top"
            threshold={0.1}
            stepDuration={0.3}
          />

          {/* Single CTA Button */}
          <div className="flex justify-center mb-8 sm:mb-8 md:mb-10 lg:mb-12 px-4 relative z-30">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 border-0 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl hover:scale-105 font-sans relative z-30"
            >
              Inquire Now
              <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>

        {/* Gallery Section - Responsive positioning for mobile vs desktop */}
        <div className="relative z-10 w-full flex items-center justify-center mt-0 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 pointer-events-none">
          <div className="transform translate-x-1 sm:translate-x-2 md:translate-x-4 lg:translate-x-6 xl:translate-x-8 pointer-events-auto">
            <ExpandingGallery />
          </div>
        </div>

        {/* Contact widget - positioned like in reference */}
        
      </section>
    </>
  );
};

export default Hero;