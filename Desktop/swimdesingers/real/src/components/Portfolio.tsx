import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import Swiper modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';

const Portfolio = () => {
  const poolTypes = [
    {
      id: 1,
      title: "Infinity Edge Pool",
      category: "Luxury Design",
      image: "/Topools/Infinity_edge_pool.jpg",
      description: "Stunning infinity edge pool with seamless water flow creating the illusion of endless horizon.",
      features: ["Infinity Edge", "Seamless Flow", "Luxury Design", "Horizon Effect"],
      location: "Luxury Resort",
      year: "2024"
    },
    {
      id: 2,
      title: "Roof Top Pool",
      category: "Urban Luxury",
      image: "/Topools/rooftop-pool.jpg",
      description: "Exclusive rooftop pool offering breathtaking city views and sophisticated urban lifestyle.",
      features: ["Rooftop Location", "City Views", "Urban Luxury", "Exclusive Access"],
      location: "Urban Development",
      year: "2024"
    },
    {
      id: 3,
      title: "Overflow Pools",
      category: "Modern Design",
      image: "/Topools/Overflow_pool.jpg",
      description: "Modern overflow pool design with continuous water circulation and contemporary aesthetics.",
      features: ["Overflow System", "Modern Design", "Water Circulation", "Contemporary Style"],
      location: "Modern Villa",
      year: "2024"
    },
    {
      id: 4,
      title: "Skimmer Pools",
      category: "Traditional",
      image: "/Topools/skimmer_pool.jpg",
      description: "Classic skimmer pool design with traditional filtration system and timeless appeal.",
      features: ["Skimmer System", "Traditional Design", "Classic Appeal", "Reliable Filtration"],
      location: "Residential Home",
      year: "2024"
    },
    {
      id: 5,
      title: "Spa Pools & Jacuzzi",
      category: "Wellness",
      image: "/Topools/spa & jaccuzi.avif",
      description: "Luxurious spa pools and jacuzzi systems for ultimate relaxation and wellness experience.",
      features: ["Spa Features", "Jacuzzi Jets", "Wellness Focus", "Relaxation"],
      location: "Wellness Center",
      year: "2024"
    },
    {
      id: 6,
      title: "Olympics / Semi Olympic Pools",
      category: "Sports",
      image: "/Topools/olympics.jpeg",
      description: "Professional Olympic and semi-Olympic pools designed for competitive swimming and training.",
      features: ["Olympic Standards", "Competitive Design", "Training Facility", "Professional Grade"],
      location: "Sports Complex",
      year: "2024"
    },
    {
      id: 7,
      title: "Plunge Pools",
      category: "Compact Design",
      image: "/Topools/plunge_pool.jpg",
      description: "Compact plunge pools perfect for small spaces while providing refreshing aquatic experience.",
      features: ["Compact Size", "Space Efficient", "Quick Refresh", "Modern Design"],
      location: "Compact Living",
      year: "2024"
    },
    {
      id: 8,
      title: "Jacuzzi",
      category: "Wellness",
      image: "/Topools/jaccuzi.jpeg",
      description: "Premium jacuzzi systems for therapeutic relaxation and hydrotherapy benefits.",
      features: ["Hydrotherapy", "Therapeutic Jets", "Relaxation", "Wellness Benefits"],
      location: "Wellness Center",
      year: "2024"
    }
  ];

  const swiperStyles = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
      padding-top: 0px;
    }
    
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 280px;
      height: 336px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      transition: transform 0.3s ease;
    }
    
    .swiper-slide:hover img {
      transform: scale(1.05);
    }
    
    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
    
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #cbd5e1;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    .swiper-pagination-bullet-active {
      background: linear-gradient(135deg, #3b82f6, #06b6d4);
      opacity: 1;
      transform: scale(1.2);
    }
    
    /* Infinite scroll animation */
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-scroll-right {
      animation: scroll 15s linear infinite;
    }
    
    .animate-scroll-right:hover {
      animation-play-state: paused;
    }
    
    /* Responsive adjustments */
    @media (max-width: 480px) {
      .swiper-slide {
        width: 240px;
        height: 288px;
      }
      
      .animate-scroll-right {
        animation-duration: 10s;
      }
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
      .swiper-slide {
        width: 260px;
        height: 312px;
      }
      
      .animate-scroll-right {
        animation-duration: 12s;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .swiper-slide {
        width: 300px;
        height: 360px;
      }
      
      .animate-scroll-right {
        animation-duration: 15s;
      }
    }
    
    @media (min-width: 1025px) {
      .swiper-slide {
        width: 350px;
        height: 420px;
      }
      
      .animate-scroll-right {
        animation-duration: 18s;
      }
    }
  `;

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center py-8 sm:py-12 md:py-16 px-4">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-4 sm:px-6 py-2 mb-4">
            <Star className="mr-2" size={14} />
            <span className="text-xs sm:text-sm font-semibold">Types of Pools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 font-serif">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 px-4">
            Discover our most impressive pool designs that transform ordinary spaces into extraordinary aquatic experiences.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full">
          <style>{swiperStyles}</style>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 2,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="portfolio-swiper"
            speed={400}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            direction="horizontal"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: {
                  delay: 200,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 20,
                  modifier: 1,
                }
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                  delay: 200,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 30,
                  modifier: 1.2,
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                autoplay: {
                  delay: 200,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1.5,
                }
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 35,
                autoplay: {
                  delay: 200,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 2,
                }
              },
              1440: {
                slidesPerView: "auto",
                spaceBetween: 50,
                autoplay: {
                  delay: 200,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
            }}
          >
            {poolTypes.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="size-full rounded-3xl relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full rounded-xl"
                  />
                  {/* Overlay with pool type name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-xl">
                    <h3 className="text-white font-bold text-lg sm:text-xl">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Infinite Scroll Pool Types */}
        <div className="py-16 sm:py-20 md:py-24 px-4">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg max-w-6xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Our Pool Types</h3>
                <p className="text-gray-600 text-xs sm:text-sm">From infinity edges to rooftop oases, we specialize in every type of pool design</p>
              </div>
              
              <div className="relative overflow-hidden">
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-l from-purple-50 via-indigo-50 to-transparent z-10"></div>
                
                <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 animate-scroll-right">
                  {/* First set of pool types */}
                  {[
                    "Infinity Edge Pool",
                    "Roof Top Pool",
                    "Overflow Pools",
                    "Skimmer Pools",
                    "Spa Pools & Jacuzzi",
                    "Olympics / Semi Olympic Pools",
                    "Plunge Pools"
                  ].map((poolType, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 group">
                      <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white relative overflow-hidden">
                        {/* Colorful gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 text-sm sm:text-base md:text-lg font-bold tracking-wide text-gray-800 group-hover:text-blue-700 transition-all duration-300">
                          {poolType}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless infinite scroll */}
                  {[
                    "Infinity Edge Pool",
                    "Roof Top Pool",
                    "Overflow Pools",
                    "Skimmer Pools",
                    "Spa Pools & Jacuzzi",
                    "Olympics / Semi Olympic Pools",
                    "Plunge Pools"
                  ].map((poolType, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 group">
                      <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white relative overflow-hidden">
                        {/* Colorful gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 text-sm sm:text-base md:text-lg font-bold tracking-wide text-gray-800 group-hover:text-blue-700 transition-all duration-300">
                          {poolType}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;