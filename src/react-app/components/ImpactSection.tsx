import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

const ImpactSection = () => {
  const { elementRef, getScrollTransform } = useScrollAnimation();
  const services = [
    {
      title: "Private Blockchain Development",
      description: "Private blockchain development builds secure, permissioned networks where only authorized participants can access, validate, and manage data efficiently.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=120&fit=crop",
      position: "left"
    },
    {
      title: "Blockchain Consulting", 
      description: "Blockchain consulting guides businesses in the strategy, design, and implementation of secure, scalable blockchain solutions to drive growth and innovation.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
      position: "left"
    },
    {
      title: "DeFi & Web3 Applications",
      description: "DeFi & Web3 application development empowers businesses with decentralized, transparent, and user-driven solutions for the future of digital finance and the web.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=120&h=120&fit=crop",
      position: "left"
    },
    {
      title: "Public Blockchain Development",
      description: "Public Blockchain Development creates open, decentralized networks where anyone can access, validate, and transact with full transparency and security.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=120&h=120&fit=crop",
      position: "right"
    },
    {
      title: "Enterprise Blockchain Development",
      description: "Enterprise Blockchain Development builds secure, scalable, and customizable blockchain solutions tailored to streamline business operations and drive efficiency.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop",
      position: "right"
    },
    {
      title: "AI-Powered Blockchain Development",
      description: "AI-powered blockchain development combines artificial intelligence with blockchain to deliver smarter, secure, automated, and future-ready business solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=120&fit=crop",
      position: "right"
    },
    {
      title: "NFT & Token Development",
      description: "NFT & Token Development services help create unique digital assets and crypto tokens with secure, scalable, and customizable blockchain solutions.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=120&h=120&fit=crop",
      position: "bottom"
    },
    {
      title: "Customized Blockchain Development", 
      description: "Customized blockchain development delivers tailored, secure, and scalable solutions built to match your unique business needs, goals, and industry demands.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=120&h=120&fit=crop",
      position: "bottom"
    }
  ];

  const leftServices = services.filter(service => service.position === "left");
  const rightServices = services.filter(service => service.position === "right");
  const bottomServices = services.filter(service => service.position === "bottom");

  return (
    <section ref={elementRef} className="relative bg-white overflow-hidden py-16">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&h=800&fit=crop')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Where </span>
            <span className="text-[#0AA5D8]">We Make an Impact</span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="col-span-3 space-y-12" style={getScrollTransform('left')}>
            {leftServices.map((service, index) => (
              <ServiceCard key={`left-${index}`} service={service} />
            ))}
          </div>

          {/* Center Image */}
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="relative w-full h-96 flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop"
                alt="Blockchain Impact"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06ABE0]/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 space-y-12" style={getScrollTransform('right')}>
            {rightServices.map((service, index) => (
              <ServiceCard key={`right-${index}`} service={service} />
            ))}
          </div>
        </div>

        {/* Bottom Row for Desktop */}
        <div className="hidden lg:flex justify-center mt-16 gap-12">
          {bottomServices.map((service, index) => (
            <ServiceCard key={`bottom-${index}`} service={service} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=300&fit=crop"
              alt="Blockchain Impact"
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={`mobile-${index}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => (
  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer max-w-sm mx-auto">
    <div className="flex justify-center mb-4">
      <img
        src={service.image}
        alt={service.title}
        className="w-16 h-16 object-cover rounded-full shadow-md group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-300"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0AA5D8] transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
      {service.description}
    </p>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0AA5D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

export default ImpactSection;
