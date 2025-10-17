import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

const AIInnovationSection = () => {
  const { elementRef, getScrollTransform } = useScrollAnimation();
  const innovations = [
    {
      title: "Smart Contract Development",
      description: "Secure, automated smart contracts that execute transactions and agreements with complete transparency and immutable record-keeping.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "DeFi Protocol Development",
      description: "Comprehensive decentralized finance solutions including yield farming, liquidity pools, staking platforms, and automated market makers.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Multi-Chain Integration",
      description: "Cross-chain compatibility solutions that enable seamless asset transfers and interactions across multiple blockchain networks.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V9A3,3 0 0,1 12,12A3,3 0 0,1 9,9V5A3,3 0 0,1 12,2M12,14A7,7 0 0,1 19,21H5A7,7 0 0,1 12,14Z"/>
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Enterprise Blockchain Solutions",
      description: "Scalable blockchain infrastructure designed for enterprise needs with enhanced security, compliance, and performance optimization.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      ),
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section ref={elementRef} className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#06ABE0]/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#0496c6]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Next-Generation <span className="text-[#06ABE0]">Blockchain Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge blockchain technology with our comprehensive development services. 
            We build secure, scalable, and innovative solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {innovations.map((innovation, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#06ABE0]/30 transform hover:-translate-y-2"
              style={getScrollTransform(index % 2 === 0 ? 'left' : 'right', 0.5)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${innovation.gradient} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">
                    {innovation.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#06ABE0] transition-colors duration-300">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {innovation.description}
                </p>
                
                {/* CTA */}
                <div className="pt-2">
                  <button className="inline-flex items-center text-[#06ABE0] font-semibold hover:text-[#0496c6] transition-colors duration-300 group/btn">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06ABE0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Build Your Blockchain Solution?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#06ABE0] to-[#0496c6] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-[#06ABE0] text-[#06ABE0] font-semibold rounded-xl hover:bg-[#06ABE0] hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationSection;
