import React from "react";

const Partners: React.FC = () => {
  return (
    <div
      id="partners" className="bg-[#1a1a1a] text-white py-12 md:py-16 px-6 md:px-[8%]"
      style={{
        backgroundImage: 'url("/assets/partners/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-20">PARTNERS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-8 md:gap-12 mb-12">
        <img src="/assets/partners/avatar/sandbox.png" alt="Sandbox" className="h-16 md:h-20 lg:h-24 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/minto.png" alt="Minto" className="h-16 md:h-20 lg:h-24 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/crypto_crystal.png" alt="Crypto Crystal" className="h-16 md:h-20 lg:h-24 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/vsw.png" alt="Vsw" className="h-16 md:h-20 lg:h-24 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/super_crypto_man.png" alt="Super Crypto Man" className="h-16 md:h-20 lg:h-24 justify-self-center object-contain" />
      </div>
    </div>
  );
};

export default Partners;
