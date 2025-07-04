import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="bg-transparent text-white py-10"
      style={{
        backgroundImage: 'url("/assets/contact/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-center text-4xl font-bold mb-8">CONTACT</h2>
      
      {/* Company Info and Google Forms side by side */}
      <div className="flex flex-wrap justify-center items-start gap-8 px-10">
        {/* Company Information */}
        <div className="w-full md:w-2/5 bg-transparent text-white p-6">
          <div className="flex items-end mb-2">
            <h3
              className="font-bold bg-white text-black pl-4 pr-8 py-1 inline-block"
              style={{ clipPath: 'polygon(0% 0%, 75% 0, 100% 100%, 0% 100%)' }}
            >
              COMPANY
            </h3>
            <div className="h-px bg-white flex-grow"></div>
          </div>
          <p className="mb-2">【会社名】</p>
          <p className="text-3xl font-bold mb-4">V-RANGERS PTE. LTD.</p>
          <p className="mb-2">【所在地】</p>
          <p>20a Tanjong Pagar Road Singapore 088443</p>
          
          {/* Contact Message */}
          <div className="mt-8">
            <p className="mb-4">私たちとコラボレーションをしたい方、お話をしたいという方は、お気軽にご連絡ください。</p>
            <p className="mb-4">
              <span>お問い合せ または </span>
              <a href="https://twitter.com/voxelrangers" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">
                Twitter
              </a>
            </p>
            <p className="text-sm">
              VoxelRangersでは、ボクセルクリエイター、ゲームクリエイターを募集しています。<br />
              お問い合わせページより、ご自身のことがわかるポートフォリオが見られるURLを添えて、メッセージをお送りください。
            </p>
          </div>
        </div>

        {/* Google Forms Integration */}
        <div className="w-full md:w-2/5 bg-transparent text-white p-6">
          <div className="flex items-end mb-2">
            <h3
              className="font-bold bg-white text-black pl-4 pr-8 py-1 inline-block"
              style={{ clipPath: 'polygon(0% 0%, 75% 0, 100% 100%, 0% 100%)' }}
            >
              お問合せフォーム
            </h3>
            <div className="h-px bg-white flex-grow"></div>
          </div>

          {/* Google Forms Embedded */}
          <div className="bg-white rounded-lg overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdFU0kMd9fJsfsyYN8z3nheJv5EUR9lmETc5ihiIin8fERqzQ/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-lg"
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
