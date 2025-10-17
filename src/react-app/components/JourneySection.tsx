const JourneySection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#07BFFA] via-[#15C2FA] to-[#0496C6] py-20">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=350&fit=crop"
          alt="Left Decoration"
          className="w-80 h-96 object-cover rounded-r-3xl shadow-2xl"
        />
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=350&fit=crop"
          alt="Right Decoration" 
          className="w-80 h-96 object-cover rounded-l-3xl shadow-2xl"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Your Blockchain Journey Starts With{' '}
            <span className="text-black drop-shadow-sm">BlockchainForge</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge blockchain technology? 
            Let's build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <button className="group relative px-8 py-4 bg-white text-[#06ABE0] font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white hover:bg-[#06ABE0] hover:text-white">
              <span className="relative z-10 flex items-center">
                Get a Demo
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </span>
            </button>
            
            <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#06ABE0] transition-all duration-300 shadow-lg">
              <span className="flex items-center">
                View Case Studies
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$100M+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
