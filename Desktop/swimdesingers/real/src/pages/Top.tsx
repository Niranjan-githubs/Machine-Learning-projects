import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Droplets, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const poolTypes = [
    {
    
      name: "Infinity Edge Pools",
      description: "Water flows seamlessly over one or more edges, creating the illusion of merging with the horizon. Perfect for luxury properties with panoramic views, these pools create a stunning visual effect that blends with the surrounding landscape.",
      bestFor: "Luxury resorts, villas, and spaces with panoramic views.",
      features: [
        "Seamless visual integration with surroundings",
        "Precision-engineered edge channels for smooth overflow",
        "Perfect for elevated or coastal properties",
        "Advanced water circulation systems"
      ],
      image: "/Topools/Infinity_edge_pool.jpg"
    },
    {
     
      name: "Rooftop Pools",
      description: "Elevated elegance with city skyline or scenic views. These pools transform rooftops into luxurious retreats, offering a unique perspective and creating an exclusive outdoor living space in urban environments.",
      bestFor: "Hotels, premium apartments, and high-rise residences.",
      features: [
        "Structural reinforcement for rooftop safety",
        "Lightweight yet durable shell construction",
        "Custom lighting and heating options",
        "Integrated drainage and waterproofing systems"
      ],
      image: "/Topools/rooftop-pool.jpg"
    },
    {
     
      name: "Overflow Pools",
      description: "Water surface level with deck edges, producing a mirror-like reflection. These pools create a sophisticated, modern aesthetic with their seamless integration between water and deck surfaces.",
      bestFor: "Premium residential and hospitality projects.",
      features: [
        "Perimeter gutter system for perfect water level",
        "Minimal water disturbance for visual calmness",
        "Adaptable to various shapes and finishes",
        "Advanced filtration and circulation technology"
      ],
      image: "/Topools/Overflow_pool.jpg"
    },
    {
    
      name: "Skimmer Pools",
      description: "Traditional pools with water levels slightly below deck edge. These classic designs offer reliable performance and cost-effective solutions while maintaining elegant aesthetics.",
      bestFor: "Residential homes seeking cost-effective elegance.",
      features: [
        "Skimmer system for easy debris removal",
        "Lower installation and maintenance costs",
        "Flexible in design and size",
        "Proven technology with long-term reliability"
      ],
      image: "/Topools/skimmer_pool.jpg"
    },
    {
     
      name: "Spa Pools & Jacuzzis",
      description: "Compact, heated pools designed for relaxation and therapy. These intimate spaces provide therapeutic benefits and create perfect spots for relaxation and social gatherings.",
      bestFor: "Homes, hotels, and wellness centers.",
      features: [
        "Hydrotherapy jets for massage effect",
        "Custom seating and temperature control",
        "Can be integrated with larger pools",
        "Advanced heating and filtration systems"
      ],
      image: "/Topools/spa & jaccuzi.avif"
    },
    {
   
      name: "Kids Pools",
      description: "Shallow, safe, and colorful for endless fun. These pools are designed with children's safety and enjoyment in mind, creating perfect environments for family recreation.",
      bestFor: "Resorts, schools, and family homes.",
      features: [
        "Safety-first depth and slip-resistant finishes",
        "Fun elements like slides and water toys",
        "Easy-to-clean and maintain",
        "Bright, engaging colors and designs"
      ],
      image: "/Topools/kids.jpg"
    },
    {
  
      name: "Olympic & Semi-Olympic Pools",
      description: "Regulation-sized competition pools built to international standards. These pools are designed for serious swimming, training, and competitive events with precise specifications.",
      bestFor: "Sports complexes, schools, and public facilities.",
      features: [
        "FINA-compliant dimensions and equipment",
        "Lane markings, starting blocks, and depth specifications",
        "Built for durability and high-volume usage",
        "Professional-grade filtration and circulation"
      ],
      image: "/Topools/olympics.jpeg"
    },
    {
    
      name: "Plunge Pools",
      description: "Compact pools perfect for cooling off and relaxation. These space-efficient designs maximize style in minimal spaces, ideal for modern urban living and luxury retreats.",
      bestFor: "Small gardens, courtyards, and luxury spas.",
      features: [
        "Minimal footprint with maximum style",
        "Easy to heat or chill for year-round use",
        "Ideal for quick dips and lounging",
        "Energy-efficient heating and cooling systems"
      ],
      image: "/Topools/plunge_pool.jpg"
    }
  ];

  const PoolTypeSection = ({ pool, index }: { pool: any; index: number }) => {
    const isEven = index % 2 === 0;
    
    return (
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
            {/* Text Content */}
            <div className={`space-y-8 ${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {pool.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {pool.description}
              </p>

              {/* Best For */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Best For:</h3>
                <p className="text-lg text-gray-700 font-medium">
                  {pool.bestFor}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Features:</h3>
                {pool.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700 font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={pool.image} 
                  alt={pool.name}
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleBackToHome}
          className="group bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Types of
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent ml-4">
              Pools
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Luxury Designs, Precision Engineering, and Lasting Beauty. At Swim Designers, we create pools that go beyond function — they are lifestyle statements.
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether you dream of a rooftop oasis, a family-friendly recreation spot, or an Olympic-standard 
            facility, our diverse range of pool types ensures the perfect fit for your space, budget, and vision.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Pool Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Customizable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pool Types Sections */}
      {poolTypes.map((pool, index) => (
        <PoolTypeSection key={index} pool={pool} index={index} />
      ))}

      {/* CTA Section */}
      <div className="relative px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-12 text-center shadow-xl">
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Choose Your
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent ml-3">
                  Perfect Pool
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                From infinity edges to Olympic standards, we have the perfect pool type for your vision. 
                Let us help you choose the ideal design for your space and lifestyle.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
