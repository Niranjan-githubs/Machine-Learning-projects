import React, { useState, useEffect } from 'react';
import { ChevronRight, Droplets, Shield, Wrench, Palette, Users, ArrowRight, Waves, Sparkles, Star, Phone, Mail, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  gradient: string;
}

const OurServ = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  const services: Service[] = [
    {
      id: 1,
      title: "Pool Design & Consultation",
      description: "Transform your vision into reality with our expert design consultation and 3D visualization services. We work closely with you to understand your lifestyle, preferences, and budget to create the perfect pool design.",
      features: [
        "Custom 3D pool designs and visualizations",
        "Comprehensive site analysis and planning",
        "Material selection and budget optimization",
        "Professional architectural guidance"
      ],
      image: "/gallery/compressed/outdoor-swimming-pool-hotel-resort-summer-vacation.jpg",
      color: "from-blue-600 to-cyan-500",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Construction & Installation",
      description: "Professional pool construction with premium materials and expert craftsmanship for lasting quality. Our experienced team ensures every detail is perfect, from excavation to final finishing touches.",
      features: [
        "Complete turnkey construction services",
        "Premium materials and quality assurance",
        "Expert timeline management and coordination",
        "Comprehensive warranty coverage"
      ],
      image: "/gallery/compressed/relaxation-pool-umbrella-lounge-sky.jpg",
      color: "from-emerald-600 to-teal-500",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Accessories & Equipment",
      description: "Enhance your pool experience with high-quality accessories and advanced equipment solutions. From lighting to automation, we provide everything you need for the ultimate pool experience.",
      features: [
        "Advanced LED lighting systems",
        "High-efficiency filtration equipment",
        "Smart automation and control systems",
        "Safety features and accessories"
      ],
      image: "/gallery/compressed/white-swimming-water-background-beauty.jpg",
      color: "from-purple-600 to-indigo-500",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 4,
      title: "Waterproofing Solutions",
      description: "Protect your investment with advanced waterproofing techniques and long-lasting protection. Our specialized solutions ensure your pool remains leak-free and structurally sound for years to come.",
      features: [
        "Advanced leak prevention systems",
        "Chemical-resistant protective coatings",
        "Structural integrity protection",
        "Extended warranty coverage"
      ],
      image: "/gallery/compressed/ocean-travel-modern-nobody-infinity.jpg",
      color: "from-orange-600 to-red-500",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      title: "Maintenance & Repairs",
      description: "Keep your pool in pristine condition with our comprehensive maintenance and repair services. Our ongoing support ensures your pool always looks its best and operates at peak performance.",
      features: [
        "Regular maintenance and cleaning services",
        "Emergency repair and troubleshooting",
        "Water treatment and chemical balancing",
        "Equipment servicing and upgrades"
      ],
      image: "/gallery/compressed/hammocks-umbrellas-seen-from-pool.jpg",
      color: "from-pink-600 to-rose-500",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const ServiceSection = ({ service, index }: { service: Service; index: number }) => {
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
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
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
                  src={service.image} 
                  alt={service.title}
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
            Our
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent ml-4">
              Services
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            From initial design to ongoing maintenance, we provide comprehensive swimming pool solutions 
            that exceed your expectations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Pools Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
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
                Ready to Create Your
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent ml-3">
                  Dream Pool?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of satisfied customers who have transformed their outdoor spaces 
                with our premium pool design and construction services.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">+91 91762 03070</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">venienter@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">3564,Rajammal Nagar,TNHB,Ayappakam,Chennai-600077</span>
                </div>
              </div>
              
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
                  className="group bg-gray-100 border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5" />
                    <span>Call Today</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServ;