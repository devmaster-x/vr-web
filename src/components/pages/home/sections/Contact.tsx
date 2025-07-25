"use client";
import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState(650);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const updateIframeHeight = () => {
      if (window.innerWidth < 768) {
        // Mobile uses custom form, no iframe needed
        setIframeHeight(650); // Default height for desktop
      } else if (window.innerWidth < 1024) {
        setIframeHeight(600); // Medium height for tablet
      } else {
        setIframeHeight(650); // Full height for desktop
      }
    };

    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);
    
    return () => window.removeEventListener('resize', updateIframeHeight);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    // You can redirect to Google Forms or send to your backend
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFU0kMd9fJsfsyYN8z3nheJv5EUR9lmETc5ihiIin8fERqzQ/viewform?usp=pp_url&entry.1234567890=' + encodeURIComponent(formData.name) + '&entry.0987654321=' + encodeURIComponent(formData.email) + '&entry.1122334455=' + encodeURIComponent(formData.subject) + '&entry.5566778899=' + encodeURIComponent(formData.message), '_blank');
  };

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

        {/* Form Section */}
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

          {/* Mobile Custom Form */}
          <div className="md:hidden bg-white rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="お名前を入力してください"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  件名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="件名を入力してください"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="メッセージを入力してください"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#760069] to-[#9d4edd] text-white py-3 px-6 rounded-lg font-bold hover:from-[#5a004f] hover:to-[#7c3aed] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                送信する
              </button>
            </form>
          </div>

          {/* Desktop Google Forms */}
          <div className="hidden md:block bg-white rounded-lg overflow-hidden shadow-lg">
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
  );
};

export default Contact;
