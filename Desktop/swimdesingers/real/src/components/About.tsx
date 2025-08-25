import React, { useState, useEffect } from 'react';
import { HoverExpand } from '../ui/hover-expand';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviews = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      text: "Good services and good technical support. Overall a good experience"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
      text: "I like your pool, your work was completely finishable and awesome sites..."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      text: "Veni Ent designed, They are very good in quality, sticking to design, timely delivery, and prompt after sales service support."
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      text: "Excellent pool design and construction. The team was professional and delivered exactly what we envisioned."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      text: "Amazing work quality and attention to detail. Our pool turned out better than expected!"
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
      text: "Outstanding service from start to finish. Highly recommend for anyone looking for a quality pool."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      text: "Professional team with excellent craftsmanship. Our pool is the highlight of our backyard."
    }
  ];

  // Mobile Layout
  const MobileLayout = () => (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-sky-100 text-sky-700 rounded-full px-4 sm:px-6 py-2 mb-4">
            <span className="text-xs sm:text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 break-words">
            Discover what our satisfied customers have to say about their pool experience. 
            Hover over the images to explore and click to read the full reviews.
          </p>
        </div>

        {/* HoverExpand Component */}
        <div className="w-full overflow-hidden">
          <HoverExpand
            reviews={reviews}
            initialSelectedIndex={0}
            thumbnailHeight={300}
            modalImageSize={500}
            maxThumbnails={7}
          />
        </div>
      </div>
    </section>
  );

  // Desktop Layout
  const DesktopLayout = () => (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-sky-100 text-sky-700 rounded-full px-4 sm:px-6 py-2 mb-4">
            <span className="text-xs sm:text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 break-words">
            Discover what our satisfied customers have to say about their pool experience. 
            Hover over the images to explore and click to read the full reviews.
          </p>
        </div>

        {/* Desktop HoverExpand Component - Centered */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <HoverExpand
              reviews={reviews}
              initialSelectedIndex={0}
              thumbnailHeight={300}
              modalImageSize={500}
              maxThumbnails={7}
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
};

export default About;