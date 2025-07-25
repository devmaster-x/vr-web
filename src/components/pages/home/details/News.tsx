import React from "react";

const News: React.FC = () => {
  return (
    <div id="news" className="text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">NEWS</h1>
        <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: 'url("/assets/details/news/background_image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col lg:flex-row w-full p-4 md:p-6">
          {/* Toys Image - Now visible on all screens */}
          <div className="flex w-full lg:w-1/2 xl:w-1/3 justify-center items-center p-4 relative mb-6 lg:mb-0">
            <img src="/assets/details/news/toys.png" alt="Characters" className="w-full max-w-xs hidden md:block md:max-w-md" />
            {/* <img src="/assets/details/button.png" alt="button" className="absolute left-1/2 transform -translate-x-1/2 w-24 cursor-pointer" /> */}
          </div>

          <div className="w-full flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 xl:py-20 gap-4 lg:gap-8">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <p className="text-sm md:text-base lg:text-lg mb-4 lg:mb-2 xl:mb-4 font-semibold leading-relaxed">
                MINTOとV-RANGERS「ROBLOX」の開発支援サービスを開始<br />(Aug 27, 2024)<br /><br />
                MINTOとV-RANGERS、The Sandbox に JR九州｢九州鉄道ランド｣公開！<br />(Jul 1, 2024)<br /><br />
                The SandboxとV-Rangers、アバター開発支援サービスを開始<br />(Mar 12, 2023)
                </p>
                {/* <p className="text-xs md:text-sm lg:text-base mb-8 lg:mb-4 xl:mb-16 leading-relaxed">
                  株式会社MINTO（本社：東京都渋谷区、代表取締役：矢野和也、以下「当社」）は、V-ANGERS PTE LTD（本社：シンガポール、代表取締役：矢野和也）と提携し、...
                </p> */}
              </div>
              {/* <div className="flex justify-center lg:justify-end">
                <button className="border border-white rounded-full py-2 px-4 md:px-6 text-sm bg-transparent hover:bg-white hover:text-[#B8141B] transition-colors cursor-pointer">
                  全文を見る
                </button>
              </div> */}
            </div>
            {/* Character Image - Now visible on all screens */}
            {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src="/assets/details/news/character.png" alt="News Image" className="w-full max-w-xs md:max-w-md lg:max-w-none h-auto" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
