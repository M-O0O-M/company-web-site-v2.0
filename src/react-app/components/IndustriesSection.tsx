const IndustriesSection = () => {
  const industries = [
    {
      title: "Fintech",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=320&fit=crop",
      description: "Revolutionary financial technology solutions"
    },
    {
      title: "Artificial Intelligence", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=320&fit=crop",
      description: "AI-powered blockchain innovations"
    },
    {
      title: "eCommerce & Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=320&fit=crop", 
      description: "Next-generation commerce platforms"
    },
    {
      title: "Gaming",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367c615c0?w=400&h=320&fit=crop",
      description: "Blockchain-powered gaming experiences"
    },
    {
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=320&fit=crop",
      description: "Secure healthcare data management"
    },
    {
      title: "Metaverse",
      image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&h=320&fit=crop",
      description: "Immersive virtual world development"
    },
    {
      title: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=320&fit=crop",
      description: "Decentralized learning platforms"
    },
    {
      title: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116493-a029325cfbfa?w=400&h=320&fit=crop",
      description: "Supply chain transparency solutions"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Industries <span className="text-[#06ABE0]">We specialize in</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry }: { industry: any }) => (
  <div 
    className="group relative h-80 bg-cover bg-center rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
    style={{ backgroundImage: `url('${industry.image}')` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#06ABE0] transition-colors duration-300">
          {industry.title}
        </h3>
        <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {industry.description}
        </p>
      </div>
    </div>

    {/* Hover Effect Border */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#06ABE0] rounded-lg transition-all duration-300"></div>
  </div>
);

export default IndustriesSection;
