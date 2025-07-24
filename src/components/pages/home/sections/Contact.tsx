"use client";
import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState(500);

  useEffect(() => {
    const updateIframeHeight = () => {
      if (window.innerWidth < 768) {
        setIframeHeight(700); // Taller height for mobile to show all content
      } else if (window.innerWidth < 1024) {
        setIframeHeight(600); // Medium height for tablet
      } else {
        setIframeHeight(600); // Full height for desktop
      }
    };

    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);
    
    return () => window.removeEventListener('resize', updateIframeHeight);
  }, []);

  return (
    <div
      id="contact"
      className="bg-transparent text-white py-8 md:py-10"
      style={{
        backgroundImage: 'url("/assets/contact/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 px-4">CONTACT</h2>
      
      {/* Company Info and Google Forms side by side */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 md:gap-8 px-4 md:px-10">
        {/* Company Information */}
        <div className="w-full lg:w-2/5 bg-transparent text-white p-4 md:p-6">
          <div className="flex items-end mb-2">
            <h3
              className="font-bold bg-white text-black pl-4 pr-8 py-1 inline-block text-sm md:text-base"
              style={{ clipPath: 'polygon(0% 0%, 75% 0, 100% 100%, 0% 100%)' }}
            >
              COMPANY
            </h3>
            <div className="h-px bg-white flex-grow"></div>
          </div>
          <p className="mb-2 text-sm md:text-base">【会社名】</p>
          <p className="text-2xl md:text-3xl font-bold mb-4">V-RANGERS PTE. LTD.</p>
          <p className="mb-2 text-sm md:text-base">【所在地】</p>
          <p className="text-sm md:text-base">20a Tanjong Pagar Road Singapore 088443</p>
          
          {/* Contact Message */}
          <div className="mt-6 md:mt-8">
            <p className="mb-4 text-sm md:text-base">私たちとコラボレーションをしたい方、お話をしたいという方は、お気軽にご連絡ください。</p>
            <p className="mb-4 text-sm md:text-base">
              <span>お問い合せ または </span>
              <a href="https://twitter.com/voxelrangers" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">
                Twitter
              </a>
            </p>
            <p className="text-xs md:text-sm">
              VoxelRangersでは、ボクセルクリエイター、ゲームクリエイターを募集しています。<br />
              お問い合わせページより、ご自身のことがわかるポートフォリオが見られるURLを添えて、メッセージをお送りください。
            </p>
          </div>
        </div>

        {/* Google Forms Integration */}
        <div className="w-full lg:w-2/5 bg-transparent text-white p-4 md:p-6">
          <div className="flex items-end mb-2">
            <h3
              className="font-bold bg-white text-black pl-4 pr-8 py-1 inline-block text-sm md:text-base"
              style={{ clipPath: 'polygon(0% 0%, 75% 0, 100% 100%, 0% 100%)' }}
            >
              お問合せフォーム
            </h3>
            <div className="h-px bg-white flex-grow"></div>
          </div>

          {/* Google Forms Embedded - Hide security section on mobile */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              {/* Mobile: Hide security section to remove warning banner */}
              <div className="md:hidden absolute top-0 left-0 right-0 h-20 bg-white z-10"></div>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdFU0kMd9fJsfsyYN8z3nheJv5EUR9lmETc5ihiIin8fERqzQ/viewform?embedded=true" 
                width="100%" 
                height={iframeHeight}
                style={{ 
                  border: 'none',
                  borderRadius: '8px',
                  display: 'block'
                }}
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-lg"
                title="Contact Form"
                loading="lazy"
              >
                読み込んでいます…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
