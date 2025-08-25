import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const features = [
    {
      title: "A Legacy of Excellence",
      desc: "Over a decade of mastery in pool design and construction, merging technical precision with inspired aesthetics.",
      img: "/portff/compressed/beautiful-luxury-swimming-pool-with-palm-tree.jpg"
    },
    {
      title: "Engineering Mastery",
      desc: "A team of seasoned professionals ensures flawless execution from initial sketch to final splash.",
      img: "/portff/compressed/vertical-high-angle-view-pool-party-sunlight-us.jpg"
    },
    {
      title: "End-to-End Delivery",
      desc: "Full-spectrum services including consultation, design, construction, waterproofing, and filtration.",
      img: "/portff/compressed/swimming-blue-healthy-wet-modern.jpg"
    }
  ];

  const values = [
    "Tailored to You – Every pool reflects its owner's taste and site specifics.",
    "Meticulous Execution – From excavation to finishing touches, quality control is constant.",
    "Long-Term Performance – Backed by strong after-sales support.",
    "Value in Every Drop – Premium outcomes balanced with smart budgeting."
  ];

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleBackToHome}
          className="group bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        
        </button>
      </div>

      {/* Hero with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <img
          src="/portff/compressed/relaxation-pool-umbrella-lounge-sky.jpg"
          alt="Luxury Pool"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight">
            About Swim Designers
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto font-light">
            Crafting pools that redefine luxury, engineering, and lifestyle.
          </p>
        </motion.div>
      </section>

      {/* Our Promise (Split Layout) */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">Our Name, Our Promise</h2>
          <p className="text-xl leading-relaxed font-light">
            At Swim Designers, we look beyond pools—we craft luxurious aquatic
            experiences. With a singular vision in mind, we transform spaces into
            elegant retreats that stand the test of time.
          </p>
        </motion.div>
        <motion.img
          src="/portff/compressed/white-swimming-water-background-beauty.jpg"
          alt="Promise"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Expertise as Image Cards */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-5xl font-bold text-center mb-16">
          Expertise You Can Trust
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">What Defines Us</h2>
        <ul className="grid md:grid-cols-2 gap-10 text-xl font-light">
          {values.map((v, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 border-l-4 border-blue-500 text-left"
            >
              {v}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative py-32 text-center text-white">
        <img
          src="/portff/compressed/vertical-high-angle-view-pool-party-sunlight-us.jpg"
          alt="Dream Pool"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-600/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-6xl font-bold mb-6">
            Ready to Create Your Dream Pool?
          </h2>
          <p className="text-xl mb-10 font-light">
            Let's transform your vision into a stunning aquatic reality that
            becomes the heart of your home.
          </p>
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
            className="px-12 py-4 rounded-full text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
