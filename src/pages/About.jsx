import React from 'react';
import { Link } from 'react-router-dom';
import Team from '../pages/Team.jsx';
import Volunteer from './Volunteer.jsx';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
     
    
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content Section */}
          <div className="space-y-10">
            {/* Section Tag */}
            <div className="relative">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest bg-yellow-100 px-4 py-2 rounded-full">
                  Know About Us
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Empowering{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                    Change
                  </span>
                  
                </span>
                <br />
                Through Community and{' '}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Collaboration
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  At the core of our club is a deep commitment to inspire, empower, and uplift. 
                  We unite passionate individuals eager to learn, collaborate, and raise awareness 
                  about important social issues that impact everyday lives.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through impactful projects, community outreach, and ongoing support, we help 
                  people become more informed and proactive about their well-being. Together, 
                  we foster a vibrant environment where ideas thrive and collective action 
                  sparks real, lasting change.
                </p>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/volunteer">
              <button className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Join Our Community</span>
              </button>
              </Link>
              <Link to="/team">
              <button className="group px-10 py-4 border-3 border-yellow-400 text-yellow-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:border-amber-500 hover:text-amber-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-white hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50">
                Learn More
              </button>
              </Link>
            </div>

            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-yellow-200">
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Active Members
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Communities Served
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            {/* Main Video Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              {/* Gradient Overlay */}
              
              {/* Video Frame */}
              <div className="relative bg-gradient-to-br from-yellow-500 to-amber-500 p-3 rounded-3xl">
                <video 
                  className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-xl"
                  controls 
                  autoPlay 
                  loop 
                  muted
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23fef3c7'/%3E%3Cg fill='%23f59e0b' opacity='0.2'%3E%3Ccircle cx='200' cy='150' r='60'/%3E%3Ccircle cx='600' cy='450' r='80'/%3E%3Cpath d='M300 300 L500 200 L500 400 Z'/%3E%3C/g%3E%3Ctext x='400' y='280' text-anchor='middle' fill='%23f59e0b' font-family='Arial' font-size='28' font-weight='bold'%3ECommunity in Action%3C/text%3E%3Ctext x='400' y='340' text-anchor='middle' fill='%23d97706' font-family='Arial' font-size='16'%3EBuilding a Better Tomorrow%3C/text%3E%3C/svg%3E"
                >
                  <source src="src/assets/vi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay (for better UX) */}
                
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-2 border-yellow-100 hover:border-yellow-200 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Community?
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Inclusive Community</h4>
                <p className="text-gray-600">A welcoming space for everyone to contribute and grow together.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Impactful Action</h4>
                <p className="text-gray-600">Real projects that create meaningful change in our communities.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Continuous Growth</h4>
                <p className="text-gray-600">Opportunities to learn, develop skills, and expand your impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;