const WhyChooseUs = () => {
  return (
    <section className="bg-white relative overflow-hidden py-16">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&h=800&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="relative z-10 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span>Why Visionaries </span>
              <span className="text-[#0AA5D8]">Partner with us</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg leading-loose">
                BlockchainForge is a full-service blockchain development company specializing in cryptocurrency exchange scripts, 
                DeFi solutions, NFT platforms, Web3 applications, and AI-powered fintech products. With a team of experienced developers, 
                blockchain architects, designers, and business analysts, we deliver solutions that are innovative, secure, and future-proof.
              </p>
              <p className="text-lg leading-loose">
                We've helped clients across 50+ countries successfully launch platforms that handle millions in transactions — 
                all while ensuring performance, compliance, and user trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
