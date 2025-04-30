import React from "react";

const Works: React.FC = () => {
  // Keep the data for reference, but we won't map over it directly for layout
  const worksData = [
    {
      title: "GRAPHIC DESIGN",
      subtitle: "グラフィックデザイン",
      description: "VOXELRANGERSには、GRAPHIC DESIGNを生業としているクリエイターが複数所属しています。紙媒体からバナーなどなど他にはない、ユニークなデザインをご提案することが可能です。", // Example description, adjust as needed
      bgColor: "bg-[#bdb57e]",
    },
    {
      title: "WEB DESIGN",
      subtitle: "WEBデザイン",
      description: "あなたのブランドを引き立てる、オーダーメイドのWEBデザイン。\n使いやすさと美しさを両立させたWEBサイトを制作します。", // Example description with newline
      bgColor: "bg-[#a67196]",
    },
    {
      title: "VOXEL DESIGN",
      subtitle: "ボクセルデザイン",
      description: "ボクセルデザインとは、ドット絵を立体にしたような3DCGで表現するデザイン手法です。VOXELRANGERSには、優れたボクセルデザイナーが多数所属しているので、その素晴らしい世界観を体感ください。", // Example description
      bgColor: "bg-[#5aa67e]",
    },
    {
      title: "VIDEO PRODUCTION",
      subtitle: "映像制作",
      description: "WEB広告、TV CM、企業紹介ムービーまで幅広く制作いたします。他にはない、インパクトある映像を制作します。", // Example description
      bgColor: "bg-[#d5a176]",
    },
  ];

  // Common style for the outer container of each card
  const cardWrapperStyle = {
    backgroundImage: 'url("/assets/details/about/background_image.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "white",
    minWidth: "600px",
  };

  return (
    <div className="text-black p-8">
      <h1 className="text-5xl font-bold text-center mb-10 text-white">WORKS</h1>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

        {/* --- Card 1: GRAPHIC DESIGN --- */}
        <div className="p-4 pb-0" style={cardWrapperStyle}>
          <div className={`${worksData[0].bgColor} relative text-black p-6 min-h-[350px]`}> {/* Adjusted min-height */}
            {/* Title */}
            <h2 className="text-5xl font-extrabold mb-4">{worksData[0].title}</h2>

            {/* Layout container for subtitle, description, and rectangles */}
            <div className="flex flex-col md:flex-row justify-between min-h-[250px]">
              {/* Left side: Rectangles - Added order-2 md:order-1 */}
              <div className="flex-l flex gap-2 items-end align-bottom order-2 md:order-1 mt-4 md:mt-0"> {/* Added margin-top for small screens */}
                <div className="w-32 h-40 bg-black"></div>
                <div className="flex space-x-2">
                  <div className="w-14 h-20 bg-black"></div>
                  <div className="w-14 h-20 bg-black"></div>
                  <div className="w-14 h-20 bg-black"></div>
                </div>
              </div>

              {/* Right side: Subtitle and Description - Added order-1 md:order-2 */}
              <div className="flex flex-col items-end md:pl-4 order-1 md:order-2"> {/* Align items to the end (right) */}
                {/* Subtitle Badge - Apply clip-path and adjust padding/text color */}
                <div
                  className="bg-black text-[#bdb57e] text-sm font-medium mb-3 self-end pr-4 py-1"
                  style={{ clipPath: 'polygon(0% 50%, 10% 0%, 100% 0%, 100% 100%, 10% 100%)', paddingLeft: '15%' }}
                >
                  {worksData[0].subtitle}
                </div>

                <p className="text-sm text-right max-w-xs">
                  <span className="text-red-600">VOXELRANGERS</span>には、
                  <span className="text-red-600">GRAPHIC DESIGN</span>を
                  <br />

                  生業としているクリエイターが複数所属
                  <br />

                  しています。
                  <span className="text-red-600">紙媒体</span>から
                  <span className="text-red-600">バナー</span>などなど
                  <br />

                  <span className="text-red-600">他</span>にはない、
                  <span className="text-red-600">ユニーク</span>な
                  <span className="text-red-600">デザイン</span>を
                  <br />

                  ご<span className="text-red-600">提案</span>することが可能です。
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-black pl-4 py-2">VOXEL RANGERS</p>
        </div>

        {/* --- Card 2: WEB DESIGN --- */}
        <div className="p-4 pb-0" style={cardWrapperStyle}>
          <div className={`${worksData[1].bgColor} relative text-white p-6 min-h-[350px]`}>
            {/* Title and Subtitle Badge */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-5xl font-extrabold text-white">{worksData[1].title}</h2>
              {/* Subtitle Badge - Apply clip-path style */}
              <div
                className="bg-black text-[#a67196] text-sm font-medium mb-3 self-start pr-4 py-1 mt-1"
                style={{ clipPath: 'polygon(0% 50%, 10% 0%, 100% 0%, 100% 100%, 10% 100%)', paddingLeft: '15%' }}
              >
                {worksData[1].subtitle}
              </div>
            </div>

            {/* Layout container - Added flex-col for small screens */}
            <div className="relative flex flex-col md:flex-row justify-between items-end mt-4 min-h-[250px]"> {/* items-end */}
              {/* Left side: Description - Added order-1 */}
              <div className="flex flex-col gap-8 mb-4 md:mb-0 md:pr-4 w-full md:w-2/3 order-1"> {/* Adjusted width for small screens, added order */}
                {/* Description - White text, handle newlines */}
                <p className="text-sm text-white whitespace-pre-line">
                  あなたの<span className="text-[#fff717]">ブランド</span>を引き立てる、
                  <span className="text-[#fff717]">オーダーメイド</span>のWEBデザイン。
                  <br />

                  <span className="text-[#fff717]">使いやすさ</span>と<span className="text-[#fff717]">美しさ</span>を両立させた
                  <br />

                  WEBサイトを制作します。
                </p>

                <div className="flex space-x-2 items-end"> {/* Row for smaller rectangles */}
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:hidden h-40 bg-black"></div>
                </div>
              </div>

              {/* Right side: Rectangles - Added order-2 and margin for small screens */}
              <div className="flex-l w-full md:w-1/3 h-40 md:block hidden bg-black order-2 mt-4 md:mt-0"> {/* Adjusted width and added margin/order */}
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-black pl-4 py-2">VOXEL RANGERS</p>
        </div>

        {/* --- Card 3: VOXEL DESIGN --- */}
        <div className="p-4 pb-0" style={cardWrapperStyle}>
          <div className={`${worksData[2].bgColor} relative text-white p-6 min-h-[350px]`}>
            {/* Title */}
            <h2 className="text-5xl font-extrabold text-white text-right mb-4">{worksData[2].title}</h2> {/* White title */}

            {/* Layout container - Added flex-col md:flex-row */}
            <div className="relative flex flex-col md:flex-row justify-between mt-4 min-h-[250px]">
              {/* Left side: Rectangles - Added order-2 md:order-1 */}
              <div className="flex mb-4 md:mb-0 gap-2 items-end order-2 md:order-1 mt-4 md:mt-0"> {/* Added margin-top for small screens */}
                <div className="w-32 h-40 bg-black"></div> {/* Large rectangle */}
                <div className="flex space-x-2">
                  <div className="w-14 h-20 bg-black"></div>
                  <div className="w-14 h-20 bg-black"></div>
                  <div className="w-14 h-20 bg-black"></div>
                </div>
              </div>

              {/* Right side: Subtitle and Description - Added order-1 md:order-2 */}
              <div className="flex flex-col items-end md:pl-4 order-1 md:order-2">
                {/* Subtitle Badge - Apply clip-path style */}
                <div
                  className="bg-white text-[#5aa67e] text-sm font-medium mb-3 self-end pr-4 py-1" /* Changed bg/text color */
                  style={{ clipPath: 'polygon(0% 50%, 10% 0%, 100% 0%, 100% 100%, 10% 100%)', paddingLeft: '15%' }}
                >
                  {worksData[2].subtitle}
                </div>
                {/* Description - Black text */}
                <p className="text-sm text-right max-w-xs">
                  <span className="text-[#fff717]">ボクセルデザイン</span>とは、<span className="text-[#fff717]">ドット絵</span>を<span className="text-[#fff717]">立体</span>にしたような<span className="text-[#fff717]">3DCG</span>で<span className="text-[#fff717]">表現</span>するデザイン手法です。<span className="text-[#fff717]">VOXELRANGERS</span>には、優れた<span className="text-[#fff717]">ボクセルデザイナー</span>が多数所属しているので、その素晴らしい<span className="text-[#fff717]">世界観</span>を<span className="text-[#fff717]">体感</span>ください。
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-black pl-4 py-2">VOXEL RANGERS</p>
        </div>

        {/* --- Card 4: VIDEO PRODUCTION --- */}
        <div className="p-4 pb-0" style={cardWrapperStyle}>
          <div className={`${worksData[3].bgColor} relative text-white p-6 min-h-[350px]`}>
            {/* Title */}
            <h2 className="text-5xl text-black font-extrabold mb-4">{worksData[3].title}</h2>

            {/* Layout container - Added flex-col md:flex-row */}
            <div className="flex flex-col md:flex-row items-end mt-4 min-h-[250px]">
              {/* Top Row: Subtitle and Large Rectangle - Added order-1 */}
              <div className="flex flex-col gap-8 mb-4 md:mb-0 md:pr-4 items-start w-full md:w-2/3 order-1"> {/* Adjusted width, added order */}
                {/* Subtitle Badge - Apply clip-path style */}
                <div
                  className="bg-black text-[#d5a176] text-sm font-medium pl-4 py-1" /* Removed mb, adjusted padding */
                  style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)', paddingRight: '15%' }}
                >
                  {worksData[3].subtitle}
                </div>

                <p className="text-sm"> {/* Limit width */}
                  <span className="text-red-600">WEB広告</span>、
                  <span className="text-red-600">TV CM</span>、
                  <span className="text-red-600">企業紹介ムービー</span>まで
                  <span className="text-red-600">幅広く</span>
                  <br />

                  制作いたします。他にはない、
                  <span className="text-red-600">インパクト</span>ある
                  <span className="text-red-600">映像</span>を
                  <br />

                  制作します。
                </p>

                <div className="flex space-x-2 w-full items-end"> {/* Row for smaller rectangles */}
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:w-1/3 h-20 bg-black"></div>
                  <div className="w-1/4 md:hidden h-40 bg-black"></div>
                </div>
              </div>

              {/* Right side: Rectangles - Added order-2 and margin for small screens */}
              <div className="flex-l w-full md:w-1/3 h-40 md:block hidden bg-black order-2 mt-4 md:mt-0"> {/* Adjusted width and added margin/order */}
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-black pl-4 py-2">VOXEL RANGERS</p>
        </div>

      </div>
    </div>
  );
};

export default Works;
