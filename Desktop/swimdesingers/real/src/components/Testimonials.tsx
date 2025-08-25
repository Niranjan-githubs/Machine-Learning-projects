import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Star, ExternalLink } from 'lucide-react';

const ProjectMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const projectStats = [
    { number: '15+', label: 'Cities Covered', icon: MapPin, color: 'text-blue-600' },
    { number: '50+', label: 'Projects Completed', icon: Star, color: 'text-green-600' },
    { number: '5', label: 'States Served', icon: MapPin, color: 'text-purple-600' }
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.js';
    
    script.onload = () => {
      if (!mapRef.current || typeof (window as any).L === 'undefined') return;
      
      const L = (window as any).L;
      
      // Initialize the map
      const map = L.map(mapRef.current, {
        center: [12.9716, 77.5946],
        zoom: 6,
        zoomControl: true,
        preferCanvas: false,
        minZoom: 4,
        maxZoom: 12,
      });

      // Add tile layer
      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          "attribution": "Data by © <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>.",
          "detectRetina": false,
          "maxNativeZoom": 18,
          "maxZoom": 18,
          "minZoom": 0,
          "noWrap": false,
          "opacity": 1,
          "subdomains": "abc",
          "tms": false
        }
      ).addTo(map);

      // Project locations
      const locations = [
        // Tamil Nadu
        { name: "Chennai", lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
        { name: "Coimbatore", lat: 11.0168, lng: 76.9558, state: "Tamil Nadu" },
        { name: "Madurai", lat: 9.9252, lng: 78.1198, state: "Tamil Nadu" },
        { name: "Trichy", lat: 10.7905, lng: 78.7047, state: "Tamil Nadu" },
        { name: "Tirunelveli", lat: 8.7139, lng: 77.6990, state: "Tamil Nadu" },

        // Andhra Pradesh
        { name: "Chittoor", lat: 13.2172, lng: 79.1003, state: "Andhra Pradesh" },
        { name: "Tirupati", lat: 13.6288, lng: 79.4192, state: "Andhra Pradesh" },
        { name: "Vijayawada", lat: 16.5062, lng: 80.6337, state: "Andhra Pradesh" },

        // Karnataka
        { name: "Bengaluru", lat: 12.9716, lng: 77.5946, state: "Karnataka" },
        { name: "Mysuru", lat: 12.2958, lng: 76.6394, state: "Karnataka" },

        // Kerala
        { name: "Palakkad", lat: 10.7867, lng: 76.6548, state: "Kerala" },
        { name: "Thrissur", lat: 10.5276, lng: 76.2144, state: "Kerala" },
        { name: "Kochi", lat: 9.9312, lng: 76.2711, state: "Kerala" },

        // Andaman
        { name: "Havelock Island", lat: 11.967, lng: 92.981, state: "Andaman & Nicobar" }
      ];

      // Add markers for each location
      locations.forEach((location) => {
        // Create custom icon using logo.png
        const customIcon = L.icon({
          iconUrl: '/logo.png',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40]
        });

        const marker = L.marker([location.lat, location.lng], {
          icon: customIcon
        }).addTo(map);

        // Create popup content
        const popupContent = `
          <div style="text-align: center; padding: 8px;">
            <h3 style="margin: 0 0 4px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
              ${location.name}
            </h3>
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              ${location.state}
            </p>
            <p style="margin: 4px 0 0 0; color: #10b981; font-size: 11px; font-weight: 500;">
              ✓ Project Completed
            </p>
          </div>
        `;

        marker.bindPopup(popupContent);

        // Add tooltip
        marker.bindTooltip(
          `<div style="text-align: center; font-weight: bold; color: #1f2937;">
            ${location.name}
          </div>`,
          { sticky: true }
        );
      });

      // Keep map centered on South India
      const southIndiaBounds = L.latLngBounds([
        [6.0, 72.0], // Southwest corner
        [20.0, 85.0]  // Northeast corner
      ]);

      // Set max bounds to prevent users from scrolling too far away
      map.setMaxBounds(southIndiaBounds);
      
      // Add event listener to reset view when user scrolls too far
      map.on('dragend', function() {
        const currentCenter = map.getCenter();
        const currentBounds = map.getBounds();
        
        // If the map is dragged outside South India bounds, reset to center
        if (!southIndiaBounds.contains(currentCenter) || 
            !southIndiaBounds.contains(currentBounds.getNorthEast()) ||
            !southIndiaBounds.contains(currentBounds.getSouthWest())) {
          
          // Smoothly animate back to South India center
          map.flyTo([12.9716, 77.5946], 6, {
            duration: 1.5,
            easeLinearity: 0.25
          });
        }
      });

      // Add event listener for zoom to prevent zooming out too far
      map.on('zoomend', function() {
        const currentZoom = map.getZoom();
        const currentCenter = map.getCenter();
        
        // If zoomed out too far or moved too far, reset
        if (currentZoom < 4 || !southIndiaBounds.contains(currentCenter)) {
          map.flyTo([12.9716, 77.5946], 6, {
            duration: 1.5,
            easeLinearity: 0.25
          });
        }
      });

      // Add custom CSS for better styling
      const style = document.createElement('style');
      style.textContent = `
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }
        .leaflet-popup-tip {
          background: white !important;
        }
        .leaflet-tooltip {
          background: rgba(255,255,255,0.95) !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
          font-size: 12px !important;
          padding: 4px 8px !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #374151 !important;
          border: 1px solid #e5e7eb !important;
        }
        .leaflet-control-zoom a:hover {
          background: #f9fafb !important;
          color: #1f2937 !important;
        }
        .leaflet-marker-icon {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)) !important;
        }
      `;
      document.head.appendChild(style);
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center py-12 sm:py-16 md:py-20 px-4">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <MapPin className="mr-2" size={14} />
            <span className="text-xs sm:text-sm font-semibold">Our Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">            Our Spread of Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            Successfully completed projects across South India, from bustling cities to serene islands
          </p>
        </div>

        {/* Project Stats */}
        

        {/* Custom Leaflet Map */}
        <div className="w-full mb-4 px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div 
              ref={mapRef}
              className="w-full h-[600px] rounded-xl overflow-hidden"
            />
          </div>
        </div>

       

        {/* CTA Section */}
        <div className="text-center py-12 sm:py-16 px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl max-w-3xl mx-auto border border-blue-200">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to Expand Your Reach?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join our growing list of successful projects across South India and create stunning pool experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center group shadow-xl w-full sm:w-auto"
              >
                <MapPin className="mr-2" size={18} />
                Start Your Project
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMap;