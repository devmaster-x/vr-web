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
      <div className="flex flex-wrap justify-center items-start gap-8 px-10">
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
        </div>

        <div className="w-full md:w-2/5 bg-transparent text-white p-6">
          <div className="flex items-end mb-2">
            <h3
              className="font-bold bg-white text-black pl-4 pr-8 py-1 inline-block"
              style={{ clipPath: 'polygon(0% 0%, 75% 0, 100% 100%, 0% 100%)' }}
            >
              お問合せ
            </h3>
            <div className="h-px bg-white flex-grow"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">氏名</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">メールアドレス</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">件名</label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">メッセージ本文</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded h-32 bg-white text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-purple-600 text-white rounded cursor-pointer"
            >
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
