import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

// Stack Component for Mobile
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length ? cardsData : [
      { id: 1, img: "/gallery/compressed/ocean-travel-modern-nobody-infinity.jpg" },
      { id: 2, img: "/gallery/compressed/outdoor-swimming-pool-hotel-resort-summer-vacation.jpg" },
      { id: 3, img: "/gallery/compressed/relaxation-pool-umbrella-lounge-sky.jpg" },
      { id: 4, img: "/gallery/compressed/umbrella-chair.jpg" },
      { id: 5, img: "/gallery/compressed/white-swimming-water-background-beauty.jpg" },
      { id: 6, img: "/gallery/compressed/hammocks-umbrellas-seen-from-pool.jpg" },
      { id: 7, img: "/gallery/compressed/Picture3.jpg" }
    ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img src={card.img} alt={`card-${card.id}`} className="card-image" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

const ExpandingGallery: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Pool project gallery images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/gallery/compressed/ocean-travel-modern-nobody-infinity.jpg",
      title: "Ocean Infinity Pool",
      category: "Resort"
    },
    {
      id: 2,
      image: "/gallery/compressed/outdoor-swimming-pool-hotel-resort-summer-vacation.jpg",
      title: "Outdoor Hotel Pool",
      category: "Vacation"
    },
    {
      id: 3,
      image: "/gallery/compressed/relaxation-pool-umbrella-lounge-sky.jpg",
      title: "Relaxation Pool",
      category: "Lounge"
    },
    {
      id: 4,
      image: "/gallery/compressed/umbrella-chair.jpg",
      title: "Umbrella Chair Pool",
      category: "Modern"
    },
    {
      id: 5,
      image: "/gallery/compressed/white-swimming-water-background-beauty.jpg",
      title: "White Swimming Water",
      category: "Beauty"
    },
    {
      id: 6,
      image: "/gallery/compressed/hammocks-umbrellas-seen-from-pool.jpg",
      title: "Hammocks Umbrellas Pool",
      category: "Luxury"
    },
    {
      id: 7,
      image: "/gallery/compressed/Picture3.jpg",
      title: "Picture 3 Pool",
      category: "Special"
    }
  ];

  useEffect(() => {
    // Check if device is mobile with better detection
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = width / height;
      
      // More comprehensive mobile detection
      const isMobileDevice = width < 768 || ratio < 0.8 || width < 600;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let ticking = false;
    const heroSection = document.getElementById('home');

    const handleScroll = () => {
      if (!ticking && heroSection) {
        requestAnimationFrame(() => {
          const heroRect = heroSection.getBoundingClientRect();
          const heroHeight = heroSection.offsetHeight;
          const windowHeight = window.innerHeight;
          
          const scrollStart = -heroRect.top;
          const scrollEnd = heroHeight - windowHeight;
          const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
          
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const isExpanded = scrollProgress > 0.95;

  // Mobile Gallery Component using Stack
  const MobileGallery = () => {
    const [cardSize, setCardSize] = useState(280);
    const [stackHeight, setStackHeight] = useState(400);
    
    useEffect(() => {
      const calculateCardSize = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Calculate optimal card size for mobile
        let calculatedSize;
        
        if (screenWidth < 480) {
          // Very small mobile devices
          calculatedSize = Math.min(screenWidth * 0.75, screenHeight * 0.5);
        } else if (screenWidth < 768) {
          // Mobile devices
          calculatedSize = Math.min(screenWidth * 0.7, screenHeight * 0.55);
        } else {
          // Tablet devices
          calculatedSize = Math.min(screenWidth * 0.6, screenHeight * 0.5);
        }
        
        // Ensure consistent sizing with better constraints
        const finalSize = Math.max(240, Math.min(calculatedSize, 400));
        setCardSize(finalSize);
        
        // Calculate stack height based on card size - increased height multiplier
        const calculatedHeight = finalSize * 1.8; // Increased from 1.4 to 1.8
        setStackHeight(calculatedHeight);
      };
      
      calculateCardSize();
      window.addEventListener('resize', calculateCardSize);
      
      return () => window.removeEventListener('resize', calculateCardSize);
    }, []);

    // Convert gallery items to Stack format
    const stackImages = galleryItems.map(item => ({
      id: item.id,
      img: item.image
    }));

    return (
      <div className="w-full flex justify-center items-center py-4">
        <div className="relative" style={{ height: stackHeight }}>
          <Stack 
            randomRotation={true} 
            sensitivity={180} 
            sendToBackOnClick={false} 
            cardDimensions={{ width: cardSize, height: cardSize * 1.4 }} // Increased height multiplier
            cardsData={stackImages}
            animationConfig={{ stiffness: 260, damping: 20 }}
          />
        </div>
      </div>
    );
  };

  // Desktop Gallery Component
  const DesktopGallery = () => (
    <div
      className={`w-full py-2 flex items-center justify-center ${
        isExpanded ? 'min-w-[1200px] sm:min-w-[1400px] md:min-w-[1600px] lg:min-w-[1800px] gap-4 sm:gap-6 md:gap-8 lg:gap-10' : 'relative min-w-[1200px] sm:min-w-[1400px] md:min-w-[1600px] lg:min-w-[1800px]'
      }`}
      style={{ height: '40rem' }}
    >
      {galleryItems.map((item, index) => {
        // Pre-calculate values once
        const stackOffset = index * 12; // Reduced from 16 to 12 for tighter stacking
        // Center the middle images: offset by 3 to center the 4th image (index 3)
        const expandedX = (index - 3) * 320; // Reduced from 450 to 320 for smaller gaps
        
        // Initial centered position (when scrollProgress = 0)
        // Center the stack horizontally by offsetting by half the total width
        const totalStackWidth = (galleryItems.length - 1) * 12; // Total width of stacked cards
        const initialX = -totalStackWidth / 2; // Center the stack
        const initialY = stackOffset; // Stack vertically with offset
        
        // Interpolate between initial centered position and expanded position
        const currentX = initialX + (scrollProgress * expandedX);
        const currentY = initialY - (scrollProgress * stackOffset); // Move to center vertically when expanded
        const rotation = (1 - scrollProgress) * (index % 2 === 0 ? -2 : 2);
        const scale = 0.8 + (scrollProgress * 0.2);

        return (
          <div
            key={item.id}
            className={`${
              isExpanded ? '' : 'absolute'
            }`}
            style={{
              transform: isExpanded 
                ? `scale(${scale})`
                : `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg) scale(${scale})`,
              zIndex: Math.min(galleryItems.length - index, 5),
              position: isExpanded ? 'static' : 'absolute',
              minWidth: isExpanded ? '20rem sm:22rem md:24rem lg:27rem' : undefined,
              willChange: 'transform',
              transition: isExpanded ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <div className="w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-2xl group hover:scale-105 transition-transform duration-300">
              {/* Image with optimized loading */}
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div 
      ref={sectionRef}
      className="relative w-full"
      style={{
        '--scroll-progress': scrollProgress,
        marginTop: isMobile ? '0' : '-6rem',
        paddingBottom: isMobile ? '0' : '1rem',
        height: isMobile ? 'auto' : 'auto',
        minHeight: isMobile ? 'auto' : 'auto',
      } as React.CSSProperties}
    >
      {/* Render mobile or desktop gallery based on screen size */}
      {isMobile ? <MobileGallery /> : <DesktopGallery />}
      
      {/* Stack Component CSS */}
      <style>{`
        .stack-container {
          position: relative;
          perspective: 600px;
        }
        .card-rotate {
          position: absolute;
          cursor: grab;
        }
        .card {
          border-radius: 20px;
          border: 5px solid #fff;
          overflow: hidden;
        }
        .card-image {
          pointer-events: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ExpandingGallery;