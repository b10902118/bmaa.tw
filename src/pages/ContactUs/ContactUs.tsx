import React from "react";
import Title from "../../components/Title";

const ContactUs: React.FC = () => {
  return (
    <>
      <Title title="聯絡我們" color="orange" />
      <div className="min-h-screen bg-[#f9f5f2] font-['Lora',_serif] text-[#64686d] selection:bg-[#f75691] selection:text-white">
        {/* LINE Info Section */}
        <section className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
          <div className="mx-auto max-w-[816px] px-6 py-12 text-center">
            <h3 className="mb-5 text-[35px] font-extrabold leading-tight text-[#050505]">
              我們的官方line帳號
            </h3>
            <p className="mb-5 text-[20px]">ID: @551ybjav</p>
            <div className="flex justify-center">
              <img
                src="/assets/image/line官方帳號-QRcode.png"
                alt="LINE QR Code"
                className="h-auto w-[300px] max-w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
          <div className="mx-auto max-w-[816px] px-6 pb-32">
            <div className="rounded-lg bg-transparent p-2">
              <h4 className="mb-6 text-xl font-medium">Contact Me</h4>
              <p className="mb-8 text-sm">
                標有 <span className="text-[#e80000]">*</span> 為必填欄位
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-[18px] font-bold text-[#332F2F] lg:text-left">
                    您的大名 <span className="text-[#e80000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[50px] w-full border border-[#c4c4c4] bg-[#f7f7f7] p-3 text-[16px] transition-all duration-500 focus:border-[#919191] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* City Field */}
                <div>
                  <label className="mb-2 block text-[18px] font-bold text-[#332F2F] lg:text-left">
                    居住城市 <span className="text-[#e80000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[50px] w-full border border-[#c4c4c4] bg-[#f7f7f7] p-3 text-[16px] transition-all duration-500 focus:border-[#919191] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-[18px] font-bold text-[#332F2F] lg:text-left">
                    您的信箱 <span className="text-[#e80000]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="h-[50px] w-full border border-[#c4c4c4] bg-[#f7f7f7] p-3 text-[16px] transition-all duration-500 focus:border-[#919191] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="mb-2 block text-[18px] font-bold text-[#332F2F] lg:text-left">
                    訊息 <span className="text-[#e80000]">*</span>
                  </label>
                  <textarea
                    required
                    className="h-[200px] w-full resize-none border border-[#c4c4c4] bg-[#f7f7f7] p-3 text-[16px] transition-all duration-500 focus:border-[#919191] focus:bg-white focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative h-[50px] w-[130px] cursor-pointer rounded-[30px] border border-[#6B705CDE] bg-transparent text-[16px] font-medium text-black transition-all duration-500 hover:bg-[#6B705CDE] hover:text-white focus:bg-white focus:text-[#64686d] focus:outline-none active:border-[#aaa]"
                  >
                    提交
                  </button>
                </div>

                {/* Honeypot for bots (hidden) */}
                <div
                  className="absolute h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="hp_field">
                    如果您不是機器人而且看得到此欄位，請留白。
                  </label>
                  <input type="text" id="hp_field" name="hp_field" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
