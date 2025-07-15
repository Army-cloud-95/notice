import React from 'react';
import kitabi1 from '../assets/kitabiudan1.jpeg';
import kitabi2 from '../assets/kitabi2.jpeg';
import kitabi3 from '../assets/kitabi3.jpeg';
import clean1 from '../assets/clean1.jpeg';
import clean2 from '../assets/clean2.jpeg';

// Import videos
import laborVideo from '../assets/labor.mp4';
import cleanlinessVideo from '../assets/vi.mp4';
import menstrualVideo from '../assets/mesntrual.mp4';

const Project = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
            
            <div className='text-center py-20 px-4 relative overflow-hidden'>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-amber-100/20 backdrop-blur-3xl"></div>
                <div className="relative z-10">
                    <div className="inline-block mb-10">
                        <h1 className="text-6xl md:text-8xl bg-clip-text font-black text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 drop-shadow-2xl mb-6 animate-pulse">
                            Our Projects
                        </h1> 
                        <div className="w-full h-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full shadow-xl animate-pulse"></div>
                    </div>
                    <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-200">
                        <p className="text-gray-800 text-xl leading-relaxed">
                            Ek-Prayass is a youth-led initiative dedicated to creating positive change in society through collective action and compassion. Our mission is to empower communities, support the underprivileged, and drive impactful projects in areas like education, environment, health, and social welfare. Every step we take is a small yet meaningful effort towards building a better, more inclusive world.
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-8 space-x-6">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-5 h-5 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-20 space-y-20">
                
                {/* Kitabi Udan */}
                <div className="group bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="p-8 md:p-12 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                        
                        <div className="text-center mb-10 relative z-10">
                            <div className="inline-block p-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-3xl shadow-lg mb-6">
                                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 mb-4">
                                    Kitabi Udan
                                </h2>
                                <div className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full shadow-md">
                                    <p className="text-2xl font-bold text-yellow-900 italic">
                                        "हर पन्ना नई उड़ान"
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                            <div className="flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <img 
                                        src={kitabi1}
                                        alt="Kitabi Udan poster" 
                                        className="relative w-80 h-64 object-cover rounded-2xl shadow-xl border-4 border-yellow-300 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200">
                                <p className="text-gray-800 text-lg leading-relaxed">
                                    Kitabi Udaan is a heartfelt initiative by Ek-Prayass that embodies the spirit of giving and sustainability. The project collects old and partially used notebooks, carefully selects the unused pages, and creates new notebooks for children in need. With every page, we aim to provide not just paper, but the wings to dream, learn, and grow. True to its motto—"हर पन्ना नई उड़ान"—every page becomes a fresh start and a step towards a brighter future.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-center gap-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <img 
                                    src={kitabi2} 
                                    alt="Kitabi Udan notebook" 
                                    className="relative w-64 h-48 object-cover rounded-2xl shadow-xl border-4 border-yellow-300 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                                />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <img 
                                    src={kitabi3} 
                                    alt="Kitabi Udan seniors" 
                                    className="relative w-64 h-48 object-cover rounded-2xl shadow-xl border-4 border-yellow-300 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Labour's Day */}
                <div className="group bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="p-8 md:p-12 relative">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 transform -translate-x-20 -translate-y-20"></div>
                        
                        <div className="text-center mb-10 relative z-10">
                            <div className="inline-block p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl shadow-lg mb-6">
                                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-4">
                                    Labour's Day
                                </h2>
                                <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto shadow-md"></div>
                            </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200 mb-8">
                            <p className="text-gray-800 text-lg leading-relaxed text-center">
                                Labour Day is a tribute to the hard work, dedication, and resilience of workers across all walks of life. It is a day to recognize and celebrate the invaluable contributions of the workforce that forms the backbone of every society. On this day, we honor the dignity of labor and express gratitude to those whose tireless efforts shape our communities, build our dreams, and drive progress. Let us continue to stand for the rights, respect, and well-being of every worker—today and every day.
                            </p>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-2xl bg-gradient-to-r from-amber-900 to-orange-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300">
                                <div className="aspect-video">
                                    <video
                                        src={laborVideo}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cleanliness Drive */}
                <div className="group bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="p-8 md:p-12 relative">
                        <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 transform translate-x-18 translate-y-18"></div>
                        
                        <div className="text-center mb-10 relative z-10">
                            <div className="inline-block p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl shadow-lg mb-6">
                                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mb-4">
                                    Cleanliness Drive
                                </h2>
                                <div className="inline-block px-8 py-3 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full shadow-md">
                                    <p className="text-xl font-bold text-green-900 italic">
                                        "One step towards cleanliness, every step towards a better tomorrow."
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200 mb-8">
                            <p className="text-gray-800 text-lg leading-relaxed text-center">
                                Let's come together to build a cleaner, healthier, and brighter future. Every small action counts, and every hand makes a difference. Join the cleanliness drive and be the change you wish to see!
                            </p>
                        </div>
                        
                        <div className="flex justify-center mb-8">
                            <div className="relative w-full max-w-2xl bg-gradient-to-r from-green-900 to-emerald-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-300">
                                <div className="aspect-video">
                                    <video
                                        src={cleanlinessVideo}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center gap-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <img 
                                    src={clean1}
                                    alt="Cleanliness Drive 1" 
                                    className="relative w-64 h-48 object-cover rounded-2xl shadow-xl border-4 border-green-300 hover:border-green-400 transition-all duration-300 transform hover:scale-105"
                                />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <img 
                                    src={clean2}
                                    alt="Cleanliness Drive 2" 
                                    className="relative w-64 h-48 object-cover rounded-2xl shadow-xl border-4 border-green-300 hover:border-green-400 transition-all duration-300 transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menstrual Health Awareness */}
                <div className="group bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="p-8 md:p-12 relative">
                        <div className="absolute top-0 left-0 w-44 h-44 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 transform -translate-x-22 -translate-y-22"></div>
                        
                        <div className="text-center mb-10 relative z-10">
                            <div className="inline-block p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl shadow-lg mb-6">
                                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mb-4">
                                    Menstrual Health Awareness
                                </h2>
                                <div className="w-40 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto shadow-md"></div>
                            </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200 mb-8">
                            <p className="text-gray-800 text-lg leading-relaxed text-center">
                                Let's break the silence and end the stigma around periods. Menstrual health is not a taboo—it's a natural and essential part of life. Through education, open conversations, and access to proper hygiene, we can empower individuals, especially young girls, to manage their menstrual health with dignity and confidence. Together, let's create a world where every period is met with understanding, respect, and care.
                            </p>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-lg bg-gradient-to-r from-pink-900 to-rose-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-300">
                                <div className="aspect-video">
                                    <video
                                        src={menstrualVideo}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;
