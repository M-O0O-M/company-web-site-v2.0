import { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const portfolioItems = [
    {
      title: "Cryptocurrency Exchange",
      description: "High-performance trading platform with advanced security features and real-time market data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=500&fit=crop",
      active: true
    },
    {
      title: "Decentralized Finance (DEFI)",
      description: "Comprehensive DeFi protocol with yield farming, staking, and liquidity mining capabilities.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=700&h=500&fit=crop",
      active: false
    },
    {
      title: "NFT Marketplace", 
      description: "Full-featured NFT marketplace with minting, trading, and auction functionalities.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=700&h=500&fit=crop",
      active: false
    },
    {
      title: "OTC Trading",
      description: "Over-the-counter trading platform for large volume cryptocurrency transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&h=500&fit=crop",
      active: false
    },
    {
      title: "MLM Platform",
      description: "Multi-level marketing platform with smart contract automation and transparent rewards.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=700&h=500&fit=crop",
      active: false
    },
    {
      title: "Tokens",
      description: "Custom token development with advanced tokenomics and governance features.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=700&h=500&fit=crop",
      active: false
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our <span className="text-[#06ABE0]">Portfolio,</span> Your Proof of Trust
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portfolio List */}
          <div className="space-y-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-200 p-4 rounded-lg ${
                  index === activeTab 
                    ? 'bg-blue-50 border-l-4 border-[#06ABE0] shadow-md' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-medium transition-colors duration-200 ${
                    index === activeTab 
                      ? 'text-[#06ABE0]' 
                      : 'text-gray-800 group-hover:text-[#06ABE0]'
                  }`}>
                    {item.title}
                  </span>
                  <span className={`text-xl font-semibold transition-all duration-200 ${
                    index === activeTab 
                      ? 'text-[#06ABE0] translate-x-2' 
                      : 'text-[#06ABE0] group-hover:translate-x-1'
                  }`}>
                    →
                  </span>
                </div>
                {index === activeTab && (
                  <p className="text-gray-600 text-sm mt-2 animate-fadeIn">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Portfolio Display */}
          <div className="flex justify-center">
            <div className="relative max-w-lg">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={portfolioItems[activeTab].image}
                  alt={portfolioItems[activeTab].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioItems[activeTab].title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {portfolioItems[activeTab].description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#06ABE0]/20 to-[#0496c6]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#0496c6]/20 to-[#06ABE0]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
