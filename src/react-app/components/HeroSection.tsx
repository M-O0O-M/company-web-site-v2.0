import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Metaverse Development",
      image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&h=500&fit=crop",
      description: "Build immersive virtual worlds and experiences"
    },
    {
      title: "AI Development", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop",
      description: "Integrate AI solutions with blockchain technology"
    },
    {
      title: "Web 3.0 Development",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=500&fit=crop",
      description: "Create decentralized applications for the future web"
    },
    {
      title: "DeFi Development",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=500&h=500&fit=crop", 
      description: "Build decentralized financial platforms and protocols"
    },
    {
      title: "Game Development",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367c615c0?w=500&h=500&fit=crop",
      description: "Develop blockchain-based gaming experiences"
    },
    {
      title: "NFT Development",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=500&fit=crop",
      description: "Create unique digital assets and marketplaces"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-white via-blue-50 to-[#0496C6] overflow-hidden pt-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Blockchain Development
              <span className="block text-[#06ABE0]">Company</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              At BlockchainForge, we craft cutting-edge blockchain, AI, Web3, and fintech solutions 
              that help businesses scale faster, trade smarter, and innovate fearlessly. From cryptocurrency 
              exchanges to metaverse ecosystems — we make your boldest ideas a reality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#06ABE0] to-[#0496c6] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0496c6] to-[#06ABE0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
            <button className="px-8 py-4 border-2 border-[#06ABE0] text-[#06ABE0] font-semibold rounded-xl hover:bg-[#06ABE0] hover:text-white transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right Content - Carousel */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full' 
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="relative group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-lg max-w-md">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-[#06ABE0]/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-br from-[#0496c6]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
