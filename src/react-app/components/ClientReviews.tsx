import { useState, useEffect } from 'react';

const ClientReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Chen",
      position: "CEO, TechFinance Solutions",
      company: "TechFinance Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "BlockchainForge delivered an exceptional DeFi platform that exceeded our expectations. Their AI-powered smart contracts have revolutionized our trading operations, resulting in 40% higher efficiency and significantly reduced risks.",
      projectType: "DeFi Platform Development"
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, GameVerse Studios",
      company: "GameVerse Studios", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "The NFT marketplace they built for us is phenomenal. The user experience is seamless, and the blockchain infrastructure can handle massive transaction volumes. Our users love the platform, and we've seen 300% growth in trading volume.",
      projectType: "NFT Marketplace"
    },
    {
      name: "Dr. Emily Watson",
      position: "Director of Innovation, MedChain",
      company: "MedChain",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Their healthcare blockchain solution has transformed how we manage patient data. The security, compliance, and interoperability features are outstanding. BlockchainForge truly understands the complexities of healthcare technology.",
      projectType: "Healthcare Blockchain"
    },
    {
      name: "James Thompson",
      position: "Founder, CryptoExchange Pro",
      company: "CryptoExchange Pro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Working with BlockchainForge was a game-changer. They delivered a high-performance cryptocurrency exchange with advanced security features. The platform handles millions in daily transactions flawlessly, and their ongoing support is exceptional.",
      projectType: "Crypto Exchange"
    },
    {
      name: "Lisa Park",
      position: "VP of Technology, Supply Solutions",
      company: "Supply Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "The supply chain blockchain solution they developed has given us complete transparency and traceability. Our clients can now track products from origin to delivery, which has significantly improved trust and reduced disputes by 60%.",
      projectType: "Supply Chain Solution"
    },
    {
      name: "Robert Kim",
      position: "Managing Director, InvestDAO",
      company: "InvestDAO",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "BlockchainForge created an innovative DAO governance platform that perfectly balances automation with community control. The AI-powered decision-making features have streamlined our operations while maintaining democratic principles.",
      projectType: "DAO Platform"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#06ABE0]/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-[#0496c6]/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#06ABE0]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our blockchain solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            {/* Review Content */}
            <div className="text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                "{reviews[currentReview].review}"
              </blockquote>

              {/* Project Type Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#06ABE0]/10 to-[#0496c6]/10 rounded-full">
                <span className="text-[#06ABE0] font-medium text-sm">
                  {reviews[currentReview].projectType}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 pt-4">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-[#06ABE0] font-medium">
                    {reviews[currentReview].position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {reviews[currentReview].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#06ABE0] hover:bg-[#06ABE0] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#06ABE0] hover:bg-[#06ABE0] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-[#06ABE0] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Client Logos Grid */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
              Trusted by Leading Companies Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {reviews.slice(0, 6).map((review, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-[#06ABE0] to-[#0496c6] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {review.company.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-600 group-hover:text-[#06ABE0] transition-colors">
                    {review.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
