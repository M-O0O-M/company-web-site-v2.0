const Footer = () => {
  const services = [
    { name: "Binance Clone Script", href: "#" },
    { name: "Cryptocurrency Exchange Script", href: "#" },
    { name: "Pancakeswap Clone Script", href: "#" },
    { name: "Opensea Clone Script", href: "#" },
    { name: "P2P Crypto Exchange Script", href: "#" },
    { name: "CoinPayments Clone Script", href: "#" }
  ];

  const nftSolutions = [
    { name: "NFT Marketplace Development", href: "#" },
    { name: "NFT Game Development", href: "#" },
    { name: "NFT Art Marketplace Development", href: "#" },
    { name: "Real Estate NFT Marketplace", href: "#" },
    { name: "Game Development", href: "#" },
    { name: "Web3 Game Development", href: "#" }
  ];

  const defiSolutions = [
    { name: "DeFi Yield Farming Development", href: "#" },
    { name: "DeFi Dapp Development", href: "#" },
    { name: "DeFi Development", href: "#" },
    { name: "DeFi Staking Platform", href: "#" },
    { name: "DeFi Lending and Borrowing", href: "#" }
  ];

  const exchangeSolutions = [
    { name: "Centralized Exchange Development", href: "#" },
    { name: "Crypto Derivatives Exchange", href: "#" },
    { name: "Crypto Trading Bot Development", href: "#" },
    { name: "Cryptocurrency Exchange Development", href: "#" },
    { name: "P2P Crypto Exchange Development", href: "#" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Company Info */}
          <div className="flex flex-col justify-between items-start gap-8 w-full lg:w-[30%]">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#07BFFA] to-[#0496c6] rounded-lg flex items-center justify-center mr-3">
                <div className="text-white font-bold text-xl">B</div>
              </div>
              <span className="text-2xl font-bold text-gray-900">BlockchainForge</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">About Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                BlockchainForge is an exclusive blockchain and cryptocurrency development company that offers 
                instant and complete crypto solutions to kickstart your business.
              </p>
            </div>

            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-gray-800">Contact us</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#06ABE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  <span className="text-gray-600 group-hover:text-[#06ABE0] transition-all duration-300">
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </span>
                </div>

                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#06ABE0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    <path d="M11.893 8.334c-.144-.307-.295-.312-.431-.317-.112-.004-.239-.004-.367-.004-.127 0-.334.048-.51.239-.175.191-.669.652-.669 1.592s.685 1.846.78 1.973c.096.127 1.354 2.066 3.283 2.896.459.197.817.315 1.097.403.46.147.88.126 1.212.076.37-.055 1.143-.467 1.304-.918.161-.452.161-.84.113-.918-.049-.078-.175-.127-.367-.223-.191-.095-1.143-.563-1.321-.627-.177-.064-.307-.095-.431.096-.127.191-.494.627-.606.755-.112.127-.223.143-.414.048-.191-.096-.809-.298-1.540-.951-.569-.508-.953-1.137-.1.048-.191-.096-.809-.298-1.540-.951-.569-.508-.953-1.137-1.066-1.328-.112-.191-.012-.294.084-.39.086-.087.191-.223.287-.335.096-.112.127-.191.191-.318.064-.127.032-.239-.016-.335-.048-.096-.431-1.038-.591-1.422z"/>
                  </svg>
                  <span className="text-gray-600 group-hover:text-[#06ABE0] transition-all duration-300">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+1 (234) 567-890</a>
                  </span>
                </div>

                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#06ABE0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0,4 C0,2.895431 0.895431,2 2,2 L14,2 C15.1046,2 16,2.895431 16,4 L16,12 C16,13.1046 15.1046,14 14,14 L2,14 C0.895431,14 0,13.1046 0,12 L0,4 Z M2,4 L14,4 L14,4.0077 L8.00395,7.46952 L2,4.00315 L2,4 Z M2,6.31255 L2,12 L14,12 L14,6.3171 L8.00395,9.77893 L2,6.31255 Z"/>
                  </svg>
                  <span className="text-gray-600 group-hover:text-[#06ABE0] transition-all duration-300">
                    <a href="mailto:info@blockchainforge.com">info@blockchainforge.com</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#06ABE0] text-white transition-all duration-300 hover:shadow-lg hover:bg-white group"
                >
                  <span className="group-hover:text-[#06ABE0] transition-all duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col justify-start gap-8 w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Clone Scripts</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a 
                        className="text-gray-600 hover:text-[#06ABE0] transition-colors text-sm"
                        href={service.href}
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">NFT Solutions</h3>
                <ul className="space-y-2">
                  {nftSolutions.map((solution, index) => (
                    <li key={index}>
                      <a 
                        className="text-gray-600 hover:text-[#06ABE0] transition-colors text-sm"
                        href={solution.href}
                      >
                        {solution.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">DeFi Solutions</h3>
                <ul className="space-y-2">
                  {defiSolutions.map((solution, index) => (
                    <li key={index}>
                      <a 
                        className="text-gray-600 hover:text-[#06ABE0] transition-colors text-sm"
                        href={solution.href}
                      >
                        {solution.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Crypto Exchange Solutions</h3>
                <ul className="space-y-2">
                  {exchangeSolutions.map((solution, index) => (
                    <li key={index}>
                      <a 
                        className="text-gray-600 hover:text-[#06ABE0] transition-colors text-sm"
                        href={solution.href}
                      >
                        {solution.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            Copyrights© 2025 BlockchainForge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
