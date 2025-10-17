import { useState } from 'react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

const WhyAIBlockchain = () => {
  const { elementRef, getScrollTransform } = useScrollAnimation();
  
  const benefits = [
    {
      title: "Low Operational Costs",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&h=120&fit=crop",
      position: "left"
    },
    {
      title: "Personalize user experience", 
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&h=120&fit=crop",
      position: "left"
    },
    {
      title: "Automate decision-making",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=120&fit=crop",
      position: "right"
    },
    {
      title: "Improve security & compliance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=120&h=120&fit=crop", 
      position: "right"
    }
  ];

  return (
    <section ref={elementRef} className="bg-white relative overflow-hidden py-16">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=800&fit=crop')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why use <span className="text-[#06ABE0]">AI</span> in Blockchain Development
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 min-h-[400px] items-center">
          {/* Left Benefits */}
          <div className="col-span-3 space-y-12" style={getScrollTransform('left')}>
            {benefits.filter(b => b.position === "left").map((benefit, index) => (
              <BenefitCard key={`left-${index}`} benefit={benefit} />
            ))}
          </div>

          {/* Center Image */}
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
                alt="Predict risk Before they happen"
                className="w-full h-72 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-center text-gray-900 max-w-xs">
              Predict risk Before they happen
            </h3>
          </div>

          {/* Right Benefits */}
          <div className="col-span-3 space-y-12" style={getScrollTransform('right')}>
            {benefits.filter(b => b.position === "right").map((benefit, index) => (
              <BenefitCard key={`right-${index}`} benefit={benefit} />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
                alt="Predict risk Before they happen"
                className="w-72 h-48 object-cover rounded-2xl shadow-xl mx-auto"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Predict risk Before they happen
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={`mobile-${index}`} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit }: { benefit: any }) => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    
    // Calculate rotation based on mouse position relative to center (360 degrees)
    const rotationValue = ((mouseX - centerX) / (rect.width / 2)) * 360;
    setRotation(rotationValue);
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  return (
    <div 
      className="flex flex-col items-center text-center group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-4 transform group-hover:scale-110 transition-all duration-300">
        <img
          src={benefit.image}
          alt={benefit.title}
          className="w-20 h-20 object-cover rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out, scale 0.3s ease-out'
          }}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#06ABE0] transition-colors duration-300 max-w-[150px] leading-tight">
        {benefit.title}
      </h3>
    </div>
  );
};

export default WhyAIBlockchain;
