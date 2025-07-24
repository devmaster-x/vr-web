import React from "react";

const Partners: React.FC = () => {
  return (
    <div
      id="partners" className="bg-[#1a1a1a] text-white py-8 md:py-10 px-4 md:px-[5%]"
      style={{
        backgroundImage: 'url("/assets/partners/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16">PARTNERS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-4 md:gap-8 mb-8">
        <img src="/assets/partners/avatar/sandbox.png" alt="Sandbox" className="h-12 md:h-16 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/minto.png" alt="Minto" className="h-12 md:h-16 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/crypto_crystal.png" alt="Crypto Crystal" className="h-12 md:h-16 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/vsw.png" alt="Vsw" className="h-12 md:h-16 justify-self-center object-contain" />
        <img src="/assets/partners/avatar/super_crypto_man.png" alt="Super Crypto Man" className="h-12 md:h-16 justify-self-center object-contain" />
      </div>
    </div>
  );
};

export default Partners;
