import React from "react";

const News: React.FC = () => {
  return (
    <div id="news" className="text-white">
        <h1 className="text-4xl font-bold text-center ">NEWS</h1>
        <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: 'url("/assets/details/news/background_image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex w-full p-4">
          <div className="hidden md:w-1/2 lg:w-1/3 md:flex justify-center items-center p-4 relative">
            <img src="/assets/details/news/toys.png" alt="Characters" className="w-full" />
            {/* <img src="/assets/details/button.png" alt="button" className="absolute left-1/2 transform -translate-x-1/2 w-24 cursor-pointer" /> */}
          </div>

          <div className="w-full lg:w-2/3 flex justify-center lg:justify-between items-center p-4 md:p-10 xl:py-20 gap-4 lg:gap-8">
            <div className="flex flex-col lg:w-1/2 max-w-[400px] justify-between h-full">
              <div className="flex flex-col">
                <p className="text-sm lg:text-md xl:text-lg mb-4 lg:mb-2 xl:mb-4 font-semibold">
                  MINTO、「ROBLOX」の事業をプロデュースを強化。第1弾として、V-ANGERSを起業し、開発支援サービスを開始
                </p>
                <p className="text-xs lg:text-sm mb-16 lg:mb-4 xl:mb-16 leading-relaxed">
                  株式会社MINTO（本社：東京都渋谷区、代表取締役：矢野和也、以下「当社」）は、V-ANGERS PTE LTD（本社：シンガポール、代表取締役：矢野和也）と提携し、...
                </p>
              </div>
              <div className="flex justify-end">
                <button className="border border-white rounded-full py-2 px-6 text-sm bg-transparent hover:bg-white hover:text-[#B8141B] transition-colors cursor-pointer">
                  全文を見る
                </button>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img src="/assets/details/news/character.png" alt="News Image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
